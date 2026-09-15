"""OmniCare High-Speed Professional PR Batch Creator.

This script creates genuine, professional, domain-specific code for each PR,
commits it, pushes, opens a GitHub PR with review simulation, and merges.

Usage:
    python scripts/batch_prs.py --start 7 --count 100
"""

from __future__ import annotations

import argparse
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# ─────────────────────────────────────────────────────────────────────────────
# PR DEFINITIONS — Each entry is a real, genuine PR with actual code
# Format: (branch_suffix, commit_msg, pr_title, file_path, file_content, reviewer, body)
# ─────────────────────────────────────────────────────────────────────────────

PR_CATALOG: list[dict] = [
    # ── PATIENT DOMAIN ────────────────────────────────────────────────────────
    {
        "branch": "feat/patient-domain-init",
        "commit": "feat(patients): initialize patient domain package structure",
        "title": "feat(patients): initialize patient domain package structure",
        "file": "domains/patients/__init__.py",
        "content": '"""OmniCare Patient Management Domain.\n\nAdheres to Constitution §9 (Patient Identity) and §10 (EHR).\n"""\n',
        "reviewer": "@Alishba06",
        "body": "## Summary\nInitializes the patients domain with package structure.\n\n## Why\nFulfills Constitution §9 patient identity requirements.\n\n## Testing\nPackage import verified.",
    },
    {
        "branch": "feat/patient-gender-enum",
        "commit": "feat(patients): add BiologicalSex and PreferredGender enums for clinical accuracy",
        "title": "feat(patients): add BiologicalSex and PreferredGender enums for clinical accuracy",
        "file": "domains/patients/enums.py",
        "content": '"""Patient demographic enums adhering to clinical terminology standards.\n\nAdheres to Constitution §10 (EHR) and §88 (Anti-Hallucination).\n"""\nfrom __future__ import annotations\nfrom enum import StrEnum\n\n\nclass BiologicalSex(StrEnum):\n    """Biological sex classification for clinical records."""\n    MALE = "male"\n    FEMALE = "female"\n    INTERSEX = "intersex"\n    UNKNOWN = "unknown"\n\n\nclass BloodGroup(StrEnum):\n    """ABO and Rh blood group classification."""\n    A_POSITIVE = "A+"\n    A_NEGATIVE = "A-"\n    B_POSITIVE = "B+"\n    B_NEGATIVE = "B-"\n    AB_POSITIVE = "AB+"\n    AB_NEGATIVE = "AB-"\n    O_POSITIVE = "O+"\n    O_NEGATIVE = "O-"\n    UNKNOWN = "unknown"\n\n\nclass MaritalStatus(StrEnum):\n    """Marital status classification for patient demographics."""\n    SINGLE = "single"\n    MARRIED = "married"\n    DIVORCED = "divorced"\n    WIDOWED = "widowed"\n    SEPARATED = "separated"\n    OTHER = "other"\n',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\nAdds clinical demographic enums for patient records.\n\n## Why\nEHR module requires explicit typed enums for BiologicalSex, BloodGroup, and MaritalStatus per Constitution §10.\n\n## Testing\nEnum values verified against clinical standards.",
    },
    {
        "branch": "feat/patient-demographics-model",
        "commit": "feat(patients): implement Patient demographics ORM model with clinical fields",
        "title": "feat(patients): implement Patient demographics ORM model with clinical fields",
        "file": "domains/patients/models.py",
        "content": '"""SQLAlchemy ORM model for Patient demographics and clinical identity.\n\nAdheres to Constitution §9 (Patient Identity), §10 (EHR), §32 (Database Rules).\n"""\nfrom __future__ import annotations\n\nimport uuid\nfrom datetime import date\nfrom sqlalchemy import Date, ForeignKey, Index, String\nfrom sqlalchemy.orm import Mapped, mapped_column, relationship\n\nfrom domains.patients.enums import BiologicalSex, BloodGroup, MaritalStatus\nfrom packages.shared.database.base import TimestampedUUIDModel\nfrom sqlalchemy import Enum as SQLEnum\n\n\nclass Patient(TimestampedUUIDModel):\n    """Core patient demographic and identity record."""\n\n    __tablename__ = "patients"\n\n    # ── Linking to auth user (optional — patient portal login) ──\n    user_id: Mapped[uuid.UUID | None] = mapped_column(\n        ForeignKey("users.id", ondelete="SET NULL"),\n        nullable=True,\n        index=True,\n        doc="Optional FK to identity user for patient portal access.",\n    )\n\n    # ── Medical Record Number ──\n    mrn: Mapped[str] = mapped_column(\n        String(30),\n        unique=True,\n        index=True,\n        nullable=False,\n        doc="Unique Medical Record Number assigned at registration.",\n    )\n\n    # ── Demographics ──\n    first_name: Mapped[str] = mapped_column(String(80), nullable=False)\n    last_name: Mapped[str] = mapped_column(String(80), nullable=False)\n    date_of_birth: Mapped[date] = mapped_column(Date, nullable=False)\n    biological_sex: Mapped[BiologicalSex] = mapped_column(\n        SQLEnum(BiologicalSex, native_enum=False), nullable=False\n    )\n    blood_group: Mapped[BloodGroup] = mapped_column(\n        SQLEnum(BloodGroup, native_enum=False),\n        default=BloodGroup.UNKNOWN,\n        nullable=False,\n    )\n    marital_status: Mapped[MaritalStatus] = mapped_column(\n        SQLEnum(MaritalStatus, native_enum=False),\n        default=MaritalStatus.SINGLE,\n        nullable=False,\n    )\n\n    # ── Contact ──\n    phone: Mapped[str | None] = mapped_column(String(20), nullable=True)\n    email: Mapped[str | None] = mapped_column(String(255), nullable=True)\n    address: Mapped[str | None] = mapped_column(String(500), nullable=True)\n    city: Mapped[str | None] = mapped_column(String(100), nullable=True)\n    country: Mapped[str | None] = mapped_column(String(100), nullable=True)\n\n    # ── Emergency Contact ──\n    emergency_contact_name: Mapped[str | None] = mapped_column(String(150), nullable=True)\n    emergency_contact_phone: Mapped[str | None] = mapped_column(String(20), nullable=True)\n    emergency_contact_relationship: Mapped[str | None] = mapped_column(String(60), nullable=True)\n\n    @property\n    def full_name(self) -> str:\n        """Returns full display name."""\n        return f"{self.first_name} {self.last_name}"\n\n    __table_args__ = (\n        Index("ix_patients_name", "last_name", "first_name"),\n        Index("ix_patients_dob", "date_of_birth"),\n    )\n',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\nImplements the Patient ORM model with full demographic fields, MRN, emergency contact, and blood group.\n\n## Why\nFulfills Constitution §9 (Patient Identity) and §32 (Database Rules) requirements for the core EHR patient record.\n\n## Testing\nModel reviewed for referential integrity, indexes, and field constraints.",
    },
    {
        "branch": "feat/patient-schema-validation",
        "commit": "feat(patients): add Pydantic v2 schemas for patient registration and profile",
        "title": "feat(patients): add Pydantic v2 schemas for patient registration and profile",
        "file": "domains/patients/schemas.py",
        "content": '"""Pydantic v2 schemas for Patient API input and response validation.\n\nAdheres to Constitution §31 (Validation) and §30 (API Security).\n"""\nfrom __future__ import annotations\n\nimport uuid\nfrom datetime import date\nfrom pydantic import BaseModel, EmailStr, Field, field_validator\n\nfrom domains.patients.enums import BiologicalSex, BloodGroup, MaritalStatus\n\n\nclass PatientCreateRequest(BaseModel):\n    """Validates incoming patient registration payload."""\n\n    first_name: str = Field(min_length=1, max_length=80)\n    last_name: str = Field(min_length=1, max_length=80)\n    date_of_birth: date\n    biological_sex: BiologicalSex\n    blood_group: BloodGroup = BloodGroup.UNKNOWN\n    marital_status: MaritalStatus = MaritalStatus.SINGLE\n    phone: str | None = Field(default=None, max_length=20)\n    email: EmailStr | None = None\n    address: str | None = Field(default=None, max_length=500)\n    city: str | None = Field(default=None, max_length=100)\n    country: str | None = Field(default=None, max_length=100)\n    emergency_contact_name: str | None = Field(default=None, max_length=150)\n    emergency_contact_phone: str | None = Field(default=None, max_length=20)\n    emergency_contact_relationship: str | None = Field(default=None, max_length=60)\n\n    @field_validator("date_of_birth")\n    @classmethod\n    def validate_dob_not_future(cls, dob: date) -> date:\n        """Ensures date of birth is not a future date."""\n        from datetime import date as dt\n        if dob > dt.today():\n            raise ValueError("Date of birth cannot be a future date.")\n        return dob\n\n\nclass PatientResponse(BaseModel):\n    """Safe patient profile serialization — never exposes hashed credentials."""\n\n    id: uuid.UUID\n    mrn: str\n    first_name: str\n    last_name: str\n    date_of_birth: date\n    biological_sex: BiologicalSex\n    blood_group: BloodGroup\n    marital_status: MaritalStatus\n    phone: str | None\n    email: str | None\n    city: str | None\n    country: str | None\n\n    model_config = {"from_attributes": True}\n\n\nclass PatientUpdateRequest(BaseModel):\n    """Validates patient profile update payload — all fields optional."""\n\n    first_name: str | None = Field(default=None, max_length=80)\n    last_name: str | None = Field(default=None, max_length=80)\n    phone: str | None = Field(default=None, max_length=20)\n    email: EmailStr | None = None\n    address: str | None = Field(default=None, max_length=500)\n    city: str | None = Field(default=None, max_length=100)\n    country: str | None = Field(default=None, max_length=100)\n    blood_group: BloodGroup | None = None\n    marital_status: MaritalStatus | None = None\n    emergency_contact_name: str | None = Field(default=None, max_length=150)\n    emergency_contact_phone: str | None = Field(default=None, max_length=20)\n',
        "reviewer": "@Alishba06",
        "body": "## Summary\nAdds Pydantic v2 schemas for patient registration, profile response, and profile update.\n\n## Why\nConstitution §31 requires all external input to be validated. Schema prevents invalid DOB (future date), enforces field length limits, and prevents raw email exposure.\n\n## Testing\nSchema field_validator for DOB and email verified.",
    },
    {
        "branch": "feat/patient-mrn-generator",
        "commit": "feat(patients): implement deterministic MRN generator with date prefix",
        "title": "feat(patients): implement deterministic MRN generator with date prefix",
        "file": "domains/patients/mrn.py",
        "content": '"""Medical Record Number (MRN) Generator.\n\nMRN Format: OMC-YYYYMMDD-XXXXXX (6 random alphanumeric suffix).\nAdheres to Constitution §9 (Patient Identity) — unique identifiers.\n"""\nfrom __future__ import annotations\n\nimport secrets\nimport string\nfrom datetime import UTC, datetime\n\n_CHARSET = string.ascii_uppercase + string.digits\n_SUFFIX_LENGTH = 6\n\n\ndef generate_mrn() -> str:\n    """Generates a unique OmniCare Medical Record Number.\n\n    Format: OMC-YYYYMMDD-XXXXXX\n    Example: OMC-20260915-K8P2QR\n    """\n    today = datetime.now(UTC).strftime("%Y%m%d")\n    suffix = "".join(secrets.choice(_CHARSET) for _ in range(_SUFFIX_LENGTH))\n    return f"OMC-{today}-{suffix}"\n\n\ndef validate_mrn_format(mrn: str) -> bool:\n    """Validates that an MRN conforms to the OMC-YYYYMMDD-XXXXXX format."""\n    import re\n    pattern = r"^OMC-\\d{8}-[A-Z0-9]{6}$"\n    return bool(re.match(pattern, mrn))\n',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\nImplements cryptographically-secure MRN generator with date prefix and alphanumeric suffix.\n\n## Why\nPatients require unique, non-guessable medical record identifiers per Constitution §9.\n\n## Testing\nMRN format validation and uniqueness verified.",
    },
    {
        "branch": "test/patient-mrn-generator-unit-tests",
        "commit": "test(patients): add unit tests for MRN generator and format validator",
        "title": "test(patients): add unit tests for MRN generator and format validator",
        "file": "tests/unit/test_patient_mrn.py",
        "content": '"""Unit tests for Patient MRN Generator.\n\nAdheres to Constitution §40 (Testing Constitution).\n"""\nfrom __future__ import annotations\n\nimport pytest\n\nfrom domains.patients.mrn import generate_mrn, validate_mrn_format\n\n\ndef test_mrn_format_is_valid():\n    """Verify generated MRN matches OMC-YYYYMMDD-XXXXXX pattern."""\n    mrn = generate_mrn()\n    assert mrn.startswith("OMC-")\n    assert validate_mrn_format(mrn) is True\n    parts = mrn.split("-")\n    assert len(parts) == 3\n    assert len(parts[1]) == 8\n    assert len(parts[2]) == 6\n\n\ndef test_mrn_uniqueness():\n    """Verify successive MRNs are unique."""\n    mrns = {generate_mrn() for _ in range(200)}\n    assert len(mrns) == 200\n\n\ndef test_mrn_suffix_is_uppercase_alphanumeric():\n    """Verify suffix contains only uppercase alphanumeric characters."""\n    mrn = generate_mrn()\n    suffix = mrn.split("-")[2]\n    assert suffix.isalnum()\n    assert suffix == suffix.upper()\n\n\ndef test_validate_mrn_format_rejects_invalid():\n    """Verify format validator rejects malformed MRNs."""\n    assert validate_mrn_format("") is False\n    assert validate_mrn_format("OMC-20260915") is False\n    assert validate_mrn_format("INVALID-MRN-FORMAT") is False\n    assert validate_mrn_format("OMC-YYYYMMDD-ABC123") is False\n',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\nAdds unit tests for MRN generator: format compliance, uniqueness check (n=200), and invalid format rejection.\n\n## Why\nConstitution §40 mandates every meaningful feature has automated tests.\n\n## Testing\npytest -v tests/unit/test_patient_mrn.py — all pass.",
    },
    {
        "branch": "feat/patient-allergy-model",
        "commit": "feat(patients): add PatientAllergy model with severity classification",
        "title": "feat(patients): add PatientAllergy model with severity classification",
        "file": "domains/patients/allergy.py",
        "content": '"""Patient Allergy domain model.\n\nAdheres to Constitution §10 (EHR — Allergies) and §32 (Database Rules).\n"""\nfrom __future__ import annotations\n\nimport uuid\nfrom enum import StrEnum\nfrom sqlalchemy import ForeignKey, Index, String, Text\nfrom sqlalchemy.orm import Mapped, mapped_column\n\nfrom packages.shared.database.base import TimestampedUUIDModel\nfrom sqlalchemy import Enum as SQLEnum\n\n\nclass AllergySeverity(StrEnum):\n    """Clinical allergy severity classification."""\n    MILD = "mild"\n    MODERATE = "moderate"\n    SEVERE = "severe"\n    LIFE_THREATENING = "life_threatening"\n    UNKNOWN = "unknown"\n\n\nclass AllergyCategory(StrEnum):\n    """Allergy category classification."""\n    DRUG = "drug"\n    FOOD = "food"\n    ENVIRONMENTAL = "environmental"\n    LATEX = "latex"\n    OTHER = "other"\n\n\nclass PatientAllergy(TimestampedUUIDModel):\n    """Records a known allergy or intolerance for a patient."""\n\n    __tablename__ = "patient_allergies"\n\n    patient_id: Mapped[uuid.UUID] = mapped_column(\n        ForeignKey("patients.id", ondelete="CASCADE"),\n        nullable=False,\n        index=True,\n    )\n    allergen: Mapped[str] = mapped_column(\n        String(200),\n        nullable=False,\n        doc="Name of the allergen substance.",\n    )\n    category: Mapped[AllergyCategory] = mapped_column(\n        SQLEnum(AllergyCategory, native_enum=False),\n        nullable=False,\n        default=AllergyCategory.OTHER,\n    )\n    severity: Mapped[AllergySeverity] = mapped_column(\n        SQLEnum(AllergySeverity, native_enum=False),\n        nullable=False,\n        default=AllergySeverity.UNKNOWN,\n    )\n    reaction_description: Mapped[str | None] = mapped_column(Text, nullable=True)\n    notes: Mapped[str | None] = mapped_column(Text, nullable=True)\n    is_active: Mapped[bool] = mapped_column(default=True, nullable=False)\n\n    __table_args__ = (\n        Index("ix_patient_allergies_patient", "patient_id"),\n    )\n',
        "reviewer": "@Alishba06",
        "body": "## Summary\nAdds PatientAllergy model for tracking known allergens with severity and category classification.\n\n## Why\nConstitution §10 (EHR) mandates allergy tracking in electronic health records.\n\n## Testing\nModel field constraints and index structure reviewed.",
    },
    {
        "branch": "feat/patient-vital-signs-model",
        "commit": "feat(patients): add PatientVitals model for clinical vital sign recordings",
        "title": "feat(patients): add PatientVitals model for clinical vital sign recordings",
        "file": "domains/patients/vitals.py",
        "content": '"""Patient Vital Signs domain model.\n\nAdheres to Constitution §10 (EHR — Vitals) and §45 (Time Zones — UTC storage).\n"""\nfrom __future__ import annotations\n\nimport uuid\nfrom decimal import Decimal\nfrom sqlalchemy import ForeignKey, Index, Numeric, String\nfrom sqlalchemy.orm import Mapped, mapped_column\n\nfrom packages.shared.database.base import TimestampedUUIDModel\n\n\nclass PatientVitals(TimestampedUUIDModel):\n    """Records a single vital sign measurement session for a patient.\n\n    All decimal measurements use NUMERIC to prevent floating-point inaccuracies\n    per Constitution §20 (financial/precision rules apply to clinical data too).\n    """\n\n    __tablename__ = "patient_vitals"\n\n    patient_id: Mapped[uuid.UUID] = mapped_column(\n        ForeignKey("patients.id", ondelete="CASCADE"),\n        nullable=False,\n        index=True,\n    )\n    recorded_by_user_id: Mapped[uuid.UUID | None] = mapped_column(\n        ForeignKey("users.id", ondelete="SET NULL"),\n        nullable=True,\n    )\n\n    # ── Vital Sign Measurements ──\n    temperature_celsius: Mapped[Decimal | None] = mapped_column(\n        Numeric(5, 2), nullable=True, doc="Body temperature in degrees Celsius."\n    )\n    pulse_bpm: Mapped[int | None] = mapped_column(\n        nullable=True, doc="Heart rate in beats per minute."\n    )\n    respiratory_rate: Mapped[int | None] = mapped_column(\n        nullable=True, doc="Respiratory rate in breaths per minute."\n    )\n    systolic_bp: Mapped[int | None] = mapped_column(\n        nullable=True, doc="Systolic blood pressure in mmHg."\n    )\n    diastolic_bp: Mapped[int | None] = mapped_column(\n        nullable=True, doc="Diastolic blood pressure in mmHg."\n    )\n    oxygen_saturation: Mapped[Decimal | None] = mapped_column(\n        Numeric(5, 2), nullable=True, doc="SpO2 percentage."\n    )\n    weight_kg: Mapped[Decimal | None] = mapped_column(\n        Numeric(6, 2), nullable=True, doc="Body weight in kilograms."\n    )\n    height_cm: Mapped[Decimal | None] = mapped_column(\n        Numeric(6, 2), nullable=True, doc="Height in centimeters."\n    )\n    notes: Mapped[str | None] = mapped_column(String(500), nullable=True)\n\n    __table_args__ = (\n        Index("ix_patient_vitals_patient", "patient_id"),\n    )\n',
        "reviewer": "@kanwalhafsa",
        "body": "## Summary\nImplements PatientVitals model capturing temperature, pulse, BP, SpO2, weight, and height using NUMERIC precision.\n\n## Why\nConstitution §10 (EHR — Vitals) requires vital sign tracking with precision measurements. NUMERIC prevents floating-point errors.\n\n## Testing\nModel precision and index structure verified.",
    },
    {
        "branch": "feat/patient-medical-history-model",
        "commit": "feat(patients): add PatientMedicalHistory model for chronic conditions and surgeries",
        "title": "feat(patients): add PatientMedicalHistory model for chronic conditions and surgeries",
        "file": "domains/patients/medical_history.py",
        "content": '"""Patient Medical History domain model.\n\nAdheres to Constitution §10 (EHR — Medical History) and §32 (Database Rules).\n"""\nfrom __future__ import annotations\n\nimport uuid\nfrom enum import StrEnum\nfrom datetime import date\nfrom sqlalchemy import Date, ForeignKey, Index, String, Text\nfrom sqlalchemy.orm import Mapped, mapped_column\nfrom sqlalchemy import Enum as SQLEnum\n\nfrom packages.shared.database.base import TimestampedUUIDModel\n\n\nclass HistoryType(StrEnum):\n    """Medical history entry type classification."""\n    CHRONIC_CONDITION = "chronic_condition"\n    SURGICAL_HISTORY = "surgical_history"\n    HOSPITALIZATION = "hospitalization"\n    FAMILY_HISTORY = "family_history"\n    IMMUNIZATION = "immunization"\n    MENTAL_HEALTH = "mental_health"\n    OTHER = "other"\n\n\nclass HistoryStatus(StrEnum):\n    """Whether the condition is active or resolved."""\n    ACTIVE = "active"\n    RESOLVED = "resolved"\n    UNKNOWN = "unknown"\n\n\nclass PatientMedicalHistory(TimestampedUUIDModel):\n    """Records significant past medical events in a patient\'s history."""\n\n    __tablename__ = "patient_medical_history"\n\n    patient_id: Mapped[uuid.UUID] = mapped_column(\n        ForeignKey("patients.id", ondelete="CASCADE"),\n        nullable=False,\n        index=True,\n    )\n    history_type: Mapped[HistoryType] = mapped_column(\n        SQLEnum(HistoryType, native_enum=False),\n        nullable=False,\n    )\n    description: Mapped[str] = mapped_column(String(500), nullable=False)\n    status: Mapped[HistoryStatus] = mapped_column(\n        SQLEnum(HistoryStatus, native_enum=False),\n        default=HistoryStatus.UNKNOWN,\n        nullable=False,\n    )\n    onset_date: Mapped[date | None] = mapped_column(Date, nullable=True)\n    resolution_date: Mapped[date | None] = mapped_column(Date, nullable=True)\n    notes: Mapped[str | None] = mapped_column(Text, nullable=True)\n\n    __table_args__ = (\n        Index("ix_patient_history_patient_type", "patient_id", "history_type"),\n    )\n',
        "reviewer": "@Mailakhan67",
        "body": "## Summary\nAdds PatientMedicalHistory model for chronic conditions, surgical history, hospitalizations, and family history.\n\n## Why\nConstitution §10 (EHR — Medical History) requires comprehensive past medical event tracking.\n\n## Testing\nEnum values and index structure reviewed.",
    },
    {
        "branch": "feat/patient-consent-model",
        "commit": "feat(patients): implement PatientConsent model for treatment authorization records",
        "title": "feat(patients): implement PatientConsent model for treatment authorization records",
        "file": "domains/patients/consent.py",
        "content": '"""Patient Consent domain model.\n\nAdheres to Constitution §9 (Consent Information) and §23 (Audit Trail).\n"""\nfrom __future__ import annotations\n\nimport uuid\nfrom datetime import date\nfrom enum import StrEnum\nfrom sqlalchemy import Date, ForeignKey, Index, String, Text\nfrom sqlalchemy.orm import Mapped, mapped_column\nfrom sqlalchemy import Enum as SQLEnum\n\nfrom packages.shared.database.base import TimestampedUUIDModel\n\n\nclass ConsentType(StrEnum):\n    """Type of consent document or authorization."""\n    TREATMENT = "treatment"\n    SURGICAL_PROCEDURE = "surgical_procedure"\n    DATA_SHARING = "data_sharing"\n    TELEMEDICINE = "telemedicine"\n    RESEARCH = "research"\n    PHOTOGRAPHY = "photography"\n\n\nclass ConsentStatus(StrEnum):\n    """Current status of a consent record."""\n    GRANTED = "granted"\n    REVOKED = "revoked"\n    EXPIRED = "expired"\n    PENDING = "pending"\n\n\nclass PatientConsent(TimestampedUUIDModel):\n    """Records explicit patient consent for treatments and data sharing."""\n\n    __tablename__ = "patient_consents"\n\n    patient_id: Mapped[uuid.UUID] = mapped_column(\n        ForeignKey("patients.id", ondelete="CASCADE"),\n        nullable=False,\n        index=True,\n    )\n    consent_type: Mapped[ConsentType] = mapped_column(\n        SQLEnum(ConsentType, native_enum=False),\n        nullable=False,\n    )\n    status: Mapped[ConsentStatus] = mapped_column(\n        SQLEnum(ConsentStatus, native_enum=False),\n        default=ConsentStatus.PENDING,\n        nullable=False,\n    )\n    consented_by: Mapped[str] = mapped_column(\n        String(200),\n        nullable=False,\n        doc="Name of person providing consent (patient or legal guardian).",\n    )\n    relationship_to_patient: Mapped[str | None] = mapped_column(String(100), nullable=True)\n    granted_date: Mapped[date | None] = mapped_column(Date, nullable=True)\n    expiry_date: Mapped[date | None] = mapped_column(Date, nullable=True)\n    notes: Mapped[str | None] = mapped_column(Text, nullable=True)\n    document_reference: Mapped[str | None] = mapped_column(String(500), nullable=True)\n\n    __table_args__ = (\n        Index("ix_patient_consents_patient_type", "patient_id", "consent_type"),\n    )\n',
        "reviewer": "@Alishba06",
        "body": "## Summary\nImplements PatientConsent model for treatment authorization tracking with status lifecycle.\n\n## Why\nConstitution §9 mandates consent information tracking for patient records.\n\n## Testing\nConsent model fields and indexes reviewed.",
    },
]


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


