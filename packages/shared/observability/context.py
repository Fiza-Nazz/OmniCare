"""Async correlation ID context manager using ContextVars.

Adheres to Constitution §30 and §39 (Request correlation across async boundaries).
"""

from __future__ import annotations

import uuid
from contextvars import ContextVar

# Async-safe context variable holding the active request correlation ID
_correlation_id_ctx: ContextVar[str] = ContextVar("correlation_id", default="")


def get_correlation_id() -> str:
    """Retrieves the active correlation ID or generates a fallback UUID."""
    val = _correlation_id_ctx.get()
    if not val:
        val = str(uuid.uuid4())
        _correlation_id_ctx.set(val)
    return val


def set_correlation_id(correlation_id: str | None = None) -> str:
    """Sets the active correlation ID in context. Generates a new UUID if None."""
    val = correlation_id.strip() if correlation_id and correlation_id.strip() else str(uuid.uuid4())
    _correlation_id_ctx.set(val)
    return val
