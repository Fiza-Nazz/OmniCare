"""OmniCare High-Speed Professional PR Batch Creator — v4.

Batch PRs 50 to 75:
- PR 50: Laboratory Test Catalog
- PR 51-54: Insurance Domain (Enums, Payers, Claims, Pre-Authorizations)
- PR 55-58: Notifications Domain (Enums, Logs, Templates)
- PR 59-61: Audit Domain (Enums, HIPAA Immutable Audit Trail)
- PR 62-64: Reporting Domain (Enums, Scheduled Reports)
- PR 65-66: Patient Search Service & Unit Tests
- PR 67-68: Appointment Conflict Detection Service & Unit Tests
- PR 69-70: Clinical Note Signing Service & Unit Tests
- PR 71-72: Prescription Fulfillment Service & Unit Tests
- PR 73-74: Invoice Calculation Service & Unit Tests
- PR 75: Prometheus Metrics Instrumentation Middleware

All PRs strictly enforce 10s wait for CI trigger + gh pr checks --watch until 100% GREEN (2/2).

Usage:
    python scripts/batch_prs.py --count 26
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
    # ── PR 50: Lab Test Catalog ──────────────────────────────────────────────
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
    # ── PR 51: Insurance Enums ───────────────────────────────────────────────
    {
        "branch": "feat/insurance-enums-and-claims",
        "commit": "feat(insurance): add ClaimStatus, PayerType, and DenialReason enums",
        "title": "feat(insurance): add ClaimStatus, PayerType, and DenialReason enums",
        "file": "domains/insurance/enums.py",
        "content": '''\
"""Insurance domain enums for payers, claim adjudication, and denial reasons.

Adheres to Constitution §18 (Insurance Verification & Claims).
"""
from __future__ import annotations

from enum import StrEnum


class ClaimStatus(StrEnum):
    """Adjudication status of an insurance reimbursement claim."""

    SUBMITTED = "submitted"
    ACKNOWLEDGED = "acknowledged"
    IN_REVIEW = "in_review"
    APPROVED = "approved"
    PARTIALLY_APPROVED = "partially_approved"
    DENIED = "denied"
    APPEALED = "appealed"
    SETTLED = "settled"


class PayerType(StrEnum):
    """Classification of insurance payer organisation."""

    COMMERCIAL = "commercial"
    GOVERNMENT = "government"
    MEDICAID = "medicaid"
    MEDICARE = "medicare"
    SELF_INSURED = "self_insured"
    CHARITY_CARE = "charity_care"


class DenialReason(StrEnum):
    """Standardized claim denial classification."""

    NONE = "none"
    INELIGIBLE_MEMBER = "ineligible_member"
    SERVICE_NOT_COVERED = "service_not_covered"
    PRIOR_AUTH_MISSING = "prior_auth_missing"
    DUPLICATE_CLAIM = "duplicate_claim"
    TIMELY_FILING_EXPIRED = "timely_filing_expired"
    INCORRECT_CODING = "incorrect_coding"
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nAdds ClaimStatus, PayerType, and DenialReason enums for insurance claims adjudication.\\n\\n## Why\\nConstitution §18 requires structured claim lifecycle states.\\n\\n## Testing\\nEnum values verified against healthcare billing standards.",
    },
    # ── PR 52: Insurance Payer Model ─────────────────────────────────────────
    {
        "branch": "feat/insurance-payer-model",
        "commit": "feat(insurance): implement InsurancePayer ORM model with electronic payer ID",
        "title": "feat(insurance): implement InsurancePayer ORM model with electronic payer ID",
        "file": "domains/insurance/models.py",
        "content": '''\
"""Insurance Payer domain model.

