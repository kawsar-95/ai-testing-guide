# Fact-check: How Airbnb Works (round 1, 2026-10-20)

I read the free part of the newsletter article (S1, `sd-raw/airbnb/article.txt`). The page has one source. The lede says that the article is an interview-style design and not the real Airbnb system. I checked the "general" explanations (race condition, ACID, 2PC, saga, eventual consistency, index, sharding). They are definitions, not specific technical facts, so they need no cite. I made 2 of them more exact. I fixed 6 FAILs in total: 2 unsourced claims, 1 claim with no cite, 1 overstated lede number, and 2 imprecise definitions. The overlap check (`linux_overlap.py`, 1 file) finds 0 runs and exits 0. The one source has a cite, all cites are `n={1}`, the `##` headings are unique, the closing tags are at column 0, and the prose has no `{` or `<`.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | Many people look at the same rooms | – | FAIL→fixed | Was "thousands of people look at the same rooms at the same time" (a number with no cite; the source has it only as a goal). Now "many people look at the same rooms at the same time." |
| 2 | Lede | Interview design for hotels like Booking.com and Airbnb | 1 | PASS | "A hotel booking system like Booking.com or Airbnb is a common system design interview question." |
| 3 | The problem in plain words | Two users, last room, same second; both see it free; two cards charged | 1 | PASS | "Your API does a SELECT check, so both requests see availability, and you charge two credit cards for one room." |
| 4 | The problem in plain words | This is the default outcome | 1 | PASS | "That’s the default outcome if you don’t design it correctly." |
| 5 | The problem in plain words (list) | Admin, search, booking, payments, notifications | 1 | PASS | "Admins can add, update, and remove hotels and room types. They adjust pricing and inventory" |
| 6 | The problem in plain words | No double booking | 1 | PASS | "Two users cannot book the same room for the same dates. Non-negotiable." |
| 7 | The problem in plain words | Search under 500 ms; booking in 2 to 3 s | 1 | PASS | "Search results under 500ms. Booking confirmation in 2-3 seconds." |
| 8 | The problem in plain words | 99.9% or more | 1 | PASS | "High Availability: 99.9%+ uptime." |
| 9 | The problem in plain words | 1.1 billion room nights in 2024 | 1 | PASS | "Booking Holdings reported over 1.1 billion room nights 6 in 2024." |
| 10 | The problem in plain words | 2 nights; 1.5M a day; 17 a second | 1 | PASS | "~1.5 million bookings per day" / "~17 bookings per second on average" |
| 11 | The problem in plain words | 1,000 reads vs 17 writes | 1 | PASS | "You handle around 1,000 read QPS and only ~17 write TPS." |
| 12 | The big picture | API gateway: login, rate limit, routing | 1 | PASS | "Authentication, rate limiting, request routing" |
| 13 | The big picture | Each service owns one job | 1 | PASS | "Each service owns its domain and scales independently." |
| 14 | The big picture | PostgreSQL, Redis, Elasticsearch | 1 | PASS | "PostgreSQL: Primary transactional store." / "Redis: Cache for hot data." |
| 15 | The big picture | CDN for static files | 1 | PASS | "CDN for static assets (images, JavaScript, hotel photos)" |
| 16 | The race for the last room | Race condition definition | – | FAIL→fixed | Was "the result depends on which request runs first" (in this example both requests win, so order alone is not the cause). Now "the result depends on the exact timing of the two requests." Same fix in the Key words row. General definition, no cite needed. |
| 17 | The race for the last room | Strong consistency for inventory | 1 | PASS | "with strong consistency for inventory" |
| 18 | The race for the last room | Cannot be traded away | 1 | PASS | "Non-negotiable." |
| 19 | The race for the last room | Relies on PostgreSQL ACID transactions | 1 | PASS | "PostgreSQL: Primary transactional store. ACID guarantees" / "local ACID transactions" |
| 20 | Callout (note) | ACID definitions; locking method is in the paid part | – | PASS | Definitions only. The callout does not claim that ACID alone stops the race, and it says the locking method is not described. |
| 21 | The race for the last room | Hotels often allow 5 to 10% overbooking | 1 | PASS | "Hotels typically allow 5-10% overbooking" |
| 22 | The race for the last room | Overbooking is a business choice that the system must follow exactly | – | FAIL→fixed | Was "This is a business choice. The system must then follow that rule exactly." (no source). Now "The article lists this as a question to settle before the design starts." Quote: "Here are some clarifying questions we’ll ask about the design requirements." |
| 23 | One database for bookings and rooms | Bookings and inventory in the same database | 1 | PASS | "Reservation and inventory data live in the same database." |
| 24 | One database for bookings and rooms | One local ACID transaction | 1 | PASS | "This lets us use local ACID transactions instead of distributed transactions." |
| 25 | One database for bookings and rooms | The alternative is two databases | 1 | PASS | "Split reservations and inventory into separate databases and coordinate with Saga patterns 11 or Two-Phase Commit" |
| 26 | Table: 2PC | How 2PC works (definition) | – | FAIL→fixed | Was "then tells both to commit" (leaves out the abort path). Now "then tells both to commit, or both to cancel." General definition, no cite needed. |
| 27 | Table: 2PC | Slower, blocks, coordinator failure can stall | 1 | PASS | "2PC provides strong consistency but adds latency, blocking, and failure complexity. A coordinator failure can stall the system." |
| 28 | Table: Saga | Undo steps; no long locks; eventual consistency; hard failures | 1 | PASS | "Saga patterns avoid locking but introduce eventual consistency 13, compensating actions, and complex failure handling." |
| 29 | Table: One database | Simple and safe | 1 | PASS | "Local ACID transactions are simpler, safer, and faster." |
| 30 | One database for bookings and rooms | Delay can mean an angry guest | 1 | PASS | "where “eventually consistent” means angry users." |
| 31 | One database for bookings and rooms | At 17 writes a second, not worth it | 1 | PASS | "At ~17 write TPS, the added complexity is not justified" |
| 32 | Pressing "Book" twice | Why repeats happen | – | FAIL→fixed | Was "Users click twice, and networks repeat requests." (network retries are not in the source). Now "Users can click "Book" more than one time." Quote: "prevents double bookings when users click submit many times." |
| 33 | Pressing "Book" twice | Request carries an idempotency key | 1 | PASS | "POST /v1/reservations request includes an idempotency key" |
| 34 | Pressing "Book" twice | ID made on the front end; no second booking | 1 | PASS | "This reservationId is generated on the frontend and prevents double bookings" |
| 35 | Many lookers, few bookers | 516.5M visits a month (Similarweb) | 1 | PASS | "Similarweb shows ~516.5 million visits per month to booking.com" |
| 36 | Many lookers, few bookers | 200 visits a second; 5 reads; 1,000 reads | 1 | PASS | "200 visits/s × 5 ≈ 1,000 read requests per second" |
| 37 | Many lookers, few bookers | Strongly read-heavy; fast reads, correct writes | 1 | PASS | "This is strongly read-heavy." / "optimize for reads while keeping writes consistent." |
| 38 | Many lookers, few bookers | Each service scales on its own | – | FAIL→fixed | Had no cite. Now "So each service scales on its own." with cite 1. Quote: "Each service owns its domain and scales independently." |
| 39 | Many lookers, few bookers | Hotel data heavily cacheable | 1 | PASS | "Mostly static, heavily cacheable." |
| 40 | Many lookers, few bookers | 10 vs 3 instances | 1 | PASS | "Hotel Service might need 10 instances for search traffic, while Reservation Service only needs 3" |
| 41 | Many lookers, few bookers | 85,000 hotels, 4.3M rooms | 1 | PASS | "≈ 4.3M rooms" / "~85,000 hotels globally" |
| 42 | Many lookers, few bookers | 620M rows, 62 GB, 2 years | 1 | PASS | "85,000 × 10 × 730 ≈ 620M rows" / "≈ 62 GB of raw data" |
| 43 | Many lookers, few bookers | 500 GB or more | 1 | PASS | "you’re looking at 500GB+ total." |
| 44 | Many lookers, few bookers | Needs sharding and indexing | 1 | PASS | "So you need a proper ‘sharding and indexing strategy’." |
| 45 | What a tester can learn | Callout says it is tutorial advice | – | PASS | "These test ideas are this tutorial's own advice, not claims from the sources." |

Open FAILs: 0
