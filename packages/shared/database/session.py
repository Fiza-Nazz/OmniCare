"""Async database engine configuration and session dependency management.

Adheres to Constitution:
- §5: Technology Baseline (SQLAlchemy 2.x async engine).
- §32: Database Rules (Connection pooling, pool pre-ping, lifecycle management).
- §33: Transaction Integrity (Atomic rollback on unhandled exceptions).
"""

from __future__ import annotations

from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from services.api.config import AppSettings, get_settings

# Global references for runtime engine and session factory
_async_engine: AsyncEngine | None = None
_async_session_factory: async_sessionmaker[AsyncSession] | None = None


def create_async_engine_instance(
    database_url: str,
    pool_size: int = 20,
    max_overflow: int = 10,
    echo: bool = False,
) -> AsyncEngine:
    """Creates a configured AsyncEngine with connection pool monitoring."""
    connect_args = {}
    if "sqlite" in database_url:
        connect_args["check_same_thread"] = False
        return create_async_engine(
            database_url,
            echo=echo,
            connect_args=connect_args,
        )

    return create_async_engine(
        database_url,
        pool_size=pool_size,
        max_overflow=max_overflow,
        pool_pre_ping=True,
        echo=echo,
    )


def create_async_session_factory(
    engine: AsyncEngine,
) -> async_sessionmaker[AsyncSession]:
    """Creates a thread-safe async session factory."""
    return async_sessionmaker(
        bind=engine,
        class_=AsyncSession,
        expire_on_commit=False,
        autocommit=False,
        autoflush=False,
    )


def get_engine(settings: AppSettings | None = None) -> AsyncEngine:
    """Retrieves or lazily initializes the singleton AsyncEngine."""
    global _async_engine
    if _async_engine is None:
        cfg = settings or get_settings()
        _async_engine = create_async_engine_instance(
            database_url=cfg.async_database_url,
            pool_size=cfg.database_pool_size,
            max_overflow=cfg.database_max_overflow,
            echo=cfg.debug,
        )
    return _async_engine


def get_session_factory(
    settings: AppSettings | None = None,
) -> async_sessionmaker[AsyncSession]:
    """Retrieves or lazily initializes the session factory."""
    global _async_session_factory
    if _async_session_factory is None:
        engine = get_engine(settings)
        _async_session_factory = create_async_session_factory(engine)
    return _async_session_factory


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    """FastAPI dependency yielding an async database session within an explicit
    transaction boundary. Rolls back automatically if an exception occurs.
    """
    factory = get_session_factory()
    async with factory() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
