"""OmniCare Core FastAPI Application Factory.

Adheres to Constitution:
- §6: Modular Architecture
- §30: API Security & CORS configuration
- §39: Health and observability endpoints
"""

from __future__ import annotations

from contextlib import asynccontextmanager
from typing import AsyncIterator
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from services.api.config import AppSettings, get_settings
from services.api.routes.health import router as health_router


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    """Manages application lifecycle events (startup and graceful shutdown)."""
    # Startup tasks
    settings = get_settings()
    app.state.settings = settings
    yield
    # Graceful shutdown tasks


def create_app(settings: AppSettings | None = None) -> FastAPI:
    """Creates and configures an instance of the OmniCare FastAPI application."""
    if settings is None:
        settings = get_settings()

    app = FastAPI(
        title=settings.app_name,
        description=(
            "OmniCare Enterprise Healthcare & Hospital ERP API.\n\n"
            "Designed for modular clinical workflows, EHR, scheduling, pharmacy, "
            "laboratory, billing, and strict audit compliance."
        ),
        version="0.1.0",
        docs_url="/docs" if settings.environment != "production" else None,
        redoc_url="/redoc" if settings.environment != "production" else None,
        lifespan=lifespan,
    )

    # CORS Middleware (Strict origins from configuration)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.allowed_origins,
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allow_headers=["*"],
        expose_headers=["X-Correlation-ID"],
    )

    # Register routers
    app.include_router(health_router)

    @app.get("/", tags=["Root"], summary="API Root Overview")
    async def root():
        return {
            "name": settings.app_name,
            "environment": settings.environment,
            "status": "online",
            "docs": "/docs" if settings.environment != "production" else "disabled_in_prod",
        }

    return app
