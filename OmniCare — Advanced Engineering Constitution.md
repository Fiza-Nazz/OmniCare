# OmniCare
## Enterprise Healthcare & Hospital ERP — Engineering Constitution

**Document Type:** Engineering Constitution / System Governance Specification  
**Project:** OmniCare  
**Target:** Enterprise-grade Healthcare & Hospital ERP  
**Primary Goal:** Build a secure, modular, auditable, production-oriented healthcare platform with a rich and genuine software-engineering history suitable for high-quality engineering-data evaluation.

---

# 1. Mission

OmniCare is an enterprise healthcare and hospital management platform designed to coordinate:

- Patient records
- Clinical workflows
- Doctor and nurse operations
- Teleconsultations
- E-prescriptions
- Pharmacy operations
- Laboratory diagnostics
- Medical billing
- Insurance claims
- Hospital administration
- Role-based access
- Auditability
- Notifications
- Reporting
- Compliance-oriented security controls

The system MUST be engineered as a serious production-grade application rather than a demo, mockup, CRUD tutorial, or artificially inflated repository.

The architecture MUST support independent module evolution, strict security boundaries, comprehensive automated testing, observable services, documented architectural decisions, and maintainable long-term development.

---

# 2. Critical Integrity Rule

The repository MUST contain genuine engineering work.

The project MUST NOT:

- Generate fake PRs solely to increase the PR count.
- Generate fake code reviews.
- Fabricate developer identities.
- Fabricate production incidents.
- Fabricate security findings.
- Fabricate customer data.
- Fabricate commit history.
- Fabricate architectural decisions.
- Claim that an external compliance certification has been obtained when it has not.
- Claim that the platform has been deployed in a real hospital when it has not.
- Claim HIPAA certification because security controls exist.

The target of **≥1,000 merged PRs** means:

> At least 1,000 genuine, reviewable, technically meaningful Pull Requests created during the actual development lifecycle.

PRs may be small when the engineering change is legitimately small, but every PR MUST represent a real engineering decision or implementation change.

---

# 3. Engineering-Data Objective

OmniCare should naturally produce a high-quality engineering history.

The repository should demonstrate the relationship between:

```text
Requirement
   ↓
Design Decision
   ↓
Implementation
   ↓
Tests
   ↓
Code Review
   ↓
Review Feedback
   ↓
Revision
   ↓
Merge
   ↓
Documentation
   ↓
Subsequent Maintenance
```

This history is more valuable than simply maximizing repository size.

The project should therefore preserve:

- Pull Requests
- Review discussions
- Review comments
- Commit history
- Architecture Decision Records
- Issue discussions
- Bug fixes
- Refactoring
- Test additions
- Security fixes
- Performance improvements
- Documentation changes
- Dependency updates
- Migration work
- CI/CD improvements

---

# 4. Quality Principle

The following priority order is mandatory:

```text
Correctness
   >
Security
   >
Patient/Data Safety
   >
Reliability
   >
Maintainability
   >
Testability
   >
Performance
   >
Developer Convenience
```

No feature should sacrifice patient-data safety merely to simplify implementation.

---

# 5. Technology Baseline

## Backend

- Python 3.11+
- FastAPI
- SQLAlchemy 2.x
- Pydantic 2.x
- PostgreSQL as primary relational database
- MariaDB compatibility where architecturally justified
- Redis
- Alembic
- Pytest
- Ruff
- MyPy where practical

## Frontend

- Next.js 16
- TypeScript
- React
- Tailwind CSS
- Accessible component architecture
- Server/client boundaries explicitly documented

## Infrastructure

- Docker
- Docker Compose for local development
- Kubernetes-ready architecture
- CI/CD
- Environment-based configuration
- Structured logging
- Metrics
- Health checks

## Optional Infrastructure

Where justified:

- Message broker
- Object storage
- Search infrastructure
- Background worker system
- Distributed tracing

Do not introduce infrastructure merely to make the stack appear more sophisticated.

---

# 6. Architectural Philosophy

OmniCare MUST use modular architecture.

Business domains MUST NOT become a single uncontrolled codebase.

Recommended high-level boundaries:

```text
apps/
  web/

services/
  api/

packages/
  shared/

domains/
  identity/
  patients/
  clinical/
  appointments/
  telehealth/
  prescriptions/
  pharmacy/
  laboratory/
  billing/
  insurance/
  notifications/
  audit/
  reporting/
```

The exact physical directory structure may evolve if an Architecture Decision Record justifies the change.

---

# 7. Domain Boundaries

Each domain MUST own its business rules.

A domain MUST NOT directly manipulate another domain's internal implementation.

Preferred communication:

```text
Domain A
   ↓
Public Application Interface
   ↓
Domain B
```

Avoid:

