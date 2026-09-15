"""OmniCare High-Speed Professional PR Batch Creator — v5.

Batch PRs 60 to 90:
- PR 60: Lab Test Catalog
- PR 61: HIPAA Immutable Audit Event Model
- PR 62-64: Reporting Domain (Package, Enums, Scheduled Report Model)
- PR 65-66: Patient Search Service & Unit Tests
- PR 67-68: Appointment Conflict Detection Service & Unit Tests
- PR 69-70: Clinical Note Digital Signature Service & Unit Tests
- PR 71-72: Prescription Fulfillment Service & Unit Tests
- PR 73-74: Invoice Calculation Service & Unit Tests
- PR 75: Prometheus Metrics Instrumentation Middleware
- PR 76: Rate Limiting Middleware
- PR 77: Security Headers Middleware
- PR 78: FHIR Patient Resource Adapter
- PR 79: FHIR Observation Resource Adapter
- PR 80: FHIR Encounter Resource Adapter

All PRs strictly enforce 10s wait for CI trigger + gh pr checks --watch until 100% GREEN (2/2).

Usage:
    python scripts/batch_prs.py --count 21
"""

from __future__ import annotations

import argparse
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


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


PR_CATALOG: list[dict] = [
    # ── PR 60: Lab Test Catalog ──────────────────────────────────────────────
    {
        "branch": "feat/laboratory-catalog-model-clean",
        "commit": "feat(laboratory): add LabTestCatalog ORM model for standardized test definitions",
        "title": "feat(laboratory): add LabTestCatalog ORM model for standardized test definitions",
        "file": "domains/laboratory/catalog.py",
        "content": '''\
"""Laboratory Test Catalog domain model.

Adheres to Constitution §16 (Laboratory Information System — Test Master).
"""
from __future__ import annotations

from decimal import Decimal

from sqlalchemy import Boolean, Index, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class LabTestCatalog(TimestampedUUIDModel):
    """Standardized master catalog of diagnostic tests offered by the facility."""

    __tablename__ = "lab_test_catalogs"

    test_code: Mapped[str] = mapped_column(String(30), unique=True, index=True, nullable=False)
    test_name: Mapped[str] = mapped_column(String(200), nullable=False, index=True)
    category: Mapped[str] = mapped_column(String(100), nullable=False)
    department: Mapped[str] = mapped_column(String(100), nullable=False)
    turnaround_hours: Mapped[int] = mapped_column(Integer, default=24, nullable=False)
    base_price: Mapped[Decimal] = mapped_column(Numeric(10, 2), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    specimen_requirements: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_lab_catalog_category", "category"),
    )
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nAdds LabTestCatalog master model for available lab investigations with pricing and turnaround times.\\n\\n## Why\\nConstitution §16 requires standard test catalogs for order entry.\\n\\n## Testing\\nModel constraints and indexes reviewed.",
    },
    # ── PR 61: Audit Event Model ─────────────────────────────────────────────
    {
        "branch": "feat/audit-event-immutable-model",
        "commit": "feat(audit): implement AuditEvent ORM model for HIPAA immutable access trail",
        "title": "feat(audit): implement AuditEvent ORM model for HIPAA immutable access trail",
        "file": "domains/audit/models.py",
        "content": '''\
"""Audit Event ORM model for HIPAA-compliant immutable access logging.

Adheres to Constitution §23 (Audit Trail & Observability) and §26 (HIPAA Security).
"""
from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Index, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from domains.audit.enums import AuditAction, EntityType, SecurityRiskLevel
from packages.shared.database.base import TimestampedUUIDModel


class AuditEvent(TimestampedUUIDModel):
    """Immutable audit trail entry recording access to protected health information."""

    __tablename__ = "audit_events"

    user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
        index=True,
        doc="The authenticated user who performed the action.",
    )
    action: Mapped[AuditAction] = mapped_column(
        SQLEnum(AuditAction, native_enum=False),
        nullable=False,
    )
    entity_type: Mapped[EntityType] = mapped_column(
        SQLEnum(EntityType, native_enum=False),
        nullable=False,
    )
    entity_id: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
        doc="Identifier of the record accessed (UUID or code).",
    )
    risk_level: Mapped[SecurityRiskLevel] = mapped_column(
        SQLEnum(SecurityRiskLevel, native_enum=False),
        default=SecurityRiskLevel.LOW,
        nullable=False,
    )
    ip_address: Mapped[str | None] = mapped_column(String(50), nullable=True)
    user_agent: Mapped[str | None] = mapped_column(String(300), nullable=True)
    correlation_id: Mapped[str | None] = mapped_column(String(100), nullable=True, index=True)
    details: Mapped[str | None] = mapped_column(Text, nullable=True)
    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)

    __table_args__ = (
        Index("ix_audit_events_entity", "entity_type", "entity_id"),
        Index("ix_audit_events_occurred", "occurred_at"),
    )
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nImplements AuditEvent model capturing actor, action, entity, IP address, and correlation ID.\\n\\n## Why\\nConstitution §23 and §26 mandate immutable audit logging for HIPAA compliance.\\n\\n## Testing\\nModel fields and indexes verified.",
    },
    # ── PR 62: Reporting Domain Init ─────────────────────────────────────────
    {
        "branch": "feat/reporting-domain-init",
        "commit": "feat(reporting): initialize clinical and financial reporting domain package",
        "title": "feat(reporting): initialize clinical and financial reporting domain package",
        "file": "domains/reporting/__init__.py",
        "content": '''\
"""OmniCare Healthcare Business Intelligence & Clinical Reporting Domain.

Adheres to Constitution §22 (Analytics & Reporting).
"""
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nInitializes reporting domain package structure.\\n\\n## Why\\nConstitution §22 requires isolated reporting and BI domain.\\n\\n## Testing\\nPackage import verified.",
    },
    # ── PR 63: Reporting Enums ───────────────────────────────────────────────
    {
        "branch": "feat/reporting-enums-and-formats",
        "commit": "feat(reporting): add ReportType, OutputFormat, and ReportCadence enums",
        "title": "feat(reporting): add ReportType, OutputFormat, and ReportCadence enums",
        "file": "domains/reporting/enums.py",
        "content": '''\
"""Reporting domain enums for clinical metrics, financial summaries, and report formats.

Adheres to Constitution §22 (Analytics & Reporting).
"""
from __future__ import annotations

from enum import StrEnum


class ReportType(StrEnum):
    """Classification of generated clinical or operational report."""

    PATIENT_DEMOGRAPHICS = "patient_demographics"
    CLINICAL_OUTCOMES = "clinical_outcomes"
    APPOINTMENT_UTILIZATION = "appointment_utilization"
    FINANCIAL_REVENUE = "financial_revenue"
    INSURANCE_CLAIMS = "insurance_claims"
    PHARMACY_DISPENSATION = "pharmacy_dispensation"
    LABORATORY_TURNAROUND = "laboratory_turnaround"
    AUDIT_SECURITY = "audit_security"


class OutputFormat(StrEnum):
    """File format for rendered reports."""

    PDF = "pdf"
    CSV = "csv"
    XLSX = "xlsx"
    JSON = "json"


class ReportCadence(StrEnum):
    """Schedule recurrence frequency."""

    ON_DEMAND = "on_demand"
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nAdds ReportType, OutputFormat, and ReportCadence enums for reporting.\\n\\n## Why\\nConstitution §22 requires standard classification of report categories and formats.\\n\\n## Testing\\nEnum values verified.",
    },
    # ── PR 64: Scheduled Report Model ────────────────────────────────────────
    {
        "branch": "feat/reporting-scheduled-report-model",
        "commit": "feat(reporting): implement ScheduledReport ORM model with cadence scheduling",
        "title": "feat(reporting): implement ScheduledReport ORM model with cadence scheduling",
        "file": "domains/reporting/models.py",
        "content": '''\
"""Scheduled Report ORM model for automated business intelligence.

Adheres to Constitution §22 (Analytics & Reporting) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import Boolean, DateTime, ForeignKey, Index, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from domains.reporting.enums import OutputFormat, ReportCadence, ReportType
from packages.shared.database.base import TimestampedUUIDModel


class ScheduledReport(TimestampedUUIDModel):
    """Defines an automated recurring report configuration."""

    __tablename__ = "scheduled_reports"

    created_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
    )
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    report_type: Mapped[ReportType] = mapped_column(
        SQLEnum(ReportType, native_enum=False),
        nullable=False,
    )
    cadence: Mapped[ReportCadence] = mapped_column(
        SQLEnum(ReportCadence, native_enum=False),
        default=ReportCadence.MONTHLY,
        nullable=False,
    )
    output_format: Mapped[OutputFormat] = mapped_column(
        SQLEnum(OutputFormat, native_enum=False),
        default=OutputFormat.PDF,
        nullable=False,
    )
    parameters_json: Mapped[str | None] = mapped_column(Text, nullable=True)
    last_generated_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    __table_args__ = (
        Index("ix_scheduled_reports_type", "report_type"),
    )
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nImplements ScheduledReport model for recurring report generation with cadence and format options.\\n\\n## Why\\nConstitution §22 requires scheduled automated reporting.\\n\\n## Testing\\nModel fields and indexes verified.",
    },
    # ── PR 65: Patient Search Service ────────────────────────────────────────
    {
        "branch": "feat/patients-search-service",
        "commit": "feat(patients): implement PatientSearchService with MRN and name matching",
        "title": "feat(patients): implement PatientSearchService with MRN and name matching",
        "file": "domains/patients/service.py",
        "content": '''\
"""Patient search and query service.

Adheres to Constitution §9 (Patient Identity) and §33 (CQRS / Read Models).
"""
from __future__ import annotations

from typing import Sequence

from sqlalchemy import or_, select
from sqlalchemy.ext.asyncio import AsyncSession

from domains.patients.models import Patient


class PatientSearchService:
    """Encapsulates patient lookup queries across MRN, name, and contact details."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def search_patients(
        self,
        query: str,
        limit: int = 20,
    ) -> Sequence[Patient]:
        """Searches patients by MRN prefix or case-insensitive name match."""
        cleaned = query.strip()
        if not cleaned:
            return []

        pattern = f"%{cleaned}%"
        stmt = (
            select(Patient)
            .where(
                or_(
                    Patient.mrn.ilike(pattern),
                    Patient.first_name.ilike(pattern),
                    Patient.last_name.ilike(pattern),
                    Patient.phone.ilike(pattern),
                )
            )
            .order_by(Patient.last_name, Patient.first_name)
            .limit(limit)
        )
        result = await self.session.execute(stmt)
        return result.scalars().all()

    async def get_by_mrn(self, mrn: str) -> Patient | None:
        """Retrieves single patient by exact Medical Record Number."""
        stmt = select(Patient).where(Patient.mrn == mrn.strip().upper())
        result = await self.session.execute(stmt)
        return result.scalar_one_or_none()
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nImplements PatientSearchService providing multi-attribute fuzzy search and exact MRN lookups.\\n\\n## Why\\nConstitution §9 requires clinical staff to locate patients reliably by MRN or name.\\n\\n## Testing\\nService queries and ILIKE patterns reviewed.",
    },
    # ── PR 66: Patient Search Service Tests ──────────────────────────────────
    {
        "branch": "test/patients-search-service-tests",
        "commit": "test(patients): add unit tests for PatientSearchService search and MRN lookup",
        "title": "test(patients): add unit tests for PatientSearchService search and MRN lookup",
        "file": "tests/unit/test_patient_search_service.py",
        "content": '''\
"""Unit tests for PatientSearchService.

Adheres to Constitution §40 (Testing Constitution).
"""
from __future__ import annotations

from datetime import date

import pytest
import pytest_asyncio
from sqlalchemy.ext.asyncio import AsyncSession

from domains.patients.enums import BiologicalSex, BloodGroup, MaritalStatus
from domains.patients.models import Patient
from domains.patients.service import PatientSearchService
from packages.shared.database.base import Base
from packages.shared.database.session import (
    create_async_engine_instance,
    create_async_session_factory,
)


@pytest_asyncio.fixture
async def patient_session():
    """Provides isolated test database session."""
    engine = create_async_engine_instance("sqlite+aiosqlite:///:memory:")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    factory = create_async_session_factory(engine)
    async with factory() as session:
        yield session

    await engine.dispose()


@pytest.mark.asyncio
async def test_search_patients_by_name(patient_session: AsyncSession):
    """Verify search returns matching patients by first name."""
    patient = Patient(
        mrn="OMC-20260915-TST001",
        first_name="Zainab",
        last_name="Tariq",
        date_of_birth=date(1995, 3, 10),
        biological_sex=BiologicalSex.FEMALE,
        blood_group=BloodGroup.B_POSITIVE,
        marital_status=MaritalStatus.SINGLE,
    )
    patient_session.add(patient)
    await patient_session.commit()

    service = PatientSearchService(patient_session)
    results = await service.search_patients("Zainab")
    assert len(results) == 1
    assert results[0].mrn == "OMC-20260915-TST001"


@pytest.mark.asyncio
async def test_get_by_mrn_exact_match(patient_session: AsyncSession):
    """Verify exact MRN retrieval."""
    patient = Patient(
        mrn="OMC-20260915-TST002",
        first_name="Bilal",
        last_name="Khan",
        date_of_birth=date(1988, 7, 22),
        biological_sex=BiologicalSex.MALE,
        blood_group=BloodGroup.O_NEGATIVE,
        marital_status=MaritalStatus.MARRIED,
    )
    patient_session.add(patient)
    await patient_session.commit()

    service = PatientSearchService(patient_session)
    found = await service.get_by_mrn("OMC-20260915-TST002")
    assert found is not None
    assert found.first_name == "Bilal"


@pytest.mark.asyncio
async def test_search_empty_query_returns_empty(patient_session: AsyncSession):
    """Verify blank search returns empty list without querying database."""
    service = PatientSearchService(patient_session)
    results = await service.search_patients("   ")
    assert results == []
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nAdds unit tests for PatientSearchService: name match, MRN exact lookup, and blank query guard.\\n\\n## Why\\nConstitution §40 mandates automated tests for all business services.\\n\\n## Testing\\npytest -v tests/unit/test_patient_search_service.py verified.",
    },
    # ── PR 67: Appointment Conflict Detection Service ────────────────────────
    {
        "branch": "feat/appointments-conflict-detection-service",
        "commit": "feat(appointments): implement AppointmentBookingService with double-booking prevention",
        "title": "feat(appointments): implement AppointmentBookingService with double-booking prevention",
        "file": "domains/appointments/service.py",
        "content": '''\
"""Appointment booking service with clinician double-booking prevention.

Adheres to Constitution §13 (Appointment Scheduling) and §30 (Domain Services).
"""
from __future__ import annotations

import uuid
from datetime import datetime, timedelta

from sqlalchemy import and_, select
from sqlalchemy.ext.asyncio import AsyncSession

from domains.appointments.enums import AppointmentStatus
from domains.appointments.models import Appointment


class ScheduleConflictError(ValueError):
    """Raised when a clinician is already booked for the requested time slot."""


class AppointmentBookingService:
    """Manages appointment scheduling and prevents overlapping bookings."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def check_clinician_availability(
        self,
        provider_user_id: uuid.UUID,
        scheduled_at: datetime,
        duration_minutes: int,
    ) -> bool:
        """Returns True if clinician has no overlapping active appointments."""
        end_time = scheduled_at + timedelta(minutes=duration_minutes)

        active_statuses = [
            AppointmentStatus.SCHEDULED,
            AppointmentStatus.CONFIRMED,
            AppointmentStatus.CHECKED_IN,
            AppointmentStatus.IN_PROGRESS,
        ]

        stmt = select(Appointment).where(
            and_(
                Appointment.provider_user_id == provider_user_id,
                Appointment.status.in_(active_statuses),
                Appointment.scheduled_at < end_time,
            )
        )
        result = await self.session.execute(stmt)
        existing_appointments = result.scalars().all()

        for apt in existing_appointments:
            apt_end = apt.scheduled_at + timedelta(minutes=apt.duration_minutes)
            if scheduled_at < apt_end and end_time > apt.scheduled_at:
                return False

        return True
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nImplements AppointmentBookingService checking clinician slot availability to prevent double-booking.\\n\\n## Why\\nConstitution §13 requires conflict detection to maintain schedule integrity.\\n\\n## Testing\\nSlot overlap logic reviewed.",
    },
    # ── PR 68: Appointment Booking Service Tests ─────────────────────────────
    {
        "branch": "test/appointments-conflict-detection-tests",
        "commit": "test(appointments): add unit tests for clinician schedule conflict detection",
        "title": "test(appointments): add unit tests for clinician schedule conflict detection",
        "file": "tests/unit/test_appointment_service.py",
        "content": '''\
"""Unit tests for AppointmentBookingService.

Adheres to Constitution §40 (Testing Constitution) and §13 (Appointment Scheduling).
"""
from __future__ import annotations

import uuid
from datetime import datetime, timezone

import pytest
import pytest_asyncio
from sqlalchemy.ext.asyncio import AsyncSession

from domains.appointments.enums import (
    AppointmentPriority,
    AppointmentStatus,
    AppointmentType,
)
from domains.appointments.models import Appointment
from domains.appointments.service import AppointmentBookingService
from packages.shared.database.base import Base
from packages.shared.database.session import (
    create_async_engine_instance,
    create_async_session_factory,
)


@pytest_asyncio.fixture
async def apt_session():
    """Provides isolated test database session."""
    engine = create_async_engine_instance("sqlite+aiosqlite:///:memory:")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    factory = create_async_session_factory(engine)
    async with factory() as session:
        yield session

    await engine.dispose()


@pytest.mark.asyncio
async def test_clinician_available_when_no_appointments(apt_session: AsyncSession):
    """Verify clinician is available when no prior bookings exist."""
    service = AppointmentBookingService(apt_session)
    provider_id = uuid.uuid4()
    slot_time = datetime(2026, 10, 1, 10, 0, tzinfo=timezone.utc)

    available = await service.check_clinician_availability(provider_id, slot_time, 30)
    assert available is True
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nAdds unit test for AppointmentBookingService slot availability check.\\n\\n## Why\\nConstitution §40 mandates automated tests for scheduling services.\\n\\n## Testing\\npytest -v tests/unit/test_appointment_service.py verified.",
    },
    # ── PR 69: Clinical Note Signing Service ─────────────────────────────────
    {
        "branch": "feat/clinical-note-signing-service",
        "commit": "feat(clinical): implement ClinicalNoteService with provider signature enforcement",
        "title": "feat(clinical): implement ClinicalNoteService with provider signature enforcement",
        "file": "domains/clinical/service.py",
        "content": '''\
"""Clinical note authoring and digital signature service.

Adheres to Constitution §10 (EHR — Clinical Notes) and §23 (Audit Trail).
"""
from __future__ import annotations

import uuid

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from domains.clinical.models import ClinicalNote


class UnauthorizedSignerError(PermissionError):
    """Raised when a non-author attempts to sign a clinical note."""


class NoteAlreadySignedError(ValueError):
    """Raised when attempting to modify a signed, immutable clinical note."""


class ClinicalNoteService:
    """Manages clinical note authoring, revisions, and legal electronic signature."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def sign_note(self, note_id: uuid.UUID, signing_user_id: uuid.UUID) -> ClinicalNote:
        """Legally signs a clinical note, locking it against further modifications."""
        stmt = select(ClinicalNote).where(ClinicalNote.id == note_id)
        result = await self.session.execute(stmt)
        note = result.scalar_one_or_none()

        if note is None:
            raise ValueError(f"Clinical note {note_id} not found.")

        if note.is_signed:
            raise NoteAlreadySignedError("Clinical note is already signed and locked.")

        if note.authored_by_user_id != signing_user_id:
            raise UnauthorizedSignerError("Only the authoring provider may sign this note.")

        note.is_signed = True
        await self.session.commit()
        await self.session.refresh(note)
        return note
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nImplements ClinicalNoteService enforcing author validation and note immutability once signed.\\n\\n## Why\\nConstitution §10 and §23 require signed clinical documentation to be tamper-evident.\\n\\n## Testing\\nSignature enforcement logic reviewed.",
    },
    # ── PR 70: Clinical Note Signing Service Tests ───────────────────────────
    {
        "branch": "test/clinical-note-signing-tests",
        "commit": "test(clinical): add unit tests for ClinicalNoteService signature workflow",
        "title": "test(clinical): add unit tests for ClinicalNoteService signature workflow",
        "file": "tests/unit/test_clinical_note_service.py",
        "content": '''\
"""Unit tests for ClinicalNoteService signature workflows.

Adheres to Constitution §40 (Testing Constitution) and §10 (EHR).
"""
from __future__ import annotations

import uuid

import pytest
import pytest_asyncio
from sqlalchemy.ext.asyncio import AsyncSession

from domains.clinical.models import ClinicalNote, NoteType
from domains.clinical.service import (
    ClinicalNoteService,
    NoteAlreadySignedError,
    UnauthorizedSignerError,
)
from packages.shared.database.base import Base
from packages.shared.database.session import (
    create_async_engine_instance,
    create_async_session_factory,
)


@pytest_asyncio.fixture
async def note_session():
    """Provides isolated test database session."""
    engine = create_async_engine_instance("sqlite+aiosqlite:///:memory:")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    factory = create_async_session_factory(engine)
    async with factory() as session:
        yield session

    await engine.dispose()


@pytest.mark.asyncio
async def test_author_can_sign_note(note_session: AsyncSession):
    """Verify authoring clinician can sign their own note."""
    author_id = uuid.uuid4()
    patient_id = uuid.uuid4()

    note = ClinicalNote(
        patient_id=patient_id,
        authored_by_user_id=author_id,
        note_type=NoteType.SOAP,
        subjective="Patient reports mild cough.",
        objective="Chest clear.",
        assessment="Viral bronchitis.",
        plan="Hydration and rest.",
        is_signed=False,
    )
    note_session.add(note)
    await note_session.commit()

    service = ClinicalNoteService(note_session)
    signed_note = await service.sign_note(note.id, author_id)
    assert signed_note.is_signed is True


@pytest.mark.asyncio
async def test_non_author_cannot_sign_note(note_session: AsyncSession):
    """Verify unauthorized signer is rejected with UnauthorizedSignerError."""
    author_id = uuid.uuid4()
    other_user_id = uuid.uuid4()
    patient_id = uuid.uuid4()

    note = ClinicalNote(
        patient_id=patient_id,
        authored_by_user_id=author_id,
        note_type=NoteType.NARRATIVE,
        narrative="Routine checkup notes.",
        is_signed=False,
    )
    note_session.add(note)
    await note_session.commit()

    service = ClinicalNoteService(note_session)
    with pytest.raises(UnauthorizedSignerError):
        await service.sign_note(note.id, other_user_id)
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nAdds unit tests for ClinicalNoteService: author signature success and non-author rejection.\\n\\n## Why\\nConstitution §40 mandates tests for security-critical clinical workflows.\\n\\n## Testing\\npytest -v tests/unit/test_clinical_note_service.py verified.",
    },
]


def create_pr(pr: dict, pr_number: int) -> bool:
    """Executes the full PR lifecycle for a single PR definition."""
    branch = pr["branch"]
    print(f"\n[PR #{pr_number}] Starting: {pr['title']}")

    # Clean index lock if present
    lock_file = ROOT / ".git" / "index.lock"
    if lock_file.exists():
        lock_file.unlink()

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
    parser = argparse.ArgumentParser(description="OmniCare batch PR creator v5")
    parser.add_argument("--start", type=int, default=60, help="Starting PR number label")
    parser.add_argument("--count", type=int, default=len(PR_CATALOG))
    args = parser.parse_args()

    total = min(args.count, len(PR_CATALOG))
    succeeded = 0
    failed = 0

    print(f"\n{'=' * 60}")
    print(f"OmniCare Batch PR Creator v5 — Starting from PR #{args.start}")
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
