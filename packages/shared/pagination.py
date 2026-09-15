"""Pagination utilities for API endpoints.

Adheres to Constitution §22 (API Design — Pagination Standards).
Supports both offset-based and cursor-based pagination patterns.
"""

from __future__ import annotations

import base64
from dataclasses import dataclass, field
from typing import Any, Generic, TypeVar

T = TypeVar("T")


@dataclass(frozen=True)
class PaginationParams:
    """Validated pagination parameters from client requests."""

    page: int = 1
    page_size: int = 20
    max_page_size: int = 100

    def __post_init__(self) -> None:
        if self.page < 1:
            msg = "Page number must be >= 1"
            raise ValueError(msg)
        if self.page_size < 1:
            msg = "Page size must be >= 1"
            raise ValueError(msg)

    @property
    def effective_page_size(self) -> int:
        """Return page size clamped to maximum."""
        return min(self.page_size, self.max_page_size)

    @property
    def offset(self) -> int:
        """Calculate SQL OFFSET from page number."""
        return (self.page - 1) * self.effective_page_size


@dataclass
class PaginatedResponse(Generic[T]):
    """Paginated response container with metadata."""

    items: list[T] = field(default_factory=list)
    total: int = 0
    page: int = 1
    page_size: int = 20
    total_pages: int = 0

    def __post_init__(self) -> None:
        if self.page_size > 0:
            self.total_pages = max(1, -(-self.total // self.page_size))

    @property
    def has_next(self) -> bool:
        return self.page < self.total_pages

    @property
    def has_previous(self) -> bool:
        return self.page > 1

    def to_dict(self) -> dict[str, Any]:
        """Serialize pagination metadata (items excluded)."""
        return {
            "total": self.total,
            "page": self.page,
            "page_size": self.page_size,
            "total_pages": self.total_pages,
            "has_next": self.has_next,
            "has_previous": self.has_previous,
        }


@dataclass(frozen=True)
class CursorPaginationParams:
    """Parameters for cursor-based pagination."""

    cursor: str | None = None
    limit: int = 20
    max_limit: int = 100

    @property
    def effective_limit(self) -> int:
        return min(self.limit, self.max_limit)

    def decode_cursor(self) -> str | None:
        """Decode a base64-encoded cursor value."""
        if self.cursor is None:
            return None
        try:
            return base64.urlsafe_b64decode(self.cursor.encode()).decode()
        except Exception:
            return None

    @staticmethod
    def encode_cursor(value: str) -> str:
        """Encode a cursor value to base64."""
        return base64.urlsafe_b64encode(value.encode()).decode()


@dataclass
class CursorPaginatedResponse(Generic[T]):
    """Cursor-based paginated response."""

    items: list[T] = field(default_factory=list)
    next_cursor: str | None = None
    has_more: bool = False

    def to_dict(self) -> dict[str, Any]:
        return {
            "next_cursor": self.next_cursor,
            "has_more": self.has_more,
            "count": len(self.items),
        }
