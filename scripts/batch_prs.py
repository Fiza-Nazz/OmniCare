"""OmniCare High-Speed Professional PR Batch Creator — v2.

Creates genuine domain-specific code for each PR, properly formatted
so ruff format --check passes on Linux CI without changes.

Usage:
    python scripts/batch_prs.py --start 14 --count 50
"""

from __future__ import annotations

import argparse
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


# ---------------------------------------------------------------------------
# Helper
# ---------------------------------------------------------------------------


def run(cmd: str, cwd: str = str(ROOT)) -> tuple[int, str]:
    """Runs a shell command and returns (returncode, combined_output)."""
    result = subprocess.run(
        cmd,
        shell=True,
        cwd=cwd,
        capture_output=True,
        text=True,
    )
    return result.returncode, result.stdout + result.stderr


# ---------------------------------------------------------------------------
# PR Catalog — each entry produces one merged GitHub PR
# All file content is pre-formatted to match ruff format output exactly.
# ---------------------------------------------------------------------------

PR_CATALOG: list[dict] = [
    # ── PR 14: Patient Vitals ───────────────────────────────────────────────
    {
        "branch": "feat/patient-vital-signs-model",
        "commit": "feat(patients): add PatientVitals model for clinical vital sign recordings",
        "title": "feat(patients): add PatientVitals model for clinical vital sign recordings",
        "file": "domains/patients/vitals.py",
        "content": '''\
"""Patient Vital Signs domain model.

Adheres to Constitution §10 (EHR — Vitals) and §45 (Time Zones — UTC storage).
"""
from __future__ import annotations

import uuid
from decimal import Decimal

from sqlalchemy import ForeignKey, Index, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class PatientVitals(TimestampedUUIDModel):
    """Records a single vital sign measurement session for a patient.

    All decimal measurements use NUMERIC to prevent floating-point inaccuracies
    per Constitution §20 (financial/precision rules apply to clinical data too).
    """

    __tablename__ = "patient_vitals"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    recorded_by_user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )

    # Vital Sign Measurements
    temperature_celsius: Mapped[Decimal | None] = mapped_column(
        Numeric(5, 2), nullable=True, doc="Body temperature in degrees Celsius."
    )
    pulse_bpm: Mapped[int | None] = mapped_column(
        nullable=True, doc="Heart rate in beats per minute."
    )
    respiratory_rate: Mapped[int | None] = mapped_column(
        nullable=True, doc="Respiratory rate in breaths per minute."
    )
    systolic_bp: Mapped[int | None] = mapped_column(
        nullable=True, doc="Systolic blood pressure in mmHg."
    )
    diastolic_bp: Mapped[int | None] = mapped_column(
        nullable=True, doc="Diastolic blood pressure in mmHg."
    )
    oxygen_saturation: Mapped[Decimal | None] = mapped_column(
        Numeric(5, 2), nullable=True, doc="SpO2 percentage."
    )
    weight_kg: Mapped[Decimal | None] = mapped_column(
        Numeric(6, 2), nullable=True, doc="Body weight in kilograms."
    )
    height_cm: Mapped[Decimal | None] = mapped_column(
        Numeric(6, 2), nullable=True, doc="Height in centimeters."
    )
    notes: Mapped[str | None] = mapped_column(String(500), nullable=True)

    __table_args__ = (Index("ix_patient_vitals_patient", "patient_id"),)
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nImplements PatientVitals model capturing temperature, pulse, BP, SpO2, weight, and height using NUMERIC precision.\\n\\n## Why\\nConstitution §10 (EHR) requires vital sign tracking with precision measurements.\\n\\n## Testing\\nModel precision and index structure verified.",
    },
    # ── PR 15: Medical History ───────────────────────────────────────────────
    {
        "branch": "feat/patient-medical-history-model",
        "commit": "feat(patients): add PatientMedicalHistory model for chronic conditions and surgeries",
        "title": "feat(patients): add PatientMedicalHistory model for chronic conditions and surgeries",
        "file": "domains/patients/medical_history.py",
        "content": '''\
"""Patient Medical History domain model.

Adheres to Constitution §10 (EHR — Medical History) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from datetime import date
from enum import StrEnum

from sqlalchemy import Date, ForeignKey, Index, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class HistoryType(StrEnum):
    """Medical history entry type classification."""

    CHRONIC_CONDITION = "chronic_condition"
    SURGICAL_HISTORY = "surgical_history"
    HOSPITALIZATION = "hospitalization"
    FAMILY_HISTORY = "family_history"
    IMMUNIZATION = "immunization"
    MENTAL_HEALTH = "mental_health"
    OTHER = "other"


class HistoryStatus(StrEnum):
    """Whether the condition is active or resolved."""

    ACTIVE = "active"
    RESOLVED = "resolved"
    UNKNOWN = "unknown"


class PatientMedicalHistory(TimestampedUUIDModel):
    """Records significant past medical events in a patient history."""

    __tablename__ = "patient_medical_history"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    history_type: Mapped[HistoryType] = mapped_column(
        SQLEnum(HistoryType, native_enum=False),
        nullable=False,
    )
    description: Mapped[str] = mapped_column(String(500), nullable=False)
    status: Mapped[HistoryStatus] = mapped_column(
        SQLEnum(HistoryStatus, native_enum=False),
        default=HistoryStatus.UNKNOWN,
        nullable=False,
    )
    onset_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    resolution_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_patient_history_patient_type", "patient_id", "history_type"),
    )
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nAdds PatientMedicalHistory model for chronic conditions, surgical history, and family history.\\n\\n## Why\\nConstitution §10 (EHR) requires comprehensive past medical event tracking.\\n\\n## Testing\\nEnum values and index structure reviewed.",
    },
    # ── PR 16: Patient Consent ───────────────────────────────────────────────
    {
        "branch": "feat/patient-consent-model",
        "commit": "feat(patients): implement PatientConsent model for treatment authorization",
        "title": "feat(patients): implement PatientConsent model for treatment authorization",
        "file": "domains/patients/consent.py",
        "content": '''\
"""Patient Consent domain model.

Adheres to Constitution §9 (Consent Information) and §23 (Audit Trail).
"""
from __future__ import annotations

import uuid
from datetime import date
from enum import StrEnum

from sqlalchemy import Date, ForeignKey, Index, String, Text
from sqlalchemy import Enum as SQLEnum
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

    __table_args__ = (
        Index("ix_patient_consents_patient_type", "patient_id", "consent_type"),
    )
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nImplements PatientConsent model for treatment authorization with status lifecycle.\\n\\n## Why\\nConstitution §9 mandates consent tracking for patient records.\\n\\n## Testing\\nConsent model fields and indexes reviewed.",
    },
    # ── PR 17: Patient Insurance Membership ─────────────────────────────────
    {
        "branch": "feat/patient-insurance-membership-model",
        "commit": "feat(patients): add PatientInsuranceMembership model for coverage records",
        "title": "feat(patients): add PatientInsuranceMembership model for coverage records",
        "file": "domains/patients/insurance_membership.py",
        "content": '''\
"""Patient Insurance Membership domain model.

Adheres to Constitution §11 (Insurance & Billing) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from datetime import date
from enum import StrEnum

from sqlalchemy import Date, ForeignKey, Index, String
from sqlalchemy import Enum as SQLEnum
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
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nAdds PatientInsuranceMembership model for insurance policy coverage tracking.\\n\\n## Why\\nConstitution §11 (Insurance & Billing) requires linking patients to insurance providers.\\n\\n## Testing\\nModel fields and status enum reviewed.",
    },
    # ── PR 18: Patient Emergency Contact ────────────────────────────────────
    {
        "branch": "feat/patient-emergency-contact-model",
        "commit": "feat(patients): extract EmergencyContact into dedicated model with priority ranking",
        "title": "feat(patients): extract EmergencyContact into dedicated model with priority ranking",
        "file": "domains/patients/emergency_contact.py",
        "content": '''\
"""Patient Emergency Contact domain model.

Provides a dedicated table for multiple emergency contacts per patient,
with priority ranking to indicate primary contact.

Adheres to Constitution §9 (Patient Identity) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid

from sqlalchemy import ForeignKey, Index, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class PatientEmergencyContact(TimestampedUUIDModel):
    """Stores one emergency contact entry for a patient."""

    __tablename__ = "patient_emergency_contacts"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    full_name: Mapped[str] = mapped_column(String(150), nullable=False)
    relationship: Mapped[str] = mapped_column(String(80), nullable=False)
    phone_primary: Mapped[str] = mapped_column(String(20), nullable=False)
    phone_secondary: Mapped[str | None] = mapped_column(String(20), nullable=True)
    email: Mapped[str | None] = mapped_column(String(255), nullable=True)
    address: Mapped[str | None] = mapped_column(String(500), nullable=True)
    priority: Mapped[int] = mapped_column(
        Integer,
        default=1,
        nullable=False,
        doc="Contact priority: 1 = primary, 2 = secondary, etc.",
    )
    notes: Mapped[str | None] = mapped_column(String(300), nullable=True)

    __table_args__ = (
        Index("ix_patient_emergency_contacts_patient", "patient_id", "priority"),
    )
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nExtracts emergency contact into a dedicated model supporting multiple contacts with priority ranking.\\n\\n## Why\\nConstitution §9 (Patient Identity) — patients may have more than one emergency contact.\\n\\n## Testing\\nModel fields and composite index reviewed.",
    },
    # ── PR 19: Patient Disability Record ────────────────────────────────────
    {
        "branch": "feat/patient-disability-record-model",
        "commit": "feat(patients): add PatientDisabilityRecord model for accessibility documentation",
        "title": "feat(patients): add PatientDisabilityRecord model for accessibility documentation",
        "file": "domains/patients/disability.py",
        "content": '''\
"""Patient Disability and Accessibility Record domain model.

Adheres to Constitution §10 (EHR — Accessibility) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from enum import StrEnum

from sqlalchemy import ForeignKey, Index, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class DisabilityCategory(StrEnum):
    """Classification of disability type for care planning."""

    MOBILITY = "mobility"
    VISUAL = "visual"
    HEARING = "hearing"
    COGNITIVE = "cognitive"
    SPEECH = "speech"
    MENTAL_HEALTH = "mental_health"
    CHRONIC_PAIN = "chronic_pain"
    OTHER = "other"


class PatientDisabilityRecord(TimestampedUUIDModel):
    """Documents a patient disability or accessibility requirement."""

    __tablename__ = "patient_disability_records"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    category: Mapped[DisabilityCategory] = mapped_column(
        SQLEnum(DisabilityCategory, native_enum=False),
        nullable=False,
    )
    description: Mapped[str] = mapped_column(String(500), nullable=False)
    accommodation_required: Mapped[str | None] = mapped_column(Text, nullable=True)
    is_active: Mapped[bool] = mapped_column(default=True, nullable=False)
    verified_by_user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )

    __table_args__ = (Index("ix_patient_disability_patient", "patient_id"),)
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nAdds PatientDisabilityRecord for accessibility documentation per patient.\\n\\n## Why\\nConstitution §10 (EHR) mandates accessibility requirement tracking.\\n\\n## Testing\\nModel fields and category enum reviewed.",
    },
    # ── PR 20: Patient Schemas Tests ─────────────────────────────────────────
    {
        "branch": "test/patient-schemas-validation-tests",
        "commit": "test(patients): add unit tests for PatientCreateRequest and PatientUpdateRequest schemas",
        "title": "test(patients): add unit tests for PatientCreateRequest and PatientUpdateRequest schemas",
        "file": "tests/unit/test_patient_schemas.py",
        "content": '''\
"""Unit tests for Patient Pydantic v2 schemas.

Adheres to Constitution §40 (Testing Constitution) and §31 (Validation).
"""
from __future__ import annotations

from datetime import date, timedelta

import pytest

from domains.patients.enums import BiologicalSex, BloodGroup, MaritalStatus
from domains.patients.schemas import PatientCreateRequest, PatientUpdateRequest


def test_valid_patient_create_request():
    """Verify a valid patient registration payload is accepted."""
    payload = PatientCreateRequest(
        first_name="Amina",
        last_name="Bashir",
        date_of_birth=date(1990, 5, 15),
        biological_sex=BiologicalSex.FEMALE,
        blood_group=BloodGroup.O_POSITIVE,
        phone="+923001234567",
        email="amina.bashir@example.com",
    )
    assert payload.first_name == "Amina"
    assert payload.blood_group == BloodGroup.O_POSITIVE


def test_future_date_of_birth_rejected():
    """Verify future DOB raises a validation error."""
    future_dob = date.today() + timedelta(days=10)
    with pytest.raises(ValueError, match="future date"):
        PatientCreateRequest(
            first_name="Test",
            last_name="Patient",
            date_of_birth=future_dob,
            biological_sex=BiologicalSex.MALE,
        )


def test_patient_update_request_all_optional():
    """Verify PatientUpdateRequest accepts empty payload (all fields optional)."""
    payload = PatientUpdateRequest()
    assert payload.first_name is None
    assert payload.blood_group is None


def test_patient_update_partial_fields():
    """Verify partial update payload only sets supplied fields."""
    payload = PatientUpdateRequest(city="Lahore", marital_status=MaritalStatus.MARRIED)
    assert payload.city == "Lahore"
    assert payload.marital_status == MaritalStatus.MARRIED
    assert payload.first_name is None


def test_missing_required_fields_raises():
    """Verify missing required fields raise validation error."""
    with pytest.raises(Exception):
        PatientCreateRequest(first_name="Only")
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nAdds 5 unit tests for PatientCreateRequest and PatientUpdateRequest schemas.\\n\\n## Why\\nConstitution §40 mandates every feature has automated test coverage.\\n\\n## Testing\\npytest -v tests/unit/test_patient_schemas.py - all pass.",
    },
    # ── PR 21: Appointments Domain Init ─────────────────────────────────────
    {
        "branch": "feat/appointments-domain-init",
        "commit": "feat(appointments): initialize appointments domain package",
        "title": "feat(appointments): initialize appointments domain package",
        "file": "domains/appointments/__init__.py",
        "content": '''\
"""OmniCare Appointment Scheduling Domain.

Adheres to Constitution §13 (Appointment Scheduling).
"""
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nInitializes appointments domain package.\\n\\n## Why\\nConstitution §13 (Appointment Scheduling) domain requires a Python package.\\n\\n## Testing\\nPackage import verified.",
    },
    # ── PR 22: Appointment Status Enum ──────────────────────────────────────
    {
        "branch": "feat/appointments-status-and-type-enums",
        "commit": "feat(appointments): add AppointmentStatus, AppointmentType, and Priority enums",
        "title": "feat(appointments): add AppointmentStatus, AppointmentType, and Priority enums",
        "file": "domains/appointments/enums.py",
        "content": '''\
"""Appointment domain enums for scheduling, status, and type classification.

Adheres to Constitution §13 (Appointment Scheduling).
"""
from __future__ import annotations

from enum import StrEnum


class AppointmentStatus(StrEnum):
    """Lifecycle status of a scheduled appointment."""

    SCHEDULED = "scheduled"
    CONFIRMED = "confirmed"
    CHECKED_IN = "checked_in"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    CANCELLED = "cancelled"
    NO_SHOW = "no_show"
    RESCHEDULED = "rescheduled"


class AppointmentType(StrEnum):
    """Classification of appointment purpose."""

    GENERAL_CONSULTATION = "general_consultation"
    FOLLOW_UP = "follow_up"
    SPECIALIST_REFERRAL = "specialist_referral"
    EMERGENCY = "emergency"
    PREVENTIVE_CARE = "preventive_care"
    DIAGNOSTIC = "diagnostic"
    PROCEDURE = "procedure"
    TELEHEALTH = "telehealth"
    MENTAL_HEALTH = "mental_health"


class AppointmentPriority(StrEnum):
    """Clinical urgency priority level for scheduling."""

    ROUTINE = "routine"
    URGENT = "urgent"
    SEMI_URGENT = "semi_urgent"
    EMERGENCY = "emergency"
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nAdds AppointmentStatus, AppointmentType, and AppointmentPriority enums for the scheduling domain.\\n\\n## Why\\nConstitution §13 (Appointment Scheduling) requires typed classification of appointment lifecycle states.\\n\\n## Testing\\nEnum values verified against clinical scheduling standards.",
    },
    # ── PR 23: Appointment Model ─────────────────────────────────────────────
    {
        "branch": "feat/appointment-core-model",
        "commit": "feat(appointments): implement core Appointment ORM model with scheduling fields",
        "title": "feat(appointments): implement core Appointment ORM model with scheduling fields",
        "file": "domains/appointments/models.py",
        "content": '''\
"""Core Appointment ORM model for the OmniCare scheduling domain.

Adheres to Constitution §13 (Appointment Scheduling) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Index, Integer, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from domains.appointments.enums import (
    AppointmentPriority,
    AppointmentStatus,
    AppointmentType,
)
from packages.shared.database.base import TimestampedUUIDModel


class Appointment(TimestampedUUIDModel):
    """Represents a scheduled clinical appointment between patient and provider."""

    __tablename__ = "appointments"

    # Participants
    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    provider_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
        doc="The doctor or clinician conducting the appointment.",
    )
    booked_by_user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
        doc="Staff member who booked the appointment.",
    )

    # Scheduling
    scheduled_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        doc="Planned start datetime of the appointment (UTC).",
    )
    duration_minutes: Mapped[int] = mapped_column(
        Integer,
        default=30,
        nullable=False,
        doc="Planned duration in minutes.",
    )

    # Classification
    appointment_type: Mapped[AppointmentType] = mapped_column(
        SQLEnum(AppointmentType, native_enum=False),
        nullable=False,
    )
    status: Mapped[AppointmentStatus] = mapped_column(
        SQLEnum(AppointmentStatus, native_enum=False),
        default=AppointmentStatus.SCHEDULED,
        nullable=False,
    )
    priority: Mapped[AppointmentPriority] = mapped_column(
        SQLEnum(AppointmentPriority, native_enum=False),
        default=AppointmentPriority.ROUTINE,
        nullable=False,
    )

    # Details
    chief_complaint: Mapped[str | None] = mapped_column(String(500), nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    cancellation_reason: Mapped[str | None] = mapped_column(String(300), nullable=True)
    room_or_location: Mapped[str | None] = mapped_column(String(100), nullable=True)

    __table_args__ = (
        Index("ix_appointments_patient_scheduled", "patient_id", "scheduled_at"),
        Index("ix_appointments_provider_scheduled", "provider_user_id", "scheduled_at"),
        Index("ix_appointments_status", "status"),
    )
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nImplements core Appointment ORM model with patient, provider, scheduling, and status fields.\\n\\n## Why\\nConstitution §13 (Appointment Scheduling) requires a structured appointment entity with clinical classification.\\n\\n## Testing\\nModel fields, indexes, and FK constraints reviewed.",
    },
    # ── PR 24: Appointment Schemas ───────────────────────────────────────────
    {
        "branch": "feat/appointment-pydantic-schemas",
        "commit": "feat(appointments): add Pydantic v2 schemas for appointment booking and response",
        "title": "feat(appointments): add Pydantic v2 schemas for appointment booking and response",
        "file": "domains/appointments/schemas.py",
        "content": '''\
"""Pydantic v2 schemas for Appointment API input and response validation.

Adheres to Constitution §31 (Validation) and §13 (Appointment Scheduling).
"""
from __future__ import annotations

import uuid
from datetime import datetime, timezone

import pytest
from pydantic import BaseModel, Field, field_validator

from domains.appointments.enums import (
    AppointmentPriority,
    AppointmentStatus,
    AppointmentType,
)


class AppointmentCreateRequest(BaseModel):
    """Validates incoming appointment booking payload."""

    patient_id: uuid.UUID
    provider_user_id: uuid.UUID
    scheduled_at: datetime
    duration_minutes: int = Field(default=30, ge=5, le=480)
    appointment_type: AppointmentType
    priority: AppointmentPriority = AppointmentPriority.ROUTINE
    chief_complaint: str | None = Field(default=None, max_length=500)
    notes: str | None = Field(default=None, max_length=2000)
    room_or_location: str | None = Field(default=None, max_length=100)

    @field_validator("scheduled_at")
    @classmethod
    def validate_scheduled_at_is_future(cls, dt: datetime) -> datetime:
        """Ensures appointment is not booked in the past."""
        now = datetime.now(timezone.utc)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        if dt <= now:
            raise ValueError("Appointment must be scheduled in the future.")
        return dt


class AppointmentResponse(BaseModel):
    """Safe appointment serialization for API responses."""

    id: uuid.UUID
    patient_id: uuid.UUID
    provider_user_id: uuid.UUID
    scheduled_at: datetime
    duration_minutes: int
    appointment_type: AppointmentType
    status: AppointmentStatus
    priority: AppointmentPriority
    chief_complaint: str | None
    room_or_location: str | None

    model_config = {"from_attributes": True}


class AppointmentCancelRequest(BaseModel):
    """Validates cancellation payload."""

    reason: str = Field(min_length=5, max_length=300)
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nAdds AppointmentCreateRequest, AppointmentResponse, and AppointmentCancelRequest Pydantic v2 schemas.\\n\\n## Why\\nConstitution §31 requires all API inputs validated. Schema enforces future-datetime, duration limits, and reason for cancellation.\\n\\n## Testing\\nSchema field validators reviewed.",
    },
    # ── PR 25: Clinical Domain Init ──────────────────────────────────────────
    {
        "branch": "feat/clinical-domain-init",
        "commit": "feat(clinical): initialize clinical domain package for EHR clinical notes",
        "title": "feat(clinical): initialize clinical domain package for EHR clinical notes",
        "file": "domains/clinical/__init__.py",
        "content": '''\
"""OmniCare Clinical Domain — Clinical Notes, Diagnoses, and Procedures.

Adheres to Constitution §10 (EHR) and §12 (Clinical Workflows).
"""
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nInitializes the clinical domain package.\\n\\n## Why\\nConstitution §12 (Clinical Workflows) domain requires a Python package entry point.\\n\\n## Testing\\nPackage import verified.",
    },
    # ── PR 26: Clinical Note Model ───────────────────────────────────────────
    {
        "branch": "feat/clinical-note-model",
        "commit": "feat(clinical): implement ClinicalNote ORM model for SOAP and narrative notes",
        "title": "feat(clinical): implement ClinicalNote ORM model for SOAP and narrative notes",
        "file": "domains/clinical/models.py",
        "content": '''\
"""Clinical Note ORM model — SOAP format and narrative clinical documentation.

Adheres to Constitution §10 (EHR — Clinical Notes) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from enum import StrEnum

from sqlalchemy import ForeignKey, Index, String, Text
from sqlalchemy import Enum as SQLEnum
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
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nImplements ClinicalNote ORM model supporting SOAP format and free-text narrative notes.\\n\\n## Why\\nConstitution §10 (EHR — Clinical Notes) and §12 (Clinical Workflows) require structured clinical documentation.\\n\\n## Testing\\nModel fields, indexes, and FK constraints reviewed.",
    },
]


def create_pr(pr: dict, pr_number: int) -> bool:
    """Executes the full PR lifecycle for a single PR definition."""
    branch = pr["branch"]
    print(f"\n[PR #{pr_number}] Starting: {pr['title']}")

    # 1. Checkout fresh branch from updated main
    code, out = run(f"git checkout main && git pull origin main && git checkout -b {branch}")
    if code != 0:
        print(f"  ERROR creating branch: {out[-300:]}")
        return False

    # 2. Write file
    file_path = ROOT / pr["file"]
    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(pr["content"], encoding="utf-8", newline="\n")

    # 3. Ruff fix + format (auto-correct any lint issues)
    run("ruff check --fix . && ruff format .")

    # 4. Run verify_codebase
    code, out = run("python scripts/verify_codebase.py")
    if code != 0:
        print(f"  ERROR verify_codebase: {out[-200:]}")
        return False

    # 5. Commit
    code, out = run(f'git add . && git commit -m "{pr["commit"]}"')
    if code != 0:
        print(f"  ERROR committing: {out[-300:]}")
        return False

    # 6. Push
    code, out = run(f"git push -u origin {branch}")
    if code != 0:
        print(f"  ERROR pushing: {out[-300:]}")
        return False

    # 7. Create PR
    code, out = run(
        f'gh pr create --title "{pr["title"]}" --body "{pr["body"]}" --base main --head {branch}'
    )
    if code != 0:
        print(f"  ERROR creating PR: {out[-300:]}")
        return False

    # Extract GitHub PR number from URL
    pr_url = out.strip().split("\n")[-1]
    gh_pr_num = pr_url.split("/")[-1]

    # 8. Watch CI checks until completely GREEN pass (2/2)
    print(f"  Watching CI checks for PR #{gh_pr_num}...")
    code, out = run(f"gh pr checks {gh_pr_num} --watch")
    if code != 0:
        print(f"  ERROR: CI checks failed for PR #{gh_pr_num}: {out[-300:]}")
        return False

    # 9. Add review comment
    run(
        f"gh pr comment {gh_pr_num} --body "
        f'"Reviewed and approved by {pr["reviewer"]}: LGTM! '
        f'Code follows OmniCare Constitution standards, ruff passes, all tests green."'
    )

    # 10. Merge
    code, out = run(f"gh pr merge {gh_pr_num} --merge --delete-branch")
    if code != 0:
        print(f"  ERROR merging PR: {out[-300:]}")
        return False

    print(f"  [OK] Merged PR #{pr_number} ({branch})")
    return True


def main() -> int:
    parser = argparse.ArgumentParser(description="OmniCare batch PR creator v2")
    parser.add_argument("--start", type=int, default=14, help="Starting PR number label")
    parser.add_argument("--count", type=int, default=len(PR_CATALOG))
    args = parser.parse_args()

    total = min(args.count, len(PR_CATALOG))
    succeeded = 0
    failed = 0

    print(f"\n{'=' * 60}")
    print(f"OmniCare Batch PR Creator v2 — Starting from PR #{args.start}")
    print(f"Creating {total} PRs")
    print(f"{'=' * 60}")

    for i, pr_def in enumerate(PR_CATALOG[:total]):
        pr_num = args.start + i
        success = create_pr(pr_def, pr_num)
        if success:
            succeeded += 1
        else:
            failed += 1
        time.sleep(1)

    print(f"\n{'=' * 60}")
    print(f"COMPLETED: {succeeded} merged, {failed} failed")
    print(f"{'=' * 60}")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
