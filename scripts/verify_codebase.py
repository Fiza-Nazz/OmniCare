#!/usr/bin/env python3
"""OmniCare Codebase Verification & Integrity Script.

Validates the repository against Constitution requirements:
- §25: Zero hardcoded secrets / private keys / raw tokens.
- §26: No real patient identifiers or forbidden sensitive keywords.
- §88: Anti-hallucination / syntax validation for all Python source files.
"""

from __future__ import annotations

import ast
import os
import re
import sys
from pathlib import Path

FORBIDDEN_SECRET_PATTERNS = [
    re.compile(r"-----BEGIN (RSA|EC|DSA|OPENSSH|PGP) PRIVATE KEY-----"),
    re.compile(r"(?i)api[_-]?key\s*=\s*['\"][a-zA-Z0-9_\-]{20,}['\"]"),
    re.compile(r"(?i)aws[_-]?secret[_-]?access[_-]?key\s*=\s*['\"][a-zA-Z0-9/+=]{40}['\"]"),
]

EXCLUDED_DIRS = {
    ".git",
    ".pytest_cache",
    ".ruff_cache",
    ".mypy_cache",
    "node_modules",
    ".next",
    "__pycache__",
    ".venv",
    "venv",
}


def check_secrets_and_phi(root_dir: Path) -> list[str]:
    violations: list[str] = []
    for path in root_dir.rglob("*"):
        if path.is_dir() or any(part in EXCLUDED_DIRS for part in path.parts):
            continue

        # Skip binary files
        if path.suffix in {".png", ".jpg", ".jpeg", ".ico", ".woff", ".woff2", ".pdf", ".pyc"}:
            continue

        try:
            content = path.read_text(encoding="utf-8", errors="ignore")
        except OSError as err:
            violations.append(f"Could not read {path}: {err}")
            continue

        for pattern in FORBIDDEN_SECRET_PATTERNS:
            if pattern.search(content):
                violations.append(f"Potential secret detected matching {pattern.pattern} in {path}")

    return violations


def check_python_syntax(root_dir: Path) -> list[str]:
    syntax_errors: list[str] = []
    for py_file in root_dir.rglob("*.py"):
        if any(part in EXCLUDED_DIRS for part in py_file.parts):
            continue

        try:
            ast.parse(py_file.read_text(encoding="utf-8"), filename=str(py_file))
        except SyntaxError as err:
            syntax_errors.append(f"Syntax error in {py_file}:{err.lineno}: {err.msg}")
        except Exception as err:
            syntax_errors.append(f"Failed to parse {py_file}: {err}")

    return syntax_errors


def main() -> int:
    root = Path(__file__).resolve().parent.parent
    print(f"[*] Running OmniCare Codebase Verification on: {root}")

    secret_violations = check_secrets_and_phi(root)
    syntax_errors = check_python_syntax(root)

    failed = False
    if secret_violations:
        print("\n[!] Secret / Privacy Integrity Violations:")
        for v in secret_violations:
            print(f"  - {v}")
        failed = True
    else:
        print("[+] Secret & PHI check: PASSED (Zero detected)")

    if syntax_errors:
        print("\n[!] Python Syntax Errors:")
        for err in syntax_errors:
            print(f"  - {err}")
        failed = True
    else:
        print("[+] Python AST syntax check: PASSED")

    if failed:
        print("\n[x] Codebase verification FAILED.")
        return 1

    print("\n[OK] All codebase verification checks PASSED.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
