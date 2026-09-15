"""Audit domain enums for security event tracking, actions, and risk classification.

Adheres to Constitution §23 (Audit Trail) and §26 (HIPAA Compliance).
"""

from __future__ import annotations

from enum import StrEnum


class AuditAction(StrEnum):
    """Action performed on protected health information or system resources."""

    CREATE = "create"
    READ = "read"
    UPDATE = "update"
    DELETE = "delete"
    LOGIN_SUCCESS = "login_success"
    LOGIN_FAILED = "login_failed"
    PASSWORD_CHANGE = "password_change"
    EXPORT = "export"
    DISCLOSURE = "disclosure"


class EntityType(StrEnum):
    """Type of entity accessed or modified."""

    PATIENT = "patient"
    CLINICAL_NOTE = "clinical_note"
    PRESCRIPTION = "prescription"
    LAB_RESULT = "lab_result"
    INVOICE = "invoice"
    USER = "user"
    TELEHEALTH_SESSION = "telehealth_session"


class SecurityRiskLevel(StrEnum):
    """Assessed security risk level of the logged action."""

    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"
