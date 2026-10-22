# Fact-check: Event Sourcing (`content/course/event-sourcing.mdx`)

Reviewer: not the writer. Source (cite n=1, the only source): Azure Architecture Center, "Event Sourcing pattern", https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing. Fetched 2026-10-22 with curl into `/tmp/claude-1000/fc3-event-sourcing/` (source page last updated 2026-03-28). Quotes below are from my own fetch, not from the notes.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Most apps store only the latest state (CRUD); no history unless a separate audit log | 1 | PASS | "CRUD systems only store the latest state of the data. If you don't implement an auditing mechanism that records the details of each operation in a separate log, you lose data history." |
| 2 | Event sourcing stores the full series of actions in an append-only store; the store is the system of record | 1 | PASS | "store the full series of actions taken on an object in an append-only store. The store acts as the system of record" |
| 3 | An event is one logical change, e.g. AddedItemToOrder, OrderCanceled | 1 | PASS | "Each event represents a logical change to the object, such as AddedItemToOrder or OrderCanceled." |
| 4 | Each entity has its own eventstream, the ordered list of changes | 1 | PASS | "Each entity in an event-sourced system has its own eventstream, which is the ordered sequence of events that records every change to that entity." |
| 5 | Complex pattern, significant trade-offs, costly to move to or from, limits later design choices | 1 | PASS | "Event sourcing is a complex pattern that introduces significant trade-offs." / "It's costly to migrate to or from an event sourcing solution, and ... it constrains future design decisions in the parts of the system that use it." (The page drops "in the parts ... that use it". The section on use in one part only covers this. Minor, not a FAIL.) |
| 6 | State is found by replaying all events of the stream; called rehydration; can be on demand | 1 | PASS | "Applications derive the current state of an entity by replaying all the events in its stream. This process is known as rehydration. It can occur on demand when the application handles a request." |
| 7 | Command handler loads the stream, replays it, runs business logic, raises new events | 1 | PASS | "The command handler loads the entity by retrieving its eventstream ... It replays those events ... before any new action occurs." / "The business logic runs and events are raised." |
| 8 | Events are immutable and added by append-only operations | 1 | PASS | "Events are immutable, and you can store them by using an append-only operation." |
| 9 | Never update event data; undo with a compensating event; ReservationCanceled compensates SeatsReserved; old event stays | 1 | PASS | "you should never update the event data. The only way to update an entity or undo a change is to add a compensating event" / "a ReservationCanceled event compensates for a prior SeatsReserved event. The original event remains in the stream" |
| 10 | In most designs events go to a queue or topic so producers and consumers are decoupled | 1 | PASS | "In most implementations, the events are pushed to a queue or topic to decouple the event producers and event consumers." |
| 11 | Event handlers write to the store, update a read-only store, or call external systems | 1 | PASS | "Write the events to the event store / Update a read-only store optimized for queries / Integrate with external systems" |
| 12 | Reading and replaying is costly, so apps build materialized views (read-only projections made for queries) | 1 | PASS | "Applications typically implement materialized views because it's costly to read and replay events. Materialized views are read-only projections of the event store that are optimized for querying." |
| 13 | Snapshots: long stream makes replay slow; snapshot is a saved state at one point, e.g. every N events | 1 | PASS | "If the streams are large, replaying every event ... becomes costly in both time and compute." / "create snapshots at specific intervals, such as every N events. A snapshot is a serialized representation of the entity's state at a specific point in its eventstream." |
| 14 | Load the newest snapshot and replay only later events | 1 | PASS | "load the most recent snapshot and replay only the events that occur after it" |
| 15 | Snapshot frequency: balance storage cost against time saved | 1 | PASS | "balance the storage cost of snapshots against the time saved during rehydration" |
| 16 | A snapshot is an optimization; the stream stays the source of truth; snapshots can be made again | 1 | PASS | "Snapshots are an optimization, not a replacement for the eventstream. The eventstream remains the source of truth, and you can regenerate snapshots from it at any time." |
| 17 | Two handlers can load the same entity at once; the store uses optimistic concurrency, rejects the append if the stream changed, handler reloads, re-checks, retries | 1 | PASS | "two handlers that load the same entity simultaneously can act on the same state." / "Event stores address this scenario by using optimistic concurrency control and reject an append if the stream changed since it was read. Upon rejection, the handler reloads the entity, reevaluates, and retries." |
| 18 | Reason to use: keep the intent or reason behind a change | 1 | PASS | "You want to capture intent, purpose, or reason in the data." |
| 19 | Reason to use: avoid conflicting updates | 1 | PASS | "You must minimize or completely avoid conflicting updates to data." (Page says "avoid"; the source also says "minimize". Minor, not a FAIL.) |
| 20 | Reason to use: history, audit log, replay, roll back | 1 | PASS | "You want to record events that occur, to replay them to restore the state of a system, to roll back changes, or to keep a history and audit log." |
| 21 | Reason to use: separate input of data from the tasks that act on it | 1 | PASS | "You need to decouple the process of inputting or updating data from the tasks required to apply these actions." |
| 22 | Often combined with CQRS, which splits reads from writes | 1 | PASS | "Event sourcing is commonly combined with the CQRS pattern" / "The pattern segregates the operations that read data in an application from the operations that update data" |
| 23 | Not suited: simple CRUD with no audit, replay, or history | 1 | PASS | "Systems have straightforward CRUD operations that don't require auditability, replay, or historical reconstruction of state." |
| 24 | Not suited: prototypes, MVPs, short-lived systems | 1 | PASS | "Prototypes, minimum viable products (MVPs), or systems have short expected lifespans." |
| 25 | Not suited: systems that need consistent, real-time views | 1 | PASS | "Systems require consistency and real-time updates to the views of the data." |
| 26 | Not suited: mostly static data such as lookup tables | 1 | PASS | "Domains in which data is mostly static or for reference, such as lookup tables or catalogs." |
| 27 | Not suited: teams with no event-driven experience | 1 | PASS | "Teams don't have experience in event-driven architectures." |
| 28 | For most systems traditional data management is enough | 1 | PASS | "For most systems and most parts of a system, traditional data management is sufficient." |
| 29 | You can use it in one part only, e.g. a payment ledger | 1 | PASS | "Apply it selectively to the parts of your system that it benefits the most, such as a payment ledger or order-processing pipeline." |
| 30 | Gain: audit trail; views can be rebuilt by replay at any time | 1 | PASS | "Append-only event storage provides an audit trail ... It can regenerate the current state as materialized views or projections by replaying the events at any time" |
| 31 | Gain: append-only writes avoid row-level lock contention, so write throughput can improve | 1 | PASS | "Write throughput improves, especially for the presentation layer, because append-only writes avoid the row-level lock contention that update-in-place systems create." (Page adds a hedge, "can".) |
| 32 | Views built from events are only eventually consistent; delay between request, publishing, and consumer handling; customers must understand | 1 | PASS | "The system is only eventually consistent when it creates materialized views or generates projections of data by replaying events. A delay exists between when an application handles a request and adds events to the event store, when the events publish, and when consumers handle the events." / "Ensure that your customers understand that data is eventually consistent" |
| 33 | A bug that writes wrong events is not fixed by fixing the code | 1 | PASS | "if a bug produces incorrect events, those events persist in the store. Fixing the bug in application code doesn't fix the historical events" |
| 34 | A schema change can make old and new events hard to combine | 1 | PASS | "it can be difficult to combine existing events in the store with the new version." |
| 35 | Source lists four ways to cope, which can be mixed | 1 | PASS | "You can use the following strategies individually or in combination:" (four items) |
| 36 | Tolerant deserialization: ignore unknown fields, defaults for missing ones | 1 | PASS | "Design event consumers to ignore unknown fields and use default values for missing fields." |
| 37 | Event versioning: each event carries a version identifier | 1 | PASS | "Include a version identifier in each event" |
| 38 | Upcasting: old events converted to the current schema on read; stored events unchanged | 1 | PASS | "convert older event schemas to the current schema during deserialization." / "The stored events remain unchanged" |
| 39 | In-place migration: old events rewritten; breaks immutability; last resort | 1 | PASS | "Rewrite historical events to the new schema directly in the event store. This approach breaks immutability and should be a last resort" |
| 40 | No standard query tool like SQL; read a stream by event identifier and replay | 1 | PASS | "There's no standard approach or existing mechanisms, such as SQL queries, for reading events" / "The only data that you can extract is a stream of events by using an event identifier as the criteria." |
| 41 | Delivery is usually at least once, so handlers must be idempotent, or duplicates change the result | 1 | PASS | "Event delivery to consumers is typically at least once ... Event handlers must be idempotent so processing a duplicate event doesn't change the outcome." |
| 42 | Immutable store can conflict with laws that require deletion of personal data | 1 | PASS | "conflicts with data protection regulations that require deletion of personal data" |
| 43 | "Tests need a given-when-then style, plus integration tests for views, duplicates, and schema changes" | 1 | PASS after re-check (was FAIL) | The source says a style "best suits": "A specific testing style best suits event-sourced systems. Set up past events, issue a command, and assert on the new events produced. This given-when-then approach ..." Only the integration tests are a "need". The page makes the style a requirement (dropped hedge). Fix: "A given-when-then style suits these tests best, and you also need integration tests ..." |
| 44 | Common mistake: state-only event ("remaining seats changed to 42") vs intent event ("two seats reserved") | 1 | PASS | "an event that records two seats were reserved is more valuable than an event that records remaining seats changed to 42. The first event tells you what happened. The second event only tells you the resulting state." |
| 45 | Brokers such as Apache Kafka typically lack per-entity stream queries and optimistic concurrency; suit distributing events, not storing them | 1 | PASS (facts) | "Message brokers such as Apache Kafka typically lack per-entity stream queries and optimistic concurrency. They work well as a distribution layer ... but they aren't a substitute for an event store." Copy problem: see the copy check. |
| 46 | Without idempotent handlers, projections drift; payments or notices can repeat | 1 | PASS | "Without idempotency, projections drift from the event stream and side effects such as payments or notifications trigger more than once." |
| 47 | Key word Event | 1 | PASS | "Each event represents a logical change to the object" |
| 48 | Key word Event store: append-only store, system of record | 1 | PASS | "append-only store. The store acts as the system of record" |
| 49 | Key word Eventstream | 1 | PASS | "the ordered sequence of events that records every change to that entity" |
| 50 | Key word Rehydration | 1 | PASS | "replaying all the events in its stream. This process is known as rehydration." |
| 51 | Key word Snapshot | 1 | PASS | "A snapshot is a serialized representation of the entity's state at a specific point in its eventstream." |
| 52 | Key word Materialized view | 1 | PASS | "read-only projections of the event store that are optimized for querying" |
| 53 | Key word Compensating event | 1 | PASS | "A compensating event is a new event that reverses or corrects the effect of a previous event." |
| 54 | Key word Upcasting | 1 | PASS | "convert older event schemas to the current schema during deserialization" |
| 55 | Key word Idempotent | 1 | PASS | "so processing a duplicate event doesn't change the outcome" |