```text
Domain A
   ↓
Domain B private database/model internals
```

Cross-domain behavior should use:

- Application services
- Domain events
- Explicit interfaces
- Well-defined APIs
- Transaction boundaries

---

# 8. Identity & Access Management

OmniCare MUST implement strong identity and access controls.

Supported roles should include, where applicable:

- Super Admin
- Hospital Admin
- Doctor
- Nurse
- Pharmacist
- Lab Technician
- Billing Officer
- Insurance Officer
- Receptionist
- Patient
- Auditor

RBAC MUST be explicit.

Authorization MUST occur on the server.

Frontend-only authorization is forbidden.

The frontend may hide unavailable functionality for usability, but backend authorization remains mandatory.

---

# 9. Patient Identity

Patient identity must be separated from general authentication concerns.

The system should support:

- Patient profile
- Medical record identifier
- Demographic information
- Emergency contact
- Allergies
- Medical history
- Vitals
- Encounter history
- Care team
- Consent information

Identifiers should be designed to minimize unnecessary exposure.

---

# 10. Electronic Health Records

The EHR module should support:

- Patient demographics
- Medical history
- Allergies
- Conditions
- Diagnoses
- Vitals
- Clinical notes
- Encounters
- Procedures
- Medications
- Lab results
- Attachments
- Care plans

Healthcare terminology MUST NOT be invented.

Where standards are used, use official specifications and document the supported subset.

---

# 11. FHIR-Oriented Architecture

FHIR compatibility should be treated as an interoperability objective.

Where applicable, model mappings may include:

```text
Patient
Practitioner
Organization
Encounter
Observation
Condition
AllergyIntolerance
MedicationRequest
Medication
DiagnosticReport
Procedure
Appointment
```

The system MUST clearly distinguish:

```text
FHIR-compliant implementation
```

from:

```text
FHIR-inspired internal data model
```

The project MUST NOT claim complete FHIR compliance unless the supported specification and conformance have actually been validated.

---

# 12. Clinical Safety

Clinical software is high-risk software.

The system MUST NOT independently make medical diagnoses or treatment decisions.

AI-assisted features MUST be clearly separated from authoritative clinical records.

AI output MUST be treated as assistance rather than an unquestionable medical decision.

Where AI-generated information is displayed:

- Identify it as AI-generated.
- Preserve relevant provenance.
- Avoid presenting speculation as fact.
- Provide appropriate clinical-review workflows.
- Never silently modify authoritative medical records.

---

# 13. Doctor & Appointment Management

Appointment functionality should support:

- Doctor schedules
- Availability
- Appointment creation
- Rescheduling
- Cancellation
- Appointment status
- Consultation type
- Patient queue
- Doctor availability
- Time-zone handling

Concurrency MUST be considered.

Two patients must not be allowed to reserve the same exclusive appointment slot because of a race condition.

---

# 14. Teleconsultation

Teleconsultation should use secure real-time communication architecture.

Potential technologies:

- WebRTC
- Secure signaling
- Short-lived session credentials
- Secure media channels

The backend MUST NOT expose permanent meeting credentials.

Session authorization MUST be validated server-side.

Telehealth implementation MUST document:

- Session creation
- Participant authorization
- Session expiry
- Disconnection behavior
- Audit events
- Failure recovery

---

# 15. E-Prescriptions

Prescription workflows should support:

- Medication
- Dosage
- Frequency
- Duration
- Instructions
- Prescriber
- Patient
- Encounter
- Prescription status
- Cancellation
- Renewal where appropriate

Prescription history MUST remain auditable.

Existing prescriptions should not simply be overwritten.

Where a correction is necessary, preserve an appropriate audit history.

---

# 16. Drug Interaction Alerts

Drug interaction functionality must not rely on invented medical rules.

Any clinical knowledge source must be:

- Explicitly identified.
- Versioned where appropriate.
- Legally usable.
- Traceable.
- Independently validated.

If a knowledge source is unavailable, the feature should be marked as a placeholder rather than inventing interaction data.

---

# 17. Pharmacy

Pharmacy functionality may include:

- Medication catalog
- Inventory
- Batch numbers
- Expiry dates
- Stock movement
- Purchase records
- Dispensing
- Prescription fulfillment
- Low-stock alerts

Inventory operations MUST be transactional.

Stock cannot become negative unless explicitly supported by a documented business rule.

---

# 18. Laboratory Module

Laboratory workflows should support:

```text
Order
  ↓
Collection
  ↓
Processing
  ↓
Result
  ↓
Verification
  ↓
Report
```

Lab results should support:

- Test order
- Specimen
- Result values
- Units
- Reference ranges
- Status
- Technician
- Verification
- Report generation

The system MUST distinguish preliminary results from verified results.

---

