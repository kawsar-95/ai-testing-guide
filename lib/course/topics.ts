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
  | "storage";

const parts = [
  { num: 0, title: "Getting started" },
  { num: 1, title: "Networking and basics" },
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
