"""Prescription Line Item domain model.

Adheres to Constitution §14 (e-Prescribing) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid

from sqlalchemy import Enum as SQLEnum, ForeignKey, Index, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from domains.prescriptions.enums import AdministrationRoute, DosageForm
from packages.shared.database.base import TimestampedUUIDModel


class PrescriptionItem(TimestampedUUIDModel):
    """Stores one medication item on a multi-item prescription."""

    __tablename__ = "prescription_items"

    prescription_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("prescriptions.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    medication_name: Mapped[str] = mapped_column(String(250), nullable=False)
    dosage: Mapped[str] = mapped_column(String(100), nullable=False)
    dosage_form: Mapped[DosageForm] = mapped_column(
        SQLEnum(DosageForm, native_enum=False),
        default=DosageForm.TABLET,
        nullable=False,
    )
    route: Mapped[AdministrationRoute] = mapped_column(
        SQLEnum(AdministrationRoute, native_enum=False),
        default=AdministrationRoute.ORAL,
        nullable=False,
    )
    frequency: Mapped[str] = mapped_column(String(100), nullable=False)
    duration_days: Mapped[int] = mapped_column(Integer, nullable=False)
    quantity: Mapped[int] = mapped_column(Integer, nullable=False)
    instructions: Mapped[str | None] = mapped_column(String(500), nullable=True)

    __table_args__ = (Index("ix_prescription_items_prescription", "prescription_id"),)
