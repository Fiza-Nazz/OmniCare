"""Pharmacy dispensation service.

Adheres to Constitution §14 (Pharmacy — Dispensation Workflow).
"""

from __future__ import annotations

import uuid
from datetime import UTC, datetime
from typing import TYPE_CHECKING

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

if TYPE_CHECKING:
    pass


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
    ) -> object | None:
        """Look up an active inventory item by drug code."""
        from domains.pharmacy.models import PharmacyInventoryItem

        stmt = select(PharmacyInventoryItem).where(
            PharmacyInventoryItem.drug_code == drug_code,
            PharmacyInventoryItem.is_active.is_(True),
        )
        result = await self._session.execute(stmt)
        return result.scalar_one_or_none()

    async def dispense(
        self,
        prescription_id: uuid.UUID,
        drug_code: str,
        quantity: int,
        pharmacist_id: uuid.UUID,
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

        if item.quantity_on_hand < quantity:
            raise InventoryDepletedError(
                f"Need {quantity} units of {drug_code}, only {item.quantity_on_hand} available"
            )

        # Deduct inventory
        item.quantity_on_hand -= quantity
        item.last_dispensed_at = datetime.now(tz=UTC)

        # Create dispensation record
        from domains.pharmacy.models import PharmacyDispensation

        dispensation = PharmacyDispensation(
            prescription_id=prescription_id,
            drug_code=drug_code,
            quantity_dispensed=quantity,
            pharmacist_id=pharmacist_id,
            dispensed_at=datetime.now(tz=UTC),
        )
        self._session.add(dispensation)
        await self._session.flush()

        return dispensation.id

    async def check_low_stock(
        self,
        threshold: int = 10,
    ) -> list[dict]:
        """Return all inventory items below the stock threshold."""
        from domains.pharmacy.models import PharmacyInventoryItem

        stmt = select(PharmacyInventoryItem).where(
            PharmacyInventoryItem.quantity_on_hand <= threshold,
            PharmacyInventoryItem.is_active.is_(True),
        )
        result = await self._session.execute(stmt)
        items = result.scalars().all()

        return [
            {
                "drug_code": item.drug_code,
                "drug_name": getattr(item, "drug_name", ""),
                "quantity_on_hand": item.quantity_on_hand,
                "reorder_level": getattr(item, "reorder_level", threshold),
            }
            for item in items
        ]
