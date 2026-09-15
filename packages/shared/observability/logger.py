"""Structured JSON Logger with Automated Sensitive Data Masking.

Adheres to Constitution:
- §24: Privacy & Data Minimization (Sensitive information MUST NOT appear in logs).
- §39: Observability (Structured JSON logs, correlation IDs).
"""

from __future__ import annotations

import json
import logging
import sys
from datetime import UTC, datetime
from typing import Any

from packages.shared.observability.context import get_correlation_id

SENSITIVE_KEYS = {
    "password",
    "secret",
    "token",
    "access_token",
    "refresh_token",
    "authorization",
    "api_key",
    "ssn",
    "card_number",
    "cvv",
    "pin",
}

REDACTED = "***REDACTED***"


def mask_sensitive_payload(data: Any) -> Any:
    """Recursively traverses dictionaries and lists to mask sensitive attributes."""
    if isinstance(data, dict):
        sanitized: dict[str, Any] = {}
        for key, value in data.items():
            if any(sens in key.lower() for sens in SENSITIVE_KEYS):
                sanitized[key] = REDACTED
            else:
                sanitized[key] = mask_sensitive_payload(value)
        return sanitized
    if isinstance(data, (list, tuple, set)):
        return [mask_sensitive_payload(item) for item in data]
    return data


class StructuredJsonFormatter(logging.Formatter):
    """Custom logging formatter outputting clean JSON with correlation ID."""

    def format(self, record: logging.LogRecord) -> str:
        payload: dict[str, Any] = {
            "timestamp": datetime.now(UTC).isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
            "correlation_id": getattr(record, "correlation_id", get_correlation_id()),
        }

        # Include additional extra context if provided
        if hasattr(record, "extra_fields") and isinstance(record.extra_fields, dict):
            payload["context"] = mask_sensitive_payload(record.extra_fields)

        if record.exc_info:
            payload["exception"] = self.formatException(record.exc_info)

        return json.dumps(payload, default=str)


def get_logger(name: str = "omnicare", level: str = "INFO") -> logging.Logger:
    """Retrieves or creates a configured structured JSON logger."""
    logger = logging.getLogger(name)
    logger.setLevel(getattr(logging, level.upper(), logging.INFO))

    if not logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        handler.setFormatter(StructuredJsonFormatter())
        logger.addHandler(handler)
        logger.propagate = False

    return logger
