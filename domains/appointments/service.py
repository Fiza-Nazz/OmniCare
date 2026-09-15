"""Appointment booking service with clinician double-booking prevention.

Adheres to Constitution §13 (Appointment Scheduling) and §30 (Domain Services).
"""

from __future__ import annotations

import uuid
from datetime import datetime, timedelta

from sqlalchemy import and_, select
from sqlalchemy.ext.asyncio import AsyncSession

from domains.appointments.enums import AppointmentStatus
from domains.appointments.models import Appointment


class ScheduleConflictError(ValueError):
    """Raised when a clinician is already booked for the requested time slot."""


class AppointmentBookingService:
    """Manages appointment scheduling and prevents overlapping bookings."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def check_clinician_availability(
        self,
        provider_user_id: uuid.UUID,
        scheduled_at: datetime,
        duration_minutes: int,
    ) -> bool:
        """Returns True if clinician has no overlapping active appointments."""
        end_time = scheduled_at + timedelta(minutes=duration_minutes)

        active_statuses = [
            AppointmentStatus.SCHEDULED,
            AppointmentStatus.CONFIRMED,
            AppointmentStatus.CHECKED_IN,
            AppointmentStatus.IN_PROGRESS,
        ]

        stmt = select(Appointment).where(
            and_(
                Appointment.provider_user_id == provider_user_id,
                Appointment.status.in_(active_statuses),
                Appointment.scheduled_at < end_time,
            )
        )
        result = await self.session.execute(stmt)
        existing_appointments = result.scalars().all()

        for apt in existing_appointments:
            apt_end = apt.scheduled_at + timedelta(minutes=apt.duration_minutes)
            if scheduled_at < apt_end and end_time > apt.scheduled_at:
                return False

        return True
