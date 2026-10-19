# How a Payment System Works (System Design) — research notes (2026-10-20)

Fetch note: the article was fetched with `curl -sL` and stripped to plain text into `<scratch dir>/sd-raw/payment-system/article.txt`. The two Uber posts were fetched with `curl -sL` (browser user agent) into `uber-payments-platform.txt` and `uber-money-consistency.txt` in the same folder. No source text was committed.

Paywall note: the article ("#114: Payment System Design - Part 1", 2026-01-20) is a paid post. The free part covers the three problems (security, disbursement, reliability) and step 1 of the design (tokenization). It stops at "Ready for the best part?". The footnotes and links of the paid part are not in the free HTML. To explain the rest of the system, the page uses two primary sources from Uber's own engineering blog (S2, S3). The article does not link to them (S2 was published after the article). The page says which parts come from the Uber posts.

Scope note: the article and both posts describe Uber. The page title is the generic "How a Payment System Works"; the lede says that Uber is the example.

Copy check: `python3 scripts/linux_overlap.py content/system-design/payment-system.mdx <scratch dir>/sd-raw/payment-system` finds 2 runs. Both are the exact titles of S1 and S2 in `page.sources` ("uber payment system handles 30 million transactions per", "by design 10 years of uber s payments"). These are proper names (titles), which the brief accepts. Round 1 also found a run in the ledger-balance sentence and 13 runs in the 20-dollar example table; both were rewritten (the table now uses "dollars out" and "dollars in" with the columns in a new order).

