# OmniCare — Enterprise Healthcare & Hospital ERP

[![Engineering Constitution](https://img.shields.io/badge/Constitution-Compliant-blue.svg)](./OmniCare%20%E2%80%94%20Advanced%20Engineering%20Constitution.md)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB.svg?logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-009688.svg?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg?logo=next.js&logoColor=white)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1.svg?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

OmniCare is a modular, secure, auditable, enterprise-grade healthcare and hospital management platform. Designed for high-reliability clinical operations, electronic health records (EHR), scheduling, laboratory workflows, pharmacy dispensing, medical billing, and insurance claims.

> **Integrity & Compliance Note (Constitution §2, §27, §89):**  
> OmniCare is engineered with HIPAA-oriented technical safeguards and privacy-by-design principles. Technical safeguards alone do not constitute legal compliance or certification. All data, patient identities, and scenarios present in development and testing fixtures are strictly synthetic.

---

## 🏛️ System Architecture Overview

OmniCare employs a **Modular Monolith** architecture with strict domain boundaries and domain-driven design principles:

```text
apps/
  web/                  # Next.js 16 App Router frontend (TypeScript, Tailwind CSS)

services/
  api/                  # Core FastAPI backend service, routes, middleware, and app factory

packages/
  shared/               # Reusable domain-agnostic utilities, crypto, and logging primitives

domains/                # Self-contained business domains with explicit interfaces
  identity/             # Authentication, RBAC, users, sessions, credential security
  patients/             # Patient demographics, medical IDs, emergency contacts, consents
  clinical/             # Encounters, vitals, clinical notes, diagnoses (EHR)
  appointments/         # Doctor schedules, slot concurrency, booking workflows
  telehealth/           # WebRTC signaling, ephemeral tokens, session audits
  prescriptions/        # Non-destructive e-prescriptions, fulfillment tracking
  pharmacy/             # Transactional inventory management, batch & expiry control
  laboratory/           # Specimen tracking, preliminary vs. verified lab results
  billing/              # Invoicing, fixed-precision financial records, payments
  insurance/            # Claims processing, pre-authorization, ICD-10 mappings
  notifications/        # Multi-channel notification delivery (email, SMS, alerts)
  audit/                # Tamper-evident immutable security audit trail
  reporting/            # Aggregated operational and clinical intelligence
```

Cross-domain interactions must pass through public application interfaces or domain events, never direct private database queries.

---

## 🚀 Getting Started

### Prerequisites
- Python 3.11+
- Node.js 20+ (Node 24 recommended)
- Docker & Docker Compose
- PostgreSQL 16
- Redis 7

### Quick Start (Local Development)

1. **Clone the repository:**
   ```bash
   git clone <repo-url> omnicare
   cd omnicare
   ```

2. **Setup environment variables:**
   ```bash
   cp .env.example .env
   ```

3. **Launch backing services via Docker Compose:**
   ```bash
   docker compose up -d postgres redis
   ```

4. **Backend Setup:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Or .venv\Scripts\Activate on Windows
   pip install -r services/api/requirements.txt
   alembic upgrade head
   uvicorn services.api.main:app --reload --port 8000
   ```

5. **Frontend Setup:**
   ```bash
   cd apps/web
   npm install
   npm run dev
   ```

---

## 🛡️ Governance & Quality Standards

OmniCare is developed under the rules outlined in [OmniCare — Advanced Engineering Constitution.md](./OmniCare%20%E2%80%94%20Advanced%20Engineering%20Constitution.md).

- **Priority:** Correctness > Security > Patient/Data Safety > Reliability > Maintainability > Testability > Performance > Developer Convenience
- **Zero Fabrication:** Real code, verified tests, genuine PR reviews, zero fabricated data.
- **Traceability:** Every architectural change is tracked via Architecture Decision Records (`docs/adr/`).

---

## 📄 License
Licensed under the Apache License, Version 2.0. See [LICENSE](./LICENSE) for details.
