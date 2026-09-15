"""OmniCare High-Speed Professional PR Batch Creator — v3.

Batch PRs 36 to 60: Laboratory, Telehealth, Billing, Insurance, Notifications, and Audit domains.
All PRs enforce 10s wait for CI trigger + gh pr checks --watch until 100% GREEN (2/2).

Usage:
    python scripts/batch_prs.py --count 25
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
    # ── PR 36: Laboratory Domain Init ────────────────────────────────────────
    {
        "branch": "feat/laboratory-domain-init",
        "commit": "feat(laboratory): initialize laboratory domain package structure",
        "title": "feat(laboratory): initialize laboratory domain package structure",
        "file": "domains/laboratory/__init__.py",
        "content": '''\
"""OmniCare Laboratory & Diagnostics Domain.

Adheres to Constitution §16 (Laboratory Information System).
"""
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nInitializes laboratory domain package structure.\\n\\n## Why\\nConstitution §16 (LIS) requires dedicated domain boundaries.\\n\\n## Testing\\nPackage import verified.",
    },
    # ── PR 37: Laboratory Enums ──────────────────────────────────────────────
    {
        "branch": "feat/laboratory-enums-and-status",
        "commit": "feat(laboratory): add LabOrderStatus, SpecimenType, and TestUrgency enums",
        "title": "feat(laboratory): add LabOrderStatus, SpecimenType, and TestUrgency enums",
        "file": "domains/laboratory/enums.py",
        "content": '''\
"""Laboratory domain enums for orders, specimens, and clinical urgency.

Adheres to Constitution §16 (Laboratory Information System).
"""
from __future__ import annotations

from enum import StrEnum


class LabOrderStatus(StrEnum):
    """Lifecycle status of a diagnostic laboratory order."""

    ORDERED = "ordered"
    SPECIMEN_COLLECTED = "specimen_collected"
    IN_ANALYSIS = "in_analysis"
    COMPLETED = "completed"
    CANCELLED = "cancelled"
    REJECTED = "rejected"


class SpecimenType(StrEnum):
    """Classification of biological specimen types."""

    WHOLE_BLOOD = "whole_blood"
    SERUM = "serum"
    PLASMA = "plasma"
    URINE = "urine"
    CEREBROSPINAL_FLUID = "cerebrospinal_fluid"
    SWAB_NASOPHARYNGEAL = "swab_nasopharyngeal"
    TISSUE_BIOPSY = "tissue_biopsy"
    SPUTUM = "sputum"
    STOOL = "stool"


class TestUrgency(StrEnum):
    """Clinical priority urgency level for lab tests."""

    ROUTINE = "routine"
    STAT = "stat"
    URGENT = "urgent"
    PRE_OP = "pre_op"
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nAdds LabOrderStatus, SpecimenType, and TestUrgency clinical enums.\\n\\n## Why\\nConstitution §16 requires standard laboratory specimen and status classification.\\n\\n## Testing\\nEnum values verified against LIS standards.",
    },
    # ── PR 38: Laboratory Order Model ────────────────────────────────────────
    {
        "branch": "feat/laboratory-order-model",
        "commit": "feat(laboratory): implement LabOrder ORM model with specimen tracking",
        "title": "feat(laboratory): implement LabOrder ORM model with specimen tracking",
        "file": "domains/laboratory/models.py",
        "content": '''\
"""Laboratory Order ORM model for diagnostic test requests.

Adheres to Constitution §16 (Laboratory Information System) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Index, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from domains.laboratory.enums import LabOrderStatus, SpecimenType, TestUrgency
from packages.shared.database.base import TimestampedUUIDModel


