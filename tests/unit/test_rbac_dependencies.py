"""Unit tests for Server-Side RBAC Dependencies.

Adheres to Constitution §8 (Identity & Access Management) and §40 (Testing Constitution).
"""

from __future__ import annotations

import uuid

import pytest
import pytest_asyncio
from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from domains.identity.dependencies import get_current_user, require_roles
from domains.identity.models import User, UserRole, UserStatus
from domains.identity.tokens import create_access_token, create_refresh_token
from packages.shared.database.base import Base
from packages.shared.database.session import (
    create_async_engine_instance,
    create_async_session_factory,
)


@pytest_asyncio.fixture
async def rbac_session():
    """Provides an isolated in-memory test session."""
    engine = create_async_engine_instance("sqlite+aiosqlite:///:memory:")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    factory = create_async_session_factory(engine)
    async with factory() as session:
        yield session

    await engine.dispose()


@pytest.mark.asyncio
async def test_get_current_user_success(rbac_session: AsyncSession):
    """Verify get_current_user returns active user when valid access token supplied."""
    user = User(
        email="doctor.fizza@omnicare.internal",
        full_name="Dr. Fizza Nazz",
        role=UserRole.DOCTOR,
        status=UserStatus.ACTIVE,
    )
    user.set_password("SecurePassword2026!")
    rbac_session.add(user)
    await rbac_session.commit()
    await rbac_session.refresh(user)

    token = create_access_token(user_id=user.id, role=user.role.value)
    retrieved = await get_current_user(token=token, session=rbac_session)

    assert retrieved.id == user.id
    assert retrieved.email == "doctor.fizza@omnicare.internal"
    assert retrieved.role == UserRole.DOCTOR


@pytest.mark.asyncio
async def test_get_current_user_rejects_refresh_token(rbac_session: AsyncSession):
    """Verify refresh token cannot be used to authenticate API endpoints."""
    user_id = uuid.uuid4()
    refresh_tok = create_refresh_token(user_id=user_id)

    with pytest.raises(HTTPException) as exc_info:
        await get_current_user(token=refresh_tok, session=rbac_session)

    assert exc_info.value.status_code == 401
    assert "scope" in exc_info.value.detail.lower()


@pytest.mark.asyncio
async def test_get_current_user_suspended_account(rbac_session: AsyncSession):
    """Verify suspended accounts are denied access with HTTP 403."""
    suspended_user = User(
        email="suspended.staff@omnicare.internal",
        full_name="Suspended Staff",
        role=UserRole.RECEPTIONIST,
        status=UserStatus.SUSPENDED,
    )
    suspended_user.set_password("AnyPassword123!")
    rbac_session.add(suspended_user)
    await rbac_session.commit()
    await rbac_session.refresh(suspended_user)

    token = create_access_token(user_id=suspended_user.id, role=suspended_user.role.value)

    with pytest.raises(HTTPException) as exc_info:
        await get_current_user(token=token, session=rbac_session)

    assert exc_info.value.status_code == 403
    assert "suspended" in exc_info.value.detail.lower()


def test_require_roles_allows_matching_role():
    """Verify role gate passes when user has permitted role."""
    doctor_user = User(
        email="dr.rahman@omnicare.internal",
        full_name="Dr. Amina Rahman",
        role=UserRole.DOCTOR,
    )

    doctor_guard = require_roles(UserRole.DOCTOR, UserRole.HOSPITAL_ADMIN)
    result = doctor_guard(current_user=doctor_user)
    assert result.id == doctor_user.id


def test_require_roles_denies_unauthorized_role():
    """Verify role gate raises HTTP 403 when user lacks required role."""
    patient_user = User(
        email="patient.sarah@omnicare.internal",
        full_name="Sarah Malik",
        role=UserRole.PATIENT,
    )

    clinical_guard = require_roles(UserRole.DOCTOR, UserRole.NURSE)
    with pytest.raises(HTTPException) as exc_info:
        clinical_guard(current_user=patient_user)

    assert exc_info.value.status_code == 403
    assert "patient" in exc_info.value.detail.lower()
