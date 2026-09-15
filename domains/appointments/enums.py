"""Appointment domain enums for scheduling, status, and type classification.

Adheres to Constitution §13 (Appointment Scheduling).
"""

from __future__ import annotations

from enum import StrEnum


class AppointmentStatus(StrEnum):
    """Lifecycle status of a scheduled appointment."""

    SCHEDULED = "scheduled"
    CONFIRMED = "confirmed"
    CHECKED_IN = "checked_in"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    CANCELLED = "cancelled"
    NO_SHOW = "no_show"
    RESCHEDULED = "rescheduled"


class AppointmentType(StrEnum):
    """Classification of appointment purpose."""

    GENERAL_CONSULTATION = "general_consultation"
    FOLLOW_UP = "follow_up"
    SPECIALIST_REFERRAL = "specialist_referral"
    EMERGENCY = "emergency"
    PREVENTIVE_CARE = "preventive_care"
    DIAGNOSTIC = "diagnostic"
    PROCEDURE = "procedure"
    TELEHEALTH = "telehealth"
    MENTAL_HEALTH = "mental_health"


class AppointmentPriority(StrEnum):
    """Clinical urgency priority level for scheduling."""

    ROUTINE = "routine"
    URGENT = "urgent"
    SEMI_URGENT = "semi_urgent"
    EMERGENCY = "emergency"
