"""Telehealth session management service.

Adheres to Constitution §19 (Telehealth — Session Lifecycle).
"""

from __future__ import annotations

import hashlib
import secrets
import uuid
from datetime import UTC, datetime, timedelta
from typing import TYPE_CHECKING

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

if TYPE_CHECKING:
    pass


class SessionExpiredError(Exception):
    """Raised when a telehealth session has expired."""


class SessionCapacityExceededError(Exception):
    """Raised when maximum participants have joined a session."""


class TelehealthSessionManager:
    """Manages telehealth session lifecycle: creation, joining, and termination.

    Generates secure WebRTC-compatible tokens for participant authentication.
    """

    MAX_PARTICIPANTS = 4
    SESSION_DURATION_MINUTES = 60
    TOKEN_EXPIRY_MINUTES = 5

    def __init__(self, session: AsyncSession) -> None:
        self._session = session

    def generate_session_token(
        self,
        session_id: uuid.UUID,
        participant_id: uuid.UUID,
    ) -> dict[str, str]:
        """Generate a time-limited WebRTC access token.

        Returns a dictionary with token, expiry, and session hash.
        """
        raw_token = secrets.token_urlsafe(32)
        expiry = datetime.now(tz=UTC) + timedelta(minutes=self.TOKEN_EXPIRY_MINUTES)
        session_hash = hashlib.sha256(
            f"{session_id}:{participant_id}:{raw_token}".encode()
        ).hexdigest()[:16]

        return {
            "token": raw_token,
            "expires_at": expiry.isoformat(),
            "session_hash": session_hash,
            "participant_id": str(participant_id),
        }

    async def create_session(
        self,
        appointment_id: uuid.UUID,
        host_clinician_id: uuid.UUID,
        patient_id: uuid.UUID,
    ) -> uuid.UUID:
        """Create a new telehealth session for a scheduled appointment.

        Returns the created session ID.
        """
        from domains.telehealth.models import TelehealthSession

        session_obj = TelehealthSession(
            appointment_id=appointment_id,
            host_clinician_id=host_clinician_id,
            patient_id=patient_id,
            status="waiting",
            scheduled_start=datetime.now(tz=UTC),
            scheduled_end=datetime.now(tz=UTC) + timedelta(minutes=self.SESSION_DURATION_MINUTES),
            max_participants=self.MAX_PARTICIPANTS,
            participant_count=0,
        )
        self._session.add(session_obj)
        await self._session.flush()
        return session_obj.id

    async def join_session(
        self,
        session_id: uuid.UUID,
        participant_id: uuid.UUID,
    ) -> dict[str, str]:
        """Join a telehealth session and receive a WebRTC access token.

        Raises:
            ValueError: Session not found.
            SessionExpiredError: Session has ended.
            SessionCapacityExceededError: Max participants reached.
        """
        from domains.telehealth.models import TelehealthSession

        stmt = select(TelehealthSession).where(TelehealthSession.id == session_id)
        result = await self._session.execute(stmt)
        ts = result.scalar_one_or_none()

        if ts is None:
            msg = f"Session {session_id} not found"
            raise ValueError(msg)

        if ts.status in ("ended", "cancelled"):
            raise SessionExpiredError(f"Session {session_id} has ended")

        if ts.participant_count >= ts.max_participants:
            raise SessionCapacityExceededError(f"Session {session_id} is at maximum capacity")

        ts.participant_count += 1
        if ts.status == "waiting":
            ts.status = "in_progress"
            ts.actual_start = datetime.now(tz=UTC)

        await self._session.flush()
        return self.generate_session_token(session_id, participant_id)

    async def end_session(
        self,
        session_id: uuid.UUID,
    ) -> None:
        """End a telehealth session."""
        from domains.telehealth.models import TelehealthSession

        stmt = select(TelehealthSession).where(TelehealthSession.id == session_id)
        result = await self._session.execute(stmt)
        ts = result.scalar_one_or_none()

        if ts is None:
            msg = f"Session {session_id} not found"
            raise ValueError(msg)

        ts.status = "ended"
        ts.actual_end = datetime.now(tz=UTC)
        await self._session.flush()
