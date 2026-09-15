# OmniCare — Security Policy & Compliance Standards

## 1. Security Philosophy

OmniCare treats patient health data and system security with the highest level of engineering rigor. In accordance with the [Engineering Constitution](./OmniCare%20%E2%80%94%20Advanced%20Engineering%20Constitution.md):

$$\text{Correctness} > \text{Security} > \text{Patient/Data Safety} > \text{Reliability}$$

---

## 2. Core Security Guarantees

### Zero Secrets in Repository (Constitution §25)
- No cryptographic keys, JWT secrets, database credentials, or API tokens may ever be committed to git history.
- Local configuration is supplied exclusively via environment variables or secure secret managers.
- Pre-commit scanning and CI hooks actively inspect changes for credential leaks.

### Server-Side Authorization & RBAC (Constitution §8)
- Every incoming API request is authenticated and authorized on the backend.
- Role-based permissions are enforced at the service layer, preventing route-level bypasses or IDOR vulnerabilities.
- Supported roles: Super Admin, Hospital Admin, Doctor, Nurse, Pharmacist, Lab Technician, Billing Officer, Insurance Officer, Receptionist, Patient, Auditor.

### Audit Trail Immutability (Constitution §23)
- Sensitive operations (record access, clinical modifications, prescription issuing, financial transactions) produce tamper-evident audit records.
- Logs include: Actor ID, Action, Target ID, Timestamp (UTC), Client IP hash, Request Correlation ID, and Result status.

### Cryptographic Standards (Constitution §28)
- Password hashing: Argon2id or bcrypt with appropriate cost factors.
- Token signing: HMAC-SHA256 (HS256) or Asymmetric RS256 for public-key validation.
- All communications must use TLS 1.3 in production environments.

---

## 3. Reporting a Vulnerability

If you discover a potential security flaw in OmniCare, please follow responsible disclosure:
1. **Do not create a public issue.**
2. Send a detailed report to `security@omnicare.internal` including:
   - Vulnerability classification (e.g., OWASP category)
   - Step-by-step reproduction steps
   - Potential clinical or privacy impact
3. The security team will acknowledge receipt within 24 hours and provide regular updates on remediation progress.
