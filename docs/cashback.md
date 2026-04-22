# Granular Cashback System

> Working name: Receipt Accounts  
> Date: April 2026  
> Purpose: Strategy and product model for adding user cashback to Granular

## 1. Executive Summary

Granular can add a cashback system that rewards users for eligible purchases while strengthening the app's core promise: item-level financial clarity, privacy, and control.

The cashback system should not be built like a traditional loyalty program that collects personal behavior for hidden profiling. It should be built as a transparent rewards layer where users can choose offers, understand why cashback is available, and receive value without surrendering their full purchase history to retailers or advertisers.

The strongest model is:

**Granular helps users understand what they bought. Cashback helps users save money when eligible purchases match clear, opt-in reward rules.**

Cashback should be introduced after the receipt intelligence loop is working, because accurate itemized purchase data is the foundation for reliable rewards.

## 2. Strategic Fit

Granular is already designed to know, locally and privately, what a user bought from receipts, imports, and retailer integrations. That makes cashback a natural extension if it is handled carefully.

Cashback supports the business by:

- increasing user retention
- giving users a direct financial benefit
- creating a retailer and brand partnership channel
- making receipt capture more habitual
- strengthening Premium value when combined with alerts and savings insights
- creating a privacy-respecting alternative to traditional loyalty schemes

Cashback should never weaken the trust position. If users feel that cashback exists to harvest their data, it will damage the brand.

## 3. Core Cashback Principle

Cashback must be:

- opt-in
- clearly funded
- transparent to the user
- tied to explicit offers or merchant rules
- separated from the user's full private purchase history
- auditable through a user-visible rewards ledger
- designed to avoid selling personal purchase profiles

The user should always be able to answer:

- Why did I receive this cashback?
- Who funded it?
- What purchase qualified?
- When will it become payable?
- What data was shared, if any?

## 4. Recommended Cashback Model

Granular should use a hybrid cashback model with three reward sources.

### 4.1 Retailer-Funded Cashback

Retailers fund cashback on eligible purchases to encourage digital receipt adoption, repeat purchases, or specific category behavior.

Example:

- 2% cashback at a connected grocery retailer
- GBP1 cashback after three eligible pharmacy purchases
- 5% cashback on a retailer's digital receipt pilot launch week

This fits Granular's retailer proposition because it gives retailers a privacy-aware incentive tool without requiring every customer to join a traditional loyalty program.

### 4.2 Brand or Product-Funded Cashback

Brands fund cashback on specific products or categories that can be validated through itemized receipts.

Example:

- GBP0.50 cashback on a specific household item
- 10% cashback on a participating health product
- bundle reward when two eligible products appear on the same receipt

This is where Granular's item-level data creates a strong advantage. Merchant-only transaction apps cannot reliably verify product-level offers.

### 4.3 Granular-Funded Promotional Cashback

Granular can fund limited promotional cashback during onboarding or special campaigns.

Example:

- first receipt reward
- cashback boost for completing setup
- limited referral reward after a verified active user completes a receipt flow

This should be used carefully because company-funded cashback affects margin. It is useful for testing behavior, but partner-funded cashback should be the long-term model.

## 5. What Cashback Should Not Be

Cashback should not become:

- a hidden data resale program
- a replacement for the core receipt intelligence product
- a reason to push users toward unnecessary spending
- a generic coupon wall
- a loyalty scheme disguised as privacy-first finance
- a system that requires users to connect banks before they receive value

Granular should avoid reward mechanics that encourage poor financial behavior. The cashback layer should support smarter spending, not increase waste.

## 6. User Experience

### 6.1 Cashback Home

The app should include a Cashback area where users can see:

- available offers
- activated offers
- pending cashback
- confirmed cashback
- paid cashback
- expired offers
- total saved
- rules for each offer

This area should be clear and practical, not cluttered with aggressive promotions.

### 6.2 Offer Detail

Each offer should show:

- cashback amount or percentage
- eligible retailer, product, or category
- start and end date
- maximum reward
- quantity limits
- whether activation is required
- expected confirmation time
- payout status rules
- data sharing explanation

### 6.3 Receipt-Based Claim Flow

The simplest early flow:

1. User activates an offer.
2. User shops normally.
3. User scans or imports the receipt.
4. Granular checks the receipt locally where possible.
5. Eligible items are marked for claim.
6. A minimal claim record is submitted for verification.
7. Cashback moves from pending to confirmed after approval.