## Sources
S1. How Uber Payment System Handles 30 Million Transactions Per Day — The System Design Newsletter (Neo Kim) — https://newsletter.systemdesign.one/p/payment-system-design — accessed 2026-10-20 (raw `article.txt`). Page cite `[1]`.
S2. Zero-Sum by Design: 10 Years of Uber's Payments Platform — Uber Engineering Blog (Nimish Sheth, Manas Kelshikar, Dhirendra Kumar Singh, and others; 2026-08-06) — https://www.uber.com/en-US/blog/ubers-payments-platform/ — accessed 2026-10-20 (raw `uber-payments-platform.txt`). Page cite `[2]`.
S3. Revolutionizing Money Movements at Scale with Strong Data Consistency — Uber Engineering Blog (Aakriti Singla, Simon Wu; 2020-10-02) — https://www.uber.com/en-US/blog/money-scale-strong-data/ — accessed 2026-10-20 (raw `uber-money-consistency.txt`). Page cite `[3]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | 30 million transactions per day | S1 | "How Uber Payment System Handles 30 Million Transactions Per Day" |
| 2 | Gross bookings grew from $50B to $217B over the decade | S2 | "Uber scaled from $50 billion to $217 billion in annualized gross bookings" |
| 3 | Balances for more than 1.2 billion entities | S2 | "maintaining ledger balances for more than 1.2 billion entities" |
| 4 | Security: phone stolen or servers breached; risky to store card data | S1 | "a mobile device could get stolen, or Uber servers could get breached" / "it's highly risky to store sensitive information" |
| 5 | Disbursement: split among driver, Uber, taxes and fees; not directly rider to driver | S1 | "A single payment has to be split across different trip participants:" / "money cannot simply move directly from rider to driver" |
| 6 | Reliability: external systems; failures, timeouts, partial outages | S1 | "Payments include "external systems" such as banks, card networks, and payment providers." / "network failures, timeouts, and partial outages" |
| 7 | App uses the provider SDK to collect card number and CVV | S1 | "such as credit card number & CVV" / "they use payment provider1 SDK2 in the mobile app to collect sensitive details" |
| 8 | SDK sends card data to the provider, not to Uber | S1 | "Software development kit (SDK) doesn't send card information to Uber servers." / "sends it directly to the payment provider" |
| 9 | Provider returns a token that permits charging the card | S1 | "Payment provider then returns a unique token" / "think of it as a (reusable) permission to charge the card" |
| 10 | App uses the token from then on | S1 | "From this point on, mobile app uses the token instead of the credit card." |
| 11 | Token is tied to Uber's account and app, limited uses | S1 | "tied to Uber's account and app, and restricted to specific uses (such as charges made only by Uber)" |
| 12 | Another device or app cannot use it | S1 | "So another mobile device or app cannot use it to charge the card." |
| 13 | Storing card data requires heavy legal compliance | S1 | "It requires heavy legal compliance" |
| 14 | Money order = debits and credits between parties of a real transaction (trip, Uber Eats order) | S2 | "It is a series of debits and credits between the entities involved in the real-world commerce transaction" |
| 15 | Pre-commit check: entries sum to zero | S2 | "One of the validations is to ensure that all entries in any money order sum to zero." |
| 16 | No money created or destroyed | S2 | "That is, no money can ever be created or destroyed." |
| 17 | Double-entry bookkeeping | S2 | "every credit entry on the order has an equivalent debit entry" |
| 18 | $20 trip example: -18, -2 from payer escrow; +18 payee escrow; +2 Uber escrow | S3 | "a simple example of a ridesharing trip with a $20 total fare including a $2 service fee and a $18 trip fare" / "Trip fare 18 Payee Escrow" |
| 19 | Money orders are immutable | S2 | "an order once written can't be changed in any shape or form" |
| 20 | Adjustments are new money orders | S2 | "We write additional money orders to capture the adjustment." |
| 21 | Independent, stateless microservices, each owning a step; Kafka as bus | S2 | "a collection of independent, stateless microservices, each owning a discrete unit of the money movement lifecycle" / "with Apache Kafka® as the underlying messaging bus" |
| 22 | Steps: creation, processing, collection, disbursement | S2 | "money order creation, processing, collection, and disbursement" |
| 23 | Order insertion service creates, publishes, persists | S3 | "It then creates the payment orders, publishes the order data to messaging topics and persists it to OrderStore." |
| 24 | Order processing service routes to providers and records status | S3 | "routes collection and disbursement requests to the corresponding payment service providers" / "with the success or failure status" |
| 25 | Async pipeline carries most money traffic | S2 | "This async pipeline processes the majority of Uber's money traffic today." |
| 26 | Cadence for in-session synchronous flows | S2 | "For user-in-session flows, we used Uber's internal workflow engine - Cadence, to support synchronous payments" |
| 27 | Unique IDs for users, jobs, orders, generated deterministically | S3 | "We use unique identifiers as identifiers of users, jobs, and orders. And we generate the unique identifiers determiniscally." |
| 28 | Processed order IDs give exactly-once processing | S3 | "The processed order unique identifiers are used to guarantee exactly once order processing." |
| 29 | Orders immutable; persisted before processing | S3 | "Our systems guarantee orders to be immutable." / "We process orders after we persist them." |
| 30 | Exponential retries over a long period | S3 | "exponential retries of temporarily failing payments over a long period of time" |
| 31 | Queues in many regions; other regions keep processing | S3 | "If one region goes down, service instances in other regions can still consume and process order messages." |
| 32 | In 2016 no option guaranteed strong consistency; built on DynamoDB | S2 | "there was no perfect solution to guarantee strong consistency for ledger balances. We ended up building this specific data store on Amazon DynamoDB®." |
| 33 | Entity changelog: audit trail, rebuild ledger | S2 | "providing a complete audit trail and the ability to recreate an entity's ledger since inception" |
| 34 | LedgerStore for auditability and tamper-evident records | S2 | "LedgerStore — a custom storage layer purpose-built for auditability and tamper-evident record-keeping" |
| 35 | Hot entity problem: frequent updates to the same ledger row | S2 | "the hot entity problem" / "frequently updating the same ledger row" |
| 36 | Batch writes: 10x throughput | S2 | "a 10x increase in throughput for these high-traffic entities" |
| 37 | One payment integration interface: charge, disburse, refund | S2 | "backed by a Payment integration interface with APIs such as charge, disburse, refund, and so on" |
| 38 | Uber Pay manages 50+ payment methods | S2 | "Uber Pay alone, our reverse-integration platform for local and alternative payment methods, today manages 50+ payment methods globally." |
