"""Core Appointment ORM model for the OmniCare scheduling domain.

Adheres to Constitution §13 (Appointment Scheduling) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, Enum as SQLEnum, ForeignKey, Index, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from domains.appointments.enums import (
    AppointmentPriority,
    AppointmentStatus,
    AppointmentType,
)
from packages.shared.database.base import TimestampedUUIDModel


class Appointment(TimestampedUUIDModel):
    """Represents a scheduled clinical appointment between patient and provider."""

    __tablename__ = "appointments"

    # Participants
    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    provider_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
        doc="The doctor or clinician conducting the appointment.",
    )
    booked_by_user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
        doc="Staff member who booked the appointment.",
    )

    # Scheduling
    scheduled_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        doc="Planned start datetime of the appointment (UTC).",
    )
    duration_minutes: Mapped[int] = mapped_column(
        Integer,
        default=30,
        nullable=False,
        doc="Planned duration in minutes.",
    )

    # Classification
    appointment_type: Mapped[AppointmentType] = mapped_column(
        SQLEnum(AppointmentType, native_enum=False),
        nullable=False,
    )
    status: Mapped[AppointmentStatus] = mapped_column(
        SQLEnum(AppointmentStatus, native_enum=False),
        default=AppointmentStatus.SCHEDULED,
        nullable=False,
    )
    priority: Mapped[AppointmentPriority] = mapped_column(
        SQLEnum(AppointmentPriority, native_enum=False),
        default=AppointmentPriority.ROUTINE,
        nullable=False,
    )

    # Details
    chief_complaint: Mapped[str | None] = mapped_column(String(500), nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    cancellation_reason: Mapped[str | None] = mapped_column(String(300), nullable=True)
    room_or_location: Mapped[str | None] = mapped_column(String(100), nullable=True)

    __table_args__ = (
        Index("ix_appointments_patient_scheduled", "patient_id", "scheduled_at"),
        Index("ix_appointments_provider_scheduled", "provider_user_id", "scheduled_at"),
        Index("ix_appointments_status", "status"),
    )
