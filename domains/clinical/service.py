"""Clinical note authoring and digital signature service.

Adheres to Constitution §10 (EHR — Clinical Notes) and §23 (Audit Trail).
"""

from __future__ import annotations

import uuid

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from domains.clinical.models import ClinicalNote


class UnauthorizedSignerError(PermissionError):
    """Raised when a non-author attempts to sign a clinical note."""


class NoteAlreadySignedError(ValueError):
    """Raised when attempting to modify a signed, immutable clinical note."""


class ClinicalNoteService:
    """Manages clinical note authoring, revisions, and legal electronic signature."""

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    async def sign_note(self, note_id: uuid.UUID, signing_user_id: uuid.UUID) -> ClinicalNote:
        """Legally signs a clinical note, locking it against further modifications."""
        stmt = select(ClinicalNote).where(ClinicalNote.id == note_id)
        result = await self.session.execute(stmt)
        note = result.scalar_one_or_none()

        if note is None:
            raise ValueError(f"Clinical note {note_id} not found.")

        if note.is_signed:
            raise NoteAlreadySignedError("Clinical note is already signed and locked.")

        if note.authored_by_user_id != signing_user_id:
            raise UnauthorizedSignerError("Only the authoring provider may sign this note.")

        note.is_signed = True
        await self.session.commit()
        await self.session.refresh(note)
        return note
