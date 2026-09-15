"""Patient search and query service.

Adheres to Constitution §9 (Patient Identity) and §33 (CQRS / Read Models).
"""

from __future__ import annotations

from collections.abc import Sequence

from sqlalchemy import or_, select
from sqlalchemy.ext.asyncio import AsyncSession

from domains.patients.models import Patient


class PatientSearchService:
    """Encapsulates patient lookup queries across MRN, name, and contact details."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def search_patients(
        self,
        query: str,
        limit: int = 20,
    ) -> Sequence[Patient]:
        """Searches patients by MRN prefix or case-insensitive name match."""
        cleaned = query.strip()
        if not cleaned:
            return []

        pattern = f"%{cleaned}%"
        stmt = (
            select(Patient)
            .where(
                or_(
                    Patient.mrn.ilike(pattern),
                    Patient.first_name.ilike(pattern),
                    Patient.last_name.ilike(pattern),
                    Patient.phone.ilike(pattern),
                )
            )
            .order_by(Patient.last_name, Patient.first_name)
            .limit(limit)
        )
        result = await self.session.execute(stmt)
        return result.scalars().all()

    async def get_by_mrn(self, mrn: str) -> Patient | None:
        """Retrieves single patient by exact Medical Record Number."""
        stmt = select(Patient).where(Patient.mrn == mrn.strip().upper())
        result = await self.session.execute(stmt)
        return result.scalar_one_or_none()
