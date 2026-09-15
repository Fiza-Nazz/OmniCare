"""Pharmacy Inventory Item domain model.

Adheres to Constitution §15 (Pharmacy Management — Inventory) and §32 (Database Rules).
"""

from __future__ import annotations

from datetime import date
from decimal import Decimal

from sqlalchemy import Date, Index, Integer, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class PharmacyInventoryItem(TimestampedUUIDModel):
    """Tracks stock level, unit pricing, and reorder levels for pharmacy medications."""

    __tablename__ = "pharmacy_inventory_items"

    medication_name: Mapped[str] = mapped_column(String(250), nullable=False, index=True)
    ndc_or_sku: Mapped[str] = mapped_column(String(50), unique=True, index=True, nullable=False)
    quantity_in_stock: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    reorder_level: Mapped[int] = mapped_column(Integer, default=20, nullable=False)
    unit_price: Mapped[Decimal] = mapped_column(Numeric(10, 2), nullable=False)
    expiry_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    batch_number: Mapped[str | None] = mapped_column(String(100), nullable=True)
    manufacturer: Mapped[str | None] = mapped_column(String(200), nullable=True)

    @property
    def is_low_stock(self) -> bool:
        """Returns True if current inventory has reached or fallen below reorder level."""
        return self.quantity_in_stock <= self.reorder_level

    __table_args__ = (Index("ix_pharmacy_inventory_name", "medication_name"),)
