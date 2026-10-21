import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { getOutline } from "../lib/outline.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { buildFlatSearchDocs, createIndex, runSearch } from "../lib/search.ts";
import { SYSTEM_DESIGN } from "../lib/system-design/cases.ts";

const SLUGS = [
  "kafka",
  "google-search",
  "youtube",
  "google-docs",
  "whatsapp",
  "airbnb",
  "spotify",
  "slack",
  "reddit",
  "bluesky",
  "twitter",
  "uber-eta",
  "url-shortener",
  "stock-exchange",
  "payment-system",
];

const dir = new URL("../content/system-design/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${slug}.mdx`, dir), "utf8");

test("there are 15 cases in order, numbered 1 to 15, with unique slugs", () => {
  assert.deepEqual(
    SYSTEM_DESIGN.pages.map((c) => c.slug),
    SLUGS,
  );
  assert.deepEqual(
    SYSTEM_DESIGN.pages.map((c) => c.number),
    SLUGS.map((_, i) => i + 1),
  );
  assert.equal(new Set(SYSTEM_DESIGN.pages.map((c) => c.title)).size, SYSTEM_DESIGN.pages.length);
});

test("each case href is /system-design/<slug>/ and SYSTEM_DESIGN.get finds it", () => {
  assert.equal(SYSTEM_DESIGN.home, "/system-design/");
  for (const c of SYSTEM_DESIGN.pages) {
    assert.equal(c.href, `/system-design/${c.slug}/`);
    assert.equal(SYSTEM_DESIGN.get(c.slug), c);
  }
  assert.equal(SYSTEM_DESIGN.get("nope"), undefined);
});

test("SYSTEM_DESIGN.routes is the home then the 15 case hrefs, and the route map has the same routes", () => {
  assert.deepEqual(SYSTEM_DESIGN.routes, [SYSTEM_DESIGN.home, ...SYSTEM_DESIGN.pages.map((c) => c.href)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/system-design-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.values(map), [...SYSTEM_DESIGN.routes]);
});

test("content/system-design has exactly one MDX file for each case", () => {
  assert.ok(existsSync(dir), "content/system-design does not exist");
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${s}.mdx`).sort());
});

test("every case MDX exports metadata and page, has the case title as its # heading, and renders <PageMeta />", () => {
  for (const c of SYSTEM_DESIGN.pages) {
    const source = read(c.slug);
    assert.match(source, /^export const metadata = \{/m, `${c.slug}.mdx has no metadata`);
    assert.match(source, /^export const page = \{/m, `${c.slug}.mdx has no page`);
    assert.match(source, new RegExp(`^# ${c.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "m"), c.slug);
    assert.match(source, /^<PageMeta \/>$/m, `${c.slug}.mdx has no <PageMeta />`);
  }
});

test("buildFlatSearchDocs gives an intro doc and one doc per ## section, with group 'system design'", () => {
  const docs = buildFlatSearchDocs(SYSTEM_DESIGN, SYSTEM_DESIGN.pages.map((item) => ({ item, source: read(item.slug) })));
  for (const c of SYSTEM_DESIGN.pages) {
    const own = docs.filter((doc) => doc.page === c.title);
    const sections = getOutline("system-design", c.slug).filter((item) => item.level === 2);
    assert.equal(own[0].href, c.href);
    assert.equal(own.length, sections.length + 1, c.href);
  }
  for (const doc of docs) {
    assert.equal(doc.group, "system design");
    assert.equal(doc.part, null);
  }
  const hit = runSearch(createIndex(docs), "Kafka").find((h) => h.href.startsWith("/system-design/kafka/"));
  assert.ok(hit);
});

test("precacheUrls includes /system-design/ and every case route", () => {
  for (const basePath of ["", "/repo"]) {
    const urls = precacheUrls(basePath);
    for (const route of SYSTEM_DESIGN.routes) assert.ok(urls.includes(`${basePath}${route}`), route);
    assert.equal(new Set(urls).size, urls.length, "no duplicates");
  }
});
