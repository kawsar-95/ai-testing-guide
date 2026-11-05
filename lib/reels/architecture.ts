/**
 * The reels of the Architecture module, by page slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its page, then run `npm test` and `node scripts/check-reels.ts`.
 */
import type { ArchitectureSlug } from "../architecture/topics.ts";
import type { Reel } from "./reels.ts";

export const ARCHITECTURE_REELS: Readonly<Record<Exclude<ArchitectureSlug, "practice">, readonly Reel[]>> = {
  "why-system-design": [
    { id: "QppcKeWmSl0", title: "System Design for Beginners", channel: "AWS Developers", kind: "explainer", lang: "en", seconds: 113 },
    { id: "a05BRXxtOoM", title: "What Is System Design? An App Goes Viral!", channel: "ByteVerseToon", kind: "explainer", lang: "en", seconds: 26 },
    { id: "OcMMpdJcsBE", title: "What is System Design? (Bangla) | কেন সবার এটি জানা উচিত? | System Design Unplugged Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 59 },
  ],
  "requirements": [
    { id: "7kJAJREtAlo", title: "Latency vs Throughput. Know the difference?", channel: "ByteByteGo", kind: "compare", lang: "en", seconds: 55 },
    { id: "uDlBY_bmRmc", title: "What are Non-Functional Requirements (NFRs) – How the System Should Perform? | SRS", channel: "LearnEveryone", kind: "explainer", lang: "en", seconds: 47 },
    { id: "cD_p-9yRKsg", title: "PUBG-তে আগে গুলি করেও তুমি হেরে যাচ্ছ কেন? | Latency", channel: "Rabbil Hasan", kind: "explainer", lang: "bn", seconds: 45 },
    { id: "rR68FLCHdIw", title: "FAANG HLD | Functional vs Non-Functional Requirements Explained!", channel: "Tejav Academy", kind: "compare", lang: "en", seconds: 60 },
  ],
  "single-server": [
    { id: "k7vvdBsKDx8", title: "What is Single Point Of Failure?", channel: "Alada School", kind: "explainer", lang: "bn", seconds: 52 },
    { id: "V65ggmmLxmw", title: "HLD — SPOF 3 Healthy Servers… So Why Is Your Entire App DOWN?", channel: "Tejav Academy", kind: "explainer", lang: "en", seconds: 60 },
    { id: "-26ucu4gN8Y", title: "server কিভাবে কাজ করে?", channel: "ScienceVenture", kind: "explainer", lang: "bn", seconds: 33 },
    { id: "ekWtLUg7GpE", title: "Client-Server vs Peer-to-Peer Networks", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 49 },
  ],
  "vertical-scaling": [
    { id: "jm5y8pmI00o", title: "Vertical & Horizontal Scaling", channel: "NeetCodeIO", kind: "explainer", lang: "en", seconds: 51 },
    { id: "8USEvyuXOQY", title: "Vertical Scaling এবং Horizontal Scaling কি? সহজ বাংলায় সিস্টেম ডিজাইন", channel: "Alada School", kind: "explainer", lang: "bn", seconds: 48 },
    { id: "Og3uCL17t00", title: "Scale Up vs Scale Out Explained (System Design Revision)", channel: "MicroDoseDev", kind: "compare", lang: "en", seconds: 57 },
  ],
  "horizontal-scaling": [
    { id: "qCH9OfYZObI", title: "Horizontal vs Vertical Scaling", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 135 },
    { id: "WvqQe-SZwQw", title: "বড় server কিনলেই কি সমস্যা শেষ? Vertical vs Horizontal Scaling | Scaling", channel: "Rabbil Hasan", kind: "compare", lang: "bn", seconds: 51 },
    { id: "IJ08PhlhFFs", title: "Horizontal vs Vertical Scaling Explained in 60 Seconds |System Design Interview", channel: "Learn lo0ud", kind: "compare", lang: "en", seconds: 47 },
    { id: "NjlMLy2OBIQ", title: "One server can’t handle millions of users. So what do big apps do?", channel: "Programming Hero", kind: "explainer", lang: "en", seconds: 38 },
  ],
  "load-balancer": [
    { id: "dBE7flDPctM", title: "How does load balancer work?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 174 },
    { id: "BpGljU1miLI", title: "System Design: Designing Load Balancer", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 171 },
    { id: "gOn2qZs5oZo", title: "Load Balancers & CDNs", channel: "NeetCodeIO", kind: "explainer", lang: "en", seconds: 60 },
    { id: "kTvkQ5VMZ_c", title: "What is a Load Balancer? (Bangla) | সিস্টেমের ট্রাফিক পুলিশ! | System Design Unplugged Ep 02 Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 61 },
  ],
  "stateless-service": [
    { id: "4GwXyVIbKfY", title: "Stateful vs. Stateless Architecture!", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 180 },
    { id: "OAx7Z99pFyQ", title: "Stateless vs Stateful Protocols (HTTP vs TCP)", channel: "Hussein Nasser", kind: "compare", lang: "en", seconds: 61 },
    { id: "ho9nKj3lFkU", title: "How to tell if a Backend Application is stateless?", channel: "Hussein Nasser", kind: "explainer", lang: "en", seconds: 59 },
    { id: "k7QDYbdPFzU", title: "FAANG HLD | Why Stateless Servers Make Scaling EASY!", channel: "Tejav Academy", kind: "animation", lang: "en", seconds: 60 },
  ],
  "object-storage": [
    { id: "PTtYs2yeuwc", title: "AWS Amazon S3 Files Explained", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 87 },
    { id: "ro0-3O-x9TE", title: "Public S3 Bucket!", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 141 },
    { id: "lqyDQ3p2zOA", title: "AWS S3 Explained (Interview Concept) | Buckets, Objects, Glacier & Versioning | AWS S3", channel: "DevOps_infinity", kind: "animation", lang: "en", seconds: 31 },
    { id: "THhk0EpaDSk", title: "Stop treating your server like a storage room - S3 buckets simplified", channel: "Rahim Tech Tips", kind: "explainer", lang: "en", seconds: 42 },
  ],
  "cdn": [
    { id: "KWZEO1jW-0k", title: "Fast Server, Slow Pictures? What a CDN Does", channel: "ByteVerseToon", kind: "explainer", lang: "en", seconds: 33 },
    { id: "RcxK91GkcaQ", title: "Speed Up Your Website: CDN Explained in 60 Seconds!", channel: "The Code Architect", kind: "explainer", lang: "en", seconds: 51 },
    { id: "2Pc_46DBKHE", title: "ভিডিও ভাইরাল হলে লাখো মানুষ একসাথে দেখে কীভাবে? | CDN", channel: "Rabbil Hasan", kind: "explainer", lang: "bn", seconds: 44 },
    { id: "zdhkO5RkVzA", title: "Netflix CDN in 40 seconds.", channel: "Vellumy", kind: "real-system", lang: "en", seconds: 43 },
  ],
  "cloud-architecture": [
    { id: "p_ckFfh7rwk", title: "How Hotstar Handles 1 Crore Users? | Pre-Warming vs Auto Scaling", channel: "Range Full Stack", kind: "interview", lang: "en", seconds: 38 },
    { id: "yJ3U4TJqya0", title: "Cloud Run vs.Compute Engine: When should you run a container on serverless vs. managing a full VM?", channel: "Google Cloud Tech", kind: "compare", lang: "en", seconds: 76 },
    { id: "Y93P5HSykiE", title: "AWS Regions & Availability Zones Explained in 30 Seconds | AWS Part 2", channel: "BrainByte with Ami", kind: "explainer", lang: "en", seconds: 21 },
    { id: "OWa9yuqQzAo", title: "AWS Multi-Region Failover: Why It Failed in Real Life", channel: "Avvaiverse", kind: "explainer", lang: "en", seconds: 24 },
  ],
  "database-replication": [
    { id: "2VOU9iWo1j8", title: "Handling Primary Database Failovers Safely!", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 146 },
    { id: "scRrxeRqU0Y", title: "What Is Multi-Leader Replication in Databases?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 118 },
    { id: "I4uxWFDJ-so", title: "Why need Read Replication for Scale Database?", channel: "Alada School", kind: "explainer", lang: "bn", seconds: 31 },
    { id: "phjvIV0ma-Y", title: "Replication lags", channel: "Alada School", kind: "explainer", lang: "bn", seconds: 52 },
  ],
  "caching": [
    { id: "x8lcdDbKZto", title: "Why is Redis so FAST", channel: "ByteByteGo", kind: "explainer", lang: "en", seconds: 48 },
    { id: "hMOai9Wnlr8", title: "How Cache-Aside Works with Redis", channel: "Amigoscode", kind: "explainer", lang: "en", seconds: 21 },
    { id: "CTCwLY-OqeA", title: "System Design: Building Caching System!", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 148 },
    { id: "41YM-75KYL4", title: "Top Redis Use Cases", channel: "ByteByteGo", kind: "explainer", lang: "en", seconds: 50 },
  ],
  "distributed-cache": [
    { id: "AIuZExZFHNU", title: "Consistent Hashing Explained (System Design Basics)", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 166 },
    { id: "wO_3_s0K1_I", title: "Redis vs Memcached: Which Cache Should You Choose?", channel: "SystemDesignIn30seconds", kind: "compare", lang: "en", seconds: 22 },
    { id: "NUlbMVRNNbQ", title: "Scale Your Apps! Design a Distributed Cache (Redis/Memcached)", channel: "The Code Architect", kind: "explainer", lang: "en", seconds: 58 },
    { id: "jmNUNLFrCqw", title: "Design a Distributed Cache System", channel: "Solutions Architect Insights", kind: "explainer", lang: "en", seconds: 30 },
  ],
  "rate-limiting": [
    { id: "_92bbCcp_7k", title: "System Design: How to Build an API Rate Limiter", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 168 },
    { id: "5c8uORUlZEc", title: "Rate Limiting কীভাবে কাজ করে? 429, Token Bucket, Redis", channel: "Learn with Sumit - LWS - Bangladesh", kind: "explainer", lang: "bn", seconds: 69 },
    { id: "2QZO7_CrjWo", title: "কেউ তোমার নম্বরে ১০০টা OTP পাঠালে server কেন থামায় না? Rate Limiting", channel: "Rabbil Hasan", kind: "explainer", lang: "bn", seconds: 46 },
    { id: "9GKSmrn8nTg", title: "Token Bucket Algorithm Explained Simply!", channel: "ScaleDojo", kind: "explainer", lang: "en", seconds: 44 },
  ],
  "message-queue": [
    { id: "zwerYz8U7_M", title: "Backend Message Queues Explained In 60 Seconds", channel: "Hussein Nasser", kind: "explainer", lang: "en", seconds: 55 },
    { id: "GddXpLm7ta0", title: "Synchronous vs Asynchronous Requests Explained (System Design Basics)", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 180 },
    { id: "53bqCrub9hg", title: "This Message Keeps Failing. Dead Letter Queue Explained", channel: "ScaleCraft", kind: "explainer", lang: "en", seconds: 18 },
    { id: "m6IHV5qHBOc", title: "Message Queues কি? সিস্টেমের ট্রাফিক জ্যাম কমানোর ম্যাজিক! | System Design Unplugged Ep 09 Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 59 },
  ],
  "idempotency": [
    { id: "GdheM2uRZrA", title: "Prevent Duplicate Payments with Idempotency", channel: "Nikhil Tiwari", kind: "explainer", lang: "en", seconds: 32 },
    { id: "_xIWCW-n0L8", title: "Pay button দুবার চাপলে কি টাকা দুবার কাটতে পারে? | Idempotency", channel: "Rabbil Hasan", kind: "explainer", lang: "bn", seconds: 46 },
    { id: "17IOh0y-eeU", title: "Why a queue can deliver the same message twice", channel: "Three Minute Architect", kind: "explainer", lang: "en", seconds: 60 },
    { id: "NHFAWD3OkAU", title: "Are You Misconfiguring Producer Retries? | Kafka Developer Mistakes", channel: "Confluent, an IBM Company", kind: "mistake", lang: "en", seconds: 56 },
  ],
  "api-gateway": [
    { id: "B08hVQfqO9Y", title: "Why Do We Need an API Gateway? | System Design Explained in 10 Seconds", channel: "techtalkswithravi", kind: "explainer", lang: "en", seconds: 11 },
    { id: "Yfa2bfXNrPI", title: "API Gateway কি? আপনার সিস্টেমের স্মার্ট সিকিউরিটি গার্ড | System Design Unplugged Ep 07 Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 56 },
    { id: "QToMS34DSFo", title: "API Gateway Explained | The Gatekeeper of Microservices", channel: "Bhaiyacodes", kind: "explainer", lang: "en", seconds: 55 },
    { id: "U3KcAqjthmc", title: "What is BFF (Backend for Frontend)? | Simplified in 1 Minute!", channel: "Learn Automation Testing from scratch", kind: "explainer", lang: "en", seconds: 60 },
  ],
  "monolith-microservices": [
    { id: "DaIupVIj25I", title: "Microservices Trap Nobody Mentions", channel: "KodeKloud", kind: "mistake", lang: "en", seconds: 75 },
    { id: "n8aTZ0o8pdw", title: "Monolithic or Microservices Architecture", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 51 },
    { id: "xk5jt61f_24", title: "Microservice Design Patterns : SAGA Design Pattern in less than 60 seconds", channel: "Software Engineering Insights", kind: "explainer", lang: "en", seconds: 42 },
    { id: "66Afv_QHlRY", title: "HLD — When to Use Microservices? The Interview Trap!", channel: "Tejav Academy", kind: "interview", lang: "en", seconds: 60 },
  ],
  "observability": [
    { id: "nzg8KxL5ftI", title: "How Distributed Tracing Works Across Microservices in Kubernetes", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 157 },
    { id: "pR0vcoh-bbY", title: "System Design: Logs Collection Pipeline for Microservices", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 134 },
    { id: "wCnjwvS2fqw", title: "Production Monitoring Explained", channel: "Nikhil Tiwari", kind: "explainer", lang: "en", seconds: 27 },
    { id: "TXDOb2DVR7A", title: "HLD — Logs vs Metrics vs Traces Debug Production Like a Pro!", channel: "Tejav Academy", kind: "compare", lang: "en", seconds: 60 },
  ],
};
