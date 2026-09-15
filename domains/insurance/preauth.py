"""Insurance Pre-Authorization domain model.

Adheres to Constitution §18 (Insurance Verification & Claims).
"""

from __future__ import annotations

import uuid
from datetime import date
from enum import StrEnum

from sqlalchemy import Date, Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class PreAuthStatus(StrEnum):
    """Status of a prior authorization request."""

    REQUESTED = "requested"
    PENDING_ADDITIONAL_INFO = "pending_additional_info"
    APPROVED = "approved"
    DENIED = "denied"
    EXPIRED = "expired"


class PreAuthorization(TimestampedUUIDModel):
    """Records formal payer prior-authorization required for surgical or diagnostic procedures."""

    __tablename__ = "insurance_pre_authorizations"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    payer_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("insurance_payers.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    authorization_number: Mapped[str] = mapped_column(
        String(60),
        unique=True,
        index=True,
        nullable=False,
    )
    procedure_cpt_code: Mapped[str] = mapped_column(String(20), nullable=False)
    status: Mapped[PreAuthStatus] = mapped_column(
        SQLEnum(PreAuthStatus, native_enum=False),
        default=PreAuthStatus.REQUESTED,
        nullable=False,
    )
    valid_from: Mapped[date | None] = mapped_column(Date, nullable=True)
    valid_to: Mapped[date | None] = mapped_column(Date, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_preauth_patient", "patient_id"),
        Index("ix_preauth_number", "authorization_number"),
    )
