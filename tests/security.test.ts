import { sectionsWithSplits } from "./shape.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { SECURITY } from "../lib/security/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";
import { voiceBlocks } from "../lib/voice-source.ts";

/** The 8 topics, in the order of the 8 modules of the course curriculum. */
const SLUGS = [
  "security-basics-and-lab",
  "network-scanning-and-hardening",
  "web-application-security",
  "api-auth-database-security",
  "ai-assisted-security-testing",
  "devsecops-automation",
  "cyber-law-and-data-protection",
  "pentest-capstone",
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

const dir = new URL("../content/security/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");
const CITE = /<Cite n=\{(\d+)\} \/>/g;

test("there are 8 topic entries in curriculum order", () => {
  assert.deepEqual(SECURITY.items.map((i) => [i.slug, i.kind]), SLUGS.map((s) => [s, "topic"]));
});

test("content/security has exactly the 8 files, and the route map is SECURITY.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${s}.mdx`).sort());
  assert.deepEqual(SECURITY.routes, ["/security/", ...SLUGS.map((s) => `/security/${s}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/security-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...SECURITY.routes]);
  assert.deepEqual(Object.values(map), [...SECURITY.routes]);
});

test("each page has the entry title as # heading, the fixed sections, and voices", () => {
  for (const page of SECURITY.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    const { kept, extras } = sectionsWithSplits(headings, SHAPE);
    assert.deepEqual(kept, SHAPE, page.slug);
    const voices = source.match(/^<Voices>$/gm)?.length ?? 0;
    assert.equal(voices, SHAPE.length - 1 + extras, `${page.slug}: one <Voices> per section but Key words`);
  }
});

test("every <Cite n> of the Technical text has a source, every source is cited, and every source is https", () => {
  for (const page of SECURITY.pages) {
    const source = read(page.slug);
    const urls = [...source.matchAll(/^\s+\{ title: .*url: '([^']+)'/gm)].map((m) => m[1]);
    assert.ok(urls.length >= 1, `${page.slug}: has sources`);
    for (const url of urls) assert.match(url, /^https:\/\//, `${page.slug}: ${url}`);
    const technical = voiceBlocks(source).map((block) => block.technical).join("\n");
    const cites = new Set([...technical.matchAll(CITE)].map((m) => Number(m[1])));
    assert.deepEqual([...cites].sort((a, b) => a - b), Array.from({ length: urls.length }, (_, i) => i + 1), `${page.slug}: cites and sources`);
  }
});

test("What a tester can check is a Tutorial advice tip with no cites in any voice", () => {
  for (const page of SECURITY.pages) {
    const block = voiceBlocks(read(page.slug)).find((b) => b.heading === "What a tester can check");
    assert.ok(block, page.slug);
    for (const panel of [block.technical, block.layman, block.bangla]) {
      assert.match(panel, /<Callout type="tip" title="Tutorial advice">/, page.slug);
      assert.doesNotMatch(panel, /<Cite /, `${page.slug}: no cites in the advice`);
    }
  }
});

test("the progress ids are the 8 slugs, under security-progress", () => {
  assert.equal(SECURITY.progress?.storageKey, "security-progress");
  assert.deepEqual(SECURITY.lessonIds, [...SLUGS]);
});

test("precacheUrls includes /security/ and the 8 page routes", () => {
  const urls = precacheUrls("");
  assert.ok(urls.includes("/security/"));
  for (const slug of SLUGS) assert.ok(urls.includes(`/security/${slug}/`), slug);
});

test("buildFlatSearchDocs gives docs with group 'security' for every page", () => {
  const docs = buildFlatSearchDocs(
    SECURITY,
    SECURITY.pages.map((item) => ({ item, source: read(item.slug) })),
  );
  for (const doc of docs) assert.equal(doc.group, "security");
  for (const page of SECURITY.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
