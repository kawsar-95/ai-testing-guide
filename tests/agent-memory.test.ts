import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { AGENT_MEMORY } from "../lib/agent-memory/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";

/** The 7 types, in the order of the infographic. */
const SLUGS = [
  "working-memory",
  "semantic-memory",
  "episodic-memory",
  "procedural-memory",
  "retrieval-memory",
  "parametric-memory",
  "prospective-memory",
] as const;

/** The fixed page shape. Every section but Key words has <Voices>. */
const SHAPE = [
  "In plain words",
  "Where it comes from",
  "How an agent gets it",
  "A real-life example",
  "Common mistakes",
  "What a tester can check",
  "Key words",
];

const dir = new URL("../content/agent-memory/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 7 topic entries in infographic order", () => {
  assert.deepEqual(AGENT_MEMORY.items.map((i) => [i.slug, i.kind]), SLUGS.map((s) => [s, "topic"]));
});

test("content/agent-memory has exactly the 7 files, and the route map is AGENT_MEMORY.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${s}.mdx`).sort());
  assert.deepEqual(AGENT_MEMORY.routes, ["/agent-memory/", ...SLUGS.map((s) => `/agent-memory/${s}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/agent-memory-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...AGENT_MEMORY.routes]);
  assert.deepEqual(Object.values(map), [...AGENT_MEMORY.routes]);
});

test("each page has the entry title as # heading, the fixed sections, and voices", () => {
  for (const page of AGENT_MEMORY.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    assert.deepEqual(headings, SHAPE, page.slug);
    const voices = source.match(/^<Voices>$/gm)?.length ?? 0;
    assert.equal(voices, SHAPE.length - 1, `${page.slug}: one <Voices> per section but Key words`);
  }
});

test("the progress ids are the 7 slugs, under agent-memory-progress", () => {
  assert.equal(AGENT_MEMORY.progress?.storageKey, "agent-memory-progress");
  assert.deepEqual(AGENT_MEMORY.lessonIds, [...SLUGS]);
});

test("precacheUrls includes /agent-memory/ and the 7 page routes", () => {
  const urls = precacheUrls("");
  assert.ok(urls.includes("/agent-memory/"));
  for (const slug of SLUGS) assert.ok(urls.includes(`/agent-memory/${slug}/`), slug);
});

test("buildFlatSearchDocs gives docs with group 'agent memory' for every page", () => {
  const docs = buildFlatSearchDocs(
    AGENT_MEMORY,
    AGENT_MEMORY.pages.map((item) => ({ item, source: read(item.slug) })),
  );
  for (const doc of docs) assert.equal(doc.group, "agent memory");
  for (const page of AGENT_MEMORY.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
