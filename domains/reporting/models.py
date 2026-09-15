"""Scheduled Report ORM model for automated business intelligence.

Adheres to Constitution §22 (Analytics & Reporting) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import Boolean, DateTime, Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from domains.reporting.enums import OutputFormat, ReportCadence, ReportType
from packages.shared.database.base import TimestampedUUIDModel


class ScheduledReport(TimestampedUUIDModel):
    """Defines an automated recurring report configuration."""

    __tablename__ = "scheduled_reports"

    created_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
    )
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    report_type: Mapped[ReportType] = mapped_column(
        SQLEnum(ReportType, native_enum=False),
        nullable=False,
    )
    cadence: Mapped[ReportCadence] = mapped_column(
        SQLEnum(ReportCadence, native_enum=False),
        default=ReportCadence.MONTHLY,
        nullable=False,
    )
    output_format: Mapped[OutputFormat] = mapped_column(
        SQLEnum(OutputFormat, native_enum=False),
        default=OutputFormat.PDF,
        nullable=False,
    )
    parameters_json: Mapped[str | None] = mapped_column(Text, nullable=True)
    last_generated_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True), nullable=True
    )
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    __table_args__ = (Index("ix_scheduled_reports_type", "report_type"),)
