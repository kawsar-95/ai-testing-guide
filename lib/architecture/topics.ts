/**
 * The one ordered list of the System Architecture Foundations module. Each
 * entry is served at /architecture/<slug>/ and has its text in
 * content/architecture/<slug>.mdx. The last entry is the practice page.
 */
import { defineFlatModule, type FlatEntry, type FlatItem } from "../modules/flat.ts";
import { ARCHITECTURE_UI } from "./ui.ts";

/** The number of practice questions on the practice page. */
export const PRACTICE_COUNT = 30;

export type ArchitectureSlug =
  | "why-system-design"
  | "requirements"
  | "single-server"
  | "vertical-scaling"
  | "horizontal-scaling"
  | "load-balancer"
  | "stateless-service"
  | "object-storage"
  | "cdn"
  | "cloud-architecture"
  | "database-replication"
  | "caching"
  | "distributed-cache"
  | "rate-limiting"
  | "message-queue"
  | "idempotency"
  | "api-gateway"
  | "monolith-microservices"
  | "observability"
  | "practice";

export type ArchitectureTopic = FlatItem<ArchitectureSlug>;

type Entry = { slug: ArchitectureSlug; title: string; description: string };

const SOURCE: readonly Entry[] = [
  {
    slug: "why-system-design",
    title: "Why System Design Matters",
    description: "A feature that works is not yet a system that survives real traffic and failures.",
  },
  {
    slug: "requirements",
    title: "Functional and Non-functional Requirements",
    description: "What the system does, and how well it must do it.",
  },
  {
    slug: "single-server",
    title: "Single Server Architecture",
    description: "Everything on one machine: cheap and simple, until it is not.",
  },
  {
    slug: "vertical-scaling",
    title: "Vertical Scaling",
    description: "Make one server bigger: more CPU, more RAM, a faster disk.",
  },
  {
    slug: "horizontal-scaling",
    title: "Horizontal Scaling",
    description: "Add more servers and share the traffic between them.",
  },
  {
    slug: "load-balancer",
    title: "Load Balancer",
    description: "The front door that sends each request to a healthy server.",
  },
  {
    slug: "stateless-service",
    title: "Stateless Service",
    description: "Keep sessions and files outside the app server, so any server can answer.",
  },
  {
    slug: "object-storage",
    title: "File Storage and Object Storage",
    description: "Where uploaded files live when there is more than one server.",
  },
  {
    slug: "cdn",
    title: "CDN for Static Content",
    description: "Serve images, videos, and scripts from a place near the user.",
  },
  {
    slug: "cloud-architecture",
    title: "Basic Cloud Architecture",
    description: "Managed services that work together: compute, database, storage, and monitoring.",
  },
  {
    slug: "database-replication",
    title: "Database Replication and Read/Write Splitting",
    description: "Copies of the database share the reads. Watch out for stale data.",
  },
  {
    slug: "caching",
    title: "Caching with Redis",
    description: "Keep often-read data in fast memory, and know when to throw it away.",
  },
  {
    slug: "distributed-cache",
    title: "Distributed Cache",
    description: "One shared cache for all servers: sessions, OTPs, counters, and locks.",
  },
  {
    slug: "rate-limiting",
    title: "Rate Limiting",
    description: "Limit how many requests a user can send, and answer 429 when it is too many.",
  },
  {
    slug: "message-queue",
    title: "Message Queue and Async Processing",
    description: "Let background workers do slow jobs, so the user does not wait.",
  },
  {
    slug: "idempotency",
    title: "Idempotency",
    description: "The same request two times must not charge or enroll two times.",
  },
  {
    slug: "api-gateway",
    title: "API Gateway",
    description: "One entry point for all clients: routing, auth, and limits in one place.",
  },
  {
    slug: "monolith-microservices",
    title: "Monolith, Modular Monolith, and Microservices",
    description: "One app, one app with clear modules, or many small services.",
  },
  {
    slug: "observability",
    title: "Monitoring and Observability",
    description: "Logs, metrics, and traces: know that it broke, and find out why.",
  },
  {
    slug: "practice",
    title: "Practice Questions",
    description: "30 questions with model answers. Tick each one when you can answer it.",
  },
];

const entries: readonly FlatEntry<ArchitectureSlug>[] = SOURCE.map((entry) => ({
  ...entry,
  kind: entry.slug === "practice" ? "practice" : "topic",
}));

/** The progress id of practice question `n` (1-based): `practice-01` … `practice-30`. */
export const practiceId = (n: number) => `practice-${String(n).padStart(2, "0")}`;

export const PRACTICE_IDS: readonly string[] = Array.from({ length: PRACTICE_COUNT }, (_, i) => practiceId(i + 1));

const progress = { storageKey: "architecture-progress", extraIds: PRACTICE_IDS };

export const ARCHITECTURE = defineFlatModule({
  id: "architecture",
  label: "Architecture",
  searchGroup: "architecture",
  entries,
  progress,
  ui: ARCHITECTURE_UI,
});

export const TOPICS: readonly ArchitectureTopic[] = ARCHITECTURE.pages;
export const ARCHITECTURE_HOME = ARCHITECTURE.home;
export const ARCHITECTURE_ROUTES: readonly string[] = ARCHITECTURE.routes;

/** The localStorage key of the done topics and the done practice questions. */
export const ARCHITECTURE_STORAGE_KEY = progress.storageKey;

/** The progress ids of the lessons: their slugs. The practice page has no id of its own. */
export const LESSON_IDS: readonly string[] = ARCHITECTURE.lessonIds;

export const getTopic = ARCHITECTURE.get;
