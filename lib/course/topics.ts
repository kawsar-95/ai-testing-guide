/**
 * The one ordered list of the System Design Course. A topic entry is served at
 * /course/<slug>/ and has its text in content/course/<slug>.mdx. A link entry
 * points to an Architecture page and has no page of its own.
 */
import { defineFlatModule, type FlatEntry } from "../modules/flat.ts";
import { COURSE_UI } from "./ui.ts";

export type CourseSlug =
  | "intro"
  | "ip"
  | "osi"
  | "tcp-udp"
  | "dns"
  | "load-balancing"
  | "clustering"
  | "caching"
  | "cdn"
  | "proxy"
  | "availability"
  | "scalability"
  | "storage"
  | "database"
  | "sql"
  | "nosql"
  | "sql-vs-nosql"
  | "replication"
  | "indexes"
  | "normalization"
  | "acid-base"
  | "cap-theorem"
  | "pacelc"
  | "transactions"
  | "distributed-transactions"
  | "sharding"
  | "consistent-hashing"
  | "database-federation";

const parts = [
  { num: 0, title: "Getting started" },
  { num: 1, title: "Networking and basics" },
  { num: 2, title: "Databases and consistency" },
] as const;

const entries: readonly FlatEntry<CourseSlug>[] = [
  {
    slug: "intro",
    title: "What Is System Design?",
    description: "What system design is, and why a tester should care.",
    kind: "link",
    href: "/architecture/why-system-design/",
    part: 0,
  },
  {
    slug: "ip",
    title: "IP Addresses",
    description: "How every device on a network gets an address, in IPv4 and IPv6.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "osi",
    title: "The OSI Model",
    description: "Seven layers that name where a network problem lives.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "tcp-udp",
    title: "TCP and UDP",
    description: "Reliable ordered delivery, or fast delivery with no promise.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "dns",
    title: "DNS",
    description: "How a name like example.com becomes an IP address.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "load-balancing",
    title: "Load Balancing",
    description: "Share traffic between servers and skip the broken ones.",
    kind: "link",
    href: "/architecture/load-balancer/",
    part: 1,
  },
  {
    slug: "clustering",
    title: "Clustering",
    description: "Many machines that act as one system and replace each other.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "caching",
    title: "Caching",
    description: "Keep a copy close so the next read is fast.",
    kind: "link",
    href: "/architecture/caching/",
    part: 1,
  },
  {
    slug: "cdn",
    title: "CDN",
    description: "Serve static files from a server near the user.",
    kind: "link",
    href: "/architecture/cdn/",
    part: 1,
  },
  {
    slug: "proxy",
    title: "Forward and Reverse Proxies",
    description: "A middleman for requests: on the client side or the server side.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "availability",
    title: "Availability",
    description: "How much of the time a system works, and how to measure it.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "scalability",
    title: "Scalability",
    description: "Grow with the load: bigger servers or more servers.",
    kind: "link",
    href: "/architecture/horizontal-scaling/",
    part: 1,
  },
  {
    slug: "storage",
    title: "Storage",
    description: "Files, blocks, and objects: where data lives.",
    kind: "link",
    href: "/architecture/object-storage/",
    part: 1,
  },
  {
    slug: "database",
    title: "Databases and DBMS",
    description: "What a database and a DBMS are, and what they do for an app.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "sql",
    title: "SQL Databases",
    description: "Tables, rows, keys, and the SQL language.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "nosql",
    title: "NoSQL Databases",
    description: "Documents, key-value, wide-column, and graph stores.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "sql-vs-nosql",
    title: "SQL vs NoSQL",
    description: "How to choose: data shape, consistency, and scale.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "replication",
    title: "Database Replication",
    description: "Copies of the data on more than one server.",
    kind: "link",
    href: "/architecture/database-replication/",
    part: 2,
  },
  {
    slug: "indexes",
    title: "Indexes",
    description: "A lookup structure that makes reads fast and writes slower.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "normalization",
    title: "Normalization and Denormalization",
    description: "Split data to avoid copies, or copy it on purpose for speed.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "acid-base",
    title: "ACID and BASE",
    description: "Strict transactions, or availability with eventual consistency.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "cap-theorem",
    title: "The CAP Theorem",
    description: "During a network split, choose consistency or availability.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "pacelc",
    title: "The PACELC Theorem",
    description: "CAP, plus the latency trade-off when there is no split.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "transactions",
    title: "Transactions",
    description: "A group of changes that all happen or none happen.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "distributed-transactions",
    title: "Distributed Transactions",
    description: "One change across many databases: two-phase commit and sagas.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "sharding",
    title: "Sharding",
    description: "Split one big data set across many databases.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "consistent-hashing",
    title: "Consistent Hashing",
    description: "Spread keys over servers so few keys move when servers change.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "database-federation",
    title: "Database Federation",
    description: "Give each part of the app its own database.",
    kind: "topic",
    part: 2,
  },
];

export const COURSE = defineFlatModule({
  id: "course",
  label: "Course",
  searchGroup: "course",
  parts,
  entries,
  progress: { storageKey: "course-progress" },
  ui: COURSE_UI,
});
