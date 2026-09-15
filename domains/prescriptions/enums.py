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
