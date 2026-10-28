import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { AI_SKILLS } from "../lib/ai-skills/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";

/** Spec "Data": slug and part (tier). Every entry is a topic. */
const ENTRIES = [
  ["prompting", 1],
  ["context-engineering", 1],
  ["ai-research", 1],
  ["workflow-automation", 1],
  ["ai-agents", 2],
  ["rag", 2],
  ["data-enrichment", 2],
  ["vibe-coding", 2],
  ["mcp-connectors", 2],
  ["ai-evals", 2],
  ["meeting-intelligence", 3],
  ["ai-data-analysis", 3],
  ["ai-video", 3],
  ["voice-and-avatars", 3],
  ["decks-and-design", 3],
  ["ai-governance", 3],
  ["fine-tuning", 4],
  ["open-models", 4],
  ["voice-agents", 4],
  ["image-generation", 4],
] as const;

/** Spec "Page shape": the ## sections in order. */
const SECTIONS = [
  "In plain words",
  "How it works",
  "How a tester uses it",
  "Tools to try",
  "Common mistakes",
  "How to start",
  "Key words",
];

const dir = new URL("../content/ai-skills/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 20 entries in spec order, with their parts", () => {
  assert.deepEqual(
    AI_SKILLS.items.map((i) => [i.slug, i.part, i.kind]),
    ENTRIES.map((e) => [e[0], e[1], "topic"]),
  );
  assert.deepEqual(
    AI_SKILLS.groups().map((g) => [g.part?.num, g.items.length]),
    [[1, 4], [2, 6], [3, 6], [4, 4]],
  );
});

test("content/ai-skills has exactly the 20 files, and the route map is AI_SKILLS.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), ENTRIES.map((e) => `${e[0]}.mdx`).sort());
  assert.deepEqual(AI_SKILLS.routes, ["/ai-skills/", ...ENTRIES.map((e) => `/ai-skills/${e[0]}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/ai-skills-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...AI_SKILLS.routes]);
  assert.deepEqual(Object.values(map), [...AI_SKILLS.routes]);
});

test("each page has the entry title as # heading and the spec sections in order", () => {
  for (const page of AI_SKILLS.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    assert.deepEqual(headings, SECTIONS, page.slug);
  }
});

test("each section except Key words has voices", () => {
  for (const page of AI_SKILLS.pages) {
    const sections = read(page.slug).split(/^## /m).slice(1);
    for (const section of sections) {
      const title = section.split("\n")[0].trim();
      assert.equal(section.includes("<Voices>"), title !== "Key words", `${page.slug}: ${title}`);
    }
  }
});

test("the progress ids are the 20 slugs, under ai-skills-progress", () => {
  assert.equal(AI_SKILLS.progress?.storageKey, "ai-skills-progress");
  assert.deepEqual(AI_SKILLS.lessonIds, ENTRIES.map((e) => e[0]));
});

test("precacheUrls includes /ai-skills/ and the 20 page routes", () => {
  const urls = precacheUrls("");
  assert.ok(urls.includes("/ai-skills/"));
  for (const [slug] of ENTRIES) assert.ok(urls.includes(`/ai-skills/${slug}/`), slug);
});

test("buildFlatSearchDocs gives docs with group 'ai skills' for every page", () => {
  const docs = buildFlatSearchDocs(AI_SKILLS, AI_SKILLS.pages.map((item) => ({ item, source: read(item.slug) })));
  assert.ok(docs.length >= AI_SKILLS.pages.length);
  for (const doc of docs) assert.equal(doc.group, "ai skills");
  for (const page of AI_SKILLS.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