### 6.4 Connected Retailer Flow

For connected retailers:

1. User activates an offer.
2. Retailer sends structured receipt or basket data.
3. Granular matches the basket to the offer.
4. Cashback is automatically added to the user's pending balance.
5. Confirmation occurs after return and cancellation windows pass.

This creates the best experience but should not be required for launch.

## 7. Cashback States

Granular should use clear reward states.

| State | Meaning |
|---|---|
| Available | User can activate or use the offer |
| Activated | User opted into the offer |
| Detected | Receipt appears to contain an eligible purchase |
| Pending | Claim submitted or awaiting validation |
| Confirmed | Reward approved and payable after any holding period |
| Paid | Reward has been transferred or redeemed |
| Rejected | Claim failed because it did not meet rules |
| Expired | Offer window ended |
| Reversed | Reward was removed after return, refund, or fraud review |

These states should be visible in the user's rewards ledger.

## 8. Privacy Architecture

Cashback must follow Granular's local-first privacy model.

### 8.1 Local Matching First

Where possible, offer matching should happen on-device using:

- merchant name
- receipt date
- item names
- quantities
- prices
- offer rules downloaded to the device

The full receipt should not be shared by default just because an offer exists.

### 8.2 Minimal Claim Data

When verification requires a backend or partner, Granular should submit the smallest claim record possible.

A claim record may include:

- offer ID
- anonymized user or wallet ID
- retailer ID
- transaction date
- eligible line item identifiers
- quantity
- purchase amount
- receipt proof token or cropped proof where required

It should avoid sharing unrelated basket items.

### 8.3 User Consent

Users should explicitly accept cashback terms. For each offer, the app should explain whether any claim data will be shared with Granular, the retailer, a brand partner, or a rewards processor.

### 8.4 Separation From Purchase History

The cashback system should not require Granular to centralize full purchase histories. Reward claims should be separate from the user's complete local financial record.

## 9. Data Model

The system should support these core objects.

### Offer

- offer ID
- sponsor type: retailer, brand, Granular, affiliate
- sponsor name
- reward type: percentage, fixed amount, threshold, bundle
- eligibility rules
- start and end date
- activation requirement
- maximum reward per user
- maximum campaign budget
- validation method
- data sharing terms

### Activation

- user ID or anonymous reward wallet ID
- offer ID
- activation timestamp
- consent version
- expiry timestamp

### Claim

- claim ID
- offer ID
- user reward wallet ID
- source: receipt scan, digital import, retailer integration, card-linked signal
- eligible line items
- claimed amount
- status
- validation notes
- created timestamp
- confirmed timestamp

### Reward Ledger

- ledger entry ID
- user reward wallet ID
- claim ID
- amount
- currency
- state
- available date
- paid date
- reversal reason, if applicable

## 10. Reward Funding And Unit Economics

Cashback should be funded from one of four sources:

1. retailer campaign budget
2. brand campaign budget
3. affiliate or referral commission
4. Granular promotional budget

Granular can earn revenue through:

- a percentage of funded cashback campaign spend
- fixed campaign setup fees
- retailer or brand platform fees
- affiliate commission spread
- premium uplift from users who save more money through the app

Example structure:

- Brand funds GBP1.00 user cashback per eligible purchase.
- Brand pays Granular GBP1.25 per validated purchase.
- User receives GBP1.00.
- Granular retains GBP0.25 to cover processing, verification, and margin.

The app should disclose user-facing cashback clearly, while commercial partner fees can remain part of standard business contracts.

## 11. Payout Options

Granular should support staged payout options.

### Early Stage

- cashback balance inside the app
- gift card redemption
- premium subscription credit

### Later Stage

- bank transfer
- card payout
- digital wallet payout
- charity or social impact donation option

Direct cash payout may require additional compliance, fraud checks, and payment infrastructure. It should be added after the claims system is reliable.

## 12. Fraud And Abuse Controls

Cashback creates fraud risk. Controls should be designed early.

Recommended controls:

- duplicate receipt detection
- receipt image hash checks
- merchant/date/amount validation
- item-level consistency checks
- maximum claim limits
- cooling-off period before payout
- return and refund reversal handling
- suspicious activity review
- device and account risk signals
- manual review queue for high-value claims

The app should communicate delays as normal reward confirmation, not as user blame.

## 13. Compliance Considerations

The cashback system may touch:

