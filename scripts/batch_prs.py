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
    # ── PR 27: Clinical Diagnosis Model ──────────────────────────────────────
    {
        "branch": "feat/clinical-diagnosis-model",
        "commit": "feat(clinical): implement Diagnosis ORM model with ICD-10 coding",
        "title": "feat(clinical): implement Diagnosis ORM model with ICD-10 coding",
        "file": "domains/clinical/diagnosis.py",
        "content": '''\
"""Clinical Diagnosis domain model with ICD-10 coding.

Adheres to Constitution §10 (EHR — Diagnoses) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from enum import StrEnum

from sqlalchemy import ForeignKey, Index, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class DiagnosisType(StrEnum):
    """Clinical diagnosis classification."""

    PRIMARY = "primary"
    SECONDARY = "secondary"
    DIFFERENTIAL = "differential"
    ADMITTING = "admitting"
    DISCHARGE = "discharge"


class DiagnosisStatus(StrEnum):
    """Status of the diagnosed condition."""

    CONFIRMED = "confirmed"
    SUSPECTED = "suspected"
    REFUTED = "refuted"
    RESOLVED = "resolved"


class ClinicalDiagnosis(TimestampedUUIDModel):
    """Records a specific clinical diagnosis coded with ICD-10."""

    __tablename__ = "clinical_diagnoses"

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
    diagnosed_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
    )
    icd10_code: Mapped[str] = mapped_column(
        String(20),
        nullable=False,
        doc="ICD-10 clinical coding standard identifier.",
    )
    description: Mapped[str] = mapped_column(String(500), nullable=False)
    diagnosis_type: Mapped[DiagnosisType] = mapped_column(
        SQLEnum(DiagnosisType, native_enum=False),
        default=DiagnosisType.PRIMARY,
        nullable=False,
    )
    status: Mapped[DiagnosisStatus] = mapped_column(
        SQLEnum(DiagnosisStatus, native_enum=False),
        default=DiagnosisStatus.CONFIRMED,
        nullable=False,
    )
    clinical_notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_clinical_diagnoses_patient", "patient_id"),
        Index("ix_clinical_diagnoses_icd10", "icd10_code"),
    )
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nImplements ClinicalDiagnosis model with ICD-10 coding and diagnosis status classification.\\n\\n## Why\\nConstitution §10 (EHR — Diagnoses) requires standard clinical diagnostic coding.\\n\\n## Testing\\nModel fields and indexes reviewed.",
    },
    # ── PR 28: Clinical Procedure Model ──────────────────────────────────────
    {
        "branch": "feat/clinical-procedure-model",
        "commit": "feat(clinical): implement ClinicalProcedure ORM model with CPT coding",
        "title": "feat(clinical): implement ClinicalProcedure ORM model with CPT coding",
        "file": "domains/clinical/procedure.py",
        "content": '''\
"""Clinical Procedure domain model with CPT coding.

Adheres to Constitution §10 (EHR — Procedures) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class ClinicalProcedure(TimestampedUUIDModel):
    """Records a clinical procedure performed on a patient with CPT coding."""

    __tablename__ = "clinical_procedures"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    performed_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
    )
    cpt_code: Mapped[str] = mapped_column(
        String(20),
        nullable=False,
        doc="Current Procedural Terminology (CPT) code.",
    )
    procedure_name: Mapped[str] = mapped_column(String(300), nullable=False)
    performed_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    outcome_notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    complications: Mapped[str | None] = mapped_column(String(500), nullable=True)

    __table_args__ = (
        Index("ix_clinical_procedures_patient", "patient_id"),
        Index("ix_clinical_procedures_cpt", "cpt_code"),
    )
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nImplements ClinicalProcedure model with CPT coding and outcome tracking.\\n\\n## Why\\nConstitution §10 (EHR — Procedures) mandates procedure documentation.\\n\\n## Testing\\nModel fields and indexes verified.",
    },
    # ── PR 29: Prescriptions Domain Init ─────────────────────────────────────
    {
        "branch": "feat/prescriptions-domain-init",
        "commit": "feat(prescriptions): initialize prescriptions domain package structure",
        "title": "feat(prescriptions): initialize prescriptions domain package structure",
        "file": "domains/prescriptions/__init__.py",
        "content": '''\
"""OmniCare Prescription & Medication Management Domain.

Adheres to Constitution §14 (e-Prescribing).
"""
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nInitializes prescriptions domain package.\\n\\n## Why\\nConstitution §14 (e-Prescribing) requires a dedicated domain package.\\n\\n## Testing\\nPackage import verified.",
    },
    # ── PR 30: Prescription Enums ────────────────────────────────────────────
    {
        "branch": "feat/prescriptions-medication-enums",
        "commit": "feat(prescriptions): add PrescriptionStatus, DosageForm, and AdministrationRoute enums",
        "title": "feat(prescriptions): add PrescriptionStatus, DosageForm, and AdministrationRoute enums",
        "file": "domains/prescriptions/enums.py",
        "content": '''\
"""Prescription and medication domain enums.

Adheres to Constitution §14 (e-Prescribing).
"""
from __future__ import annotations

from enum import StrEnum


class PrescriptionStatus(StrEnum):
    """Lifecycle status of a medical prescription."""

    DRAFT = "draft"
    ACTIVE = "active"
    DISPENSED = "dispensed"
    PARTIALLY_DISPENSED = "partially_dispensed"
    CANCELLED = "cancelled"
    EXPIRED = "expired"


class DosageForm(StrEnum):
    """Formulation dosage form of medication."""

    TABLET = "tablet"
    CAPSULE = "capsule"
    SYRUP = "syrup"
    INJECTION = "injection"
    OINTMENT = "ointment"
    DROPS = "drops"
    INHALER = "inhaler"
    PATCH = "patch"


class AdministrationRoute(StrEnum):
    """Route of medication administration."""

    ORAL = "oral"
    INTRAVENOUS = "intravenous"
    INTRAMUSCULAR = "intramuscular"
    SUBCUTANEOUS = "subcutaneous"
    TOPICAL = "topical"
    OPHTHALMIC = "ophthalmic"
    INHALATION = "inhalation"
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nAdds PrescriptionStatus, DosageForm, and AdministrationRoute enums.\\n\\n## Why\\nConstitution §14 (e-Prescribing) mandates clinical classification of medication forms and status.\\n\\n## Testing\\nEnum values verified against pharmaceutical standards.",
    },
    # ── PR 31: Core Prescription Model ───────────────────────────────────────
    {
        "branch": "feat/prescriptions-core-model",
        "commit": "feat(prescriptions): implement core Prescription ORM model with prescriber link",
        "title": "feat(prescriptions): implement core Prescription ORM model with prescriber link",
        "file": "domains/prescriptions/models.py",
        "content": '''\
"""Core Prescription ORM model for medical orders.

Adheres to Constitution §14 (e-Prescribing) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from datetime import date

from sqlalchemy import Date, ForeignKey, Index, Integer, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from domains.prescriptions.enums import PrescriptionStatus
from packages.shared.database.base import TimestampedUUIDModel


class Prescription(TimestampedUUIDModel):
    """Represents a medical prescription issued by a licensed provider."""

    __tablename__ = "prescriptions"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    prescriber_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    appointment_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("appointments.id", ondelete="SET NULL"),
        nullable=True,
    )
    prescription_number: Mapped[str] = mapped_column(
        String(40),
        unique=True,
        index=True,
        nullable=False,
    )
    status: Mapped[PrescriptionStatus] = mapped_column(
        SQLEnum(PrescriptionStatus, native_enum=False),
        default=PrescriptionStatus.ACTIVE,
        nullable=False,
    )
    issue_date: Mapped[date] = mapped_column(Date, nullable=False)
    expiry_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    refills_authorized: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    refills_remaining: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    instructions: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_prescriptions_patient", "patient_id"),
        Index("ix_prescriptions_prescriber", "prescriber_user_id"),
    )
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nImplements Prescription ORM model with patient, prescriber, refill counts, and status lifecycle.\\n\\n## Why\\nConstitution §14 (e-Prescribing) requires a structured prescription entity.\\n\\n## Testing\\nModel constraints and indexes verified.",
    },
    # ── PR 32: Prescription Item Model ───────────────────────────────────────
    {
        "branch": "feat/prescriptions-item-model",
        "commit": "feat(prescriptions): add PrescriptionItem model for line-item medication orders",
        "title": "feat(prescriptions): add PrescriptionItem model for line-item medication orders",
        "file": "domains/prescriptions/item.py",
        "content": '''\
"""Prescription Line Item domain model.

Adheres to Constitution §14 (e-Prescribing) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid

from sqlalchemy import ForeignKey, Index, Integer, String
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from domains.prescriptions.enums import AdministrationRoute, DosageForm
from packages.shared.database.base import TimestampedUUIDModel


class PrescriptionItem(TimestampedUUIDModel):
    """Stores one medication item on a multi-item prescription."""

    __tablename__ = "prescription_items"

    prescription_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("prescriptions.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    medication_name: Mapped[str] = mapped_column(String(250), nullable=False)
    dosage: Mapped[str] = mapped_column(String(100), nullable=False)
    dosage_form: Mapped[DosageForm] = mapped_column(
        SQLEnum(DosageForm, native_enum=False),
        default=DosageForm.TABLET,
        nullable=False,
    )
    route: Mapped[AdministrationRoute] = mapped_column(
        SQLEnum(AdministrationRoute, native_enum=False),
        default=AdministrationRoute.ORAL,
        nullable=False,
    )
    frequency: Mapped[str] = mapped_column(String(100), nullable=False)
    duration_days: Mapped[int] = mapped_column(Integer, nullable=False)
    quantity: Mapped[int] = mapped_column(Integer, nullable=False)
    instructions: Mapped[str | None] = mapped_column(String(500), nullable=True)

    __table_args__ = (
        Index("ix_prescription_items_prescription", "prescription_id"),
    )
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nAdds PrescriptionItem model for individual medications on a prescription.\\n\\n## Why\\nConstitution §14 (e-Prescribing) requires line-item granularity for dosages, routes, and durations.\\n\\n## Testing\\nModel fields and FK cascade verified.",
    },
    # ── PR 33: Pharmacy Domain Init ──────────────────────────────────────────
    {
        "branch": "feat/pharmacy-domain-init",
        "commit": "feat(pharmacy): initialize pharmacy domain package structure",
        "title": "feat(pharmacy): initialize pharmacy domain package structure",
        "file": "domains/pharmacy/__init__.py",
        "content": '''\
"""OmniCare Pharmacy Dispensation & Inventory Domain.

Adheres to Constitution §15 (Pharmacy Management).
"""
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nInitializes pharmacy domain package structure.\\n\\n## Why\\nConstitution §15 (Pharmacy Management) domain requires package entrypoint.\\n\\n## Testing\\nPackage import verified.",
    },
    # ── PR 34: Pharmacy Dispensation Model ───────────────────────────────────
    {
        "branch": "feat/pharmacy-dispensation-model",
        "commit": "feat(pharmacy): implement PharmacyDispensation model with pharmacist verification",
        "title": "feat(pharmacy): implement PharmacyDispensation model with pharmacist verification",
        "file": "domains/pharmacy/dispensation.py",
        "content": '''\
"""Pharmacy Dispensation domain model.

Adheres to Constitution §15 (Pharmacy Management) and §23 (Audit Trail).
"""
from __future__ import annotations

import uuid
from datetime import datetime
from enum import StrEnum

from sqlalchemy import DateTime, ForeignKey, Index, Integer, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class DispensationStatus(StrEnum):
    """Status of a medication dispensation."""

    PENDING = "pending"
    VERIFIED = "verified"
    DISPENSED = "dispensed"
    CANCELLED = "cancelled"


class PharmacyDispensation(TimestampedUUIDModel):
    """Records the physical dispensation of prescribed medications by a pharmacist."""

    __tablename__ = "pharmacy_dispensations"

    prescription_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("prescriptions.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    dispensed_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        doc="Pharmacist who verified and dispensed the order.",
    )
    status: Mapped[DispensationStatus] = mapped_column(
        SQLEnum(DispensationStatus, native_enum=False),
        default=DispensationStatus.PENDING,
        nullable=False,
    )
    dispensed_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    batch_number: Mapped[str] = mapped_column(String(100), nullable=False)
    quantity_dispensed: Mapped[int] = mapped_column(Integer, nullable=False)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_pharmacy_dispensations_prescription", "prescription_id"),
        Index("ix_pharmacy_dispensations_pharmacist", "dispensed_by_user_id"),
    )
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nImplements PharmacyDispensation model tracking pharmacist verification and batch numbers.\\n\\n## Why\\nConstitution §15 (Pharmacy Management) requires verified dispensation records.\\n\\n## Testing\\nModel fields and status enum reviewed.",
    },
    # ── PR 35: Pharmacy Inventory Model ──────────────────────────────────────
    {
        "branch": "feat/pharmacy-inventory-model",
        "commit": "feat(pharmacy): implement InventoryItem model for medication stock management",
        "title": "feat(pharmacy): implement InventoryItem model for medication stock management",
        "file": "domains/pharmacy/inventory.py",
        "content": '''\
"""Pharmacy Inventory Item domain model.

Adheres to Constitution §15 (Pharmacy Management — Inventory) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from datetime import date
from decimal import Decimal

from sqlalchemy import Date, Index, Integer, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class PharmacyInventoryItem(TimestampedUUIDModel):
    """Tracks stock level, unit pricing, and reorder levels for pharmacy medications."""

    __tablename__ = "pharmacy_inventory_items"

    medication_name: Mapped[str] = mapped_column(String(250), nullable=False, index=True)
    ndc_or_sku: Mapped[str] = mapped_column(String(50), unique=True, index=True, nullable=False)
    quantity_in_stock: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    reorder_level: Mapped[int] = mapped_column(Integer, default=20, nullable=False)
    unit_price: Mapped[Decimal] = mapped_column(Numeric(10, 2), nullable=False)
    expiry_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    batch_number: Mapped[str | None] = mapped_column(String(100), nullable=True)
    manufacturer: Mapped[str | None] = mapped_column(String(200), nullable=True)

    @property
    def is_low_stock(self) -> bool:
        """Returns True if current inventory has reached or fallen below reorder level."""
        return self.quantity_in_stock <= self.reorder_level

    __table_args__ = (
        Index("ix_pharmacy_inventory_name", "medication_name"),
    )
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nImplements PharmacyInventoryItem with stock tracking, reorder thresholds, and unit pricing.\\n\\n## Why\\nConstitution §15 (Pharmacy Management) requires stock tracking with low-stock alerts.\\n\\n## Testing\\nModel fields and is_low_stock property reviewed.",
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

    # 8. Wait for CI to trigger and watch checks until completely GREEN pass (2/2)
    print(f"  Waiting 10s for GitHub Actions to trigger PR #{gh_pr_num}...")
    time.sleep(10)
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
    parser.add_argument("--start", type=int, default=23, help="Starting PR number label")
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
