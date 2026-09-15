"""Notification Log ORM model for outbound messaging audit trail.

Adheres to Constitution §21 (Notifications Engine) and §23 (Audit Trail).
"""

from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from domains.notifications.enums import (
    NotificationChannel,
    NotificationDeliveryStatus,
    NotificationPriority,
)
from packages.shared.database.base import TimestampedUUIDModel


class NotificationLog(TimestampedUUIDModel):
    """Records an outbound notification event across any communication channel."""

    __tablename__ = "notification_logs"

    recipient_user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
        index=True,
    )
    channel: Mapped[NotificationChannel] = mapped_column(
        SQLEnum(NotificationChannel, native_enum=False),
        nullable=False,
    )
    priority: Mapped[NotificationPriority] = mapped_column(
        SQLEnum(NotificationPriority, native_enum=False),
        default=NotificationPriority.NORMAL,
        nullable=False,
    )
    status: Mapped[NotificationDeliveryStatus] = mapped_column(
        SQLEnum(NotificationDeliveryStatus, native_enum=False),
        default=NotificationDeliveryStatus.QUEUED,
        nullable=False,
    )
    recipient_address: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        doc="Destination email address or E.164 phone number.",
    )
    subject: Mapped[str | None] = mapped_column(String(300), nullable=True)
    body: Mapped[str] = mapped_column(Text, nullable=False)
    delivered_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    error_message: Mapped[str | None] = mapped_column(String(500), nullable=True)

    __table_args__ = (
        Index("ix_notification_logs_recipient", "recipient_user_id"),
        Index("ix_notification_logs_status", "status"),
    )
