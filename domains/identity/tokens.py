"""JWT Token Service for Access and Refresh Token Lifecycle.

Adheres to Constitution:
- §8: Identity & Access Management (Role-embedded claims).
- §28: Cryptographic Standards (HS256 / configurable algorithm).
- §29: Authentication Security (Short-lived access tokens, refresh token separation).
"""

from __future__ import annotations

import uuid
from datetime import UTC, datetime, timedelta
from enum import StrEnum
from typing import Any

from jose import JWTError, jwt

from services.api.config import get_settings


class TokenType(StrEnum):
    """Token classification distinguishing session scope."""

    ACCESS = "access"
    REFRESH = "refresh"


class TokenError(Exception):
    """Base exception for JWT validation failures."""

    pass


class TokenExpiredError(TokenError):
    """Raised when the token timestamp has passed its expiration window."""

    pass


class InvalidTokenError(TokenError):
    """Raised when token signature, claims, or payload is malformed."""

    pass


def create_jwt_token(
    subject: str | uuid.UUID,
    token_type: TokenType,
    expires_delta: timedelta,
    additional_claims: dict[str, Any] | None = None,
) -> str:
    """Generates an encrypted JWT token with standard subject, expiration, and type claims."""
    settings = get_settings()
    now = datetime.now(UTC)
    expire = now + expires_delta

    payload: dict[str, Any] = {
        "sub": str(subject),
        "type": token_type.value,
        "iat": int(now.timestamp()),
        "exp": int(expire.timestamp()),
        "jti": str(uuid.uuid4()),
    }

    if additional_claims:
        payload.update(additional_claims)

    return jwt.encode(payload, settings.secret_key, algorithm=settings.algorithm)


def create_access_token(
    user_id: uuid.UUID,
    role: str,
    expires_minutes: int | None = None,
) -> str:
    """Creates a short-lived access token with role authorization claims."""
    settings = get_settings()
    minutes = expires_minutes or settings.access_token_expire_minutes
    return create_jwt_token(
        subject=user_id,
        token_type=TokenType.ACCESS,
        expires_delta=timedelta(minutes=minutes),
        additional_claims={"role": role},
    )


def create_refresh_token(
    user_id: uuid.UUID,
    expires_days: int | None = None,
) -> str:
    """Creates a longer-lived refresh token for credential rotation."""
    settings = get_settings()
    days = expires_days or settings.refresh_token_expire_days
    return create_jwt_token(
        subject=user_id,
        token_type=TokenType.REFRESH,
        expires_delta=timedelta(days=days),
    )


def decode_jwt_token(token: str) -> dict[str, Any]:
    """Decodes and cryptographically verifies a JWT token.

    Raises:
        TokenExpiredError: If token expiration (exp) has passed.
        InvalidTokenError: If signature, format, or required claims are invalid.
    """
    settings = get_settings()
    try:
        payload = jwt.decode(
            token,
            settings.secret_key,
            algorithms=[settings.algorithm],
        )
    except jwt.ExpiredSignatureError as err:
        raise TokenExpiredError("Token signature has expired.") from err
    except JWTError as err:
        raise InvalidTokenError("Could not validate token credentials.") from err

    if "sub" not in payload or "type" not in payload:
        raise InvalidTokenError("Token payload missing required claims.")

    return payload
