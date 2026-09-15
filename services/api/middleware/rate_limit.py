"""Sliding-window rate limiting middleware.

Adheres to Constitution §25 (API Security — Rate Limiting).
"""

from __future__ import annotations

import time
from collections import defaultdict, deque
from collections.abc import Callable

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, Response


class RateLimitExceeded(Exception):
    """Raised when a client exceeds the allowed request rate."""


class SlidingWindowRateLimiter:
    """Token-bucket inspired sliding window rate limiter.

    Tracks request timestamps per client IP within a configurable window.
    Thread-safe for single-process ASGI deployments.
    """

    def __init__(
        self,
        max_requests: int = 100,
        window_seconds: int = 60,
    ) -> None:
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self._requests: dict[str, deque[float]] = defaultdict(deque)

    def is_allowed(self, client_id: str) -> bool:
        """Check if a client is within the rate limit."""
        now = time.monotonic()
        window = self._requests[client_id]

        # Remove expired timestamps
        while window and window[0] <= now - self.window_seconds:
            window.popleft()

        if len(window) >= self.max_requests:
            return False

        window.append(now)
        return True

    def remaining(self, client_id: str) -> int:
        """Return the number of remaining requests for a client."""
        now = time.monotonic()
        window = self._requests[client_id]
        while window and window[0] <= now - self.window_seconds:
            window.popleft()
        return max(0, self.max_requests - len(window))

    def reset_time(self, client_id: str) -> float:
        """Return seconds until the oldest request in the window expires."""
        now = time.monotonic()
        window = self._requests[client_id]
        if not window:
            return 0.0
        return max(0.0, self.window_seconds - (now - window[0]))


class RateLimitMiddleware(BaseHTTPMiddleware):
    """ASGI middleware enforcing per-IP rate limiting.

    Returns HTTP 429 with Retry-After header when limit is exceeded.
    """

    def __init__(
        self,
        app: object,
        max_requests: int = 100,
        window_seconds: int = 60,
    ) -> None:
        super().__init__(app)
        self.limiter = SlidingWindowRateLimiter(
            max_requests=max_requests,
            window_seconds=window_seconds,
        )

    async def dispatch(
        self,
        request: Request,
        call_next: Callable,
    ) -> Response:
        client_ip = request.client.host if request.client else "unknown"

        if not self.limiter.is_allowed(client_ip):
            retry_after = int(self.limiter.reset_time(client_ip)) + 1
            return JSONResponse(
                status_code=429,
                content={
                    "detail": "Rate limit exceeded. Please retry later.",
                    "retry_after_seconds": retry_after,
                },
                headers={"Retry-After": str(retry_after)},
            )

        response = await call_next(request)
        remaining = self.limiter.remaining(client_ip)
        response.headers["X-RateLimit-Remaining"] = str(remaining)
        response.headers["X-RateLimit-Limit"] = str(self.limiter.max_requests)
        return response
