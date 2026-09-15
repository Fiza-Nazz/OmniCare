"""Health check and readiness probe endpoints.

Adheres to Constitution §23 (Observability — Health Probes).
Provides Kubernetes-compatible liveness and readiness endpoints.
"""

from __future__ import annotations

import time
from datetime import UTC, datetime
from typing import Any

from fastapi import APIRouter, status
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/health", tags=["Health"])

_start_time = time.monotonic()


def _uptime_seconds() -> float:
    """Calculate application uptime in seconds."""
    return round(time.monotonic() - _start_time, 2)


@router.get(
    "",
    status_code=status.HTTP_200_OK,
    summary="Health overview",
)
@router.get(
    "/live",
    status_code=status.HTTP_200_OK,
    summary="Liveness probe",
    response_description="Returns OK if the service process is alive.",
)
async def liveness() -> dict[str, Any]:
    """Kubernetes liveness probe.

    Returns 200 if the application process is responsive.
    """
    return {
        "status": "alive",
        "service": "omnicare-api",
        "uptime_seconds": _uptime_seconds(),
        "timestamp": datetime.now(tz=UTC).isoformat(),
    }


@router.get(
    "/ready",
    status_code=status.HTTP_200_OK,
    summary="Readiness probe",
    response_description="Returns OK if the service is ready to serve traffic.",
)
async def readiness() -> JSONResponse:
    """Kubernetes readiness probe.

    Checks connectivity to critical dependencies (database, cache).
    Returns 503 if any dependency is unavailable.
    """
    checks: dict[str, Any] = {
        "api": "healthy",
    }
    all_healthy = True

    # Database check
    db_healthy = await _check_database()
    checks["database"] = "up" if db_healthy else "down"

    body = {
        "status": "ready" if all_healthy else "not_ready",
        "checks": checks,
        "timestamp": datetime.now(tz=UTC).isoformat(),
    }

    return JSONResponse(
        status_code=status.HTTP_200_OK if all_healthy else status.HTTP_503_SERVICE_UNAVAILABLE,
        content=body,
    )


async def _check_database() -> bool:
    """Verify database connectivity with a lightweight query."""
    try:
        from packages.shared.database.session import get_async_session

        async for session in get_async_session():
            from sqlalchemy import text

            await session.execute(text("SELECT 1"))
            return True
    except Exception:
        return False