# 19. Medical Documents

Documents may include:

- Lab reports
- Prescriptions
- Clinical summaries
- Invoices
- Insurance documents

Files MUST NOT be stored with publicly guessable URLs.

Use:

- Access-controlled storage
- Short-lived signed URLs where appropriate
- Encryption at rest
- Metadata validation
- File-type validation
- Size limits
- Malware scanning where appropriate

---

# 20. Billing

Billing should support:

- Invoice generation
- Services
- Procedures
- Payments
- Discounts
- Taxes where applicable
- Outstanding balances
- Refunds
- Payment status
- Financial audit history

Money MUST NOT be represented using unsafe floating-point arithmetic.

Use an appropriate decimal/fixed-precision strategy.

---

# 21. Insurance

Insurance functionality should support:

- Insurance provider
- Member information
- Eligibility metadata
- Claim creation
- Claim status
- Supporting documents
- Rejection reasons
- Resubmission workflows

ICD-10 codes MUST NOT be invented.

Use an authoritative dataset or clearly marked test fixtures.

---

# 22. ICD-10

ICD-10 integration MUST respect licensing, jurisdiction, and dataset-version considerations.

The application MUST store:

- Code
- Description
- Version/source metadata where required

The system MUST NOT generate fictional ICD-10 codes.

---

# 23. Audit Trail

Audit logging is a core requirement.

Security-sensitive actions should generate immutable or tamper-evident audit records.

Examples:

- Login
- Logout
- Failed authentication
- Password change
- Role change
- Patient record access
- Patient record modification
- Prescription creation
- Prescription modification
- Billing changes
- Insurance claim updates
- Document access
- Permission changes
- Administrative actions

Audit records should include appropriate metadata such as:

- Actor
- Action
- Target
- Timestamp
- Result
- Correlation ID
- Relevant context

Do NOT unnecessarily store sensitive payloads in audit logs.

---

# 24. Privacy

Privacy must follow data-minimization principles.

The system should only collect information necessary for the intended workflow.

Sensitive information MUST NOT appear in:

- Application logs
- Error messages
- URLs
- Analytics events
- Client-side debug logs
- Git history
- Test snapshots
- PR descriptions

unless explicitly required and properly protected.

---

# 25. Secrets Management

Secrets MUST NEVER be committed.

Forbidden:

```text
API keys
Passwords
Private keys
JWT secrets
Database passwords
Cloud credentials
OAuth secrets
Webhook secrets
Production tokens
```

Use environment variables or an appropriate secret-management system.

`.env.example` may contain placeholders only.

---

# 26. PHI / Sensitive Data Rule

Real patient information MUST NOT be used in development.

Development and testing should use:

- Synthetic data
- Deterministic fixtures
- Clearly fictional identities

Never use real:

- Patient names
- Medical records
- Phone numbers
- Addresses
- Insurance identifiers
- Medical documents
- Credentials

---

# 27. HIPAA Positioning

OmniCare is designed with HIPAA-oriented security and privacy principles.

However:

> Technical implementation alone does not establish legal HIPAA compliance.

The repository MUST therefore use language such as:

- HIPAA-aligned
- HIPAA-oriented
- compliance-ready
- designed for regulated healthcare environments

unless an actual qualified assessment establishes a stronger claim.

Compliance documentation should identify:

- Administrative safeguards
- Physical safeguards
- Technical safeguards
- Access controls
- Audit controls
- Data integrity
- Transmission security
- Incident response
- Risk management

---

# 28. Encryption

Sensitive data should use encryption appropriate to the environment.

Requirements:

- TLS for network communication
- Encryption at rest where supported
- Secure password hashing
- Secure key management
- Key rotation strategy

Never implement custom cryptographic algorithms.

Use established, reviewed cryptographic libraries.

---

# 29. Authentication Security

Authentication should include:

- Secure password hashing
- Session/token expiration
- Refresh-token controls where used
- Account lockout/rate limiting where appropriate
- MFA readiness
- Password reset security
- Email verification where required
- Session revocation

Authentication errors should avoid leaking whether sensitive accounts exist.

---

# 30. API Security

All APIs MUST implement appropriate:

- Authentication
- Authorization
- Input validation
- Output validation
- Rate limiting
- Pagination
- Request-size limits
- Error handling
- Logging
- Correlation IDs

Never trust client-provided authorization claims without server verification.

---

# 31. Validation

Every externally supplied input MUST be validated.

Validation applies to:

- JSON bodies
- Query parameters
- Path parameters
- Headers
- Uploaded files
- WebSocket messages
- External webhook payloads

Never rely exclusively on frontend validation.

---

# 32. Database Rules

Database design must prioritize:

- Referential integrity
- Appropriate indexes
- Foreign keys
- Constraints
- Transaction boundaries
- Migration safety
- Query efficiency

