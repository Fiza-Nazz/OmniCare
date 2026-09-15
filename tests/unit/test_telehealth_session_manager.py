"""Unit tests for TelehealthSessionManager.

Validates token generation, session joining, and capacity enforcement.
"""

from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock
from uuid import uuid4

import pytest

from domains.telehealth.services.session_manager import (
    SessionCapacityExceededError,
    SessionExpiredError,
    TelehealthSessionManager,
)


@pytest.fixture
def mock_session() -> AsyncMock:
    session = AsyncMock()
    session.add = MagicMock()
    session.flush = AsyncMock()
    return session


@pytest.fixture
def manager(mock_session: AsyncMock) -> TelehealthSessionManager:
    return TelehealthSessionManager(session=mock_session)


class TestGenerateToken:
    """Tests for WebRTC token generation."""

    def test_token_contains_required_fields(self, manager: TelehealthSessionManager) -> None:
        token_data = manager.generate_session_token(uuid4(), uuid4())
        assert "token" in token_data
        assert "expires_at" in token_data
        assert "session_hash" in token_data
        assert "participant_id" in token_data

    def test_tokens_are_unique(self, manager: TelehealthSessionManager) -> None:
        sid = uuid4()
        pid = uuid4()
        t1 = manager.generate_session_token(sid, pid)
        t2 = manager.generate_session_token(sid, pid)
        assert t1["token"] != t2["token"]


@pytest.mark.asyncio
class TestJoinSession:
    """Tests for session joining."""

    async def test_raises_when_session_not_found(
        self,
        manager: TelehealthSessionManager,
        mock_session: AsyncMock,
    ) -> None:
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = None
        mock_session.execute.return_value = mock_result
        with pytest.raises(ValueError, match="not found"):
            await manager.join_session(uuid4(), uuid4())

    async def test_raises_when_session_ended(
        self,
        manager: TelehealthSessionManager,
        mock_session: AsyncMock,
    ) -> None:
        ts = MagicMock()
        ts.status = "ended"
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = ts
        mock_session.execute.return_value = mock_result
        with pytest.raises(SessionExpiredError):
            await manager.join_session(uuid4(), uuid4())

    async def test_raises_when_at_capacity(
        self,
        manager: TelehealthSessionManager,
        mock_session: AsyncMock,
    ) -> None:
        ts = MagicMock()
        ts.status = "in_progress"
        ts.participant_count = 4
        ts.max_participants = 4
        mock_result = MagicMock()
        mock_result.scalar_one_or_none.return_value = ts
        mock_session.execute.return_value = mock_result
        with pytest.raises(SessionCapacityExceededError):
            await manager.join_session(uuid4(), uuid4())
