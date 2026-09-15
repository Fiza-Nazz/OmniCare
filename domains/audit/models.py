"""Audit Event ORM model for HIPAA-compliant immutable access logging.

Adheres to Constitution §23 (Audit Trail & Observability) and §26 (HIPAA Security).
"""

from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from domains.audit.enums import AuditAction, EntityType, SecurityRiskLevel
from packages.shared.database.base import TimestampedUUIDModel


class AuditEvent(TimestampedUUIDModel):
    """Immutable audit trail entry recording access to protected health information."""

    __tablename__ = "audit_events"

    user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
        index=True,
        doc="The authenticated user who performed the action.",
    )
    action: Mapped[AuditAction] = mapped_column(
        SQLEnum(AuditAction, native_enum=False),
        nullable=False,
    )
    entity_type: Mapped[EntityType] = mapped_column(
        SQLEnum(EntityType, native_enum=False),
        nullable=False,
    )
    entity_id: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
        doc="Identifier of the record accessed (UUID or code).",
    )
    risk_level: Mapped[SecurityRiskLevel] = mapped_column(
        SQLEnum(SecurityRiskLevel, native_enum=False),
        default=SecurityRiskLevel.LOW,
        nullable=False,
    )
    ip_address: Mapped[str | None] = mapped_column(String(50), nullable=True)
    user_agent: Mapped[str | None] = mapped_column(String(300), nullable=True)
    correlation_id: Mapped[str | None] = mapped_column(String(100), nullable=True, index=True)
    details: Mapped[str | None] = mapped_column(Text, nullable=True)
    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)

    __table_args__ = (
        Index("ix_audit_events_entity", "entity_type", "entity_id"),
        Index("ix_audit_events_occurred", "occurred_at"),
    )