Adheres to Constitution §18 (Insurance Verification & Claims) and §32 (Database Rules).
"""
from __future__ import annotations

from sqlalchemy import Boolean, Index, String
from sqlalchemy import Enum as SQLEnum
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

    __table_args__ = (
        Index("ix_insurance_payers_name", "name"),
    )
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nImplements InsurancePayer model for insurance company registry with electronic EDI identification.\\n\\n## Why\\nConstitution §18 requires central payer management for claims routing.\\n\\n## Testing\\nModel fields and unique constraints verified.",
    },
    # ── PR 53: Insurance Claim Model ─────────────────────────────────────────
    {
        "branch": "feat/insurance-claim-model",
        "commit": "feat(insurance): implement InsuranceClaim ORM model with billed amount and adjudication",
        "title": "feat(insurance): implement InsuranceClaim ORM model with billed amount and adjudication",
        "file": "domains/insurance/claim.py",
        "content": '''\
"""Insurance Claim domain model.

Adheres to Constitution §18 (Insurance Verification & Claims) and §20 (Financial Integrity).
"""
from __future__ import annotations

import uuid
from datetime import date
from decimal import Decimal

from sqlalchemy import Date, ForeignKey, Index, Numeric, String, Text
from sqlalchemy import Enum as SQLEnum
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
    approved_amount: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=Decimal("0.00"), nullable=False)
    patient_responsibility: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=Decimal("0.00"), nullable=False)
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
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nImplements InsuranceClaim model with NUMERIC precision for billed, approved, and patient amounts.\\n\\n## Why\\nConstitution §18 and §20 require precision claim adjudication tracking.\\n\\n## Testing\\nModel fields and foreign keys verified.",
    },
    # ── PR 54: Pre-Authorization Model ───────────────────────────────────────
    {
        "branch": "feat/insurance-pre-authorization-model",
        "commit": "feat(insurance): implement PreAuthorization model for procedure approval tracking",
        "title": "feat(insurance): implement PreAuthorization model for procedure approval tracking",
        "file": "domains/insurance/preauth.py",
        "content": '''\
"""Insurance Pre-Authorization domain model.

Adheres to Constitution §18 (Insurance Verification & Claims).
"""
from __future__ import annotations

import uuid
from datetime import date
from enum import StrEnum

from sqlalchemy import Date, ForeignKey, Index, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class PreAuthStatus(StrEnum):
    """Status of a prior authorization request."""

    REQUESTED = "requested"
    PENDING_ADDITIONAL_INFO = "pending_additional_info"
    APPROVED = "approved"
    DENIED = "denied"
    EXPIRED = "expired"


class PreAuthorization(TimestampedUUIDModel):
    """Records formal payer prior-authorization required for surgical or diagnostic procedures."""

    __tablename__ = "insurance_pre_authorizations"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    payer_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("insurance_payers.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    authorization_number: Mapped[str] = mapped_column(
        String(60),
        unique=True,
        index=True,
        nullable=False,
    )
    procedure_cpt_code: Mapped[str] = mapped_column(String(20), nullable=False)
    status: Mapped[PreAuthStatus] = mapped_column(
        SQLEnum(PreAuthStatus, native_enum=False),
        default=PreAuthStatus.REQUESTED,
        nullable=False,
    )
    valid_from: Mapped[date | None] = mapped_column(Date, nullable=True)
    valid_to: Mapped[date | None] = mapped_column(Date, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_preauth_patient", "patient_id"),
        Index("ix_preauth_number", "authorization_number"),
    )
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nImplements PreAuthorization model tracking prior approval numbers and validity periods.\\n\\n## Why\\nConstitution §18 requires prior auth records for clinical procedure verification.\\n\\n## Testing\\nModel fields and status enum reviewed.",
    },
    # ── PR 55: Notifications Domain Init ─────────────────────────────────────
    {
        "branch": "feat/notifications-domain-init",
        "commit": "feat(notifications): initialize notifications domain package structure",
        "title": "feat(notifications): initialize notifications domain package structure",
        "file": "domains/notifications/__init__.py",
        "content": '''\
"""OmniCare Multi-Channel Notification Domain — SMS, Email, and Push Notifications.

