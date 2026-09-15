"""Patient Consent domain model.

Adheres to Constitution §9 (Consent Information) and §23 (Audit Trail).
"""

from __future__ import annotations

import uuid
from datetime import date
from enum import StrEnum

from sqlalchemy import Date, Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class ConsentType(StrEnum):
    """Type of consent document or authorization."""

    TREATMENT = "treatment"
    SURGICAL_PROCEDURE = "surgical_procedure"
    DATA_SHARING = "data_sharing"
    TELEMEDICINE = "telemedicine"
    RESEARCH = "research"
    PHOTOGRAPHY = "photography"


class ConsentStatus(StrEnum):
    """Current status of a consent record."""

    GRANTED = "granted"
    REVOKED = "revoked"
    EXPIRED = "expired"
    PENDING = "pending"


class PatientConsent(TimestampedUUIDModel):
    """Records explicit patient consent for treatments and data sharing."""

    __tablename__ = "patient_consents"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    consent_type: Mapped[ConsentType] = mapped_column(
        SQLEnum(ConsentType, native_enum=False),
        nullable=False,
    )
    status: Mapped[ConsentStatus] = mapped_column(
        SQLEnum(ConsentStatus, native_enum=False),
        default=ConsentStatus.PENDING,
        nullable=False,
    )
    consented_by: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
        doc="Name of person providing consent (patient or legal guardian).",
    )
    relationship_to_patient: Mapped[str | None] = mapped_column(String(100), nullable=True)
    granted_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    expiry_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    document_reference: Mapped[str | None] = mapped_column(String(500), nullable=True)

    __table_args__ = (Index("ix_patient_consents_patient_type", "patient_id", "consent_type"),)
