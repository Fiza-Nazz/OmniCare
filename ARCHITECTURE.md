# OmniCare — System Architecture Specification

## 1. Architectural Style: Modular Monolith

OmniCare is architected as a **Modular Monolith**. Rather than fragmenting into independent microservices early—which introduces network latency, distributed transaction complexity, and operational overhead without justification (see Constitution §86)—OmniCare enforces modularity within a single deployable unit.

### Domain Boundaries
Every business domain owns its data models, business logic, validation, and domain repositories:

```text
       ┌────────────────────────────────────────────────────────┐
       │                  API Gateway / Routes                  │
       │                   (services/api/)                      │
       └──────────────────────────┬─────────────────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         │                        │                        │
         ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Identity Domain  │    │  Patient Domain  │    │ Clinical Domain  │
│  - Users, Auth   │    │  - Profiles, IDs │    │  - Encounters    │
│  - RBAC Policies │    │  - Demographics  │    │  - Vitals, Notes │
└────────┬─────────┘    └────────┬─────────┘    └────────┬─────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                                 ▼
                     ┌───────────────────────┐
                     │ Shared Persistence    │
                     │  - PostgreSQL 16      │
                     │  - SQLAlchemy 2.0     │
                     └───────────────────────┘
```

### Communication Rules
1. **Public Application Services:** Modules communicate with each other strictly via documented public application services or event publishers.
2. **No Cross-Domain Model Access:** Domain A must never import or query the internal SQLAlchemy models of Domain B directly.
3. **Transaction Boundaries:** Workflows spanning multiple domains (such as prescribing medication and dispensing in pharmacy) must manage transactions explicitly, with clear rollback semantics (Constitution §33).

---

## 2. Technology Stack Selection Rationale

| Layer | Technology | Architectural Justification |
| :--- | :--- | :--- |
| **Language** | Python 3.11+ | Modern async syntax, performance gains, strong typing via Pydantic 2.x and MyPy. |
| **API Framework** | FastAPI | High throughput, asynchronous ASGI support, automatic OpenAPI/JSON-Schema generation. |
| **ORM / Query Engine**| SQLAlchemy 2.x | Explicit typed queries, battle-tested connection pooling, robust async session management. |
| **Primary Database** | PostgreSQL 16 | ACID compliance, robust JSONB support for clinical metadata, strict constraints and indexes. |
| **Cache & Sessions** | Redis 7 | Distributed locking, token revocation lists, rate limiting, low-latency temporary cache. |
| **Frontend** | Next.js 16 (App Router)| React server/client boundary separation, static generation for documentation, strict TypeScript. |
| **Styling** | Tailwind CSS | Utility-first, predictable styling, easily auditable for accessibility and high contrast. |

---

## 3. Security & Compliance Architecture

1. **Server-Side RBAC:** All authorization is enforced at the service boundary on the backend. Frontend UI conditional rendering is solely for user experience.
2. **Audit Logging:** Every security-sensitive transaction (authentication, record retrieval, modification, deletion) emits a structured audit record into an append-only audit ledger (Constitution §23).
3. **Synthetic Fixtures Only:** In compliance with Constitution §26, production patient data is never used. Synthetic generators supply test and demo datasets.
4. **Data Masking & PII Redaction:** Structured loggers sanitize sensitive keys (passwords, tokens, identifiable patient records) before logging.

---

## 4. Architectural Decision Records (ADRs)

All significant technical decisions must be documented as ADRs in `docs/adr/` following the format:
- Context & Problem
- Options Considered
- Decision Made
- Consequences (Pros & Cons)
