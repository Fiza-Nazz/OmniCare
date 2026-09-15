"""Laboratory Result ORM model for diagnostic reporting.

Adheres to Constitution §16 (Laboratory Information System) and §23 (Audit Trail).
"""

from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import Boolean, DateTime, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class LabResult(TimestampedUUIDModel):
    """Records quantitative or qualitative results for a lab order item."""

    __tablename__ = "lab_results"

    lab_order_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("lab_orders.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    evaluated_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        doc="Pathologist or lab technician who performed or verified the analysis.",
    )
    parameter_name: Mapped[str] = mapped_column(String(200), nullable=False)
    measured_value: Mapped[str] = mapped_column(String(100), nullable=False)
    unit_of_measure: Mapped[str] = mapped_column(String(50), nullable=False)
    reference_range_low: Mapped[str | None] = mapped_column(String(50), nullable=True)
    reference_range_high: Mapped[str | None] = mapped_column(String(50), nullable=True)
    is_abnormal: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    is_critical: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    result_released_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
    )
    comments: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_lab_results_order", "lab_order_id"),
        Index("ix_lab_results_abnormal", "is_abnormal"),
    )
