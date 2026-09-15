"""Pytest root configuration for OmniCare test suite.

Ensures all domain models are registered in Base.metadata before any tests run
create_all().
"""

from __future__ import annotations

# Pre-load domain models so SQLAlchemy metadata knows all foreign key target tables
import domains.appointments.models
import domains.clinical.models
import domains.identity.models
import domains.patients.models
import domains.pharmacy.dispensation
import domains.pharmacy.inventory
import domains.prescriptions.models  # noqa: F401
