"""Patient demographic enums adhering to clinical terminology standards.

Adheres to Constitution §10 (EHR) and §88 (Anti-Hallucination).
"""

from __future__ import annotations

from enum import StrEnum


class BiologicalSex(StrEnum):
    """Biological sex classification for clinical records."""

    MALE = "male"
    FEMALE = "female"
    INTERSEX = "intersex"
    UNKNOWN = "unknown"


class BloodGroup(StrEnum):
    """ABO and Rh blood group classification."""

    A_POSITIVE = "A+"
    A_NEGATIVE = "A-"
    B_POSITIVE = "B+"
    B_NEGATIVE = "B-"
    AB_POSITIVE = "AB+"
    AB_NEGATIVE = "AB-"
    O_POSITIVE = "O+"
    O_NEGATIVE = "O-"
    UNKNOWN = "unknown"


class MaritalStatus(StrEnum):
    """Marital status classification for patient demographics."""

    SINGLE = "single"
    MARRIED = "married"
    DIVORCED = "divorced"
    WIDOWED = "widowed"
    SEPARATED = "separated"
    OTHER = "other"
