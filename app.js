const docs = {
  proposal: `# Granular Business Proposal

> Working name: Receipt Accounts
> Category: Consumer FinTech / Retail Data Infrastructure
> Stage: Pre-seed / MVP planning
> Date: April 2026

## Executive Summary

Granular is a privacy-first personal finance and digital receipt platform that helps people understand what they actually bought, not just where they spent money.

Most banking and budgeting apps stop at merchant-level transaction data: "Tesco - GBP84.20" or "Pharmacy - GBP28.40." Granular turns receipts and digital purchase records into item-level spending intelligence, giving users a clearer view of household costs, repeat purchases, overspend patterns, and retailer-by-retailer behavior.

The product begins as a consumer app for receipt capture, itemized purchase history, search, budgets, and alerts. Over time, it expands into a retailer-connected receipt infrastructure layer that can automate digital receipt delivery and basket ingestion.

Granular's strategic advantage is trust. The product is designed around a local-first privacy promise: detailed personal purchase histories stay on the user's device by default, with backend systems used only for minimal coordination, optional sync, integrations, and account services. This creates a more credible alternative to loyalty-led data capture and surveillance-heavy consumer finance tools.

## The Problem

Consumers increasingly need better control over everyday spending, especially in high-frequency categories such as groceries, pharmacy, household goods, commuting, and family essentials.

Existing tools are too shallow:

- Banking apps show transactions, not the item-level reasons behind them.
- Budgeting apps often depend on broad categories that hide the real spending behavior.
- Receipt apps usually store documents instead of creating financial intelligence.
- Loyalty programs collect basket-level data for retailers, not primarily for the user's benefit.

The result is a visibility gap. A user may know they spent GBP84.20 at a store, but they do not know which items caused the total, whether the same staples are rising in price, or how their household behavior is changing over time.

There is also a trust gap. Purchase history is sensitive. It can reveal income pressure, health needs, household structure, lifestyle, routines, and financial stress. Many users want better financial tools but do not want to trade their private life for convenience.

## The Insight

The real financial event is not only the payment. It is the basket.

A payment shows that money moved. A basket explains why.

Granular is built on the idea that personal finance becomes more useful when a record includes:

- retailer
- date and time
- line items
- quantities
- item-level prices
- discounts
- payment method where available
- impact on the user's spending picture

This turns vague transaction history into practical financial understanding.

## The Solution

Granular gives users a purchase-aware financial view through:

- receipt scanning
- digital receipt import
- searchable itemized history
- optional card or bank connection
- manual balance mode for privacy-conscious users
- budgets and spending limits
- overspend and price-change alerts
- retailer integrations where available

The intended user flow is simple:

1. A user scans a paper receipt or imports a digital receipt.
2. Granular extracts and organizes the line items.
3. The user can search, review, and track purchases by item, store, card, and time period.
4. Granular highlights patterns such as overspend, repeat-item inflation, and retailer drift.
5. Retailer integrations later reduce manual effort by delivering structured receipts automatically.

## Value Proposition

### For Consumers

Granular helps users:

- see exactly what they bought
- understand which items and retailers drive spending
- manage spending across multiple cards
- plan budgets from real purchase behavior
- reduce paper receipt clutter
- export their own records
- get useful financial insight without giving up privacy

### For Retailers

Granular helps retailers:

- reduce paper receipt costs
- modernize digital receipt delivery
- improve post-purchase customer experience
- support returns and proof-of-purchase workflows
- offer privacy-aware receipt infrastructure without forcing loyalty enrollment

## Product Principles

### Privacy by Design

Detailed purchase history should stay local by default. The company should not depend on collecting centralized personal spending profiles as its core business model.

### Manual-First Utility, Automated Future

The product should be useful before broad retailer integrations exist. Manual receipt scan and digital import create the first product wedge; automation improves the experience later.

### User Benefit Before Data Extraction

Granular should help the user first. Retailer value should come from receipt infrastructure, customer experience, and operational tooling rather than hidden consumer profiling.

## Core Product Features

- Receipt scan and OCR review
- Digital receipt import
- Itemized purchase history
- Search by item, store, date, and category
- Purchase-aware spending dashboard
- Manual balance mode
- Optional card and bank linking
- Multi-card spend views
- Budgets and spending limits
- Overspend alerts
- Repeat-item inflation detection
- Retailer drift alerts
- Export to spreadsheet, PDF, or Excel

## Market Opportunity

Granular sits between three large trends:

- rising consumer demand for practical spending control
- retailer pressure to digitize receipts and reduce paper waste
- growing public resistance to unnecessary data collection

The initial market should focus on high-frequency household spending where item-level visibility matters most: grocery, pharmacy, household goods, and everyday retail.

## Business Model

Granular should use a mixed consumer and B2B model.

### Consumer Revenue

- Free tier for receipt intelligence and basic spending visibility
- Premium Individual for alerts, advanced budgets, multi-card controls, and deeper trends
- Premium Household for shared planning, household controls, and reporting

### Retailer / B2B Revenue

- integration setup fees
- platform or usage fees for digital receipt delivery
- white-label digital receipt tooling
- support and workflow tooling for retailer operations

The company should avoid relying on resale of personal consumer data. The stronger revenue story is software, infrastructure, and premium utility.

## Competitive Position

Granular is differentiated from:

- budgeting apps, which usually stop at categories
- banking apps, which rarely show item-level basket data
- receipt scanners, which store documents but often lack financial intelligence
- loyalty platforms, which collect purchase data primarily for the retailer

Granular combines item-level financial understanding, retailer-connected receipt infrastructure, and a privacy-first architecture.

## Go-To-Market Strategy

The first wedge should be consumer utility:

**"See not just where your money went, but exactly what you bought."**

Launch with receipt intelligence, search, basic spending views, and privacy-first messaging. Then add paid control features such as alerts and advanced budgets. Retailer integrations should follow once user value and repeat behavior are proven.

## Key Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Retailer integrations take longer than expected | Start with manual scan and digital receipt import |
| OCR and item normalization are imperfect | Use user review, correction flows, and continuous normalization |
| Users hesitate to connect banks | Offer manual balance mode and optional linking |
| Trust concerns slow adoption | Make local-first privacy clear in onboarding and product UI |
| Product scope becomes too broad | Keep the first promise focused on item-level spending clarity |

## Investment Case

Granular addresses a practical user problem and a real retailer infrastructure need. It has a credible wedge, a staged rollout path, and a differentiated trust position.

The core thesis is simple:

People want better financial visibility, but they do not want to sell their privacy to get it.

Granular can deliver that visibility while building toward a broader privacy-first receipt and purchase intelligence network.`,

  businessPlan: `# Granular Business Plan

> Working name: Receipt Accounts
> Category: Consumer FinTech / Retail Data Infrastructure
> Stage: Pre-seed / MVP planning
> Date: April 2026

## 1. Business Overview

Granular is a privacy-first personal finance and digital receipt platform. It helps users understand spending at item level while keeping detailed purchase and financial data under the user's control.

The business has two connected parts:

- a consumer app for itemized spending clarity, budgets, alerts, and records
- a retailer-facing infrastructure layer for digital receipt delivery and structured post-purchase experiences

## 2. Mission

To give people a truthful, item-level understanding of their spending without requiring them to give up personal privacy.

## 3. Vision

To become the trusted layer between payment events and financial understanding, while establishing a new privacy-first standard for digital receipts and purchase intelligence.

## 4. Product Summary

Granular allows users to:

- scan paper receipts
- import digital receipts
- view itemized purchase history
- search by item, store, date, and category
- track spending by card, store, item, and time period
- optionally connect cards or bank accounts
- use manual balance mode without bank linking
- set budgets and spending limits
- receive overspend and price-change alerts
- export their own records

The product is designed to store detailed purchase history locally by default. Optional backend systems support account services, integrations, sync, and coordination without making centralized personal purchase profiles the core business asset.

## 5. Market Need

### Consumer Need

Consumers want practical answers to questions such as:

- What did I actually buy?
- Which items are driving my grocery bill?
- Which retailers are causing overspend?
- What is happening across my different cards?
- How much did essentials cost this month compared with last month?

Merchant-level transaction data does not answer those questions.

### Retailer Need

Retailers need:

- lower paper receipt costs
- better digital receipt delivery
- improved post-purchase customer experience
- easier proof-of-purchase and returns support
- privacy-aware innovation beyond traditional loyalty programs

## 6. Target Customers

### Primary Consumer Segments

- budget-conscious households
- users managing multiple payment cards
- people frustrated by delayed or shallow banking app data
- privacy-conscious consumers
- people who frequently shop in grocery, pharmacy, and household categories

### Primary Retailer Segments

- grocery chains
- pharmacies
- household goods retailers
- high-frequency retail categories where receipts, returns, and repeat purchases matter

## 7. Value Proposition

### For Users

- understand spending at item level
- replace paper receipt clutter with usable records
- monitor trends across stores and items
- manage spending across cards
- create budgets based on real behavior
- receive alerts before overspend becomes a larger problem
- maintain privacy and control over purchase history

### For Retailers

- reduce paper receipt costs
- modernize post-purchase experience
- deliver structured digital receipts
- support easier returns and proof of purchase
- participate in privacy-aware customer infrastructure

## 8. Privacy and Trust Strategy

Privacy is a core strategy, not only a compliance requirement.

Granular should commit to:

- local-first storage for detailed purchase history
- clear data-source labels
- user-controlled exports
- easy deletion
- optional cloud sync only with consent
- no default business model based on selling personal consumer profiles

This position matters because users increasingly understand that purchase history is sensitive. Granular's promise is useful insight without unnecessary surveillance.

## 9. Revenue Model

### Consumer Revenue

Granular should use freemium pricing.

Free includes:

- core receipt intelligence
- itemized history
- basic search
- basic spending dashboard
- manual balance mode

Premium Individual includes:

- overspend alerts
- repeat-item inflation detection
- advanced budgets
- multi-card controls
- deeper comparisons
- advanced exports

Premium Household includes:

- shared household views
- household budgets
- member support
- shared reports and planning tools

### Retail / B2B Revenue

Retailer revenue should come from:

- integration setup fees
- platform or usage fees
- white-label digital receipt delivery
- enterprise support
- retailer workflow tooling

The business should avoid depending on personal data resale.

## 10. Go-To-Market Strategy

### Stage 1: Consumer Wedge

Launch a useful consumer product focused on:

- receipt capture
- digital receipt import
- itemized history
- privacy-first onboarding
- high-frequency household spending categories

Core message:

**"See not just where your money went, but exactly what you bought."**

### Stage 2: Control Layer

Add budgets, alerts, comparison views, and multi-card controls. This is where Premium becomes credible.

### Stage 3: Retailer Pilot

Partner with one or two focused retailers in grocery, pharmacy, or household goods. Validate structured receipt delivery and automated basket ingestion.

### Stage 4: Network Expansion

Expand integrations, improve item normalization, and build retailer tooling after consumer retention and paid demand are proven.

## 11. Operating Plan

### Early Product Priorities

1. Receipt scan and import
2. Itemized purchase history
3. Search and purchase detail
4. Spending dashboard
5. Budgets and alerts
6. Exports
7. Optional cards and bank connection
8. Retailer integrations

### Early Team Needs

- product and UX
- mobile engineering
- OCR and receipt parsing
- backend and integration engineering
- privacy and security architecture
- customer discovery and retailer partnerships

## 12. Development Roadmap

### Phase 1: MVP

- receipt upload
- OCR review
- item parsing
- purchase detail page
- searchable history
- basic spending view
- manual balance mode

### Phase 2: Utility Expansion

- budgets
- item and store trends
- multi-card views
- exports
- improved categorization
- alerts

### Phase 3: Automation

- optional card signals
- receipt-to-payment matching
- digital receipt imports
- first retailer integrations

### Phase 4: Network Growth

- additional retailer integrations
- normalized item database
- household plan
- retailer tooling
- stronger analytics and reporting

## 13. Competitive Strategy

Granular competes by combining:

1. item-level financial understanding
2. privacy-first architecture
3. retailer-connected digital receipt infrastructure

This separates it from traditional budgeting apps, banking interfaces, loyalty programs, and document-style receipt scanners.

## 14. Key Risks

### Integration Risk

Retailer adoption may take time.

Response: start with manual receipts, digital imports, and selective high-value pilots.

### Accuracy Risk

Receipt parsing and matching may be imperfect early.

Response: use confirmation workflows, editable records, and continuous normalization improvements.

### Trust Risk

Users may assume any finance app is harvesting data.

Response: make the local-first model visible in onboarding, settings, and data-source explanations.

### Complexity Risk

Too many features could obscure the product.

Response: lead with one promise: understand what you bought and where your money is going.

## 15. Success Metrics

### Early Metrics

- first receipt completion rate
- receipt-to-review rate
- weekly active users
- repeat receipt uploads
- search usage
- budget creation rate
- retention after first itemized record

### Monetization Metrics

- alert engagement
- premium conversion from alert previews
- trial-to-paid conversion
- paid retention
- household plan interest

### Retailer Metrics

- integration count
- receipt ingestion volume
- successful delivery rate
- match rate
- retailer renewal interest

## 16. Funding Use

Initial funding should support:

- mobile app development
- receipt parsing and item normalization
- privacy and security architecture
- backend coordination services
- product design and testing
- retailer pilot integrations
- early user acquisition

## 17. Strategic Conclusion

Granular addresses a meaningful gap in consumer finance and retail infrastructure. People want better spending visibility, but they are increasingly unwilling to surrender sensitive personal data to get it.

Granular's opportunity is to build a trusted product that begins with item-level receipt intelligence and expands into a privacy-first digital receipt network.

The long-term company should be built around a clear promise:

**useful financial insight, practical control, and purchase data that remains under the user's authority.**`,

  monetization: `# Granular Premium and Monetization Strategy

> Working name: Receipt Accounts
> Date: April 2026

## Core Principle

Premium should not mean "more charts."

Premium should mean:

**less overspend, earlier warnings, and better control over recurring household behavior.**

That is a clearer reason to pay than generic analytics. Users are more likely to pay when the product helps them avoid a bad outcome, save money, reduce stress, or manage household spending with confidence.

## Free vs Paid Thesis

### Free Product

The free product should prove the core product truth:

- receipt capture is useful
- digital receipt import is useful
- itemized history is better than merchant-only transaction feeds
- the local-first privacy promise is credible
- users can get value without connecting a bank

### Paid Product

The paid product should help users act on their purchase data:

- avoid overspending
- spot rising costs earlier
- manage spend across multiple cards
- control repeat behavior at specific retailers
- plan household essentials spending
- export and report with less manual effort

## Best First Paying User

The strongest first paying user is:

- budget-aware
- privacy-conscious
- shopping frequently for household essentials
- using multiple payment methods
- frustrated by shallow banking app views
- interested in warnings and control, not only reports

This is sharper than trying to serve "everyone with receipts."

## Free Plan

### Included Features

- receipt scan
- digital receipt import
- itemized purchase history
- searchable receipt archive
- basic spending dashboard
- optional manual balance mode
- basic store and item views
- limited export

### Purpose

The free plan should create the first aha moment:

**"I can finally see what I actually bought."**

Free should be generous enough to build trust and habit, but limited enough that users with real control needs can clearly understand why Premium exists.

## Premium Individual

### Premium Promise

Granular Premium helps users spot overspend before it becomes a problem.

### Paid Features

- overspend alerts
- repeat-item inflation detection
- retailer drift alerts
- advanced budgets
- threshold warnings
- multi-card spend alerts
- longer comparison history
- deeper store and item trends
- advanced exports and reports

### Upgrade Logic

Premium should unlock action and prevention. The user should feel that paid features help them avoid future waste, not simply decorate past spending.

## Premium Household

### Household Promise

Granular Household helps families and shared homes coordinate essential spending with less confusion.

### Paid Features

- shared household views
- household budgets
- member-level spending context
- combined grocery and essentials tracking
- shared reports
- extra member support
- household planning controls

### Packaging Note

Household should launch only after individual retention is proven, unless early user research shows shared planning is a major conversion driver.

## Retail / B2B Monetization

The retailer side should be sold as:

- digital receipt infrastructure
- post-purchase customer experience
- proof-of-purchase and returns support
- privacy-aware receipt modernization

It should not be sold primarily as:

- hidden consumer profiling
- broad personal-data analytics
- market research resale

### First Retailer Revenue Lines

- integration setup fees
- platform or usage fees
- white-label digital receipt delivery
- retailer workflow tooling
- enterprise support

## Recommended Pricing Logic

Exact pricing should be tested, but the logic should be:

- free creates habit and trust
- Premium Individual saves money, time, or stress
- Premium Household expands coordination and control
- B2B pricing reflects integration complexity and receipt volume

The paid proposition should feel financial and practical.

## Upgrade Triggers

Premium prompts should appear when the user feels the problem.

Best upgrade moments:

- repeated overspend at one retailer
- grocery costs trending upward
- user regularly uses more than one card
- user tries to create more advanced budget rules
- user hits limited comparison history
- user wants household planning
- user requests detailed export or reporting

Upgrade prompts should not appear randomly. They should be tied to a clear value moment.

## Metrics That Matter

### Consumer Monetization Metrics

- receipt-to-review rate
- repeat itemized history usage
- budget creation rate
- alert engagement
- percentage of users with alert-worthy patterns
- conversion from alert preview prompts
- trial-to-paid conversion
- paid retention
- churn reasons

### Retailer Monetization Metrics

- integration setup time
- receipt ingestion volume
- successful delivery rate
- support burden per partner
- retailer renewal interest
- retailer cost savings from reduced paper receipts

## Features That Should Not Lead Premium

These may support the paid tier, but should not be the headline:

- cosmetic dashboards
- passive historical summaries
- generic charts
- exports alone
- storage alone

Premium should be about control, prevention, and practical household value.

## Monetization Summary

The strongest monetization story is:

**Free shows you what you bought. Premium helps you do something about it.**

Consumer revenue should come from useful control features. Retailer revenue should come from receipt infrastructure and post-purchase workflow value. The business should avoid making personal data resale the center of the model, because privacy is one of Granular's main strategic advantages.`,

  rollout: `# Granular Rollout Strategy

> Working name: Receipt Accounts
> Date: April 2026

## Rollout Goal

Launch Granular in a staged way that proves user value before depending on broad retailer integrations.

The rollout should validate, in order:

1. users care about item-level spending visibility
2. users understand and trust the local-first privacy model
3. users return for control, not just curiosity
4. paid conversion comes from prevention and alerts
5. retailer automation improves an already useful product

## Strategic Rollout Principle

Granular should not launch as a universal real-time finance platform.

The first version should be a focused receipt intelligence product. It should help users understand purchases at item level, build a searchable history, and get a clearer everyday spending picture. Optional cards, bank connections, and retailer integrations should deepen the product after the core loop works.

## Phase 0: Internal Prototype

### Goal

Prove the core product loop internally.

### Scope

- receipt scan or upload
- OCR extraction
- itemized purchase record
- basic merchant and date capture
- searchable history
- simple purchase-aware spending view

### Success Criteria

- team can reliably create itemized purchase records
- users can understand source labels and confidence states
- the app can show a clear purchase detail view
- privacy language is understandable

## Phase 1: Closed Alpha

### Audience

- founder network
- privacy-conscious early adopters
- budget-aware households
- users who already save receipts or track spending manually

### Goal

Validate that item-level receipt history is useful before deeper integrations exist.

### Scope

- manual receipt scan
- digital receipt import
- itemized history
- basic spending dashboard
- optional manual balance mode
- export of personal records

### Metrics

- first receipt completion rate
- repeat receipt upload rate
- weekly active usage
- search and review behavior
- onboarding completion
- qualitative trust feedback

### Exit Criteria

- users return after the first receipt
- users can explain the value in their own words
- onboarding works without bank linking
- the product has a clear first-session aha moment

## Phase 2: Control Beta

### Audience

- strongest alpha users
- household shoppers
- multi-card users
- users managing grocery, pharmacy, and recurring essentials spend

### Goal

Prove the control and paid-value layer.

### Scope

- budgets
- spending limits
- overspend alerts
- retailer drift alerts
- repeat-item inflation detection
- multi-card views
- comparison by week and month

### Metrics

- budget creation rate
- alert engagement
- number of users with alert-worthy patterns
- retention difference between alert users and passive users
- premium waitlist interest
- willingness-to-pay interviews

### Exit Criteria

- users treat Granular as a control tool, not only a receipt archive
- alerts create clear user value
- premium packaging can be tested against real behavior

## Phase 3: Focused Retailer Pilot

### Audience

- one or two high-frequency retailers
- ideal categories: grocery, pharmacy, household goods

### Goal

Validate automation in a narrow, useful category.

### Scope

- retailer API or structured receipt pilot
- automated digital receipt delivery
- basket ingestion
- receipt-to-payment matching where available
- post-purchase receipt experience

### Metrics

- ingestion success rate
- match rate
- purchase-to-app latency
- user trust in automated records
- reduction in manual receipt effort
- retailer operational feedback

### Exit Criteria

- automation increases engagement
- retailer workflow is operationally manageable
- the pilot produces a repeatable integration pattern

## Phase 4: Premium Launch

### Audience

- users with repeat behavior
- users who create budgets
- users who trigger overspend or drift patterns
- households with frequent essential spending

### Goal

Launch paid plans around proven user value.

### Scope

- Premium Individual
- Premium Household
- advanced budgets
- prevention alerts
- longer comparison history
- multi-card controls
- advanced exports and reports

### Metrics

- conversion from alert previews
- trial-to-paid conversion
- paid retention
- churn reasons
- engagement lift among paid users

### Exit Criteria

- users pay for prevention and control
- paid retention is stronger than free retention
- upgrade prompts feel tied to meaningful user moments

## Phase 5: Broader Expansion

### Goal

Expand category coverage and retailer infrastructure after the core product loop is proven.

### Scope

- additional retailer pilots
- stronger item normalization
- improved matching
- more automated imports
- household workflows
- web-based exports and reporting
- retailer admin tooling

### Metrics

- automation coverage
- category expansion retention
- partner pipeline growth
- support burden per integration
- normalized item quality
- active paid households

## Recommended Launch Geography

Start in one geography first.

The best first market should have:

- strong receipt behavior
- high card usage
- clear grocery and pharmacy spend patterns
- a manageable compliance surface
- a simple first currency and product narrative

If testing is easiest in the UK, the first wedge should focus on grocery and pharmacy spending. Expansion should come after the product proves retention and control value.

## What Not To Do Early

- do not make bank linking mandatory
- do not depend on retailer integrations for launch
- do not sell premium as generic analytics
- do not launch across too many categories at once
- do not build a broad enterprise sales motion before consumer pull exists
- do not overpromise real-time balance accuracy

## Rollout Summary

The correct order is:

1. Receipt intelligence
2. Searchable itemized history
3. Budgets and alerts
4. Premium control features
5. Focused retailer pilots
6. Broader infrastructure expansion

This keeps Granular useful from day one while preserving the long-term path toward automated, retailer-connected purchase intelligence.`
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
