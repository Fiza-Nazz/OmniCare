"""Core Prescription ORM model for medical orders.

Adheres to Constitution §14 (e-Prescribing) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from datetime import date

from sqlalchemy import Date, Enum as SQLEnum, ForeignKey, Index, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from domains.prescriptions.enums import PrescriptionStatus
from packages.shared.database.base import TimestampedUUIDModel


class Prescription(TimestampedUUIDModel):
    """Represents a medical prescription issued by a licensed provider."""

    __tablename__ = "prescriptions"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    prescriber_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    appointment_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("appointments.id", ondelete="SET NULL"),
        nullable=True,
    )
    prescription_number: Mapped[str] = mapped_column(
        String(40),
        unique=True,
        index=True,
        nullable=False,
    )
    status: Mapped[PrescriptionStatus] = mapped_column(
        SQLEnum(PrescriptionStatus, native_enum=False),
        default=PrescriptionStatus.ACTIVE,
        nullable=False,
    )
    issue_date: Mapped[date] = mapped_column(Date, nullable=False)
    expiry_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    refills_authorized: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    refills_remaining: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    instructions: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_prescriptions_patient", "patient_id"),
        Index("ix_prescriptions_prescriber", "prescriber_user_id"),
    )
