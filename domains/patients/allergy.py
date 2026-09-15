"""Patient Allergy domain model.

Adheres to Constitution §10 (EHR — Allergies) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from enum import StrEnum

from sqlalchemy import Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class AllergySeverity(StrEnum):
    """Clinical allergy severity classification."""
    MILD = "mild"
    MODERATE = "moderate"
    SEVERE = "severe"
    LIFE_THREATENING = "life_threatening"
    UNKNOWN = "unknown"


class AllergyCategory(StrEnum):
    """Allergy category classification."""
    DRUG = "drug"
    FOOD = "food"
    ENVIRONMENTAL = "environmental"
    LATEX = "latex"
    OTHER = "other"


class PatientAllergy(TimestampedUUIDModel):
    """Records a known allergy or intolerance for a patient."""

    __tablename__ = "patient_allergies"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    allergen: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
        doc="Name of the allergen substance.",
    )
    category: Mapped[AllergyCategory] = mapped_column(
        SQLEnum(AllergyCategory, native_enum=False),
        nullable=False,
        default=AllergyCategory.OTHER,
    )
    severity: Mapped[AllergySeverity] = mapped_column(
        SQLEnum(AllergySeverity, native_enum=False),
        nullable=False,
        default=AllergySeverity.UNKNOWN,
    )
    reaction_description: Mapped[str | None] = mapped_column(Text, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    is_active: Mapped[bool] = mapped_column(default=True, nullable=False)

    __table_args__ = (
        Index("ix_patient_allergies_patient", "patient_id"),
    )