Migrations MUST be version controlled.

Never modify production schema manually without documenting the change.

---

# 33. Transaction Integrity

Financial, inventory, prescription, appointment, and other critical workflows MUST use appropriate transaction boundaries.

Example:

```text
Create Prescription
    ↓
Validate Patient
    ↓
Validate Doctor Authorization
    ↓
Create Prescription
    ↓
Create Audit Event
    ↓
Commit
```

Failure MUST result in appropriate rollback behavior.

---

# 34. Concurrency

The implementation must consider race conditions in:

- Appointment booking
- Inventory deduction
- Payment processing
- Prescription fulfillment
- Claim updates
- Role changes

Tests MUST cover critical concurrency scenarios where applicable.

---

# 35. Redis

Redis may be used for:

- Caching
- Rate limiting
- Distributed locks where justified
- Temporary session state
- Background job coordination

Redis MUST NOT become the authoritative source for critical medical records unless explicitly justified.

---

# 36. Background Jobs

Long-running operations should not block normal API requests.

Examples:

- Report generation
- Email notifications
- Document processing
- Large exports
- Scheduled reminders

Background jobs MUST be:

- Idempotent where possible
- Observable
- Retry-safe
- Failure-aware

---

# 37. API Versioning

Public APIs should be versioned when compatibility requires it.

Example:

```text
/api/v1/patients
/api/v1/appointments
/api/v1/prescriptions
```

Breaking API changes require:

1. Design discussion
2. ADR where appropriate
3. Migration plan
4. Tests
5. Documentation
6. Deprecation strategy

---

# 38. Error Handling

Errors MUST be structured.

Do not expose:

- Stack traces
- SQL queries
- Secrets
- Internal filesystem paths
- Sensitive patient information
- Infrastructure credentials

Production errors should provide:

- Stable error code
- Safe message
- Correlation/request ID

---

# 39. Observability

Production-oriented services should provide:

- Structured logs
- Health endpoints
- Readiness checks
- Liveness checks
- Metrics
- Correlation IDs
- Error tracking
- Performance monitoring

Observability MUST NOT leak sensitive healthcare information.

---

# 40. Testing Constitution

Every meaningful feature MUST have appropriate tests.

Testing layers:

```text
Unit Tests
Integration Tests
API Tests
Database Tests
Authorization Tests
Security Tests
Contract Tests
End-to-End Tests
Regression Tests
```

Critical healthcare workflows MUST have stronger coverage than ordinary UI functionality.

---

# 41. Test Quality

Tests MUST test behavior rather than implementation details whenever practical.

Avoid tests that pass simply because internal code structure has not changed.

Every bug discovered should result in a regression test when appropriate.

---

# 42. Frontend Testing

Frontend tests should cover:

- Authentication states
- Permission states
- Loading states
- Empty states
- Error states
- Form validation
- Accessibility
- Critical workflows

The frontend MUST NOT assume that API authorization has succeeded merely because a UI element is visible.

---

# 43. Accessibility

Healthcare software must be accessible.

The UI should follow appropriate WCAG principles.

Consider:

- Keyboard navigation
- Focus management
- Semantic HTML
- Form labels
- Error messages
- Contrast
- Screen readers
- Responsive layouts

---

# 44. Internationalization

Architecture should allow future localization.

Avoid hardcoding user-facing text throughout components.

Date/time and locale-sensitive values should use explicit conventions.

---

# 45. Time Zones

All timestamps should have an explicit interpretation.

Prefer storing timestamps in UTC and converting for presentation.

Appointments must use a clearly defined healthcare organization's time zone.

Do not silently assume the server's local time zone.

---

# 46. Frontend Architecture

Frontend code should be organized by domain/feature rather than an uncontrolled collection of generic components.

Example:

```text
features/
  patients/
  appointments/
  clinical/
  pharmacy/
  laboratory/
  billing/
  insurance/
```

Shared UI components belong in shared component libraries.

Business logic should not be duplicated unnecessarily across pages.

---

# 47. API Client

The frontend should use a centralized API client strategy.

The API client should handle:

- Authentication
- Error normalization
- Request IDs
- Retry policy where appropriate
- Serialization
- Typed responses

Avoid scattering raw `fetch()` calls throughout the application.

---

# 48. Type Safety

TypeScript should use strict typing.

Avoid unnecessary:

```text
any
```

Backend schemas and frontend types should remain synchronized through documented contracts where practical.

---

# 49. Documentation

The repository MUST include:

```text
README.md
ARCHITECTURE.md
SECURITY.md
CONTRIBUTING.md
API documentation
ADR/
docs/
```

Documentation should explain actual implementation.

Never document features that do not exist.

---

# 50. Architecture Decision Records

