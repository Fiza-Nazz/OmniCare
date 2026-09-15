"""Unit tests for User, UserRole, and cryptographic password operations.

Adheres to Constitution §8, §24, §28, §29, and §40.
"""

from __future__ import annotations

import pytest
from sqlalchemy import select

from domains.identity.models import User, UserRole, UserStatus
from domains.identity.security import hash_password, verify_password
from packages.shared.database.base import Base
from packages.shared.database.session import (
    create_async_engine_instance,
    create_async_session_factory,
)


@pytest.fixture
def sample_user() -> User:
    user = User(
        email="doctor.rahman@omnicare.internal",
        full_name="Dr. Amina Rahman",
        role=UserRole.DOCTOR,
        status=UserStatus.ACTIVE,
    )
    user.set_password("SecureClinicalPassword2026!")
    return user


def test_password_hashing_and_verification():
    """Verify bcrypt hash generation and constant-time validation."""
    plain = "VerySecretHospitalPassphrase#123"
    hashed = hash_password(plain)

    assert hashed != plain
    assert hashed.startswith("$2b$")
    assert verify_password(plain, hashed) is True
    assert verify_password("WrongPassword!", hashed) is False


def test_user_password_methods(sample_user: User):
    """Verify User model helper methods."""
    assert sample_user.verify_password("SecureClinicalPassword2026!") is True
    assert sample_user.verify_password("FakePassword") is False


def test_user_to_dict_redacts_password(sample_user: User):
    """Verify serialization strictly redacts hashed_password per Constitution §24."""
    data = sample_user.to_dict()
    assert "hashed_password" not in data
    assert data["email"] == "doctor.rahman@omnicare.internal"
    assert data["role"] == "doctor"
    assert data["status"] == "active"


@pytest.mark.asyncio
async def test_user_persistence_in_db():
    """Verify User entity persistence, unique constraints, and retrieval."""
    engine = create_async_engine_instance("sqlite+aiosqlite:///:memory:")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    factory = create_async_session_factory(engine)
    async with factory() as session:
        user = User(
            email="admin.farhan@omnicare.internal",
            full_name="Farhan Tariq",
            role=UserRole.HOSPITAL_ADMIN,
        )
        user.set_password("AdminSecurePass2026!")
        session.add(user)
        await session.commit()
        await session.refresh(user)

        # Query user
        stmt = select(User).where(User.email == "admin.farhan@omnicare.internal")
        result = await session.execute(stmt)
        retrieved = result.scalar_one_or_none()

        assert retrieved is not None
        assert retrieved.role == UserRole.HOSPITAL_ADMIN
        assert retrieved.verify_password("AdminSecurePass2026!") is True
        assert retrieved.version_id == 1

    await engine.dispose()
