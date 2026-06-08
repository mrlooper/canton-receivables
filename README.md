# Canton Receivables

Canton Receivables is a private invoice financing prototype built on Canton Network.
It lets SMEs turn unpaid invoices into financeable receivables, allows funders to
submit private funding offers, and uses Daml workflows to model confidential
multiparty agreements, demo balances, and settlement states.

## What We Are Building

We are building an MVP for private invoice financing. The goal is to show how
Canton can support institutional financial workflows where each party only sees
the data they are allowed to see.

The application will let an SME upload or register an invoice, receive a basic
risk/financing assessment, publish it to a private marketplace, and accept a
funding offer from a funder. The final agreement will be represented as a
private multiparty workflow on Canton.

## Core Flow

1. An SME creates or uploads an invoice.
2. The app extracts or collects key invoice data.
3. A private invoice record is created.
4. A funder reviews limited invoice information.
5. The funder submits a financing offer.
6. The SME accepts the offer.
7. A funding agreement is created and tracked.
8. Demo balances and settlement states are updated.

## Main Roles

- `SME`: creates invoices and accepts funding offers.
- `Funder`: reviews opportunities and submits offers.
- `Auditor`: reviews compliance and transaction history.
- `Issuer`: creates demo balances for the local prototype.

## Planned MVP

- Frontend dashboard with role switcher.
- Invoice creation and detail view.
- Private marketplace view for funders.
- Funding offer and acceptance flow.
- Daml contracts for invoices, offers, agreements, and demo balances.
- Local development setup using Canton LocalNet.
- Seed/reset scripts for a repeatable demo.

## Why Canton

Canton is a strong fit because invoice financing is a multiparty financial
workflow with sensitive business data. The same transaction involves SMEs,
funders, debtors, and auditors, but not every participant should see the same
information. Canton and Daml allow us to model this with explicit parties,
signatories, observers, and private contract visibility.

## Tech Direction

- Frontend: Next.js, TypeScript, Tailwind CSS.
- Backend: Node.js API for orchestration and integration.
- Ledger workflow: Daml on Canton.
- Local environment: Canton LocalNet.
- Demo data: scripted parties, invoices, offers, and balances.

## Status

This repository is currently in the initial planning and scaffolding phase.
The first milestone is to build a working end-to-end local demo:

```text
Invoice created -> Offer submitted -> Offer accepted -> Agreement funded
```
