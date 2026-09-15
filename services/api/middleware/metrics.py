"""Prometheus HTTP metrics middleware.

Adheres to Constitution §23 (Observability & Monitoring).
Instruments every HTTP request with latency histogram and request counter.
"""

from __future__ import annotations

import time
from collections import defaultdict
from collections.abc import Callable
from typing import Any

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response


class MetricsCollector:
    """In-process metrics collector for HTTP request telemetry.

    Stores request counts and latency histograms in memory.
    Production deployments should export these to a Prometheus-compatible
    endpoint via /metrics scrape target.
    """

    def __init__(self) -> None:
        self.request_count: dict[str, int] = defaultdict(int)
        self.request_latency: dict[str, list[float]] = defaultdict(list)
        self.error_count: dict[str, int] = defaultdict(int)

    def record_request(
        self,
        method: str,
        path: str,
        status_code: int,
        duration: float,
    ) -> None:
        """Record a single HTTP request metric."""
        key = f"{method}:{path}:{status_code}"
        self.request_count[key] += 1
        self.request_latency[key].append(duration)
        if status_code >= 400:
            error_key = f"{method}:{path}"
            self.error_count[error_key] += 1

    def get_summary(self) -> dict[str, Any]:
        """Return a summary of collected metrics."""
        total_requests = sum(self.request_count.values())
        total_errors = sum(self.error_count.values())
        all_latencies = [lat for latencies in self.request_latency.values() for lat in latencies]
        avg_latency = sum(all_latencies) / len(all_latencies) if all_latencies else 0.0
        return {
            "total_requests": total_requests,
            "total_errors": total_errors,
            "average_latency_ms": round(avg_latency * 1000, 2),
            "endpoints_tracked": len(self.request_count),
        }


# Global singleton collector
_collector = MetricsCollector()


def get_metrics_collector() -> MetricsCollector:
    """Return the global metrics collector instance."""
    return _collector


class PrometheusMetricsMiddleware(BaseHTTPMiddleware):
    """ASGI middleware that records request metrics for every HTTP call.

    Captures method, path, status code, and response time.
    """

    async def dispatch(
        self,
        request: Request,
        call_next: Callable,
    ) -> Response:
        start_time = time.perf_counter()
        response = await call_next(request)
        duration = time.perf_counter() - start_time

        collector = get_metrics_collector()
        collector.record_request(
            method=request.method,
            path=request.url.path,
            status_code=response.status_code,
            duration=duration,
        )

        response.headers["X-Response-Time-Ms"] = str(round(duration * 1000, 2))
        return response
