"""Patient Vital Signs domain model.

Adheres to Constitution §10 (EHR — Vitals) and §45 (Time Zones — UTC storage).
"""

from __future__ import annotations

import uuid
from decimal import Decimal

from sqlalchemy import ForeignKey, Index, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class PatientVitals(TimestampedUUIDModel):
    """Records a single vital sign measurement session for a patient.

    All decimal measurements use NUMERIC to prevent floating-point inaccuracies
    per Constitution §20 (financial/precision rules apply to clinical data too).
    """

    __tablename__ = "patient_vitals"

    patient_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("patients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    recorded_by_user_id: Mapped[uuid.UUID | None] = mapped_column(
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )

    # Vital Sign Measurements
    temperature_celsius: Mapped[Decimal | None] = mapped_column(
        Numeric(5, 2), nullable=True, doc="Body temperature in degrees Celsius."
    )
    pulse_bpm: Mapped[int | None] = mapped_column(
        nullable=True, doc="Heart rate in beats per minute."
    )
    respiratory_rate: Mapped[int | None] = mapped_column(
        nullable=True, doc="Respiratory rate in breaths per minute."
    )
    systolic_bp: Mapped[int | None] = mapped_column(
        nullable=True, doc="Systolic blood pressure in mmHg."
    )
    diastolic_bp: Mapped[int | None] = mapped_column(
        nullable=True, doc="Diastolic blood pressure in mmHg."
    )
    oxygen_saturation: Mapped[Decimal | None] = mapped_column(
        Numeric(5, 2), nullable=True, doc="SpO2 percentage."
    )
    weight_kg: Mapped[Decimal | None] = mapped_column(
        Numeric(6, 2), nullable=True, doc="Body weight in kilograms."
    )
    height_cm: Mapped[Decimal | None] = mapped_column(
        Numeric(6, 2), nullable=True, doc="Height in centimeters."
    )
    notes: Mapped[str | None] = mapped_column(String(500), nullable=True)

    __table_args__ = (Index("ix_patient_vitals_patient", "patient_id"),)
