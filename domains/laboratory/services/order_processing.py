"""Lab order processing service.

Adheres to Constitution §16 (Laboratory Information System — Order Lifecycle).
"""

from __future__ import annotations

import uuid
from datetime import UTC, datetime
from typing import TYPE_CHECKING

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

if TYPE_CHECKING:
    pass


class InvalidOrderTransitionError(Exception):
    """Raised when an order status transition is not allowed."""


class LabOrderProcessingService:
    """Manages lab order lifecycle: creation, specimen collection,
    processing, and result reporting.
    """

    VALID_TRANSITIONS: dict[str, list[str]] = {
        "ordered": ["specimen_collected", "cancelled"],
        "specimen_collected": ["in_progress", "cancelled"],
        "in_progress": ["completed", "cancelled"],
        "completed": ["corrected"],
        "corrected": [],
        "cancelled": [],
    }

    def __init__(self, session: AsyncSession) -> None:
        self._session = session

    async def get_order(self, order_id: uuid.UUID) -> object | None:
        """Retrieve a lab order by ID."""
        from domains.laboratory.models import LabOrder

        stmt = select(LabOrder).where(LabOrder.id == order_id)
        result = await self._session.execute(stmt)
        return result.scalar_one_or_none()

    def validate_transition(
        self,
        current_status: str,
        target_status: str,
    ) -> bool:
        """Check if a status transition is valid."""
        allowed = self.VALID_TRANSITIONS.get(current_status, [])
        return target_status in allowed

    async def transition_status(
        self,
        order_id: uuid.UUID,
        target_status: str,
        performed_by: uuid.UUID,
    ) -> None:
        """Transition a lab order to a new status.

        Raises:
            ValueError: If order not found.
            InvalidOrderTransitionError: If transition is not valid.
        """
        order = await self.get_order(order_id)
        if order is None:
            msg = f"Lab order {order_id} not found"
            raise ValueError(msg)

        current = str(order.status.value) if hasattr(order.status, "value") else str(order.status)

        if not self.validate_transition(current, target_status):
            raise InvalidOrderTransitionError(
                f"Cannot transition from {current} to {target_status}"
            )

        order.status = target_status
        order.last_updated_by = performed_by
        order.status_changed_at = datetime.now(tz=UTC)
        await self._session.flush()

    async def record_specimen_collection(
        self,
        order_id: uuid.UUID,
        specimen_id: str,
        collector_id: uuid.UUID,
        collection_site: str = "",
    ) -> None:
        """Record specimen collection for a lab order."""
        order = await self.get_order(order_id)
        if order is None:
            msg = f"Lab order {order_id} not found"
            raise ValueError(msg)

        order.specimen_id = specimen_id
        order.specimen_collected_at = datetime.now(tz=UTC)
        order.specimen_collector_id = collector_id
        order.collection_site = collection_site
        order.status = "specimen_collected"
        await self._session.flush()

    async def get_pending_orders(
        self,
        clinician_id: uuid.UUID | None = None,
    ) -> list:
        """Return all orders in ordered or specimen_collected status."""
        from domains.laboratory.models import LabOrder

        conditions = [
            LabOrder.status.in_(["ordered", "specimen_collected"]),
        ]
        if clinician_id:
            conditions.append(LabOrder.ordering_clinician_id == clinician_id)

        stmt = select(LabOrder).where(*conditions)
        result = await self._session.execute(stmt)
        return list(result.scalars().all())
