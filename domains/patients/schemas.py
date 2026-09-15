"""Pydantic v2 schemas for Patient API input and response validation.

Adheres to Constitution §31 (Validation) and §30 (API Security).
"""
from __future__ import annotations

import uuid
from datetime import date

from pydantic import BaseModel, EmailStr, Field, field_validator

from domains.patients.enums import BiologicalSex, BloodGroup, MaritalStatus


class PatientCreateRequest(BaseModel):
    """Validates incoming patient registration payload."""

    first_name: str = Field(min_length=1, max_length=80)
    last_name: str = Field(min_length=1, max_length=80)
    date_of_birth: date
    biological_sex: BiologicalSex
    blood_group: BloodGroup = BloodGroup.UNKNOWN
    marital_status: MaritalStatus = MaritalStatus.SINGLE
    phone: str | None = Field(default=None, max_length=20)
    email: EmailStr | None = None
    address: str | None = Field(default=None, max_length=500)
    city: str | None = Field(default=None, max_length=100)
    country: str | None = Field(default=None, max_length=100)
    emergency_contact_name: str | None = Field(default=None, max_length=150)
    emergency_contact_phone: str | None = Field(default=None, max_length=20)
    emergency_contact_relationship: str | None = Field(default=None, max_length=60)

    @field_validator("date_of_birth")
    @classmethod
    def validate_dob_not_future(cls, dob: date) -> date:
        """Ensures date of birth is not a future date."""
        from datetime import date as dt
        if dob > dt.today():
            raise ValueError("Date of birth cannot be a future date.")
        return dob


class PatientResponse(BaseModel):
    """Safe patient profile serialization — never exposes hashed credentials."""

    id: uuid.UUID
    mrn: str
    first_name: str
    last_name: str
    date_of_birth: date
    biological_sex: BiologicalSex
    blood_group: BloodGroup
    marital_status: MaritalStatus
    phone: str | None
    email: str | None
    city: str | None
    country: str | None

    model_config = {"from_attributes": True}


class PatientUpdateRequest(BaseModel):
    """Validates patient profile update payload — all fields optional."""

    first_name: str | None = Field(default=None, max_length=80)
    last_name: str | None = Field(default=None, max_length=80)
    phone: str | None = Field(default=None, max_length=20)
    email: EmailStr | None = None
    address: str | None = Field(default=None, max_length=500)
    city: str | None = Field(default=None, max_length=100)
    country: str | None = Field(default=None, max_length=100)
    blood_group: BloodGroup | None = None
    marital_status: MaritalStatus | None = None
    emergency_contact_name: str | None = Field(default=None, max_length=150)
    emergency_contact_phone: str | None = Field(default=None, max_length=20)
