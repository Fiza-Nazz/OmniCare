"""Laboratory Test Catalog domain model.

Adheres to Constitution §16 (Laboratory Information System — Test Master).
"""

from __future__ import annotations

from decimal import Decimal

from sqlalchemy import Boolean, Index, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class LabTestCatalog(TimestampedUUIDModel):
    """Standardized master catalog of diagnostic tests offered by the facility."""

    __tablename__ = "lab_test_catalogs"

    test_code: Mapped[str] = mapped_column(String(30), unique=True, index=True, nullable=False)
    test_name: Mapped[str] = mapped_column(String(200), nullable=False, index=True)
    category: Mapped[str] = mapped_column(String(100), nullable=False)
    department: Mapped[str] = mapped_column(String(100), nullable=False)
    turnaround_hours: Mapped[int] = mapped_column(Integer, default=24, nullable=False)
    base_price: Mapped[Decimal] = mapped_column(Numeric(10, 2), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    specimen_requirements: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (Index("ix_lab_catalog_category", "category"),)
