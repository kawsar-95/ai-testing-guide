import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import {
  ARCHITECTURE_HOME,
  ARCHITECTURE_ROUTES,
  ARCHITECTURE_STORAGE_KEY,
  LESSON_IDS,
  PRACTICE_COUNT,
  PRACTICE_IDS,
  TOPICS,
  getTopic,
  practiceId,
} from "../lib/architecture/topics.ts";
import { getOutline } from "../lib/outline.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildArchitectureSearchDocs, createIndex, runSearch } from "../lib/search.ts";

const SLUGS = [
  "why-system-design",
  "requirements",
  "single-server",
  "vertical-scaling",
  "horizontal-scaling",
  "load-balancer",
  "stateless-service",
  "object-storage",
  "cdn",
  "cloud-architecture",
  "database-replication",
  "caching",
  "distributed-cache",
  "rate-limiting",
  "message-queue",
  "idempotency",
  "api-gateway",
  "monolith-microservices",
  "observability",
  "practice",
];

const dir = new URL("../content/architecture/", import.meta.url);
const publicDir = new URL("../public/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");
const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

test("there are 20 entries in order, numbered 1 to 20: 19 topics, then the practice page", () => {
  assert.deepEqual(
    TOPICS.map((t) => t.slug),
    SLUGS,
  );
  assert.deepEqual(
    TOPICS.map((t) => t.number),
    SLUGS.map((_, i) => i + 1),
  );
  assert.equal(new Set(TOPICS.map((t) => t.title)).size, TOPICS.length);
  assert.deepEqual(
    TOPICS.map((t) => t.kind),
    [...Array(19).fill("topic"), "practice"],
  );
});

test("each href is /architecture/<slug>/ and getTopic finds it", () => {
  assert.equal(ARCHITECTURE_HOME, "/architecture/");
  for (const t of TOPICS) {
    assert.equal(t.href, `/architecture/${t.slug}/`);
    assert.equal(getTopic(t.slug), t);
  }
  assert.equal(getTopic("nope"), undefined);
});

test("ARCHITECTURE_ROUTES is the home then the 20 hrefs, and the route map has the same routes", () => {
  assert.deepEqual(ARCHITECTURE_ROUTES, [ARCHITECTURE_HOME, ...TOPICS.map((t) => t.href)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/architecture-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.values(map), [...ARCHITECTURE_ROUTES]);
});

test("the progress ids are the 19 topic slugs and practice-01 to practice-30, under their own key", () => {
  assert.equal(ARCHITECTURE_STORAGE_KEY, "architecture-progress");
  assert.deepEqual(LESSON_IDS, SLUGS.slice(0, 19));
  assert.equal(PRACTICE_IDS.length, PRACTICE_COUNT);
  assert.equal(PRACTICE_IDS[0], "practice-01");
  assert.equal(PRACTICE_IDS[29], "practice-30");
  assert.equal(practiceId(7), "practice-07");
  assert.equal(new Set([...LESSON_IDS, ...PRACTICE_IDS]).size, LESSON_IDS.length + PRACTICE_IDS.length);
});

test("content/architecture has exactly one MDX file for each entry", () => {
  assert.ok(existsSync(dir), "content/architecture does not exist");
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${s}.mdx`).sort());
});

test("every MDX exports metadata and page, has the entry title as its # heading, and renders <PageMeta />", () => {
  for (const t of TOPICS) {
    const source = read(t.slug);
    assert.match(source, /^export const metadata = \{/m, `${t.slug}.mdx has no metadata`);
    assert.match(source, /^export const page = \{/m, `${t.slug}.mdx has no page`);
    assert.match(source, new RegExp(`^# ${escape(t.title)}$`, "m"), t.slug);
    assert.match(source, /^<PageMeta \/>$/m, `${t.slug}.mdx has no <PageMeta />`);
  }
});

test("every topic page shows its own image, and every image src is a file in public/", () => {
  for (const t of TOPICS) {
    const source = read(t.slug);
    const srcs = [...source.matchAll(/<MdxImage[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]);
    if (t.kind === "topic") {
      const own = `/images/architecture/${String(t.number).padStart(2, "0")}-${t.slug}.webp`;
      assert.ok(srcs.includes(own), `${t.slug}.mdx does not show ${own}`);
    }
    for (const src of srcs) {
      assert.ok(src.startsWith("/"), src);
      assert.ok(existsSync(new URL(src.slice(1), publicDir)), `${t.slug}.mdx: ${src} is not in public/`);
    }
  }
});

test("the practice page has questions 1 to 30, one time each, and each topic is a known topic slug", () => {
  const source = read("practice");
  const questions = [...source.matchAll(/<PracticeQuestion\s+n=\{(\d+)\}\s+topic="([^"]+)"/g)];
  assert.deepEqual(
    questions.map((m) => Number(m[1])),
    Array.from({ length: PRACTICE_COUNT }, (_, i) => i + 1),
  );
  for (const [, n, topic] of questions) {
    assert.ok(LESSON_IDS.includes(topic), `question ${n}: "${topic}" is not a topic slug`);
  }
  const closes = source.match(/^<\/PracticeQuestion>$/gm) ?? [];
  assert.equal(closes.length, PRACTICE_COUNT, "each </PracticeQuestion> is at column 0, on its own line");
});

test("buildArchitectureSearchDocs gives an intro doc and one doc per ## section, with group 'architecture'", () => {
  const docs = buildArchitectureSearchDocs(TOPICS.map((item) => ({ item, source: read(item.slug) })));
  for (const t of TOPICS) {
    const own = docs.filter((doc) => doc.page === t.title);
    const sections = getOutline("architecture", t.slug).filter((item) => item.level === 2);
    assert.equal(own[0].href, t.href);
    assert.equal(own.length, sections.length + 1, t.href);
  }
  for (const doc of docs) {
    assert.equal(doc.group, "architecture");
    assert.equal(doc.part, null);
  }
  const hit = runSearch(createIndex(docs), "idempotency").find((h) => h.href.startsWith("/architecture/idempotency/"));
  assert.ok(hit);
});

test("precacheUrls includes /architecture/ and every topic route", () => {
  for (const basePath of ["", "/repo"]) {
    const urls = precacheUrls(basePath);
    for (const route of ARCHITECTURE_ROUTES) assert.ok(urls.includes(`${basePath}${route}`), route);
    assert.equal(new Set(urls).size, urls.length, "no duplicates");
  }
});