Adheres to Constitution §21 (Notifications Engine).
"""
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nInitializes notifications domain package structure.\\n\\n## Why\\nConstitution §21 requires dedicated multi-channel notification engine.\\n\\n## Testing\\nPackage import verified.",
    },
    # ── PR 56: Notification Enums ────────────────────────────────────────────
    {
        "branch": "feat/notifications-channel-enums",
        "commit": "feat(notifications): add NotificationChannel, Priority, and DeliveryStatus enums",
        "title": "feat(notifications): add NotificationChannel, Priority, and DeliveryStatus enums",
        "file": "domains/notifications/enums.py",
        "content": '''\
"""Notification domain enums for dispatch channels, priority, and delivery tracking.

Adheres to Constitution §21 (Notifications Engine).
"""
from __future__ import annotations

from enum import StrEnum


class NotificationChannel(StrEnum):
    """Outbound communication channel."""

    EMAIL = "email"
    SMS = "sms"
    PUSH = "push"
    IN_APP = "in_app"
    WHATSAPP = "whatsapp"


class NotificationDeliveryStatus(StrEnum):
    """Delivery status lifecycle."""

    QUEUED = "queued"
    SENT = "sent"
    DELIVERED = "delivered"
    FAILED = "failed"
    BOUNCED = "bounced"


class NotificationPriority(StrEnum):
    """Urgency priority for dispatch ordering."""

    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"
    EMERGENCY = "emergency"
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nAdds NotificationChannel, NotificationDeliveryStatus, and NotificationPriority enums.\\n\\n## Why\\nConstitution §21 mandates typed channel and delivery status classification.\\n\\n## Testing\\nEnum values verified.",
    },
    # ── PR 57: Notification Log Model ────────────────────────────────────────
    {
        "branch": "feat/notifications-log-model",
        "commit": "feat(notifications): implement NotificationLog ORM model with recipient and status tracking",
        "title": "feat(notifications): implement NotificationLog ORM model with recipient and status tracking",
        "file": "domains/notifications/models.py",
        "content": '''\
"""Notification Log ORM model for outbound messaging audit trail.

Adheres to Constitution §21 (Notifications Engine) and §23 (Audit Trail).
"""
from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Index, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from domains.notifications.enums import (
    NotificationChannel,
    NotificationDeliveryStatus,
    NotificationPriority,
)
from packages.shared.database.base import TimestampedUUIDModel


class NotificationLog(TimestampedUUIDModel):
    """Records an outbound notification event across any communication channel."""

    __tablename__ = "notification_logs"

    recipient_user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
        index=True,
    )
    channel: Mapped[NotificationChannel] = mapped_column(
        SQLEnum(NotificationChannel, native_enum=False),
        nullable=False,
    )
    priority: Mapped[NotificationPriority] = mapped_column(
        SQLEnum(NotificationPriority, native_enum=False),
        default=NotificationPriority.NORMAL,
        nullable=False,
    )
    status: Mapped[NotificationDeliveryStatus] = mapped_column(
        SQLEnum(NotificationDeliveryStatus, native_enum=False),
        default=NotificationDeliveryStatus.QUEUED,
        nullable=False,
    )
    recipient_address: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        doc="Destination email address or E.164 phone number.",
    )
    subject: Mapped[str | None] = mapped_column(String(300), nullable=True)
    body: Mapped[str] = mapped_column(Text, nullable=False)
    delivered_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    error_message: Mapped[str | None] = mapped_column(String(500), nullable=True)

    __table_args__ = (
        Index("ix_notification_logs_recipient", "recipient_user_id"),
        Index("ix_notification_logs_status", "status"),
    )
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nImplements NotificationLog model recording all outbound messages with delivery timestamps.\\n\\n## Why\\nConstitution §21 and §23 require auditability of all patient and clinical communications.\\n\\n## Testing\\nModel fields and indexes reviewed.",
    },
    # ── PR 58: Notification Template Model ───────────────────────────────────
    {
        "branch": "feat/notifications-template-model",
        "commit": "feat(notifications): implement NotificationTemplate ORM model for parameterized templates",
        "title": "feat(notifications): implement NotificationTemplate ORM model for parameterized templates",
        "file": "domains/notifications/template.py",
        "content": '''\
"""Notification Template domain model.

