/**
 * The reels of the System Design module, by case slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its case, then run `npm test` and `node scripts/check-reels.ts`.
 */
import type { SystemDesignSlug } from "../system-design/cases.ts";
import type { Reel } from "./reels.ts";

export const SYSTEM_DESIGN_REELS: Readonly<Record<SystemDesignSlug, readonly Reel[]>> = {
  "kafka": [
    { id: "Bc6oyURRIxQ", title: "Kafka Basics", channel: "ByteByteGo", kind: "explainer", lang: "en", seconds: 58 },
    { id: "wvLdBJEl-wc", title: "Why is Kafka FAST? Part 1", channel: "ByteByteGo", kind: "explainer", lang: "en", seconds: 125 },
    { id: "fe57ccAkZtY", title: "Why Every Backend Uses Kafka", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 157 },
    { id: "yuUDgR1kSnc", title: "Kafka Consumer Partition Assignment", channel: "Confluent, an IBM Company", kind: "explainer", lang: "en", seconds: 58 },
  ],
  "google-search": [
    { id: "KjNqUivtc5A", title: "How Google Search Actually Works", channel: "KodeKloud", kind: "real-system", lang: "en", seconds: 164 },
    { id: "ZSFSA1Tx6lk", title: "Interview: What Is a Bloom Filter?", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 169 },
    { id: "MF1ox1-PcaY", title: "HLD — Inverted Index Explained How Search Engines Find Pages Without Scanning Everything!", channel: "Tejav Academy", kind: "explainer", lang: "en", seconds: 60 },
  ],
  "youtube": [
    { id: "kRAyQ99EfTY", title: "YouTube Video Transcoding Pipeline | System Design Interview", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 175 },
    { id: "weFC9-w9J6s", title: "System Design: How YouTube Knows Where to Resume", channel: "KodeKloud", kind: "interview", lang: "en", seconds: 167 },
  ],
  "google-docs": [
    { id: "0F2BIarnYQo", title: "How two people type in one doc at once", channel: "Systems in Ink", kind: "explainer", lang: "en", seconds: 56 },
    { id: "tLtHk5r0qZc", title: "Conflict-Free Replicated Data Types", channel: "BitSized", kind: "explainer", lang: "en", seconds: 59 },
    { id: "Yt1RvXGf2tU", title: "Figma asks: How to design a collaborative editor frontend | frontend interview", channel: "The Frontend Round", kind: "interview", lang: "en", seconds: 25 },
  ],
  "whatsapp": [
    { id: "8A48hZtoUPc", title: "How WhatsApp Delivers 100 Billion Messages a Day", channel: "KodeKloud", kind: "real-system", lang: "en", seconds: 179 },
    { id: "7UyhyhxdFsQ", title: "How WhatsApp Video Sharing Works?", channel: "KodeKloud", kind: "real-system", lang: "en", seconds: 128 },
    { id: "5f0gZruaH9Y", title: "WebSocket Protocol Explained", channel: "NeetCodeIO", kind: "explainer", lang: "en", seconds: 34 },
  ],
  "airbnb": [
    { id: "aKbUH9EJLrA", title: "বাসের শেষ সিটটা দুজন একসাথে Book করলে টিকিট পাবে কে? | Database Transaction", channel: "Rabbil Hasan", kind: "explainer", lang: "bn", seconds: 47 },
    { id: "Ug8h462BMDI", title: "ACID & NoSQL Explained", channel: "NeetCodeIO", kind: "explainer", lang: "en", seconds: 55 },
    { id: "6C61eyS5pbQ", title: "How IRCTC Prevents Double Booking? | Race Condition Explained", channel: "Range Full Stack", kind: "explainer", lang: "en", seconds: 47 },
  ],
  "spotify": [
    { id: "aei5tsd3L0s", title: "How Spotify Uses Service Decomposition for Scalability", channel: "ByteMonk", kind: "real-system", lang: "en", seconds: 60 },
    { id: "v1J26fD-e5I", title: "What Happens When You Click Play on Netflix? (System Design Explained)", channel: "KodeKloud", kind: "real-system", lang: "en", seconds: 57 },
    { id: "rJA3UijAzTg", title: "How Netflix Streams to 300M Users!", channel: "KodeKloud", kind: "real-system", lang: "en", seconds: 171 },
  ],
  "slack": [
    { id: "dKZMLu_FXiQ", title: "WebSockets sound perfect. So why aren't they the default?", channel: "Amigoscode", kind: "explainer", lang: "en", seconds: 54 },
    { id: "f7KgDNZU3-Y", title: "gRPC, WebSocket and WebHook!", channel: "ByteByteGo", kind: "compare", lang: "en", seconds: 52 },
  ],
  "reddit": [
    { id: "TpQcMLhIgkw", title: "What Even Is a Job Queue?", channel: "PUQ Cloud", kind: "explainer", lang: "en", seconds: 24 },
    { id: "UL8MZjAmIjc", title: "Why Your Like Counter Is Secretly Wrong (Lost Update)", channel: "CodeCrack", kind: "mistake", lang: "en", seconds: 55 },
    { id: "HsYf5sKCFHw", title: "Optimistic Locking Explained: Rejecting Stale Updates", channel: "ScaleCraft", kind: "explainer", lang: "en", seconds: 16 },
  ],
  "bluesky": [
    { id: "CPUB7v6wK7k", title: "Bluesky Runs on This: the AT Protocol in 30 Seconds", channel: "LeafPlaza", kind: "explainer", lang: "en", seconds: 32 },
    { id: "f5w5md0Ov_Y", title: "Why Bluesky Isn't Just Twitter 2.0", channel: "LeafPlaza", kind: "compare", lang: "en", seconds: 37 },
  ],
  "twitter": [
    { id: "JUj9DEjEx0o", title: "Fan-out on write vs read: the feed trade-off", channel: "Systems in Ink", kind: "compare", lang: "en", seconds: 56 },
    { id: "3781H2Xh2yA", title: "Design Instagram's Feed", channel: "The Hot Path", kind: "explainer", lang: "en", seconds: 60 },
    { id: "cZ2iKi5N-2g", title: "How Instagram's Home Feed Actually Works", channel: "KodeKloud", kind: "real-system", lang: "en", seconds: 176 },
    { id: "kSqaxW-tHHU", title: "HLD — Design Twitter/X How Does ONE Post Reach MILLIONS of Feeds Instantly?", channel: "Tejav Academy", kind: "explainer", lang: "en", seconds: 60 },
  ],
  "uber-eta": [
    { id: "qG4rR-bdCHg", title: "How Uber Knows Your Driver is 8 Minutes Away?", channel: "KodeKloud", kind: "real-system", lang: "en", seconds: 164 },
    { id: "G5YdN3N3sPk", title: "How Google Maps Detects Traffic Jams", channel: "KodeKloud", kind: "real-system", lang: "en", seconds: 159 },
    { id: "qhHV9z0v3nI", title: "Ride app-এ গাড়িটা live নড়ে কীভাবে? | GPS + Real-time", channel: "Rabbil Hasan", kind: "explainer", lang: "bn", seconds: 42 },
    { id: "xeJK1KxLdUE", title: "Dijkstra's Algorithm : খুঁজে নিন আপনার প্রয়োজনীয় Shortest path", channel: "Phitron", kind: "explainer", lang: "bn", seconds: 57 },
  ],
  "url-shortener": [
    { id: "hJQgRmXUn5o", title: "How URL Shorteners Work (TinyURL System Design)", channel: "Solutions Architect Insights", kind: "explainer", lang: "en", seconds: 35 },
    { id: "MAylSnNKAKo", title: "Crush Long Links: Design a URL Shortener!", channel: "The Code Architect", kind: "explainer", lang: "en", seconds: 51 },
    { id: "Eur837UnXtQ", title: "ছোট্ট একটা link click করলেই সঠিক website খোলে কীভাবে? URL Shortener", channel: "Rabbil Hasan", kind: "explainer", lang: "bn", seconds: 49 },
  ],
  "stock-exchange": [
    { id: "d5M3ydo8Shw", title: "Microservice Design Patterns : Event Sourcing Design Pattern in 60 seconds", channel: "Software Engineering Insights", kind: "explainer", lang: "en", seconds: 34 },
    { id: "DBYBjhC0Xec", title: "How NSE Works in 20 Seconds | Matching Engine, Price Discovery & India’s Fastest Exchange Explained", channel: "Unlisted Buzz", kind: "real-system", lang: "en", seconds: 24 },
  ],
  "payment-system": [
    { id: "4jrEAAq4MOY", title: "Design Payment Processing System", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 157 },
    { id: "tewVJBvoHDg", title: "Ledger First Architecture", channel: "Future Architect", kind: "explainer", lang: "en", seconds: 57 },
    { id: "w-FktHoHza0", title: "PCI DSS & Data Sovereignty", channel: "Future Architect", kind: "explainer", lang: "en", seconds: 54 },
    { id: "pgcnmQfIFeU", title: "Webhooks: what Stripe warns you about", channel: "Amigoscode", kind: "explainer", lang: "en", seconds: 56 },
  ],
};
