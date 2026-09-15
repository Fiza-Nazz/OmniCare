"""Reporting domain enums for clinical metrics, financial summaries, and report formats.

Adheres to Constitution §22 (Analytics & Reporting).
"""

from __future__ import annotations

from enum import StrEnum


class ReportType(StrEnum):
    """Classification of generated clinical or operational report."""

    PATIENT_DEMOGRAPHICS = "patient_demographics"
    CLINICAL_OUTCOMES = "clinical_outcomes"
    APPOINTMENT_UTILIZATION = "appointment_utilization"
    FINANCIAL_REVENUE = "financial_revenue"
    INSURANCE_CLAIMS = "insurance_claims"
    PHARMACY_DISPENSATION = "pharmacy_dispensation"
    LABORATORY_TURNAROUND = "laboratory_turnaround"
    AUDIT_SECURITY = "audit_security"


class OutputFormat(StrEnum):
    """File format for rendered reports."""

    PDF = "pdf"
    CSV = "csv"
    XLSX = "xlsx"
    JSON = "json"


class ReportCadence(StrEnum):
    """Schedule recurrence frequency."""

    ON_DEMAND = "on_demand"
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
