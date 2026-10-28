import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { HARNESS } from "../lib/harness/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";

const SLUGS = [
  "agent-loop",
  "tool-calling",
  "context-management",
  "checkpointing",
  "permissions-and-sandboxing",
  "guardrails",
];

const dir = new URL("../content/harness/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 6 topic entries in order, with no progress", () => {
  assert.deepEqual(HARNESS.items.map((i) => [i.slug, i.kind]), SLUGS.map((s) => [s, "topic"]));
  assert.equal(HARNESS.progress, undefined);
});

test("content/harness has exactly the 6 files, and the route map is HARNESS.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${s}.mdx`).sort());
  assert.deepEqual(HARNESS.routes, ["/harness/", ...SLUGS.map((s) => `/harness/${s}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/harness-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...HARNESS.routes]);
  assert.deepEqual(Object.values(map), [...HARNESS.routes]);
});

test("each page has the entry title as # heading, the tester tip, and Key words last", () => {
  for (const page of HARNESS.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    assert.deepEqual(headings.slice(-2), ["What a tester can check", "Key words"], page.slug);
  }
});

test("precacheUrls includes /harness/ and the 6 page routes", () => {
  const urls = precacheUrls("");
  for (const route of HARNESS.routes) assert.ok(urls.includes(route), route);
});

test("buildFlatSearchDocs gives docs with group 'harness' for every page", () => {
  const docs = buildFlatSearchDocs(HARNESS, HARNESS.pages.map((item) => ({ item, source: read(item.slug) })));
  for (const doc of docs) assert.equal(doc.group, "harness");
  for (const page of HARNESS.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
