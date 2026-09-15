"""Unit tests for PrescriptionFulfillmentService.

Validates stock check logic and fulfillment error paths.
"""

from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock
from uuid import uuid4

import pytest

from domains.prescriptions.services.fulfillment import (
    PrescriptionAlreadyFulfilledError,
    PrescriptionFulfillmentService,
)


@pytest.fixture
def mock_session() -> AsyncMock:
    """Create a mock async database session."""
    session = AsyncMock()
    session.flush = AsyncMock()
    return session


@pytest.fixture
def service(mock_session: AsyncMock) -> PrescriptionFulfillmentService:
    return PrescriptionFulfillmentService(session=mock_session)


class TestValidateStock:
    """Tests for stock validation logic."""

    async def test_returns_false_when_item_not_found(
        self,
        service: PrescriptionFulfillmentService,
        mock_session: AsyncMock,
    ) -> None:
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = None
        mock_session.execute.return_value = mock_result
        assert await service.validate_stock("DRUG-001", 10) is False

    async def test_returns_false_when_insufficient_stock(
        self,
        service: PrescriptionFulfillmentService,
        mock_session: AsyncMock,
    ) -> None:
        item = MagicMock()
        item.quantity_on_hand = 5
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = item
        mock_session.execute.return_value = mock_result
        assert await service.validate_stock("DRUG-001", 10) is False

    async def test_returns_true_when_stock_sufficient(
        self,
        service: PrescriptionFulfillmentService,
        mock_session: AsyncMock,
    ) -> None:
        item = MagicMock()
        item.quantity_on_hand = 100
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = item
        mock_session.execute.return_value = mock_result
        assert await service.validate_stock("DRUG-001", 10) is True


class TestFulfill:
    """Tests for prescription fulfillment workflow."""

    async def test_raises_value_error_when_prescription_not_found(
        self,
        service: PrescriptionFulfillmentService,
        mock_session: AsyncMock,
    ) -> None:
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = None
        mock_session.execute.return_value = mock_result
        with pytest.raises(ValueError, match="not found"):
            await service.fulfill(uuid4(), uuid4())

    async def test_raises_error_when_already_dispensed(
        self,
        service: PrescriptionFulfillmentService,
        mock_session: AsyncMock,
    ) -> None:
        rx = MagicMock()
        rx.status.value = "dispensed"
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = rx
        mock_session.execute.return_value = mock_result
        with pytest.raises(PrescriptionAlreadyFulfilledError):
            await service.fulfill(uuid4(), uuid4())
