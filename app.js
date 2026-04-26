const docs = {
  proposal: `# Granular Investor Proposal

> Working name: Receipt Accounts
> Category: Privacy-first consumer finance / retail and billing data infrastructure
> Stage: Pre-seed / MVP planning
> Date: April 2026

## Executive Summary

Granular is a privacy-first itemized spending platform built around a direct connection between users and the businesses they pay. The core product logic is simple: wherever possible, purchases and payment obligations should enter the app already itemized through retailer or biller APIs, so the user can see exactly what they bought or paid for, not just where money went.

Granular is not primarily a payment app at launch. It monitors, analyzes, categorizes, and verifies spending and obligations by combining direct partner integrations, digital receipt and invoice imports, manual scanning, OCR review, and manual completion where needed.

The goal is a complete household record that leaves as little as possible out.

## The Problem

Consumers face a visibility gap:

- bank statements show that money moved, but not what was bought
- budgeting apps stay too abstract at merchant level
- receipts and bills are fragmented across paper, email, portals, and payment history
- utilities, mortgage, and recurring services are rarely unified with shopping activity
- cash purchases often disappear from the household record

The real spending picture is spread across multiple systems. Granular should unify them into one searchable, structured, actionable record.

## Core Thesis

Most finance apps work at merchant level. Granular should work at line-item and obligation level.

The app should become the place where a user can see:

- what they bought
- what they paid for
- which categories are increasing
- which recurring bills are drifting
- how much of the household picture is visible and verified
- which records came directly from partners and which were manually captured

## Why This Wins

Granular is strongest when positioned as:

- a privacy-first itemized spending and payment-visibility platform
- a retailer-connected and biller-connected household data layer
- a consumer control product rather than a launch-phase payments product
- a trust-aware infrastructure platform over time

It should not lead with banking replacement language, crypto-first framing, speculative token mechanics, or cashback-first messaging.

## Value Proposition

### For Users

- see exactly what was bought or billed
- understand which items, providers, and obligations are driving spend
- monitor recurring-cost change and inflation drift
- keep a complete household record including non-connected services and cash
- retain control over sensitive data through privacy-first design

### For Partners

- deliver itemized records directly into the customer experience
- improve digital receipt and invoice quality
- support proof-of-purchase and proof-of-billing workflows
- modernize post-purchase and post-billing support
- participate in a privacy-aware trust layer

## Investment Case

Granular addresses a real household problem with a staged, credible rollout:

1. launch as a software and visibility platform
2. prove habit through itemized records and actionable control
3. validate focused retailer and biller integrations
4. expand into verification infrastructure and optional partner-funded features later

The core story is simple:

**Granular connects users directly to the businesses they pay, so spending appears already itemized wherever possible and can be completed where needed through trusted fallback capture.**`,

  businessPlan: `# Granular Product Model

> Focus: Direct itemization, fallback coverage, monitoring, and verification

## Product Positioning

Granular should be presented as a direct retailer-to-user and biller-to-user information layer for the household. The core is not payment execution. The core is visibility, categorization, analysis, and verification.

## Product Modes

### Mode A: Direct Itemization

This is the default and most important mode.

- retailers and billers connect through APIs
- purchases, invoices, and obligations flow into the app already itemized
- the app preserves source, timestamp, provenance, and verification state
- users see structured records instead of abstract transaction lines

### Mode B: Manual and OCR Completion

This closes the gaps where connectivity is not yet available.

- scan paper receipts
- upload digital receipts and invoices
- run OCR with user review
- capture non-connected services and cash purchases

This is critical for completeness, but it is the coverage layer around the connected network rather than the long-term product identity.

### Mode C: Monitoring, Analysis, and Categorization

Granular should monitor household activity without executing the payments themselves at launch.

- analyze purchase and billing patterns
- categorize spending and obligations
- surface inflation, drift, and recurring-cost changes
- match direct records to payment context where useful
- show a fuller household picture across shopping and bills

### Mode D: Verification Infrastructure

Over time, the platform can support:

- proof-of-purchase workflows
- proof-of-billing workflows
- portable verified records
- partner attestations
- consent and permission logging

## Product Principles

- the direct user-to-retailer and user-to-biller connection is the core of the app
- partner connectivity is not a side feature; it is part of the product core
- manual capture exists to prevent blind spots, not to define the whole company
- the strongest consumer promise is item-level clarity plus provenance

## Strategic Conclusion

The strongest version of Granular is a retailer-connected and biller-connected itemized spending platform that helps users understand what they buy and pay for, while filling the remaining gaps through manual capture and review.`,

  mvp: `# Coverage and MVP Definition

> Goal: Build for the full household picture, then launch with a focused but complete first version

## Scope of Coverage

Granular should aim to cover more than classic shopping over time. The household picture includes:

- grocery and pharmacy
- household essentials
- online shopping
- utilities and energy
- telecom and subscriptions
- insurance where relevant
- mortgage and recurring housing obligations
- other household services
- cash transactions through manual input

The product promise should be that the app aims to leave nothing important out.

## Included in MVP

- user accounts and authentication
- direct retailer and biller integrations for an initial focused partner set
- digital receipt and invoice import
- manual receipt and invoice scanning
- OCR extraction with user review
- itemized purchase and payment records
- searchable history
- basic trends and categorization
- basic overspend and visibility controls
- provenance labels and verification states
- manual entry support for non-connected providers and cash spending

## Excluded from MVP

- payments executed through the app
- broad universal retailer and biller coverage on day one
- stored value, wallet, or custody features
- cashback as a launch feature
- complex loyalty mechanics
- tokenized or speculative crypto features

## Best Early Experience

The earliest user value should be:

1. connect to a focused set of retailers or billers where direct data exists
2. import or scan what is still missing
3. review OCR and provenance labels
4. search and understand the full household record
5. act on early trends and overspend signals

## MVP Success Standard

The MVP is successful when users can trust that Granular gives them a clearer, more complete picture of household spending than a bank statement or budgeting app alone.`,

  revenue: `# Revenue Model and Go-To-Market

> Launch as a software platform first, then expand monetization once trust and retention are proven

## Revenue Stages

### Stage 1: Consumer Subscription

The first revenue should come from consumer utility.

Potential premium features:

- overspend alerts
- inflation detection
- biller drift alerts
- advanced reporting
- broader history windows
- verified export packages
- fuller household-visibility controls

### Stage 2: Retailer and Biller Integration Revenue

Potential B2B revenue streams:

- integration fees
- onboarding fees
- premium digital receipt and invoice infrastructure
- verification and proof APIs
- support and claims workflows

### Stage 3: Infrastructure Expansion

After trust and legitimacy are proven:

- provenance infrastructure licensing
- verification services
- auditable permissions workflows
- commerce and billing trust tooling

## Cashback Position

Cashback should be treated only as a later potential option.

- it should not be part of the initial launch proposition
- it should only be evaluated after development, launch, retention, and partner usefulness are proven
- if introduced, it should remain partner-driven and clearly secondary to the product core

## Consumer Motion

Start with users who care deeply about:

- inflation visibility
- overspend prevention
- privacy
- household payment control
- keeping a complete record

## Partner Motion

Start with a small number of focused direct integrations.

The partner motion should prioritize:

- strong data quality
- operational clarity
- real itemization value
- household relevance

Granular should sell the practical value of direct structured data delivery, not abstract blockchain language.

## Strategic Revenue Logic

The strongest business model is software, infrastructure, and premium utility. Granular should avoid relying on personal data resale as the center of its monetization story.`,

  trust: `# Trust, Blockchain, and Regulatory Position

> Trust should sit underneath the platform, not become the consumer-facing gimmick

## Why Blockchain Fits

Blockchain should be used only where it clearly improves trust, proof, and interoperability.

### Off-Chain

Sensitive data should remain off-chain:

- receipt images
- invoice contents
- user identities
- budgets
- analytics
- behavioral insights

### On-Chain or Anchored

Verification data can be anchored selectively:

- receipt hashes
- invoice hashes
- timestamps
- partner attestations
- permission and consent receipts
- proof references

This creates a verifiable trust layer without turning Granular into a crypto product.

## Regulatory Position

Granular should launch as a technical service provider.

At launch, the company should:

- ingest and normalize receipt and invoice data
- monitor, analyze, and categorize payments and obligations
- provide consumer visibility and purchase intelligence
- avoid moving funds
- avoid executing payments
- avoid custody or stored-value features

The regulatory perimeter should only be reassessed later if Granular adds payment initiation, held funds, stored value, wallet custody, or licensed financial execution.

## Trust Principles

- privacy-first by default
- provenance labels on important records
- consent and permissions that are auditable
- verification as infrastructure rather than marketing theater
- software and infrastructure before regulated financial expansion

## Trust Outcome

Granular should feel like a product that helps users understand their money without forcing them into surveillance-heavy banking, loyalty, or crypto narratives.`,

  rollout: `# Architecture and Rollout Strategy

> Build the core domains first, then stage expansion around proof of value and operational readiness

## Technical Architecture Direction

Granular should begin with a modular monolith and treat these domains as first-class:

- users and auth
- retailer and biller API connectivity
- receipt and invoice ingestion
- OCR and review
- normalization
- purchases
- bills and obligations
- matching and reconciliation
- search
- trends and categorization
- alerts
- exports
- audit and provenance
- consent and permissions
- manual-input exception handling

## Data Model Priorities

Each important record should preserve:

- purchase events
- billing events
- payment obligations
- receipt and invoice artifacts
- source provenance
- verification state
- partner attestations
- consent and sharing receipts
- ingestion path such as API, import, scan, or manual entry

## Development Phasing

| Phase | Focus |
|---|---|
| Phase 0 | Company formation, product definition, regulatory scoping, and partner-target selection |
| Phase 1 | Prototype the receipt and invoice pipeline, retailer API architecture, and trust model |
| Phase 2 | Run closed alpha with early direct integrations plus manual fallback flows |
| Phase 3 | Refine categorization, alerts, household visibility, and premium value signals |
| Phase 4 | Run focused retailer and biller pilots, including utilities or other recurring providers |
| Phase 5 | Launch the paid product and prove retention |
| Phase 6 | Expand partner coverage, improve reconciliation, and evaluate later optional features |

## Rollout Rules

- become useful before becoming broad
- prove trust before adding adjacent finance features
- validate direct integrations with focused pilots
- keep manual capture strong enough to preserve household completeness
- let optional features come only after the software core is stable

## Rollout Conclusion

Granular should launch as a disciplined visibility platform: connected where possible, manually complete where needed, and built to expand into trust infrastructure only after the core household record is working well.`
};

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const inlineFormat = (value) =>
  escapeHtml(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

function renderMarkdown(markdown) {
  const lines = markdown.split("\n");
  const html = [];
  let listType = null;
  let inBlockquote = false;
  let inTable = false;

  const closeList = () => {
    if (listType) {
      html.push(`</${listType}>`);
      listType = null;
    }
  };

  const closeBlockquote = () => {
    if (inBlockquote) {
      html.push("</blockquote>");
      inBlockquote = false;
    }
  };

  const closeTable = () => {
    if (inTable) {
      html.push("</tbody></table></div>");
      inTable = false;
    }
  };

  const cells = (line) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => inlineFormat(cell.trim()));

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      closeList();
      closeBlockquote();
      closeTable();
      continue;
    }

    if (trimmed.startsWith("|") && lines[i + 1]?.trim().startsWith("|---")) {
      closeList();
      closeBlockquote();
      const headerCells = cells(trimmed).map((cell) => `<th>${cell}</th>`).join("");
      html.push(`<div class="table-wrap"><table><thead><tr>${headerCells}</tr></thead><tbody>`);
      inTable = true;
      i += 1;
      continue;
    }

    if (inTable && trimmed.startsWith("|")) {
      const rowCells = cells(trimmed).map((cell) => `<td>${cell}</td>`).join("");
      html.push(`<tr>${rowCells}</tr>`);
      continue;
    }

    closeTable();

    if (trimmed.startsWith(">")) {
      closeList();
      if (!inBlockquote) {
        html.push("<blockquote>");
        inBlockquote = true;
      }
      html.push(`<p>${inlineFormat(trimmed.replace(/^>\s?/, ""))}</p>`);
      continue;
    }

    closeBlockquote();

    const heading = trimmed.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineFormat(heading[2])}</h${level}>`);
      continue;
    }

    const unordered = trimmed.match(/^-\s+(.*)$/);
    if (unordered) {
      if (listType !== "ul") {
        closeList();
        html.push("<ul>");
        listType = "ul";
      }
      html.push(`<li>${inlineFormat(unordered[1])}</li>`);
      continue;
    }

    const ordered = trimmed.match(/^\d+\.\s+(.*)$/);
    if (ordered) {
      if (listType !== "ol") {
        closeList();
        html.push("<ol>");
        listType = "ol";
      }
      html.push(`<li>${inlineFormat(ordered[1])}</li>`);
      continue;
    }

    closeList();
    html.push(`<p>${inlineFormat(trimmed)}</p>`);
  }

  closeList();
  closeBlockquote();
  closeTable();
  return html.join("");
}

document.querySelectorAll("[data-doc]").forEach((section) => {
  section.innerHTML = renderMarkdown(docs[section.dataset.doc]);
});

const menuButton = document.querySelector(".menu-button");
const mobilePanel = document.querySelector(".mobile-panel");
const navLinks = [...document.querySelectorAll("nav a, .section-tabs a")];

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  mobilePanel.hidden = !isOpen;
  document.body.classList.toggle("menu-open", isOpen);
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    mobilePanel.hidden = true;
    document.body.classList.remove("menu-open");
  });
});

const sections = [...document.querySelectorAll(".document-section")];
const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) {
      return;
    }

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-24% 0px -62% 0px", threshold: [0.08, 0.2, 0.35] }
);

sections.forEach((section) => observer.observe(section));
