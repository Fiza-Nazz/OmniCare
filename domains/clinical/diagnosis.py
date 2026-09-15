"""Clinical Diagnosis domain model with ICD-10 coding.

Adheres to Constitution §10 (EHR — Diagnoses) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from enum import StrEnum

from sqlalchemy import Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class DiagnosisType(StrEnum):
    """Clinical diagnosis classification."""

    PRIMARY = "primary"
    SECONDARY = "secondary"
    DIFFERENTIAL = "differential"
    ADMITTING = "admitting"
    DISCHARGE = "discharge"


class DiagnosisStatus(StrEnum):
    """Status of the diagnosed condition."""

    CONFIRMED = "confirmed"
    SUSPECTED = "suspected"
    REFUTED = "refuted"
    RESOLVED = "resolved"


class ClinicalDiagnosis(TimestampedUUIDModel):
    """Records a specific clinical diagnosis coded with ICD-10."""

    __tablename__ = "clinical_diagnoses"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    appointment_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("appointments.id", ondelete="SET NULL"),
        nullable=True,
        index=True,
    )
    diagnosed_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
    )
    icd10_code: Mapped[str] = mapped_column(
        String(20),
        nullable=False,
        doc="ICD-10 clinical coding standard identifier.",
    )
    description: Mapped[str] = mapped_column(String(500), nullable=False)
    diagnosis_type: Mapped[DiagnosisType] = mapped_column(
        SQLEnum(DiagnosisType, native_enum=False),
        default=DiagnosisType.PRIMARY,
        nullable=False,
    )
    status: Mapped[DiagnosisStatus] = mapped_column(
        SQLEnum(DiagnosisStatus, native_enum=False),
        default=DiagnosisStatus.CONFIRMED,
        nullable=False,
    )
    clinical_notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_clinical_diagnoses_patient", "patient_id"),
        Index("ix_clinical_diagnoses_icd10", "icd10_code"),
    )
