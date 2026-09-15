"""Pharmacy dispensation service.

Adheres to Constitution §14 (Pharmacy — Dispensation Workflow).
"""

from __future__ import annotations

import uuid
from datetime import UTC, datetime
from typing import TYPE_CHECKING, Any

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

if TYPE_CHECKING:
    from domains.pharmacy.inventory import PharmacyInventoryItem

from domains.pharmacy.inventory import PharmacyInventoryItem


class InventoryDepletedError(Exception):
    """Raised when inventory is insufficient for dispensation."""


class DrugNotFoundError(Exception):
    """Raised when the requested drug is not in inventory."""


class PharmacyDispensationService:
    """Manages the dispensation workflow: validates stock, deducts inventory,
    and records dispensation events.
    """

    def __init__(self, session: AsyncSession) -> None:
        self._session = session

    async def get_inventory_item(
        self,
        drug_code: str,
    ) -> PharmacyInventoryItem | None:
        """Look up an active inventory item by drug code / NDC."""
        stmt = select(PharmacyInventoryItem).where(
            PharmacyInventoryItem.ndc_or_sku == drug_code,
        )
        result = await self._session.execute(stmt)
        return result.scalar_one_or_none()

    async def dispense(
        self,
        prescription_id: uuid.UUID,
        drug_code: str,
        quantity: int,
        pharmacist_id: uuid.UUID,
        batch_number: str = "BATCH-DEFAULT",
    ) -> uuid.UUID:
        """Dispense medication and deduct from inventory.

        Returns the dispensation record ID.

        Raises:
            DrugNotFoundError: If drug is not in inventory.
            InventoryDepletedError: If stock is insufficient.
        """
        item = await self.get_inventory_item(drug_code)
        if item is None:
            msg = f"Drug {drug_code} not found in active inventory"
            raise DrugNotFoundError(msg)

        if item.quantity_in_stock < quantity:
            raise InventoryDepletedError(
                f"Need {quantity} units of {drug_code}, only {item.quantity_in_stock} available"
            )

        # Deduct inventory
        item.quantity_in_stock -= quantity

        # Create dispensation record
        from domains.pharmacy.dispensation import DispensationStatus, PharmacyDispensation

        dispensation_id = uuid.uuid4()
        dispensation = PharmacyDispensation(
            id=dispensation_id,
            prescription_id=prescription_id,
            dispensed_by_user_id=pharmacist_id,
            status=DispensationStatus.DISPENSED,
            dispensed_at=datetime.now(tz=UTC),
            batch_number=batch_number,
            quantity_dispensed=quantity,
        )
        self._session.add(dispensation)
        await self._session.flush()

        return dispensation_id

    async def check_low_stock(
        self,
        threshold: int = 10,
    ) -> list[dict[str, Any]]:
        """Return all inventory items below the stock threshold."""
        stmt = select(PharmacyInventoryItem).where(
            PharmacyInventoryItem.quantity_in_stock <= threshold,
        )
        result = await self._session.execute(stmt)
        items = result.scalars().all()

        return [
            {
                "drug_code": item.ndc_or_sku,
                "drug_name": item.medication_name,
                "quantity_on_hand": item.quantity_in_stock,
                "reorder_level": item.reorder_level,
            }
            for item in items
        ]
