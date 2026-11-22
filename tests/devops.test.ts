import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { DEVOPS } from "../lib/devops/topics.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";
import { voiceBlocks } from "../lib/voice-source.ts";
import { sectionsWithSplits } from "./shape.ts";

const SLUGS = [
  "what-is-devops",
  "git-basics",
  "git-workflows",
  "ci-cd",
  "gitops",
  "docker-basics",
  "docker-images-compose",
  "docker-in-practice",
  "kubernetes-basics",
  "kubernetes-architecture",
  "kubernetes-networking-storage",
  "kubernetes-operations",
  "kubernetes-security-troubleshooting",
  "cloud-concepts",
  "aws-compute-storage",
  "aws-networking",
  "aws-identity-security",
  "aws-data-serverless",
  "terraform-iac",
  "ansible",
  "monitoring-observability",
  "cncf-build-deliver",
  "cncf-runtime-data",
  "cncf-network-security-observability",
];
/** How many topics each part holds, in order. */
const PART_SIZES = [5, 3, 5, 5, 2, 1, 3];

/** The sections of a full page, in order. A long section may be followed by a continuation section. */
const SHAPE = ["What it is", "How it works", "Try it", "How a tester uses it", "Common mistakes", "What a tester can check", "Key words"];

const dir = new URL("../content/devops/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");
const headingsOf = (source: string) => [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
/** The `##` section of a page with this heading, up to the next `##` heading. */
const sectionOf = (source: string, heading: string) => source.split(`\n## ${heading}\n`)[1]?.split(/\n## /)[0] ?? "";

test("there are 24 topic entries in order, with no progress", () => {
  assert.deepEqual(DEVOPS.items.map((i) => [i.slug, i.kind]), SLUGS.map((s) => [s, "topic"]));
  assert.equal(DEVOPS.progress, undefined);
});

test("the topics are in 7 parts, in order, with the listed sizes", () => {
  const groups = DEVOPS.groups();
  assert.equal(groups.length, PART_SIZES.length);
  assert.deepEqual(groups.map((g) => g.items.length), PART_SIZES);
  assert.deepEqual(groups.map((g) => g.part?.num), PART_SIZES.map((_, i) => i + 1));
  for (const g of groups) assert.ok(g.part && g.part.title.length > 0);
});

test("content/devops has exactly the 24 files, and the route map is DEVOPS.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${s}.mdx`).sort());
  assert.deepEqual(DEVOPS.routes, ["/devops/", ...SLUGS.map((s) => `/devops/${s}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/devops-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...DEVOPS.routes]);
  assert.deepEqual(Object.values(map), [...DEVOPS.routes]);
});

test("every page has the entry title as # heading, the fixed sections, voices in each but Key words, and tips with no cites", () => {
  for (const page of DEVOPS.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = headingsOf(source);
    assert.deepEqual(sectionsWithSplits(headings, SHAPE).kept, SHAPE, `${page.slug}: the sections`);
    assert.deepEqual(
      voiceBlocks(source).map((b) => b.heading),
      headings.filter((h) => h !== "Key words"),
      `${page.slug}: one <Voices> block in each section but Key words`,
    );
    assert.ok(sectionOf(source, "What a tester can check").includes('title="Tutorial advice"'), `${page.slug}: the tips are Tutorial advice`);
    assert.ok(!sectionOf(source, "What a tester can check").includes("<Cite"), `${page.slug}: the tips have no cites`);
    assert.ok(!sectionOf(source, "Key words").includes("<Cite"), `${page.slug}: Key words has no cites`);
    assert.match(sectionOf(source, "Key words"), /^\| .+ \|$/m, `${page.slug}: Key words is a table`);
  }
});

test("every <Cite n> of the Technical text has a source, and every source is cited", () => {
  for (const page of DEVOPS.pages) {
    const source = read(page.slug);
    const sources = [...source.matchAll(/^\s+\{ title: /gm)].length;
    const technical = voiceBlocks(source).map((b) => b.technical).join("\n");
    const cites = new Set([...technical.matchAll(/<Cite n=\{(\d+)\} \/>/g)].map((m) => Number(m[1])));
    assert.ok(sources >= 1, `${page.slug}: has sources`);
    assert.deepEqual([...cites].sort((a, b) => a - b), Array.from({ length: sources }, (_, i) => i + 1), `${page.slug}: cites and sources`);
  }
});

test("buildFlatSearchDocs gives docs with group 'devops' for every page", () => {
  const docs = buildFlatSearchDocs(DEVOPS, DEVOPS.pages.map((item) => ({ item, source: read(item.slug) })));
  for (const doc of docs) assert.equal(doc.group, "devops");
  for (const page of DEVOPS.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
