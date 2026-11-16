import { sectionsWithSplits } from "./shape.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { SDET } from "../lib/sdet/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";
import { sitemapPaths } from "../lib/sitemap.ts";
import { voiceBlocks } from "../lib/voice-source.ts";

/** The 20 steps in the order of the curriculum, with the kind of each. */
const STEPS = [
  ["manual-testing", "link"],
  ["api-testing-postman", "topic"],
  ["javascript", "topic"],
  ["typescript", "topic"],
  ["sql-mysql", "topic"],
  ["problem-solving", "topic"],
  ["backend-node-express", "topic"],
  ["frontend-nextjs", "topic"],
  ["docker", "link"],
  ["system-design", "link"],
  ["performance-testing", "link"],
  ["system-design-in-practice", "link"],
  ["linux", "link"],
  ["security-testing", "topic"],
  ["aws", "link"],
  ["playwright-ui", "topic"],
  ["playwright-api", "topic"],
  ["ci-cd", "link"],
  ["interview-preparation", "link"],
  ["real-project", "link"],
] as const;
const TOPICS = STEPS.filter(([, kind]) => kind === "topic").map(([slug]) => slug);
/** How many steps each part holds, in order. */
const PART_SIZES = [2, 4, 3, 3, 3, 3, 2];

/** The fixed page shape (the shape of the DevOps & Cloud full pages). Every section but Key words has <Voices>. */
const SHAPE = [
  "What it is",
  "How it works",
  "Try it",
  "How a tester uses it",
  "Common mistakes",
  "What a tester can check",
  "Key words",
];

const dir = new URL("../content/sdet/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 20 steps in curriculum order: 10 pages and 10 links", () => {
  assert.deepEqual(SDET.items.map((i) => [i.slug, i.kind]), STEPS.map(([slug, kind]) => [slug, kind]));
  assert.equal(SDET.pages.length, 10);
});

test("the steps are in 7 parts, in order, with the listed sizes", () => {
  const groups = SDET.groups();
  assert.deepEqual(groups.map((g) => g.items.length), PART_SIZES);
  assert.deepEqual(groups.map((g) => g.part?.num), PART_SIZES.map((_, i) => i + 1));
  for (const g of groups) assert.ok(g.part && g.part.title.length > 0);
});

test("every link step points to a page or a module home of this site", () => {
  const paths = new Set(sitemapPaths());
  for (const item of SDET.items.filter((i) => i.kind === "link")) {
    assert.ok(paths.has(item.href), `${item.slug}: ${item.href}`);
    assert.ok(!item.href.startsWith("/sdet/"), `${item.slug}: a link leaves the module`);
  }
});

test("content/sdet has exactly the 10 files, and the route map is SDET.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), TOPICS.map((s) => `${s}.mdx`).sort());
  assert.deepEqual(SDET.routes, ["/sdet/", ...TOPICS.map((s) => `/sdet/${s}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/sdet-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...SDET.routes]);
  assert.deepEqual(Object.values(map), [...SDET.routes]);
});

test("each page has the entry title as # heading, the fixed sections, and voices", () => {
  for (const page of SDET.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    assert.ok(source.includes(`title: '${page.title}'`), `${page.slug}: metadata title`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    const { kept, extras } = sectionsWithSplits(headings, SHAPE);
    assert.deepEqual(kept, SHAPE, page.slug);
    assert.equal(voiceBlocks(source).length, SHAPE.length - 1 + extras, `${page.slug}: one <Voices> per section but Key words`);
  }
});

test("every <Cite n> of the Technical text has a source, and every source is cited", () => {
  for (const page of SDET.pages) {
    const source = read(page.slug);
    const sources = [...source.matchAll(/^\s+\{ title: /gm)].length;
    const technical = voiceBlocks(source).map((block) => block.technical).join("\n");
    const cites = new Set([...technical.matchAll(/<Cite n=\{(\d+)\} \/>/g)].map((m) => Number(m[1])));
    assert.ok(sources >= 1, `${page.slug}: has sources`);
    assert.deepEqual([...cites].sort((a, b) => a - b), Array.from({ length: sources }, (_, i) => i + 1), `${page.slug}: cites and sources`);
  }
});

test("the advice section cites nothing and says that it is the tutorial's advice", () => {
  for (const page of SDET.pages) {
    const block = voiceBlocks(read(page.slug)).find((b) => b.heading === "What a tester can check");
    assert.ok(block, `${page.slug}: What a tester can check`);
    assert.doesNotMatch(block.technical, /<Cite /, `${page.slug}: no cites in the advice`);
    assert.match(block.technical, /title="Tutorial advice"/, `${page.slug}: a Tutorial advice callout`);
  }
});

test("the progress ids are the 20 step slugs, links too, under sdet-progress", () => {
  assert.equal(SDET.progress?.storageKey, "sdet-progress");
  assert.deepEqual(SDET.lessonIds, STEPS.map(([slug]) => slug));
});

test("precacheUrls includes /sdet/ and the 10 page routes", () => {
  const urls = precacheUrls("");
  for (const route of SDET.routes) assert.ok(urls.includes(route), route);
});

test("buildFlatSearchDocs gives docs with group 'sdet' for every page", () => {
  const docs = buildFlatSearchDocs(SDET, SDET.pages.map((item) => ({ item, source: read(item.slug) })));
  for (const doc of docs) assert.equal(doc.group, "sdet");
  for (const page of SDET.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
