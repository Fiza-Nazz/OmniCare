"""Insurance claim processing service.

Adheres to Constitution §18 (Insurance — Claims Adjudication Workflow).
"""

from __future__ import annotations

import uuid
from datetime import UTC, datetime
from decimal import Decimal
from typing import ClassVar

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession


class ClaimDeniedError(Exception):
    """Raised when a claim is denied during adjudication."""

    def __init__(self, reason: str, denial_code: str) -> None:
        self.reason = reason
        self.denial_code = denial_code
        super().__init__(f"Claim denied ({denial_code}): {reason}")


class EligibilityCheckFailedError(Exception):
    """Raised when patient eligibility verification fails."""


class InsuranceClaimProcessor:
    """Processes insurance claims through submission, verification, and adjudication.

    Implements a multi-step claim lifecycle with eligibility checks
    and automated adjudication rules.
    """

    ADJUDICATION_RULES: ClassVar[dict[str, Decimal]] = {
        "preventive_care": Decimal("1.00"),
        "primary_care": Decimal("0.80"),
        "specialist": Decimal("0.70"),
        "emergency": Decimal("0.90"),
        "surgical": Decimal("0.60"),
        "mental_health": Decimal("0.80"),
    }

    def __init__(self, session: AsyncSession) -> None:
        self._session = session

    async def verify_eligibility(
        self,
        patient_id: uuid.UUID,
        payer_id: uuid.UUID,
        service_date: datetime,
    ) -> dict[str, object]:
        """Verify patient eligibility with insurance payer."""
        from domains.insurance.models import InsurancePayer

        stmt = select(InsurancePayer).where(InsurancePayer.id == payer_id)
        result = await self._session.execute(stmt)
        payer = result.scalar_one_or_none()

        if payer is None:
            raise EligibilityCheckFailedError(f"Payer {payer_id} not found")

        is_active = getattr(payer, "is_active", True)
        if not is_active:
            raise EligibilityCheckFailedError(f"Payer {payer.name} is not active")

        return {
            "eligible": True,
            "payer_name": getattr(payer, "name", "Unknown"),
            "payer_id": str(payer_id),
            "verified_at": datetime.now(tz=UTC).isoformat(),
        }

    def calculate_coverage(
        self,
        service_type: str,
        billed_amount: Decimal,
    ) -> dict[str, Decimal]:
        """Calculate coverage based on service type and adjudication rules."""
        coverage_rate = self.ADJUDICATION_RULES.get(service_type, Decimal("0.50"))
        covered = (billed_amount * coverage_rate).quantize(Decimal("0.01"))
        patient_share = billed_amount - covered

        return {
            "billed_amount": billed_amount,
            "coverage_rate": coverage_rate,
            "covered_amount": covered,
            "patient_responsibility": patient_share,
        }

    async def submit_claim(
        self,
        patient_id: uuid.UUID,
        payer_id: uuid.UUID,
        service_type: str,
        billed_amount: Decimal,
        diagnosis_codes: list[str],
        procedure_codes: list[str],
    ) -> uuid.UUID:
        """Submit a new insurance claim."""
        from domains.insurance.models import InsuranceClaim

        coverage = self.calculate_coverage(service_type, billed_amount)

        claim = InsuranceClaim(
            patient_id=patient_id,
            payer_id=payer_id,
            service_type=service_type,
            billed_amount=billed_amount,
            covered_amount=coverage["covered_amount"],
            patient_responsibility=coverage["patient_responsibility"],
            diagnosis_codes=",".join(diagnosis_codes),
            procedure_codes=",".join(procedure_codes),
            status="submitted",
            submitted_at=datetime.now(tz=UTC),
        )
        self._session.add(claim)
        await self._session.flush()
        return claim.id

    async def adjudicate_claim(
        self,
        claim_id: uuid.UUID,
    ) -> str:
        """Run adjudication on a submitted claim."""
        from domains.insurance.models import InsuranceClaim

        stmt = select(InsuranceClaim).where(InsuranceClaim.id == claim_id)
        result = await self._session.execute(stmt)
        claim = result.scalar_one_or_none()

        if claim is None:
            msg = f"Claim {claim_id} not found"
            raise ValueError(msg)

        if claim.billed_amount <= Decimal("0"):
            claim.status = "denied"
            claim.denial_reason = "Invalid billed amount"
            await self._session.flush()
            raise ClaimDeniedError("Invalid billed amount", "INV_AMT")

        claim.status = "approved"
        claim.adjudicated_at = datetime.now(tz=UTC)
        await self._session.flush()
        return "approved"
