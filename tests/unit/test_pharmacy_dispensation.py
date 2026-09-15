"""Unit tests for PharmacyDispensationService.

Validates dispensation workflow including stock deduction and error paths.
"""

from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock
from uuid import uuid4

import pytest

from domains.pharmacy.services.dispensation import (
    DrugNotFoundError,
    InventoryDepletedError,
    PharmacyDispensationService,
)


@pytest.fixture
def mock_session() -> AsyncMock:
    session = AsyncMock()
    session.add = MagicMock()
    session.flush = AsyncMock()
    return session


@pytest.fixture
def service(mock_session: AsyncMock) -> PharmacyDispensationService:
    return PharmacyDispensationService(session=mock_session)


@pytest.mark.asyncio
class TestGetInventoryItem:
    """Tests for inventory item lookup."""

    async def test_returns_none_when_not_found(
        self,
        service: PharmacyDispensationService,
        mock_session: AsyncMock,
    ) -> None:
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = None
        mock_session.execute.return_value = mock_result
        result = await service.get_inventory_item("NONEXISTENT")
        assert result is None


@pytest.mark.asyncio
class TestDispense:
    """Tests for dispensation workflow."""

    async def test_raises_drug_not_found(
        self,
        service: PharmacyDispensationService,
        mock_session: AsyncMock,
    ) -> None:
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = None
        mock_session.execute.return_value = mock_result
        with pytest.raises(DrugNotFoundError, match="not found"):
            await service.dispense(uuid4(), "MISSING", 10, uuid4())

    async def test_raises_insufficient_stock(
        self,
        service: PharmacyDispensationService,
        mock_session: AsyncMock,
    ) -> None:
        item = MagicMock()
        item.quantity_in_stock = 5
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = item
        mock_session.execute.return_value = mock_result
        with pytest.raises(InventoryDepletedError):
            await service.dispense(uuid4(), "DRUG-001", 50, uuid4())

    async def test_successful_dispense_deducts_stock(
        self,
        service: PharmacyDispensationService,
        mock_session: AsyncMock,
    ) -> None:
        item = MagicMock()
        item.quantity_in_stock = 100
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = item
        mock_session.execute.return_value = mock_result
        disp_id = await service.dispense(uuid4(), "DRUG-001", 20, uuid4())
        assert disp_id is not None
        assert item.quantity_in_stock == 80
        mock_session.add.assert_called_once()
        mock_session.flush.assert_called_once()


@pytest.mark.asyncio
class TestLowStock:
    """Tests for low stock monitoring."""

    async def test_returns_empty_when_no_low_stock(
        self,
        service: PharmacyDispensationService,
        mock_session: AsyncMock,
    ) -> None:
        mock_result = MagicMock()
        mock_result.scalars.return_value.all.return_value = []
        mock_session.execute.return_value = mock_result
        result = await service.check_low_stock()
        assert result == []