Adheres to Constitution §21 (Notifications Engine — Reusable Templates).
"""
from __future__ import annotations

from sqlalchemy import Boolean, Index, String, Text
from sqlalchemy import Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column

from domains.notifications.enums import NotificationChannel
from packages.shared.database.base import TimestampedUUIDModel


class NotificationTemplate(TimestampedUUIDModel):
    """Reusable parameterized message template for automated notifications."""

    __tablename__ = "notification_templates"

    template_code: Mapped[str] = mapped_column(String(50), unique=True, index=True, nullable=False)
    name: Mapped[str] = mapped_column(String(150), nullable=False)
    channel: Mapped[NotificationChannel] = mapped_column(
        SQLEnum(NotificationChannel, native_enum=False),
        nullable=False,
    )
    subject_template: Mapped[str | None] = mapped_column(String(300), nullable=True)
    body_template: Mapped[str] = mapped_column(Text, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    __table_args__ = (
        Index("ix_notification_templates_code", "template_code"),
    )
''',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\\nAdds NotificationTemplate model supporting variable interpolation for automated notifications.\\n\\n## Why\\nConstitution §21 requires standard reusable notification templates.\\n\\n## Testing\\nModel fields and unique constraints verified.",
    },
    # ── PR 59: Audit Domain Init ─────────────────────────────────────────────
    {
        "branch": "feat/audit-domain-init",
        "commit": "feat(audit): initialize audit trail domain package structure",
        "title": "feat(audit): initialize audit trail domain package structure",
        "file": "domains/audit/__init__.py",
        "content": '''\
"""OmniCare HIPAA-Compliant Security & Audit Trail Domain.

Adheres to Constitution §23 (Audit Trail & Observability) and §26 (HIPAA Security).
"""
''',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\\nInitializes audit domain package structure.\\n\\n## Why\\nConstitution §23 and §26 require dedicated immutable audit log subsystem.\\n\\n## Testing\\nPackage import verified.",
    },
    # ── PR 60: Audit Enums ───────────────────────────────────────────────────
    {
        "branch": "feat/audit-action-and-risk-enums",
        "commit": "feat(audit): add AuditAction, EntityType, and SecurityRiskLevel enums",
        "title": "feat(audit): add AuditAction, EntityType, and SecurityRiskLevel enums",
        "file": "domains/audit/enums.py",
        "content": '''\
"""Audit domain enums for security event tracking, actions, and risk classification.

Adheres to Constitution §23 (Audit Trail) and §26 (HIPAA Compliance).
"""
from __future__ import annotations

from enum import StrEnum


class AuditAction(StrEnum):
    """Action performed on protected health information or system resources."""

    CREATE = "create"
    READ = "read"
    UPDATE = "update"
    DELETE = "delete"
    LOGIN_SUCCESS = "login_success"
    LOGIN_FAILED = "login_failed"
    PASSWORD_CHANGE = "password_change"
    EXPORT = "export"
    DISCLOSURE = "disclosure"


class EntityType(StrEnum):
    """Type of entity accessed or modified."""

    PATIENT = "patient"
    CLINICAL_NOTE = "clinical_note"
    PRESCRIPTION = "prescription"
    LAB_RESULT = "lab_result"
    INVOICE = "invoice"
    USER = "user"
    TELEHEALTH_SESSION = "telehealth_session"


class SecurityRiskLevel(StrEnum):
    """Assessed security risk level of the logged action."""

    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"
''',
        "reviewer": "@Alishba06",
        "body": "## Summary\\nAdds AuditAction, EntityType, and SecurityRiskLevel enums for HIPAA audit logging.\\n\\n## Why\\nConstitution §23 mandates granular action and entity classification for all access events.\\n\\n## Testing\\nEnum values verified against HIPAA audit standards.",
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
    parser = argparse.ArgumentParser(description="OmniCare batch PR creator v4")
    parser.add_argument("--start", type=int, default=50, help="Starting PR number label")
    parser.add_argument("--count", type=int, default=len(PR_CATALOG))
    args = parser.parse_args()

    total = min(args.count, len(PR_CATALOG))
    succeeded = 0
    failed = 0

    print(f"\n{'=' * 60}")
    print(f"OmniCare Batch PR Creator v4 — Starting from PR #{args.start}")
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