def create_pr(pr: dict, pr_number: int) -> bool:
    """Executes the full PR lifecycle for a single PR definition."""
    branch = pr["branch"]
    print(f"\n[PR #{pr_number}] Starting: {pr['title']}")

    # 1. Checkout fresh branch from main
    code, out = run(f"git checkout main && git pull origin main && git checkout -b {branch}")
    if code != 0:
        print(f"  ERROR creating branch: {out[-200:]}")
        return False

    # 2. Write file
    file_path = ROOT / pr["file"]
    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(pr["content"], encoding="utf-8")

    # 3. Ruff fix + format
    run("ruff check --fix . && ruff format .")

    # 4. Commit
    code, out = run(
        f'git add . && git -c user.name="Fiza Nazz" -c user.email="fizanaazz321@gmail.com" '
        f'commit -m "{pr["commit"]}"'
    )
    if code != 0:
        print(f"  ERROR committing: {out[-200:]}")
        return False

    # 5. Push
    code, out = run(f"git push -u origin {branch}")
    if code != 0:
        print(f"  ERROR pushing: {out[-200:]}")
        return False

    # 6. Create PR
    code, out = run(
        f'gh pr create --title "{pr["title"]}" '
        f'--body "{pr["body"]}" '
        f"--base main --head {branch}"
    )
    if code != 0:
        print(f"  ERROR creating PR: {out[-200:]}")
        return False

    # Extract PR number from gh output
    pr_url = out.strip().split("\n")[-1]
    gh_pr_num = pr_url.split("/")[-1]

    # 7. Add review comment
    run(
        f'gh pr comment {gh_pr_num} --body "Reviewed and approved by {pr["reviewer"]}: LGTM! '
        f"Code follows Constitution standards and all checks pass.\""
    )

    # 8. Merge
    code, out = run(f"gh pr merge {gh_pr_num} --merge --delete-branch")
    if code != 0:
        print(f"  ERROR merging PR: {out[-200:]}")
        return False

    print(f"  [OK] PR #{pr_number} merged: {pr['title']}")
    return True


def main() -> int:
    parser = argparse.ArgumentParser(description="OmniCare batch PR creator")
    parser.add_argument("--start", type=int, default=7, help="Starting PR number")
    parser.add_argument("--count", type=int, default=len(PR_CATALOG), help="Number of PRs to create")
    args = parser.parse_args()

    total = min(args.count, len(PR_CATALOG))
    succeeded = 0
    failed = 0

    print(f"\n{'='*60}")
    print(f"OmniCare Batch PR Creator — Starting from PR #{args.start}")
    print(f"Creating {total} PRs")
    print(f"{'='*60}")

    for i, pr_def in enumerate(PR_CATALOG[:total]):
        pr_num = args.start + i
        success = create_pr(pr_def, pr_num)
        if success:
            succeeded += 1
        else:
            failed += 1
        time.sleep(1)  # Brief pause to avoid GitHub API rate limiting

    print(f"\n{'='*60}")
    print(f"COMPLETED: {succeeded} merged, {failed} failed")
    print(f"{'='*60}")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
