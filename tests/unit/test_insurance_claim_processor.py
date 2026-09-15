"""Unit tests for InsuranceClaimProcessor.

Validates coverage calculation and claim adjudication logic.
"""

from __future__ import annotations

from decimal import Decimal
from unittest.mock import AsyncMock, MagicMock
from uuid import uuid4

import pytest

from domains.insurance.services.claim_processor import (
    EligibilityCheckFailedError,
    InsuranceClaimProcessor,
)


@pytest.fixture
def mock_session() -> AsyncMock:
    session = AsyncMock()
    session.add = MagicMock()
    session.flush = AsyncMock()
    return session


@pytest.fixture
def processor(mock_session: AsyncMock) -> InsuranceClaimProcessor:
    return InsuranceClaimProcessor(session=mock_session)


class TestCalculateCoverage:
    """Tests for coverage calculation based on service type."""

    def test_preventive_care_full_coverage(self, processor: InsuranceClaimProcessor) -> None:
        result = processor.calculate_coverage("preventive_care", Decimal("500.00"))
        assert result["covered_amount"] == Decimal("500.00")
        assert result["patient_responsibility"] == Decimal("0.00")

    def test_specialist_70_percent(self, processor: InsuranceClaimProcessor) -> None:
        result = processor.calculate_coverage("specialist", Decimal("1000.00"))
        assert result["covered_amount"] == Decimal("700.00")
        assert result["patient_responsibility"] == Decimal("300.00")

    def test_unknown_service_defaults_to_50(self, processor: InsuranceClaimProcessor) -> None:
        result = processor.calculate_coverage("unknown_service", Decimal("200.00"))
        assert result["coverage_rate"] == Decimal("0.50")
        assert result["covered_amount"] == Decimal("100.00")

    def test_emergency_90_percent(self, processor: InsuranceClaimProcessor) -> None:
        result = processor.calculate_coverage("emergency", Decimal("5000.00"))
        assert result["covered_amount"] == Decimal("4500.00")


@pytest.mark.asyncio
class TestVerifyEligibility:
    """Tests for eligibility verification."""

    async def test_raises_when_payer_not_found(
        self,
        processor: InsuranceClaimProcessor,
        mock_session: AsyncMock,
    ) -> None:
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = None
        mock_session.execute.return_value = mock_result
        with pytest.raises(EligibilityCheckFailedError, match="not found"):
            await processor.verify_eligibility(uuid4(), uuid4(), MagicMock())
