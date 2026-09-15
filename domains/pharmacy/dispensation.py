"""Pharmacy Dispensation domain model.

Adheres to Constitution §15 (Pharmacy Management) and §23 (Audit Trail).
"""

from __future__ import annotations

import uuid
from datetime import datetime
from enum import StrEnum

from sqlalchemy import DateTime, Enum as SQLEnum, ForeignKey, Index, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class DispensationStatus(StrEnum):
    """Status of a medication dispensation."""

    PENDING = "pending"
    VERIFIED = "verified"
    DISPENSED = "dispensed"
    CANCELLED = "cancelled"


class PharmacyDispensation(TimestampedUUIDModel):
    """Records the physical dispensation of prescribed medications by a pharmacist."""

    __tablename__ = "pharmacy_dispensations"

    prescription_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("prescriptions.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    dispensed_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        doc="Pharmacist who verified and dispensed the order.",
    )
    status: Mapped[DispensationStatus] = mapped_column(
        SQLEnum(DispensationStatus, native_enum=False),
        default=DispensationStatus.PENDING,
        nullable=False,
    )
    dispensed_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    batch_number: Mapped[str] = mapped_column(String(100), nullable=False)
    quantity_dispensed: Mapped[int] = mapped_column(Integer, nullable=False)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_pharmacy_dispensations_prescription", "prescription_id"),
        Index("ix_pharmacy_dispensations_pharmacist", "dispensed_by_user_id"),
    )
