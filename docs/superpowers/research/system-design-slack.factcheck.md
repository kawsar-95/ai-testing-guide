# Fact-check: How Slack Works (round 1, 2026-10-20)

I read the page, the research notes, and the saved text of S1 (the full article, an interview design) and S2 (Slack's own engineering blog). I fixed 5 claims: an uncited scale claim in the lede, an overstated typing-event audience, "the two main" services, the contents of the snapshot, and the gateway queue (it is for transient events). The structure checks pass: 2 sources, both cited, cites in range, unique `##` headings, the `</Callout>` closing tags at column 0, no `{` or `<` in prose. `linux_overlap.py` exits 0 after the fixes.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | Millions of people online at the same time | 2 | FAIL→fixed | Was a number with no cite. Now split, with cite 2. Quote: "tens of millions of connected clients" |
| 2 | Lede | Every reader must see the same order | 1 | FAIL→fixed | Same sentence, now cited. Quote: "persisted and displayed in chronological order to keep the total order of messages" |
| 3 | Lede | The design can differ from the real system | 1 | PASS | "might differ from real-world implementations" |
| 4 | The problem in plain words | Real-time delivery, ordered history, presence, at most once | 1 | PASS | "A chat message must be received by a user at most once to preserve message integrity" |
| 5 | The problem in plain words | 10 million daily users, 7 million connected, 10:1 reads | 1 | PASS | "The DAU is 10 million and the read: write ratio is 10: 1" / "Approximately 7 million simultaneously connected users" |
| 6 | The problem in plain words | 10,000 per channel, 200,000 per workspace | 1 | PASS | "At most 10,000 users can be included in a Slack channel" / "At most 200 thousand users" |
| 7 | The problem in plain words | 100 messages a day; 12,000 writes and 120,000 reads per s | 1 | PASS | "QPS (write) 12 thousand" / "QPS (read) 120 thousand" |
| 8 | The problem in plain words | 100 bytes per message; 100 GB a day; 150 TB in 5 years | 1 | PASS | "An average chat message is assumed to consume 100 bytes" / "100 GB/day" / "150 TB" |
| 9 | The problem in plain words | Busy 9am to 5pm, peaks at 11am and 2pm | 2 | PASS | "most users are online between 9am and 5pm local time, with peaks at 11am and 2pm" |
| 10 | The big picture | Chat service saves the message, then passes it on | 1 | PASS | "persists the chat message in the chat database and delegates the chat message to the subscribed gateway servers" |
| 11 | The big picture | Servers forward to subscribed gateways; gateways push to clients | 2 | PASS | "sends out the message to every GS across the world that is subscribed to that channel" |
| 12 | The big picture | Snapshot service gives start-up data | 1 | PASS | "edge query engine backed by a cache server and stores the bootstrap payload" |
| 13 | Two lines to the server | Web API: HTTP for login, messages, new channel | 1 | PASS | "HTTP API endpoints to send messages, execute user login, and perform actions such as creating a new Slack channel" |
| 14 | Two lines to the server | Real-time API uses WebSockets | 1 | PASS | "The real-time API provides WebSockets for latency-sensitive full duplex communication" |
| 15 | Two lines to the server | Used for messages, typing, presence | 1 | PASS | "typing indicators, chat message delivery, and displaying online presence status" |
| 16 | Two lines to the server | Every client keeps one long-lived WebSocket | 2 | PASS | "Every Slack client has a persistent websocket connection to Slack's servers" |
| 17 | Two lines to the server | Token and setup from web backend, then nearest edge region | 2 | PASS | "fetches the user token and websocket connection setup information from the Webapp backend" |
| 18 | Two lines to the server | Envoy passes the connection to a gateway | 2 | PASS | "Envoy forwards the request to GS. Envoy is an open source edge and service proxy" |
| 19 | Two lines to the server (Callout) | Typing is a transient event, not saved, sent to channel members | 2 | FAIL→fixed | Was "the people who look at the channel now" (S2 does not limit it to viewers). Now "the online members of that channel". Quote: "broadcasts to all the users websockets subscribed to this channel" |
| 20 | One message, many readers | Core services in Java; channel and gateway servers | 2 | FAIL→fixed | Was "The two main ones are". S2 lists four services and ranks none. Now "Two of them are". Quote: "They are Channel Servers, Gateway Servers, Admin Servers, and Presence Servers." |
| 21 | One message, many readers | Channel server keeps channel history in memory | 2 | PASS | "stateful and in-memory, holding some amount of history of channels" |
| 22 | One message, many readers | Channel server chosen by consistent hashing | 2 | PASS | "Every CS is mapped to a subset of channels based on consistent hashing." |
| 23 | One message, many readers | Failed channel server replaced in under 20 s | 2 | PASS | "a new CS is ready to serve traffic in under 20 seconds" |
| 24 | One message, many readers | Gateways hold WebSockets and subscriptions, run in many regions | 2 | PASS | "They hold users' information and websocket channel subscriptions." / "GSs are deployed across multiple geographical regions" |
| 25 | One message, many readers | Channel server to gateways, gateways to clients | 2 | PASS | "Each GS that receives that message sends it to every connected client" |
| 26 | One message, many readers | Delivery around the world in 500 ms | 2 | PASS | "our system delivers messages across the world in 500ms" |
| 27 | One message, many readers | Messages go only to data centers with followers | 1 | PASS | "published only to the set of data centers that are in the subscriber list to reduce bandwidth usage" |
| 28 | A fast start with a snapshot | What the snapshot holds | 1 | FAIL→fixed | Was "your channels, your team mates, and their profiles". S1 does not say profiles. Now "your channels and the members of each channel". Quote: "metadata of subscribed Slack channels and the list of users subscribed to the respective Slack channels" |
| 29 | A fast start with a snapshot | Snapshot grows to tens of MB | 1 | PASS | "can easily grow up to a few dozen megabytes for large organizations" |
| 30 | A fast start with a snapshot | Smaller payload, lazy loading | 1 | PASS | "return a slimmed-down version of the bootstrap payload" / "supports lazy loading" |
| 31 | A fast start with a snapshot | About 1 million queries per second | 1 | PASS | "should be able to handle approximately 1 million queries per second" |
| 32 | A fast start with a snapshot | One team to one instance (team affinity) | 1 | PASS | "routing all the users in a specific team to the same snapshot service instance" |
| 33 | Storing the history | MySQL and four reasons | 1 | PASS | "mature technology" / "good discipline" / "strong support for tooling" / "a large talent pool" |
| 34 | Storing the history | Shard key is channel ID | 1 | PASS | "partitioned with channel_id as the shard key" |
| 35 | Storing the history | Vitess hides shards, splits or merges them | 1 | PASS | "Vitess makes it trivial to re-partition a database shard or merge shards" |
| 36 | Storing the history (table) | Offset reads and discards rows; skips or repeats | 1 | PASS | "read upto the offset and count rows from the disk only to discard" / "causing duplicate results or even skipping some results" |
| 37 | Storing the history (table) | Cursor uses index; window stable; no page jump | 1 | PASS | "the database index is leveraged" / "the client will not be able to navigate to a particular page" |
| 38 | Storing the history | Article chooses cursor | 1 | PASS | "The verdict is to use the cursor-based pagination" |
| 39 | Order and duplicates | Server clocks drift; network delays | 1 | PASS | "inaccurate results in a distributed system due to the occurrence of the clock skew and network delays" |
| 40 | Order and duplicates | Device clock can be set to any time | 1 | PASS | "the client timestamp cannot be used due to the possibility of an incorrect time set" |
| 41 | Order and duplicates | Logical clock, such as Lamport, a counter | 1 | PASS | "use a logical clock such as the Lamport clock" / "an incremented count" |
| 42 | Order and duplicates | Random unique token to skip duplicates | 1 | PASS | "The salt is a random unique token that should be stored with every chat message." |
| 43 | Staying up under load | A company reconnecting after an outage | 1 | PASS | "An organization reconnecting to the Slack network after an outage could cause a thundering herd" |
| 44 | Staying up under load | Jitter | 1 | PASS | "Jitter must be added to client connection request time intervals" |
| 45 | Staying up under load | Rate limits; drop at the limit | 1 | PASS | "The requests can be dropped when a particular service instance reaches its threshold" |
| 46 | Staying up under load | Snapshot service reduces load | 1 | PASS | "The in-memory snapshot service can reduce the server load" |
| 47 | Staying up under load | Draining to the closest healthy region | 2 | PASS | "switches the users in a bad region to the nearest good region" |
| 48 | Staying up under load | Gateway queue in memory, replayed on failure | 1 | FAIL→fixed | Was "events not yet confirmed" (S1 limits it to transient events). Now "transient events that are not yet committed". Quote: "in-memory queue of uncommitted sends for transient events. The events should be replayed" |
| 49 | What a tester can learn | Tip says it is tutorial advice | none | PASS | "These test ideas are the tutorial's own advice." |

Open FAILs: 0
