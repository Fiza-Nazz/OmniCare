"""Telehealth Recording domain model.

Adheres to Constitution §17 (Telehealth) and §28 (Encryption at Rest).
"""

from __future__ import annotations

import uuid

from sqlalchemy import Boolean, ForeignKey, Index, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from packages.shared.database.base import TimestampedUUIDModel


class TelehealthRecording(TimestampedUUIDModel):
    """Stores encrypted cloud storage references for recorded telehealth encounters."""

    __tablename__ = "telehealth_recordings"

    session_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("telehealth_sessions.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    storage_uri: Mapped[str] = mapped_column(
        String(500),
        nullable=False,
        doc="Encrypted cloud object storage URI (e.g., s3:// or gs://).",
    )
    file_size_bytes: Mapped[int] = mapped_column(Integer, nullable=False)
    duration_seconds: Mapped[int] = mapped_column(Integer, nullable=False)
    is_encrypted: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    patient_consented: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

    __table_args__ = (Index("ix_telehealth_recordings_session", "session_id"),)
