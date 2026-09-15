"""Structured error handling middleware with RFC 7807 Problem Details responses.

Adheres to Constitution §24 (Error Handling & Resilience).
"""

from __future__ import annotations

import logging
from collections.abc import Callable
from uuid import uuid4

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, Response

logger = logging.getLogger("omnicare.errors")


class OmniCareError(Exception):
    """Base exception for OmniCare application errors."""

    def __init__(
        self,
        detail: str,
        status_code: int = 500,
        error_code: str = "INTERNAL_ERROR",
    ) -> None:
        self.detail = detail
        self.status_code = status_code
        self.error_code = error_code
        super().__init__(detail)


OmniCareException = OmniCareError


class ResourceNotFoundError(OmniCareError):
    """Raised when a requested resource does not exist."""

    def __init__(self, resource: str, identifier: str) -> None:
        super().__init__(
            detail=f"{resource} with identifier '{identifier}' not found",
            status_code=404,
            error_code="RESOURCE_NOT_FOUND",
        )


class ConflictError(OmniCareException):
    """Raised when a request conflicts with current state."""

    def __init__(self, detail: str) -> None:
        super().__init__(
            detail=detail,
            status_code=409,
            error_code="CONFLICT",
        )


class ValidationError(OmniCareException):
    """Raised when request validation fails."""

    def __init__(self, detail: str) -> None:
        super().__init__(
            detail=detail,
            status_code=422,
            error_code="VALIDATION_ERROR",
        )


class AuthorizationError(OmniCareException):
    """Raised when user lacks permission for the requested action."""

    def __init__(self, detail: str = "Insufficient permissions") -> None:
        super().__init__(
            detail=detail,
            status_code=403,
            error_code="FORBIDDEN",
        )


def build_problem_detail(
    *,
    status: int,
    title: str,
    detail: str,
    error_code: str,
    instance: str,
) -> dict:
    """Build an RFC 7807 Problem Details response body."""
    return {
        "type": f"https://api.omnicare.health/errors/{error_code.lower()}",
        "title": title,
        "status": status,
        "detail": detail,
        "instance": instance,
        "traceId": str(uuid4()),
    }


class ErrorHandlerMiddleware(BaseHTTPMiddleware):
    """Catches exceptions and returns RFC 7807 Problem Details JSON responses.

    Prevents stack traces from leaking to clients while logging
    full details server-side for debugging.
    """

    async def dispatch(
        self,
        request: Request,
        call_next: Callable,
    ) -> Response:
        try:
            return await call_next(request)
        except OmniCareException as exc:
            logger.warning(
                "Application error: %s (code=%s, status=%d)",
                exc.detail,
                exc.error_code,
                exc.status_code,
            )
            body = build_problem_detail(
                status=exc.status_code,
                title=exc.error_code.replace("_", " ").title(),
                detail=exc.detail,
                error_code=exc.error_code,
                instance=str(request.url),
            )
            return JSONResponse(status_code=exc.status_code, content=body)
        except Exception:
            trace_id = str(uuid4())
            logger.exception("Unhandled error [trace=%s]", trace_id)
            body = build_problem_detail(
                status=500,
                title="Internal Server Error",
                detail="An unexpected error occurred. Please contact support.",
                error_code="INTERNAL_ERROR",
                instance=str(request.url),
            )
            body["traceId"] = trace_id
            return JSONResponse(status_code=500, content=body)
