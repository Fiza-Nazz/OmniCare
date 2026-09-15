"""Medical Record Number (MRN) Generator.

MRN Format: OMC-YYYYMMDD-XXXXXX (6 random alphanumeric suffix).
Adheres to Constitution §9 (Patient Identity) — unique identifiers.
"""
from __future__ import annotations

import secrets
import string
from datetime import UTC, datetime

_CHARSET = string.ascii_uppercase + string.digits
_SUFFIX_LENGTH = 6


def generate_mrn() -> str:
    """Generates a unique OmniCare Medical Record Number.

    Format: OMC-YYYYMMDD-XXXXXX
    Example: OMC-20260915-K8P2QR
    """
    today = datetime.now(UTC).strftime("%Y%m%d")
    suffix = "".join(secrets.choice(_CHARSET) for _ in range(_SUFFIX_LENGTH))
    return f"OMC-{today}-{suffix}"


def validate_mrn_format(mrn: str) -> bool:
    """Validates that an MRN conforms to the OMC-YYYYMMDD-XXXXXX format."""
    import re
    pattern = r"^OMC-\d{8}-[A-Z0-9]{6}$"
    return bool(re.match(pattern, mrn))
