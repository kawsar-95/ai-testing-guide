# Fact-check: How WhatsApp Works (round 1, 2026-10-20)

I read the free part of the newsletter article (S1, `sd-raw/whatsapp/article.txt`). The page has one source. It says in the lede that the article is an interview-style design and not the exact WhatsApp system. I fixed 4 FAILs: 2 lede sentences (an unsourced "ticks" UI claim, and "billions of people chat at the same time", which overstates the source), a wrong network-layer gloss (Layer 4 is not "the network level"), and a unit ("3,600 seconds") that the source does not state. The overlap check (`linux_overlap.py`, 1 file) finds 0 runs and exits 0. The one source has a cite, all cites are `n={1}`, the `##` headings are unique, the closing tags are at column 0, and the prose has no `{` or `<`.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | Ticks show sent, delivered, read | – | FAIL→fixed | Was "You also see small ticks that tell you if the message was sent, delivered, and read." (WhatsApp UI fact, no source). Now a general statement: "A good chat app also shows if each message was sent, delivered, and read." |
| 2 | Lede | Scale of use | – | FAIL→fixed | Was "billions of people chat at the same time" (source peak is 50M concurrent connections). Now "billions of people use the app." Quote: "2+ billion users." |
| 3 | Lede | Interview design, not the exact system | – | PASS | "Designing a real-time chat application like WhatsApp is one of the most common system design interview questions." |
| 4 | The problem in plain words | Over 100 billion messages a day, over 2 billion users | 1 | PASS | "WhatsApp handles over 100 billion messages daily for 2+ billion users." |
| 5 | The problem in plain words (list) | 1:1 and groups up to 100 | 1 | PASS | "Group chats with up to 100 participants" |
| 6 | The problem in plain words (list) | Media | 1 | PASS | "Media attachments (images, videos, audio clips)" |
| 7 | The problem in plain words (list) | Offline messages kept up to 30 days | 1 | PASS | "Messages delivered while users are offline get queued up for 30 days" |
| 8 | The problem in plain words (list) | Status; online and last seen | 1 | PASS | "Message status tracking (sent, delivered, read)" / "Online/offline status with “last seen”" |
| 9 | The problem in plain words | Under 500 ms; no loss; short storage | 1 | PASS | "Low latency delivery (under 500ms when users are online)" / "Don’t store messages on servers longer than necessary" |
| 10 | The problem in plain words | 500M daily users, up to 20 messages, 10B a day, 115,000 a second | 1 | PASS | "500M users × 20 messages = 10 billion messages/day" / "roughly 115,000 messages per second" |
| 11 | The problem in plain words | Peak 3 to 5 times | 1 | PASS | "during peak hours, we need to multiply that by 3-5x." |
| 12 | The problem in plain words | 1 KB per message, 10 TB a day | 1 | PASS | "Daily storage: 1KB × 10B messages = 10 TB/day" |
| 13 | The problem in plain words | Most messages leave within seconds; 400 to 500 TB | 1 | PASS | "we’re looking at 400-500 TB of active storage instead of petabytes." |
| 14 | The big picture | One open line per phone | 1 | PASS | "It maintains a persistent connection to our backend" |
| 15 | The big picture | Chat server confirms at once, then queues | 1 | PASS | "it immediately acknowledges receipt to the sender, then asynchronously pushes it to the queue" |
| 16 | The big picture | Cache says which chat server holds B | 1 | PASS | "tracks which users are online, which chat server they’re connected to" |
| 17 | The big picture | Push wakes an offline phone | 1 | PASS | "Handles push notifications for offline users" |
| 18 | The big picture | Media skips the chat servers | 1 | PASS | "direct upload/download paths so chat servers don’t become bottlenecks for large file transfers." |
| 19 | Keeping a line open (table) | Polling wastes data and adds delay | 1 | PASS | "This wastes bandwidth and adds latency." |
| 20 | Keeping a line open (table) | Long polling: handshake per message | 1 | PASS | "Each message requires a full HTTP handshake" |
| 21 | Keeping a line open (table) | WebSocket uses memory per line | 1 | PASS | "use more memory per connection on the server" |
| 22 | Keeping a line open | Article picks WebSockets; handshake once at app start | 1 | PASS | "The connection overhead happens only once when you open the app" |
| 23 | Keeping a line open | Layer 4 instead of Layer 7 | 1 | FAIL→fixed | Was "Layer 4, the network level" (Layer 4 is the transport layer; layer 3 is the network layer). Now "Layer 4, the level of raw connections, instead of Layer 7, the level of HTTP requests." Quote: "(Layer 4 load balancing instead of Layer 7)" |
| 24 | Keeping a line open | Ping every 30 s; close after 60 s; zombies | 1 | PASS | "Client sends a lightweight ping every 30 seconds." / "doesn’t receive a heartbeat for 60 seconds" |
| 25 | Finding the right server | Sticky sessions; drop dead servers | 1 | PASS | "uses sticky sessions" / "stops sending traffic to dead servers." |
| 26 | Finding the right server | Hundreds of thousands of connections per server | 1 | PASS | "Each server can handle hundreds of thousands of simultaneous connections." |
| 27 | Finding the right server | Redis tracks online, server, last active | 1 | PASS | "In-memory store ( Redis) tracks which users are online, which chat server they’re connected to" |
| 28 | Finding the right server | Microseconds vs milliseconds | 1 | PASS | "Checking Redis takes microseconds, whereas querying a database takes milliseconds." |
| 29 | Finding the right server | Servers come and go | 1 | PASS | "they crash, get deployed, scale up and down." |
| 30 | Finding the right server | Consul or AWS Cloud Map | 1 | PASS | "We use a service registry such as  Consul or  AWS Cloud Map." |
| 31 | Finding the right server | Heartbeat 10 s; unhealthy after 30 s | 1 | PASS | "Sends a heartbeat every 10 seconds" / "Consul marks it unhealthy after 30 seconds" |
| 32 | Finding the right server | No manual address lists | 1 | PASS | "No manual configuration updates." |
| 33 | Sending, storing, and the ticks | Receipt at once, then queue | 1 | PASS | "immediately acknowledges receipt to the sender" |
| 34 | Sending, storing, and the ticks | Kafka or RabbitMQ | 1 | PASS | "We can use tools like  Kafka or  RabbitMQ" |
| 35 | Sending, storing, and the ticks | Storage service; delete after 30 days | 1 | PASS | "managing retention policies (such as deleting old messages after 30 days)." |
| 36 | Sending, storing, and the ticks | NoSQL (Cassandra, DynamoDB) and why | 1 | PASS | "we need high write throughput and our query patterns are straightforward" |
| 37 | Sending, storing, and the ticks | Users and groups in SQL (PostgreSQL) | 1 | PASS | "Users Table (SQL -  PostgreSQL works)" / "Groups Table (SQL)" |
| 38 | Sending, storing, and the ticks (steps) | Client ID; "sent" ack with server ID; delivery ack; read receipt | 1 | PASS | "“client_message_id”" / "“status”: “sent”" / "“type”: “delivery_ack”" / "“type”: “read_receipt”" |
| 39 | Sending, storing, and the ticks | Offline wait up to 30 days; APNs and FCM | 1 | PASS | "through APNs ... and FCM" / "this makes your phone buzz." |
| 40 | Callout (tip) | Receipt repeats the client ID; says it is tutorial advice | 1 | PASS | Server ACK has "“client_message_id”: “client_abc123”". Callout says "This tutorial suggests a test". |
| 41 | Photos and videos | Blob storage (S3, Google Cloud Storage); CDN | 1 | PASS | "Blob storage (e.g.,  AWS S3 or  Google Cloud Storage) stores media files" |
| 42 | Photos and videos | Signed upload address and media ID | 1 | PASS | "“upload_url”: “https://s3.amazonaws.com/bucket/signed_url...”, “media_id”" |
| 43 | Photos and videos | Expiry value | 1 | FAIL→fixed | Was "the address expires after 3,600 seconds" (the source gives no unit). Now "the reply gives the address a lifetime value, `expires_in`, of 3600." Quote: "“expires_in”: 3600" |
| 44 | Photos and videos | Direct upload; message carries only a link | 1 | PASS | "direct upload/download paths" / "“media_url”" |
| 45 | What a tester can learn | Callout says it is tutorial advice | – | PASS | "These test ideas are this tutorial's own advice, not claims from the sources." |

Note: the article also shows a presence heartbeat "every 5 seconds" in its message formats. The page uses the 30 s ping of the idle-connection section, which is the value that the article explains. This is not a FAIL.

Open FAILs: 0
