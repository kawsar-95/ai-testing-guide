# Research notes: How Slack Works

Page: `content/system-design/slack.mdx`

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Slack Architecture | The System Design Newsletter (Neo Kim) | https://systemdesign.one/slack-architecture/ | 2026-10-20 |
| S2 | Real-time Messaging (Sameera Thangudu, 2023-04-11) | Engineering at Slack | https://slack.engineering/real-time-messaging/ | 2026-10-20 |

S1 is free in full (no paywall). It is an interview-style design and says so: "might differ from real-world implementations". S2 is Slack's own description of its real-time system. The page uses S2 for facts about the real system and says "Slack's blog" when it does.

Page cite `n={1}` = S1, `n={2}` = S2.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The article is an interview-style design and can differ from the real system | S1 | "This article is written based on the research I have done on the topic and might differ from real-world implementations." |
| 2 | Requirements: real-time delivery to users and channels | S1 | "The user can send real-time messages to another user and within a channel (group messaging)" |
| 3 | Requirements: history stored and shown in time order | S1 | "The chat messages should be persisted and displayed in chronological order to keep the total order of messages" |
| 4 | Requirements: online status | S1 | "The chat service should display the online presence status of the users" |
| 5 | Requirements: never shown twice | S1 | "A chat message must be received by a user at most once to preserve message integrity" |
| 6 | 10 million daily users, 10:1 read/write | S1 | "The DAU is 10 million and the read: write ratio is 10: 1" |
| 7 | About 7 million connected at once | S1 | "Approximately 7 million simultaneously connected users" |
| 8 | Up to 10,000 users per channel | S1 | "At most 10,000 users can be included in a Slack channel" |
| 9 | Up to 200,000 users per workspace | S1 | "At most 200 thousand users can be included in a Slack workspace" |
| 10 | 100 messages per user per day | S1 | "You can assume that a user sends 100 chat messages on average each day." |
| 11 | About 12,000 writes and 120,000 reads per second | S1 | "QPS (write) 12 thousand ... QPS (read) 120 thousand" (table cells) |
| 12 | About 100 bytes per message | S1 | "An average chat message is assumed to consume 100 bytes of storage." |
| 13 | About 100 GB per day, 150 TB in 5 years | S1 | "storage for a day ... 100 GB/day ... storage for 5 years ... 150 TB" (table cells) |
| 14 | Real traffic: busy 9am to 5pm, peaks at 11am and 2pm | S2 | "most users are online between 9am and 5pm local time, with peaks at 11am and 2pm" |
| 15 | Chat service saves the message before passing it on | S1 | "The chat service persists the chat message in the chat database and delegates the chat message to the subscribed gateway servers" |
| 16 | Channel server sends to subscribed gateways; each gateway sends to its clients | S2 | "it sends out the message to every GS across the world that is subscribed to that channel. Each GS that receives that message sends it to every connected client" |
| 17 | Snapshot service gives start-up data | S1 | "The snapshot service is an application-level edge query engine backed by a cache server and stores the bootstrap payload for Slack client" |
| 18 | Web API: HTTP for messages, login, new channels | S1 | "The web API provides Hypertext Transfer Protocol (HTTP) API endpoints to send messages, execute user login, and perform actions such as creating a new Slack channel" |
| 19 | Real-time API uses WebSockets | S1 | "The real-time API provides WebSockets for latency-sensitive full duplex communication between the client and the server." |
| 20 | Real-time API used for typing, delivery, presence | S1 | "The real-time API can be used for typing indicators, chat message delivery, and displaying online presence status" |
| 21 | Every client keeps a persistent WebSocket | S2 | "Every Slack client has a persistent websocket connection to Slack's servers to receive real-time events to maintain its state." |
| 22 | Client gets token and setup info, then connects to nearest edge region | S2 | "On boot up, the client fetches the user token and websocket connection setup information from the Webapp backend." / "A client initiates a websocket connection to the nearest edge region." |
| 23 | Envoy forwards the connection to a gateway server | S2 | "Envoy forwards the request to GS. Envoy is an open source edge and service proxy" |
| 24 | Typing is a transient event, not saved in the database | S2 | "These are a category of events that are not persisted in the database and are sent through a slightly different flow. User typing in a channel" |
| 25 | Core services in Java: channel servers, gateway servers | S2 | "Our core services are written in Java: They are Channel Servers, Gateway Servers, Admin Servers, and Presence Servers." |
| 26 | Channel server is in memory, holds channel history | S2 | "Channel Servers (CS) are stateful and in-memory, holding some amount of history of channels." |
| 27 | Channel server chosen by consistent hashing | S2 | "Every CS is mapped to a subset of channels based on consistent hashing." |
| 28 | Failed channel server replaced in under 20 s | S2 | "a new CS is ready to serve traffic in under 20 seconds" |
| 29 | Gateway servers hold users' WebSocket subscriptions, run in many regions | S2 | "They hold users' information and websocket channel subscriptions." / "Unlike all other servers, GSs are deployed across multiple geographical regions." |
| 30 | Messages delivered around the world in 500 ms | S2 | "our system delivers messages across the world in 500ms" |
| 31 | Message goes only to data centers with subscribers | S1 | "The published chat messages should be published only to the set of data centers that are in the subscriber list to reduce bandwidth usage." |
| 32 | Snapshot can grow to a few dozen MB for large organizations | S1 | "The snapshot size can easily grow up to a few dozen megabytes for large organizations resulting in a dreadful latency" |
| 33 | Snapshot service returns a slimmed-down payload; lazy loading | S1 | "The snapshot service will return a slimmed-down version of the bootstrap payload" / "supports lazy loading of the bootstrap payload" |
| 34 | About 1 million queries per second | S1 | "The in-memory snapshot service should be able to handle approximately 1 million queries per second" |
| 35 | Team affinity: one team to one snapshot instance | S1 | "Team affinity on the snapshot service can be implemented at a data center level by routing all the users in a specific team to the same snapshot service instance." |
| 36 | MySQL and its four reasons | S1 | "A relational database such as MySQL can be used to build Slack due to the following reasons" (mature technology, good discipline, tooling, talent pool) |
| 37 | Shard key is channel_id | S1 | "The chat database should be partitioned with channel_id as the shard key for scalability and reduced hot spots." |
| 38 | Vitess hides shards and makes re-sharding easy | S1 | "Vitess allows application code and database queries to remain oblivious to the data distribution" / "Vitess makes it trivial to re-partition a database shard or merge shards" |
| 39 | Offset pagination reads and discards rows; duplicates or skips | S1 | "the database must read upto the offset and count rows from the disk only to discard the offset" / "causing duplicate results or even skipping some results" |
| 40 | Cursor pagination uses the index; window not affected; no page jump | S1 | "the database index is leveraged to prevent a full table scan" / "the client will not be able to navigate to a particular page" |
| 41 | Article picks cursor pagination | S1 | "The verdict is to use the cursor-based pagination for an efficient display of the chat history on Slack." |
| 42 | Server timestamps are wrong because of clock skew and network delay | S1 | "will yield inaccurate results in a distributed system due to the occurrence of the clock skew and network delays" |
| 43 | Client timestamps cannot be used | S1 | "the client timestamp cannot be used due to the possibility of an incorrect time set" |
| 44 | Logical clock such as Lamport clock | S1 | "the optimal approach is to use a logical clock such as the Lamport clock or a Vector clock for message ordering" |
| 45 | Random unique token to skip duplicates | S1 | "The client should salt the received chat messages to prevent displaying the same message twice. The salt is a random unique token" |
| 46 | Reconnect after outage causes a thundering herd | S1 | "An organization reconnecting to the Slack network after an outage could cause a thundering herd" |
| 47 | Jitter on reconnect | S1 | "Jitter must be added to client connection request time intervals to spread out the load" |
| 48 | Rate limits; drop requests at the threshold | S1 | "The requests can be dropped when a particular service instance reaches its threshold for memory, concurrent connections, or throughput" |
| 49 | In-memory snapshot service reduces load | S1 | "The in-memory snapshot service can reduce the server load and offers a straightforward approach to mitigate the thundering herd problem" |
| 50 | Draining: move users from a bad region to the nearest good region | S2 | "We have a draining mechanism for region failures that seamlessly switches the users in a bad region to the nearest good region." |
| 51 | Gateway keeps an in-memory queue of unconfirmed events and replays them | S1 | "The gateway server maintains an in-memory queue of uncommitted sends for transient events. The events should be replayed when a gateway server fails." |

## Overlap check

`python3 scripts/linux_overlap.py content/system-design/slack.mdx <SCRATCH>/sd-raw/slack`: first run found 12 runs (claims 14 and 50, close to S2). Both sentences were reworded. Second run: 0 runs, exit 0.
