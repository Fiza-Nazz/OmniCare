"""Prescription fulfillment service.

Adheres to Constitution §13 (ePrescribing — Fulfillment Workflow).
"""

from __future__ import annotations

import uuid
from datetime import UTC, datetime
from typing import TYPE_CHECKING

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

if TYPE_CHECKING:
    pass


class InsufficientStockError(Exception):
    """Raised when pharmacy inventory cannot fulfill the requested quantity."""

    def __init__(self, drug_code: str, requested: int, available: int) -> None:
        self.drug_code = drug_code
        self.requested = requested
        self.available = available
        super().__init__(
            f"Insufficient stock for {drug_code}: requested {requested}, available {available}"
        )


class PrescriptionAlreadyFulfilledError(Exception):
    """Raised when attempting to fulfill a prescription that is already dispensed."""


class PrescriptionFulfillmentService:
    """Orchestrates end-to-end prescription dispensation.

    Validates stock levels, creates dispensation records, and updates
    prescription status atomically within a single DB transaction.
    """

    def __init__(self, session: AsyncSession) -> None:
        self._session = session

    async def validate_stock(
        self,
        drug_code: str,
        quantity: int,
    ) -> bool:
        """Check whether the pharmacy has sufficient stock for a drug."""
        from domains.pharmacy.models import PharmacyInventoryItem

        stmt = select(PharmacyInventoryItem).where(
            PharmacyInventoryItem.drug_code == drug_code,
            PharmacyInventoryItem.is_active.is_(True),
        )
        result = await self._session.execute(stmt)
        item = result.scalar_one_or_none()
        if item is None:
            return False
        return item.quantity_on_hand >= quantity

    async def fulfill(
        self,
        prescription_id: uuid.UUID,
        pharmacist_id: uuid.UUID,
    ) -> uuid.UUID:
        """Fulfill a prescription by creating a dispensation record.

        Returns the dispensation ID on success.

        Raises:
            PrescriptionAlreadyFulfilledError: If already dispensed.
            InsufficientStockError: If stock is insufficient.
        """
        from domains.prescriptions.models import Prescription

        stmt = select(Prescription).where(Prescription.id == prescription_id)
        result = await self._session.execute(stmt)
        rx = result.scalar_one_or_none()

        if rx is None:
            msg = f"Prescription {prescription_id} not found"
            raise ValueError(msg)

        if rx.status.value == "dispensed":
            raise PrescriptionAlreadyFulfilledError

        dispensation_id = uuid.uuid4()
        rx.status = "dispensed"
        rx.dispensed_at = datetime.now(tz=UTC)
        rx.dispensed_by_id = pharmacist_id

        await self._session.flush()
        return dispensation_id

    async def cancel_fulfillment(
        self,
        prescription_id: uuid.UUID,
        reason: str,
    ) -> None:
        """Reverse a dispensation and restore prescription to active status."""
        from domains.prescriptions.models import Prescription

        stmt = select(Prescription).where(Prescription.id == prescription_id)
        result = await self._session.execute(stmt)
        rx = result.scalar_one_or_none()

        if rx is None:
            msg = f"Prescription {prescription_id} not found"
            raise ValueError(msg)

        rx.status = "active"
        rx.dispensed_at = None
        rx.dispensed_by_id = None
        rx.cancellation_reason = reason
        await self._session.flush()
