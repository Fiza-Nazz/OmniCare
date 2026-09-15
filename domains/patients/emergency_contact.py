"""Patient Emergency Contact domain model.

Provides a dedicated table for multiple emergency contacts per patient,
with priority ranking to indicate primary contact.

Adheres to Constitution §9 (Patient Identity) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid

from sqlalchemy import ForeignKey, Index, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class PatientEmergencyContact(TimestampedUUIDModel):
    """Stores one emergency contact entry for a patient."""

    __tablename__ = "patient_emergency_contacts"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    full_name: Mapped[str] = mapped_column(String(150), nullable=False)
    relationship: Mapped[str] = mapped_column(String(80), nullable=False)
    phone_primary: Mapped[str] = mapped_column(String(20), nullable=False)
    phone_secondary: Mapped[str | None] = mapped_column(String(20), nullable=True)
    email: Mapped[str | None] = mapped_column(String(255), nullable=True)
    address: Mapped[str | None] = mapped_column(String(500), nullable=True)
    priority: Mapped[int] = mapped_column(
        Integer,
        default=1,
        nullable=False,
        doc="Contact priority: 1 = primary, 2 = secondary, etc.",
    )
    notes: Mapped[str | None] = mapped_column(String(300), nullable=True)

    __table_args__ = (Index("ix_patient_emergency_contacts_patient", "patient_id", "priority"),)
