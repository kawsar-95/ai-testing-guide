import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { GROUPS, PAGES } from "../lib/nav.ts";
import { headingsFromSource } from "../lib/headings.ts";
import { voiceBlocks } from "../lib/voice-source.ts";

const SLUGS = [
  "claude-for-qa",
  "qa-workspace",
  "project-setup",
  "requirements",
  "blast-radius",
  "test-charters",
  "test-execution",
  "multi-agent-qa",
  "playwright-with-claude",
  "playwright-framework",
];
/** The last three `##` sections of every page, in this order. */
const TAIL = ["Practice", "Common mistakes", "Key words"];

const dir = new URL("../content/agentic-qa/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");
const group = GROUPS.find((g) => g.slug === "agentic-qa");
const h2 = (source: string) => headingsFromSource(source).filter((h) => h.level === 2).map((h) => h.title);

test("Agentic QA is the last tutorial group: 10 pages in order, parts 25 to 34", () => {
  assert.ok(group, "the group exists");
  assert.equal(GROUPS[GROUPS.length - 1].slug, "agentic-qa");
  assert.deepEqual(group.pages.map((p) => p.slug), SLUGS);
  assert.deepEqual(group.pages.map((p) => p.part), SLUGS.map((_, i) => 25 + i));
  assert.equal(PAGES[PAGES.length - 1].href, "/agentic-qa/playwright-framework/");
});

test("content/agentic-qa has exactly the 10 files, and route-map.json has each route", () => {
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${s}.mdx`).sort());
  const map: Record<string, string> = JSON.parse(readFileSync(new URL("../scripts/route-map.json", import.meta.url), "utf8"));
  for (const slug of SLUGS) assert.equal(map[`/agentic-qa/${slug}/`], `/agentic-qa/${slug}/`, slug);
});

test("each page has its nav title as the # heading and the metadata title", () => {
  for (const page of group!.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const title = source.match(/^\s+title: '((?:[^'\\]|\\.)+)',$/m)?.[1]?.replace(/\\'/g, "'");
    assert.equal(title, page.title, `${page.slug}: metadata title`);
  }
});

test("each page has 4 or more topic sections, then Practice, Common mistakes, and Key words", () => {
  for (const slug of SLUGS) {
    const heads = h2(read(slug));
    assert.deepEqual(heads.slice(-3), TAIL, `${slug}: the last three sections`);
    assert.ok(heads.length - TAIL.length >= 4, `${slug}: ${heads.length - TAIL.length} topic sections`);
    for (const t of TAIL) assert.equal(heads.filter((h) => h === t).length, 1, `${slug}: one ## ${t}`);
  }
});

test("every ## section except Key words has one <Voices> block", () => {
  for (const slug of SLUGS) {
    const source = read(slug);
    const voiced = voiceBlocks(source).map((b) => b.heading);
    assert.deepEqual(voiced, h2(source).filter((h) => h !== "Key words"), slug);
  }
});

test("every <Cite n> has a source, and the Technical text cites every source", () => {
  for (const slug of SLUGS) {
    const source = read(slug);
    const sources = [...source.matchAll(/^\s+\{ title: /gm)].length;
    const all = new Set([...source.matchAll(/<Cite n=\{(\d+)\} \/>/g)].map((m) => Number(m[1])));
    const technical = new Set(voiceBlocks(source).flatMap((b) => [...b.technical.matchAll(/<Cite n=\{(\d+)\} \/>/g)].map((m) => Number(m[1]))));
    const expected = Array.from({ length: sources }, (_, i) => i + 1);
    assert.ok(sources >= 1, `${slug}: has sources`);
    assert.deepEqual([...all].sort((a, b) => a - b), expected, `${slug}: cites and sources`);
    assert.deepEqual([...technical].sort((a, b) => a - b), expected, `${slug}: Technical cites every source`);
  }
});
