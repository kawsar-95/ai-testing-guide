# How Airbnb Works (System Design) — research notes (2026-10-20)

Fetch note: the article was fetched with `curl` and stripped to text in `<scratch dir>/sd-raw/airbnb/article.txt`. It is a guest post by Hayk Simonyan (published 2026-01-15). The page is for paid subscribers after the line "Data Model / Here’s a critical insight:" (the post has about 5,300 words; the free part has about 1,650 words, sponsor text included). The free part covers the clarifying questions, the requirements, the estimates, the high-level design, the choice of one database over 2PC or sagas, and the API with the idempotency key. The data model, the concurrency methods (the locking approach), scaling, and failure handling are behind the paywall. The page says that it covers only the free part, and that the exact locking method is in the paid part.

Scope gap: the article does not describe the real Airbnb system. It designs a generic hotel booking system ("A hotel booking system like Booking.com or Airbnb is a common system design interview question.") and sizes it with Booking.com numbers. The title "How Airbnb Works" stays (assignment), and the lede says what the article covers.

The article links to no primary sources in its free part (its numbered footnotes are in the paid part). The page uses only the article.

General explanations with no cite: race condition, transaction and the four ACID promises (callout), strong and eventual consistency definitions, how 2PC and a saga work in general (table column "How it works"), idempotent, cache, index, sharding, and all analogies.

Overlap check: `python3 scripts/linux_overlap.py content/system-design/airbnb.mdx <scratch dir>/sd-raw/airbnb` reads 1 file and finds 0 runs (exit 0). The first run found 3 runs ("a hotel booking system like booking com or [airbnb]" from a short quote, and "book the same room for the same dates"); both sentences were reworded.

## Sources

S1. System Design Interview: Design Airbnb — The System Design Newsletter (Neo Kim; guest author Hayk Simonyan) — https://newsletter.systemdesign.one/p/airbnb-system-design — accessed 2026-10-20 (free part only; `article.txt`)

