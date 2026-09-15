"""Unit tests for SQLAlchemy 2.0 Base Model and Async Session Management.

Adheres to Constitution §32 (Database Rules) and §40 (Testing Constitution).
"""

from __future__ import annotations

import uuid
from datetime import datetime, timezone
import pytest
import pytest_asyncio
from sqlalchemy import String, select
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import Base, TimestampedUUIDModel, utc_now
from packages.shared.database.session import (
    create_async_engine_instance,
    create_async_session_factory,
)


class SampleAuditEntity(TimestampedUUIDModel):
    """Concrete model for unit testing the abstract base entity."""

    __tablename__ = "test_sample_entities"

    name: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[str] = mapped_column(String(255), default="")


@pytest_asyncio.fixture
async def async_test_session():
    """Provides an isolated in-memory SQLite async database session."""
    engine = create_async_engine_instance("sqlite+aiosqlite:///:memory:", echo=False)
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    session_factory = create_async_session_factory(engine)
    async with session_factory() as session:
        yield session

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
    await engine.dispose()


@pytest.mark.asyncio
async def test_utc_now_returns_timezone_aware():
    """Verify utc_now generates timezone-aware UTC timestamps."""
    now = utc_now()
    assert now.tzinfo is not None
    assert now.tzinfo == timezone.utc


@pytest.mark.asyncio
async def test_entity_defaults_and_uuid_generation(async_test_session):
    """Verify entity creates with valid UUID, version_id=1, and UTC timestamps."""
    entity = SampleAuditEntity(name="Emergency Ward A", description="Initial triage unit")
    async_test_session.add(entity)
    await async_test_session.commit()
    await async_test_session.refresh(entity)

    assert isinstance(entity.id, uuid.UUID)
    assert entity.version_id == 1
    assert entity.name == "Emergency Ward A"
    assert isinstance(entity.created_at, datetime)
    assert isinstance(entity.updated_at, datetime)
    assert entity.created_at.tzinfo is not None

    # Check dictionary serialization
    serialized = entity.to_dict()
    assert serialized["name"] == "Emergency Ward A"
    assert serialized["id"] == str(entity.id)
    assert serialized["version_id"] == 1
    assert "created_at" in serialized

    # Check repr
    assert "SampleAuditEntity" in repr(entity)
    assert str(entity.id) in repr(entity)


@pytest.mark.asyncio
async def test_entity_query_and_update(async_test_session):
    """Verify entity querying and optimistic locking version increment."""
    entity = SampleAuditEntity(name="Cardiology Lab")
    async_test_session.add(entity)
    await async_test_session.commit()
    await async_test_session.refresh(entity)

    entity_id = entity.id

    # Query entity
    stmt = select(SampleAuditEntity).where(SampleAuditEntity.id == entity_id)
    result = await async_test_session.execute(stmt)
    retrieved = result.scalar_one_or_none()
    assert retrieved is not None
    assert retrieved.name == "Cardiology Lab"

    # Update entity
    retrieved.name = "Cardiology Lab - Updated"
    await async_test_session.commit()
    await async_test_session.refresh(retrieved)

    assert retrieved.name == "Cardiology Lab - Updated"
    assert retrieved.version_id == 2
