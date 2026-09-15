"""Unit tests for JWT Token Service.

Adheres to Constitution §8, §28, §29, and §40.
"""

from __future__ import annotations

import uuid
from datetime import timedelta

import pytest
from jose import jwt

from domains.identity.tokens import (
    InvalidTokenError,
    TokenExpiredError,
    TokenType,
    create_access_token,
    create_jwt_token,
    create_refresh_token,
    decode_jwt_token,
)
from services.api.config import get_settings


def test_create_and_decode_access_token():
    """Verify access token creation contains sub, role, and access type."""
    user_id = uuid.uuid4()
    token = create_access_token(user_id=user_id, role="doctor")

    payload = decode_jwt_token(token)
    assert payload["sub"] == str(user_id)
    assert payload["role"] == "doctor"
    assert payload["type"] == TokenType.ACCESS.value
    assert "jti" in payload
    assert "exp" in payload


def test_create_and_decode_refresh_token():
    """Verify refresh token creation contains refresh type."""
    user_id = uuid.uuid4()
    token = create_refresh_token(user_id=user_id)

    payload = decode_jwt_token(token)
    assert payload["sub"] == str(user_id)
    assert payload["type"] == TokenType.REFRESH.value
    assert "role" not in payload  # Refresh tokens do not carry authorization role scopes


def test_expired_token_raises_exception():
    """Verify token validation fails when expiration has passed."""
    user_id = uuid.uuid4()
    expired_token = create_jwt_token(
        subject=user_id,
        token_type=TokenType.ACCESS,
        expires_delta=timedelta(seconds=-10),  # Already expired in the past
    )

    with pytest.raises(TokenExpiredError):
        decode_jwt_token(expired_token)


def test_invalid_signature_raises_exception():
    """Verify token signed with an unauthorized secret key is rejected."""
    settings = get_settings()
    user_id = uuid.uuid4()
    fake_token = jwt.encode(
        {"sub": str(user_id), "type": "access"},
        "wrong_unauthorized_attacker_key_value!",
        algorithm=settings.algorithm,
    )

    with pytest.raises(InvalidTokenError):
        decode_jwt_token(fake_token)


def test_missing_claims_raises_exception():
    """Verify token missing sub or type claims is rejected."""
    settings = get_settings()
    malformed_token = jwt.encode(
        {"email": "anonymous@test.com"},
        settings.secret_key,
        algorithm=settings.algorithm,
    )

    with pytest.raises(InvalidTokenError):
        decode_jwt_token(malformed_token)
