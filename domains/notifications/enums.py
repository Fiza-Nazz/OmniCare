"""Notification domain enums for dispatch channels, priority, and delivery tracking.

Adheres to Constitution §21 (Notifications Engine).
"""

from __future__ import annotations

from enum import StrEnum


class NotificationChannel(StrEnum):
    """Outbound communication channel."""

    EMAIL = "email"
    SMS = "sms"
    PUSH = "push"
    IN_APP = "in_app"
    WHATSAPP = "whatsapp"


class NotificationDeliveryStatus(StrEnum):
    """Delivery status lifecycle."""

    QUEUED = "queued"
    SENT = "sent"
    DELIVERED = "delivered"
    FAILED = "failed"
    BOUNCED = "bounced"


class NotificationPriority(StrEnum):
    """Urgency priority for dispatch ordering."""

    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"
    EMERGENCY = "emergency"
