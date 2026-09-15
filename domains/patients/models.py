"""SQLAlchemy ORM model for Patient demographics and clinical identity.

Adheres to Constitution §9 (Patient Identity), §10 (EHR), §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from datetime import date

from sqlalchemy import Date, Enum as SQLEnum, ForeignKey, Index, String
from sqlalchemy.orm import Mapped, mapped_column

from domains.patients.enums import BiologicalSex, BloodGroup, MaritalStatus
from packages.shared.database.base import TimestampedUUIDModel


class Patient(TimestampedUUIDModel):
    """Core patient demographic and identity record."""

    __tablename__ = "patients"

    # ── Linking to auth user (optional — patient portal login) ──
    user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
        index=True,
        doc="Optional FK to identity user for patient portal access.",
    )

    # ── Medical Record Number ──
    mrn: Mapped[str] = mapped_column(
        String(30),
        unique=True,
        index=True,
        nullable=False,
        doc="Unique Medical Record Number assigned at registration.",
    )

    # ── Demographics ──
    first_name: Mapped[str] = mapped_column(String(80), nullable=False)
    last_name: Mapped[str] = mapped_column(String(80), nullable=False)
    date_of_birth: Mapped[date] = mapped_column(Date, nullable=False)
    biological_sex: Mapped[BiologicalSex] = mapped_column(
        SQLEnum(BiologicalSex, native_enum=False), nullable=False
    )
    blood_group: Mapped[BloodGroup] = mapped_column(
        SQLEnum(BloodGroup, native_enum=False),
        default=BloodGroup.UNKNOWN,
        nullable=False,
    )
    marital_status: Mapped[MaritalStatus] = mapped_column(
        SQLEnum(MaritalStatus, native_enum=False),
        default=MaritalStatus.SINGLE,
        nullable=False,
    )

    # ── Contact ──
    phone: Mapped[str | None] = mapped_column(String(20), nullable=True)
    email: Mapped[str | None] = mapped_column(String(255), nullable=True)
    address: Mapped[str | None] = mapped_column(String(500), nullable=True)
    city: Mapped[str | None] = mapped_column(String(100), nullable=True)
    country: Mapped[str | None] = mapped_column(String(100), nullable=True)

    # ── Emergency Contact ──
    emergency_contact_name: Mapped[str | None] = mapped_column(String(150), nullable=True)
    emergency_contact_phone: Mapped[str | None] = mapped_column(String(20), nullable=True)
    emergency_contact_relationship: Mapped[str | None] = mapped_column(String(60), nullable=True)

    @property
    def full_name(self) -> str:
        """Returns full display name."""
        return f"{self.first_name} {self.last_name}"

    __table_args__ = (
        Index("ix_patients_name", "last_name", "first_name"),
        Index("ix_patients_dob", "date_of_birth"),
    )
