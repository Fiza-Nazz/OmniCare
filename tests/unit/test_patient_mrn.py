"""Unit tests for Patient MRN Generator.

Adheres to Constitution §40 (Testing Constitution).
"""
from __future__ import annotations

from domains.patients.mrn import generate_mrn, validate_mrn_format


def test_mrn_format_is_valid():
    """Verify generated MRN matches OMC-YYYYMMDD-XXXXXX pattern."""
    mrn = generate_mrn()
    assert mrn.startswith("OMC-")
    assert validate_mrn_format(mrn) is True
    parts = mrn.split("-")
    assert len(parts) == 3
    assert len(parts[1]) == 8
    assert len(parts[2]) == 6


def test_mrn_uniqueness():
    """Verify successive MRNs are unique."""
    mrns = {generate_mrn() for _ in range(200)}
    assert len(mrns) == 200


def test_mrn_suffix_is_uppercase_alphanumeric():
    """Verify suffix contains only uppercase alphanumeric characters."""
    mrn = generate_mrn()
    suffix = mrn.split("-")[2]
    assert suffix.isalnum()
    assert suffix == suffix.upper()


def test_validate_mrn_format_rejects_invalid():
    """Verify format validator rejects malformed MRNs."""
    assert validate_mrn_format("") is False
    assert validate_mrn_format("OMC-20260915") is False
    assert validate_mrn_format("INVALID-MRN-FORMAT") is False
    assert validate_mrn_format("OMC-YYYYMMDD-ABC123") is False
