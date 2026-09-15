"""Unit tests for LabOrderProcessingService.

Validates order status FSM transitions and error handling.
"""

from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock
from uuid import uuid4

import pytest

from domains.laboratory.services.order_processing import (
    LabOrderProcessingService,
)


@pytest.fixture
def mock_session() -> AsyncMock:
    session = AsyncMock()
    session.flush = AsyncMock()
    return session


@pytest.fixture
def service(mock_session: AsyncMock) -> LabOrderProcessingService:
    return LabOrderProcessingService(session=mock_session)


class TestValidateTransition:
    """Tests for order status FSM validation."""

    def test_ordered_to_specimen_collected_is_valid(
        self, service: LabOrderProcessingService
    ) -> None:
        assert service.validate_transition("ordered", "specimen_collected") is True

    def test_ordered_to_completed_is_invalid(self, service: LabOrderProcessingService) -> None:
        assert service.validate_transition("ordered", "completed") is False

    def test_completed_to_corrected_is_valid(self, service: LabOrderProcessingService) -> None:
        assert service.validate_transition("completed", "corrected") is True

    def test_cancelled_has_no_transitions(self, service: LabOrderProcessingService) -> None:
        assert service.validate_transition("cancelled", "ordered") is False
        assert service.validate_transition("cancelled", "completed") is False

    def test_in_progress_to_completed(self, service: LabOrderProcessingService) -> None:
        assert service.validate_transition("in_progress", "completed") is True

    def test_in_progress_to_cancelled(self, service: LabOrderProcessingService) -> None:
        assert service.validate_transition("in_progress", "cancelled") is True


class TestTransitionStatus:
    """Tests for actual status transition execution."""

    async def test_raises_when_order_not_found(
        self,
        service: LabOrderProcessingService,
        mock_session: AsyncMock,
    ) -> None:
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = None
        mock_session.execute.return_value = mock_result
        with pytest.raises(ValueError, match="not found"):
            await service.transition_status(uuid4(), "completed", uuid4())
