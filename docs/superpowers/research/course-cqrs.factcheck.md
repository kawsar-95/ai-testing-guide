# Fact-check: CQRS (`content/course/cqrs.mdx`)

Reviewer did not write the page. Source fetched 2026-10-22 into `/tmp/claude-1000/fc3-cqrs/` (page "Last updated on 2025-02-21"). All rows use cite 1 (S1, Azure Architecture Center "CQRS pattern").

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | CQRS splits reads and writes into separate data models; each can be tuned alone | 1 | PASS | "Segregate the read and write operations for a data store into separate data models. This approach allows you to optimize each model independently" |
| 2 | A command updates data; a query gets data | 1 | PASS | "Commands update data. Queries retrieve data." |
| 3 | One model for both jobs is common and fits simple CRUD | 1 | PASS | "a single data model is often used for both read and write operations. This approach is straightforward and is suited for basic create, read, update, and delete (CRUD) operations." |
| 4 | As apps grow it can cause lock contention, slow queries, security problems | 1 | PASS | "As applications grow, it can become increasingly difficult ... can result in the following challenges: ... Lock contention ... Performance problems ... Security challenges". Hedge ("can") kept. |
| 5 | Fields an update needs are often not the fields a read needs | 1 | PASS | "Some fields that are required during updates might be unnecessary during read operations." |
| 6 | Reads and writes often have different speed and scaling needs | 1 | PASS | "Read and write operations often have different performance and scaling requirements." |
| 7 | May help: many users change the same data; small clear commands can reduce conflicts | 1 | PASS | "multiple users access and modify the same data simultaneously, CQRS helps reduce merge conflicts. Commands can include enough granularity to prevent conflicts" (page is more hedged than source) |
| 8 | May help: UI guides people through a task in steps | 1 | PASS | "Applications that guide users through complex processes as a series of steps or with complex domain models benefit from CQRS." (drops "complex"; not stronger) |
| 9 | May help: tune reads apart from writes, most when more reads than writes | 1 | PASS | "especially beneficial when the number of reads is greater than the number of writes" |
| 10 | May help: different teams build write and read sides | 1 | PASS | "One team implements the complex business logic in the write model, and another team develops the read model and user interface components." |
| 11 | Might not suit a simple domain or when plain CRUD is enough (When you need it, Common mistakes) | 1 | PASS | "This pattern might not be suitable when: The domain or the business rules are simple. A simple CRUD-style user interface and data access operations are sufficient." Hedge kept. "Common mistakes" bullet also says "may not suit". |
| 12 | Command should state a business task: "Book hotel room" not "Set ReservationStatus to Reserved" | 1 | PASS | "use the command "Book hotel room" instead of "Set ReservationStatus to Reserved."" |
| 13 | A queue can run commands asynchronously | 1 | PASS | "Process commands asynchronously by placing them in a queue" |
| 14 | A query never changes data; returns DTOs, no domain logic | 1 | PASS | "Queries never alter data. Instead, they return data transfer objects (DTOs) ... without any domain logic." |
| 15 | Write model: validation, domain logic, works to keep data correct | 1 | PASS | "It includes validation and domain logic, and helps ensure data consistency by optimizing for transactional integrity" |
| 16 | Read model serves queries, no domain logic | 1 | PASS | "The read model has no business logic or validation stack." |
| 17 | Level 1: one database, each model has its own logic | 1 | PASS | "both the read and write models share a single underlying database but maintain distinct logic" |
| 18 | Level 2: own stores, scale each; different tech (document DB reads, relational writes) | 1 | PASS | "allows you to scale each model to match the load ... You can use a document database for the read data store and a relational database for the write data store." |
| 19 | With two stores they must stay in sync; write model publishes event, read model refreshes | 1 | PASS | "you must ensure that both remain synchronized. A common pattern is to have the write model publish events when it updates the database, which the read model uses to refresh its data." |
| 20 | Read store can have own schema, e.g. materialized view that avoids joins; or be a read-only replica | 1 | PASS | "it can store a materialized view of the data to avoid complex joins ... can be a read-only replica of the write store or have a different structure" |
| 21 | Usually cannot put broker and DB in one distributed transaction, so steps can disagree | 1 | PASS | "Because you usually can't enlist message brokers and databases into a single distributed transaction, consistency problems can occur" |
| 22 | Suggests Transactional Outbox (state change + event together) and idempotent consumer | 1 | PASS | "Use the Transactional Outbox pattern to persist the state change and event atomically, and make the read-model consumer idempotent to tolerate duplicate delivery." |
| 23 | Separate stores: read data might not show latest change; stale data | 1 | PASS | "the read data might not show the most recent changes immediately. This delay results in stale data." |
| 24 | Read model is eventually consistent with the write model | 1 | PASS | "The read model is eventually consistent with the write model." (but see copy check) |
| 25 | Keeping read store current can be hard; plan for a user acting on stale data | 1 | PASS | "Ensuring that the read model store stays up-to-date ... can be challenging. ... detecting and handling scenarios where a user acts on stale data requires careful consideration." "must plan for" is close to "requires careful consideration". |
| 26 | Event Sourcing: state as chronological events; replay in order for current state | 1 | PASS | "stores the system's state as a chronological series of events ... To determine the current state, the system replays these events in order." |
| 27 | Event store is the write model and single source of truth; read model builds materialized views | 1 | PASS | "The event store is the write model and the single source of truth. The read model generates materialized views from these events" (but see copy check) |
| 28 | Gain: rebuild or create views by replaying events | 1 | PASS | "you can easily regenerate materialized views or adapt to changes in the read model by replaying historical events" ; "rebuild or create new views easily" |
| 29 | Gain: event stream as write store can reduce update conflicts | 1 | PASS | "This approach reduces update conflicts on aggregates" (page adds "can"; weaker) |
| 30 | Cost: read store can lag behind events | 1 | PASS | "updates to the read data store might lag behind event generation" |
| 31 | Cost: "the design is harder" | 1 | FAIL | Source: "requires a different design approach, which can make a successful implementation more challenging." The page states it flat ("the design is harder"); the hedge "can" is dropped. Fix: "the design can be harder". |
| 32 | Cost: building views can take much time and many resources | 1 | PASS | "Generating materialized views for the read model can consume significant time and resources." |
| 33 | Snapshots at regular intervals avoid a full replay each time | 1 | PASS | "Implement snapshots of the data at regular intervals ... Snapshots reduce the need to process the full event history repeatedly" |
| 34 | Benefits: independent scaling, schemas for each job, tighter security for writes, cleaner models, simpler queries | 1 | PASS | Source "Benefits of CQRS" lists Independent scaling, Optimized data schemas, Security ("only the appropriate domain entities or operations have permission to perform write actions"), Separation of concerns ("cleaner, more maintainable models"), Simpler queries. Page does not add stronger outcome claims. |
| 35 | Cost: core idea simple but design can become much more complex, esp. with Event Sourcing | 1 | PASS | "The core concept of CQRS is straightforward, but it can introduce significant complexity ... specifically when combined with the Event Sourcing pattern" |
| 36 | Cost: O/RM-style tools cannot make CQRS code from a schema; custom code | 1 | PASS | "scaffolding tools like object-relational mapping (O/RM) frameworks can't automatically generate CQRS code from a database schema, so you need custom logic" |
| 37 | Cost: messaging not required but often used; failed, duplicate, retried messages | 1 | PASS | "Messaging isn't a requirement for CQRS, but you often use it ... message failures, duplicates, and retries." |
| 38 | Common mistake: forgetting delay between stores | 1 | PASS | Same as #23. |
| 39 | Key words table (Command, Query, DTO, Write/Read model, Materialized view, Eventual consistency, Transactional Outbox, Idempotent, Snapshot) | 1 | PASS | Each matches the quotes above. "catch up later" in Eventual consistency is not literal in S1 but is the meaning of the term and follows from "might lag ... eventual consistency". |

