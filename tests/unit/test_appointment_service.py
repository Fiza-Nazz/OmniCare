"""Unit tests for AppointmentBookingService.

Adheres to Constitution §40 (Testing Constitution) and §13 (Appointment Scheduling).
"""

from __future__ import annotations

import uuid
from datetime import UTC, datetime

import pytest
import pytest_asyncio
from sqlalchemy.ext.asyncio import AsyncSession

from domains.appointments.service import AppointmentBookingService
from packages.shared.database.base import Base
from packages.shared.database.session import (
    create_async_engine_instance,
    create_async_session_factory,
)


@pytest_asyncio.fixture
async def apt_session():
    """Provides isolated test database session."""
    engine = create_async_engine_instance("sqlite+aiosqlite:///:memory:")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    factory = create_async_session_factory(engine)
    async with factory() as session:
        yield session

    await engine.dispose()


@pytest.mark.asyncio
async def test_clinician_available_when_no_appointments(apt_session: AsyncSession):
    """Verify clinician is available when no prior bookings exist."""
    service = AppointmentBookingService(apt_session)
    provider_id = uuid.uuid4()
    slot_time = datetime(2026, 10, 1, 10, 0, tzinfo=UTC)

    available = await service.check_clinician_availability(provider_id, slot_time, 30)
    assert available is True
