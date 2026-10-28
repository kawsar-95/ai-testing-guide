import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { AI_AGENTS } from "../lib/ai-agents/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";

/** The 10 topics, in the order of the infographic. */
const SLUGS = [
  "agent-basics",
  "trigger",
  "build-context",
  "llm-decides",
  "act-with-tools",
  "stop-check",
  "memory",
  "guardrails",
  "observability-and-evals",
  "final-output",
] as const;

/** The fixed page shape. Every section but Key words has <Voices>. */
const SHAPE = [
  "In plain words",
  "How it works",
  "A real-life example",
  "Common mistakes",
  "What a tester can check",
  "Key words",
];

const dir = new URL("../content/ai-agents/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 10 topic entries in infographic order", () => {
  assert.deepEqual(AI_AGENTS.items.map((i) => [i.slug, i.kind]), SLUGS.map((s) => [s, "topic"]));
});

test("content/ai-agents has exactly the 10 files, and the route map is AI_AGENTS.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${s}.mdx`).sort());
  assert.deepEqual(AI_AGENTS.routes, ["/ai-agents/", ...SLUGS.map((s) => `/ai-agents/${s}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/ai-agents-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...AI_AGENTS.routes]);
  assert.deepEqual(Object.values(map), [...AI_AGENTS.routes]);
});

test("each page has the entry title as # heading, the fixed sections, and voices", () => {
  for (const page of AI_AGENTS.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    assert.deepEqual(headings, SHAPE, page.slug);
    const voices = source.match(/^<Voices>$/gm)?.length ?? 0;
    assert.equal(voices, SHAPE.length - 1, `${page.slug}: one <Voices> per section but Key words`);
  }
});

test("the progress ids are the 10 slugs, under ai-agents-progress", () => {
  assert.equal(AI_AGENTS.progress?.storageKey, "ai-agents-progress");
  assert.deepEqual(AI_AGENTS.lessonIds, [...SLUGS]);
});

test("precacheUrls includes /ai-agents/ and the 10 page routes", () => {
  const urls = precacheUrls("");
  assert.ok(urls.includes("/ai-agents/"));
  for (const slug of SLUGS) assert.ok(urls.includes(`/ai-agents/${slug}/`), slug);
});

test("buildFlatSearchDocs gives docs with group 'ai agents' for every page", () => {
  const docs = buildFlatSearchDocs(
    AI_AGENTS,
    AI_AGENTS.pages.map((item) => ({ item, source: read(item.slug) })),
  );
  for (const doc of docs) assert.equal(doc.group, "ai agents");
  for (const page of AI_AGENTS.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
