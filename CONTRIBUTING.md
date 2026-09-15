# OmniCare — Contribution Guidelines & PR Standards

Thank you for contributing to OmniCare. All contributions must adhere strictly to the [OmniCare Engineering Constitution](./OmniCare%20%E2%80%94%20Advanced%20Engineering%20Constitution.md).

---

## 1. Pull Request Standards (Constitution §51–§54)

Every Pull Request must follow conventional commit naming and include complete context:

### PR Title Format
```text
<type>(<scope>): <description>
```
Valid types: `feat`, `fix`, `refactor`, `test`, `docs`, `security`, `perf`, `build`, `ci`, `chore`, `migration`.

### PR Description Template
```markdown
## Summary
Concise description of the change.

## Problem
What issue or business requirement does this address?

## Implementation
Key architectural and code details.

## Design Rationale
Why was this approach chosen over alternatives?

## Testing
What automated and manual tests were executed?

## Security Considerations
How does this change impact authorization, data safety, or secrets?
```

---

## 2. Review Philosophy (Constitution §55, §85)

- Every high-risk change (Auth, EHR, Prescriptions, Billing, DB migrations) requires thorough review by at least two engineers.
- Review comments must explain technical reasoning rather than vague directives.
- Approval signifies that the reviewer has reviewed the logic, verified edge cases, and confirmed tests pass.

---

## 3. Local Verification Before Submitting PR

Before pushing your branch:
```bash
# Backend linting and formatting
ruff check .
ruff format --check .

# Type checking
mypy services/api domains/ packages/

# Automated tests
pytest -v

# Frontend checks
cd apps/web && npm run lint && tsc --noEmit
```
