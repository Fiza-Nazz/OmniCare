"""API versioning middleware with header-based version negotiation.

Adheres to Constitution §22 (API Design — Versioning Strategy).
"""

from __future__ import annotations

import re
from collections.abc import Callable

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, Response

# Supported API versions
SUPPORTED_VERSIONS = {"v1", "v2"}
DEFAULT_VERSION = "v1"
LATEST_VERSION = "v2"

# Header names for version negotiation
VERSION_HEADER = "X-API-Version"
ACCEPT_VERSION_HEADER = "Accept-Version"


class APIVersionMiddleware(BaseHTTPMiddleware):
    """Negotiates API version from request headers or URL prefix.

    Version resolution order:
    1. URL prefix (/v1/, /v2/)
    2. X-API-Version header
    3. Accept-Version header
    4. Default to v1
    """

    VERSION_PATTERN = re.compile(r"^/(v\d+)/")

    async def dispatch(
        self,
        request: Request,
        call_next: Callable,
    ) -> Response:
        version = self._resolve_version(request)

        if version not in SUPPORTED_VERSIONS:
            return JSONResponse(
                status_code=400,
                content={
                    "detail": f"Unsupported API version: {version}",
                    "supported_versions": sorted(SUPPORTED_VERSIONS),
                },
            )

        # Inject resolved version into request state
        request.state.api_version = version

        response = await call_next(request)
        response.headers[VERSION_HEADER] = version
        return response

    def _resolve_version(self, request: Request) -> str:
        """Determine API version from URL, headers, or default."""
        # 1. Check URL prefix
        path = request.url.path
        url_match = self.VERSION_PATTERN.match(path)
        if url_match:
            return url_match.group(1)

        # 2. Check X-API-Version header
        header_version = request.headers.get(VERSION_HEADER)
        if header_version and header_version in SUPPORTED_VERSIONS:
            return header_version

        # 3. Check Accept-Version header
        accept_version = request.headers.get(ACCEPT_VERSION_HEADER)
        if accept_version and accept_version in SUPPORTED_VERSIONS:
            return accept_version

        return DEFAULT_VERSION


def get_version_info() -> dict[str, str | list[str]]:
    """Return API versioning metadata for documentation."""
    return {
        "default_version": DEFAULT_VERSION,
        "latest_version": LATEST_VERSION,
        "supported_versions": sorted(SUPPORTED_VERSIONS),
        "version_header": VERSION_HEADER,
    }
