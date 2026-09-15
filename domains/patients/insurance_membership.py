"""Patient Insurance Membership domain model.

Adheres to Constitution §11 (Insurance & Billing) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from datetime import date
from enum import StrEnum

from sqlalchemy import Date, Enum as SQLEnum, ForeignKey, Index, String
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class InsuranceRelationship(StrEnum):
    """Relationship of the insured member to the policy holder."""

    SELF = "self"
    SPOUSE = "spouse"
    CHILD = "child"
    OTHER = "other"


class InsuranceMembershipStatus(StrEnum):
    """Active status of the insurance membership."""

    ACTIVE = "active"
    INACTIVE = "inactive"
    PENDING = "pending"
    EXPIRED = "expired"


class PatientInsuranceMembership(TimestampedUUIDModel):
    """Tracks a patient insurance policy and membership details."""

    __tablename__ = "patient_insurance_memberships"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    provider_name: Mapped[str] = mapped_column(String(200), nullable=False)
    policy_number: Mapped[str] = mapped_column(String(100), nullable=False)
    group_number: Mapped[str | None] = mapped_column(String(100), nullable=True)
    member_id: Mapped[str] = mapped_column(String(100), nullable=False)
    relationship: Mapped[InsuranceRelationship] = mapped_column(
        SQLEnum(InsuranceRelationship, native_enum=False),
        default=InsuranceRelationship.SELF,
        nullable=False,
    )
    status: Mapped[InsuranceMembershipStatus] = mapped_column(
        SQLEnum(InsuranceMembershipStatus, native_enum=False),
        default=InsuranceMembershipStatus.ACTIVE,
        nullable=False,
    )
    effective_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    expiry_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    copay_amount: Mapped[str | None] = mapped_column(String(20), nullable=True)
    notes: Mapped[str | None] = mapped_column(String(500), nullable=True)

    __table_args__ = (Index("ix_patient_insurance_patient", "patient_id"),)
