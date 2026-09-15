"""Unit tests for OmniCare API configuration and health probe endpoints.

Adheres to Constitution §40 (Testing Constitution) and §39 (Observability).
"""

from __future__ import annotations

import pytest
from httpx import ASGITransport, AsyncClient

from services.api.app import create_app
from services.api.config import AppSettings


@pytest.fixture
def test_settings() -> AppSettings:
    return AppSettings(
        APP_NAME="OmniCare Test Suite",
        ENVIRONMENT="test",
        DEBUG=True,
        ALLOWED_ORIGINS="http://localhost:3000,http://testserver",
        SECRET_KEY="synthetic_dev_secret_key_for_unit_tests_only_32_chars!",
    )


@pytest.fixture
def app(test_settings: AppSettings):
    return create_app(settings=test_settings)


@pytest.mark.asyncio
async def test_app_settings_validation(test_settings: AppSettings):
    """Verify settings parse allowed origins correctly and generate URLs."""
    assert test_settings.app_name == "OmniCare Test Suite"
    assert test_settings.environment == "test"
    assert "http://localhost:3000" in test_settings.allowed_origins
    assert "http://testserver" in test_settings.allowed_origins
    assert "postgresql+asyncpg://" in test_settings.async_database_url
    assert "redis://" in test_settings.redis_url


@pytest.mark.asyncio
async def test_root_endpoint(app):
    """Verify API root endpoint returns service identity and online status."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/")
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "OmniCare Test Suite"
        assert data["status"] == "online"
        assert data["environment"] == "test"


@pytest.mark.asyncio
async def test_liveness_probe(app):
    """Verify /health/live returns HTTP 200 and alive status."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/health/live")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "alive"
        assert data["service"] == "omnicare-api"
        assert "timestamp" in data


@pytest.mark.asyncio
async def test_readiness_probe(app):
    """Verify /health/ready returns components readiness status."""
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/health/ready")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "ready"
        assert data["checks"]["api"] == "healthy"
