"""Health and readiness probes for OmniCare API service.

Adheres to Constitution §39 (Observability: Liveness & Readiness endpoints).
"""

from __future__ import annotations

from datetime import UTC, datetime
from typing import Any

from fastapi import APIRouter, status
from fastapi.responses import JSONResponse

router = APIRouter(prefix="/health", tags=["Health & Probes"])


@router.get(
    "/live",
    status_code=status.HTTP_200_OK,
    summary="Liveness Probe",
    description="Returns HTTP 200 if the process is responsive and receiving requests.",
)
async def liveness_probe() -> dict[str, Any]:
    return {
        "status": "alive",
        "timestamp": datetime.now(UTC).isoformat(),
        "service": "omnicare-api",
    }


@router.get(
    "/ready",
    status_code=status.HTTP_200_OK,
    summary="Readiness Probe",
    description="Evaluates operational readiness of critical backing services (DB, Redis).",
)
async def readiness_probe() -> JSONResponse:
    # Components status check dictionary
    checks: dict[str, str] = {
        "api": "healthy",
        "database": "unconfigured",  # Will be wired to async db ping in PR #4
        "redis": "unconfigured",  # Will be wired to redis ping in PR #7
    }

    # If any mandatory service check reports 'unhealthy', mark system not ready
    is_ready = not any(v == "unhealthy" for v in checks.values())
    status_code = status.HTTP_200_OK if is_ready else status.HTTP_503_SERVICE_UNAVAILABLE

    return JSONResponse(
        status_code=status_code,
        content={
            "status": "ready" if is_ready else "not_ready",
            "timestamp": datetime.now(UTC).isoformat(),
            "checks": checks,
        },
    )
