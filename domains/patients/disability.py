"""Patient Disability and Accessibility Record domain model.

Adheres to Constitution §10 (EHR — Accessibility) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from enum import StrEnum

from sqlalchemy import Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class DisabilityCategory(StrEnum):
    """Classification of disability type for care planning."""

    MOBILITY = "mobility"
    VISUAL = "visual"
    HEARING = "hearing"
    COGNITIVE = "cognitive"
    SPEECH = "speech"
    MENTAL_HEALTH = "mental_health"
    CHRONIC_PAIN = "chronic_pain"
    OTHER = "other"


class PatientDisabilityRecord(TimestampedUUIDModel):
    """Documents a patient disability or accessibility requirement."""

    __tablename__ = "patient_disability_records"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    category: Mapped[DisabilityCategory] = mapped_column(
        SQLEnum(DisabilityCategory, native_enum=False),
        nullable=False,
    )
    description: Mapped[str] = mapped_column(String(500), nullable=False)
    accommodation_required: Mapped[str | None] = mapped_column(Text, nullable=True)
    is_active: Mapped[bool] = mapped_column(default=True, nullable=False)
    verified_by_user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )

    __table_args__ = (Index("ix_patient_disability_patient", "patient_id"),)
