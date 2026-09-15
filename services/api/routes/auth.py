"""OmniCare Authentication API Router — Login, Logout, Token Refresh.

Adheres to Constitution §8, §29, §30, and §37 (API Versioning).
"""

from __future__ import annotations

from datetime import UTC, datetime
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from domains.identity.models import User
from domains.identity.tokens import (
    InvalidTokenError,
    TokenExpiredError,
    TokenType,
    create_access_token,
    create_refresh_token,
    decode_jwt_token,
)
from packages.shared.database.session import get_async_session

router = APIRouter(prefix="/api/v1/auth", tags=["Authentication"])


class TokenResponse(BaseModel):
    """Access and refresh token response payload."""

    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class RefreshRequest(BaseModel):
    """Refresh token request payload."""

    refresh_token: str


@router.post(
    "/login",
    response_model=TokenResponse,
    summary="Authenticate and obtain access + refresh tokens",
    status_code=status.HTTP_200_OK,
)
async def login(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    session: Annotated[AsyncSession, Depends(get_async_session)],
) -> TokenResponse:
    """Authenticates credentials and issues short-lived access and refresh tokens.

    Deliberately returns generic 401 to prevent account enumeration (Constitution §29).
    """
    invalid_creds = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials.",
        headers={"WWW-Authenticate": "Bearer"},
    )

    stmt = select(User).where(User.email == form_data.username.lower().strip())
    result = await session.execute(stmt)
    user = result.scalar_one_or_none()

    if user is None or not user.verify_password(form_data.password):
        raise invalid_creds

    if user.status.value != "active":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Account access is restricted.",
        )

    # Update last login timestamp
    user.last_login_at = datetime.now(UTC)
    await session.commit()

    return TokenResponse(
        access_token=create_access_token(user_id=user.id, role=user.role.value),
        refresh_token=create_refresh_token(user_id=user.id),
    )


@router.post(
    "/refresh",
    response_model=TokenResponse,
    summary="Exchange refresh token for new access token",
    status_code=status.HTTP_200_OK,
)
async def refresh_tokens(
    payload: RefreshRequest,
    session: Annotated[AsyncSession, Depends(get_async_session)],
) -> TokenResponse:
    """Validates a refresh token and issues new access and refresh token pair."""
    try:
        claims = decode_jwt_token(payload.refresh_token)
    except TokenExpiredError as err:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Refresh token has expired. Please login again.",
        ) from err
    except InvalidTokenError as err:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token.",
        ) from err

    if claims.get("type") != TokenType.REFRESH.value:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token type for refresh operation.",
        )

    stmt = select(User).where(User.id == claims["sub"])
    result = await session.execute(stmt)
    user = result.scalar_one_or_none()

    if user is None or user.status.value != "active":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User account not found or inactive.",
        )

    return TokenResponse(
        access_token=create_access_token(user_id=user.id, role=user.role.value),
        refresh_token=create_refresh_token(user_id=user.id),
    )


@router.post(
    "/logout",
    summary="Invalidate current session",
    status_code=status.HTTP_204_NO_CONTENT,
)
async def logout() -> None:
    """Instructs the client to discard tokens.

    Note: Full server-side token revocation requires a Redis-backed denylist
    which will be implemented in the token revocation PR.
    """
    return
