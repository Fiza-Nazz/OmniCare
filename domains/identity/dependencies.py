"""Server-Side Role-Based Access Control (RBAC) and User Authentication Dependencies.

Adheres to Constitution:
- §8: Identity & Access Management (Server-side explicit RBAC).
- §29: Authentication Security (Active status enforcement, token validation).
- §30: API Security (Never trust client-provided claims without verification).
"""

from __future__ import annotations

import uuid
from collections.abc import Callable
from typing import Annotated

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from domains.identity.models import User, UserRole, UserStatus
from domains.identity.tokens import (
    InvalidTokenError,
    TokenExpiredError,
    TokenType,
    decode_jwt_token,
)
from packages.shared.database.session import get_async_session

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/api/v1/auth/login",
    auto_error=True,
)


async def get_current_user(
    token: Annotated[str, Depends(oauth2_scheme)],
    session: Annotated[AsyncSession, Depends(get_async_session)],
) -> User:
    """Decodes access token, validates claims, and retrieves the active user entity.

    Raises:
        HTTPException(401): If token is expired, invalid, or user record not found.
        HTTPException(403): If user account is suspended or pending verification.
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials.",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = decode_jwt_token(token)
    except TokenExpiredError as err:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session has expired. Please re-authenticate.",
            headers={"WWW-Authenticate": "Bearer"},
        ) from err
    except InvalidTokenError as err:
        raise credentials_exception from err

    # Ensure token is scoped for API access (not a refresh token)
    if payload.get("type") != TokenType.ACCESS.value:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token scope for authorization.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    user_id_str = payload.get("sub")
    if not user_id_str:
        raise credentials_exception

    try:
        user_uuid = uuid.UUID(user_id_str)
    except (ValueError, TypeError) as err:
        raise credentials_exception from err

    # Query persistent user record
    stmt = select(User).where(User.id == user_uuid)
    result = await session.execute(stmt)
    user = result.scalar_one_or_none()

    if user is None:
        raise credentials_exception

    if user.status != UserStatus.ACTIVE:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Account is {user.status.value}. Access denied.",
        )

    return user


def require_roles(*allowed_roles: UserRole) -> Callable[[User], User]:
    """Dependency factory enforcing explicit server-side role membership.

    Example:
        @router.get("/clinical/records", dependencies=[Depends(require_roles(UserRole.DOCTOR, UserRole.NURSE))])
    """

    def role_checker(
        current_user: Annotated[User, Depends(get_current_user)],
    ) -> User:
        if current_user.role not in allowed_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=(
                    f"Access forbidden: Role '{current_user.role.value}' is not authorized "
                    f"to perform this operation."
                ),
            )
        return current_user

    return role_checker
