"""Insurance domain enums for payers, claim adjudication, and denial reasons.

Adheres to Constitution §18 (Insurance Verification & Claims).
"""

from __future__ import annotations

from enum import StrEnum


class ClaimStatus(StrEnum):
    """Adjudication status of an insurance reimbursement claim."""

    SUBMITTED = "submitted"
    ACKNOWLEDGED = "acknowledged"
    IN_REVIEW = "in_review"
    APPROVED = "approved"
    PARTIALLY_APPROVED = "partially_approved"
    DENIED = "denied"
    APPEALED = "appealed"
    SETTLED = "settled"


class PayerType(StrEnum):
    """Classification of insurance payer organisation."""

    COMMERCIAL = "commercial"
    GOVERNMENT = "government"
    MEDICAID = "medicaid"
    MEDICARE = "medicare"
    SELF_INSURED = "self_insured"
    CHARITY_CARE = "charity_care"


class DenialReason(StrEnum):
    """Standardized claim denial classification."""

    NONE = "none"
    INELIGIBLE_MEMBER = "ineligible_member"
    SERVICE_NOT_COVERED = "service_not_covered"
    PRIOR_AUTH_MISSING = "prior_auth_missing"
    DUPLICATE_CLAIM = "duplicate_claim"
    TIMELY_FILING_EXPIRED = "timely_filing_expired"
    INCORRECT_CODING = "incorrect_coding"
