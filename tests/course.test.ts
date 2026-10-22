import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { COURSE } from "../lib/course/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";
import { sitemapPaths } from "../lib/sitemap.ts";

/** Spec §3: slug, part, kind, and the target of a link entry. */
const ENTRIES = [
  ["intro", 0, "link", "/architecture/why-system-design/"],
  ["ip", 1, "topic"],
  ["osi", 1, "topic"],
  ["tcp-udp", 1, "topic"],
  ["dns", 1, "topic"],
  ["load-balancing", 1, "link", "/architecture/load-balancer/"],
  ["clustering", 1, "topic"],
  ["caching", 1, "link", "/architecture/caching/"],
  ["cdn", 1, "link", "/architecture/cdn/"],
  ["proxy", 1, "topic"],
  ["availability", 1, "topic"],
  ["scalability", 1, "link", "/architecture/horizontal-scaling/"],
  ["storage", 1, "link", "/architecture/object-storage/"],
  ["database", 2, "topic"],
  ["sql", 2, "topic"],
  ["nosql", 2, "topic"],
  ["sql-vs-nosql", 2, "topic"],
  ["replication", 2, "link", "/architecture/database-replication/"],
  ["indexes", 2, "topic"],
  ["normalization", 2, "topic"],
  ["acid-base", 2, "topic"],
  ["cap-theorem", 2, "topic"],
  ["pacelc", 2, "topic"],
  ["transactions", 2, "topic"],
  ["distributed-transactions", 2, "topic"],
  ["sharding", 2, "topic"],
  ["consistent-hashing", 2, "topic"],
  ["database-federation", 2, "topic"],
  ["n-tier", 3, "topic"],
  ["message-brokers", 3, "link", "/architecture/message-queue/"],
  ["pub-sub", 3, "topic"],
  ["esb", 3, "topic"],
  ["monoliths-microservices", 3, "link", "/architecture/monolith-microservices/"],
  ["event-driven-architecture", 3, "topic"],
  ["event-sourcing", 3, "topic"],
  ["cqrs", 3, "topic"],
  ["api-gateway", 3, "link", "/architecture/api-gateway/"],
  ["rest-graphql-grpc", 3, "topic"],
  ["long-polling-ws-sse", 3, "topic"],
] as const;

const TOPICS = ENTRIES.filter((e) => e[2] === "topic").map((e) => e[0]);

const REQUIRED = [
  "In plain words",
  "When you need it",
  "A real-life example",
  "Common mistakes",
  "What a tester can check",
  "Key words",
];

const dir = new URL("../content/course/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 39 entries in spec order, with their parts and kinds", () => {
  assert.deepEqual(
    COURSE.items.map((i) => [i.slug, i.part, i.kind]),
    ENTRIES.map((e) => [e[0], e[1], e[2]]),
  );
  assert.deepEqual(
    COURSE.items.map((i) => i.number),
    ENTRIES.map((_, i) => i + 1),
  );
  assert.deepEqual(
    COURSE.groups().map((g) => [g.part?.num, g.items.length]),
    [
      [0, 1],
      [1, 12],
      [2, 15],
      [3, 11],
    ],
  );
});

test("each link entry points to its target, and the target is a known route", () => {
  const paths = new Set(sitemapPaths());
  for (const [slug, , kind, href] of ENTRIES) {
    if (kind !== "link") continue;
    const item = COURSE.items.find((i) => i.slug === slug);
    assert.equal(item?.href, href, slug);
    assert.ok(paths.has(href), href);
  }
});

test("content/course has exactly the 29 topic files, and the route map is COURSE.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), TOPICS.map((s) => `${s}.mdx`).sort());
  assert.deepEqual(COURSE.routes, ["/course/", ...TOPICS.map((s) => `/course/${s}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/course-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...COURSE.routes]);
  assert.deepEqual(Object.values(map), [...COURSE.routes]);
});

test("each course page has the entry title as # heading and the 6 required ## sections in order, Key words last", () => {
  for (const page of COURSE.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    assert.deepEqual(
      headings.filter((h) => REQUIRED.includes(h)),
      REQUIRED,
      page.slug,
    );
    assert.equal(headings.at(-1), "Key words", page.slug);
    assert.doesNotMatch(source, /<Voices>/, page.slug);
  }
});

test("the progress ids are the 39 entries, under course-progress", () => {
  assert.equal(COURSE.progress?.storageKey, "course-progress");
  assert.equal(COURSE.lessonIds.length, 39);
  assert.deepEqual(COURSE.lessonIds, ENTRIES.map((e) => e[0]));
});

test("precacheUrls includes /course/ and the 29 page routes", () => {
  const urls = precacheUrls("");
  assert.ok(urls.includes("/course/"));
  for (const slug of TOPICS) assert.ok(urls.includes(`/course/${slug}/`), slug);
});

test("buildFlatSearchDocs gives docs with group 'course' for every page", () => {
  const docs = buildFlatSearchDocs(COURSE, COURSE.pages.map((item) => ({ item, source: read(item.slug) })));
  assert.ok(docs.length > COURSE.pages.length);
  for (const doc of docs) assert.equal(doc.group, "course");
  for (const page of COURSE.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
