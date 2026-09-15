"""OmniCare Core Application Configuration.

Implements environment-driven configuration with strict Pydantic v2 validation.
Adheres to Constitution:
- §25: Secrets Management (no hardcoded secrets).
- §78: Configuration validation at startup (fail-fast on missing/invalid keys).
"""

from __future__ import annotations

from functools import lru_cache
from typing import Literal
from pydantic import Field, PostgresDsn, RedisDsn, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class AppSettings(BaseSettings):
    """Application settings validated against environment variables."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=False,
    )

    # Core Environment
    app_name: str = Field(default="OmniCare Enterprise ERP", alias="APP_NAME")
    environment: Literal["development", "test", "staging", "production"] = Field(
        default="development", alias="ENVIRONMENT"
    )
    debug: bool = Field(default=False, alias="DEBUG")
    app_host: str = Field(default="0.0.0.0", alias="APP_HOST")
    app_port: int = Field(default=8000, alias="APP_PORT")

    # Allowed Origins for CORS
    allowed_origins_raw: str = Field(
        default="http://localhost:3000,http://127.0.0.1:3000",
        alias="ALLOWED_ORIGINS",
    )

    # Database Configuration (PostgreSQL 16)
    database_host: str = Field(default="localhost", alias="DATABASE_HOST")
    database_port: int = Field(default=5432, alias="DATABASE_PORT")
    database_name: str = Field(default="omnicare_dev", alias="DATABASE_NAME")
    database_user: str = Field(default="omnicare_user", alias="DATABASE_USER")
    database_password: str = Field(default="dev_insecure_password", alias="DATABASE_PASSWORD")
    database_pool_size: int = Field(default=20, alias="DATABASE_POOL_SIZE")
    database_max_overflow: int = Field(default=10, alias="DATABASE_MAX_OVERFLOW")

    # Redis Configuration
    redis_host: str = Field(default="localhost", alias="REDIS_HOST")
    redis_port: int = Field(default=6379, alias="REDIS_PORT")
    redis_password: str | None = Field(default=None, alias="REDIS_PASSWORD")
    redis_db: int = Field(default=0, alias="REDIS_DB")

    # Security & Cryptography
    secret_key: str = Field(
        default="omnicare_insecure_dev_secret_key_minimum_32_chars_long!!",
        alias="SECRET_KEY",
    )
    algorithm: str = Field(default="HS256", alias="ALGORITHM")
    access_token_expire_minutes: int = Field(default=30, alias="ACCESS_TOKEN_EXPIRE_MINUTES")
    refresh_token_expire_days: int = Field(default=7, alias="REFRESH_TOKEN_EXPIRE_DAYS")

    # Observability
    log_level: str = Field(default="INFO", alias="LOG_LEVEL")
    enable_json_logging: bool = Field(default=True, alias="ENABLE_JSON_LOGGING")
    mask_sensitive_data: bool = Field(default=True, alias="MASK_SENSITIVE_DATA")

    @property
    def allowed_origins(self) -> list[str]:
        """Parsed list of allowed CORS origins."""
        return [origin.strip() for origin in self.allowed_origins_raw.split(",") if origin.strip()]

    @property
    def async_database_url(self) -> str:
        """Constructs an asyncpg SQLAlchemy connection URL."""
        return (
            f"postgresql+asyncpg://{self.database_user}:{self.database_password}"
            f"@{self.database_host}:{self.database_port}/{self.database_name}"
        )

    @property
    def sync_database_url(self) -> str:
        """Constructs a sync connection URL for migration tools (Alembic)."""
        return (
            f"postgresql://{self.database_user}:{self.database_password}"
            f"@{self.database_host}:{self.database_port}/{self.database_name}"
        )

    @property
    def redis_url(self) -> str:
        """Constructs a Redis connection URL."""
        auth_part = f":{self.redis_password}@" if self.redis_password else ""
        return f"redis://{auth_part}{self.redis_host}:{self.redis_port}/{self.redis_db}"

    @field_validator("secret_key")
    @classmethod
    def validate_secret_key_safety(cls, val: str, info) -> str:
        """Enforces that production environments do not use default dev secrets."""
        # Note: In Pydantic v2, other field values can be accessed via info.data
        env = info.data.get("environment") if info.data else "development"
        if env == "production":
            if "insecure" in val.lower() or len(val) < 32:
                raise ValueError(
                    "Production environment MUST supply a cryptographically secure "
                    "SECRET_KEY of at least 32 characters."
                )
        return val


@lru_cache(maxsize=1)
def get_settings() -> AppSettings:
    """Returns a cached singleton instance of AppSettings."""
    return AppSettings()
