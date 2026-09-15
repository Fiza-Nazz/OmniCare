"""OWASP-compliant security headers middleware.

Adheres to Constitution §25 (API Security — HTTP Hardening).
"""

from __future__ import annotations

from collections.abc import Callable

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response

# OWASP recommended security headers for healthcare APIs
DEFAULT_SECURITY_HEADERS: dict[str, str] = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "0",
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Cache-Control": "no-store, no-cache, must-revalidate",
    "Pragma": "no-cache",
    "Content-Security-Policy": "default-src 'none'; frame-ancestors 'none'",
}


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """Injects OWASP-recommended security headers into every HTTP response.

    Designed for HIPAA-compliant healthcare APIs where data protection
    and transport security are paramount.
    """

    def __init__(
        self,
        app: object,
        custom_headers: dict[str, str] | None = None,
    ) -> None:
        super().__init__(app)
        self.headers = {**DEFAULT_SECURITY_HEADERS}
        if custom_headers:
            self.headers.update(custom_headers)

    async def dispatch(
        self,
        request: Request,
        call_next: Callable,
    ) -> Response:
        response = await call_next(request)
        for header_name, header_value in self.headers.items():
            response.headers[header_name] = header_value
        return response


def get_csp_policy(
    *,
    allow_scripts: bool = False,
    allow_styles: bool = False,
    report_uri: str | None = None,
) -> str:
    """Build a Content-Security-Policy header value.

    Args:
        allow_scripts: Whether to allow inline scripts.
        allow_styles: Whether to allow inline styles.
        report_uri: Optional URI for CSP violation reporting.

    Returns:
        A CSP policy string.
    """
    directives = ["default-src 'none'", "frame-ancestors 'none'"]

    if allow_scripts:
        directives.append("script-src 'self'")
    if allow_styles:
        directives.append("style-src 'self'")
    if report_uri:
        directives.append(f"report-uri {report_uri}")

    return "; ".join(directives)
