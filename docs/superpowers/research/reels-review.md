# Reels review log

One row per reel on the topic pages of nine modules (Architecture, System Design, AI Engineering, AI Harnesses, AI Skills, AI Concepts, Agent Memory, How AI Agents Work, and AI/ML Testing), on the 12 stages of Linux, and on the 11 chapters of Fundamentals. A reel is another creator's video. It is not a source of the page and it is not fact-checked like the page text.

How each reel was checked: `/shorts/<id>` answers 200 (a real Short); YouTube's oEmbed answers 200 (public, embeddable); the official IFrame Player API loads it and reaches the playing state in headless Chrome, and reports the length. Evidence: `transcript` = the video has captions in the language it is spoken in (English captions, or Bangla automatic captions that were read in Bangla), which were used to screen it against the page (excerpts were read, not every transcript in full); `translated captions` = only machine-translated captions exist; `frames + title` = no captions, but the on-screen text of 3 frames was read; `title + description` = no captions, so the title, the description, and the channel were judged (typical for Bangla: the spoken words were not checked); `title only` = nothing else was read.

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
| `ai-engineering/prompt-engineering` | `3dm6nfOxO1c` | codebasics | What is prompt engineering? | explainer | en | 25 | transcript | yes |
| `ai-engineering/prompt-engineering` | `FbAxP2-Jfps` | Anthropic | AI Prompt Engineering 101: Explained | explainer | en | 60 | transcript | yes |
| `ai-engineering/calling-llm-apis` | `kQMQGormS4I` | KodeKloud | How LLM API Calls Actually Work (OpenAI SDK vs Raw HTTP) | explainer | en | 74 | transcript | yes |
| `ai-engineering/calling-llm-apis` | `PrXJgsC_ysY` | AssemblyAI | Getting started with OpenAI API on Python | explainer | en | 56 | transcript | yes |
| `ai-engineering/building-chatbots` | `fK_T-AiwvWw` | Rayhan AI Architecture | চ্যাটবট বানানো সহজ! কিন্তু Production-এ টিকবে তো? \| AI Engineering | explainer | bn | 26 | transcript | yes |
| `ai-engineering/building-chatbots` | `7p-Ys3RIbIg` | The Seams | LLM Chat Memory: Re-Send Conversation History | explainer | en | 40 | transcript | yes |
| `ai-engineering/building-chatbots` | `bpqm_Jhjh-o` | The Seams | LLM Chat Memory: Trim Long Conversation History | explainer | en | 52 | transcript | yes |
| `ai-engineering/building-chatbots` | `SEI6BVU9tuA` | Kuro Explains | Why Does ChatGPT Forget What You Just Said? (Context Window Explained) | animation | en | 44 | transcript | yes |
| `ai-engineering/using-langchain` | `HDjeZYduNcs` | Pavan Belagatti | What is LangChain? | explainer | en | 142 | transcript | yes |
| `ai-engineering/using-langchain` | `Chbv9X3SRJE` | IBM Technology | CHAIN REACTION: Unlocking the Power of LangChain | explainer | en | 53 | transcript | yes |
| `ai-engineering/using-langchain` | `iYH8E8J2RVs` | Pavan Belagatti | LangChain vs LangGraph! | compare | en | 180 | transcript | yes |
| `ai-engineering/using-langchain` | `I77wm5WKdJQ` | KodeKloud | When LangChain Isn't Enough → Try LangGraph! | compare | en | 178 | transcript | yes |
| `ai-engineering/rag-basics` | `1468HyDi5Yw` | Tech With Tim | How AI Agents Remember Long Term Vector Databases + RAG | explainer | en | 38 | transcript | yes |
| `ai-engineering/rag-basics` | `FN1tz26155o` | Rayhan AI Architecture | RAG কীভাবে কাজ করে? \| AI কীভাবে নিজের Knowledge থেকে উত্তর দেয় | explainer | bn | 41 | transcript | yes |
| `ai-engineering/rag-basics` | `XCwMlBkUJdo` | Rayhan AI Architecture | RAG মানেই Vector DB? ৯০% মানুষ এখানেই ভুল করে | mistake | bn | 29 | transcript | yes |
| `ai-engineering/ai-agents` | `BF2k_fKuCVM` | Jeff Su | AI Agents explained in 3 steps | explainer | en | 52 | transcript | yes |
| `ai-engineering/ai-agents` | `FRrp0Px0peY` | Pavan Belagatti | Understanding AI Types: Generative AI vs AI Agents vs Agentic AI! | compare | en | 72 | transcript | yes |
| `ai-engineering/ai-agents` | `YeD7ZcOwDqk` | Rayhan AI Architecture | AI Agents: The Future of Work \| কেন AI Agent দরকার? | explainer | bn | 31 | transcript | yes |
| `ai-engineering/vector-databases` | `-P6Muecu_wI` | MongoDB | What is Vector Search and How Do Vector Databases Work? | explainer | en | 60 | transcript | yes |
| `ai-engineering/vector-databases` | `n7JyJcP5vJ4` | Pinecone | Vector databases like Pinecone are powerful because they allow application developers to build | explainer | en | 50 | transcript | yes |
| `ai-engineering/vector-databases` | `_yFL2qgi23I` | Rayhan AI Architecture | Vector Database আসলে কী? \| RAG কীভাবে Relevant Data খুঁজে পায়? | explainer | bn | 21 | transcript | yes |
| `ai-engineering/vector-databases` | `SGCARmUSHbk` | Rayhan AI Architecture | Embeddings আসলে কী? \| AI কীভাবে Text-এর Meaning বোঝে? | explainer | bn | 29 | transcript | yes |
| `ai-engineering/fine-tuning` | `0iFEtnHyzE0` | Shaw Talebi | Fine-tuning EXPLAINED in 40 sec | explainer | en | 39 | transcript | yes |
| `ai-engineering/fine-tuning` | `K3wZYRAaCuc` | KodeKloud | Prompt engineering is a lie. Here's what actually works | explainer | en | 168 | transcript | yes |
| `ai-engineering/fine-tuning` | `aOZOH-9GH-E` | Pavan Belagatti | What is fine-tuning in LLMs? | explainer | en | 165 | transcript | yes |
| `ai-engineering/fine-tuning` | `Hy9DmHo64Bc` | Nabid In Motion | AI Model কে সব মুখস্থ করাবেন না! RAG vs Fine-tuning এর আসল পার্থক্য Shorts | compare | bn | 56 | transcript | yes |
| `ai-engineering/data-pipelines` | `krVJh7KLKn0` | MongoDB | What is Chunking in AI? A Solution to Passing Large Documents | explainer | en | 61 | transcript | yes |
| `ai-engineering/data-pipelines` | `u7VQzUTXAtQ` | Pinecone | Using Metadata in RAG Systems | explainer | en | 48 | transcript | yes |
| `ai-engineering/data-pipelines` | `QPQg4DtX_mo` | Nabid In Motion | নোংরা ডাটা দিয়ে কি AI সম্ভব? Data Cleaning Explained (পার্ট-৬) Shorts | explainer | bn | 58 | transcript | yes |
| `ai-engineering/retrieval-engineering` | `jZeEFKdjSP4` | Pinecone | Cascading Retrieval vs Hybrid Search | explainer | en | 47 | transcript | yes |
| `ai-engineering/retrieval-engineering` | `fvgr2OmLhTg` | MongoDB | Vector Search + Text Search = Results! \| MongoDB Hybrid Search | explainer | en | 86 | transcript | yes |
| `ai-engineering/retrieval-engineering` | `luafD8DqB1o` | Rayhan AI Architecture | Reranking কী? \| RAG কীভাব ে সবচেয়ে Relevant Result বেছ ে নেয়? | explainer | bn | 31 | transcript | yes |
| `ai-engineering/context-engineering` | `AfHU2BL-Bjs` | KodeKloud | Why Context Engineering Is the Future of AI? | explainer | en | 174 | transcript | yes |
| `ai-engineering/context-engineering` | `-PAavWCzhF4` | Google Cloud Tech | 4 pillars of context engineering for AI agents | explainer | en | 51 | transcript | yes |
| `ai-engineering/context-engineering` | `6QJJ7yv9GRk` | Gaurav Sen | AI Engineering: 1M context windows | explainer | en | 105 | transcript | yes |
| `ai-engineering/context-engineering` | `P6uoMAVnkf0` | Rayhan AI Architecture | AI-কে বেশি Data দিলেই কি Result ভালো হবে? \| Context Engineering | explainer | bn | 31 | transcript | yes |
| `ai-engineering/model-evaluation` | `Sfw-6xR3Jo8` | Aish Reganti | How AI agents cheat on coding benchmarks | explainer | en | 100 | transcript | yes |
| `ai-engineering/model-evaluation` | `aFjWvkKhBTI` | Jessica Wang | What Are AI Evals | explainer | en | 45 | transcript | yes |
| `ai-engineering/agent-orchestration` | `AwrLcTW0lNM` | TestMu AI (Formerly LambdaTest) | What Is an AI Orchestrator? AI Agent Orchestration Explained | explainer | en | 64 | transcript | yes |
| `ai-engineering/agent-orchestration` | `7liBQxFSIuE` | Gaurav Sen | Multi-Agent Orchestration by OpenAI - Swarm | explainer | en | 53 | transcript | yes |
| `ai-engineering/agent-orchestration` | `k4e-e82ApkE` | Rayhan AI Architecture | একটি AI এজেন্ট দিয়ে সব কাজ করচ্ছেন? বড় ভুল! \| Multi-Agent Systems | mistake | bn | 31 | transcript | yes |
| `ai-engineering/tool-calling` | `4vfDgLvuNQk` | Google Cloud Tech | Function calling for LLMs, what is it? | explainer | en | 54 | transcript | yes |
| `ai-engineering/tool-calling` | `TJGmO5ZFJYQ` | Postman | Function Calling: How AI Uses Your APIs | explainer | en | 167 | transcript | yes |
| `ai-engineering/tool-calling` | `dY9521SoRkI` | AI in Hindi \| Cloud Edventures | Tool Use / Function Calling: How Claude Runs Code | explainer | en | 36 | transcript | yes |
| `ai-engineering/structured-outputs` | `6jUk_m5r3vM` | Vellumy | Structured Outputs in ChatGPT \| Explained in 30 seconds | explainer | en | 33 | transcript | yes |
| `ai-engineering/structured-outputs` | `DuC2EcLqTWY` | Atef Ataya | What is OpenAI Structured Outputs? | explainer | en | 35 | transcript | yes |
| `ai-engineering/guardrails-and-safety` | `2U8z7y3uTYE` | Matt Pocock | The hidden security risk in your system prompts | explainer | en | 122 | transcript | yes |
| `ai-engineering/guardrails-and-safety` | `NQhsLVmuItA` | Nate Herk \| AI Automation | n8n's NEW Guardrail Node is a Gamechanger for AI Agents | explainer | en | 84 | transcript | yes |
| `ai-engineering/model-routing` | `f-rFWcSmWkY` | Databricks | 1. AI Model Routing: How Smart Routing Picks the Right LLM | explainer | en | 94 | transcript | yes |
| `ai-engineering/model-routing` | `PU--u4q_xwg` | Tech world since 2025 | LiteLLM vs OpenRouter! Which one should YOU use with OpenAI Agents SDK? | compare | en | 49 | transcript | yes |
| `ai-engineering/observability` | `hLxrj2uiQt8` | Tech With Tim | LLMOps The AI Engineering Skill Employers Care About Most | explainer | en | 47 | transcript | yes |
| `ai-engineering/observability` | `hwkefavUd3Q` | LangChain | Why Clay's Finance Team Loves LangSmith | explainer | en | 43 | transcript | yes |
| `ai-engineering/latency-optimization` | `5Y_JM6C9xOA` | KodeKloud | How the vLLM inference engine works? | explainer | en | 174 | transcript | yes |
| `ai-engineering/latency-optimization` | `0wC9Igb3STA` | AssemblyAI | From 7-Second Lag to Sub-1.6s — The Voice AI Latency Journey | real-system | en | 106 | transcript | yes |
| `ai-engineering/cost-optimization` | `GUSfx3Z4r4A` | ArthaMatrix | AI Token দ্রুত শেষ হয়ে যাচ্ছে? Token খরচ কমানোর ৫টি সেরা কৌশল! | explainer | bn | 173 | transcript | yes |
| `ai-engineering/cost-optimization` | `7caDFcTAssA` | IBM Technology | Why Are LLMs Expensive to Deploy? | explainer | en | 48 | transcript | yes |
| `ai-engineering/reliability-engineering` | `pFX7spnBGGc` | AI Quality Nerd | Why some apps survived the OpenAI outage: AI gateway failover | explainer | en | 36 | transcript | yes |
| `ai-engineering/security` | `3sM_XmXZnDI` | KodeKloud | AI Security: Preventing Data Leaks in RAG | explainer | en | 165 | transcript | yes |
| `ai-engineering/security` | `jQId5VCOqfs` | Rayhan AI Architecture | API Key আসলে কী? \| AI Project-এ কেন এত গুরুত্বপূর্ণ? | explainer | bn | 41 | transcript | yes |
| `ai-engineering/security` | `uTmidRg-XV8` | Rayhan AI Architecture | AI System Security \| Production AI Secure রাখার Basic Foundation | explainer | bn | 41 | transcript | yes |
| `ai-engineering/ai-infrastructure` | `oM5-knpFPw4` | KodeKloud | Kubernetes Liveness vs Readiness Probes, Done Right! | explainer | en | 168 | transcript | yes |
| `ai-engineering/ai-infrastructure` | `tmQKLYW_M0c` | Rayhan AI Architecture | Docker কী? AI Developer-রা Docker কেন ব্যবহার করে | explainer | bn | 41 | transcript | yes |
| `ai-engineering/ai-infrastructure` | `gWouZYfYRM4` | Rayhan AI Architecture | Production Server-এ AI System Deploy করার সিক্রেট! \| Part 3 | explainer | bn | 30 | transcript | yes |
| `ai-engineering/ci-cd-for-ai` | `ejRNIIZ0rCk` | Amigoscode | CI CD with GitHub Actions Explained in 60 Seconds. | explainer | en | 56 | transcript | yes |
| `ai-engineering/ci-cd-for-ai` | `VMKGSGCZZdE` | Nabid In Motion | কোডিং হবে রোবটের মাধ্যমে! \| GitHub Actions & CI/CD Bangla Tutorial \| (Bangla) - Part 8 Shorts | explainer | bn | 59 | transcript | yes |
| `ai-engineering/production-monitoring` | `nO84ztgzPV0` | Rajeev Kanth \| BEPEC | Model Drift vs Concept Drift: Tips for Data Scientists!!! | explainer | en | 58 | transcript | yes |
| `ai-engineering/human-in-the-loop` | `DTnL32C1UMw` | Leon van Zyl | OpenAI Agent Builder: Human-in-the-Loop Optimization | explainer | en | 39 | transcript | yes |
| `ai-engineering/human-in-the-loop` | `BxuHokLhCOQ` | Rayhan AI Architecture | AI Agent কি সব সিদ্ধান্ত নিজেই নেবে? \| Human-in-the-Loop Explained | explainer | bn | 21 | transcript | yes |
| `ai-engineering/human-in-the-loop` | `UCxw_q8yqwg` | n8n | New one click human review node for n8n tools | explainer | en | 41 | transcript | yes |
| `ai-engineering/data-governance` | `n3l518qym3o` | Nabid In Motion | সাবধান! AI Rules না মানলে আপনার প্রজেক্ট ব্যান হতে পারে \| GDPR & EU AI Act Shorts | explainer | bn | 59 | transcript | yes |
| `ai-engineering/data-governance` | `U5W1MqH3aZs` | Stanford Online | Myth: You Need to Host Your Own Model for Security or Privacy | explainer | en | 59 | transcript | yes |
| `ai-engineering/system-design` | `FTMFprsV-wI` | Gaurav Sen | AI System Design in 2026 | explainer | en | 63 | transcript | yes |
| `ai-engineering/system-design` | `oGNSz3HTP9w` | Marina Wyss - AI & Machine Learning | Why bother learning ML System Design? | explainer | en | 26 | transcript | yes |
| `harness/agent-loop` | `854E1jORFI0` | Tech With Tim | The AI Agent Loop Explained | explainer | en | 40 | transcript | yes |
| `harness/agent-loop` | `-HtvTk5mv4Q` | Google Cloud Tech | 5 things every AI agent harness needs | explainer | en | 80 | transcript | yes |
| `harness/agent-loop` | `cW5Vgp00wRE` | ArthaMatrix | সহজ ভাষায় বুঝুন Loop Engineering কি? Loop Engineering vs Prompt Engineering | explainer | bn | 136 | transcript | yes |
| `harness/tool-calling` | `Fb_FJCfVI54` | Pavan Belagatti | Tool Calling in LLMs! | explainer | en | 112 | transcript | yes |
| `harness/tool-calling` | `Fanndh77I7w` | KodeKloud | Tool Calling in RAG | explainer | en | 99 | transcript | yes |
| `harness/tool-calling` | `Hm59uXECwEU` | Mastra | Most developers overcomplicate AI tool calling | explainer | en | 132 | transcript | yes |
| `harness/tool-calling` | `C2Jl1inw_7M` | Rayhan AI Architecture | Tool Calling কীভাবে কাজ করে? \| AI কীভাবে নিজেই Tools ব্যবহার করে | explainer | bn | 30 | transcript | yes |
| `harness/context-management` | `9P36wMntNSI` | Matt Pocock | Stop stuffing your context window (here's why) | explainer | en | 129 | transcript | yes |
| `harness/context-management` | `zkf1BMXvqF0` | KodeKloud | What Is a Context Window? | explainer | en | 76 | transcript | yes |
| `harness/context-management` | `U1S4FvRFRiY` | Aish Reganti | The Context Window Problem Nobody Talks About | explainer | en | 134 | transcript | yes |
| `harness/checkpointing` | `BrNDjc3FNTA` | Ali Hamza | Crash-Proof AI Agents: Durable Execution in LangGraph Explained | explainer | en | 37 | transcript | yes |
| `harness/checkpointing` | `heC_iX8GBH4` | @AIEnthusiast26 | Claude Code's Hidden Time Machine — Rewind Any Mistake | real-system | en | 50 | transcript | yes |
| `harness/checkpointing` | `3-sSbJKb-fQ` | Hugging Face | Pi Durable: AI agents that survive crashes | explainer | en | 75 | transcript | yes |
| `harness/permissions-and-sandboxing` | `N0GPmj0ipQQ` | Mastra | Why Every AI Agent Needs a Sandbox | explainer | en | 50 | transcript | yes |
| `harness/permissions-and-sandboxing` | `g_OqeRku5Pc` | LangChain | Should You Use a Sandbox for Your Agent? \| Max Agency | explainer | en | 63 | transcript | yes |
| `harness/permissions-and-sandboxing` | `hj7Andj7nQE` | Gaurav Sen | OpenAI agents use internet without permission. | real-system | en | 63 | transcript | yes |
| `harness/permissions-and-sandboxing` | `3PwysYGHBnw` | Rayhan AI Architecture | AI Agent-কে সব Tool-এর Access দেওয়া কি নিরাপদ? | explainer | bn | 21 | transcript | yes |
| `harness/guardrails` | `Q9I8sMfq-FM` | Matt Pocock | Building LLM apps that don't suck - Guardrails | explainer | en | 62 | transcript | yes |
| `harness/guardrails` | `ig2JpD_sAHE` | KodeKloud | What Are AI Guardrails and How Do They Work! | explainer | en | 170 | transcript | yes |
| `harness/guardrails` | `bapHyVIJ0Ec` | Amigoscode | Make Claude Code Run Your Tests Every Time: Hooks | explainer | en | 68 | transcript | yes |
| `ai-skills/prompting` | `2kvCNlpDFK0` | Google Cloud Tech | Chain of thought (CoT) prompting | explainer | en | 55 | transcript | yes |
| `ai-skills/prompting` | `EiqrctWLnKQ` | Unity My Academy | Prompt Engineering কী? AI-এর সাথে কথা বলার শিল্প! | explainer | bn | 25 | transcript | yes |
| `ai-skills/prompting` | `2-ljCXbmlzo` | ArthaMatrix | সাধারণ Prompt বনাম System Prompt-এর পার্থক্য! | explainer | bn | 128 | transcript | yes |
| `ai-skills/context-engineering` | `ssxIXBBY9xM` | Pavan Belagatti | RAG vs Context Engineering! | explainer | en | 61 | transcript | yes |
| `ai-skills/context-engineering` | `9txtxqyGOL4` | Nate Herk \| AI Automation | Context Engineering for AI Agents (Learn This NOW) | explainer | en | 125 | transcript | yes |
| `ai-skills/context-engineering` | `hQqhVs3-ijk` | ArthaMatrix | বারবার AI-কে একই Prompt দিচ্ছেন? Claude AI-এর Projects & Context Engine বদলে দেবে আপনার Workflow! | explainer | bn | 37 | transcript | yes |
| `ai-skills/ai-research` | `PZ5Q-OKOMX4` | IBM Technology | AI Research Agents in Action | explainer | en | 36 | transcript | yes |
| `ai-skills/ai-research` | `MCS7ikRGmaw` | ArthaMatrix | 2 AI দিয়ে Advanced Research-এর দারুণ কৌশল! \| Perplexity Pro + Claude \| ArthaMatrix | explainer | bn | 56 | transcript | yes |
| `ai-skills/ai-research` | `c71V2fAaIeE` | ArthaMatrix | সম্পূর্ণ বিনামূল্যে আপনার নিজস্ব AI রিসার্চ টিম! \| Google NotebookLM Bangla | explainer | bn | 163 | transcript | yes |
| `ai-skills/workflow-automation` | `DwGtVdllKRo` | Zapier | New to Zapier? Build Your First Lead Automation (No Code!) | explainer | en | 22 | transcript | yes |
| `ai-skills/workflow-automation` | `aXf51HXzqLw` | Leon van Zyl | Create an AI Chatbot in Minutes Using n8n! (No Coding Required) | explainer | en | 34 | transcript | yes |
| `ai-skills/ai-agents` | `VxDNUKw83PY` | Matt Pocock | AI Agents are SO simple to build | explainer | en | 155 | transcript | yes |
| `ai-skills/ai-agents` | `3lQXYNUyv5o` | Stanford Online | Why AI Agents Matter Now with Stanford's Azalia Mirhoseini and Aakanksha Chowdhery | explainer | en | 57 | transcript | yes |
| `ai-skills/ai-agents` | `NvKowH8PnaA` | KodeKloud | Build AI Agents in 60 Seconds \| Google ADK Tutorial | explainer | en | 49 | transcript | yes |
| `ai-skills/rag` | `jG-gbB0ULac` | KodeKloud | What is RAG? How AI Chatbots Access Your Custom Data (Explained Simply) | explainer | en | 175 | transcript | yes |
| `ai-skills/rag` | `uDfUvC1oi3M` | KodeKloud | Poor Chunking Strategy Undermine RAG System | explainer | en | 94 | transcript | yes |
| `ai-skills/rag` | `Tb8FBY3rI0E` | Rayhan AI Architecture | AI Agent + RAG কীভাবে একসাথে কাজ করে? \| AI That Knows & Acts | explainer | bn | 41 | transcript | yes |
| `ai-skills/data-enrichment` | `eBA2AgLTs0U` | Nishkarsh Agarwal | Why One Email Finder Isn't Enough (Data Enrichment Waterfalls) | explainer | en | 42 | transcript | yes |
| `ai-skills/data-enrichment` | `eV65DGmphIU` | IBM Technology | Synthetic Data | explainer | en | 58 | transcript | yes |
| `ai-skills/vibe-coding` | `dVDATeeCWcM` | Tech With Tim | Claude Code Skills to Stop You from Vibe Coding Junk | explainer | en | 35 | transcript | yes |
| `ai-skills/vibe-coding` | `zQCSPGtQPrM` | ArthaMatrix | ভাইব কোডিং (Vibe Coding) কী? কোডিং না জেনেই এআই দিয়ে অ্যাপ বানান! | explainer | bn | 62 | transcript | yes |
| `ai-skills/mcp-connectors` | `kO21vdEQS5g` | Pavan Belagatti | WTH is Model Context Protocol (MCP)! | explainer | en | 56 | transcript | yes |
| `ai-skills/mcp-connectors` | `iGJTw_PWogs` | KodeKloud | Why We Need MCP When APIs Already Exist | explainer | en | 179 | transcript | yes |
| `ai-skills/mcp-connectors` | `4q5FEKWwfh0` | Rayhan AI Architecture | MCP Server Explained! একটা Tool Call-এর পেছনে কী ঘটে? | explainer | bn | 34 | transcript | yes |
| `ai-skills/ai-evals` | `4lxw0DVTHvc` | New Machina | What are AI and LLM Evals ? | explainer | en | 57 | transcript | yes |
| `ai-skills/ai-evals` | `Zxrqu5H0qb8` | Mastra | The real reason AI evals feel impossible (and how to fix it) | explainer | en | 40 | transcript | yes |
| `ai-skills/ai-evals` | `T1h9IBmGH3A` | Mastra | AI Evals - On the walk over ep2 | explainer | en | 179 | transcript | yes |
| `ai-skills/meeting-intelligence` | `eTK4Z7SeUI4` | AssemblyAI | How Fireflies AI Scaled: Better Speech-to-Text Accuracy and Cheaper LLMs | real-system | en | 43 | transcript | yes |
| `ai-skills/ai-data-analysis` | `8AGyh2Tc1hQ` | Tech With Tim | Your AI Data Science Is Lying to You | mistake | en | 103 | transcript | yes |
| `ai-skills/decks-and-design` | `NzcRprKWbD8` | Claude | Make presentations with Claude Slides | explainer | en | 105 | transcript | yes |
| `ai-skills/decks-and-design` | `qdomkfNtK6Q` | Hablu Programmer | Gamma AI দিয়ে Professional Presentation ১ মিনিটে | explainer | bn | 96 | transcript | yes |
| `ai-skills/ai-governance` | `sA6UA2fMNHg` | IBM Technology | Why is AI Governance Important? | explainer | en | 46 | transcript | yes |
| `ai-skills/ai-governance` | `ORcaA7pD9WY` | IBM Technology | Responsible AI in 60 Seconds | explainer | en | 57 | transcript | yes |
| `ai-skills/ai-governance` | `ITmbZFFGQuI` | Google Cloud Tech | Why AI agents need their own identity & audit trails | explainer | en | 45 | transcript | yes |
| `ai-skills/fine-tuning` | `bRtnM07Vw5w` | TestMu AI (Formerly LambdaTest) | RAG vs Fine Tuning EXPLAINED! | compare | en | 133 | transcript | yes |
| `ai-skills/fine-tuning` | `Zq_aquaEpC0` | Microsoft Developer | Is fine-tuning a model like DeepSeek worth it? | explainer | en | 71 | transcript | yes |
| `ai-skills/fine-tuning` | `Lmwv7P--2zE` | Google Cloud Tech | Fine-tuning use cases | explainer | en | 130 | transcript | yes |
| `ai-skills/open-models` | `dsW2tAO38-Y` | IBM Technology | Will Open Source AI Models Pass Proprietary Models? | explainer | en | 58 | transcript | yes |
| `ai-skills/open-models` | `4ucnsFBQmDA` | IBM Technology | What are the differences between DeepSeek models? | compare | en | 142 | transcript | yes |
| `ai-skills/open-models` | `5J6OXXe4SeM` | Tech With Tim | Why Your Local AI Is Slow | explainer | en | 51 | transcript | yes |
| `ai-skills/open-models` | `l9xZDkhRhyw` | Divya Rajpurohit \| AI Automation | LLaMA vs Ollama explained in 15 seconds! | compare | en | 16 | transcript | yes |
| `ai-skills/voice-agents` | `RsmKGpJ1we4` | Google Cloud Tech | What "real-time voice AI" actually means | explainer | en | 52 | transcript | yes |
| `ai-skills/voice-agents` | `BW0r6_u7Dv4` | AssemblyAI | How to Handle Interruptions in Voice AI Calls | explainer | en | 78 | transcript | yes |
| `ai-skills/image-generation` | `XOfuq-EtZ3A` | Jeff Su | Midjourney vs. Google's Nano Banana | compare | en | 35 | transcript | yes |
| `ai-skills/image-generation` | `j5h9dBtWZXM` | 3Blue1Brown | How AI connects text and images | animation | en | 103 | transcript | yes |
| `ai-concepts/agentic-loops` | `Uimmj3EiXMI` | Google Cloud Tech | What is ReAct prompting? | explainer | en | 60 | transcript | yes |
| `ai-concepts/agentic-loops` | `kRl_8wG_utU` | ArthaMatrix | Agentic Loop Engineering কী এবং কীভাবে কাজ করে? | explainer | bn | 32 | transcript | yes |
| `ai-concepts/agentic-loops` | `tjd5IwgIvIg` | Rayhan AI Architecture | Agentic Workflow কীভাবে কাজ করে? \| AI কীভাবে নিজেই সিদ্ধান্ত নেয় | explainer | bn | 38 | transcript | yes |
| `ai-concepts/mcp` | `r2P6-gqs1xg` | KodeKloud | Model Context Protocol (MCP) Explained in 60 Seconds | explainer | en | 56 | transcript | yes |
| `ai-concepts/mcp` | `rTW1eM0T_90` | Microsoft Developer | What is Model Context Protocol (MCP)? | explainer | en | 55 | transcript | yes |
| `ai-concepts/mcp` | `hCDfrgvsC1M` | Rayhan AI Architecture | MCP কী? (AI-এর USB-C পোর্ট) | explainer | bn | 31 | transcript | yes |
| `ai-concepts/subagents` | `badT4FXj7Mc` | Mastra | Multi-agent systems are the future of AI applications | explainer | en | 177 | transcript | yes |
| `ai-concepts/subagents` | `SNhmFJzieR4` | LangChain | Why Sierra uses one agent per brand instead of multi-agent systems | real-system | en | 79 | transcript | yes |
| `ai-concepts/subagents` | `U0wOgXXfdjU` | Rayhan AI Architecture | AI Agent vs Multi-Agent System — এক Agent-এর বদলে অনেক Agent কেন? | explainer | bn | 31 | transcript | yes |
| `ai-concepts/subagents` | `bcj5zYcv1QQ` | Rayhan AI Architecture | AI Agents-এর Boss কে? \| Orchestrator Explained | explainer | bn | 37 | transcript | yes |
| `ai-concepts/ai-gateway` | `CqesSUnsw9Y` | AI Quality Nerd | 6 jobs of an AI gateway: failover, caching, guardrails, etc. | explainer | en | 51 | transcript | yes |
| `ai-concepts/ai-gateway` | `_miSLMmLc0U` | AI Quality Nerd | Which AI gateway should you use? Bifrost, Cloudflare, Kong, Vercel | explainer | en | 49 | transcript | yes |
| `ai-concepts/ai-gateway` | `HGTlGUt2s8M` | Databricks | AI Gateway Explained in 60 Secs: How to Control Your AI Spend | explainer | en | 57 | transcript | yes |
| `ai-concepts/ai-gateway` | `iBi4QliiSOk` | Rayhan AI Architecture | AI Gateway কী? Production AI System-এ কেন দরকার? \| AI Architecture | explainer | bn | 31 | transcript | yes |
| `ai-concepts/inference-economics` | `0E8kDTW10HQ` | KodeKloud | What is Prompt Caching? | explainer | en | 106 | transcript | yes |
| `ai-concepts/inference-economics` | `GXh1KwzNIIM` | Gaurav Sen | What is Prompt Caching in LLMs? | explainer | en | 84 | transcript | yes |
| `ai-concepts/inference-economics` | `vHOO_heIsf4` | Rayhan AI Architecture | AI Agent-এর Cost কমাবেন কীভাবে? \| Token Optimization Explained | explainer | bn | 31 | transcript | yes |
| `ai-concepts/evals` | `KY5hfe_Td14` | Gaurav Sen | Evals are the hottest topic in 2026. | explainer | en | 82 | transcript | yes |
| `ai-concepts/evals` | `FRETejqa7D8` | Google Cloud Tech | How to build AI agent evals in 4 steps | explainer | en | 55 | transcript | yes |
| `ai-concepts/evals` | `yPe1I1ogd3A` | codebasics | MakeMyTrip CTO on AI Evals | real-system | en | 72 | transcript | yes |
| `ai-concepts/evals` | `VOwtHndNK8c` | Rayhan AI Architecture | AI Agent-এর উত্তর ঠিক আছে কিনা বুঝবেন কীভাবে?” | explainer | bn | 27 | transcript | yes |
| `ai-concepts/guardrails` | `W5rB9HGSdMg` | Rayhan AI Architecture | AI Agent-কে সব কাজ করতে দেওয়া উচিত? \| Guardrails Explained | explainer | bn | 18 | transcript | yes |
| `ai-concepts/observability` | `PxV1swOlcvI` | Matt Pocock | The one indispensable tool to any AI app developer - Observability | explainer | en | 81 | transcript | yes |
| `ai-concepts/observability` | `LYsr7yVLXn8` | n8n | n8n Natively supports open telemetry and tracing | explainer | en | 42 | transcript | yes |
| `ai-concepts/observability` | `ODh1DRil-PA` | LangChain | The LangSmith Feature Built for Multi-Step Agents | explainer | en | 30 | transcript | yes |
| `ai-concepts/agent-harness` | `_6qHmJ9Trmg` | Google Cloud Tech | What exactly is an Agent Harness? | explainer | en | 82 | transcript | yes |
| `ai-concepts/agent-harness` | `IVdJj_aNwhE` | KodeKloud | Agent Harness Explained in 2 minutes | explainer | en | 148 | transcript | yes |
| `ai-concepts/agent-harness` | `7dFvU9zuv0k` | LangChain | What is an agent harness? Explained fast | explainer | en | 79 | transcript | yes |
| `ai-concepts/agent-harness` | `Rnjad4p62bE` | LangChain | What is an agent harness? | explainer | en | 33 | transcript | yes |
| `agent-memory/working-memory` | `FHufF_3QU2A` | Weaviate vector database | Stateful Agents self-optimize their Context Window | explainer | en | 43 | transcript | yes |
| `agent-memory/working-memory` | `827IX97_NG4` | SkipCI | Context Rot: Why Giving AI More Context Makes It More Confidently Wrong | explainer | en | 33 | transcript | yes |
| `agent-memory/working-memory` | `sVxen1j24Fc` | Aish Reganti | Don't Trust a Big Context Window Yet | explainer | en | 93 | transcript | yes |
| `agent-memory/semantic-memory` | `tarq5cgw7PE` | Google Cloud Tech | AI agent memory | explainer | en | 42 | transcript | yes |
| `agent-memory/semantic-memory` | `7EvMKPMGDAU` | Google Cloud Tech | Building an AI tutor that ACTUALLY remembers you | explainer | en | 43 | transcript | yes |
| `agent-memory/episodic-memory` | `9xdteWeaHvk` | Oracle Developers | Episodic Memory & Hybrid Search for AI Agents | explainer | en | 45 | transcript | yes |
| `agent-memory/episodic-memory` | `fj9dF_HXL-U` | James Briggs | You're doing AGENTIC "chat history" wrong | explainer | en | 59 | transcript | yes |
| `agent-memory/episodic-memory` | `51aV0_Mpxz4` | Rayhan AI Architecture | AI Agent কি আপনার আগের কথা মনে রাখতে পারে? \| Agent Memory Explained | explainer | bn | 21 | transcript | yes |
| `agent-memory/procedural-memory` | `adsrbuYB-WM` | Amigoscode | Stop Repeating Yourself to Claude Code: Use CLAUDE.md | explainer | en | 69 | transcript | yes |
| `agent-memory/procedural-memory` | `WLngvmntWJI` | n8n | How to use skills in n8n agents | explainer | en | 60 | transcript | yes |
| `agent-memory/procedural-memory` | `2MX49Tot0p4` | ArthaMatrix | Claude Code-এ Plugin vs Skill: কোনটি কীভাবে কাজ করে? | explainer | bn | 125 | transcript | yes |
| `agent-memory/retrieval-memory` | `qSvlGGDJ2WM` | KodeKloud | RAG Explained: How Retrieval Augmented Generation Actually Works | explainer | en | 99 | transcript | yes |
| `agent-memory/retrieval-memory` | `Qx14PG_i6Ko` | ByteMonk | RAG: Retrieval Augmented Generation | explainer | en | 47 | transcript | yes |
| `agent-memory/retrieval-memory` | `DjJ6ngX2Dv8` | Google Cloud Tech | Advanced RAG techniques for better retrieval performance | explainer | en | 38 | transcript | yes |
| `agent-memory/retrieval-memory` | `zGQ4hAabezs` | Rayhan AI Architecture | RAG Retrieval কী? \| AI কীভাবে সঠিক Information খুঁজে বের করে? | explainer | bn | 30 | frames + title | yes |
| `agent-memory/parametric-memory` | `ietNakjXOtk` | KodeKloud | Training Cutoff in LLMs | explainer | en | 88 | transcript | yes |
| `agent-memory/parametric-memory` | `C80IRQ_PHD4` | AI Made Clear | Why an AI model has a knowledge cutoff | explainer | en | 45 | transcript | yes |
| `agent-memory/parametric-memory` | `zO5Pi1qJc60` | Orion Stack | Why the Pros Don't Fine-Tune Everything (Catastrophic Forgetting) | explainer | en | 59 | transcript | yes |
| `agent-memory/prospective-memory` | `KZnrLBBYr6E` | ArthaMatrix | Claude Code Routine \| ঘুমিয়েও AI দিয়ে কাজ করান! \| Workflow Automation Explained | explainer | bn | 44 | transcript | yes |
| `agent-memory/prospective-memory` | `bsHFD4ivC4U` | ArthaMatrix | ম্যানুয়াল কাজকে বিদায়! Claude AI Scheduled Tasks দিয়ে সব অটোমেট করুন | explainer | bn | 45 | transcript | yes |
| `ai-agents/agent-basics` | `nrqmgvc9TJ8` | LangChain | What Is an AI Agent, Actually? | explainer | en | 34 | transcript | yes |
| `ai-agents/agent-basics` | `wXnm4PtBkAA` | Pavan Belagatti | Learn How AI Agents Work [Practical Scenario] | explainer | en | 125 | transcript | yes |
| `ai-agents/agent-basics` | `Tgsdkn_wO70` | ArthaMatrix | AI Agent কী এবং এটি কিভাবে কাজ করে? \| AI Chatbot vs AI Agent | explainer | bn | 154 | transcript | yes |
| `ai-agents/agent-basics` | `7UYd3c6Npj4` | Nabid In Motion | চ্যাটজিপিটি কি পুরনো হয়ে যাচ্ছে? AI Agent বনাম Chatbot-এর আসল পার্থক্য Shorts | explainer | bn | 60 | transcript | yes |
| `ai-agents/trigger` | `khfFtyGPdLg` | Rohit Krishna | n8n webhook explanation | explainer | en | 35 | transcript | yes |
| `ai-agents/build-context` | `j-yjW7diFE4` | Mastra | RAG vs Long Context - On The Walk Over Ep 11 | explainer | en | 159 | transcript | yes |
| `ai-agents/build-context` | `Y_p_Y4EF8AA` | Pinecone | Why Million Token Context Windows Fail | explainer | en | 143 | transcript | yes |
| `ai-agents/llm-decides` | `U7PXtRazU94` | IBM Technology | What is Tool Calling? | explainer | en | 41 | transcript | yes |
| `ai-agents/act-with-tools` | `mcJfvsyuOSA` | xyzxyz | Function Calling - how AI uses tools and APIs | explainer | en | 32 | transcript | yes |
| `ai-agents/act-with-tools` | `g87DYmwbzuo` | Gaurav Sen | Too many MCP tools? Anthropic found a solution. | explainer | en | 122 | transcript | yes |
| `ai-agents/act-with-tools` | `A2VbV8Rowxs` | Rayhan AI Architecture | AI Agent ভুল Tool Call করলে কী হয়? \| Production AI Engineering | explainer | bn | 31 | transcript | yes |
| `ai-agents/stop-check` | `4AY1E3B3OqA` | Rayhan AI Architecture | AI Agent ভুল করলে নিজেই কীভাবে বুঝবে? | explainer | bn | 21 | transcript | yes |
| `ai-agents/stop-check` | `3I_sXTNYcQ0` | Agentic Engineering | Why AI Agents Get Stuck in Loops — Stop Conditions Explained | explainer | en | 48 | transcript | yes |
| `ai-agents/stop-check` | `qVTmzY4w2T4` | Ship It With AI | Claude Code ralph loop - why your loop never stops | explainer | en | 39 | transcript | yes |
| `ai-agents/memory` | `5yb1PfL8HS8` | Google Cloud Tech | How AI agents can remember you forever | explainer | en | 40 | transcript | yes |
| `ai-agents/memory` | `g6zr04MSsLg` | Oracle Developers | AI Agent Memory: The Real Race Isn't Bigger Context Windows | explainer | en | 13 | transcript | yes |
| `ai-agents/memory` | `Z_ogJIzz4zI` | Rayhan AI Architecture | AI Agent Memory কীভাবে কাজ করে? \| AI কীভাবে আগের কথা মনে রাখে | explainer | bn | 31 | transcript | yes |
| `ai-agents/guardrails` | `XG2A-St5iao` | TestMu AI (Formerly LambdaTest) | What is an AI Sandbox? | explainer | en | 93 | transcript | yes |
| `ai-agents/guardrails` | `dJmNs8h3Zeo` | LangChain | What Is a Sandbox? (And Why Every Agent Needs One) \| Spill The Tea | explainer | en | 75 | transcript | yes |
| `ai-agents/guardrails` | `HT4OImmCLsk` | G Talks Tech | My AI Agent Faked My Approval to Get Past Its Own Guardrails | mistake | en | 28 | transcript | yes |
| `ai-agents/guardrails` | `fbn5EJagBmQ` | LangChain | How Cogent Security sandboxes AI agents that touch customer data \| Max Agency | real-system | en | 50 | transcript | yes |
| `ai-agents/observability-and-evals` | `tWstu9cXntg` | LangChain | How Podium Traces Every AI Agent Decision | real-system | en | 66 | transcript | yes |
| `ai-agents/observability-and-evals` | `Bx22XGBbs70` | LangChain | The Self-Driving Eval Trick No AI Benchmark Beats | explainer | en | 47 | transcript | yes |
| `ai-agents/observability-and-evals` | `OdSoP5TMP0o` | Arize AI | One AI Question - when should I start doing evals, with Aparna Dhinakaran | explainer | en | 43 | transcript | yes |
| `ai-agents/observability-and-evals` | `dzIuuuICBVY` | Mastra | Are off-the-shelf evals overrated? - AI Hot Takes | explainer | en | 142 | transcript | yes |
| `ai-agents/final-output` | `CK6t1goWxw8` | Matt Pocock | Building AI Apps That Don't Suck - Handoffs | explainer | en | 80 | transcript | yes |
| `ai-agents/final-output` | `faIZl69Qk4U` | learnwithparam - AI Engineering Society | Using Pydantic and Structured Outputs for Type-Safe LLM Responses | explainer | en | 54 | transcript | yes |
| `ai-agents/final-output` | `w_FK4QyNtb8` | Pradip Nichite | Extract Structured Data with OpenAI & Pydantic | explainer | en | 35 | transcript | yes |
| `ai-ml-testing/ai-ml-for-testers` | `EO6K3ohH5D4` | CodeEmporium | Machine Learning Paradigms: Supervised and Unsupervised Learning | explainer | en | 44 | transcript | yes |
| `ai-ml-testing/ai-ml-for-testers` | `aR7WVptzFnw` | Nabid In Motion | AI কীভাবে শেখে? \| Supervised vs Unsupervised Explained (পার্ট-৩) Shorts | explainer | bn | 59 | transcript | yes |
| `ai-ml-testing/ai-ml-for-testers` | `3JxKMQLiHrA` | Nabid In Motion | AI যখন নিজের ভুল থেকে শেখে! \| Reinforcement Learning Explained (পার্ট-৮) Shorts | explainer | bn | 59 | transcript | yes |
| `ai-ml-testing/llm-tokens-temperature` | `XsLK3tPy9SI` | 3Blue1Brown | Temperature in LLMs | explainer | en | 60 | transcript | yes |
| `ai-ml-testing/llm-tokens-temperature` | `IVZ2OL8mU8c` | Matt Pocock | Most devs don't know how LLM tokens work | explainer | en | 49 | transcript | yes |
| `ai-ml-testing/llm-tokens-temperature` | `uh5wFLOyG_4` | KodeKloud | Why Should You Care About AI Tokens in 2026? | explainer | en | 111 | transcript | yes |
| `ai-ml-testing/llm-tokens-temperature` | `yeU1mH0YSo8` | DataMListic | bpe tokenizer | explainer | en | 103 | transcript | yes |
| `ai-ml-testing/ai-application-architecture` | `qYLEnmNMXiA` | Pavan Belagatti | RAG vs Fine-Tuning: Which Actually Wins | compare | en | 178 | transcript | yes |
| `ai-ml-testing/ai-application-architecture` | `qxr7ovnDBHg` | KodeKloud | The simplest RAG explanation ever | explainer | en | 66 | transcript | yes |
| `ai-ml-testing/ai-application-architecture` | `8wyZ8deR9wM` | Rayhan AI Architecture | Production AI Architecture \| LLM, RAG, Agent, MCP—সব একসাথে কীভাবে কাজ করে? | explainer | bn | 29 | transcript | yes |
| `ai-ml-testing/prompt-engineering-basics` | `_WwfE5feS8w` | Tech With Tim | Prompt Engineering Skills Real AI Engineers Need | explainer | en | 46 | transcript | yes |
| `ai-ml-testing/prompt-engineering-basics` | `LTZFHycjk9o` | Nur Azad \| Engineer | Zero-Shot Prompting কী? সহজভাবে শিখুন AI Tricks! | explainer | bn | 41 | transcript | yes |
| `ai-ml-testing/prompt-testing` | `b1SPKtN05y8` | ByteByteGo | What is Prompt Injection? | explainer | en | 53 | transcript | yes |
| `ai-ml-testing/prompt-testing` | `PCnP3nWsF8M` | Jas Wong | Emoji smuggling is used as a prompt injection attack vector | explainer | en | 31 | transcript | yes |
| `ai-ml-testing/prompt-testing` | `BASVwoqCPPc` | DeepLearningAI | Why You Need Users to Break Your AI Project | explainer | en | 55 | transcript | yes |
| `ai-ml-testing/prompt-testing` | `IB70k_Ak2-A` | AssemblyAI | Fixing Edge Cases & Rapid Iteration in AI Agents | explainer | en | 28 | transcript | yes |
| `ai-ml-testing/structured-outputs` | `jqOykPd-QXs` | Atef Ataya | OpenAI Function Calling with Structured Outputs | explainer | en | 40 | transcript | yes |
| `ai-ml-testing/structured-outputs` | `u8PCEwP6AoQ` | Content in Tech | Most developers haven't tried Structured output with JSON schema: stop LLM hallucinations yet. | explainer | en | 60 | transcript | yes |
| `ai-ml-testing/structured-outputs` | `Dfv-OsRkZAI` | Stefan Kløvning | Unlocking Potential: OpenAI's New Structured Outputs Explained | explainer | en | 42 | transcript | yes |
| `ai-ml-testing/promptfoo-first-eval` | `4_GdhE1m-Vs` | Arize AI | One AI Question - why should you learn about evals, with Elizabeth Hutton | explainer | en | 41 | transcript | yes |
| `ai-ml-testing/promptfoo-first-eval` | `DzmcklKXbik` | Mastra | AI Eval Mistakes - AI Hot Takes 2 | mistake | en | 62 | transcript | yes |
| `ai-ml-testing/promptfoo-assertions` | `XqN4YJOJYik` | Product Founder with Amir Rezaei | Do you really know what “LLM as a judge” means? | explainer | en | 41 | transcript | yes |
| `ai-ml-testing/promptfoo-assertions` | `fEV78pw6EkQ` | Old Man Tech | LLM as a judge: the biases to test for | explainer | en | 42 | transcript | yes |
| `ai-ml-testing/promptfoo-assertions` | `ZxnD7TUUpy4` | Valohai | Your LLM judge is not deterministic | explainer | en | 36 | transcript | yes |
| `ai-ml-testing/deepeval-pytest` | `E_kgCgNcyNc` | The Testing Academy | How to Test API Response via the Deepeval? | explainer | en | 107 | transcript | yes |
| `ai-ml-testing/hallucination-detection` | `H-JHumbpORI` | Matt Pocock | My agent hallucinated - what do I do? | explainer | en | 92 | transcript | yes |
| `ai-ml-testing/hallucination-detection` | `FuxVyAk6Z7w` | Gaurav Sen | This is how Lyft reduced agent hallucinations by 20%. | real-system | en | 103 | transcript | yes |
| `ai-ml-testing/hallucination-detection` | `DtS3wiIWMG8` | Rayhan AI Architecture | Hallucination কী? এর সহজ সমাধান | explainer | bn | 31 | transcript | yes |
| `ai-ml-testing/hallucination-detection` | `dxicKH0tADc` | ArthaMatrix | AI Hallucination কী? | explainer | bn | 38 | transcript | yes |
| `ai-ml-testing/model-comparison-regression` | `GAd5J257vA0` | Google Cloud Tech | Compare LLMs like a pro – Now with Vertex AI! | compare | en | 58 | transcript | yes |
| `ai-ml-testing/model-comparison-regression` | `pTbDqo1_auw` | KodeKloud | Why does AI give you a different answer every time? (Autoregression Explained) | explainer | en | 167 | transcript | yes |
| `ai-ml-testing/rag-testing-basics` | `1M24UHWL41A` | KodeKloud | RAG Retrieval Metrics Explained: Recall, Precision, MRR & NDCG | explainer | en | 96 | transcript | yes |
| `ai-ml-testing/rag-testing-basics` | `myJb77fd1fs` | The AI Foundry | How to evaluate RAG answers: faithfulness, relevance, LLM judges, RAGAS, TruLens, DeepEval | explainer | en | 59 | transcript | yes |
| `ai-ml-testing/llm-api-testing` | `uWzX8Jc9tO8` | KodeKloud | Why Claude Uses 3 Different Rate Limits? | explainer | en | 144 | transcript | yes |
| `ai-ml-testing/llm-api-testing` | `93cqqRmSZVM` | KodeKloud | OpenAI API Python Code Walkthrough (Line by Line Explained) | explainer | en | 98 | transcript | yes |
| `ai-ml-testing/chatbot-ui-testing` | `NIxQBIv9o8M` | RoboticQA Academy | 5 Built-in Playwright Fixtures You Must Know! | explainer | en | 43 | transcript | yes |
| `ai-ml-testing/langchain-testing` | `xpg9JSGSHYk` | KodeKloud | Automate Calendar Events with Langchain! | explainer | en | 83 | transcript | yes |
| `ai-ml-testing/langchain-testing` | `TIMdcJN4JeY` | LangChain | What Is LangChain, Actually? | explainer | en | 90 | transcript | yes |
| `ai-ml-testing/langgraph-agent-testing` | `oY1htTx_h9U` | LangChain | The Hardest Part of Testing Agents: Write Access | explainer | en | 64 | transcript | yes |
| `ai-ml-testing/langgraph-agent-testing` | `An160wrTtt4` | Pavan Belagatti | What is LangGraph! | explainer | en | 139 | transcript | yes |
| `ai-ml-testing/langgraph-agent-testing` | `ZWgFAtNzGqg` | KodeKloud | How LangGraph Makes LLM Apps Simple & Powerful | explainer | en | 76 | transcript | yes |
| `ai-ml-testing/langgraph-agent-testing` | `-7GgFPFY4WI` | Google Cloud Tech | How Antigravity Evaluates a LangGraph Agent | explainer | en | 29 | transcript | yes |
| `ai-ml-testing/owasp-llm-risks` | `mZYVmMRSSQc` | Cyber Adam | AI security is no longer optional OWASP Top 10 LLM risks | explainer | en | 27 | transcript | yes |
| `ai-ml-testing/owasp-llm-risks` | `PYbcbuNTPBI` | Prashant Dey | Prompt Injection: The Importance of Secure LLM Design | explainer | en | 47 | transcript | yes |
| `ai-ml-testing/owasp-llm-risks` | `dwnVgpa7p9g` | Appsecco | MCP Security in 30s: 3 Checks Before You Ship | explainer | en | 32 | transcript | yes |
| `ai-ml-testing/red-teaming` | `iquALVDdDWc` | Giskard | What is AI Red Teaming? (Quick Definition & Why It's Crucial for AI Safety) | explainer | en | 47 | transcript | yes |
| `ai-ml-testing/red-teaming` | `CON4WoIQ8vc` | Giskard | LLM Jailbreaking Explained by Lead AI researcher at Giskard AI | explainer | en | 52 | transcript | yes |
| `ai-ml-testing/red-teaming` | `A3TcAcppaqw` | Google Cloud Tech | Protect against vulnerabilities in your app with Red teaming | explainer | en | 38 | transcript | yes |
| `ai-ml-testing/guardrails-bias` | `htcPiuxMXCM` | IBM Technology | What is Algorithmic Bias in AI? | explainer | en | 53 | transcript | yes |
| `ai-ml-testing/guardrails-bias` | `rATveXR050k` | Nabid In Motion | AI কি পহেলা বৈশাখ চেনে? \| Machine Learning Bias Explained | explainer | bn | 164 | transcript | yes |
| `ai-ml-testing/guardrails-bias` | `3Tk0sFoFYvM` | IBM Technology | Human Bias is Harder to Fix than AI Bias | explainer | en | 18 | transcript | yes |
| `ai-ml-testing/ai-test-strategy` | `FJMOTghjhMg` | Software Testing Mentor | Brief introduction to Test Planning! | explainer | en | 59 | transcript | yes |
| `ai-ml-testing/ai-test-strategy` | `SJlwDM6KoGg` | TestMu AI (Formerly LambdaTest) | Test Planning in Software Testing! | explainer | en | 59 | transcript | yes |
| `ai-ml-testing/ai-test-strategy` | `6NLlARqb2AE` | The Testing Academy | How to Create a Test Plan | explainer | en | 53 | transcript | yes |
| `ai-ml-testing/ai-quality-metrics` | `Zg0do894s9w` | The AI Foundry | RAG retrieval metrics explained: recall@k, precision@k, MRR, nDCG | explainer | en | 54 | transcript | yes |
| `ai-ml-testing/ai-observability` | `kC1Em8VuIbQ` | Thomas Prommer | Agent Observability: LangSmith vs Arize vs Phoenix | explainer | en | 38 | transcript | yes |
| `ai-ml-testing/ai-observability` | `jAqnzq4e5GA` | AI Masterclass | Monitoring AI in Production: Model Drift, Observability & Agentic AI \| Jeff Tyler \| AIMC ST 2026 | explainer | en | 57 | transcript | yes |
| `ai-ml-testing/ai-observability` | `1ge0joWkFIY` | codebasics | Toy Augmented Generation Project to a Production-Ready AI System | explainer | en | 67 | transcript | yes |
| `ai-ml-testing/capstone-project-setup` | `E53DusBh3jk` | Pavan Belagatti | How Vector Databases Store and Use Data | explainer | en | 51 | transcript | yes |
| `ai-ml-testing/capstone-cicd-presentation` | `noLED7kKBF4` | GitHub | Multi-stage deployments in GitHub Actions | explainer | en | 28 | transcript | yes |
| `ai-ml-testing/ai-testing-career-kit` | `N3FDISelpOE` | Tech With Tim | The AI Portfolio That Gives You an Edge in Interviews | explainer | en | 31 | transcript | yes |
| `ai-ml-testing/ai-testing-career-kit` | `vOVolqtZVLk` | Software Testing Mentor | Is Software Testing a Good Career Option?See how much Software Testers earn? | explainer | en | 61 | transcript | yes |
| `ai-ml-testing/advanced-rag-failures` | `Wyju19LletQ` | Pinecone | What is Multi-hop retrieval? | explainer | en | 61 | transcript | yes |
| `ai-ml-testing/advanced-rag-failures` | `MLFzgNwze5c` | Nabid In Motion | Enterprise RAG Strategy - Why Your AI Fails in Production Shorts | explainer | en | 177 | transcript | yes |
| `ai-ml-testing/chunking-embedding-testing` | `vvp97qJB6CU` | KodeKloud | RAG Chunking Strategies Explained (Fixed Size vs Semantic Chunking) | explainer | en | 132 | transcript | yes |
| `ai-ml-testing/chunking-embedding-testing` | `qvbMMButyAg` | Pinecone | The Best Chunking Strategy for RAG? | explainer | en | 36 | transcript | yes |
| `ai-ml-testing/chunking-embedding-testing` | `KTc0qvJEqhY` | KodeKloud | What is an Embedding Model? | explainer | en | 99 | transcript | yes |
| `ai-ml-testing/chunking-embedding-testing` | `DUQGBH4Dw_E` | Google Cloud Tech | Problem: Too much data for embedding? Solution: Chunk your data! | explainer | en | 60 | transcript | yes |
| `ai-ml-testing/rag-synthetic-regression` | `MPRyqO4LEgs` | Hamel Husain | Why Synthetic Data Can't Replace Real Users for LLM Products | explainer | en | 45 | transcript | yes |
| `ai-ml-testing/rag-synthetic-regression` | `4iehiGYajfo` | Automate With SDET | AI for QA \| How to Generate Test Data Using AI \| Valid, Invalid & Boundary Data | explainer | en | 49 | transcript | yes |
| `ai-ml-testing/vector-db-basics` | `aExSNbSC1f8` | IBM Technology | How Vector Databases Power AI | explainer | en | 76 | transcript | yes |
| `ai-ml-testing/vector-db-basics` | `0d6tBMxFCt4` | ByteMonk | Vector Database: A Must-Know Guide | explainer | en | 56 | transcript | yes |
| `ai-ml-testing/vector-db-basics` | `LtpKwnFFgNU` | Gaurav Sen | Notion scaled its vector database by 10x. | real-system | en | 109 | transcript | yes |
| `ai-ml-testing/vector-db-quality-performance` | `_PiW515vOnY` | MongoDB | Speed Up Vector Search 10x: How Vector Quantization Cuts Costs & Boosts AI Performance | explainer | en | 53 | transcript | yes |
| `ai-ml-testing/vector-db-quality-performance` | `X5bybYqc5zk` | Nabid In Motion | Why Your Vector Database Is Crashing in Production Shorts | explainer | en | 174 | transcript | yes |
| `ai-ml-testing/vector-db-quality-performance` | `GDfncxI6bCE` | Hussein Nasser | Why Indexing is Critical in Database Systems | explainer | en | 53 | transcript | yes |
| `ai-ml-testing/multi-turn-testing` | `iEXxrzexUmw` | Google Cloud Tech | Why do AI agents forget everything? | explainer | en | 47 | transcript | yes |
| `ai-ml-testing/multi-turn-testing` | `cNxpB5Bj7rg` | Amigoscode | Why Claude Code "Forgets" (and How to Manage Context) | explainer | en | 92 | transcript | yes |
| `ai-ml-testing/multi-turn-testing` | `VcVUr6phazk` | Arize AI | Why Your LLM Starts Forgetting Instructions | explainer | en | 49 | transcript | yes |
| `ai-ml-testing/multi-turn-testing` | `EftSu4UgmiQ` | DevHacks 360 | Multi-Turn Attacks Break AI That Looked Safe | explainer | en | 22 | transcript | yes |
| `ai-ml-testing/agent-architecture` | `zTKm0d0lgU4` | Pavan Belagatti | AI Agent Architecture Explained for Beginners! | explainer | en | 123 | transcript | yes |
| `ai-ml-testing/agent-architecture` | `Y2eD_I7eC5U` | Google Cloud Tech | ReAct pattern: Reason and act agent architecture | explainer | en | 47 | transcript | yes |
| `ai-ml-testing/agent-decision-testing` | `6WFqfXZ44Gg` | Soba Labs | Test AI Agents Before Release \| LangChain Tutorial | mistake | en | 31 | transcript | yes |
| `ai-ml-testing/multi-agent-testing` | `eAfb8coAD0A` | Nabid In Motion | Multi Agent Systems: Why your AI orchestration fails Shorts | explainer | en | 180 | transcript | yes |
| `ai-ml-testing/multi-agent-testing` | `7EhiJL_6ats` | Google Cloud Tech | Multi-agent vs. single-agent: Which should you use? | explainer | en | 119 | transcript | yes |
| `ai-ml-testing/multi-agent-testing` | `saMAb2MuKTs` | Pavan Belagatti | Understanding Multi-Agent RAG Systems! | explainer | en | 71 | transcript | yes |
| `ai-ml-testing/multimodal-testing` | `9B3yvPJVlVw` | DeepLearningAI | Document AI: How Agents add the brain to OCR's eyes | explainer | en | 77 | transcript | yes |
| `ai-ml-testing/multimodal-testing` | `Ppy4oAzYreI` | codebasics | This AI Agent Handles Your Invoices End to End | explainer | en | 47 | transcript | yes |
| `ai-ml-testing/finetuned-model-testing` | `dBFLv7q7RYo` | Pavan Belagatti | What is Fine-Tuning LLMs? | explainer | en | 131 | transcript | yes |
| `ai-ml-testing/finetuned-model-testing` | `TQynIWJ3DHs` | KodeKloud | Why Prompt Engineering is DEAD (Do This to Your LLM Instead) | explainer | en | 166 | transcript | yes |
| `ai-ml-testing/finetuned-model-testing` | `2tq3qQTUGWE` | Google Cloud Tech | Generic AI? No thank you! It's the fine-tuned models for me | explainer | en | 58 | transcript | yes |
| `ai-ml-testing/finetuned-model-testing` | `QMnlS39vZdA` | Elvis Saravia | Base LLM vs. Instruction-tuned LLM ChatGPT | compare | en | 45 | transcript | yes |
| `ai-ml-testing/synthetic-data-dspy` | `rr6O2HQFRkg` | IBM Technology | What is Ground Truth in AI? | explainer | en | 87 | transcript | yes |
| `ai-ml-testing/synthetic-data-dspy` | `CFQ2gJmucoQ` | Nabid In Motion | ইন্টারনেটের সব ডেটা কি শেষ? এআই এখন নিজেই নিজের ডেটা বানাচ্ছে! Synthetic Data Explained | explainer | bn | 176 | transcript | yes |
| `ai-ml-testing/production-observability` | `CT7d38_jEnY` | AIEdTalks | LangSmith vs Langfuse vs Arize (in 60 seconds) | compare | en | 59 | transcript | yes |
| `ai-ml-testing/production-observability` | `_eeAKOaKusY` | PeterTamAI | See exactly what your AI is doing (Phoenix by Arize) | explainer | en | 38 | transcript | yes |
| `ai-ml-testing/model-drift-ab-testing` | `WrUi-JjJHD8` | ByteMonk | how a/b testing drives better decisions in web systems | explainer | en | 53 | transcript | yes |
| `ai-ml-testing/model-drift-ab-testing` | `HTe2_uIWSuY` | KodeKloud | Canary Deployment in Kubernetes Explained | explainer | en | 176 | transcript | yes |
| `ai-ml-testing/ai-load-testing` | `rQWR_D3aoG8` | ByteMonk | Rate Limit : Token Bucket Algorithm | explainer | en | 53 | transcript | yes |
| `ai-ml-testing/ai-load-testing` | `UfmG0PeMS-k` | KodeKloud | Why Your LLM is Slow Despite High GPU Usage? | explainer | en | 120 | transcript | yes |
| `ai-ml-testing/advanced-capstone-setup` | `r-7AnDBoBFE` | MongoDB | What is an AI Agent? Agentic RAG and RAG-enabled Chatbots | explainer | en | 60 | transcript | yes |
| `ai-ml-testing/advanced-capstone-setup` | `do8Rx6CpQX8` | Tech With Tim | 4 Ways to Build an AI Agent | explainer | en | 39 | transcript | yes |
| `ai-ml-testing/advanced-capstone-pipeline` | `VhqsXifzdvQ` | LangChain | How Benchling's Team Actually Looks at AI Traces \| Max Agency | real-system | en | 48 | transcript | yes |
| `ai-ml-testing/advanced-capstone-pipeline` | `4sWCCasRzPQ` | LangChain | This Is Why Your Main Agent Shouldn't Read Every Trace | real-system | en | 85 | transcript | yes |
| `ai-ml-testing/advanced-capstone-presentation` | `MfYL4RnkJFk` | Tech With Tim | The AI Portfolio Mistake That Kills Your Job Chances 2026 | mistake | en | 42 | transcript | yes |
| `architecture/single-server` | `-26ucu4gN8Y` | ScienceVenture | server কিভাবে কাজ করে? | explainer | bn | 33 | transcript | yes |
| `architecture/vertical-scaling` | `Og3uCL17t00` | MicroDoseDev | Scale Up vs Scale Out Explained (System Design Revision) | compare | en | 57 | transcript | yes |
| `architecture/cloud-architecture` | `OWa9yuqQzAo` | Avvaiverse | AWS Multi-Region Failover: Why It Failed in Real Life | explainer | en | 24 | transcript | yes |
| `architecture/api-gateway` | `QToMS34DSFo` | Bhaiyacodes | API Gateway Explained \| The Gatekeeper of Microservices | explainer | en | 55 | transcript | yes |
| `architecture/api-gateway` | `U3KcAqjthmc` | Learn Automation Testing from scratch | What is BFF (Backend for Frontend)? \| Simplified in 1 Minute! | explainer | en | 60 | transcript | yes |
| `fundamentals/basics` | `wlX1VRUlxOA` | QA with Sangeetha | QA vs QC Explained in 30 Seconds \| Most Asked QA Interview Question | interview | en | 39 | transcript | yes |
| `fundamentals/basics` | `AYF0WI5-94o` | QA with Sangeetha | Why Is Software Testing Important? \| QA Interview Question | interview | en | 41 | transcript | yes |
| `fundamentals/basics` | `82cbYvGNqlw` | Testing Funda by Zeeshan Asghar | Software Quality Assurance VS Software Testing | compare | en | 36 | transcript | yes |
| `fundamentals/basics` | `5qsnHib76RA` | Software Testing Mentor | What is difference between Verification and Validation?Software testing Interview Question | interview | en | 61 | transcript | yes |
| `fundamentals/defects-principles` | `1cMAdlOYIxA` | Software Testing Mentor | Difference Between Error, Defect and Failure - Software Testing Interview Question-5 | interview | en | 61 | transcript | yes |
| `fundamentals/defects-principles` | `VXF_YvRFH80` | TestSpectrum: Uncovering QA Realms | Testing Principles - Context Dependent | explainer | en | 37 | transcript | yes |
| `fundamentals/defects-principles` | `ZDRqcGaTX3w` | TestSpectrum: Uncovering QA Realms | Testing Principle - Defect Clustering | explainer | en | 37 | transcript | yes |
| `fundamentals/defects-principles` | `vkILNB2nQvk` | The Testing Academy | What is Shift Left Testing | explainer | en | 35 | transcript | yes |
| `fundamentals/lifecycles` | `336SQ8Jq0wo` | Testing Funda by Zeeshan Asghar | Software Development Life Cycle (SDLC) vs Software Testing Life Cycle (STLC) | compare | en | 40 | transcript | yes |
| `fundamentals/lifecycles` | `UQdQ1ygYvgk` | Last Minute Interview Tips | What is the software testing life cycle (STLC)? | explainer | en | 20 | transcript | yes |
| `fundamentals/lifecycles` | `5p3VxkbFiFI` | It’s Your Responsibility | TDD vs BDD: What's the Difference? \| Simplified Comparison in 60 Seconds! | compare | en | 50 | transcript | yes |
| `fundamentals/lifecycles` | `DUI_RnDq9ms` | Project Phoenix | Waterfall vs Agile Testing \| QA Interview Question Explained | interview | en | 20 | transcript | yes |
| `fundamentals/test-types` | `Q14Ys8eL2Dk` | Testing Funda by Zeeshan Asghar | Difference Between Retesting and Regression Testing | compare | en | 38 | transcript | yes |
| `fundamentals/test-types` | `u0dND7KIJhc` | Project Phoenix | Smoke Testing vs Sanity Testing QA Interview Question | interview | en | 17 | transcript | yes |
| `fundamentals/test-types` | `Gz0tdbvLU9w` | QA with Sangeetha | Functional vs Non-Functional Testing Explained in 30 Seconds | compare | en | 34 | transcript | yes |
| `fundamentals/test-types` | `_NS8pvMB8WE` | Testing Funda by Zeeshan Asghar | Types Of Performance Testing | explainer | en | 55 | transcript | yes |
| `fundamentals/levels` | `ZVIxjeoU6jE` | Software Testing Mentor | What are Different Levels of Testing? Software Testing Interview Question | interview | en | 61 | transcript | yes |
| `fundamentals/levels` | `VhIvWxkGTkg` | QA with Sangeetha | What is UAT? User Acceptance Testing Explained in 30 Seconds \| QA | explainer | en | 40 | transcript | yes |
| `fundamentals/levels` | `-iSbOl8-Jo8` | softwaretestingjournal | Test Pyramid vs Test Ice Cream Cone - Which Are You? | compare | en | 46 | transcript | yes |
| `fundamentals/levels` | `VDGZ6tUlH4E` | Vandana TechPoint | what is stubs and drivers | explainer | en | 19 | transcript | yes |
| `fundamentals/black-box` | `PKBjYDPTxf8` | Testing Funda by Zeeshan Asghar | What is equivalence class partitioning | explainer | en | 33 | transcript | yes |
| `fundamentals/black-box` | `34d0b4c2Id0` | QA with Sangeetha | Boundary Value Analysis (BVA) \| Manual Testing Technique \| QA Interview | interview | en | 66 | transcript | yes |
| `fundamentals/black-box` | `-It0yqjsZm8` | QA with Sangeetha | Decision Table Testing \| Black Box Testing Technique \| QA Interview | interview | en | 45 | transcript | yes |
| `fundamentals/black-box` | `_uqby_vRKjk` | Testing Funda by Zeeshan Asghar | What is State transition testing ? | explainer | en | 42 | transcript | yes |
| `fundamentals/white-box` | `P8DS5uOAGPk` | Last Minute Interview Tips | What is white-box testing, and when is it used? | explainer | en | 19 | transcript | yes |
| `fundamentals/white-box` | `koyBDuRX9Ak` | Software Testing Mentor | What is Code Coverage? Software Testing Interview Question | interview | en | 61 | transcript | yes |
| `fundamentals/white-box` | `qOfEAOhkiZ4` | Testify Tech | Unit Testing: The Secret Behind Reliable Software | explainer | en | 19 | transcript | yes |
| `fundamentals/white-box` | `Iqg7mPm4obA` | Critical Systems Lab | 100% Statement Coverage ≠ Decision Coverage? \| Part 1 | explainer | en | 57 | transcript | yes |
| `fundamentals/experience-based` | `zKiD0xJRca4` | Testing Funda by Zeeshan Asghar | What is Exploratory Testing? | explainer | en | 34 | transcript | yes |
| `fundamentals/experience-based` | `s0ZLnphFRo0` | The Testing Academy | Why Exploratory Testing is Important and When Should You Do it? | explainer | en | 52 | transcript | yes |
| `fundamentals/experience-based` | `_6Y86buYNCM` | Software Testing Mentor | What is Ad-Hoc Testing? Software Testing Interview Question | interview | en | 61 | transcript | yes |
| `fundamentals/planning` | `OGQ_TW5eyZY` | Vandana TechPoint | What is Test Approach in test plan | explainer | en | 24 | transcript | yes |
| `fundamentals/planning` | `NiCZYi_5oF0` | The Testing Academy | What is a Test Environment \| Manual Testing Interview Question | interview | en | 53 | transcript | yes |
| `fundamentals/planning` | `QT2dsbljYQ0` | Software Testing Mentor | What is Acceptance Criteria? Software Testing Interview Question | interview | en | 61 | transcript | yes |
| `fundamentals/planning` | `i3QYZHQtfZ4` | QA Map | Risk Based Testing in Software Testing \| Test Big Risks First | animation | en | 22 | frames + title | yes |
| `fundamentals/test-cases-bugs` | `P2QoFagqUog` | The Testing Academy | The BEST Way to Write Manual Test Cases | explainer | en | 48 | transcript | yes |
| `fundamentals/test-cases-bugs` | `Bm7he5SV0XM` | Testing Funda by Zeeshan Asghar | Test Case vsTest Scenario | explainer | en | 35 | transcript | yes |
| `fundamentals/test-cases-bugs` | `07bkJm-74qc` | Testing Funda by Zeeshan Asghar | Defect Life Cycle / Bug Life Cycle | explainer | en | 30 | transcript | yes |
| `fundamentals/test-cases-bugs` | `dt1brGSqqsQ` | Project Phoenix | Severity vs Priority in Software Testing \| Explanation with Examples \| QA Interview Tips | interview | en | 24 | transcript | yes |
| `fundamentals/interview` | `yuoE5dV4_UY` | Software Testing Mentor | Difference Between Testing and Debugging - Software Testing Interview Question-4 | interview | en | 61 | transcript | yes |
| `fundamentals/interview` | `14cyfXNqcSA` | Project Phoenix | Black Box vs White Box vs Grey Box Testing QA Interview Question | interview | en | 17 | transcript | yes |
| `fundamentals/interview` | `_OjvO0fHiao` | QA Map | How to Test a Login Page \| QA Interview Question | interview | en | 44 | transcript | yes |
| `fundamentals/interview` | `vUZvellJxeE` | QA Map | Release Day: Ship or Stop? \| QA Interview Scenario | interview | en | 45 | transcript | yes |
| `linux/shell-basics` | `aCO3eMJshrs` | LinuxCert Guru | Linux Filesystem Explained \| What Are /etc, /var, /home & /usr? | explainer | en | 16 | transcript | yes |
| `linux/shell-basics` | `5_j-Of301sM` | LinuxCert Guru | How Does Linux Find Commands Like ls? \| PATH Explained | explainer | en | 11 | transcript | yes |
| `linux/shell-basics` | `0JhxwLSD6YQ` | Chris Titus Tech | Learn ANY Linux Command in Seconds (No More Googling!) | explainer | en | 35 | transcript | yes |
| `linux/shell-basics` | `hJTGSNuuEeI` | Learn Linux TV | Linux Commands in 60 Seconds (or less) - Shell Variables | explainer | en | 55 | transcript | yes |
| `linux/files` | `9NaRULyPVUM` | LinuxCert Guru | Does tar Compress Files? \| tar vs gzip Explained | compare | en | 15 | transcript | yes |
| `linux/files` | `Jf_f1O8p7Lw` | Sudo It | Symbolic Link or Soft Link in Linux explained | explainer | en | 58 | transcript | yes |
| `linux/files` | `AvHNurwQo7k` | Sudo It | understanding Hard Link in Linux \| How to create and use them | explainer | en | 59 | transcript | yes |
| `linux/files` | `PO2c2DLhDYA` | DevOps Toolbox | Repetitive Vim Motions | explainer | en | 24 | transcript | yes |
| `linux/text-processing` | `5_t_I_4OuwQ` | Fireship | get a grip on grep | explainer | en | 44 | transcript | yes |
| `linux/text-processing` | `wdQN2X3PQuU` | Learn Linux TV | Linux Commands in 60 Seconds - The sed Command | explainer | en | 56 | transcript | yes |
| `linux/text-processing` | `yMEHKhMjk00` | LinuxCert Guru | The Linux Pipe \| Explained \| One Symbol, Powerful Commands | explainer | en | 11 | transcript | yes |
| `linux/text-processing` | `DC7Ydsxd8qk` | CyberFlux Media | What Is /dev/null in Linux? The Black Hole of Data | explainer | en | 41 | transcript | yes |
| `linux/users-permissions` | `rzN8sb0ilyE` | CyberFlux Media | Linux File Permissions Explained \| rwx Owner Group Others | explainer | en | 46 | transcript | yes |
| `linux/users-permissions` | `CectRimCddc` | LinuxCert Guru | What Does chmod 755 Actually Mean? \| Linux Permissions Explained | explainer | en | 15 | transcript | yes |
| `linux/users-permissions` | `HlgtfXUdHho` | CyberFlux Media | Sudo vs Su in Linux — What’s the Difference? | compare | en | 31 | transcript | yes |
| `linux/processes` | `3MDTNEq7534` | LinuxCert Guru | The Linux kill Command Doesn't Always Kill! \| SIGTERM vs SIGKILL | compare | en | 11 | transcript | yes |
| `linux/processes` | `MKxh-PXciTE` | Chris Titus Tech | HTOP - Terminal Task Manager | explainer | en | 56 | transcript | yes |
| `linux/processes` | `C2rzC7IVBpk` | Chris Titus Tech | NOHUP - No Hangup Signals when closing terminal | explainer | en | 53 | transcript | yes |
| `linux/processes` | `eGsJGRSwbYs` | LinuxCert Guru | What Is a Zombie Process in Linux? \| Linux Processes Explained | explainer | en | 11 | transcript | yes |
| `linux/shell-scripting` | `157MIzN-oxA` | CodeCrafters | Shell Scripting Safety Hack with set -euo pipefail | explainer | en | 40 | transcript | yes |
| `linux/shell-scripting` | `nd4cFKZfvP8` | CSE Society | Shell Script in Linux Explained \| Automate Like a Pro! | explainer | en | 45 | transcript | yes |
| `linux/shell-scripting` | `O_W6b4BqBmc` | Learn Linux TV | Effortless File Extraction with This Bash Function | explainer | en | 42 | transcript | yes |
| `linux/shell-scripting` | `2PzjUY80IDw` | Learn Linux TV | Bash Scripting Master CD Command with "auto ls" | explainer | en | 154 | transcript | yes |
| `linux/packages` | `yE9oct13WTQ` | Learn Linux TV | Linux CLI in 60 Seconds - apt | explainer | en | 60 | transcript | yes |
| `linux/packages` | `PNttb7co5GQ` | Salty Chip | Package Managers: APT vs DNF vs Pacman | compare | en | 35 | transcript | yes |
| `linux/packages` | `_y5S1Jyk2jY` | Thinknyx Technologies | Linux Command Series - 'yum' | explainer | en | 59 | transcript | yes |
| `linux/packages` | `aeaWKB_EwXU` | Root N Reels | Ep 11: How Package Managers Work | explainer | en | 11 | transcript | yes |
| `linux/disks-filesystems` | `egZ_3Hnb3mk` | LinuxCert Guru | Linux Disk Has Free Space but Can't Create Files? \| Inodes Explained | explainer | en | 11 | transcript | yes |
| `linux/disks-filesystems` | `dt-ma5ugnR0` | PUQ Cloud | Journaling Differences: ext4 vs XFS | compare | en | 29 | transcript | yes |
| `linux/disks-filesystems` | `pDFX4L5ZYYo` | LinuxCert Guru | The Reboot Every Linux Admin Fears \| fstab Mistake Explained | mistake | en | 17 | transcript | yes |
| `linux/disks-filesystems` | `9G6Znvj4bdo` | Thinknyx Technologies | Disk Usage \|\| 'du' command in Linux | explainer | en | 57 | transcript | yes |
| `linux/networking` | `okLmJ4f8K3U` | Learn Linux TV | Linux CLI in 60 Seconds - ping | explainer | en | 60 | transcript | yes |
| `linux/networking` | `XZ3r3P0olwk` | Learn Linux TV | Linux Commands in 60 Seconds - The ssh Command | explainer | en | 46 | transcript | yes |
| `linux/networking` | `Kn_VDfuNy28` | LinuxCert Guru | TCP vs UDP Explained in 20 Seconds \| What's the Difference? | compare | en | 22 | transcript | yes |
| `linux/networking` | `fC4rnnac9es` | Daily Tech Bangla | DnS কী? | explainer | bn | 36 | transcript | yes |
| `linux/boot-services` | `s8jrXdQ-QGA` | CyberFlux Media | What is GRUB Bootloader in Linux? \| Linux Boot Process Explained | explainer | en | 54 | transcript | yes |
| `linux/boot-services` | `xxdcV1dMw_Q` | LinuxCert Guru | What Is systemd in Linux? \| PID 1 & systemctl Explained | explainer | en | 21 | transcript | yes |
| `linux/boot-services` | `H5L7FbpZkWs` | Learn Linux TV | Linux Commands in 60 Seconds - The systemctl Command | explainer | en | 60 | transcript | yes |
| `linux/boot-services` | `1dpxZ-ew2AA` | Sudo It | systemd-analyze to visualize boot process and how services have been started | explainer | en | 27 | transcript | yes |
| `linux/troubleshooting` | `7Tx0DsHEuTM` | Learn Linux TV | Linux Load Average: Simple Explanation for Beginners | explainer | en | 57 | transcript | yes |
| `linux/troubleshooting` | `eUm59MbuKFc` | LinuxCert Guru | Why Does Linux Suddenly Kill Processes? \| OOM Killer Explained | explainer | en | 21 | transcript | yes |
| `linux/troubleshooting` | `1vXqmDY79V4` | LinuxCert Guru | Deleted a Linux File but Disk Space Isn't Free? \| Use lsof | explainer | en | 11 | transcript | yes |
| `linux/troubleshooting` | `UxKhOxgk_os` | Sudo It | systemd-journald and journalctl command: view and filter logs in Linux | explainer | en | 45 | transcript | yes |
| `linux/containers` | `A_l_qPKIywU` | LinuxCert Guru | Linux Containers vs Virtual Machines \| How Containers Actually Work | compare | en | 29 | transcript | yes |
| `linux/containers` | `tLnvbg53c8g` | educational_shorts | Advanced Linux Command Day 50 \| Linux Namespaces - unshare. | explainer | en | 26 | transcript | yes |
| `linux/containers` | `3848hgsDAv8` | LinuxCert Guru | Linux cgroups Explained \| Control CPU & Memory Like a SysAdmin | explainer | en | 29 | transcript | yes |
| `linux/containers` | `9Hy1btSqEHM` | OjogorStudio | Docker কী? Docker Image & Container সহজ ভাষায় Explained \| Docker Tutorial Bangla | explainer | bn | 56 | transcript | yes |
| `architecture/requirements` | `rR68FLCHdIw` | Tejav Academy | FAANG HLD \| Functional vs Non-Functional Requirements Explained! | compare | en | 60 | frames + title | yes |
| `architecture/horizontal-scaling` | `IJ08PhlhFFs` | Learn lo0ud | Horizontal vs Vertical Scaling Explained in 60 Seconds \|System Design Interview | compare | en | 47 | transcript | yes |
| `architecture/horizontal-scaling` | `NjlMLy2OBIQ` | Programming Hero | One server can’t handle millions of users. So what do big apps do? | explainer | en | 38 | transcript | yes |
| `architecture/stateless-service` | `k7QDYbdPFzU` | Tejav Academy | FAANG HLD \| Why Stateless Servers Make Scaling EASY! | animation | en | 60 | frames + title | yes |
| `architecture/object-storage` | `lqyDQ3p2zOA` | DevOps_infinity | AWS S3 Explained (Interview Concept) \| Buckets, Objects, Glacier & Versioning \| AWS S3 | animation | en | 31 | transcript | yes |
| `architecture/object-storage` | `THhk0EpaDSk` | Rahim Tech Tips | Stop treating your server like a storage room - S3 buckets simplified | explainer | en | 42 | transcript | yes |
| `architecture/cdn` | `zdhkO5RkVzA` | Vellumy | Netflix CDN in 40 seconds. | real-system | en | 43 | transcript | yes |
| `architecture/distributed-cache` | `jmNUNLFrCqw` | Solutions Architect Insights | Design a Distributed Cache System | explainer | en | 30 | transcript | yes |
| `architecture/rate-limiting` | `9GKSmrn8nTg` | ScaleDojo | Token Bucket Algorithm Explained Simply! | explainer | en | 44 | transcript | yes |
| `architecture/monolith-microservices` | `66Afv_QHlRY` | Tejav Academy | HLD — When to Use Microservices? The Interview Trap! | interview | en | 60 | frames + title | yes |
| `architecture/observability` | `TXDOb2DVR7A` | Tejav Academy | HLD — Logs vs Metrics vs Traces Debug Production Like a Pro! | compare | en | 60 | frames + title | yes |
| `system-design/youtube` | `lpjS3ok-ncg` | Tejav Academy | HLD — Design Video Upload & Processing How Do You Process MILLIONS of Huge Videos? | animation | en | 60 | frames + title | yes |
| `system-design/youtube` | `cAsCINv6hYY` | Gaurav Sen | How Google saves petabytes of CDN data transfer everyday | real-system | en | 75 | transcript | yes |
| `system-design/google-docs` | `pIj396OZVTs` | Tejav Academy | HLD — Design Google Docs How Do 100 Users Edit ONE Document at the Same Time? | animation | en | 60 | frames + title | yes |
| `system-design/whatsapp` | `0FXZJ-GWYQM` | Rabbil Hasan | WhatsApp-এ এক tick আর দুই tick-এর পেছনে কী ঘটে? \| Store-and-Forward | explainer | bn | 42 | transcript | yes |
| `system-design/slack` | `Yk5ik6yrSXI` | Tejav Academy | HLD — Design a Chat System How Would You Build Chat for MILLIONS of Users? | animation | en | 60 | frames + title | yes |
| `system-design/url-shortener` | `42vmH3m1dQY` | The 60-Second Architect | Design a URL Shortener in 60 Seconds \| System Design Interview | interview | en | 59 | transcript | yes |

### Linux, Fundamentals, and the Architecture additions

95 rows above were added together: 47 for the 12 Linux stages, 43 for the 11 Fundamentals chapters, and 5 more for Architecture pages that had room. Every Linux stage and every Fundamentals chapter has 3 or 4 reels. Language: 92 English, 3 Bangla. Evidence: 94 `transcript`, 1 `frames + title`. Kinds: 61 explainer, 18 interview, 14 compare, 1 mistake, 1 animation.

Each of the 95 passed the same checks as the rows above: `/shorts/<id>` answers 200, oEmbed answers 200, and the official IFrame Player API reaches the playing state, with the same length as yt-dlp reports. The candidates were taken from Shorts-only lists (hashtag pages and channel Shorts tabs), then screened by length, vertical shape, and the transcript. Excerpts were read for every pick. A phrase scan (a link, "full video", a course or an e-book, "part 2", "tomorrow", a sign-up) ran over every transcript and description, and the full transcript was read for each clip that the scan or an excerpt made doubtful.

Rejected on reading, although the title matched the page: clips that only advertise a longer video, an e-book, a course, or a practice platform (the transcript says to watch the full video, to get the book, or to join); clips that tease tomorrow's video; a clip on JavaScript memory leaks for the Linux troubleshooting stage; a clip on prompting an AI for the Fundamentals planning chapter; the first half of a two-part answer; square (1:1) videos and clips of 2 to 5 seconds; and one clip that oEmbed and yt-dlp accepted but the player refused (error 150). A clip with no captions was used only when its frames were read (`frames + title`).

What was not found: no Bangla clip about Linux commands or software testing passed. The Bangla reels are on Linux networking (DNS) and containers (Docker), and on how a server works (Architecture). No System Design case gained a reel in this first round; the second round below added reels to five of them.

### System Design and Architecture, second round

17 rows above were added after the first round: 6 for System Design cases (2 for YouTube, 1 each for WhatsApp, Google Docs, Slack, and URL Shortener) and 11 for Architecture pages that had room. Every Architecture page now has 3 or 4 reels. System Design cases have 2 to 4; Bluesky and Stock Exchange stay at 2. Language: 16 English, 1 Bangla. Evidence: 10 `transcript`, 7 `frames + title`. Kinds: 5 explainer, 5 animation, 3 compare, 2 interview, 2 real-system.

Where the clips came from: the lists of the first round, 130 more hashtag lists (system-design vocabulary and Bangla tags), and a live YouTube search with the under-4-minutes filter (119 queries, 3,556 ids). Of the 140 search hits that were 65 seconds or shorter or had a Bangla title, 5 were Shorts, and yt-dlp reported all 5 as unavailable, so the search added no clip. The 17 picks passed the same three checks as the rows above. One of them, `66Afv_QHlRY`, answered player error 150 once in a run of 3 parallel probes, then played in 6 of 6 solo probes and in the frame grab, so it stays.

The 7 `frames + title` clips are all Tejav Academy's numbered HLD Shorts, which have no captions. Three frames of each were read: each shows a diagram or the steps of its topic, matching the title, and none shows an ad or a call to action. Two limits: the middle and last frames of the Google Docs clip (`pIj396OZVTs`) were caught during a transition, so only its first frame carries a diagram; and `rR68FLCHdIw` is wider than its title, because it shows requirements as step 1 of a six-step design approach and then design and trade-offs.

Four picks end with a one-line outro after a complete explanation. `NjlMLy2OBIQ` and `42vmH3m1dQY` ask to follow. `IJ08PhlhFFs` and `lqyDQ3p2zOA` also name the next video of their series, and the second is cut off in the middle of that sentence. None sells a course or a product. `cAsCINv6hYY` has a course link in its description, which the embed does not show.

Rejected on reading: a clip whose last frame says "Comment SCALING for the horizontal checklist" (`zDZCpwdximM`); a Bangla rate-limiting clip that ends with "comment rate and I will send the guide" (`ze6ncQqSLm0`); a text-only clip that plays music, shows the same slides twice, and ends with a follow request (`rvLoQJGWih8`); a clip that the player refused in every run (`J0y_qrOGa5I`, error 150); four Bangla clips by Nabid In Motion that are cuts of longer episodes (a greeting and series intro, a playlist plug, or an ending in the middle of a sentence); an S3 clip that stops where its explanation starts (`bokPMx-N2uA`); a Memcached clip that is a fragment of a talk with off-topic remarks (`AGdzULZANwE`); Hindi-spoken clips with English titles (`Y7kyPJ6S6bk`, `ztzNe5kWbNc`); and clips of 5 to 15 seconds with no captions whose description was the whole content.

What was not found: no clip for Bluesky (AT Protocol) or Stock Exchange (matching engine). The searches returned a metal band, trading memes, or 5 to 15 second clips with no captions. Airbnb, Spotify, Reddit, and Google Search gained nothing for the same reasons, or because the clip names the company and then teaches something else.

<!-- kodekloud-additions:start -->
### KodeKloud additions: DevOps & Cloud, the Course, and other pages

279 rows were added together, all by KodeKloud and all in English: 218 on the 24 pages of the new DevOps & Cloud module, 30 on 18 Course pages, and 31 on pages of AI Engineering, AI Skills, AI Concepts, Agent Memory, How AI Agents Work, AI/ML Testing, and Architecture. Kinds: explainer 233, interview 26, compare 18, real-system 2. Evidence: `transcript` for all 279: the English captions (the `en-orig` track, at least 40 words) were fetched and scanned, and read in part as described below, which is not the same as having watched the clip.

Where they come from: the Shorts tab of the KodeKloud channel (750 Shorts; `kodekloud-shorts-catalog.md` lists every one of them and what became of it). A clip was set aside before any reading if it is an exam-practice question, an advertisement, a career or news item, or a skit. The rest were checked with yt-dlp (length, vertical shape, embeddable, English captions), and then with the same three checks as the rows above: `/shorts/<id>` answers 200, oEmbed answers 200, and the official IFrame Player API reaches the playing state in headless Chrome, with a length within 3 seconds of what yt-dlp reports.

What was read: the opening and the ending of the transcript of every clip outside the two uniform series, and the whole transcript of every clip that a scan or the opening made doubtful. The 70 walkthroughs of the KodeKloud Engineer lab series and the 45 clips of the CNCF series were checked by their spoken opening against the title and the page; each series follows one script. A phrase scan ran over every transcript and every description (a link, "full video", "part 2", "next video", "tomorrow", a course, an e-book, a sign-up). Every clip was compared with what its page teaches, and it stayed only where the page names the concept; a DevOps & Cloud page is a shelf, so there the page's topic and its description decide.

Plugs: the CNCF series ends with a sentence that points to KodeKloud's certification courses, and the lab walkthroughs end with "sign up at engineer.kodekloud.com" (the captions garble the name). Measured over the transcripts of the 279 clips (a call to action is "sign up", "check out our …", "subscribe", "follow us", "learn more", a link or a web address, and its place is the word position in the transcript, not the sentence: many captions have no punctuation): 121 clips (43%) have a call to action in the last quarter of the clip (110 on DevOps & Cloud pages, 6 on Course pages, 5 on others), 7 more have one earlier, 1 has only the series intro ("In this episode of KodeKloud Engineer"), and 150 have none. An outro plug is short: an estimated 1.9 s at the median and 6.3 s at the 90th percentile, at most about 8 s (the estimate counts at most 16 words from the first match). These clips teach first and plug in one closing line, so they were kept; dropping them would remove 121 of the 279 reels. The block labels every reel as another creator's video. An earlier version of this paragraph said "about 70 lab clips" and "45 CNCF clips" from the titles of the two series; the count above is from the transcripts.

Shelf rule: the DevOps & Cloud module is a shelf of one creator's Shorts, so its pages are not held to 4 reels or to 2 reels from one channel. `tests/reels.test.ts` has a separate rule for it (2 to 20 reels on a page, one channel for the whole module). Every other page keeps the rules above. On a shelf page the explainers come first, and the lab walkthroughs follow in the order of their series.

Adjacent picks (the clip teaches a neighbour of the page's concept, or uses one company's system as its example): `RsJWze1YP8U` (how routers choose a route, on the IP page); `zY5dQmF8gEE` (a webhook as the push side of polling, on the long-polling page); `vdx4-z5CoBk` (webhook delivery with retries, on the event-driven page); `xc4nXaKQp7s` (a job queue with workers, on the event-driven page); `uZDNJq18YL0` (fan-out of a notification, on the pub-sub page); `-C_EKxhwYew` (connection pooling, on the database page); `zKa4FXts6Go` (changing a large table online, on the SQL page); `6PtHyHI6RoA` (ALTER TABLE and locks, on the SQL page); `juMinZqHAPQ` (polyglot persistence, on the SQL vs NoSQL page); `Bf5GhT8jZPc` (the Two Generals problem, on the CAP page); `KBs0MerAnoE` (how OpenAI cut the CPU use of its log collectors, on the monitoring page); `fVLmyuCEEy8` (how ChatGPT serves 900 million users, on the AI system design page); `6zZ9flbZwnU` (Sonnet against Opus, on the model routing page); `OIk0DLPLLiQ` (how a model's parameters are trained, on the fine-tuning page); `6wDjcFjzUvE` (what a GPU does, on the AI infrastructure page); `Kf3xIq988RY` (a data-analyst agent on an AWS data stack, on the AI data analysis page); `0X3cQo4euEo` (agents against workflows, on the workflow automation page); `LfB-tKsAmfo` (MCP sessions going stateless, on the tool calling page); `hCWPxZ8wUkY` (a plain RAG explainer, on the RAG testing page); `EwZcKZ_k6d0` (MLOps, on the What is DevOps page); `uKQQzrq9Cqw` (AIOps against DevOps and MLOps, on the What is DevOps page); `aZB4iqTWF3M` (AIOps, on the What is DevOps page); `9F-WHimhscs` (how reasoning models work, on the page of the model that decides).

Course pages with one reel (listed in `THIN_PAGES`): `course/ip`, `course/long-polling-ws-sse`, `course/pub-sub`, `course/rest-graphql-grpc`, `course/sla-slo-sli`, `course/sql-vs-nosql`.

Not used although the title matched a page, with the reason (29 clips):

- `fow0qQ422NE` AWS FINALLY FIXED IT!: news about AWS sign-up and spending-limit changes; it does not teach EC2, EBS, or S3
- `5V4b2P28-70` Amazon Style Interview Question: teaches awk on a web-server log; only the title says Amazon
- `zlpgOy3BVB4` DP-900: Microsoft Azure Data Fundamentals \| KodeKloud: advertises the launch of a course
- `7atGIcL-vRY` Why Git Wasn’t Enough for Anthropic!: a story about one company's source-control tool; not a Git workflow, and no source to check it against
- `17sw0ygRzQE` Best CI/CD Tools in 2026: a tier list of CI/CD tools: a dated opinion that ends with a plug
- `YluO7Dr4ybs` Run Powerful AI Models Locally with Docker!: a product feature that the clip calls beta; out of date
- `CeOsIjO0gzk` How to Deploy an AI Agent in Kubernetes (Kagent): a demo of an AI-agent product, not the control plane; ends with a course plug
- `dRaipDwap8A` The Best Infrastructure as Code Tool: a ranking of seven IaC tools: opinion, ends with a plug
- `tQFCUXTkcLs` Best Observability Tools Ranked (2026): a ranking of observability tools in 2026: opinion, ends with a plug
- `iV8APoJea0E` Why Your Terraform Modules Are Building Tech Debt, Not Preventing It: a hot take that modules are tech debt; it works against the Terraform documentation that the page cites
- `bv9K31IKZE4` What is Pulumi? \| KodeKloud: the opening of a longer video: it promises the differences and a demo, then stops
- `V7fCYv6RWbY` Deploying a Multi-Tier App on Kubernetes: the recap of a demo whose first half the clip does not show (the voting app)
- `PBVa27WDGW0` How to Verify Your Minikube Kubernetes Cluster is Running: one demo step (minikube status), with a Kubernetes version that is out of date
- `qRwebpavTHU` What is GitOps?: the intro of a longer video: it stops before it says what GitOps is
- `MTRNTv-ceaY` AWS IAM Explained in 60 Seconds: a second IAM overview that ends on 'in the next lesson'; the page has a better one
- `BWAEyVB_zAk` AI Agents for Beginners Course - Part 1: the trailer of a course
- `zfkwEoP0WQo` MLOps roadmap for 2026!: a learning roadmap, not what CI/CD for AI teaches
- `lmY94ldWa3Q` The complete AIOps roadmap you need to know!: a learning roadmap, not what production monitoring teaches
- `8JT6DS8yt0s` What is Kubeflow?: Kubeflow, an ML platform; the page is about monitoring, and the CNCF page has a Kubeflow clip
- `GK-byvi8E7U` Why Knowledge Graph is so powerful?: knowledge graphs; no page of the site teaches them
- `PXO9wfRa3SA` Meet UV — The Fastest Python Package Manager: the uv package manager; the capstone page does not use uv
- `l7nHbi9GAVA` What Does GPT Actually Stand For? (Explained Simply): what the letters GPT stand for; no page of the site teaches it
- `zh0n6S2NcLM` AI Agents vs AI Workflows (Part - 1/2): the first half of a two-part answer: it stops at the question 'who controls the flow'
- `sJvuNHweGbc` Interview: How Do Websites Store Passwords?: password hashing; no Course page teaches it (the SSO page is about federation)
- `SfS3yJeKVYQ` Interview: How Browser Cookies Actually Work: browser cookies; no Course page teaches them
- `0dQx0TzBuQc` The BEST OSI Model Explanation You'll Ever Watch (Networking Fundament: a longer copy of the OSI explanation that stops mid-sentence at the 3-minute limit; the page has the complete one
- `kTBWEkqBIgg` What Is the New HTTP QUERY Method?: a draft HTTP method that is not what the REST, GraphQL, and gRPC page teaches
- `awU76_QDa34` System Design: Defeating the SMS Retry Storm!: duplicate requests and retries in an SMS flow; it never says circuit breaker
- `m5W4WexW5SQ` The 1 File That Lets You Fake Any Domain: the hosts file, a useful trick, but the page holds two reels and the short explainer of DNS is closer to what it teaches

Not done: the Linux and Fundamentals clips that passed every check were left to the curation of those pages, and the tutorial lessons (`extend/mcp`, `foundations/how-claude-code-works`) have no reels. Clips for Architecture and AI pages that already hold 4 reels, or 2 from KodeKloud, were not added (the catalog lists them).

| Page | Video id | Channel | Title | Kind | Lang | Seconds | Evidence | Plays |
|---|---|---|---|---|---|---|---|---|
| `agent-memory/parametric-memory` | `h2mTTdoMvzo` | KodeKloud | How LLMs Actually Learn? | explainer | en | 170 | transcript | yes |
| `agent-memory/working-memory` | `TXuYu-RkSkI` | KodeKloud | Why More Context is KILLING Your LLM Responses (RAG vs Prompt Stuffing) | compare | en | 104 | transcript | yes |
| `ai-agents/act-with-tools` | `yahZy5tBoeo` | KodeKloud | How Claude Does Web Search? | explainer | en | 98 | transcript | yes |
| `ai-agents/llm-decides` | `9F-WHimhscs` | KodeKloud | How Reasoning Models Actually Work | explainer | en | 154 | transcript | yes |
| `ai-concepts/agentic-loops` | `dvvWoRxqkIQ` | KodeKloud | What is Loop Engineering? | explainer | en | 161 | transcript | yes |
| `ai-concepts/guardrails` | `yyAyR1VrA3c` | KodeKloud | What is Lethal Trifecta in AI Agents? | explainer | en | 151 | transcript | yes |
| `ai-concepts/inference-economics` | `P-mv2hQc43E` | KodeKloud | What Actually is an AI Token? (Simply Explained) | explainer | en | 174 | transcript | yes |
| `ai-concepts/mcp` | `7VfKiaGOZcA` | KodeKloud | MCP vs UTCP | compare | en | 179 | transcript | yes |
| `ai-engineering/agent-orchestration` | `_ACk2DeLfSU` | KodeKloud | Google’s ADK Explained in 60 Seconds | explainer | en | 68 | transcript | yes |
| `ai-engineering/ai-infrastructure` | `6wDjcFjzUvE` | KodeKloud | What Do GPUs Actually Do? | explainer | en | 113 | transcript | yes |
| `ai-engineering/calling-llm-apis` | `tbNCwO6qQE0` | KodeKloud | 6 LLM settings every AI Developer needs to know | explainer | en | 173 | transcript | yes |
| `ai-engineering/cost-optimization` | `WLu6dvfqL3A` | KodeKloud | Every AI request has a price and it's paid in tokens. | explainer | en | 148 | transcript | yes |
| `ai-engineering/cost-optimization` | `a17HbAv_q78` | KodeKloud | Why does AI charge you MORE every time it replies? | explainer | en | 132 | transcript | yes |
| `ai-engineering/data-pipelines` | `5Z-ZbD6S0us` | KodeKloud | Chunk Overlap: Helpful or Just Duplicate Noise? | explainer | en | 93 | transcript | yes |
| `ai-engineering/model-routing` | `6zZ9flbZwnU` | KodeKloud | Why Sonnet 5 When You Have Opus? | explainer | en | 128 | transcript | yes |
| `ai-engineering/prompt-engineering` | `obj-PvjnaOQ` | KodeKloud | Prompting Basics - Part 3/3 | explainer | en | 177 | transcript | yes |
| `ai-engineering/prompt-engineering` | `firMkLcdHQk` | KodeKloud | Prompting Basics Part - 1/3 | explainer | en | 50 | transcript | yes |
| `ai-engineering/rag-basics` | `E4cMVt0BSI4` | KodeKloud | What is RAG in under 90 seconds! | explainer | en | 175 | transcript | yes |
| `ai-engineering/retrieval-engineering` | `V1iGw0Os27w` | KodeKloud | Why Your AI Can’t Find Your Data! | explainer | en | 121 | transcript | yes |
| `ai-engineering/system-design` | `fVLmyuCEEy8` | KodeKloud | How ChatGPT Handles 900 Million Users | real-system | en | 174 | transcript | yes |
| `ai-engineering/tool-calling` | `LfB-tKsAmfo` | KodeKloud | Model Context Protocol Upgrade! | explainer | en | 133 | transcript | yes |
| `ai-ml-testing/advanced-rag-failures` | `9aZrzDysoZY` | KodeKloud | The 4 RAG Blocks That Matter | explainer | en | 108 | transcript | yes |
| `ai-ml-testing/multi-agent-testing` | `N8rnFxavJrE` | KodeKloud | How Google's A2A Protocol Works? | explainer | en | 57 | transcript | yes |
| `ai-ml-testing/prompt-engineering-basics` | `4hebaIPjcig` | KodeKloud | Prompting Basics - Part 2/3 | explainer | en | 106 | transcript | yes |
| `ai-ml-testing/rag-testing-basics` | `hCWPxZ8wUkY` | KodeKloud | RAG Explained in 60 Seconds | explainer | en | 68 | transcript | yes |
| `ai-skills/ai-agents` | `kIlgDm5gcMY` | KodeKloud | Why do we need AI Agents when we have AI models? | explainer | en | 118 | transcript | yes |
| `ai-skills/ai-data-analysis` | `Kf3xIq988RY` | KodeKloud | Building Data Analyst Agent | explainer | en | 175 | transcript | yes |
| `ai-skills/fine-tuning` | `OIk0DLPLLiQ` | KodeKloud | How LLMs Actually Learn? | explainer | en | 160 | transcript | yes |
| `ai-skills/mcp-connectors` | `7QUj_vXkivg` | KodeKloud | How Anthropic Fixed MCP Context Bloat Issue | explainer | en | 151 | transcript | yes |
| `ai-skills/workflow-automation` | `0X3cQo4euEo` | KodeKloud | Why AI Agents Are Killing Workflows in 2026 | explainer | en | 157 | transcript | yes |
| `architecture/single-server` | `ekWtLUg7GpE` | KodeKloud | Client-Server vs Peer-to-Peer Networks | compare | en | 49 | transcript | yes |
| `course/cap-theorem` | `HTaKhMv_ZYU` | KodeKloud | What is CAP Theorem in System Design? | explainer | en | 179 | transcript | yes |
| `course/cap-theorem` | `Bf5GhT8jZPc` | KodeKloud | Why Perfect Networking is Impossible! | explainer | en | 155 | transcript | yes |
| `course/database` | `8tcHlirj3rM` | KodeKloud | SQLite: The Database on Every Phone! | explainer | en | 157 | transcript | yes |
| `course/database` | `-C_EKxhwYew` | KodeKloud | Postgres Hit the Connection Limit. Now What? | explainer | en | 176 | transcript | yes |
| `course/disaster-recovery` | `51q3QjCNQDw` | KodeKloud | Database: Replication vs Backup! | compare | en | 89 | transcript | yes |
| `course/disaster-recovery` | `UF96IHadCiw` | KodeKloud | Backup vs Disaster Recovery: Why You Need Both for Data Protection \| SRE Concepts | compare | en | 118 | transcript | yes |
| `course/dns` | `wEjgtknhLUQ` | KodeKloud | Interview: How DNS Finds a Website’s IP Address | interview | en | 179 | transcript | yes |
| `course/dns` | `Kx9HqKThjL8` | KodeKloud | How DNS Works? | explainer | en | 48 | transcript | yes |
| `course/event-driven-architecture` | `xc4nXaKQp7s` | KodeKloud | System Design: Background Job-Processing Workers! | explainer | en | 179 | transcript | yes |
| `course/event-driven-architecture` | `vdx4-z5CoBk` | KodeKloud | Design Webhooks Processing System | explainer | en | 171 | transcript | yes |
| `course/indexes` | `b3bBGEzi4lg` | KodeKloud | Interview: How Database Indexing Works | interview | en | 177 | transcript | yes |
| `course/indexes` | `_2WPVe4dw_8` | KodeKloud | Interview: B-Tree vs B+ Tree | interview | en | 159 | transcript | yes |
| `course/ip` | `RsJWze1YP8U` | KodeKloud | How Do Routers Know Where to Send Your Packet? | explainer | en | 178 | transcript | yes |
| `course/long-polling-ws-sse` | `zY5dQmF8gEE` | KodeKloud | What is Webhook? | explainer | en | 104 | transcript | yes |
| `course/osi` | `xuan1dN9bKw` | KodeKloud | The OSI Model: 7 Layers Explained with HTTP Request | explainer | en | 154 | transcript | yes |
| `course/osi` | `E2srSCtz3bU` | KodeKloud | How the Internet Really Sends Your Data! (TCP/IP Explained Simply) | explainer | en | 59 | transcript | yes |
| `course/pub-sub` | `uZDNJq18YL0` | KodeKloud | System Design: Notifying 50 Million Users in One Shot | interview | en | 161 | transcript | yes |
| `course/rest-graphql-grpc` | `29B4wFRJyAo` | KodeKloud | gRPC vs HTTP Explained in 3 minutes | compare | en | 180 | transcript | yes |
| `course/sharding` | `IwnefaLZhGs` | KodeKloud | The Celebrity Problem in Database Sharding | explainer | en | 162 | transcript | yes |
| `course/sharding` | `1_xLXicErn0` | KodeKloud | When to Shard Database vs Replicate? Database Scaling Explained. | compare | en | 113 | transcript | yes |
| `course/sla-slo-sli` | `bORGo7-mLlQ` | KodeKloud | SLA vs SLO vs SLI: What’s the Difference? | compare | en | 114 | transcript | yes |
| `course/sql` | `zKa4FXts6Go` | KodeKloud | Tricky Database Interview Question | interview | en | 172 | transcript | yes |
| `course/sql` | `6PtHyHI6RoA` | KodeKloud | Postgres Interview Question! | interview | en | 117 | transcript | yes |
| `course/sql-vs-nosql` | `juMinZqHAPQ` | KodeKloud | System Design: What is Polyglot Persistence? | explainer | en | 128 | transcript | yes |
| `course/ssl-tls-mtls` | `lVWXZb_4tU8` | KodeKloud | Interview: How TCP, TLS and HTTP Actually Work Together | interview | en | 158 | transcript | yes |
| `course/ssl-tls-mtls` | `VT-RK8xbrso` | KodeKloud | System Design: Securing Internal Microservices! | interview | en | 179 | transcript | yes |
| `course/tcp-udp` | `oYf6qaBpFsw` | KodeKloud | TCP or UDP? Every Developer Must Know This | interview | en | 99 | transcript | yes |
| `course/tcp-udp` | `mh8geod4VRI` | KodeKloud | TCP vs UDP Explained with WhatsApp | compare | en | 180 | transcript | yes |
| `course/vm-containers` | `biDEGt6XWc4` | KodeKloud | Containers vs Virtual Machines Explained | compare | en | 69 | transcript | yes |
| `course/vm-containers` | `oz4WufCnYbs` | KodeKloud | What is Hypervisor? | explainer | en | 62 | transcript | yes |
| `devops/ansible` | `-OGhkEcT-rM` | KodeKloud | Ansible: Configuring Default SSH User \| Ansible Series | explainer | en | 59 | transcript | yes |
| `devops/ansible` | `WExhYLSmxu4` | KodeKloud | Copy Data to App Servers using Ansible \| KodeKloud Engineer \| Ansible Series | explainer | en | 60 | transcript | yes |
| `devops/ansible` | `rD6IkBTb5UI` | KodeKloud | Creating Files on App Servers using Ansible \| Ansible Tutorial \| Ansibleseries | explainer | en | 59 | transcript | yes |
| `devops/ansible` | `2h1GpukoE1k` | KodeKloud | Ansible: Create Inventory For App Server Testing \| Ansible series \| KodeKloud Engineer | explainer | en | 60 | transcript | yes |
| `devops/aws-compute-storage` | `QvhsavHRdbU` | KodeKloud | AWS S3 data replication explained in 60 seconds | explainer | en | 67 | transcript | yes |
| `devops/aws-compute-storage` | `GzjLOPfnLz8` | KodeKloud | Elastic Block Store Explained under 1 minute | explainer | en | 47 | transcript | yes |
| `devops/aws-compute-storage` | `C6PiS4mPMEI` | KodeKloud | What Is Amazon EC2? Virtual Servers in the Cloud Explained | explainer | en | 70 | transcript | yes |
| `devops/aws-compute-storage` | `AJpG80no6yE` | KodeKloud | What Is Amazon S3? Simple Cloud Storage Explained in 60 Seconds | explainer | en | 76 | transcript | yes |
| `devops/aws-compute-storage` | `59I1r0NJlNI` | KodeKloud | Allocating an Elastic IP in AWS | explainer | en | 36 | transcript | yes |
| `devops/aws-compute-storage` | `x1wEehKrUsc` | KodeKloud | AWS: Creating EC2 Instance \| AWS Series | explainer | en | 58 | transcript | yes |
| `devops/aws-compute-storage` | `0xcrSWi7_gQ` | KodeKloud | AWS: Change EC2 Instance Type \| AWS Series | explainer | en | 55 | transcript | yes |
| `devops/aws-compute-storage` | `QQebVodo3Bk` | KodeKloud | AWS: Enable Stop Protection for EC2 Instance \| AWS Series | explainer | en | 45 | transcript | yes |
| `devops/aws-compute-storage` | `G5OwnXpLcF4` | KodeKloud | AWS: Enable Termination Protection for EC2 Instance \| AWS Series | explainer | en | 50 | transcript | yes |
| `devops/aws-compute-storage` | `WGSm4RNNTMA` | KodeKloud | AWS: Attaching Elastic IP to EC2 Instance \| KodeKloud Engineer \| AWS Series | explainer | en | 57 | transcript | yes |
| `devops/aws-compute-storage` | `IPEmRncq0i8` | KodeKloud | Attaching a Volume to EC2 Instance \| AWS Tutorial \| AWS Series | explainer | en | 58 | transcript | yes |
| `devops/aws-compute-storage` | `yfETVL3afuA` | KodeKloud | Creating an AMI from an EC2 Instance \| AWS Tutorial \| AWS Series | explainer | en | 53 | transcript | yes |
| `devops/aws-compute-storage` | `OqMigXMscMA` | KodeKloud | Terminating EC2 Instance \| AWS Tutorial \| AWS Series | explainer | en | 53 | transcript | yes |
| `devops/aws-compute-storage` | `SDNclbUr5d8` | KodeKloud | Creating EBS Snapshot \| AWS Tutorial \| AWS Series | explainer | en | 51 | transcript | yes |
| `devops/aws-compute-storage` | `mTX-VBxY62Y` | KodeKloud | How to create GP3 Volume \| AWS Series \| KodeKloud Engineer | explainer | en | 53 | transcript | yes |
| `devops/aws-data-serverless` | `dlTX_TBpVUs` | KodeKloud | AWS Lambda explained in 60 seconds | explainer | en | 78 | transcript | yes |
| `devops/aws-data-serverless` | `CYrLIDjG4Qc` | KodeKloud | Amazon Athena explained in 120 seconds | explainer | en | 115 | transcript | yes |
| `devops/aws-data-serverless` | `Izba9YF4tdk` | KodeKloud | AWS Neptune: The Database Built for Relationships | explainer | en | 128 | transcript | yes |
| `devops/aws-data-serverless` | `HlGs4C1Y5nA` | KodeKloud | AWS Fargate in 60 seconds | explainer | en | 81 | transcript | yes |
| `devops/aws-data-serverless` | `rR0bwTupqAI` | KodeKloud | AWS Step Functions: The tool that organizes your Lambda mess | explainer | en | 94 | transcript | yes |
| `devops/aws-data-serverless` | `GrHM7Hby-20` | KodeKloud | AWS RDS vs. DynamoDB: Which Database should you choose? | interview | en | 80 | transcript | yes |
| `devops/aws-data-serverless` | `LooINFCjgJ0` | KodeKloud | AWS Lambda Explained for Beginners | explainer | en | 64 | transcript | yes |
| `devops/aws-data-serverless` | `Q6H_nGdg0uY` | KodeKloud | AWS RDS Explained in 90 seconds | explainer | en | 94 | transcript | yes |
| `devops/aws-identity-security` | `hZ6BTnsn2mM` | KodeKloud | AWS Key Leaked! | interview | en | 94 | transcript | yes |
| `devops/aws-identity-security` | `4TwmceijWM0` | KodeKloud | AWS IAM Explained in 60 Seconds | explainer | en | 81 | transcript | yes |
| `devops/aws-identity-security` | `qso_olVQ_iU` | KodeKloud | AWS interview question: Secrets Manager vs Parameter Store | interview | en | 88 | transcript | yes |
| `devops/aws-identity-security` | `C9BvMXj4z2o` | KodeKloud | AWS IAM Roles Explained | explainer | en | 88 | transcript | yes |
| `devops/aws-identity-security` | `7q-n0xpQyiw` | KodeKloud | What Is an AWS IAM Policy? | explainer | en | 140 | transcript | yes |
| `devops/aws-identity-security` | `nTcDjKtX3-8` | KodeKloud | What Is AWS MFA? ( Multi-Factor Authentication Explained ) | explainer | en | 105 | transcript | yes |
| `devops/aws-identity-security` | `2BYWWhdwp-4` | KodeKloud | What Is AWS Secrets Manager? | explainer | en | 76 | transcript | yes |
| `devops/aws-identity-security` | `zX-G3wUVz7c` | KodeKloud | What Is AWS KMS? (Key Management Service) | explainer | en | 30 | transcript | yes |
| `devops/aws-identity-security` | `gb1pXzWDlGc` | KodeKloud | What Are AWS IAM Roles? | explainer | en | 66 | transcript | yes |
| `devops/aws-identity-security` | `wXRVT0dWM3o` | KodeKloud | Creating IAM User \| AWS Tutorial \| AWS Series | explainer | en | 49 | transcript | yes |
| `devops/aws-identity-security` | `8vMJ_52zbyg` | KodeKloud | Creating an IAM in AWS \| AWS Tutorial \| AWS Series | explainer | en | 49 | transcript | yes |
| `devops/aws-identity-security` | `ZEUd1IyAde0` | KodeKloud | Creating an IAM Policy in AWS \| AWS Tutorial \| AWS Series | explainer | en | 60 | transcript | yes |
| `devops/aws-identity-security` | `OdNnS-0MX-c` | KodeKloud | Attaching an IAM Policy to a User in AWS \| AWS Tutorial \| AWS Series | explainer | en | 53 | transcript | yes |
| `devops/aws-networking` | `JGzccAh-quU` | KodeKloud | AWS VPC Explained in 60 seconds | explainer | en | 86 | transcript | yes |
| `devops/aws-networking` | `qjFe9xgl6Dg` | KodeKloud | AWS Route 53 explained in 2 minutes! | explainer | en | 113 | transcript | yes |
| `devops/aws-networking` | `nPkIpdH67Vw` | KodeKloud | What does CloudFront exactly do? | explainer | en | 110 | transcript | yes |
| `devops/aws-networking` | `mbtojfukpDk` | KodeKloud | AWS Load Balancers explained but make it actually make sense | explainer | en | 139 | transcript | yes |
| `devops/aws-networking` | `kzLp-k7vQO8` | KodeKloud | What Is AWS VPC? | explainer | en | 106 | transcript | yes |
| `devops/aws-networking` | `3nrx0s1QdvE` | KodeKloud | What Is AWS Load Balancer? | explainer | en | 47 | transcript | yes |
| `devops/aws-networking` | `dP6JWmxzUAQ` | KodeKloud | Attaching Elastic Network Interface to EC2 Instance \| KodeKloud Engineer \| AWS Series | explainer | en | 55 | transcript | yes |
| `devops/aws-networking` | `CaAnXUBcBcY` | KodeKloud | How to Create a Key Pair \| AWS Series \| KodeKloud Engineer | explainer | en | 60 | transcript | yes |
| `devops/aws-networking` | `GN53WLSnEJk` | KodeKloud | Creating Subnet in AWS \| AWS Series \| KodeKloud | explainer | en | 49 | transcript | yes |
| `devops/aws-networking` | `k93sw3AYMrY` | KodeKloud | How to Create a Security Group \| AWS Series \| KodeKloud Engineer | explainer | en | 60 | transcript | yes |
| `devops/ci-cd` | `JctUTCb0oEQ` | KodeKloud | Shift Left Explained with SQL Injection Bug | explainer | en | 171 | transcript | yes |
| `devops/ci-cd` | `YexHYnsJxag` | KodeKloud | How to Install Jenkins Plugins \| Jenkins Series | explainer | en | 55 | transcript | yes |
| `devops/ci-cd` | `Pf_jB1nT-r8` | KodeKloud | Set Up a CI/CD Server in Jenkins \| Jenkins Series \| KodeKloud Engineer | explainer | en | 60 | transcript | yes |
| `devops/cloud-concepts` | `mH0AnhSFFDg` | KodeKloud | 3 Cloud Deployment Models Simplified | explainer | en | 114 | transcript | yes |
| `devops/cloud-concepts` | `eA7liickrVE` | KodeKloud | Why Virtualization? | explainer | en | 62 | transcript | yes |
| `devops/cloud-concepts` | `hUajDv_ZF24` | KodeKloud | What is local stack? | explainer | en | 60 | transcript | yes |
| `devops/cloud-concepts` | `62l0ej4dqT4` | KodeKloud | Cloud Computing vs Traditional IT: The Key Difference Explained | compare | en | 157 | transcript | yes |
| `devops/cloud-concepts` | `CsttKzzbaZs` | KodeKloud | What is 12 Factor App? \| KodeKloud | explainer | en | 54 | transcript | yes |
| `devops/cloud-concepts` | `ZNe-j0YASik` | KodeKloud | 5 Key Principles for Cloud Native Architecture \| KodeKloud | explainer | en | 49 | transcript | yes |
| `devops/cloud-concepts` | `2n_m6KTl5ME` | KodeKloud | Creating SSH Key Pair for Azure VM \| Azure Series | explainer | en | 85 | transcript | yes |
| `devops/cloud-concepts` | `Yj_9L1-_EA0` | KodeKloud | Creating an Azure Virtual Machine \| Azure Series | explainer | en | 129 | transcript | yes |
| `devops/cloud-concepts` | `MBCRQTqwOjM` | KodeKloud | Azure: Create a Virtual Network \| Azure Series | explainer | en | 68 | transcript | yes |
| `devops/cncf-build-deliver` | `RHnTTP3_Q7Y` | KodeKloud | Helm – The Package Manager for Kubernetes Deployments \| CNCF Project | explainer | en | 91 | transcript | yes |
| `devops/cncf-build-deliver` | `4hGlOKFtnHU` | KodeKloud | Argo - Automating Workflows and Deployments in Kubernetes \| CNCF Project | explainer | en | 99 | transcript | yes |
| `devops/cncf-build-deliver` | `nvpWEvbyTpg` | KodeKloud | Backstage – Open Source Framework for Developer Portals \| CNCF Project | explainer | en | 84 | transcript | yes |
| `devops/cncf-build-deliver` | `B2IRSdQBmKw` | KodeKloud | KEDA – Event-Driven Autoscaling for Kubernetes \| CNCF Graduated Project | explainer | en | 94 | transcript | yes |
| `devops/cncf-build-deliver` | `HpeBBSFjCgA` | KodeKloud | Flux – The GitOps Solution for Kubernetes Application Management \| CNCF Project | explainer | en | 87 | transcript | yes |
| `devops/cncf-build-deliver` | `fOBuhKwR8u0` | KodeKloud | Operator Framework – Complete Toolkit for Kubernetes Operators \| CNCF Project | explainer | en | 98 | transcript | yes |
| `devops/cncf-build-deliver` | `DuTNVHQ7DiU` | KodeKloud | Crossplane – Universal Control Plane for Cloud Resources \| CNCF Incubation Project | explainer | en | 103 | transcript | yes |
| `devops/cncf-build-deliver` | `FyVOedj56uk` | KodeKloud | Dapr – The Portable Runtime for Modern Distributed Applications \| CNCF Project | explainer | en | 82 | transcript | yes |
| `devops/cncf-build-deliver` | `NU82e2H6d6g` | KodeKloud | Knative – Bringing Serverless Computing to Kubernetes \| CNCF Project | explainer | en | 93 | transcript | yes |
| `devops/cncf-build-deliver` | `8MbVCYcnOAs` | KodeKloud | OpenFeature – Simplifying Feature Flag Management for Developers \| CNCF Project | explainer | en | 88 | transcript | yes |
| `devops/cncf-build-deliver` | `n9GgihQ7_88` | KodeKloud | CloudEvents - Standardizing Events for Interoperability \| CNCF Graduated Project | explainer | en | 92 | transcript | yes |
| `devops/cncf-build-deliver` | `jIvjgcO9EZk` | KodeKloud | Buildpacks.io - Simplifying Containerization for Developers \| CNCF Incubating Project | explainer | en | 87 | transcript | yes |
| `devops/cncf-build-deliver` | `28HlZp_Iwgs` | KodeKloud | KubeVela – Simplifying Application Delivery on Kubernetes \| CNCF Project | explainer | en | 91 | transcript | yes |
| `devops/cncf-build-deliver` | `fb3F5hpbLB0` | KodeKloud | ArtifactHub: Your Gateway to Cloud-Native Packages \| CNCF Incubating Project | explainer | en | 96 | transcript | yes |
| `devops/cncf-network-security-observability` | `DgFv961J4YA` | KodeKloud | Jaeger - The Distributed Tracing Solution for Microservices \| CNCF Graduated Projects | explainer | en | 97 | transcript | yes |
| `devops/cncf-network-security-observability` | `KO0m2qdWEOM` | KodeKloud | Istio – The Powerful Service Mesh for Cloud-Native Applications \| CNCF Project | explainer | en | 89 | transcript | yes |
| `devops/cncf-network-security-observability` | `Jbf1D5oyhrE` | KodeKloud | Cert-manager - Automating TLS Certificate Management in Kubernetes \| CNCF Project | explainer | en | 92 | transcript | yes |
| `devops/cncf-network-security-observability` | `fAltA5eocMg` | KodeKloud | Cilium - Networking, Security & Observability for Cloud-Native \| CNCF Graduated Projects | explainer | en | 83 | transcript | yes |
| `devops/cncf-network-security-observability` | `MmyS4xJQHJ8` | KodeKloud | Envoy - The High-Performance Service and Edge Proxy \| CNCF Graduated Project | explainer | en | 87 | transcript | yes |
| `devops/cncf-network-security-observability` | `pe3n2mJn2EI` | KodeKloud | Open Policy Agent – Unified Policy Enforcement for Cloud-Native Security \| CNCF Project | explainer | en | 94 | transcript | yes |
| `devops/cncf-network-security-observability` | `xuJQKLj_is0` | KodeKloud | CoreDNS - The Ultimate DNS Server for Cloud-Native Environments \| CNCF Graduated Projects | explainer | en | 79 | transcript | yes |
| `devops/cncf-network-security-observability` | `gX-ngwB2nkQ` | KodeKloud | Harbor - A Trusted Cloud-Native Registry for Container Security \| CNCF Graduated Projects | explainer | en | 91 | transcript | yes |
| `devops/cncf-network-security-observability` | `tMAqVkkdpF4` | KodeKloud | Prometheus – Powerful Monitoring & Alerting for Cloud-Native Applications \| CNCF Project | explainer | en | 91 | transcript | yes |
| `devops/cncf-network-security-observability` | `Xvo18pJCZUA` | KodeKloud | SPIRE - The Foundation for Workload Identity Management \| CNCF Graduated Projects | explainer | en | 78 | transcript | yes |
| `devops/cncf-network-security-observability` | `dS3Jw1AwGSA` | KodeKloud | How TUF Secures the Cloud-Native Ecosystem \| CNCF Graduated Project | explainer | en | 75 | transcript | yes |
| `devops/cncf-network-security-observability` | `ko-eKIFXafM` | KodeKloud | Falco - Cloud-Native Security for Detecting Intrusions \| CNCF Graduated Projects | explainer | en | 91 | transcript | yes |
| `devops/cncf-network-security-observability` | `eR3cAMeME8A` | KodeKloud | SPIFFE - The Identity Framework Keeping Your Services Safe \| CNCF Graduated Projects | explainer | en | 71 | transcript | yes |
| `devops/cncf-network-security-observability` | `NB6iHqWql6o` | KodeKloud | Linkerd - The Lightweight Service Mesh for Kubernetes \| CNCF Graduated Project | explainer | en | 88 | transcript | yes |
| `devops/cncf-network-security-observability` | `rNxIqk3nBww` | KodeKloud | In-toto - Securing Your Software Supply Chain \| CNCF Graduated Projects | explainer | en | 74 | transcript | yes |
| `devops/cncf-network-security-observability` | `-zRPincOvuQ` | KodeKloud | Fluentd - Unified Logging for Cloud-Native Applications \| CNCF Graduated Projects | explainer | en | 80 | transcript | yes |
| `devops/cncf-runtime-data` | `GWonQMnbyak` | KodeKloud | Vitess - The Ultimate MySQL Clustering Solution for Kubernetes \| CNCF Graduated Projects | explainer | en | 74 | transcript | yes |
| `devops/cncf-runtime-data` | `5lQSiCBHJv0` | KodeKloud | Kubeflow – End-to-End Machine Learning on Kubernetes \| CNCF Project | explainer | en | 101 | transcript | yes |
| `devops/cncf-runtime-data` | `kdjlBywmg0o` | KodeKloud | KubeVirt – Run Virtual Machines on Kubernetes \| CNCF Project | explainer | en | 99 | transcript | yes |
| `devops/cncf-runtime-data` | `cx45ENgTXF4` | KodeKloud | Karmada – Seamless Multi-Cluster Management for Kubernetes \| CNCF Incubation Project | explainer | en | 103 | transcript | yes |
| `devops/cncf-runtime-data` | `wMPTKD6jshw` | KodeKloud | CRI-O - The Lightweight Container Runtime for Kubernetes \| CNCF Graduated Project | explainer | en | 86 | transcript | yes |
| `devops/cncf-runtime-data` | `x6XU5u7uwQ4` | KodeKloud | CubeFS - The Future of Distributed Storage in Kubernetes \| CNCF Graduated Project | explainer | en | 69 | transcript | yes |
| `devops/cncf-runtime-data` | `VLaiPn1tvgQ` | KodeKloud | OpenKruise – Streamlining Workload Management in Kubernetes \| CNCF Project | explainer | en | 93 | transcript | yes |
| `devops/cncf-runtime-data` | `Zx_NS14K3s8` | KodeKloud | Rook: Your All-in-One Solution for Kubernetes Storage \| CNCF Graduated Project | explainer | en | 80 | transcript | yes |
| `devops/cncf-runtime-data` | `gE332UkBjt8` | KodeKloud | KubeEdge - Extending Kubernetes to the Edge \| CNCF Graduated Projects | explainer | en | 90 | transcript | yes |
| `devops/cncf-runtime-data` | `WAE2yBYIFOk` | KodeKloud | Containerd - The Industry-Standard Container Runtime \| CNCF Graduated Project | explainer | en | 86 | transcript | yes |
| `devops/cncf-runtime-data` | `cD1sQIb1nGE` | KodeKloud | TiKV - The Distributed Key-Value Database for Cloud-Native Applications \| CNCF Graduated Project | explainer | en | 81 | transcript | yes |
| `devops/cncf-runtime-data` | `h7aZQjL4i_A` | KodeKloud | Volcano - Advanced Batch Scheduling for Kubernetes \| CNCF Incubation Project Day 12 | explainer | en | 109 | transcript | yes |
| `devops/cncf-runtime-data` | `Rd8Sh5nu6TQ` | KodeKloud | WasmCloud – Universal Application Platform with WebAssembly \| CNCF Incubation Project | explainer | en | 101 | transcript | yes |
| `devops/cncf-runtime-data` | `2TqrPMMql4E` | KodeKloud | etcd - The Reliable Key-Value Store for Distributed Systems \| CNCF Graduated Projects | explainer | en | 93 | transcript | yes |
| `devops/docker-basics` | `R2nV-8-lXBU` | KodeKloud | Why Developers Use Docker Containers (The Real Reason) | explainer | en | 179 | transcript | yes |
| `devops/docker-basics` | `zo-vT_fuzvg` | KodeKloud | Docker vs Kubernetes – What's the Difference and Why It Matters | compare | en | 164 | transcript | yes |
| `devops/docker-basics` | `3KWoCnWKrjI` | KodeKloud | What are containers? | explainer | en | 60 | transcript | yes |
| `devops/docker-basics` | `sR3BvvsdNWQ` | KodeKloud | Copying a File to Docker Container \| Docker series | explainer | en | 47 | transcript | yes |
| `devops/docker-basics` | `SrzjrHlBGAQ` | KodeKloud | Deleting a Container in Docker \| Docker series | explainer | en | 49 | transcript | yes |
| `devops/docker-basics` | `QMeAxAnvGJY` | KodeKloud | Troubleshooting a Docker Container \| Docker Tutorial \| Docker Series | explainer | en | 60 | transcript | yes |
| `devops/docker-basics` | `oDYjxqD7c9k` | KodeKloud | Pulling Docker Images \| Docker Tutorial \| Docker Series | explainer | en | 60 | transcript | yes |
| `devops/docker-basics` | `H3qyLPNh434` | KodeKloud | Updating Docker Permissions \| Docker Tutorial \| Docker Series | explainer | en | 49 | transcript | yes |
| `devops/docker-basics` | `feOe12tiROo` | KodeKloud | Performing EXEC Operations in Docker \| Docker Tutorial \| Docker Series | explainer | en | 58 | transcript | yes |
| `devops/docker-basics` | `8XYRYUNbn_0` | KodeKloud | Creating a Docker Network \| Docker Tutorial \| Docker Series | explainer | en | 57 | transcript | yes |
| `devops/docker-basics` | `Vh8ckUJj2iY` | KodeKloud | Mapping Docker Volumes \| Docker Tutorial \| Docker Series | explainer | en | 59 | transcript | yes |
| `devops/docker-basics` | `Q0uJpqvx1j0` | KodeKloud | Mapping Ports in Docker \| Docker Tutorial \| Docker Series | explainer | en | 60 | transcript | yes |
| `devops/docker-basics` | `SnHPSBZrNtk` | KodeKloud | Saving, Loading & Transferring Docker Images \| Docker Tutorial \| Docker Series | explainer | en | 124 | transcript | yes |
| `devops/docker-basics` | `Gbif1yPguGE` | KodeKloud | Deploy Nginx Container on App Server \| Docker Series \| KodeKloud Engineer | explainer | en | 58 | transcript | yes |
| `devops/docker-images-compose` | `IiUY9kqAyRg` | KodeKloud | How to Use a .dockerignore File Properly | explainer | en | 143 | transcript | yes |
| `devops/docker-images-compose` | `QR69xSxxoKU` | KodeKloud | Docker Init Explained in 60 Seconds! | explainer | en | 47 | transcript | yes |
| `devops/docker-images-compose` | `HIDx7RXtWHU` | KodeKloud | 5 Essential Tweaks to Supercharge Your Dockerfiles for Performance | explainer | en | 90 | transcript | yes |
| `devops/docker-images-compose` | `i2Xhd6_8eb0` | KodeKloud | What is Docker Compose Watch? | explainer | en | 45 | transcript | yes |
| `devops/docker-images-compose` | `P7xPTP93xfk` | KodeKloud | What is Docker Bake? | explainer | en | 62 | transcript | yes |
| `devops/docker-images-compose` | `ys7Iw7Dltus` | KodeKloud | Docker Bake vs Compose: Which Tool Should YOU Use? | compare | en | 49 | transcript | yes |
| `devops/docker-images-compose` | `H4jJadZ3lNw` | KodeKloud | Creating a Docker Image from a Container \| Docker Tutorial \| Docker Series | explainer | en | 60 | transcript | yes |
| `devops/docker-images-compose` | `_xwhUsDPmQs` | KodeKloud | Writing a Docker File \| Docker Tutorial \| Docker Series | explainer | en | 57 | transcript | yes |
| `devops/docker-images-compose` | `cI1QYoLJhgI` | KodeKloud | Writing a Docker Compose File \| Docker Tutorial \| Docker Series | explainer | en | 105 | transcript | yes |
| `devops/docker-images-compose` | `ncKNoM3PKKg` | KodeKloud | Resolving Docker Compose Issues \| Docker Tutorial \| Docker Series | explainer | en | 109 | transcript | yes |
| `devops/docker-images-compose` | `qHxfrfgUd_s` | KodeKloud | Resolving Dockerfile Issues \| Docker Tutorial \| Docker Series | explainer | en | 110 | transcript | yes |
| `devops/docker-images-compose` | `WMt5S7iKSI4` | KodeKloud | Deploying an App on Docker Containers \| Docker Tutorial \| Docker Series | explainer | en | 175 | transcript | yes |
| `devops/docker-images-compose` | `P6zS59e1Sz4` | KodeKloud | Launching a Dockerized Node App \| Docker Tutorial \| Docker Series | explainer | en | 178 | transcript | yes |
| `devops/docker-images-compose` | `DLcgYr8BDFk` | KodeKloud | Launching a Docker Python App \| Docker Tutorial \| Docker Series | explainer | en | 175 | transcript | yes |
| `devops/docker-in-practice` | `OM3LfuQRL3s` | KodeKloud | Docker vs Podman, Explained | compare | en | 179 | transcript | yes |
| `devops/docker-in-practice` | `8qx9LWQLGoE` | KodeKloud | Container Interview Question | interview | en | 179 | transcript | yes |
| `devops/docker-in-practice` | `f-MpyJ-aPsY` | KodeKloud | Docker Interview: Rapid Fire Round (Can You Keep Up?) | interview | en | 175 | transcript | yes |
| `devops/docker-in-practice` | `WgbymXi7mK4` | KodeKloud | Docker Storage: Bind Mounts vs. Named Volumes! | compare | en | 167 | transcript | yes |
| `devops/docker-in-practice` | `sRtEC4KeaoY` | KodeKloud | Docker to Podman Migration! | explainer | en | 170 | transcript | yes |
| `devops/docker-in-practice` | `c5aB_QOnwN8` | KodeKloud | Docker Exit Code 137 Explained in 2 Minutes (Interview Question) | interview | en | 160 | transcript | yes |
| `devops/docker-in-practice` | `6dzjd6wk1EE` | KodeKloud | Interview: Why Docker Still Uses Disk After You Delete Containers? | interview | en | 164 | transcript | yes |
| `devops/docker-in-practice` | `w3gX6n-Lfdk` | KodeKloud | Docker Image Too Big? Here's What Senior DevOps Engineers Say | interview | en | 140 | transcript | yes |
| `devops/git-basics` | `QBnVMaG3yCU` | KodeKloud | Clone Git Repo on Storage Server \| Git Tutorial \| Git Series | explainer | en | 58 | transcript | yes |
| `devops/git-basics` | `geAVf8mSF0w` | KodeKloud | Forking a Git Repository \| Git Tutorial \| Git Series | explainer | en | 53 | transcript | yes |
| `devops/git-basics` | `b4hTf-PPO1k` | KodeKloud | Updating Git Repo with Sample File \| Git Tutorial \| Git Series | explainer | en | 60 | transcript | yes |
| `devops/git-basics` | `64W6nU77abk` | KodeKloud | Deleting a Branch in Git \| KodeKloud Engineer \| Git series | explainer | en | 56 | transcript | yes |
| `devops/git-basics` | `Qp4X9g9ashQ` | KodeKloud | Git Install and Create a Repository \| Git Tutorial \| Git Series | explainer | en | 92 | transcript | yes |
| `devops/git-basics` | `vJk8VxAx9J4` | KodeKloud | Creating Branches in Git \| Git Tutorial \| Git Series | explainer | en | 83 | transcript | yes |
| `devops/git-basics` | `vYuk10463dM` | KodeKloud | Merging Git Branches \| Git Tutorial \| Git Series | explainer | en | 152 | transcript | yes |
| `devops/git-basics` | `4-jMeoefKws` | KodeKloud | Managing Remote Repositories in Git \| Git Tutorial \| Git Series | explainer | en | 137 | transcript | yes |
| `devops/git-basics` | `LqI9rPYN0Xc` | KodeKloud | Reverting Changes in Git \| Git Tutorial \| Git Series | explainer | en | 90 | transcript | yes |
| `devops/git-basics` | `4Chk5yGX-2w` | KodeKloud | Managing Git Pull Requests \| Git Tutorial \| Git Series | explainer | en | 138 | transcript | yes |
| `devops/git-basics` | `PwV0bbPt9j8` | KodeKloud | Performing Hard Reset in Git \| Git Tutorial \| Git Series | explainer | en | 114 | transcript | yes |
| `devops/git-basics` | `vW0I-CGc-Hw` | KodeKloud | Managing Git Repositories \| Git Tutorial \| Git Series | explainer | en | 173 | transcript | yes |
| `devops/git-basics` | `SWx0YfIjjx8` | KodeKloud | Git Setup from Scratch \| Git Tutorial \| Git Series | explainer | en | 179 | transcript | yes |
| `devops/git-workflows` | `XatinqzWCvo` | KodeKloud | Find the Exact Commit That Broke Production | explainer | en | 179 | transcript | yes |
| `devops/git-workflows` | `efVKPUr9D1A` | KodeKloud | Learn Git Worktrees in Under 3 Minutes | explainer | en | 168 | transcript | yes |
| `devops/git-workflows` | `oC-sqhHvD3E` | KodeKloud | Cherry Picking in Git \| Git Tutorial \| Git Series | explainer | en | 112 | transcript | yes |
| `devops/git-workflows` | `aPW-EmupkKE` | KodeKloud | Performing Git Clean \| Git Tutorial \| Git Series | explainer | en | 66 | transcript | yes |
| `devops/git-workflows` | `vt7zu2e6PDE` | KodeKloud | Git Stash in Action \| Git Tutorial \| Git Series | explainer | en | 97 | transcript | yes |
| `devops/git-workflows` | `XuDHf1lKF7k` | KodeKloud | How to Use Git Rebase \| Git Tutorial \| Git Series | explainer | en | 104 | transcript | yes |
| `devops/git-workflows` | `aiRau5Esw5Y` | KodeKloud | Resolving Merge Conflicts in Git \| Git Tutorial \| Git Series | explainer | en | 154 | transcript | yes |
| `devops/git-workflows` | `MFMQ6Jk5LoE` | KodeKloud | Writing a Git Hook \| Git Tutorial \| Git Series | explainer | en | 178 | transcript | yes |
| `devops/gitops` | `cE6NjiSycT0` | KodeKloud | 6 GitOps Advantages Every Engineer Should Know | explainer | en | 172 | transcript | yes |
| `devops/gitops` | `xGOhnRu9X3k` | KodeKloud | Interview: Why You Need GitOps? | interview | en | 145 | transcript | yes |
| `devops/kubernetes-architecture` | `NXrrVb_tMaQ` | KodeKloud | What Is the Pause Container in Kubernetes? | explainer | en | 126 | transcript | yes |
| `devops/kubernetes-architecture` | `OdPriWKCH6I` | KodeKloud | Kubernetes Interview: Rapid Fire Questions | interview | en | 179 | transcript | yes |
| `devops/kubernetes-architecture` | `4yp7p7f9FbQ` | KodeKloud | Kubernetes if API Server Goes Down! | explainer | en | 170 | transcript | yes |
| `devops/kubernetes-architecture` | `lbPD0l2qEG0` | KodeKloud | Managed K8s or Self Managed? | explainer | en | 59 | transcript | yes |
| `devops/kubernetes-architecture` | `_YvCg5E7xc8` | KodeKloud | Role of ETCD in Kubernetes | explainer | en | 90 | transcript | yes |
| `devops/kubernetes-architecture` | `rsn_FCf3gm4` | KodeKloud | Why Control Planes Are Odd Numbers? | explainer | en | 125 | transcript | yes |
| `devops/kubernetes-basics` | `f44s063zOrQ` | KodeKloud | Kubernetes Explained Without the Jargon! | explainer | en | 78 | transcript | yes |
| `devops/kubernetes-basics` | `g1lGLFBTt4E` | KodeKloud | Kubernetes vs Docker Swarm | compare | en | 153 | transcript | yes |
| `devops/kubernetes-basics` | `B4KmkaGBc6Q` | KodeKloud | Kubernetes YAML File Structure Explained | explainer | en | 164 | transcript | yes |
| `devops/kubernetes-basics` | `PUFGdNyvTMI` | KodeKloud | What is a ReplicaSet in Kubernetes? (High Availability Explained) | explainer | en | 85 | transcript | yes |
| `devops/kubernetes-basics` | `2dfPRLCKVBE` | KodeKloud | What is a Pod in Kubernetes? (K8s Basics Explained) | explainer | en | 149 | transcript | yes |
| `devops/kubernetes-basics` | `jTDw8sh5zPE` | KodeKloud | How Minikube Sets Up a Kubernetes Cluster in Minutes | explainer | en | 67 | transcript | yes |
| `devops/kubernetes-basics` | `LBGPjoGgdqE` | KodeKloud | Kubernetes: The Heart of Cloud-Native Technologies \| CNCF Project | explainer | en | 86 | transcript | yes |
| `devops/kubernetes-basics` | `9ROsam-pdYs` | KodeKloud | Why You Should Use Kubernetes Deployments Instead of Just Pods | explainer | en | 84 | transcript | yes |
| `devops/kubernetes-basics` | `9_gwHtqNIxo` | KodeKloud | Setting up Namespaces and Pods in Kubernetes \| Kubernetes Tutorial \| Kubernetes Series | explainer | en | 59 | transcript | yes |
| `devops/kubernetes-basics` | `0ASchdcKMfI` | KodeKloud | Deploy Applications in Kubernetes \| Kubernetes Tutorial \| Kubernetes Series | explainer | en | 56 | transcript | yes |
| `devops/kubernetes-basics` | `GcWK5uuspwk` | KodeKloud | Deploy Pods in Kubernetes Cluster \| Kubernetes Tutorial \| Kubernetes Series | explainer | en | 58 | transcript | yes |
| `devops/kubernetes-networking-storage` | `Fgpf3-gv7Tk` | KodeKloud | How Kubernetes Services Connect Microservices (ClusterIP & NodePort Explained) | explainer | en | 176 | transcript | yes |
| `devops/kubernetes-networking-storage` | `YZ3_SNwwRrI` | KodeKloud | Kubernetes Storage in 2 Minutes | explainer | en | 122 | transcript | yes |
| `devops/kubernetes-networking-storage` | `2jvntJGoU3M` | KodeKloud | How Kubernetes Services Work Across Multiple Nodes | explainer | en | 70 | transcript | yes |
| `devops/kubernetes-networking-storage` | `Fuq-Uo82iSc` | KodeKloud | What Are Kubernetes Services and Why Do You Need Them? | explainer | en | 116 | transcript | yes |
| `devops/kubernetes-operations` | `jfRxw5-Gdq8` | KodeKloud | How To Upgrade Kubernetes Without Downtime | interview | en | 153 | transcript | yes |
| `devops/kubernetes-operations` | `clXXHir2BsQ` | KodeKloud | Kubernetes Interview Question | interview | en | 150 | transcript | yes |
| `devops/kubernetes-operations` | `nv2fi2hlAko` | KodeKloud | Kubernetes Tricky Interview Question! | interview | en | 110 | transcript | yes |
| `devops/kubernetes-operations` | `4k_Zsf-b90Y` | KodeKloud | What is a Kubernetes Deployment? (Rolling Updates & Rollbacks Explained) | explainer | en | 101 | transcript | yes |
| `devops/kubernetes-operations` | `tn0LcIQv1rA` | KodeKloud | Three Kubectl Commands to Save Time! | explainer | en | 127 | transcript | yes |
| `devops/kubernetes-operations` | `DIRw560rnrQ` | KodeKloud | Setting Resource Limits for Pods in Kubernetes \| Kubernetes Tutorial \| Kubernetes Series | explainer | en | 123 | transcript | yes |
| `devops/kubernetes-operations` | `_jk5qzZ7LhU` | KodeKloud | Executing Rolling updates in Kubernetes \| Kubernetes Tutorial \| Kubernetes Series | explainer | en | 70 | transcript | yes |
| `devops/kubernetes-security-troubleshooting` | `JBstJnxbozc` | KodeKloud | Stop Storing Kubernetes Secrets Like This! | explainer | en | 176 | transcript | yes |
| `devops/kubernetes-security-troubleshooting` | `zDl_SBY6M60` | KodeKloud | Interview: Recovering Stuck Pods in Kubernetes! | interview | en | 168 | transcript | yes |
| `devops/kubernetes-security-troubleshooting` | `J-zSd2lsMaI` | KodeKloud | Pod DNS Not Working - Part 1 | interview | en | 149 | transcript | yes |
| `devops/kubernetes-security-troubleshooting` | `d40zxMvilJI` | KodeKloud | Kubernetes Pod Security Interview Question | interview | en | 178 | transcript | yes |
| `devops/kubernetes-security-troubleshooting` | `Tieokbq9jWg` | KodeKloud | Pod DNS Not Working - Part 3 | explainer | en | 125 | transcript | yes |
| `devops/kubernetes-security-troubleshooting` | `1_UbrZlS3hw` | KodeKloud | Pod DNS Not Working - Part 4 | explainer | en | 114 | transcript | yes |
| `devops/kubernetes-security-troubleshooting` | `ozRJhwiyYCI` | KodeKloud | Pod DNS Not Working - Part 2 | explainer | en | 138 | transcript | yes |
| `devops/monitoring-observability` | `KBs0MerAnoE` | KodeKloud | How OpenAI Saved 30,000 CPU Cores! | real-system | en | 178 | transcript | yes |
| `devops/monitoring-observability` | `Vj16zyTYBjc` | KodeKloud | Design Centralized Logging System | explainer | en | 106 | transcript | yes |
| `devops/monitoring-observability` | `QMPCogrLTeA` | KodeKloud | System Design: Metric Collection Pipeline for Microservices | explainer | en | 145 | transcript | yes |
| `devops/monitoring-observability` | `h2b1N55CNeI` | KodeKloud | eBPF Explained in 3 minutes | explainer | en | 178 | transcript | yes |
| `devops/monitoring-observability` | `UmJ1vFfGUWg` | KodeKloud | What is Grafana Loki? | explainer | en | 52 | transcript | yes |
| `devops/monitoring-observability` | `yKxNfqiZFYs` | KodeKloud | What Is Amazon CloudWatch? | explainer | en | 86 | transcript | yes |
| `devops/monitoring-observability` | `zMqo4NXDr3g` | KodeKloud | Reliability and Resilience: The Dynamic Duo of SRE | explainer | en | 119 | transcript | yes |
| `devops/terraform-iac` | `TH9O9Yno0L4` | KodeKloud | Terraform Interview: Rapid Fire Questions | interview | en | 180 | transcript | yes |
| `devops/terraform-iac` | `jKipg6vA3mE` | KodeKloud | Crossplane vs Terraform: What's the Real Difference? | compare | en | 95 | transcript | yes |
| `devops/terraform-iac` | `Witd-zie1Xw` | KodeKloud | Terraform and Crossplane in Production! | explainer | en | 169 | transcript | yes |
| `devops/terraform-iac` | `TrPRERF_3n0` | KodeKloud | What is HashiCorp Packer? \| KodeKloud | explainer | en | 48 | transcript | yes |
| `devops/terraform-iac` | `-yPX2-68xpM` | KodeKloud | The Hidden Dangers of Terraform in Production | explainer | en | 63 | transcript | yes |
| `devops/what-is-devops` | `_pqdHM3sl5w` | KodeKloud | Platform Engineering vs DevOps Explained | compare | en | 107 | transcript | yes |
| `devops/what-is-devops` | `EwZcKZ_k6d0` | KodeKloud | What is MLOps? | explainer | en | 155 | transcript | yes |
| `devops/what-is-devops` | `uKQQzrq9Cqw` | KodeKloud | What is AIOps and how does it differ from DevOps and MLOps? | explainer | en | 164 | transcript | yes |
| `devops/what-is-devops` | `aZB4iqTWF3M` | KodeKloud | What is AIOps? | explainer | en | 168 | transcript | yes |
| `devops/what-is-devops` | `l5sbRf4Jr-I` | KodeKloud | What is DevOps? | explainer | en | 45 | transcript | yes |
| `devops/what-is-devops` | `QoR1tsc26Fk` | KodeKloud | 4 DevOps Metrics You MUST Track for Success | explainer | en | 76 | transcript | yes |
<!-- kodekloud-additions:end -->

Reels: 813.
