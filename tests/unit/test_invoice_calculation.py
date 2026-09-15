"""Unit tests for InvoiceCalculationService.

Covers line-item totals, tax computation, discount limits, and full invoice breakdown.
"""

from __future__ import annotations

from decimal import Decimal
from unittest.mock import AsyncMock

import pytest

from domains.billing.services.calculation import (
    InvoiceCalculationError,
    InvoiceCalculationService,
)


@pytest.fixture
def service() -> InvoiceCalculationService:
    session = AsyncMock()
    return InvoiceCalculationService(session=session)


class TestLineTotal:
    """Tests for individual line item calculation."""

    def test_no_discount(self, service: InvoiceCalculationService) -> None:
        result = service.calculate_line_total(Decimal("100.00"), 3)
        assert result == Decimal("300.00")

    def test_with_discount(self, service: InvoiceCalculationService) -> None:
        result = service.calculate_line_total(Decimal("200.00"), 2, Decimal("0.10"))
        assert result == Decimal("360.00")

    def test_discount_exceeds_max_raises(self, service: InvoiceCalculationService) -> None:
        with pytest.raises(InvoiceCalculationError, match="Discount must be"):
            service.calculate_line_total(Decimal("100.00"), 1, Decimal("0.50"))

    def test_negative_discount_raises(self, service: InvoiceCalculationService) -> None:
        with pytest.raises(InvoiceCalculationError, match="Discount must be"):
            service.calculate_line_total(Decimal("100.00"), 1, Decimal("-0.10"))


class TestTaxCalculation:
    """Tests for tax computation."""

    def test_standard_tax(self, service: InvoiceCalculationService) -> None:
        result = service.calculate_tax(Decimal("1000.00"))
        assert result == Decimal("50.00")

    def test_tax_rounding(self, service: InvoiceCalculationService) -> None:
        result = service.calculate_tax(Decimal("33.33"))
        assert result == Decimal("1.67")


class TestInvoiceTotal:
    """Tests for full invoice breakdown calculation."""

    def test_simple_invoice(self, service: InvoiceCalculationService) -> None:
        items = [(Decimal("100.00"), 2, Decimal("0"))]
        result = service.calculate_invoice_total(items)
        assert result["subtotal"] == Decimal("200.00")
        assert result["tax"] == Decimal("10.00")
        assert result["total"] == Decimal("210.00")

    def test_with_insurance_coverage(self, service: InvoiceCalculationService) -> None:
        items = [(Decimal("500.00"), 1, Decimal("0"))]
        result = service.calculate_invoice_total(items, insurance_coverage=Decimal("300.00"))
        assert result["patient_responsibility"] == Decimal("225.00")

    def test_insurance_exceeds_total(self, service: InvoiceCalculationService) -> None:
        items = [(Decimal("100.00"), 1, Decimal("0"))]
        result = service.calculate_invoice_total(items, insurance_coverage=Decimal("9999.00"))
        assert result["patient_responsibility"] == Decimal("0.00")
