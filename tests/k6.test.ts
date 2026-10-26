import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { K6 } from "../lib/k6/topics.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs } from "../lib/search.ts";

/** Spec §3: slug and part. Every entry is a topic. */
const ENTRIES = [
  ["what-is-performance-testing", 1],
  ["performance-test-types", 1],
  ["choosing-a-tool", 1],
  ["what-is-k6", 2],
  ["install-and-first-script", 2],
  ["reading-results", 2],
  ["test-lifecycle", 2],
  ["vus-duration-iterations", 3],
  ["stages-and-checks", 3],
  ["thresholds", 3],
  ["scenarios-and-executors", 3],
  ["tags-and-groups", 4],
  ["api-flows", 4],
  ["env-and-data", 4],
  ["custom-metrics", 4],
  ["reports-and-dashboard", 5],
  ["influxdb-and-grafana", 5],
  ["k6-test-types", 5],
  ["k6-in-ci", 5],
] as const;

const dir = new URL("../content/k6/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 19 entries in spec order, with their parts", () => {
  assert.deepEqual(
    K6.items.map((i) => [i.slug, i.part, i.kind]),
    ENTRIES.map((e) => [e[0], e[1], "topic"]),
  );
  assert.deepEqual(
    K6.groups().map((g) => [g.part?.num, g.items.length]),
    [[1, 3], [2, 4], [3, 4], [4, 4], [5, 4]],
  );
});

test("content/k6 has exactly the 19 files, and the route map is K6.routes", () => {
  assert.deepEqual(readdirSync(dir).sort(), ENTRIES.map((e) => `${e[0]}.mdx`).sort());
  assert.deepEqual(K6.routes, ["/k6/", ...ENTRIES.map((e) => `/k6/${e[0]}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/k6-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...K6.routes]);
  assert.deepEqual(Object.values(map), [...K6.routes]);
});

test("each k6 page has the entry title as # heading and Key words last", () => {
  for (const page of K6.pages) {
    const source = read(page.slug);
    assert.ok(source.split("\n").includes(`# ${page.title}`), `${page.slug}: # ${page.title}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    assert.equal(headings.at(-1), "Key words", page.slug);
  }
});

test("each MdxImage src in content/k6 is a file in public/", () => {
  for (const [slug] of ENTRIES) {
    for (const m of read(slug).matchAll(/src="(\/images\/k6\/[^"]+)"/g)) {
      assert.ok(existsSync(new URL(`../public${m[1]}`, import.meta.url)), `${slug}: ${m[1]}`);
    }
  }
});

test("the progress ids are the 19 slugs, under k6-progress", () => {
  assert.equal(K6.progress?.storageKey, "k6-progress");
  assert.deepEqual(K6.lessonIds, ENTRIES.map((e) => e[0]));
});

test("precacheUrls includes /k6/ and the 19 page routes", () => {
  const urls = precacheUrls("");
  assert.ok(urls.includes("/k6/"));
  for (const [slug] of ENTRIES) assert.ok(urls.includes(`/k6/${slug}/`), slug);
});

test("buildFlatSearchDocs gives docs with group 'k6' for every page", () => {
  const docs = buildFlatSearchDocs(K6, K6.pages.map((item) => ({ item, source: read(item.slug) })));
  assert.ok(docs.length >= K6.pages.length);
  for (const doc of docs) assert.equal(doc.group, "k6");
  for (const page of K6.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
});
