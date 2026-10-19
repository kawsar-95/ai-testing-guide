# How WhatsApp Works (System Design) — research notes (2026-10-20)

Fetch note: the article was fetched with `curl` and stripped to text in `<scratch dir>/sd-raw/whatsapp/article.txt`. It is Part 1 of a guest post by Hayk Simonyan (published 2025-12-08). The page is for paid subscribers after the heading "The Online/Offline Control with Presence Server" (the post has about 4,000 words; the free part has about 2,200 words, sponsor text included). The free part covers the requirements, the estimates, the components, WebSockets, heartbeats, service discovery, the data stores, and the message formats. The presence server, the offline delivery flow in detail, multi-device sync, and the media flow in detail are behind the paywall. The page uses only the free part.

The article is an interview-style design ("Designing a real-time chat application like WhatsApp is one of the most common system design interview questions"). The page says it is not always the exact system that WhatsApp runs.

The article links to product home pages (Kafka, RabbitMQ, Cassandra, DynamoDB, Redis, S3, Google Cloud Storage, Consul, AWS Cloud Map, PostgreSQL). The page names these tools only as the article's choices, so it cites the article and does not use the product pages.

Inconsistency in the source: the WebSocket section says the client pings every 30 seconds, and the presence heartbeat schema says "every 5 seconds". The page uses only the 30 s / 60 s numbers of the idle-connection section.

Overlap check: `python3 scripts/linux_overlap.py content/system-design/whatsapp.mdx <scratch dir>/sd-raw/whatsapp` reads 1 file and finds 0 runs (exit 0). The first run found 4 runs ("happens only once when you open the app", and three runs around "a service registry such as Consul or AWS Cloud Map"); both sentences were reworded.

## Sources

S1. System Design Interview: Design WhatsApp — The System Design Newsletter (Neo Kim; guest author Hayk Simonyan) — https://newsletter.systemdesign.one/p/whatsapp-system-design — accessed 2026-10-20 (free part only; `article.txt`)