Tutorial's own text, checked for marking: the bank-statement lede (marked "This comparison is the tutorial's own"), the real-life example (marked "tutorial's own and is simplified"; it states no source fact), and the tip callout (titled "Tutorial advice", says it is not a claim of the source, has no Cite). All three are correctly marked. The tip callout is not fact-checked.

Specific checks asked for:
- Snapshots: claims 13-16 all PASS. No invented number for N (the page says "for example after every N events", as the source does).
- Eventual consistency of read views: claim 32 PASS; claim 25 PASS.
- Event versioning: claims 33-39 PASS; the four strategies match the source.
- When not to use: claims 23-29 PASS, all five items present and not overstated.

## Structure check

| Check | Result |
|---|---|
| `page.sources` is https and cited | PASS (one entry, `https://learn.microsoft.com/...`, cited many times) |
| Every `<Cite n>` has a source | PASS (all are n=1) |
| Sections `In plain words`, `When you need it`, `A real-life example`, `Common mistakes`, `What a tester can check`, `Key words` in order, Key words last | PASS (extra sections `How it works` and `Trade-offs` sit between, which is allowed) |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title equals "Event Sourcing" | PASS |
| Source not a blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS (Microsoft Learn official docs) |
| Prose 700-1100 words | PASS: 1054 words (headings, lede, lists, and the tip callout counted; export block, tables, code, and Cite tags excluded). With tables the count is 1220. |
| Link `/course/cqrs/` | Sibling page, not checked, as the controller said |
| No run of 8 or more copied words | FAIL on first pass, 7 runs (below); fixed, see Re-check |

