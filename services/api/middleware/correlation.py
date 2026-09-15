"""ASGI Correlation ID Middleware for request tracking and latency metrics.

Adheres to Constitution §30 and §39.
"""

from __future__ import annotations

import time

from starlette.middleware.base import BaseHTTPMiddleware, RequestResponseEndpoint
from starlette.requests import Request
from starlette.responses import Response

from packages.shared.observability.context import set_correlation_id
from packages.shared.observability.logger import get_logger

logger = get_logger("omnicare.api.access")

CORRELATION_HEADER = "X-Correlation-ID"


class CorrelationIdMiddleware(BaseHTTPMiddleware):
    """Intercepts requests, ensures an X-Correlation-ID is bound to context,
    and attaches it to outgoing responses.
    """

    async def dispatch(self, request: Request, call_next: RequestResponseEndpoint) -> Response:
        # Extract existing correlation header from upstream client or generate new
        incoming_id = request.headers.get(CORRELATION_HEADER)
        correlation_id = set_correlation_id(incoming_id)

        start_time = time.perf_counter()

        try:
            response = await call_next(request)
        except Exception:
            duration_ms = (time.perf_counter() - start_time) * 1000
            logger.error(
                "Unhandled error in request processing",
                extra={
                    "extra_fields": {
                        "method": request.method,
                        "path": request.url.path,
                        "duration_ms": round(duration_ms, 2),
                    }
                },
                exc_info=True,
            )
            raise

        duration_ms = (time.perf_counter() - start_time) * 1000
        response.headers[CORRELATION_HEADER] = correlation_id

        # Log request completion with timing
        logger.info(
            f"{request.method} {request.url.path} -> {response.status_code} ({round(duration_ms, 2)}ms)",
            extra={
                "extra_fields": {
                    "method": request.method,
                    "path": request.url.path,
                    "status_code": response.status_code,
                    "duration_ms": round(duration_ms, 2),
                }
            },
        )

        return response
