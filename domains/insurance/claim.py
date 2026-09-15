"""Insurance Claim domain model.

Adheres to Constitution §18 (Insurance Verification & Claims) and §20 (Financial Integrity).
"""

from __future__ import annotations

import uuid
from datetime import date
from decimal import Decimal

from sqlalchemy import Date, Enum as SQLEnum, ForeignKey, Index, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from domains.insurance.enums import ClaimStatus, DenialReason
from packages.shared.database.base import TimestampedUUIDModel


class InsuranceClaim(TimestampedUUIDModel):
    """Represents an insurance reimbursement claim submitted against an invoice."""

    __tablename__ = "insurance_claims"

    invoice_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patient_invoices.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    payer_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("insurance_payers.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    claim_number: Mapped[str] = mapped_column(
        String(50),
        unique=True,
        index=True,
        nullable=False,
    )
    status: Mapped[ClaimStatus] = mapped_column(
        SQLEnum(ClaimStatus, native_enum=False),
        default=ClaimStatus.SUBMITTED,
        nullable=False,
    )
    billed_amount: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
    approved_amount: Mapped[Decimal] = mapped_column(
        Numeric(12, 2), default=Decimal("0.00"), nullable=False
    )
    patient_responsibility: Mapped[Decimal] = mapped_column(
        Numeric(12, 2), default=Decimal("0.00"), nullable=False
    )
    denial_reason: Mapped[DenialReason] = mapped_column(
        SQLEnum(DenialReason, native_enum=False),
        default=DenialReason.NONE,
        nullable=False,
    )
    submission_date: Mapped[date] = mapped_column(Date, nullable=False)
    adjudication_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    adjudication_notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_insurance_claims_invoice", "invoice_id"),
        Index("ix_insurance_claims_status", "status"),
    )
