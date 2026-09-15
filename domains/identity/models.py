"""SQLAlchemy ORM models for Identity, Authentication and RBAC.

Adheres to Constitution §8 (Identity & Access Management) and §32 (Database Rules).
"""

from __future__ import annotations

from datetime import datetime
from enum import StrEnum

from sqlalchemy import Boolean, Enum as SQLEnum, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from domains.identity.security import hash_password, verify_password
from packages.shared.database.base import TimestampedUUIDModel, UTCDateTime


class UserRole(StrEnum):
    """Explicit healthcare enterprise roles defined in Constitution §8."""

    SUPER_ADMIN = "super_admin"
    HOSPITAL_ADMIN = "hospital_admin"
    DOCTOR = "doctor"
    NURSE = "nurse"
    PHARMACIST = "pharmacist"
    LAB_TECHNICIAN = "lab_technician"
    BILLING_OFFICER = "billing_officer"
    INSURANCE_OFFICER = "insurance_officer"
    RECEPTIONIST = "receptionist"
    PATIENT = "patient"
    AUDITOR = "auditor"


class UserStatus(StrEnum):
    """Account operational status."""

    ACTIVE = "active"
    SUSPENDED = "suspended"
    PENDING_VERIFICATION = "pending_verification"


class User(TimestampedUUIDModel):
    """Core enterprise identity record."""

    __tablename__ = "users"

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        index=True,
        nullable=False,
        doc="Unique email address used for credential authentication.",
    )

    hashed_password: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        doc="Salted bcrypt hash of the user password.",
    )

    full_name: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
        doc="Full legal display name of the user.",
    )

    role: Mapped[UserRole] = mapped_column(
        SQLEnum(UserRole, native_enum=False),
        nullable=False,
        default=UserRole.PATIENT,
        index=True,
        doc="Primary access control role.",
    )

    status: Mapped[UserStatus] = mapped_column(
        SQLEnum(UserStatus, native_enum=False),
        nullable=False,
        default=UserStatus.ACTIVE,
        index=True,
        doc="Account operational status.",
    )

    is_mfa_enabled: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False,
        doc="Flag indicating if multi-factor authentication is active.",
    )

    failed_login_attempts: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
        doc="Counter tracking consecutive failed authentication attempts.",
    )

    last_login_at: Mapped[datetime | None] = mapped_column(
        UTCDateTime(),
        nullable=True,
        doc="UTC timestamp of the most recent successful login.",
    )

    def verify_password(self, plain_password: str) -> bool:
        """Verifies the supplied plaintext password against the stored bcrypt hash."""
        return verify_password(plain_password, self.hashed_password)

    def set_password(self, plain_password: str) -> None:
        """Hashes and updates the user's password."""
        self.hashed_password = hash_password(plain_password)

    def to_dict(self, exclude: set[str] | None = None) -> dict:
        """Serializes user attributes, strictly redacting hashed_password."""
        excluded = exclude or set()
        excluded.add("hashed_password")
        return super().to_dict(exclude=excluded)
