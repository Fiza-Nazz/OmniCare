"""Pydantic v2 schemas for Appointment API input and response validation.

Adheres to Constitution §31 (Validation) and §13 (Appointment Scheduling).
"""

from __future__ import annotations

import uuid
from datetime import UTC, datetime

from pydantic import BaseModel, Field, field_validator

from domains.appointments.enums import (
    AppointmentPriority,
    AppointmentStatus,
    AppointmentType,
)


class AppointmentCreateRequest(BaseModel):
    """Validates incoming appointment booking payload."""

    patient_id: uuid.UUID
    provider_user_id: uuid.UUID
    scheduled_at: datetime
    duration_minutes: int = Field(default=30, ge=5, le=480)
    appointment_type: AppointmentType
    priority: AppointmentPriority = AppointmentPriority.ROUTINE
    chief_complaint: str | None = Field(default=None, max_length=500)
    notes: str | None = Field(default=None, max_length=2000)
    room_or_location: str | None = Field(default=None, max_length=100)

    @field_validator("scheduled_at")
    @classmethod
    def validate_scheduled_at_is_future(cls, dt: datetime) -> datetime:
        """Ensures appointment is not booked in the past."""
        now = datetime.now(UTC)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=UTC)
        if dt <= now:
            raise ValueError("Appointment must be scheduled in the future.")
        return dt


class AppointmentResponse(BaseModel):
    """Safe appointment serialization for API responses."""

    id: uuid.UUID
    patient_id: uuid.UUID
    provider_user_id: uuid.UUID
    scheduled_at: datetime
    duration_minutes: int
    appointment_type: AppointmentType
    status: AppointmentStatus
    priority: AppointmentPriority
    chief_complaint: str | None
    room_or_location: str | None

    model_config = {"from_attributes": True}


class AppointmentCancelRequest(BaseModel):
    """Validates cancellation payload."""

    reason: str = Field(min_length=5, max_length=300)
