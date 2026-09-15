"""OmniCare API Entrypoint.

Starts the Uvicorn ASGI server with the application instance.
"""

from __future__ import annotations

import uvicorn
from services.api.app import create_app
from services.api.config import get_settings

app = create_app()

if __name__ == "__main__":
    settings = get_settings()
    uvicorn.run(
        "services.api.main:app",
        host=settings.app_host,
        port=settings.app_port,
        reload=settings.debug,
    )