### Copy check (script: word runs of 8 or more that appear in both the page and the source)

Source titles and exact field names are allowed; ordinary prose is not. The Kafka run is a sentence, not a name.

| # | Page text | Source run (words) | Verdict |
|---|---|---|---|
| C1 | "It stores the full series of actions taken on an object in an append-only store." | "the full series of actions taken on an object in an append-only store" (13) | FAIL, fixed (see Re-check) |
| C2 | "Each entity has its own eventstream, which is the ordered list ..." | "has its own eventstream, which is the ordered" (8) | FAIL, fixed (see Re-check) |
| C3 | "An application finds the current state of an entity by replaying all events ..." | "the current state of an entity by replaying all" (9) | FAIL, fixed (see Re-check) |
| C4 | "read-only projections of the event store that are made for queries" (How it works, and the Materialized view definition is close) | "are read-only projections of the event store that are" (10) | FAIL, fixed (see Re-check) |
| C5 | "Append-only writes avoid the row-level lock contention of update-in-place systems" | "append-only writes avoid the row-level lock contention" (8) | FAIL, fixed (see Re-check) |
| C6 | "brokers such as Apache Kafka typically lack per-entity stream queries and optimistic concurrency." | "brokers such as Apache Kafka typically lack per-entity stream queries and optimistic concurrency" (13) | FAIL, fixed (see Re-check) |
| C7 | Tip: "Send two commands for the same entity at the same time." | "for the same entity at the same time" (8) | FAIL, fixed (see Re-check) |