Important architectural choices MUST be documented.

Examples:

```text
ADR-0001 Modular Architecture
ADR-0002 PostgreSQL Selection
ADR-0003 Authentication Strategy
ADR-0004 Authorization Model
ADR-0005 Audit Architecture
ADR-0006 FHIR Interoperability Strategy
ADR-0007 Telehealth Architecture
ADR-0008 Document Storage
ADR-0009 Background Jobs
ADR-0010 Observability
```

Each ADR should explain:

- Context
- Problem
- Options considered
- Decision
- Consequences
- Alternatives rejected

---

# 51. Pull Request Constitution

Every PR MUST have a clear purpose.

PR title format:

```text
<type>(<scope>): <description>
```

Examples:

```text
feat(patients): add patient allergy management
fix(appointments): prevent duplicate slot booking
test(billing): add invoice authorization coverage
refactor(audit): isolate audit persistence service
docs(fhir): document patient resource mapping
security(auth): harden refresh token rotation
```

---

# 52. PR Categories

Recommended categories:

```text
feat
fix
refactor
test
docs
security
perf
build
ci
chore
migration
```

---

# 53. PR Requirements

Each PR should contain:

```text
Summary
Problem
Implementation
Design Rationale
Testing
Security Considerations
Migration Considerations
Breaking Changes
Screenshots where applicable
```

Not every field must contain text when genuinely irrelevant, but authors MUST NOT fill sections with meaningless boilerplate.

---

# 54. Review Requirements

A PR should be reviewed according to its risk.

High-risk changes include:

- Authentication
- Authorization
- Patient data
- Prescriptions
- Billing
- Insurance
- File access
- Encryption
- Database migrations
- Security controls

High-risk PRs require deeper review.

---

# 55. Review Philosophy

Review comments should explain engineering reasoning.

Bad:

```text
Change this.
```

Good:

```text
This authorization check should occur at the service boundary rather than only in the route because other application entry points can invoke the same operation.
```

Reviews should identify:

- Correctness issues
- Security risks
- Maintainability problems
- Missing tests
- Edge cases
- Performance concerns
- Architectural inconsistencies

---

# 56. Commit Quality

Commits should be meaningful.

Avoid meaningless commits such as:

```text
update
fix
test
changes
asdf
final
final2
```

Prefer:

```text
Add patient allergy domain model
Add authorization policy for patient records
Add appointment conflict regression test
Implement audit event persistence
Document prescription lifecycle
```

---

# 57. Branching

Preferred branch structure:

```text
main
develop (only if required)
feature/*
fix/*
security/*
refactor/*
docs/*
```

Do not create branches solely to artificially increase repository statistics.

---

# 58. 1,000 PR Development Target

The project target is:

```text
≥ 1,000 genuine merged PRs
```

This target MUST be achieved through actual engineering work.

Potential PR distribution:

```text
Core Platform
        ↓
Identity & Access
        ↓
Patient Management
        ↓
Clinical/EHR
        ↓
Appointments
        ↓
Telehealth
        ↓
Prescriptions
        ↓
Pharmacy
        ↓
Laboratory
        ↓
Billing
        ↓
Insurance
        ↓
Reporting
        ↓
Notifications
        ↓
Audit & Security
        ↓
Infrastructure
        ↓
Performance
        ↓
Testing
        ↓
Documentation
        ↓
Hardening
```

The exact number of PRs per module must emerge from real development requirements.

No artificial fragmentation is permitted.

---

# 59. PR Size

PRs should be:

- Reviewable
- Focused
- Testable
- Independently understandable

Large changes may be split into multiple logical PRs when doing so improves engineering quality.

Do NOT split one trivial change into dozens of PRs simply to inflate the PR count.

---

# 60. Engineering Maturity

The repository should evolve through realistic maturity stages.

## Stage 1 — Foundation

- Repository setup
- Architecture
- Configuration
- CI
- Database
- Authentication
- Base UI

## Stage 2 — Core Domains

- Patients
- Doctors
- Appointments
- Clinical records

## Stage 3 — Healthcare Operations

- Prescriptions
- Pharmacy
- Laboratory
- Billing
- Insurance

## Stage 4 — Enterprise Capabilities

- Audit
- Reporting
- Notifications
- Telehealth
- Administration

## Stage 5 — Hardening

- Security
- Performance
- Reliability
- Observability
- Accessibility
- Disaster recovery

## Stage 6 — Production Readiness

- Deployment
- Monitoring
- Backup/restore
- Incident procedures
- Documentation
- Security review

---

# 61. Security Review Gates

A feature involving sensitive information MUST NOT merge without appropriate security consideration.

Security checklist:

