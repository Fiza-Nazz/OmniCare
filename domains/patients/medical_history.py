"""Patient Medical History domain model.

Adheres to Constitution §10 (EHR — Medical History) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from datetime import date
from enum import StrEnum

from sqlalchemy import Date, Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class HistoryType(StrEnum):
    """Medical history entry type classification."""

    CHRONIC_CONDITION = "chronic_condition"
    SURGICAL_HISTORY = "surgical_history"
    HOSPITALIZATION = "hospitalization"
    FAMILY_HISTORY = "family_history"
    IMMUNIZATION = "immunization"
    MENTAL_HEALTH = "mental_health"
    OTHER = "other"


class HistoryStatus(StrEnum):
    """Whether the condition is active or resolved."""

    ACTIVE = "active"
    RESOLVED = "resolved"
    UNKNOWN = "unknown"


class PatientMedicalHistory(TimestampedUUIDModel):
    """Records significant past medical events in a patient history."""

    __tablename__ = "patient_medical_history"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    history_type: Mapped[HistoryType] = mapped_column(
        SQLEnum(HistoryType, native_enum=False),
        nullable=False,
    )
    description: Mapped[str] = mapped_column(String(500), nullable=False)
    status: Mapped[HistoryStatus] = mapped_column(
        SQLEnum(HistoryStatus, native_enum=False),
        default=HistoryStatus.UNKNOWN,
        nullable=False,
    )
    onset_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    resolution_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (Index("ix_patient_history_patient_type", "patient_id", "history_type"),)