Cite number on the page: S1 = 1.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The article designs a generic hotel booking system as an interview question. | S1 | "A hotel booking system like Booking.com or Airbnb is a common system design interview question." |
| 2 | Two users click "Book" on the last room in the same second. | S1 | "Two users click “Book” on the last available room in the same second." |
| 3 | Both requests check and see a free room; two cards are charged for one room. | S1 | "Your API does a SELECT check, so both requests see availability, and you charge two credit cards for one room." |
| 4 | This is the default outcome of a wrong design. | S1 | "That’s the default outcome if you don’t design it correctly." |
| 5 | Admins add and change hotels and room types, prices and inventory. | S1 | "Admins can add, update, and remove hotels and room types. They adjust pricing and inventory" |
| 6 | Users search by place, dates, guests, price, and features. | S1 | "Users can search for hotels by location, dates, guest count, price range, and amenities." |
| 7 | Users book, view, and cancel; no double bookings. | S1 | "Users can book rooms, view reservations, and cancel bookings. The system should prevent double bookings." |
| 8 | Payments through a payment gateway, with failure handling. | S1 | "Integrate with payment gateways. And handle failures gracefully." |
| 9 | Confirmations for bookings, cancellations, payments. | S1 | "Send confirmations for bookings, cancellations, and payments." |
| 10 | Two users must never get the same room for the same dates. | S1 | "Two users cannot book the same room for the same dates. Non-negotiable." |
| 11 | Search under 500 ms; booking confirmed in 2 to 3 seconds. | S1 | "Search results under 500ms. Booking confirmation in 2-3 seconds." |
| 12 | Uptime 99.9% or more. | S1 | "High Availability: 99.9%+ uptime." |
| 13 | Booking Holdings reported more than 1.1 billion room nights in 2024. | S1 | "Booking Holdings reported over 1.1 billion room nights 6 in 2024." ("6" is a footnote marker) |
| 14 | 2 nights per booking; about 1.5 million bookings a day. | S1 | "Average stay: 2 nights per booking" ... "550M / 365 ≈ 1.5M bookings/day" |
| 15 | About 17 bookings a second. | S1 | "~17 bookings per second on average" |
| 16 | About 1,000 reads a second against about 17 writes. | S1 | "You handle around 1,000 read QPS and only ~17 write TPS." |
| 17 | The API gateway is the single entry point: authentication, rate limiting, routing. | S1 | "Single entry point" ... "Authentication, rate limiting, request routing" |
| 18 | Each service owns one job. | S1 | "Each service owns its domain and scales independently." |
| 19 | PostgreSQL is the main store, Redis caches hot data, Elasticsearch powers search. | S1 | "PostgreSQL: Primary transactional store." ... "Redis: Cache for hot data." ... "Elasticsearch: Search functionality" |
| 20 | A CDN serves static files such as photos. | S1 | "CDN for static assets (images, JavaScript, hotel photos)" |
| 21 | The article requires strong consistency: a room never goes to two users for the same nights. | S1 | "Strong Consistency: Two users cannot book the same room for the same dates." |
| 22 | It cannot be traded away. | S1 | "Non-negotiable." |
| 23 | It relies on ACID transactions of PostgreSQL. | S1 | "PostgreSQL: Primary transactional store. ACID guarantees" ... "This lets us use local ACID transactions instead of distributed transactions." |
| 24 | Hotels often allow 5 to 10% overbooking. | S1 | "Hotels typically allow 5-10% overbooking" |
| 25 | Services are split, but bookings and room stock share one database. | S1 | "Reservation and inventory data live in the same database." |
| 26 | One local ACID transaction covers both. | S1 | "This lets us use local ACID transactions instead of distributed transactions." |
| 27 | The other option is two databases kept in step with sagas or 2PC. | S1 | "Split reservations and inventory into separate databases and coordinate with Saga patterns 11 or Two-Phase Commit 12 (2PC)." |
| 28 | 2PC is slower, blocks, and can stall if the coordinator fails. | S1 | "2PC provides strong consistency but adds latency, blocking, and failure complexity. A coordinator failure can stall the system." |
| 29 | A saga avoids locks but is eventually consistent, with hard failure handling. | S1 | "Saga patterns avoid locking but introduce eventual consistency 13, compensating actions, and complex failure handling." |
| 30 | One database is simple and safe at this size. | S1 | "Local ACID transactions are simpler, safer, and faster." |
| 31 | Eventual consistency in a booking flow means angry users. | S1 | "This is risky for user-facing booking flows where “eventually consistent” means angry users." |
| 32 | At about 17 writes a second, the extra complexity is not worth it. | S1 | "At ~17 write TPS, the added complexity is not justified…" |
| 33 | The create-booking request carries an idempotency key. | S1 | "POST /v1/reservations request includes an idempotency key 14:" |
| 34 | The app creates the booking ID first; repeats do not create a second booking. | S1 | "This reservationId is generated on the frontend and prevents double bookings when users click submit many times." |
| 35 | Similarweb: about 516.5 million visits a month to booking.com. | S1 | "Similarweb shows ~516.5 million visits per month to booking.com with about 7.56 pages per visit." |
| 36 | About 200 visits a second; 5 reads per visit; about 1,000 reads a second. | S1 | "17M / 86,400 ≈ 200 visits per second" ... "Backend read QPS 8 ≈ 200 visits/s × 5 ≈ 1,000 read requests per second" |
| 37 | The system is strongly read-heavy; make reads fast, keep writes correct. | S1 | "This is strongly read-heavy." ... "Your architecture should optimize for reads while keeping writes consistent." |
| 38 | Hotel data rarely changes and can be cached heavily. | S1 | "Hotel and room information. Mostly static, heavily cacheable." |
| 39 | Hotel Service 10 instances, Reservation Service 3. | S1 | "Hotel Service might need 10 instances for search traffic, while Reservation Service only needs 3 since booking TPS is low." |
| 40 | About 85,000 hotels and 4.3 million rooms. | S1 | "1.57B / 365 ≈ 4.3M rooms" ... "~85,000 hotels globally" |
| 41 | The free-room table, 2 years ahead, has about 620 million rows, about 62 GB. | S1 | "85,000 × 10 × 730 ≈ 620M rows" ... "Storage ≈ 620M × 100 bytes ≈ 62 GB of raw data" |
| 42 | With indexes and other tables, 500 GB or more. | S1 | "you’re looking at 500GB+ total." |
| 43 | The system needs a sharding and indexing plan. | S1 | "So you need a proper ‘sharding and indexing strategy’." |