Marked as the tutorial's own, so not checked as source claims: the "A real-life example" section and the tip callout (both say so; neither has a `<Cite>`). The opening paragraph (shop scenario) is an unmarked illustration but states no source fact. The two points of "When to use" that the page leaves out (evolving systems, system integration) are omissions of benefits; the page says "lists cases where the pattern may help", not that the list is complete. The "when not to use" points are represented fairly, with hedges kept.

## Structure check

| Check | Result |
|---|---|
| `page.sources`: 1 entry, https, cited | PASS |
| Every `<Cite n>` has a source (only n=1) | PASS |
| `#` title is "CQRS" | PASS |
| Required sections in order (In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words); Key words last; extra sections between them | PASS |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| Source type (Microsoft official docs, not a blog or forum) | PASS |
| Prose word count | 1064 words (lede, lists and the tip callout counted; export block, tables, code, and Cite tags excluded). In range 700-1100. |
| No run of 8+ copied words | FAIL, 3 runs (below) |

Copied runs found by a script (8-word window against the fetched text):

1. "The event store is the write model and the single source of truth." (12 words, "Combining CQRS with event sourcing"). Reword.
2. "The read model is eventually consistent with the write model." (10 words, "Eventual consistency"). Reword.
3. "It can also be a read-only replica of the write store." (about 9 words, "How it works"). Reword.


## Re-check

Writer changed 4 places. Verdicts after re-check against the fetched S1 text:

| # | New text | Cite | Verdict | Reason |
|---|---|---|---|---|
| 31 | "the design can be harder" | 1 | PASS | Hedge restored; matches "can make a successful implementation more challenging". |
| 24 | "the read side catches up with the write side after a delay, which is eventual consistency" | 1 | PASS | S1: "updates to the read data store might lag behind event generation. This delay results in eventual consistency." "Catches up" is the meaning of the term, not a literal S1 phrase; accepted. |
| 27 | "the write side is the event store, and it is the one place that holds the true state" | 1 | PASS | S1: "The event store is the write model and the single source of truth." Same meaning, reworded. The sentence has no Cite of its own; the next sentence cites n=1. |
| 20 | "a read-only copy (replica) of the write database" | 1 | PASS | S1: "can be a read-only replica of the write store". |

Copy check re-run on the whole page: 0 runs of 8 or more words. Prose word count now 1077 (in range 700-1100). No other text changed that I found; all other rows keep their verdicts.

Open FAILs: 0
