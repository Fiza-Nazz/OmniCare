"""Invoice calculation service.

Adheres to Constitution §17 (Revenue Cycle Management — Invoice Computation).
"""

from __future__ import annotations

import uuid
from decimal import ROUND_HALF_UP, Decimal
from typing import TYPE_CHECKING

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

if TYPE_CHECKING:
    pass


class InvoiceCalculationError(Exception):
    """Raised when invoice calculation encounters an error."""


class InvoiceCalculationService:
    """Computes invoice totals including tax, discounts, and insurance adjustments.

    All monetary calculations use Decimal with ROUND_HALF_UP to avoid
    floating-point precision issues in financial computations.
    """

    TAX_RATE = Decimal("0.05")
    MAX_DISCOUNT_PERCENT = Decimal("0.25")

    def __init__(self, session: AsyncSession) -> None:
        self._session = session

    def calculate_line_total(
        self,
        unit_price: Decimal,
        quantity: int,
        discount_percent: Decimal = Decimal("0"),
    ) -> Decimal:
        """Calculate total for a single line item with optional discount."""
        if discount_percent < 0 or discount_percent > self.MAX_DISCOUNT_PERCENT:
            msg = f"Discount must be between 0 and {self.MAX_DISCOUNT_PERCENT}"
            raise InvoiceCalculationError(msg)

        subtotal = unit_price * Decimal(str(quantity))
        discount_amount = subtotal * discount_percent
        return (subtotal - discount_amount).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)

    def calculate_tax(self, amount: Decimal) -> Decimal:
        """Apply tax rate to an amount."""
        return (amount * self.TAX_RATE).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)

    def calculate_invoice_total(
        self,
        line_items: list[tuple[Decimal, int, Decimal]],
        insurance_coverage: Decimal = Decimal("0"),
    ) -> dict[str, Decimal]:
        """Calculate full invoice breakdown.

        Args:
            line_items: List of (unit_price, quantity, discount_percent) tuples.
            insurance_coverage: Amount covered by insurance.

        Returns:
            Dictionary with subtotal, discount, tax, insurance, and total.
        """
        subtotal = Decimal("0")
        total_discount = Decimal("0")

        for unit_price, quantity, discount_pct in line_items:
            raw = unit_price * Decimal(str(quantity))
            disc = raw * discount_pct
            subtotal += raw
            total_discount += disc

        net_subtotal = (subtotal - total_discount).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
        tax = self.calculate_tax(net_subtotal)
        total_before_insurance = net_subtotal + tax
        patient_responsibility = max(Decimal("0"), total_before_insurance - insurance_coverage)

        return {
            "subtotal": subtotal.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP),
            "discount": total_discount.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP),
            "net_subtotal": net_subtotal,
            "tax": tax,
            "insurance_coverage": insurance_coverage.quantize(
                Decimal("0.01"), rounding=ROUND_HALF_UP
            ),
            "patient_responsibility": patient_responsibility.quantize(
                Decimal("0.01"), rounding=ROUND_HALF_UP
            ),
            "total": total_before_insurance.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP),
        }

    async def recalculate_invoice(
        self,
        invoice_id: uuid.UUID,
    ) -> dict[str, Decimal]:
        """Recalculate totals for a persisted invoice from its line items."""
        from domains.billing.models import InvoiceLineItem

        stmt = select(InvoiceLineItem).where(InvoiceLineItem.invoice_id == invoice_id)
        result = await self._session.execute(stmt)
        items = result.scalars().all()

        if not items:
            msg = f"No line items found for invoice {invoice_id}"
            raise InvoiceCalculationError(msg)

        line_data = [
            (item.unit_price, item.quantity, getattr(item, "discount_percent", Decimal("0")))
            for item in items
        ]
        return self.calculate_invoice_total(line_data)
