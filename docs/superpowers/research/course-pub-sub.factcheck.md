# Fact-check: Publish-Subscribe (`content/course/pub-sub.mdx`)

Reviewer did not write the page. Sources fetched 2026-10-22 into `/tmp/claude-1000/fc3-pub-sub/`. Cite 1 = Azure pattern page (last updated 2026-03-06). Cites 2 to 5 = Google Cloud Pub/Sub docs (one product).

Product scope check (Google Pub/Sub facts): at-least-once by default, ordering keys, and the exactly-once option are all named as "Google Pub/Sub" in the main text (Delivery section, Key words). Two places lose the product name (rows 37 and 39).

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A sender publishes an event without knowing which consumers receive it | 1 | PASS | "lets a sender publish events without knowing which consumers receive them" |
| 2 | Without a broker the sender must know each consumer, deliver to each, handle each failure; a new consumer changes the sender | 1 | PASS | "it must know the identity and endpoint of every consumer, deliver messages to each consumer, and manage failures individually. Adding or removing a consumer requires changes to the sender" |
| 3 | A plain queue links a sender to one consumer; many consumers need many queues | 1 | PASS | "A standard queue creates a direct relationship between a sender and a single consumer. To support multiple consumers, the sender must create a separate queue for each consumer" |
| 4 | Three parts: input channel, one output channel per consumer, copy mechanism (usually broker or event bus) | 1 | PASS | "An input messaging channel..." / "One output messaging channel for each consumer." / "An intermediary like a message broker or event bus typically handles this operation." |
| 5 | A message is a unit of data; an event reports a change or action | 1 | PASS | "A message is a packet of data. An event is a message that notifies other components about a change or an action that occurs." |
| 6 | Topic = named feed of messages; subscription = named entity showing interest in messages of one topic (Google names) | 3 | PASS | "Topic: a named entity that represents a feed of messages." / "Subscription: a named entity that represents an interest in receiving messages on a particular topic." |
| 7 | Azure suggests the pattern for broadcast, independent consumers, no real-time reply | 1 | PASS | "needs to broadcast information to a significant number of consumers." / "independently developed applications" / "without requiring real-time responses" |
| 8 | Also fits when systems accept eventual consistency | 1 | PASS | "designed to support an eventual consistency model for their data" |
| 9 | Google lists real-time event distribution and cache invalidation events | 2 | PASS | "Real-time event distribution." / "an application can publish invalidation events" |
| 10 | Flow steps 1 to 4 (publish to topic, written to storage, delivered to all attached subscriptions, subscription hands to subscriber) | 3 | PASS | "The message is written to storage." / "Pub/Sub delivers the message to all the attached subscriptions of the topic." / "The subscription sends the message to an attached subscriber application." Page names the product ("This is one product"). Note: "the steps explain the general idea" is the tutorial's framing and is not marked as its own; acceptable, not a source claim. |
| 11 | Subscriber acks after processing; Pub/Sub deletes the message after at least one subscriber of each subscription acked | 3 | PASS | "After at least one subscriber for each subscription has acknowledged the message, Pub/Sub deletes the message from storage." |
| 12 | Fan-out: each subscription gets its own copy; subscribers in one subscription share the work; a one-subscriber subscription gets everything | 3 | PASS | "Each subscription receives a copy of A and B messages from the topic." / "receive a subset of the messages" / "Subscriber 3 receives all the messages from the topic." Paragraph sits under the "Google Pub/Sub shows the flow" intro. |
| 13 | A subscription must exist first and gets only later messages (inside the Google flow section) | 4 | PASS | "Only messages published to the topic after the subscription is created are available to subscriber clients." Scoped by the section intro. See row 39 for the unscoped repeat. |
| 14 | Topics (own output channel) and content filtering (broker looks inside the message) | 1 | PASS | "Topics: Each topic has a dedicated output channel" / "Content filtering: The broker inspects and distributes messages based on their content." |
| 15 | Broad topics simpler, subscribers filter more | 1 | PASS | "Broad topics are simpler to manage but require subscribers to filter out messages that they don't need." |
| 16 | In Google Pub/Sub a subscription can be pull or push | 4 | PASS | "Pull subscriptions use a subscriber client to request messages from the Pub/Sub server. Push subscriptions use the Pub/Sub server to initiate requests to your subscriber application" |
| 17 | Azure's three guarantees (at-most-once can lose; at-least-once can duplicate; exactly-once removes duplicates, adds cost and delay) | 1 | PASS | "At-most-once delivery minimizes overhead but can lose messages" / "At-least-once delivery ensures message delivery but can result in duplicates" / "Exactly-once delivery removes duplicates but adds coordination overhead and latency" |
| 18 | Google Pub/Sub: at-least-once by default; exactly-once also supported (stated as product fact) | 4 | PASS | "By default, Pub/Sub offers at-least-once delivery with no ordering guarantees on all subscription types." / "Pub/Sub also supports exactly-once delivery." |
| 19 | "Duplicates come from the ack step": a late or lost ack causes redelivery | 3 | PASS (re-check) | Stated as the cause of duplicates in general. S3 gives the late or lost ack only as an example ("For example, the subscriber might send an acknowledgment after the deadline expires or the acknowledgment might be lost"). S4 says redelivery can happen "even after an acknowledgment request for the message returns successfully", caused by "server-side restarts or client-side issues". Azure's own example is a sender that posts twice. The hedge and the product scope are dropped. Fix: "In Google Pub/Sub, a late or lost ack is one cause of redelivery." |
| 20 | Google says redelivery is rare but any message can be redelivered at any time; subscriber must be idempotent | 4 | PASS | "although rare, any message can be redelivered at any time. Accommodating more-than-once delivery requires your subscriber to be idempotent" |
| 21 | "Idempotent means that handling a message twice causes no harm" (inline, and Key words row "Processing a message again gives no extra effect") | 4 | PASS (re-check) | The word is a link in S4 and S4 does not define it. The definition is not in the cited text. Mark it as the tutorial's own, or cite a source that defines it. |
| 22 | Azure gives the same idempotent advice when the broker has no deduplication | 1 | PASS | "If your broker doesn't provide deduplication, design subscribers to handle messages idempotently." |
| 23 | Azure: order of receipt not guaranteed, may differ from creation order | 1 | PASS | "isn't guaranteed and doesn't necessarily reflect the order in which the sender created them" |
| 24 | Some brokers give ordered delivery in a partition or session; limits scalability | 1 | PASS | "the broker might support ordered delivery within a partition or session, but that constrains scalability" |
| 25 | Google Pub/Sub has no expected order by default | 4 | PASS | "at-least-once delivery with no ordering guarantees on all subscription types" |
| 26 | Ordering: same ordering key, same publish region, ordering enabled on the subscription | 5 | PASS | "set the same ordering key on all related messages" / "publish all messages with the same ordering key in the same region" / "you must enable message ordering in the subscription" |
| 27 | Order only inside one key; different keys can arrive in any order | 5 | PASS | "Messages published with different ordering keys are not expected to be received in order." (Page wording "can arrive in any order" is close to the source's example "message 1 could arrive before or after message 4".) |
| 28 | A redelivery triggers redelivery of later messages for that key | 5 | PASS | "Redeliveries of a message trigger redelivery of all subsequent messages for that key, even acknowledged ones." |
| 29 | Not suited: few consumers needing very different data; broker adds complexity, no scaling benefit | 1 | PASS | "The overhead of a broker adds complexity without any scaling benefit." |
| 30 | Not suited: near real-time interaction; broker adds latency; request-reply may fit | 1 | PASS | "The pub/sub model introduces latency through the broker. Use a request-reply pattern" |
| 31 | Not suited: strict guaranteed order | 1 | PASS | "Consumers must process messages in a specific, guaranteed order." |
| 32 | Not suited: one atomic transaction across publisher and consumers; asynchronous, eventually consistent | 1 | PASS | "Pub/Sub messaging is inherently asynchronous and eventually consistent." |
| 33 | Google Pub/Sub is for service-to-service, not end-user or IoT clients | 2 | PASS | "Pub/Sub is intended for service-to-service communication rather than communication with end-user or IoT clients." |
| 34 | Example section marked as the tutorial's own | - | PASS | "This example is the tutorial's own." Contains no cite and states no source fact as a source fact. |
| 35 | Radio comparison marked as the tutorial's own | - | PASS | "This comparison is the tutorial's own." |
| 36 | Mistake: order can differ without a special setting | 1, 4 | PASS | See rows 23 and 25. Wording "can" keeps the hedge. |
| 37 | Mistake: "The default is at-least-once, so duplicates can happen" | 4 | PASS (re-check) | Product fact with no product name. Azure says systems differ (at-most-once, at-least-once, exactly-once). Only Google Pub/Sub is shown to default to at-least-once. Fix: "In Google Pub/Sub the default is at-least-once..." |
| 38 | Mistake: channels are one way | 1 | PASS | "Channels in a publish-subscribe system are unidirectional." |
| 39 | Mistake: "A new subscription does not see older messages" | 4 | PASS (re-check) | Product fact with no product name, stated as a general rule. Source is only about Google Pub/Sub, and it also says topic retention "lets a subscription attached to a topic seek back in time and replay previously published messages". Fix: "In Google Pub/Sub, a new subscription gets only messages published after it exists." |
| 40 | Key words: publisher, subscriber, broker, at-least-once (general terms) | 1 | PASS | See rows 1, 4, 17. |
| 41 | Key words: topic, subscription, ack, ordering key (named as Google Pub/Sub or Pub/Sub) | 3, 5 | PASS | "Ordering key. An ordering key is a string that identifies related messages that should be ordered." |

Rows 37 and 39 are the unscoped product facts (the controller's scope check). Rows 18, 25, 26 and the Key words rows are correctly scoped.

Claims checked: 41 rows.

## Structure check

| Check | Result |
|---|---|
| Every source is https, none is a blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS (Microsoft Learn and Google Cloud docs) |
| Each of the 5 sources is cited; each `<Cite n>` (1 to 5) has a source | PASS |
| Required sections in order, Key words last | PASS. Extra sections (How it works, Delivery, duplicates, and order, When not to use it) sit between the required ones; the six required ones keep their order. |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "Publish-Subscribe" | PASS |
| Prose word count (no export block, tables, code, Cite tags; headings and tip callout included) | 986 (902 without the tip callout). In range 700 to 1100. |
| Copy check (runs of 8 or more words, script on all 5 sources) | 2 FAIL, 1 borderline pass (below) |

Copy runs found:

| # | Page text | Source | Verdict |
|---|---|---|---|
| C1 | "any message can be redelivered at any time" (8 words, in "Google says that redelivery is rare, but that any message can be redelivered at any time") | S4 | FAIL. Rewrite in other words. |
| C2 | "of data. An event is a message that" (8 words across a sentence break: "A message is a unit of data. An event is a message that reports...") | S1 | FAIL. Rewrite the event sentence. |
| C3 | "Pub/Sub delivers the message to all the" (7 words if "Pub/Sub" counts as one word, 8 if split) | S3 | Borderline PASS. It is a product name plus 6 words. Safer to reword. |

FAIL count: rows 19, 21, 37, 39, C1, C2 = 6.


## Re-check (after the writer fixed the 6 FAILs)

| Row | Verdict | Quote or reason |
|---|---|---|
| 19 (duplicates) | PASS | Page now says "Duplicates can happen when the ack step goes wrong. For example, ..." (cite 3: "For example, the subscriber might send an acknowledgment after the deadline expires or the acknowledgment might be lost due to transient network issues"). Added claim "Pub/Sub might redeliver a message after a successful ack, for example after a server restart. It calls this rare" (cite 4): S4 says "Pub/Sub might redeliver a message even after an acknowledgment request for the message returns successfully. This redelivery can be caused by issues such as server-side restarts or client-side issues. Thus, although rare, any message can be redelivered at any time." "Server restart" is in S4. |
| 21 (idempotent) | PASS | Inline text says "This definition is the tutorial's own." Key words row says "The tutorial's own definition" and has no cite. "So Google says the subscriber must be idempotent" (cite 4): "Accommodating more-than-once delivery requires your subscriber to be idempotent". |
| 37 (default at-least-once) | PASS | Bullet now says "Google Cloud Pub/Sub gives at-least-once delivery by default" (cite 4). Matches "By default, Pub/Sub offers at-least-once delivery". |
| 39 (new subscription) | PASS | Bullet now says "In Google Cloud Pub/Sub, a new subscription gets only messages published after it was created" (cite 4) and "With topic retention on, a subscription can seek back in time and replay earlier messages" (cite 4). S4: "The topic retention feature lets a subscription attached to a topic seek back in time and replay previously published messages." |
| C1, C2 (copy) | PASS | Reworded. Copy script re-run on all 5 sources: the longest run is 7 tokens ("the publisher and its consumers" plus the name Pub/Sub across a sentence break). No run of 8 or more. |
| Other changed text | PASS | Event sentence "An event is one kind of message. It reports a change or an action to other parts of the system" (cite 1) matches "An event is a message that notifies other components about a change or an action". Step 3 "Pub/Sub sends the message on to every subscription attached to the topic" (cite 3) matches "delivers the message to all the attached subscriptions of the topic". |

Prose word count after the fix: 1045 (headings and tip callout included; no tables, code, or Cite tags). In range 700 to 1100.

Open FAILs: 0