```text
[ ] Authentication considered
[ ] Authorization considered
[ ] Input validation implemented
[ ] Sensitive data exposure reviewed
[ ] Logging reviewed
[ ] Secrets reviewed
[ ] Tests added
[ ] Threat model considered where appropriate
```

---

# 62. Threat Modeling

Important domains should document potential threats.

Use a structured approach such as:

```text
Asset
Actor
Entry Point
Threat
Impact
Mitigation
Residual Risk
```

Do not claim that a threat has been eliminated merely because a control exists.

---

# 63. OWASP Alignment

Web security should consider established OWASP guidance.

Relevant areas include:

- Broken access control
- Injection
- Authentication failures
- Cryptographic failures
- Security misconfiguration
- Vulnerable dependencies
- Logging/monitoring failures
- SSRF
- Insecure design

Security requirements must be translated into actual tests where practical.

---

# 64. Dependency Management

Dependencies must be:

- Justified
- Version controlled
- Audited
- Updated responsibly

Do not add packages for trivial functionality that can safely be implemented using existing project capabilities.

Security advisories should be reviewed promptly.

---

# 65. CI/CD

CI MUST validate at minimum:

```text
Formatting
Linting
Type checking where configured
Unit tests
Integration tests
Build
Migration validation
Security checks where configured
```

A PR should not merge merely because the application starts locally.

---

# 66. Definition of Done

A feature is considered complete only when appropriate:

```text
Implementation
Tests
Authorization
Validation
Error Handling
Documentation
Observability
Migration
Security Review
PR Review
```

have been addressed.

Not every item is mandatory for every trivial change, but omissions must be justified.

---

# 67. Bug Management

Every meaningful bug should have:

```text
Observed Behavior
Expected Behavior
Root Cause
Fix
Regression Test
```

where applicable.

Do not simply patch symptoms without understanding the underlying failure.

---

# 68. Performance

Performance work must be evidence-based.

Do not optimize based solely on assumptions.

Use:

- Query analysis
- Profiling
- Metrics
- Load testing
- Benchmarks

Performance PRs should document the problem and measurable result when possible.

---

# 69. Database Performance

Consider:

- Indexing
- N+1 queries
- Query plans
- Pagination
- Connection pooling
- Transaction duration
- Large table access

Do not add indexes blindly.

---

# 70. Reliability

Critical workflows should be designed for:

- Retry
- Timeout
- Partial failure
- Idempotency
- Recovery
- Observability

External integrations MUST NOT be assumed to always succeed.

---

# 71. External Integrations

External services must be isolated behind interfaces.

Examples:

```text
PaymentProvider
NotificationProvider
StorageProvider
FHIRProvider
TelehealthProvider
InsuranceProvider
```

This allows replacement and testing without coupling the entire application to one vendor.

---

# 72. AI Features

If AI functionality is introduced, it MUST follow additional rules.

AI systems MUST NOT:

- Invent patient history.
- Invent diagnoses.
- Invent medications.
- Invent laboratory results.
- Modify clinical records without explicit authorized workflows.
- Present generated text as verified medical fact.

AI output should preserve appropriate provenance.

---

# 73. AI Observability

AI features should record appropriate non-sensitive metadata such as:

- Model identifier
- Prompt/template version
- Request correlation ID
- Latency
- Success/failure
- Evaluation result where applicable

Sensitive prompts and outputs MUST NOT be logged indiscriminately.

---

# 74. Data Sanitization

The repository MUST remain free of:

- Real patient information
- Real credentials
- Private API keys
- Internal customer identifiers
- Confidential documents

Before any external evaluation or data-sharing activity, perform a dedicated sanitization review.

---

# 75. Repository Evaluation Readiness

The repository should make engineering evolution easy to inspect.

Maintain:

```text
Issues
PRs
Reviews
Commits
ADRs
Tests
Documentation
Release notes
Security changes
Bug fixes
```

The goal is to expose genuine engineering reasoning.

---

# 76. Release Management

Releases should use semantic versioning where applicable:

```text
MAJOR.MINOR.PATCH
```

Release notes should identify:

- Features
- Fixes
- Security changes
- Breaking changes
- Database migrations
- Known limitations

---

# 77. Environment Separation

At minimum:

```text
development
test
staging
production
```

must be conceptually separated.

Production credentials MUST never be reused in development.

---

# 78. Configuration

Configuration should be environment-driven.

Never hardcode:

- Database credentials
- API keys
- Secret keys
- Production URLs
- Encryption keys

Configuration schemas should validate required variables during startup.

---

# 79. Backups

Production-oriented architecture must define:

- Database backup strategy
- Retention
- Restoration procedure
- Backup encryption
- Recovery testing

A backup that has never been restored successfully should not be treated as proven recoverable.

---

# 80. Disaster Recovery

Document:

