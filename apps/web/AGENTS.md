# Agent Guide

This project is Canton Receivables: a private invoice financing application built
around Canton Network, Daml workflows, and a product-grade web demo.

## Frontend Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui for reusable interface primitives
- Feature-based structure under `src/features`

Expected frontend areas:

- `src/features/invoices`: invoice list, upload/create flow, invoice details
- `src/features/offers`: funding offer creation and review
- `src/features/deals`: deal room, timeline, agreement state
- `src/features/parties`: role switcher and party-specific visibility
- `src/mock`: mock data for the hosted product demo
- `src/types`: shared frontend domain types

The UI should feel like an institutional fintech dashboard: clear, restrained,
usable, and focused on the workflow. Avoid crypto-style visual noise.

## Backend Direction

The frontend should not connect directly to Canton from the browser.

Use a backend API layer for:

- business workflow orchestration
- role and party validation
- Canton JSON Ledger API calls
- Daml command submission
- mock/demo mode support
- future integration with Canton Coin or token workflows

Planned backend stack:

- Node.js
- TypeScript
- REST-style API endpoints
- Canton JSON Ledger API integration
- environment-based configuration

Expected backend endpoints:

- `POST /invoices`
- `GET /invoices`
- `GET /invoices/:id`
- `POST /offers`
- `POST /offers/:id/accept`
- `GET /deals/:id`
- `GET /ledger/events`

## Canton And Daml Direction

Core Daml concepts should model the business workflow:

- `Invoice`
- `FundingOffer`
- `FundingAgreement`
- `CashAccount` or demo balance contract
- role/party helpers for SME, Funder, Auditor, and Issuer

The first working target is a local end-to-end flow:

```text
Invoice created -> Offer submitted -> Offer accepted -> Agreement funded
```

## Implementation Rules

- Keep commits small and focused.
- Prefer domain-oriented folders over generic technical grouping.
- Keep the hosted Vercel demo capable of running in mock mode.
- Keep Canton credentials, party tokens, and API secrets out of the frontend.
- Do not commit `.env`, `.next`, `node_modules`, or generated build output.
- Do not add direct browser-to-Canton calls.
