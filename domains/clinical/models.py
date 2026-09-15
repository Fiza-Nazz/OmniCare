"""Clinical Note ORM model — SOAP format and narrative clinical documentation.

Adheres to Constitution §10 (EHR — Clinical Notes) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from enum import StrEnum

from sqlalchemy import Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class NoteType(StrEnum):
    """Classification of clinical note format."""

    SOAP = "soap"
    NARRATIVE = "narrative"
    DISCHARGE_SUMMARY = "discharge_summary"
    REFERRAL = "referral"
    PROGRESS_NOTE = "progress_note"
    PROCEDURE_NOTE = "procedure_note"
    NURSING_NOTE = "nursing_note"


class ClinicalNote(TimestampedUUIDModel):
    """Records a single clinical note authored by a provider for a patient encounter."""

    __tablename__ = "clinical_notes"

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
    authored_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
    )
    note_type: Mapped[NoteType] = mapped_column(
        SQLEnum(NoteType, native_enum=False),
        nullable=False,
    )

    # SOAP fields (used when note_type = SOAP)
    subjective: Mapped[str | None] = mapped_column(Text, nullable=True)
    objective: Mapped[str | None] = mapped_column(Text, nullable=True)
    assessment: Mapped[str | None] = mapped_column(Text, nullable=True)
    plan: Mapped[str | None] = mapped_column(Text, nullable=True)

    # Free-text narrative (used when note_type != SOAP)
    narrative: Mapped[str | None] = mapped_column(Text, nullable=True)

    title: Mapped[str | None] = mapped_column(String(300), nullable=True)
    is_signed: Mapped[bool] = mapped_column(default=False, nullable=False)
    is_confidential: Mapped[bool] = mapped_column(default=False, nullable=False)

    __table_args__ = (
        Index("ix_clinical_notes_patient", "patient_id"),
        Index("ix_clinical_notes_appointment", "appointment_id"),
    )
