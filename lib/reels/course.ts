/**
 * The reels of the Course topics, by topic slug. A Course topic shows reels only if it is a key here: a topic with no
 * clip that fits what it teaches has no entry and no block (`tests/reels.test.ts` checks the keys, 2 to 4 reels on a
 * topic, and the listed thin pages).
 * Add a reel: put its entry in the list of its topic, then run `npm test` and `node scripts/check-reels.ts`.
 */
import type { Reel } from "./reels.ts";

export const COURSE_REELS: Readonly<Record<string, readonly Reel[]>> = {
  "cap-theorem": [
    { id: "HTaKhMv_ZYU", title: "What is CAP Theorem in System Design?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 179 },
    { id: "Bf5GhT8jZPc", title: "Why Perfect Networking is Impossible!", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 155 },
  ],
  "database": [
    { id: "8tcHlirj3rM", title: "SQLite: The Database on Every Phone!", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 157 },
    { id: "-C_EKxhwYew", title: "Postgres Hit the Connection Limit. Now What?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 176 },
  ],
  "disaster-recovery": [
    { id: "51q3QjCNQDw", title: "Database: Replication vs Backup!", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 89 },
    { id: "UF96IHadCiw", title: "Backup vs Disaster Recovery: Why You Need Both for Data Protection | SRE Concepts", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 118 },
  ],
  "dns": [
    { id: "wEjgtknhLUQ", title: "Interview: How DNS Finds a Website’s IP Address", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 179 },
    { id: "Kx9HqKThjL8", title: "How DNS Works?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 48 },
  ],
  "event-driven-architecture": [
    { id: "xc4nXaKQp7s", title: "System Design: Background Job-Processing Workers!", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 179 },
    { id: "vdx4-z5CoBk", title: "Design Webhooks Processing System", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 171 },
  ],
  "indexes": [
    { id: "b3bBGEzi4lg", title: "Interview: How Database Indexing Works", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 177 },
    { id: "_2WPVe4dw_8", title: "Interview: B-Tree vs B+ Tree", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 159 },
  ],
  "ip": [
    { id: "RsJWze1YP8U", title: "How Do Routers Know Where to Send Your Packet?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 178 },
  ],
  "long-polling-ws-sse": [
    { id: "zY5dQmF8gEE", title: "What is Webhook?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 104 },
  ],
  "osi": [
    { id: "xuan1dN9bKw", title: "The OSI Model: 7 Layers Explained with HTTP Request", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 154 },
    { id: "E2srSCtz3bU", title: "How the Internet Really Sends Your Data! (TCP/IP Explained Simply)", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 59 },
  ],
  "pub-sub": [
    { id: "uZDNJq18YL0", title: "System Design: Notifying 50 Million Users in One Shot", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 161 },
  ],
  "rest-graphql-grpc": [
    { id: "29B4wFRJyAo", title: "gRPC vs HTTP Explained in 3 minutes", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 180 },
  ],
  "sharding": [
    { id: "IwnefaLZhGs", title: "The Celebrity Problem in Database Sharding", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 162 },
    { id: "1_xLXicErn0", title: "When to Shard Database vs Replicate? Database Scaling Explained.", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 113 },
  ],
  "sla-slo-sli": [
    { id: "bORGo7-mLlQ", title: "SLA vs SLO vs SLI: What’s the Difference?", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 114 },
  ],
  "sql": [
    { id: "zKa4FXts6Go", title: "Tricky Database Interview Question", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 172 },
    { id: "6PtHyHI6RoA", title: "Postgres Interview Question!", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 117 },
  ],
  "sql-vs-nosql": [
    { id: "juMinZqHAPQ", title: "System Design: What is Polyglot Persistence?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 128 },
  ],
  "ssl-tls-mtls": [
    { id: "lVWXZb_4tU8", title: "Interview: How TCP, TLS and HTTP Actually Work Together", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 158 },
    { id: "VT-RK8xbrso", title: "System Design: Securing Internal Microservices!", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 179 },
  ],
  "tcp-udp": [
    { id: "oYf6qaBpFsw", title: "TCP or UDP? Every Developer Must Know This", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 99 },
    { id: "mh8geod4VRI", title: "TCP vs UDP Explained with WhatsApp", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 180 },
  ],
  "vm-containers": [
    { id: "biDEGt6XWc4", title: "Containers vs Virtual Machines Explained", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 69 },
    { id: "oz4WufCnYbs", title: "What is Hypervisor?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 62 },
  ],
};
