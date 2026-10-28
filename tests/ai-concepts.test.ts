import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { AI_CONCEPTS } from "../lib/ai-concepts/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";

/** The 9 topics, in the order of the source infographic. */
const SLUGS = [
  "agentic-loops",
  "mcp",
  "subagents",
  "ai-gateway",
  "inference-economics",
  "evals",
  "guardrails",
  "observability",
  "agent-harness",
] as const;

/** The fixed sections. `## Trade-offs` may follow `## How it works`. */
const SHAPE = ["In plain words", "How it works", "A real-life example", "Common mistakes", "What a tester can check", "Key words"];

const dir = new URL("../content/ai-concepts/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 9 topics in order, and the files and the route map agree", () => {
  assert.deepEqual(AI_CONCEPTS.items.map((i) => [i.slug, i.kind]), SLUGS.map((s) => [s, "topic"]));
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${s}.mdx`).sort());
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/ai-concepts-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), ["/ai-concepts/", ...SLUGS.map((s) => `/ai-concepts/${s}/`)]);
  assert.deepEqual(Object.values(map), [...AI_CONCEPTS.routes]);
});

test("each page has its title as # heading and the fixed section order", () => {
  for (const page of AI_CONCEPTS.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim()).filter((h) => h !== "Trade-offs");
    assert.deepEqual(headings, SHAPE, page.slug);
  }
});

test("the progress ids are the 9 slugs, under ai-concepts-progress", () => {
  assert.equal(AI_CONCEPTS.progress?.storageKey, "ai-concepts-progress");
  assert.deepEqual(AI_CONCEPTS.lessonIds, [...SLUGS]);
});

test("precacheUrls includes /ai-concepts/ and the 9 page routes", () => {
  const urls = precacheUrls("");
  for (const route of AI_CONCEPTS.routes) assert.ok(urls.includes(route), route);
});

test("buildFlatSearchDocs gives docs with group 'ai concepts' for every page", () => {
  const docs = buildFlatSearchDocs(AI_CONCEPTS, AI_CONCEPTS.pages.map((item) => ({ item, source: read(item.slug) })));
  for (const doc of docs) assert.equal(doc.group, "ai concepts");
  for (const page of AI_CONCEPTS.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
