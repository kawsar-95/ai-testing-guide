import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { AI_ENGINEERING } from "../lib/ai-engineering/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";

/** Slug and part, in the order of the iceberg. Every entry is a topic. */
const ENTRIES = [
  ["prompt-engineering", 1],
  ["calling-llm-apis", 1],
  ["building-chatbots", 1],
  ["using-langchain", 1],
  ["rag-basics", 1],
  ["ai-agents", 1],
  ["vector-databases", 1],
  ["fine-tuning", 1],
  ["data-pipelines", 2],
  ["retrieval-engineering", 2],
  ["context-engineering", 2],
  ["model-evaluation", 2],
  ["agent-orchestration", 2],
  ["tool-calling", 2],
  ["structured-outputs", 2],
  ["guardrails-and-safety", 2],
  ["model-routing", 2],
  ["observability", 2],
  ["latency-optimization", 2],
  ["cost-optimization", 2],
  ["reliability-engineering", 2],
  ["security", 2],
  ["ai-infrastructure", 2],
  ["ci-cd-for-ai", 2],
  ["production-monitoring", 2],
  ["human-in-the-loop", 2],
  ["data-governance", 2],
  ["system-design", 2],
] as const;

/** The ## sections of every page, in this order. */
const SECTIONS = ["In plain words", "How it works", "A real-life example", "Common mistakes", "What a tester can check", "Key words"];

const dir = new URL("../content/ai-engineering/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 28 entries in iceberg order, with their parts", () => {
  assert.deepEqual(
    AI_ENGINEERING.items.map((i) => [i.slug, i.part, i.kind]),
    ENTRIES.map((e) => [e[0], e[1], "topic"]),
  );
  assert.deepEqual(
    AI_ENGINEERING.groups().map((g) => [g.part?.num, g.items.length]),
    [[1, 8], [2, 20]],
  );
});

test("content/ai-engineering has exactly the 28 files, and the route map is AI_ENGINEERING.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), ENTRIES.map((e) => `${e[0]}.mdx`).sort());
  assert.deepEqual(AI_ENGINEERING.routes, ["/ai-engineering/", ...ENTRIES.map((e) => `/ai-engineering/${e[0]}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/ai-engineering-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...AI_ENGINEERING.routes]);
  assert.deepEqual(Object.values(map), [...AI_ENGINEERING.routes]);
});

test("each page has the entry title as # heading and the 6 ## sections in order", () => {
  for (const page of AI_ENGINEERING.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    assert.deepEqual(headings, SECTIONS, page.slug);
  }
});

test("each MdxImage src in content/ai-engineering is a file in public/", () => {
  for (const [slug] of ENTRIES) {
    for (const m of read(slug).matchAll(/src="(\/images\/[^"]+)"/g)) {
      assert.ok(existsSync(new URL(`../public${m[1]}`, import.meta.url)), `${slug}: ${m[1]}`);
    }
  }
});

test("the progress ids are the 28 slugs, under ai-engineering-progress", () => {
  assert.equal(AI_ENGINEERING.progress?.storageKey, "ai-engineering-progress");
  assert.deepEqual(AI_ENGINEERING.lessonIds, ENTRIES.map((e) => e[0]));
});

test("precacheUrls includes /ai-engineering/ and the 28 page routes", () => {
  const urls = precacheUrls("");
  assert.ok(urls.includes("/ai-engineering/"));
  for (const [slug] of ENTRIES) assert.ok(urls.includes(`/ai-engineering/${slug}/`), slug);
});

test("buildFlatSearchDocs gives docs with group 'ai engineering' for every page", () => {
  const docs = buildFlatSearchDocs(AI_ENGINEERING, AI_ENGINEERING.pages.map((item) => ({ item, source: read(item.slug) })));
  assert.ok(docs.length >= AI_ENGINEERING.pages.length);
  for (const doc of docs) assert.equal(doc.group, "ai engineering");
  for (const page of AI_ENGINEERING.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
