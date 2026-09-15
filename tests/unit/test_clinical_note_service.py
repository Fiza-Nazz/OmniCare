"""Unit tests for ClinicalNoteService signature workflows.

Adheres to Constitution §40 (Testing Constitution) and §10 (EHR).
"""

from __future__ import annotations

import uuid

import pytest
import pytest_asyncio
from sqlalchemy.ext.asyncio import AsyncSession

from domains.clinical.models import ClinicalNote, NoteType
from domains.clinical.service import (
    ClinicalNoteService,
    UnauthorizedSignerError,
)
from packages.shared.database.base import Base
from packages.shared.database.session import (
    create_async_engine_instance,
    create_async_session_factory,
)


@pytest_asyncio.fixture
async def note_session():
    """Provides isolated test database session."""
    engine = create_async_engine_instance("sqlite+aiosqlite:///:memory:")
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    factory = create_async_session_factory(engine)
    async with factory() as session:
        yield session

    await engine.dispose()


@pytest.mark.asyncio
async def test_author_can_sign_note(note_session: AsyncSession):
    """Verify authoring clinician can sign their own note."""
    author_id = uuid.uuid4()
    patient_id = uuid.uuid4()

    note = ClinicalNote(
        patient_id=patient_id,
        authored_by_user_id=author_id,
        note_type=NoteType.SOAP,
        subjective="Patient reports mild cough.",
        objective="Chest clear.",
        assessment="Viral bronchitis.",
        plan="Hydration and rest.",
        is_signed=False,
    )
    note_session.add(note)
    await note_session.commit()

    service = ClinicalNoteService(note_session)
    signed_note = await service.sign_note(note.id, author_id)
    assert signed_note.is_signed is True


@pytest.mark.asyncio
async def test_non_author_cannot_sign_note(note_session: AsyncSession):
    """Verify unauthorized signer is rejected with UnauthorizedSignerError."""
    author_id = uuid.uuid4()
    other_user_id = uuid.uuid4()
    patient_id = uuid.uuid4()

    note = ClinicalNote(
        patient_id=patient_id,
        authored_by_user_id=author_id,
        note_type=NoteType.NARRATIVE,
        narrative="Routine checkup notes.",
        is_signed=False,
    )
    note_session.add(note)
    await note_session.commit()

    service = ClinicalNoteService(note_session)
    with pytest.raises(UnauthorizedSignerError):
        await service.sign_note(note.id, other_user_id)