Suggested rewording: C1 "It keeps every action done to an object in a store that you only add to"; C2 "Each entity has one eventstream: the ordered list of its changes"; C3 "An application gets the current state of an entity by replaying every event in its stream"; C4 "read-only copies of the data, built from the event store and shaped for queries"; C5 "Writes only add events, so they avoid the row locks of update-in-place systems"; C6 "The source says brokers such as Apache Kafka typically lack queries per entity and optimistic concurrency".

Summary: 55 claims checked, 1 claim FAIL (row 43), 7 copy FAILs (C1-C7). All 8 fixed, see Re-check.


## Re-check

The writer changed the text of claims 43 and C1-C7. I re-read the whole page and re-ran the copy check.

| Item | New text | Verdict |
|---|---|---|
| 43 | "The source says a given-when-then test style suits these systems best, and you also need integration tests for views, duplicates, and schema changes" | PASS. Matches "A specific testing style best suits event-sourced systems ... given-when-then" and "you also need integration tests for projections, idempotency behavior, and schema evolution paths". |
| C1 | "It keeps every action on an object, in order, in a store that only accepts new records." | PASS (no copied run; meaning matches "append-only store") |
| C2 | "Every entity gets a separate eventstream: its changes, in order" | PASS |
| C3 | "works out the state of an entity by replaying every event in its stream" | PASS (longest shared run: 6 words, "state of an entity by replaying") |
| C4 | "read-only views built from the event store and shaped for queries" | PASS |
| C5 | "Adding events does not need the row locks that in-place updates need, and this avoids lock contention, so write throughput can improve" | PASS. Source: "append-only writes avoid the row-level lock contention that update-in-place systems create", with "Write throughput improves". The page keeps the hedge "can". |
| C6 | "a broker such as Apache Kafka usually cannot query one entity's stream or apply optimistic concurrency. It suits spreading events out, not storing them" | PASS. Matches "typically lack per-entity stream queries and optimistic concurrency" and "aren't a substitute for an event store". |
| C7 | "Send two commands to one entity at once." | PASS |

Other changed lines (the rewritten lines 19, 25, 31, 60, 73, 82, 94) state no new fact. All cites are still n=1, and the sources list is unchanged. The tip callout has no Cite.

Copy check re-run: runs of 8 or more shared words: 0. Longest runs are 6 words or fewer and are ordinary phrases or names ("the source of truth and you can", "that require deletion of personal data", "a new event that reverses or corrects"). Prose word count: 1066 (same counting rule as before), within 700-1100.

Open FAILs: 0
