"""SQLAlchemy 2.0 Declarative Base and Core Enterprise Model Primitives.

Adheres to Constitution:
- §32: Database Rules (Referential integrity, explicit constraints, UUID PKs).
- §34: Concurrency (Optimistic locking version counter to prevent race conditions).
- §45: Time Zones (Strict UTC storage and timezone-aware normalization).
"""

from __future__ import annotations

import uuid
from datetime import UTC, datetime
from typing import Any, ClassVar

from sqlalchemy import DateTime, Integer, TypeDecorator, Uuid
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


def utc_now() -> datetime:
    """Returns the current timezone-aware UTC datetime."""
    return datetime.now(UTC)


class UTCDateTime(TypeDecorator):
    """Platform-independent timezone-aware UTC DateTime type.

    Guarantees that timezone-naive datetimes returned by database engines
    (such as SQLite during test runs) are normalized to timezone.utc.
    """

    impl = DateTime(timezone=True)
    cache_ok = True

    def process_result_value(self, value: Any, dialect: Any) -> datetime | None:
        if value is not None and isinstance(value, datetime):
            if value.tzinfo is None:
                return value.replace(tzinfo=UTC)
            return value.astimezone(UTC)
        return value


class Base(DeclarativeBase):
    """Root declarative base for all OmniCare entities."""

    pass


class TimestampedUUIDModel(Base):
    """Abstract base model providing UUID primary keys, UTC audit timestamps,
    and optimistic concurrency versioning.
    """

    __abstract__ = True

    id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        primary_key=True,
        default=uuid.uuid4,
        index=True,
        doc="Universally unique identifier for the entity record.",
    )

    created_at: Mapped[datetime] = mapped_column(
        UTCDateTime(),
        default=utc_now,
        nullable=False,
        doc="UTC timestamp when the record was created.",
    )

    updated_at: Mapped[datetime] = mapped_column(
        UTCDateTime(),
        default=utc_now,
        onupdate=utc_now,
        nullable=False,
        doc="UTC timestamp when the record was last modified.",
    )

    version_id: Mapped[int] = mapped_column(
        Integer,
        default=1,
        nullable=False,
        doc="Optimistic concurrency control version counter.",
    )

    __mapper_args__: ClassVar[dict[str, Any]] = {
        "version_id_col": version_id,
    }

    def to_dict(self, exclude: set[str] | None = None) -> dict[str, Any]:
        """Serializes model attributes to a standard dictionary."""
        excluded = exclude or set()
        result: dict[str, Any] = {}
        for col in self.__table__.columns:
            if col.name in excluded:
                continue
            val = getattr(self, col.name)
            if isinstance(val, uuid.UUID):
                result[col.name] = str(val)
            elif isinstance(val, datetime):
                result[col.name] = val.isoformat()
            else:
                result[col.name] = val
        return result

    def __repr__(self) -> str:
        return f"<{self.__class__.__name__}(id={self.id}, version_id={self.version_id})>"