Cite number on the page: S1 = 1.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The article is an interview-style design. | S1 | "Designing a real-time chat application like WhatsApp is one of the most common system design interview questions." |
| 2 | WhatsApp handles more than 100 billion messages a day for more than 2 billion users. | S1 | "WhatsApp handles over 100 billion messages daily for 2+ billion users." |
| 3 | One-to-one text chats. | S1 | "Users can send and receive text messages in 1:1 chats" |
| 4 | Groups of up to 100 people. | S1 | "Group chats with up to 100 participants" |
| 5 | Messages for an offline user are kept for 30 days. | S1 | "Messages delivered while users are offline get queued up for 30 days" |
| 6 | Photos, videos, and audio clips. | S1 | "Media attachments (images, videos, audio clips)" |
| 7 | Message status: sent, delivered, read. | S1 | "Message status tracking (sent, delivered, read)" |
| 8 | Online status and last seen. | S1 | "Online/offline status with “last seen”" |
| 9 | Delivery to online users in under 500 ms. | S1 | "Low latency delivery (under 500ms when users are online)" |
| 10 | No message may get lost. | S1 | "Guaranteed message delivery (messages can’t just disappear)" |
| 11 | Messages must not stay on servers longer than needed. | S1 | "Don’t store messages on servers longer than necessary" |
| 12 | 500 million daily users, up to 20 messages each, 10 billion a day. | S1 | "Daily messages: 500M users × 20 messages = 10 billion messages/day" |
| 13 | About 115,000 messages a second. | S1 | "That’s roughly 115,000 messages per second on average." |
| 14 | Peak rate is 3 to 5 times higher. | S1 | "But during peak hours, we need to multiply that by 3-5x." |
| 15 | About 1 KB per message, 10 TB a day. | S1 | "Daily storage: 1KB × 10B messages = 10 TB/day" |
| 16 | Most messages leave the server within seconds of delivery. | S1 | "Most messages get delivered and cleared from the server within seconds." |
| 17 | Only 400 to 500 TB of stored data at any time. | S1 | "suddenly we’re looking at 400-500 TB of active storage instead of petabytes." |
| 18 | Each phone keeps one open line to a chat server. | S1 | "It maintains a persistent connection to our backend" |
| 19 | The chat server confirms at once and queues the message for storage. | S1 | "it immediately acknowledges receipt to the sender, then asynchronously pushes it to the queue for storage and delivery." |
| 20 | A cache says which chat server holds the receiver's line. | S1 | "tracks which users are online, which chat server they’re connected to, and their last activity timestamp." |
| 21 | If the receiver is offline, a push message reaches the phone. | S1 | "Handles push notifications for offline users through APNs (Apple Push Notification Service for iOS) and FCM (Firebase Cloud Messaging for Android)." |
| 22 | Media skips the chat servers. | S1 | "It offers direct upload/download paths so chat servers don’t become bottlenecks for large file transfers." |
| 23 | Polling asks every few seconds, wastes data, adds delay. | S1 | "The client asks, “Any new messages?” every few seconds. This wastes bandwidth and adds latency." |
| 24 | Long polling holds the request open until a message or a timeout. | S1 | "Client opens a request, server holds it open until there’s a message or a timeout." |
| 25 | Long polling needs a new handshake for each message. | S1 | "Each message requires a full HTTP handshake (the back-and-forth to establish a connection)." |
| 26 | A WebSocket stays open and both sides can send at any time. | S1 | "One persistent bidirectional connection that stays open. Both the client and the server can push data at any time." |
| 27 | Each open WebSocket uses server memory. | S1 | "They also use more memory per connection on the server since you’re keeping connections open." |
| 28 | The article picks WebSockets. | S1 | "WebSockets (WHAT WE USE)" |
| 29 | The handshake happens once at app start; then only content travels. | S1 | "The connection overhead happens only once when you open the app; everything after that is just message content." |
| 30 | WebSockets need Layer 4 load balancers, not Layer 7. | S1 | "It requires special load balancers that support them (Layer 4 load balancing instead of Layer 7)." |
| 31 | The phone pings every 30 seconds and the server answers. | S1 | "Client sends a lightweight ping every 30 seconds. Server responds with Pong." |
| 32 | No heartbeat for 60 seconds: the server closes the line. | S1 | "If the server doesn’t receive a heartbeat for 60 seconds, it assumes the connection died" |
| 33 | This stops zombie connections from piling up. | S1 | "This prevents the accumulation of zombie connections that waste server resources." |
| 34 | The load balancer uses sticky sessions. | S1 | "uses sticky sessions (meaning once you connect to Server A, you stay on Server A)." |
| 35 | The load balancer stops sending traffic to dead servers. | S1 | "It also monitors server health and stops sending traffic to dead servers." |
| 36 | Each chat server holds hundreds of thousands of connections. | S1 | "Each server can handle hundreds of thousands of simultaneous connections." |
| 37 | Redis keeps who is online, which server, and last activity. | S1 | "In-memory store ( Redis) tracks which users are online, which chat server they’re connected to" |
| 38 | Redis takes microseconds; a database takes milliseconds. | S1 | "Checking Redis takes microseconds, whereas querying a database takes milliseconds." |
| 39 | Servers crash, get updated, or get added. | S1 | "chat servers come and go… they crash, get deployed, scale up and down." |
| 40 | The article uses a service registry: Consul or AWS Cloud Map. | S1 | "We use a service registry such as Consul or AWS Cloud Map." (two spaces before each product name in the raw text) |
| 41 | Each chat server registers and sends a heartbeat every 10 seconds. | S1 | "Sends a heartbeat every 10 seconds" |
| 42 | Consul marks a server unhealthy after 30 seconds without heartbeats. | S1 | "If the heartbeat stops, Consul marks it unhealthy after 30 seconds" |
| 43 | The load balancer asks the registry; no manual address lists. | S1 | "Query Consul: “Give me all healthy chat-server instances”" ... "No manual configuration updates." |
| 44 | Receipt to the sender right away, then the message goes to a queue. | S1 | "When a chat server receives a message, it immediately acknowledges receipt to the sender" |
| 45 | Kafka or RabbitMQ for the queue. | S1 | "We can use tools like Kafka or RabbitMQ that work well here." (two spaces before each product name in the raw text) |
| 46 | A storage service reads the queue and writes to the database. | S1 | "Consumes from the queue and writes messages to the database." |
| 47 | It deletes old messages after 30 days. | S1 | "managing retention policies (such as deleting old messages after 30 days)." |
| 48 | NoSQL (Cassandra, DynamoDB) for high writes and simple lookups. | S1 | "because we need high write throughput and our query patterns are straightforward (fetch messages by user/conversation/timestamp)." |
| 49 | Users and groups in SQL (PostgreSQL). | S1 | "Users Table (SQL - PostgreSQL works)" ... "Groups Table (SQL)" (two spaces before "PostgreSQL" in the raw text) |
| 50 | The ticks come from messages between phones and the server. | S1 | "“type”: “delivery_ack”," ... "“type”: “read_receipt”," |
| 51 | The phone sends its own message ID; the server replies "sent" with a server ID. | S1 | "“client_message_id”: “client_abc123”," ... "“status”: “sent”," |
| 52 | The receiver's phone sends a delivery receipt. | S1 | "Client -> Server (Delivery ACK):" |
| 53 | On opening the chat, the phone sends a read receipt; the server passes it to the sender. | S1 | "Client -> Server (User opened chat):" ... "Server -> Original Sender:" |
| 54 | The notification service makes the phone buzz. | S1 | "When someone messages you while you’re offline, this makes your phone buzz." |
| 55 | The receipt repeats the phone's message ID. | S1 | "“type”: “message_ack”, “client_message_id”: “client_abc123”," |
| 56 | Blob storage (S3, Google Cloud Storage) holds media files. | S1 | "Blob storage (e.g., AWS S3 or Google Cloud Storage) stores media files" (two spaces before each product name in the raw text) |
| 57 | A CDN keeps popular files around the world for fast downloads. | S1 | "caches popular files at edge locations worldwide so downloads are fast regardless of where users are." |
| 58 | The server returns a signed upload address and a media ID; it expires after 3,600 seconds. | S1 | "“media_id”: “media_xyz789”, “expires_in”: 3600" |
| 59 | The phone uploads to storage; the message carries a link. | S1 | "“upload_url”: “https://s3.amazonaws.com/bucket/signed_url...”," ... "“media_url”: null," |

Not cited (general explanation, not a claim): the analogies (mailbox, hotel front desk, post office counter, parcel dock), the definitions of handshake, load balancer, queue, service registry, blob storage and CDN, the Key words table, and the two tutorial-advice callouts.
