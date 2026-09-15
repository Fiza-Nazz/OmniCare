"""Payment Transaction domain model.

Adheres to Constitution §19 (Billing Engine) and §20 (Financial Integrity).
"""

from __future__ import annotations

import uuid
from datetime import datetime
from decimal import Decimal

from sqlalchemy import DateTime, Enum as SQLEnum, ForeignKey, Index, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from domains.billing.enums import PaymentMethod
from packages.shared.database.base import TimestampedUUIDModel


class PaymentTransaction(TimestampedUUIDModel):
    """Records a single monetary payment transaction against an invoice."""

    __tablename__ = "payment_transactions"

    invoice_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patient_invoices.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    processed_by_user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )
    amount: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
    payment_method: Mapped[PaymentMethod] = mapped_column(
        SQLEnum(PaymentMethod, native_enum=False),
        nullable=False,
    )
    transaction_reference: Mapped[str] = mapped_column(
        String(150),
        unique=True,
        index=True,
        nullable=False,
        doc="Gateway reference ID (e.g. Stripe charge ID or receipt number).",
    )
    processed_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (Index("ix_payment_transactions_invoice", "invoice_id"),)
