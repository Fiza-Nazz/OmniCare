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
