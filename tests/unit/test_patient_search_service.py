"""Unit tests for PatientSearchService.

Adheres to Constitution §40 (Testing Constitution).
"""

from __future__ import annotations

from datetime import date

import pytest
import pytest_asyncio
from sqlalchemy.ext.asyncio import AsyncSession

from domains.patients.enums import BiologicalSex, BloodGroup, MaritalStatus
from domains.patients.models import Patient
from domains.patients.service import PatientSearchService
from packages.shared.database.base import Base
from packages.shared.database.session import (
    create_async_engine_instance,
    create_async_session_factory,
)


@pytest_asyncio.fixture
async def patient_session():
    """Provides isolated test database session."""
    engine = create_async_engine_instance("sqlite+aiosqlite:///:memory:")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    factory = create_async_session_factory(engine)
    async with factory() as session:
        yield session

    await engine.dispose()


@pytest.mark.asyncio
async def test_search_patients_by_name(patient_session: AsyncSession):
    """Verify search returns matching patients by first name."""
    patient = Patient(
        mrn="OMC-20260915-TST001",
        first_name="Zainab",
        last_name="Tariq",
        date_of_birth=date(1995, 3, 10),
        biological_sex=BiologicalSex.FEMALE,
        blood_group=BloodGroup.B_POSITIVE,
        marital_status=MaritalStatus.SINGLE,
    )
    patient_session.add(patient)
    await patient_session.commit()

    service = PatientSearchService(patient_session)
    results = await service.search_patients("Zainab")
    assert len(results) == 1
    assert results[0].mrn == "OMC-20260915-TST001"


@pytest.mark.asyncio
async def test_get_by_mrn_exact_match(patient_session: AsyncSession):
    """Verify exact MRN retrieval."""
    patient = Patient(
        mrn="OMC-20260915-TST002",
        first_name="Bilal",
        last_name="Khan",
        date_of_birth=date(1988, 7, 22),
        biological_sex=BiologicalSex.MALE,
        blood_group=BloodGroup.O_NEGATIVE,
        marital_status=MaritalStatus.MARRIED,
    )
    patient_session.add(patient)
    await patient_session.commit()

    service = PatientSearchService(patient_session)
    found = await service.get_by_mrn("OMC-20260915-TST002")
    assert found is not None
    assert found.first_name == "Bilal"


@pytest.mark.asyncio
async def test_search_empty_query_returns_empty(patient_session: AsyncSession):
    """Verify blank search returns empty list without querying database."""
    service = PatientSearchService(patient_session)
    results = await service.search_patients("   ")
    assert results == []
