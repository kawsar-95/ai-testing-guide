# Reels review log

One row per reel on the Architecture and System Design pages. A reel is another creator's video. It is not a source of the page and it is not fact-checked like the page text.

How each reel was checked: `/shorts/<id>` answers 200 (a real Short); YouTube's oEmbed answers 200 (public, embeddable); the official IFrame Player API loads it and reaches the playing state in headless Chrome, and reports the length. Evidence: `transcript` = the video has English captions, which were used to screen it against the page (excerpts were read, not every transcript in full); `translated captions` = only machine-translated captions exist; `frames + title` = no captions, but the on-screen text of 3 frames was read; `title + description` = no captions, so the title, the description, and the channel were judged (typical for Bangla: the spoken words were not checked); `title only` = nothing else was read.

Run `node scripts/check-reels.ts` to check again; creators can delete or restrict a video at any time.

| Page | Video id | Channel | Title | Kind | Lang | Seconds | Evidence | Plays |
|---|---|---|---|---|---|---|---|---|
| `architecture/why-system-design` | `QppcKeWmSl0` | AWS Developers | System Design for Beginners | explainer | en | 113 | transcript | yes |
| `architecture/why-system-design` | `a05BRXxtOoM` | ByteVerseToon | What Is System Design? An App Goes Viral! | explainer | en | 26 | transcript | yes |
| `architecture/why-system-design` | `OcMMpdJcsBE` | Nabid In Motion | What is System Design? (Bangla) \| কেন সবার এটি জানা উচিত? \| System Design Unplugged Shorts | explainer | bn | 59 | title + description | yes |
| `architecture/requirements` | `7kJAJREtAlo` | ByteByteGo | Latency vs Throughput. Know the difference? | compare | en | 55 | transcript | yes |
| `architecture/requirements` | `uDlBY_bmRmc` | LearnEveryone | What are Non-Functional Requirements (NFRs) – How the System Should Perform? \| SRS | explainer | en | 47 | transcript | yes |
| `architecture/requirements` | `cD_p-9yRKsg` | Rabbil Hasan | PUBG-তে আগে গুলি করেও তুমি হেরে যাচ্ছ কেন? \| Latency | explainer | bn | 45 | title + description | yes |
| `architecture/single-server` | `k7vvdBsKDx8` | Alada School | What is Single Point Of Failure? | explainer | bn | 52 | title + description | yes |
| `architecture/single-server` | `V65ggmmLxmw` | Tejav Academy | HLD — SPOF 3 Healthy Servers… So Why Is Your Entire App DOWN? | explainer | en | 60 | frames + title | yes |
| `architecture/vertical-scaling` | `jm5y8pmI00o` | NeetCodeIO | Vertical & Horizontal Scaling | explainer | en | 51 | transcript | yes |
| `architecture/vertical-scaling` | `8USEvyuXOQY` | Alada School | Vertical Scaling এবং Horizontal Scaling কি? সহজ বাংলায় সিস্টেম ডিজাইন | explainer | bn | 48 | title only | yes |
| `architecture/horizontal-scaling` | `qCH9OfYZObI` | KodeKloud | Horizontal vs Vertical Scaling | interview | en | 135 | transcript | yes |
| `architecture/horizontal-scaling` | `WvqQe-SZwQw` | Rabbil Hasan | বড় server কিনলেই কি সমস্যা শেষ? Vertical vs Horizontal Scaling \| Scaling | compare | bn | 51 | title + description | yes |
| `architecture/load-balancer` | `dBE7flDPctM` | KodeKloud | How does load balancer work? | explainer | en | 174 | transcript | yes |
| `architecture/load-balancer` | `BpGljU1miLI` | KodeKloud | System Design: Designing Load Balancer | explainer | en | 171 | transcript | yes |
| `architecture/load-balancer` | `gOn2qZs5oZo` | NeetCodeIO | Load Balancers & CDNs | explainer | en | 60 | transcript | yes |
| `architecture/load-balancer` | `kTvkQ5VMZ_c` | Nabid In Motion | What is a Load Balancer? (Bangla) \| সিস্টেমের ট্রাফিক পুলিশ! \| System Design Unplugged Ep 02 Shorts | explainer | bn | 61 | title only | yes |
| `architecture/stateless-service` | `4GwXyVIbKfY` | KodeKloud | Stateful vs. Stateless Architecture! | compare | en | 180 | transcript | yes |
| `architecture/stateless-service` | `OAx7Z99pFyQ` | Hussein Nasser | Stateless vs Stateful Protocols (HTTP vs TCP) | compare | en | 61 | transcript | yes |
| `architecture/stateless-service` | `ho9nKj3lFkU` | Hussein Nasser | How to tell if a Backend Application is stateless? | explainer | en | 59 | transcript | yes |
| `architecture/object-storage` | `PTtYs2yeuwc` | KodeKloud | AWS Amazon S3 Files Explained | explainer | en | 87 | transcript | yes |
| `architecture/object-storage` | `ro0-3O-x9TE` | KodeKloud | Public S3 Bucket! | interview | en | 141 | transcript | yes |
| `architecture/cdn` | `KWZEO1jW-0k` | ByteVerseToon | Fast Server, Slow Pictures? What a CDN Does | explainer | en | 33 | transcript | yes |
| `architecture/cdn` | `RcxK91GkcaQ` | The Code Architect | Speed Up Your Website: CDN Explained in 60 Seconds! | explainer | en | 51 | transcript | yes |
| `architecture/cdn` | `2Pc_46DBKHE` | Rabbil Hasan | ভিডিও ভাইরাল হলে লাখো মানুষ একসাথে দেখে কীভাবে? \| CDN | explainer | bn | 44 | title + description | yes |
| `architecture/cloud-architecture` | `p_ckFfh7rwk` | Range Full Stack | How Hotstar Handles 1 Crore Users? \| Pre-Warming vs Auto Scaling | interview | en | 38 | transcript | yes |
| `architecture/cloud-architecture` | `yJ3U4TJqya0` | Google Cloud Tech | Cloud Run vs.Compute Engine: When should you run a container on serverless vs. managing a full VM? | compare | en | 76 | transcript | yes |
| `architecture/cloud-architecture` | `Y93P5HSykiE` | BrainByte with Ami | AWS Regions & Availability Zones Explained in 30 Seconds \| AWS Part 2 | explainer | en | 21 | transcript | yes |
| `architecture/database-replication` | `2VOU9iWo1j8` | KodeKloud | Handling Primary Database Failovers Safely! | interview | en | 146 | transcript | yes |
| `architecture/database-replication` | `scRrxeRqU0Y` | KodeKloud | What Is Multi-Leader Replication in Databases? | explainer | en | 118 | transcript | yes |
| `architecture/database-replication` | `I4uxWFDJ-so` | Alada School | Why need Read Replication for Scale Database? | explainer | bn | 31 | title + description | yes |
| `architecture/database-replication` | `phjvIV0ma-Y` | Alada School | Replication lags | explainer | bn | 52 | translated captions | yes |
| `architecture/caching` | `x8lcdDbKZto` | ByteByteGo | Why is Redis so FAST | explainer | en | 48 | transcript | yes |
| `architecture/caching` | `hMOai9Wnlr8` | Amigoscode | How Cache-Aside Works with Redis | explainer | en | 21 | transcript | yes |
| `architecture/caching` | `CTCwLY-OqeA` | KodeKloud | System Design: Building Caching System! | explainer | en | 148 | transcript | yes |
| `architecture/caching` | `41YM-75KYL4` | ByteByteGo | Top Redis Use Cases | explainer | en | 50 | transcript | yes |
| `architecture/distributed-cache` | `AIuZExZFHNU` | KodeKloud | Consistent Hashing Explained (System Design Basics) | explainer | en | 166 | transcript | yes |
| `architecture/distributed-cache` | `wO_3_s0K1_I` | SystemDesignIn30seconds | Redis vs Memcached: Which Cache Should You Choose? | compare | en | 22 | transcript | yes |
| `architecture/distributed-cache` | `NUlbMVRNNbQ` | The Code Architect | Scale Your Apps! Design a Distributed Cache (Redis/Memcached) | explainer | en | 58 | transcript | yes |
| `architecture/rate-limiting` | `_92bbCcp_7k` | KodeKloud | System Design: How to Build an API Rate Limiter | explainer | en | 168 | transcript | yes |
| `architecture/rate-limiting` | `5c8uORUlZEc` | Learn with Sumit - LWS - Bangladesh | Rate Limiting কীভাবে কাজ করে? 429, Token Bucket, Redis | explainer | bn | 69 | title + description | yes |
| `architecture/rate-limiting` | `2QZO7_CrjWo` | Rabbil Hasan | কেউ তোমার নম্বরে ১০০টা OTP পাঠালে server কেন থামায় না? Rate Limiting | explainer | bn | 46 | title + description | yes |
| `architecture/message-queue` | `zwerYz8U7_M` | Hussein Nasser | Backend Message Queues Explained In 60 Seconds | explainer | en | 55 | frames + title | yes |
| `architecture/message-queue` | `GddXpLm7ta0` | KodeKloud | Synchronous vs Asynchronous Requests Explained (System Design Basics) | explainer | en | 180 | transcript | yes |
| `architecture/message-queue` | `53bqCrub9hg` | ScaleCraft | This Message Keeps Failing. Dead Letter Queue Explained | explainer | en | 18 | transcript | yes |
| `architecture/message-queue` | `m6IHV5qHBOc` | Nabid In Motion | Message Queues কি? সিস্টেমের ট্রাফিক জ্যাম কমানোর ম্যাজিক! \| System Design Unplugged Ep 09 Shorts | explainer | bn | 59 | title + description | yes |
| `architecture/idempotency` | `GdheM2uRZrA` | Nikhil Tiwari | Prevent Duplicate Payments with Idempotency | explainer | en | 32 | transcript | yes |
| `architecture/idempotency` | `_xIWCW-n0L8` | Rabbil Hasan | Pay button দুবার চাপলে কি টাকা দুবার কাটতে পারে? \| Idempotency | explainer | bn | 46 | title + description | yes |
| `architecture/idempotency` | `17IOh0y-eeU` | Three Minute Architect | Why a queue can deliver the same message twice | explainer | en | 60 | transcript | yes |
| `architecture/idempotency` | `NHFAWD3OkAU` | Confluent, an IBM Company | Are You Misconfiguring Producer Retries? \| Kafka Developer Mistakes | mistake | en | 56 | transcript | yes |
| `architecture/api-gateway` | `B08hVQfqO9Y` | techtalkswithravi | Why Do We Need an API Gateway? \| System Design Explained in 10 Seconds | explainer | en | 11 | transcript | yes |
| `architecture/api-gateway` | `Yfa2bfXNrPI` | Nabid In Motion | API Gateway কি? আপনার সিস্টেমের স্মার্ট সিকিউরিটি গার্ড \| System Design Unplugged Ep 07 Shorts | explainer | bn | 56 | title + description | yes |
| `architecture/monolith-microservices` | `DaIupVIj25I` | KodeKloud | Microservices Trap Nobody Mentions | mistake | en | 75 | transcript | yes |
| `architecture/monolith-microservices` | `n8aTZ0o8pdw` | KodeKloud | Monolithic or Microservices Architecture | compare | en | 51 | frames + title | yes |
| `architecture/monolith-microservices` | `xk5jt61f_24` | Software Engineering Insights | Microservice Design Patterns : SAGA Design Pattern in less than 60 seconds | explainer | en | 42 | transcript | yes |
| `architecture/observability` | `nzg8KxL5ftI` | KodeKloud | How Distributed Tracing Works Across Microservices in Kubernetes | explainer | en | 157 | transcript | yes |
| `architecture/observability` | `pR0vcoh-bbY` | KodeKloud | System Design: Logs Collection Pipeline for Microservices | explainer | en | 134 | transcript | yes |
| `architecture/observability` | `wCnjwvS2fqw` | Nikhil Tiwari | Production Monitoring Explained | explainer | en | 27 | transcript | yes |
| `system-design/kafka` | `Bc6oyURRIxQ` | ByteByteGo | Kafka Basics | explainer | en | 58 | transcript | yes |
| `system-design/kafka` | `wvLdBJEl-wc` | ByteByteGo | Why is Kafka FAST? Part 1 | explainer | en | 125 | transcript | yes |
| `system-design/kafka` | `fe57ccAkZtY` | KodeKloud | Why Every Backend Uses Kafka | interview | en | 157 | transcript | yes |
| `system-design/kafka` | `yuUDgR1kSnc` | Confluent, an IBM Company | Kafka Consumer Partition Assignment | explainer | en | 58 | transcript | yes |
| `system-design/google-search` | `KjNqUivtc5A` | KodeKloud | How Google Search Actually Works | real-system | en | 164 | transcript | yes |
| `system-design/google-search` | `ZSFSA1Tx6lk` | KodeKloud | Interview: What Is a Bloom Filter? | interview | en | 169 | transcript | yes |
| `system-design/google-search` | `MF1ox1-PcaY` | Tejav Academy | HLD — Inverted Index Explained How Search Engines Find Pages Without Scanning Everything! | explainer | en | 60 | frames + title | yes |
| `system-design/youtube` | `kRAyQ99EfTY` | KodeKloud | YouTube Video Transcoding Pipeline \| System Design Interview | interview | en | 175 | transcript | yes |
| `system-design/youtube` | `weFC9-w9J6s` | KodeKloud | System Design: How YouTube Knows Where to Resume | interview | en | 167 | transcript | yes |
| `system-design/google-docs` | `0F2BIarnYQo` | Systems in Ink | How two people type in one doc at once | explainer | en | 56 | transcript | yes |
| `system-design/google-docs` | `tLtHk5r0qZc` | BitSized | Conflict-Free Replicated Data Types | explainer | en | 59 | transcript | yes |
| `system-design/google-docs` | `Yt1RvXGf2tU` | The Frontend Round | Figma asks: How to design a collaborative editor frontend \| frontend interview | interview | en | 25 | frames + title | yes |
| `system-design/whatsapp` | `8A48hZtoUPc` | KodeKloud | How WhatsApp Delivers 100 Billion Messages a Day | real-system | en | 179 | transcript | yes |
| `system-design/whatsapp` | `7UyhyhxdFsQ` | KodeKloud | How WhatsApp Video Sharing Works? | real-system | en | 128 | transcript | yes |
| `system-design/whatsapp` | `5f0gZruaH9Y` | NeetCodeIO | WebSocket Protocol Explained | explainer | en | 34 | transcript | yes |
| `system-design/airbnb` | `aKbUH9EJLrA` | Rabbil Hasan | বাসের শেষ সিটটা দুজন একসাথে Book করলে টিকিট পাবে কে? \| Database Transaction | explainer | bn | 47 | title + description | yes |
| `system-design/airbnb` | `Ug8h462BMDI` | NeetCodeIO | ACID & NoSQL Explained | explainer | en | 55 | transcript | yes |
| `system-design/airbnb` | `6C61eyS5pbQ` | Range Full Stack | How IRCTC Prevents Double Booking? \| Race Condition Explained | explainer | en | 47 | transcript | yes |
| `system-design/spotify` | `aei5tsd3L0s` | ByteMonk | How Spotify Uses Service Decomposition for Scalability | real-system | en | 60 | transcript | yes |
| `system-design/spotify` | `v1J26fD-e5I` | KodeKloud | What Happens When You Click Play on Netflix? (System Design Explained) | real-system | en | 57 | transcript | yes |
| `system-design/spotify` | `rJA3UijAzTg` | KodeKloud | How Netflix Streams to 300M Users! | real-system | en | 171 | transcript | yes |
| `system-design/slack` | `dKZMLu_FXiQ` | Amigoscode | WebSockets sound perfect. So why aren't they the default? | explainer | en | 54 | transcript | yes |
| `system-design/slack` | `f7KgDNZU3-Y` | ByteByteGo | gRPC, WebSocket and WebHook! | compare | en | 52 | transcript | yes |
| `system-design/reddit` | `TpQcMLhIgkw` | PUQ Cloud | What Even Is a Job Queue? | explainer | en | 24 | transcript | yes |
| `system-design/reddit` | `UL8MZjAmIjc` | CodeCrack | Why Your Like Counter Is Secretly Wrong (Lost Update) | mistake | en | 55 | transcript | yes |
| `system-design/reddit` | `HsYf5sKCFHw` | ScaleCraft | Optimistic Locking Explained: Rejecting Stale Updates | explainer | en | 16 | transcript | yes |
| `system-design/bluesky` | `CPUB7v6wK7k` | LeafPlaza | Bluesky Runs on This: the AT Protocol in 30 Seconds | explainer | en | 32 | transcript | yes |
| `system-design/bluesky` | `f5w5md0Ov_Y` | LeafPlaza | Why Bluesky Isn't Just Twitter 2.0 | compare | en | 37 | transcript | yes |
| `system-design/twitter` | `JUj9DEjEx0o` | Systems in Ink | Fan-out on write vs read: the feed trade-off | compare | en | 56 | transcript | yes |
| `system-design/twitter` | `3781H2Xh2yA` | The Hot Path | Design Instagram's Feed | explainer | en | 60 | transcript | yes |
| `system-design/twitter` | `cZ2iKi5N-2g` | KodeKloud | How Instagram's Home Feed Actually Works | real-system | en | 176 | transcript | yes |
| `system-design/twitter` | `kSqaxW-tHHU` | Tejav Academy | HLD — Design Twitter/X How Does ONE Post Reach MILLIONS of Feeds Instantly? | explainer | en | 60 | frames + title | yes |
| `system-design/uber-eta` | `qG4rR-bdCHg` | KodeKloud | How Uber Knows Your Driver is 8 Minutes Away? | real-system | en | 164 | transcript | yes |
| `system-design/uber-eta` | `G5YdN3N3sPk` | KodeKloud | How Google Maps Detects Traffic Jams | real-system | en | 159 | transcript | yes |
| `system-design/uber-eta` | `qhHV9z0v3nI` | Rabbil Hasan | Ride app-এ গাড়িটা live নড়ে কীভাবে? \| GPS + Real-time | explainer | bn | 42 | title + description | yes |
| `system-design/uber-eta` | `xeJK1KxLdUE` | Phitron | Dijkstra's Algorithm : খুঁজে নিন আপনার প্রয়োজনীয় Shortest path | explainer | bn | 57 | title only | yes |
| `system-design/url-shortener` | `hJQgRmXUn5o` | Solutions Architect Insights | How URL Shorteners Work (TinyURL System Design) | explainer | en | 35 | transcript | yes |
| `system-design/url-shortener` | `MAylSnNKAKo` | The Code Architect | Crush Long Links: Design a URL Shortener! | explainer | en | 51 | transcript | yes |
| `system-design/url-shortener` | `Eur837UnXtQ` | Rabbil Hasan | ছোট্ট একটা link click করলেই সঠিক website খোলে কীভাবে? URL Shortener | explainer | bn | 49 | title + description | yes |
| `system-design/stock-exchange` | `d5M3ydo8Shw` | Software Engineering Insights | Microservice Design Patterns : Event Sourcing Design Pattern in 60 seconds | explainer | en | 34 | transcript | yes |
| `system-design/stock-exchange` | `DBYBjhC0Xec` | Unlisted Buzz | How NSE Works in 20 Seconds \| Matching Engine, Price Discovery & India’s Fastest Exchange Explained | real-system | en | 24 | transcript | yes |
| `system-design/payment-system` | `4jrEAAq4MOY` | KodeKloud | Design Payment Processing System | explainer | en | 157 | transcript | yes |
| `system-design/payment-system` | `tewVJBvoHDg` | Future Architect | Ledger First Architecture | explainer | en | 57 | transcript | yes |
| `system-design/payment-system` | `w-FktHoHza0` | Future Architect | PCI DSS & Data Sovereignty | explainer | en | 54 | transcript | yes |
| `system-design/payment-system` | `pgcnmQfIFeU` | Amigoscode | Webhooks: what Stripe warns you about | explainer | en | 56 | transcript | yes |

Reels: 102.
