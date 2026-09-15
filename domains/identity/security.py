"""Cryptographic password hashing and verification primitives using direct bcrypt.

Adheres to Constitution §28 (Encryption) and §29 (Authentication Security).
"""

from __future__ import annotations

import bcrypt


def hash_password(plain_password: str) -> str:
    """Securely hashes a plaintext password using bcrypt with automatic salt."""
    salt = bcrypt.gensalt(rounds=12)
    return bcrypt.hashpw(plain_password.encode("utf-8"), salt).decode("utf-8")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifies a plaintext password against a stored bcrypt hash in constant time."""
    try:
        return bcrypt.checkpw(
            plain_password.encode("utf-8"),
            hashed_password.encode("utf-8"),
        )
    except Exception:
        return False