- consumer protection rules
- advertising standards
- financial promotions rules
- tax reporting considerations
- payment services rules if direct cash payouts are offered
- data protection and consent requirements

Granular should review legal requirements before launching payout features, especially direct cash transfer, stored balances, and cross-border campaigns.

## 14. Cashback And Premium

Cashback should support Premium without making free users feel punished.

Recommended approach:

- Free users can access standard cashback offers.
- Premium users may receive cashback boosts, better tracking, automated offer matching, or advanced savings reports.
- Premium should not be required for basic cashback eligibility.

Premium-friendly features:

- cashback optimization alerts
- missed cashback detection
- retailer savings comparisons
- household cashback summary
- cashback plus budget impact reporting

This keeps cashback aligned with the Premium promise: control, prevention, and practical savings.

## 15. Cashback And Social Responsibility

Granular's Social tab can include an optional reward donation flow.

Users may choose to:

- keep cashback
- apply cashback as Premium credit
- donate cashback to approved social responsibility projects

Donation should be optional and transparent. Granular should not use private purchase behavior to pressure users into social giving.

## 16. Rollout Plan

### Phase 1: Receipt-Based Cashback Test

Launch with a small number of simple offers.

Scope:

- manual offer activation
- receipt scan validation
- pending and confirmed reward states
- app-based cashback ledger
- limited payout as Premium credit or gift card

Goal:

Validate that cashback increases receipt capture and user retention.

### Phase 2: Brand/Product Offers

Add product-level cashback using itemized receipt matching.

Scope:

- product-specific eligibility
- quantity limits
- duplicate receipt protection
- partner-funded campaigns

Goal:

Prove that item-level receipt intelligence creates a unique rewards advantage.

### Phase 3: Retailer Pilot Cashback

Add connected retailer rewards.

Scope:

- retailer-funded offers
- automated receipt ingestion
- automatic cashback detection
- return window handling

Goal:

Show retailers that Granular can drive digital receipt adoption and customer value without forcing loyalty enrollment.

### Phase 4: Full Rewards Wallet

Expand into a mature rewards system.

Scope:

- multiple payout options
- cashback boosts
- household cashback views
- campaign reporting for partners
- fraud review tooling
- partner dashboard

Goal:

Turn cashback into a durable revenue and retention layer.

## 17. Success Metrics

### User Metrics

- offer activation rate
- receipt capture lift
- cashback claim rate
- confirmed cashback per active user
- repeat claim behavior
- retention among cashback users
- trust feedback after claims

### Business Metrics

- campaign revenue
- cashback-funded margin
- partner renewal rate
- cost per confirmed claim
- fraud rate
- support tickets per claim
- Premium conversion influenced by savings features

### Retailer Metrics

- digital receipt adoption lift
- eligible transaction volume
- offer redemption rate
- repeat purchase behavior
- campaign budget usage
- partner satisfaction

## 18. Key Risks And Mitigations

| Risk | Mitigation |
|---|---|
| Users perceive cashback as data harvesting | Use opt-in offers, clear sponsor labels, and minimal claim data |
| Fraud increases cost | Add duplicate detection, limits, holding periods, and review queues |
| Cashback encourages overspending | Frame offers around planned purchases and savings, not impulse buying |
| Partner verification is complex | Start with simple receipt-based campaigns and limited partners |
| Payout compliance becomes heavy | Begin with gift cards or Premium credit before direct cash transfers |
| Offer clutter damages the app | Keep Cashback as a focused tab with relevant, transparent offers |

## 19. Product Positioning

Cashback should be positioned as part of financial control, not shopping stimulation.

Recommended message:

**Granular helps you understand what you bought, spot where money is going, and earn cashback when your normal purchases qualify.**

Avoid messages that imply users should spend more to earn more. The brand should stay aligned with budgeting, privacy, and household control.

## 20. Strategic Conclusion

Cashback can become a powerful layer in Granular if it is built with the same discipline as the rest of the product.

The opportunity is not to copy traditional loyalty programs. The opportunity is to create a privacy-first cashback system that rewards users for eligible purchases while keeping their full financial life under their control.

The right model is:

- receipt intelligence first
- transparent offer matching second
- partner-funded cashback third
- mature rewards wallet after trust and accuracy are proven

Done well, cashback gives users a direct financial benefit, gives partners a privacy-aware campaign channel, and gives Granular a new revenue and retention engine without abandoning its core trust promise.

