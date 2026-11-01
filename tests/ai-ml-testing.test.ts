import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { AI_ML_TESTING } from "../lib/ai-ml-testing/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";

/** The 47 topics, in the order of the course syllabus. */
const SLUGS = [
  "ai-ml-for-testers",
  "llm-tokens-temperature",
  "ai-application-architecture",
  "prompt-engineering-basics",
  "prompt-testing",
  "structured-outputs",
  "promptfoo-first-eval",
  "promptfoo-assertions",
  "deepeval-pytest",
  "hallucination-detection",
  "model-comparison-regression",
  "rag-testing-basics",
  "llm-api-testing",
  "chatbot-ui-testing",
  "langchain-testing",
  "langgraph-agent-testing",
  "owasp-llm-risks",
  "red-teaming",
  "guardrails-bias",
  "ai-test-strategy",
  "ai-quality-metrics",
  "ai-observability",
  "capstone-project-setup",
  "capstone-test-pipeline",
  "capstone-cicd-presentation",
  "ai-testing-career-kit",
  "advanced-rag-failures",
  "chunking-embedding-testing",
  "rag-synthetic-regression",
  "vector-db-basics",
  "vector-db-quality-performance",
  "multi-turn-testing",
  "virtual-assistant-testing",
  "agent-architecture",
  "agent-decision-testing",
  "multi-agent-testing",
  "multimodal-testing",
  "finetuned-model-testing",
  "synthetic-data-dspy",
  "production-observability",
  "model-drift-ab-testing",
  "ai-load-testing",
  "cicd-eval-pipelines",
  "advanced-capstone-setup",
  "advanced-capstone-test-suite",
  "advanced-capstone-pipeline",
  "advanced-capstone-presentation",
] as const;

/** The part number of each topic, in the same order. */
const PART_OF = [
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
] as const;

/** The fixed page shape. Every section but Key words has <Voices>. */
const SHAPE = [
  "In plain words",
  "How it works",
  "In practice",
  "Common mistakes",
  "What a tester can check",
  "Key words",
];

const dir = new URL("../content/ai-ml-testing/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 47 topic entries, and every one is a topic", () => {
  assert.equal(SLUGS.length, 47);
  assert.deepEqual(AI_ML_TESTING.items.map((i) => [i.slug, i.kind]), SLUGS.map((s) => [s, "topic"]));
  assert.equal(AI_ML_TESTING.items.length, 47);
});

test("the parts are the phases, and the part numbers never go down", () => {
  assert.deepEqual(
    AI_ML_TESTING.parts?.map((p) => [p.num, p.title]),
    [[1, "Phase 1 — Foundations"], [2, "Phase 2 — Mastery"]],
  );
  const parts = AI_ML_TESTING.items.map((i) => i.part);
  assert.deepEqual(parts, [...PART_OF]);
  for (let i = 1; i < parts.length; i++) assert.ok(parts[i] >= parts[i - 1], "the parts go down");
});

test("content/ai-ml-testing has exactly the 47 files, and the route map is AI_ML_TESTING.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${s}.mdx`).sort());
  assert.deepEqual(AI_ML_TESTING.routes, ["/ai-ml-testing/", ...SLUGS.map((s) => `/ai-ml-testing/${s}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/ai-ml-testing-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...AI_ML_TESTING.routes]);
  assert.deepEqual(Object.values(map), [...AI_ML_TESTING.routes]);
});

test("each page has the entry title as # heading, the fixed sections, and voices", () => {
  for (const page of AI_ML_TESTING.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    assert.deepEqual(headings, SHAPE, page.slug);
    const voices = source.match(/^<Voices>$/gm)?.length ?? 0;
    assert.equal(voices, SHAPE.length - 1, `${page.slug}: one <Voices> per section but Key words`);
  }
});

test("every page exports its metadata, a page date, and at least one https source", () => {
  for (const page of AI_ML_TESTING.pages) {
    const source = read(page.slug);
    assert.match(source, /^export const metadata = \{/m, `${page.slug}: metadata`);
    assert.match(source, /^export const page = \{/m, `${page.slug}: page`);
    assert.match(source, /updated: '\d{4}-\d{2}-\d{2}'/, `${page.slug}: updated`);
    assert.match(source, /url: 'https:\/\//, `${page.slug}: an https source`);
  }
});

test("the progress ids are the 47 slugs, under ai-ml-testing-progress", () => {
  assert.equal(AI_ML_TESTING.progress?.storageKey, "ai-ml-testing-progress");
  assert.deepEqual(AI_ML_TESTING.lessonIds, [...SLUGS]);
});

test("precacheUrls includes /ai-ml-testing/ and the 47 page routes", () => {
  const urls = precacheUrls("");
  assert.ok(urls.includes("/ai-ml-testing/"));
  for (const slug of SLUGS) assert.ok(urls.includes(`/ai-ml-testing/${slug}/`), slug);
});

test("buildFlatSearchDocs gives docs with group 'ai ml testing' for every page", () => {
  const docs = buildFlatSearchDocs(
    AI_ML_TESTING,
    AI_ML_TESTING.pages.map((item) => ({ item, source: read(item.slug) })),
  );
  for (const doc of docs) assert.equal(doc.group, "ai ml testing");
  for (const page of AI_ML_TESTING.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