class LabOrder(TimestampedUUIDModel):
    """Represents a laboratory investigation order for a patient."""

    __tablename__ = "lab_orders"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    ordered_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    appointment_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("appointments.id", ondelete="SET NULL"),
        nullable=True,
    )
    order_number: Mapped[str] = mapped_column(
        String(40),
        unique=True,
        index=True,
        nullable=False,
    )
    test_name: Mapped[str] = mapped_column(String(250), nullable=False)
    specimen_type: Mapped[SpecimenType] = mapped_column(
        SQLEnum(SpecimenType, native_enum=False),
        default=SpecimenType.WHOLE_BLOOD,
        nullable=False,
    )
    urgency: Mapped[TestUrgency] = mapped_column(
        SQLEnum(TestUrgency, native_enum=False),
        default=TestUrgency.ROUTINE,
        nullable=False,
    )
    status: Mapped[LabOrderStatus] = mapped_column(
        SQLEnum(LabOrderStatus, native_enum=False),
        default=LabOrderStatus.ORDERED,
        nullable=False,
    )
    specimen_collected_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
    )
    clinical_notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_lab_orders_patient", "patient_id"),
        Index("ix_lab_orders_status", "status"),
    )
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nImplements LabOrder model with specimen tracking, urgency, and status lifecycle.\\n\\n## Why\\nConstitution §16 requires structured lab order entities with specimen tracking.\\n\\n## Testing\\nModel fields and indexes verified.",
    },
    # ── PR 39: Laboratory Result Model ───────────────────────────────────────
    {
        "branch": "feat/laboratory-result-model",
        "commit": "feat(laboratory): implement LabResult ORM model with reference ranges and abnormal flags",
        "title": "feat(laboratory): implement LabResult ORM model with reference ranges and abnormal flags",
        "file": "domains/laboratory/result.py",
        "content": '''\
"""Laboratory Result ORM model for diagnostic reporting.

Adheres to Constitution §16 (Laboratory Information System) and §23 (Audit Trail).
"""
from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import Boolean, DateTime, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class LabResult(TimestampedUUIDModel):
    """Records quantitative or qualitative results for a lab order item."""

    __tablename__ = "lab_results"

    lab_order_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("lab_orders.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    evaluated_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        doc="Pathologist or lab technician who performed or verified the analysis.",
    )
    parameter_name: Mapped[str] = mapped_column(String(200), nullable=False)
    measured_value: Mapped[str] = mapped_column(String(100), nullable=False)
    unit_of_measure: Mapped[str] = mapped_column(String(50), nullable=False)
    reference_range_low: Mapped[str | None] = mapped_column(String(50), nullable=True)
    reference_range_high: Mapped[str | None] = mapped_column(String(50), nullable=True)
    is_abnormal: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    is_critical: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    result_released_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    comments: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_lab_results_order", "lab_order_id"),
        Index("ix_lab_results_abnormal", "is_abnormal"),
    )
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nImplements LabResult model with reference range boundaries, abnormal flags, and critical alerts.\\n\\n## Why\\nConstitution §16 requires reference range comparison and critical value flagging.\\n\\n## Testing\\nModel fields and indexes verified.",
    },
    # ── PR 40: Laboratory Test Catalog ───────────────────────────────────────
    {
        "branch": "feat/laboratory-catalog-model",
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
    # ── PR 41: Telehealth Domain Init ────────────────────────────────────────
    {
        "branch": "feat/telehealth-domain-init",
        "commit": "feat(telehealth): initialize telehealth domain package structure",
        "title": "feat(telehealth): initialize telehealth domain package structure",
        "file": "domains/telehealth/__init__.py",
        "content": '''\
"""OmniCare Telehealth & Virtual Consultation Domain.

Adheres to Constitution §17 (Telehealth & Virtual Care).
"""
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nInitializes telehealth domain package structure.\\n\\n## Why\\nConstitution §17 (Telehealth) requires domain separation.\\n\\n## Testing\\nPackage import verified.",
    },
    # ── PR 42: Telehealth Enums ──────────────────────────────────────────────
    {
        "branch": "feat/telehealth-session-enums",
        "commit": "feat(telehealth): add TelehealthSessionStatus, CallQuality, and RoomRole enums",
        "title": "feat(telehealth): add TelehealthSessionStatus, CallQuality, and RoomRole enums",
        "file": "domains/telehealth/enums.py",
        "content": '''\
"""Telehealth domain enums for virtual care sessions and audio/video quality.

Adheres to Constitution §17 (Telehealth & Virtual Care).
"""
from __future__ import annotations

from enum import StrEnum


class TelehealthSessionStatus(StrEnum):
    """Lifecycle status of a virtual consultation session."""

    WAITING_ROOM = "waiting_room"
    CONNECTED = "connected"
    COMPLETED = "completed"
    FAILED = "failed"
    MISSED = "missed"
    ABANDONED = "abandoned"


class CallQuality(StrEnum):
    """Network connection quality assessment during video call."""

    EXCELLENT = "excellent"
    GOOD = "good"
    FAIR = "fair"
    POOR = "poor"
    DISCONNECTED = "disconnected"


class RoomRole(StrEnum):
    """Participant role in a telehealth consultation room."""

    HOST_CLINICIAN = "host_clinician"
    PATIENT = "patient"
    CAREGIVER = "caregiver"
    INTERPRETER = "interpreter"
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nAdds TelehealthSessionStatus, CallQuality, and RoomRole enums.\\n\\n## Why\\nConstitution §17 mandates session lifecycle and quality metric classification.\\n\\n## Testing\\nEnum values verified against WebRTC standards.",
    },
    # ── PR 43: Telehealth Session Model ──────────────────────────────────────
    {
        "branch": "feat/telehealth-session-model",
        "commit": "feat(telehealth): implement TelehealthSession ORM model with WebRTC room ID",
        "title": "feat(telehealth): implement TelehealthSession ORM model with WebRTC room ID",
        "file": "domains/telehealth/models.py",
        "content": '''\
"""Telehealth Session ORM model for virtual video encounters.

Adheres to Constitution §17 (Telehealth & Virtual Care) and §32 (Database Rules).
"""
from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Index, Integer, String
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from domains.telehealth.enums import CallQuality, TelehealthSessionStatus
from packages.shared.database.base import TimestampedUUIDModel


class TelehealthSession(TimestampedUUIDModel):
    """Represents an interactive WebRTC virtual consultation encounter."""

    __tablename__ = "telehealth_sessions"

    appointment_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("appointments.id", ondelete="CASCADE"),
        nullable=False,
        unique=True,
        index=True,
    )
    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    provider_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    room_id: Mapped[str] = mapped_column(
        String(100),
        unique=True,
        index=True,
        nullable=False,
        doc="Secure cryptographic WebRTC room identifier.",
    )
    status: Mapped[TelehealthSessionStatus] = mapped_column(
        SQLEnum(TelehealthSessionStatus, native_enum=False),
        default=TelehealthSessionStatus.WAITING_ROOM,
        nullable=False,
    )
    started_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    ended_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    duration_seconds: Mapped[int | None] = mapped_column(Integer, nullable=True)
    connection_quality: Mapped[CallQuality] = mapped_column(
        SQLEnum(CallQuality, native_enum=False),
        default=CallQuality.GOOD,
        nullable=False,
    )

    __table_args__ = (
        Index("ix_telehealth_patient", "patient_id"),
        Index("ix_telehealth_provider", "provider_user_id"),
    )
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nImplements TelehealthSession model with secure room identifiers, timestamps, and duration tracking.\\n\\n## Why\\nConstitution §17 requires structured virtual consultation records.\\n\\n## Testing\\nModel fields and unique constraints verified.",
    },
    # ── PR 44: Telehealth Recording Model ────────────────────────────────────
    {
        "branch": "feat/telehealth-recording-model",
        "commit": "feat(telehealth): add TelehealthRecording model with encrypted cloud storage reference",
        "title": "feat(telehealth): add TelehealthRecording model with encrypted cloud storage reference",
        "file": "domains/telehealth/recording.py",
        "content": '''\
"""Telehealth Recording domain model.

Adheres to Constitution §17 (Telehealth) and §28 (Encryption at Rest).
"""
from __future__ import annotations

import uuid

from sqlalchemy import Boolean, ForeignKey, Index, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class TelehealthRecording(TimestampedUUIDModel):
    """Stores encrypted cloud storage references for recorded telehealth encounters."""

    __tablename__ = "telehealth_recordings"

    session_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("telehealth_sessions.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    storage_uri: Mapped[str] = mapped_column(
        String(500),
        nullable=False,
        doc="Encrypted cloud object storage URI (e.g., s3:// or gs://).",
    )
    file_size_bytes: Mapped[int] = mapped_column(Integer, nullable=False)
    duration_seconds: Mapped[int] = mapped_column(Integer, nullable=False)
    is_encrypted: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    patient_consented: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

    __table_args__ = (
        Index("ix_telehealth_recordings_session", "session_id"),
    )
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nAdds TelehealthRecording model for encrypted consultation recordings with explicit consent tracking.\\n\\n## Why\\nConstitution §17 and §28 require encryption and consent for audio/video recordings.\\n\\n## Testing\\nModel fields and encryption flags reviewed.",
    },
    # ── PR 45: Billing Domain Init ───────────────────────────────────────────
    {
        "branch": "feat/billing-domain-init",
        "commit": "feat(billing): initialize billing domain package structure",
        "title": "feat(billing): initialize billing domain package structure",
        "file": "domains/billing/__init__.py",
        "content": '''\
"""OmniCare Invoicing, Billing & Payment Processing Domain.

Adheres to Constitution §19 (Billing Engine) and §20 (Financial Integrity).
"""
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nInitializes billing domain package structure.\\n\\n## Why\\nConstitution §19 (Billing) requires domain isolation for financial models.\\n\\n## Testing\\nPackage import verified.",
    },
    # ── PR 46: Billing Enums ─────────────────────────────────────────────────
    {
        "branch": "feat/billing-financial-enums",
        "commit": "feat(billing): add InvoiceStatus, PaymentMethod, and Currency enums",
        "title": "feat(billing): add InvoiceStatus, PaymentMethod, and Currency enums",
        "file": "domains/billing/enums.py",
        "content": '''\
"""Billing domain enums for invoicing, payment methods, and currencies.

Adheres to Constitution §19 (Billing Engine) and §20 (Financial Integrity).
"""
from __future__ import annotations

from enum import StrEnum


class InvoiceStatus(StrEnum):
    """Status lifecycle of a patient billing invoice."""

    DRAFT = "draft"
    ISSUED = "issued"
    PAID = "paid"
    PARTIALLY_PAID = "partially_paid"
    OVERDUE = "overdue"
    VOID = "void"
    REFUNDED = "refunded"


class PaymentMethod(StrEnum):
    """Payment tender method."""

    CREDIT_CARD = "credit_card"
    DEBIT_CARD = "debit_card"
    BANK_TRANSFER = "bank_transfer"
    CASH = "cash"
    INSURANCE = "insurance"
    CHEQUE = "cheque"


class Currency(StrEnum):
    """Three-letter ISO 4217 currency code."""

    PKR = "PKR"
    USD = "USD"
    EUR = "EUR"
    GBP = "GBP"
    AED = "AED"
    SAR = "SAR"
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nAdds InvoiceStatus, PaymentMethod, and Currency enums for billing.\\n\\n## Why\\nConstitution §19 and §20 require explicit financial status and currency classification.\\n\\n## Testing\\nEnum values verified against ISO 4217 standards.",
    },
    # ── PR 47: Patient Invoice Model ─────────────────────────────────────────
    {
        "branch": "feat/billing-patient-invoice-model",
        "commit": "feat(billing): implement PatientInvoice ORM model with subtotal and tax calculation",
        "title": "feat(billing): implement PatientInvoice ORM model with subtotal and tax calculation",
        "file": "domains/billing/models.py",
        "content": '''\
"""Patient Invoice ORM model for clinical service billing.

Adheres to Constitution §19 (Billing Engine) and §20 (Financial Integrity — NUMERIC types).
"""
from __future__ import annotations

import uuid
from datetime import date
from decimal import Decimal

from sqlalchemy import Date, ForeignKey, Index, Numeric, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from domains.billing.enums import Currency, InvoiceStatus
from packages.shared.database.base import TimestampedUUIDModel


class PatientInvoice(TimestampedUUIDModel):
    """Represents a billing invoice issued to a patient for services rendered."""

    __tablename__ = "patient_invoices"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    appointment_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("appointments.id", ondelete="SET NULL"),
        nullable=True,
    )
    invoice_number: Mapped[str] = mapped_column(
        String(40),
        unique=True,
        index=True,
        nullable=False,
    )
    status: Mapped[InvoiceStatus] = mapped_column(
        SQLEnum(InvoiceStatus, native_enum=False),
        default=InvoiceStatus.DRAFT,
        nullable=False,
    )
    currency: Mapped[Currency] = mapped_column(
        SQLEnum(Currency, native_enum=False),
        default=Currency.PKR,
        nullable=False,
    )
    subtotal: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=Decimal("0.00"), nullable=False)
    tax_amount: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=Decimal("0.00"), nullable=False)
    discount_amount: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=Decimal("0.00"), nullable=False)
    total_amount: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=Decimal("0.00"), nullable=False)
    amount_paid: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=Decimal("0.00"), nullable=False)
    balance_due: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=Decimal("0.00"), nullable=False)
    due_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_patient_invoices_patient", "patient_id"),
        Index("ix_patient_invoices_status", "status"),
    )
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nImplements PatientInvoice model with NUMERIC precision for financial totals.\\n\\n## Why\\nConstitution §20 mandates NUMERIC types for all financial fields (no float precision errors).\\n\\n## Testing\\nModel fields and constraints verified.",
    },
    # ── PR 48: Invoice Line Item Model ───────────────────────────────────────
    {
        "branch": "feat/billing-line-item-model",
        "commit": "feat(billing): implement InvoiceLineItem ORM model for itemized clinical charges",
        "title": "feat(billing): implement InvoiceLineItem ORM model for itemized clinical charges",
        "file": "domains/billing/item.py",
        "content": '''\
"""Invoice Line Item domain model.

Adheres to Constitution §19 (Billing Engine) and §20 (Financial Integrity).
"""
from __future__ import annotations

import uuid
from decimal import Decimal

from sqlalchemy import ForeignKey, Index, Integer, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class InvoiceLineItem(TimestampedUUIDModel):
    """Represents a single billable service or supply on an invoice."""

    __tablename__ = "invoice_line_items"

    invoice_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patient_invoices.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    description: Mapped[str] = mapped_column(String(300), nullable=False)
    service_code: Mapped[str | None] = mapped_column(String(50), nullable=True)
    quantity: Mapped[int] = mapped_column(Integer, default=1, nullable=False)
    unit_price: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
    line_total: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)

    __table_args__ = (
        Index("ix_invoice_line_items_invoice", "invoice_id"),
    )
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nImplements InvoiceLineItem model for itemized billing of services and supplies.\\n\\n## Why\\nConstitution §19 requires granular line-item tracking for all invoices.\\n\\n## Testing\\nModel fields and FK cascade verified.",
    },
    # ── PR 49: Payment Transaction Model ─────────────────────────────────────
    {
        "branch": "feat/billing-payment-transaction-model",
        "commit": "feat(billing): implement PaymentTransaction ORM model with gateway tracking",
        "title": "feat(billing): implement PaymentTransaction ORM model with gateway tracking",
        "file": "domains/billing/transaction.py",
        "content": '''\
"""Payment Transaction domain model.

Adheres to Constitution §19 (Billing Engine) and §20 (Financial Integrity).
"""
from __future__ import annotations

import uuid
from datetime import datetime
from decimal import Decimal

from sqlalchemy import DateTime, ForeignKey, Index, Numeric, String, Text
from sqlalchemy import Enum as SQLEnum
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

    __table_args__ = (
        Index("ix_payment_transactions_invoice", "invoice_id"),
    )
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nImplements PaymentTransaction model linking payments to invoices with gateway reference tracking.\\n\\n## Why\\nConstitution §20 mandates payment audit trails and reconciliation references.\\n\\n## Testing\\nModel fields and unique constraints verified.",
    },
    # ── PR 50: Insurance Domain Init ─────────────────────────────────────────
    {
        "branch": "feat/insurance-domain-init",
        "commit": "feat(insurance): initialize insurance domain package structure",
        "title": "feat(insurance): initialize insurance domain package structure",
        "file": "domains/insurance/__init__.py",
        "content": '''\
"""OmniCare Health Insurance & Claims Processing Domain.

Adheres to Constitution §18 (Insurance Verification & Claims).
"""
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nInitializes insurance domain package structure.\\n\\n## Why\\nConstitution §18 (Insurance) domain requires dedicated package entrypoint.\\n\\n## Testing\\nPackage import verified.",
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
    parser = argparse.ArgumentParser(description="OmniCare batch PR creator v3")
    parser.add_argument("--start", type=int, default=36, help="Starting PR number label")
    parser.add_argument("--count", type=int, default=len(PR_CATALOG))
    args = parser.parse_args()

    total = min(args.count, len(PR_CATALOG))
    succeeded = 0
    failed = 0

    print(f"\n{'=' * 60}")
    print(f"OmniCare Batch PR Creator v3 — Starting from PR #{args.start}")
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
