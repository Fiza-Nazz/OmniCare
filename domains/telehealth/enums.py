"""Telehealth domain enums for virtual care sessions and audio/video quality.

Adheres to Constitution §17 (Telehealth & Virtual Care).
"""

from __future__ import annotations

from enum import StrEnum


class TelehealthSessionStatus(StrEnum):
    """Lifecycle status of a virtual consultation session."""

    WAITING_ROOM = "waiting_room"
    CONNECTED = "connected"
    COMPLETED = "completed"
    FAILED = "failed"
    MISSED = "missed"
    ABANDONED = "abandoned"


class CallQuality(StrEnum):
    """Network connection quality assessment during video call."""

    EXCELLENT = "excellent"
    GOOD = "good"
    FAIR = "fair"
    POOR = "poor"
    DISCONNECTED = "disconnected"


class RoomRole(StrEnum):
    """Participant role in a telehealth consultation room."""

    HOST_CLINICIAN = "host_clinician"
    PATIENT = "patient"
    CAREGIVER = "caregiver"
    INTERPRETER = "interpreter"
