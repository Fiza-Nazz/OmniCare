"""Insurance Payer domain model.

Adheres to Constitution §18 (Insurance Verification & Claims) and §32 (Database Rules).
"""

from __future__ import annotations

from sqlalchemy import Boolean, Enum as SQLEnum, Index, String
from sqlalchemy.orm import Mapped, mapped_column

from domains.insurance.enums import PayerType
from packages.shared.database.base import TimestampedUUIDModel


class InsurancePayer(TimestampedUUIDModel):
    """Represents an insurance company or healthcare payer entity."""

    __tablename__ = "insurance_payers"

    payer_code: Mapped[str] = mapped_column(String(30), unique=True, index=True, nullable=False)
    name: Mapped[str] = mapped_column(String(200), nullable=False, index=True)
    payer_type: Mapped[PayerType] = mapped_column(
        SQLEnum(PayerType, native_enum=False),
        default=PayerType.COMMERCIAL,
        nullable=False,
    )
    electronic_edi_id: Mapped[str | None] = mapped_column(String(50), nullable=True)
    contact_phone: Mapped[str | None] = mapped_column(String(20), nullable=True)
    contact_email: Mapped[str | None] = mapped_column(String(255), nullable=True)
    claims_portal_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    __table_args__ = (Index("ix_insurance_payers_name", "name"),)
