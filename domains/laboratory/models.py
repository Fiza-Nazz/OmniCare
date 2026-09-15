"""Laboratory Order ORM model for diagnostic test requests.

Adheres to Constitution §16 (Laboratory Information System) and §32 (Database Rules).
"""

from __future__ import annotations

import uuid
from datetime import datetime

from sqlalchemy import DateTime, Enum as SQLEnum, ForeignKey, Index, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from domains.laboratory.enums import LabOrderStatus, SpecimenType, TestUrgency
from packages.shared.database.base import TimestampedUUIDModel


class LabOrder(TimestampedUUIDModel):
    """Represents a laboratory investigation order for a patient."""

    __tablename__ = "lab_orders"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    ordered_by_user_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    appointment_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("appointments.id", ondelete="SET NULL"),
        nullable=True,
    )
    order_number: Mapped[str] = mapped_column(
        String(40),
        unique=True,
        index=True,
        nullable=False,
    )
    test_name: Mapped[str] = mapped_column(String(250), nullable=False)
    specimen_type: Mapped[SpecimenType] = mapped_column(
        SQLEnum(SpecimenType, native_enum=False),
        default=SpecimenType.WHOLE_BLOOD,
        nullable=False,
    )
    urgency: Mapped[TestUrgency] = mapped_column(
        SQLEnum(TestUrgency, native_enum=False),
        default=TestUrgency.ROUTINE,
        nullable=False,
    )
    status: Mapped[LabOrderStatus] = mapped_column(
        SQLEnum(LabOrderStatus, native_enum=False),
        default=LabOrderStatus.ORDERED,
        nullable=False,
    )
    specimen_collected_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
    )
    clinical_notes: Mapped[str | None] = mapped_column(Text, nullable=True)

    __table_args__ = (
        Index("ix_lab_orders_patient", "patient_id"),
        Index("ix_lab_orders_status", "status"),
    )
