"""Notification Template domain model.

Adheres to Constitution §21 (Notifications Engine — Reusable Templates).
"""

from __future__ import annotations

from sqlalchemy import Boolean, Enum as SQLEnum, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from domains.notifications.enums import NotificationChannel
from packages.shared.database.base import TimestampedUUIDModel


class NotificationTemplate(TimestampedUUIDModel):
    """Reusable parameterized message template for automated notifications."""

    __tablename__ = "notification_templates"

    template_code: Mapped[str] = mapped_column(String(50), unique=True, index=True, nullable=False)
    name: Mapped[str] = mapped_column(String(150), nullable=False)
    channel: Mapped[NotificationChannel] = mapped_column(
        SQLEnum(NotificationChannel, native_enum=False),
        nullable=False,
    )
    subject_template: Mapped[str | None] = mapped_column(String(300), nullable=True)
    body_template: Mapped[str] = mapped_column(Text, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    __table_args__ = (Index("ix_notification_templates_code", "template_code"),)
