"""Telehealth Session ORM model for virtual video encounters.

Adheres to Constitution §17 (Telehealth & Virtual Care) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, Enum as SQLEnum, ForeignKey, Index, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from domains.telehealth.enums import CallQuality, TelehealthSessionStatus
from packages.shared.database.base import TimestampedUUIDModel


class TelehealthSession(TimestampedUUIDModel):
    """Represents an interactive WebRTC virtual consultation encounter."""

    __tablename__ = "telehealth_sessions"

    appointment_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("appointments.id", ondelete="CASCADE"),
        nullable=False,
        unique=True,
        index=True,
    )
    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    provider_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    room_id: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        index=True,
        nullable=False,
        doc="Secure cryptographic WebRTC room identifier.",
    )
    status: Mapped[TelehealthSessionStatus] = mapped_column(
        SQLEnum(TelehealthSessionStatus, native_enum=False),
        default=TelehealthSessionStatus.WAITING_ROOM,
        nullable=False,
    )
    started_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    ended_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    duration_seconds: Mapped[int | None] = mapped_column(Integer, nullable=True)
    connection_quality: Mapped[CallQuality] = mapped_column(
        SQLEnum(CallQuality, native_enum=False),
        default=CallQuality.GOOD,
        nullable=False,
    )

    __table_args__ = (
        Index("ix_telehealth_patient", "patient_id"),
        Index("ix_telehealth_provider", "provider_user_id"),
    )