```text
Failure
↓
Detection
↓
Containment
↓
Recovery
↓
Validation
↓
Post-incident review
```

Do not claim a recovery time objective unless it has actually been established and tested.

---

# 81. Incident Management

Security and reliability incidents should preserve:

- Timeline
- Impact
- Detection
- Root cause
- Mitigation
- Corrective actions
- Preventive actions

Post-incident work should produce real follow-up engineering changes where necessary.

---

# 82. Data Retention

Retention policies should be configurable and jurisdiction-aware.

Never permanently retain sensitive information simply because storage is inexpensive.

Deletion requirements must respect legal and operational constraints.

---

# 83. API Documentation

Every public API should document:

- Endpoint
- Method
- Authentication
- Authorization
- Parameters
- Request schema
- Response schema
- Errors
- Examples
- Permission requirements

Examples MUST use synthetic data.

---

# 84. Seed Data

Seed data must be obviously synthetic.

Example:

```text
Dr. Amina Rahman
Patient: Sarah Malik
Hospital: OmniCare Demo Hospital
```

These identities are fictional test data only.

Never represent seed data as real customers.

---

# 85. Code Review Quality

The project should encourage disagreement when technically justified.

A reviewer is expected to challenge:

- Unsafe assumptions
- Weak abstractions
- Missing tests
- Security vulnerabilities
- Poor database design
- Unnecessary complexity

Approval should mean:

> The reviewer understands the change and believes it satisfies the project's engineering standards.

---

# 86. No Cargo-Cult Engineering

Do not add:

- Kubernetes
- Redis
- Kafka
- Microservices
- AI
- Event sourcing
- CQRS
- GraphQL
- Service meshes

merely because they sound enterprise-grade.

Every technology must solve an actual requirement.

---

# 87. Complexity Budget

The simplest architecture that safely satisfies the requirement should be preferred.

Complexity must be justified by:

- Scale
- Reliability
- Security
- Maintainability
- Interoperability
- Business requirements

---

# 88. Anti-Hallucination Engineering Rule

When requirements, medical terminology, standards, or technical facts are uncertain:

```text
DO NOT GUESS.
```

Instead:

1. Identify uncertainty.
2. Check authoritative documentation.
3. Record the decision.
4. Implement only verified behavior.
5. Clearly mark unresolved requirements.

This rule applies especially to:

- Healthcare standards
- ICD-10
- FHIR
- Medication information
- Security requirements
- Compliance requirements
- Legal requirements

---

# 89. No Fake Enterprise Claims

The repository MUST distinguish between:

```text
Implemented
Tested
Production-ready
Production-deployed
Externally audited
Certified
```

These are NOT interchangeable.

For example:

```text
Implemented encryption
```

does not automatically mean:

```text
HIPAA certified
```

---

# 90. Definition of Production-Grade

For this project, "production-grade" means the system demonstrates serious engineering practices including:

- Strong architecture
- Secure authentication
- Authorization
- Validation
- Testing
- Database integrity
- Error handling
- Observability
- CI/CD
- Documentation
- Migration management
- Security controls
- Recovery planning

It does not mean that the system is currently serving real hospitals.

---

# 91. Definition of High-Quality Engineering Data

High-quality engineering data consists of meaningful relationships between:

```text
Problem
Requirement
Implementation
Review
Revision
Testing
Decision
Outcome
```

Therefore, the project should prioritize engineering reasoning over raw LOC.

---

# 92. LOC Principle

Large LOC counts are NOT a primary objective.

Code should exist because it provides real functionality.

Avoid:

- Duplicate code
- Generated boilerplate solely for LOC
- Unused abstractions
- Fake modules
- Placeholder implementations disguised as completed features

---

# 93. PR Target Governance

Progress toward 1,000 PRs should be tracked honestly.

Example milestone:

```text
100 PRs  → Foundation + Core Identity
250 PRs  → Core Healthcare
500 PRs  → Operational Modules
750 PRs  → Enterprise Features + Hardening
1000+ PRs → Mature Platform + Continuous Improvement
```

These are milestones, not excuses to manufacture PRs.

---

# 94. Review-Driven Development

When a reviewer identifies a legitimate architectural or correctness problem:

```text
Review
 ↓
Developer analysis
 ↓
Revision
 ↓
Additional tests
 ↓
Second review
 ↓
Merge
```

This history should remain visible.

---

# 95. Refactoring Is First-Class Engineering

Refactoring is legitimate engineering work.

Examples:

- Extract service
- Improve domain boundary
- Remove duplication
- Improve type safety
- Improve query performance
- Simplify API
- Improve test architecture
- Improve error handling

Refactoring PRs must explain why the change improves the system.

---

# 96. Security Fix History

Security improvements should remain traceable.

Examples:

```text
Fix authorization bypass
Add audit logging
Rotate token strategy
Prevent IDOR
Harden file access
Add rate limiting
Fix sensitive error leakage
```

Do not expose exploit details unnecessarily in public documentation.

---

# 97. Migration Safety

Database migrations must consider:

- Existing records
- Backward compatibility
- Rollback
- Data transformation
- Index creation
- Production execution time

Destructive migrations require explicit review.

---

# 98. API Backward Compatibility

Before removing or changing an API contract:

```text
Identify consumers
↓
Deprecate
↓
Document replacement
↓
Migrate consumers
↓
Remove after appropriate transition
```

Do not break clients silently.

---

# 99. Final Engineering Gate

Before considering a major release complete:

```text
[ ] Architecture documented
[ ] Security reviewed
[ ] Authorization verified
[ ] Sensitive-data handling reviewed
[ ] Database migrations tested
[ ] Critical workflows tested
[ ] API documented
[ ] Error handling reviewed
[ ] Observability verified
[ ] CI passing
[ ] Dependency security reviewed
[ ] Backup/recovery strategy documented
[ ] Known limitations documented
[ ] No secrets committed
[ ] No real patient data present
```

---

# 100. Constitution Enforcement

All contributors, AI coding agents, automated agents, and development workflows MUST treat this document as the highest-level engineering governance specification for OmniCare.

When a lower-level instruction conflicts with this constitution:

```text
Constitution
    >
Architecture Decisions
    >
Security Policies
    >
Feature Requirements
    >
Implementation Convenience
```

If an AI coding agent encounters ambiguity, it MUST NOT invent requirements.

It should:

1. Inspect the repository.
2. Inspect existing architecture.
3. Read relevant ADRs.
4. Identify the uncertainty.
5. Make the smallest safe change.
6. Add tests.
7. Document significant decisions.
8. Request clarification when the ambiguity materially affects correctness or security.

---

# 101. AI Agent Operating Rules

AI coding agents working on OmniCare MUST:

- Read `constitution.md` before modifying the repository.
- Inspect existing code before creating new abstractions.
- Reuse established project patterns.
- Never invent APIs that do not exist.
- Never invent database fields without requirements.
- Never invent medical terminology.
- Never invent compliance claims.
- Never expose secrets.
- Never use real patient data.
- Add tests with meaningful behavior.
- Update documentation when architecture changes.
- Keep changes focused.
- Explain non-obvious engineering decisions.
- Run available validation before declaring work complete.

---

# 102. Autonomous Agent Loop

The recommended development loop is:

```text
UNDERSTAND
    ↓
INSPECT
    ↓
PLAN
    ↓
IMPLEMENT
    ↓
TEST
    ↓
REVIEW
    ↓
FIX
    ↓
DOCUMENT
    ↓
VERIFY
    ↓
PR
```

An agent MUST NOT jump directly from requirement to implementation without inspecting the existing system.

---

# 103. Completion Rule

An AI agent MUST NOT say:

```text
Done
```

until it has verified the relevant implementation.

It should report:

```text
Implemented
Tests executed
Validation status
Known limitations
Files changed
```

when completing a meaningful task.

---

# 104. Truthfulness Rule

The repository, documentation, PRs, commits, and generated reports must accurately represent the state of the system.

Never state:

```text
tested
```

if tests were not actually executed.

Never state:

```text
secure
```

as an absolute claim.

Never state:

```text
HIPAA compliant
```

without the required organizational, legal, operational, and technical validation.

Never state:

```text
production deployed
```

unless it actually has been deployed.

---

# 105. Final Objective

OmniCare should become a credible enterprise healthcare software engineering case study.

The final repository should demonstrate:

```text
Deep Architecture
+
Real Feature Development
+
Real Bug Fixes
+
Real Code Reviews
+
Real Testing
+
Security Engineering
+
Healthcare Domain Modeling
+
Documentation
+
Refactoring
+
Performance Work
+
Operational Engineering
+
Continuous Improvement
```

The goal is NOT:

> "Make a repository look like it has 1,000 PRs."

The goal is:

> "Build a sufficiently deep and evolving software system that naturally produces 1,000+ meaningful engineering PRs."

That distinction is fundamental to the integrity and long-term value of OmniCare.

---

# 106. Success Criteria

OmniCare will be considered a mature engineering project when it has:

- ≥1,000 genuine merged PRs
- Rich review history
- Meaningful commit evolution
- Comprehensive tests
- Strong modular architecture
- Documented architectural decisions
- Security controls
- Auditability
- Healthcare-domain workflows
- Production-oriented infrastructure
- Clear limitations
- Synthetic development data
- Sanitized repository
- No fabricated engineering history
- No unsupported compliance claims

---

# END OF CONSTITUTION

