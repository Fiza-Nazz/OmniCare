"""Clinical Procedure domain model with CPT coding.

Adheres to Constitution §10 (EHR — Procedures) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class ClinicalProcedure(TimestampedUUIDModel):
    """Records a clinical procedure performed on a patient with CPT coding."""

    __tablename__ = "clinical_procedures"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    performed_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
    )
    cpt_code: Mapped[str] = mapped_column(
        String(20),
        nullable=False,
        doc="Current Procedural Terminology (CPT) code.",
    )
    procedure_name: Mapped[str] = mapped_column(String(300), nullable=False)
    performed_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    outcome_notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    complications: Mapped[str | None] = mapped_column(String(500), nullable=True)

    __table_args__ = (
        Index("ix_clinical_procedures_patient", "patient_id"),
        Index("ix_clinical_procedures_cpt", "cpt_code"),
    )
