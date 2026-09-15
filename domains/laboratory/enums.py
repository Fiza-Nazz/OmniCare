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
