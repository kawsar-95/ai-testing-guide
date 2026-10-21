import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { defineFlatModule, type FlatModuleDef } from "../lib/modules/flat.ts";
import { ARCHITECTURE, FLAT_MODULES, PROGRESS_MODULES } from "../lib/modules/registry.ts";

const ui: FlatModuleDef["ui"] = {
  siteTitle: "Fake",
  description: "",
  eyebrow: (count) => `FAKE ${count}`,
  heading: "Fake",
  lede: "",
  sourceNote: "",
  itemsHeading: "ITEMS",
  itemsHeadingId: "items-heading",
  itemEyebrow: (n) => `ITEM ${n}`,
  itemNav: "Fake items",
  allItems: "All items",
  previousItem: "Previous",
  nextItem: "Next",
  sidebarNav: "Fake",
  sidebarItemLabel: (n) => `ITEM ${n}`,
  headerLink: "Fake",
  crossTo: "Fake",
};

const fakeDef = {
  id: "fake",
  label: "Fake",
  searchGroup: "fake",
  entries: [
    { slug: "a", title: "A", description: "", kind: "topic" },
    { slug: "b", title: "B", description: "", kind: "link", href: "/other/b/" },
    { slug: "c", title: "C", description: "", kind: "topic" },
    { slug: "d", title: "D", description: "", kind: "practice" },
  ],
  progress: { storageKey: "fake-progress" },
  ui,
} satisfies FlatModuleDef;

const fake = defineFlatModule(fakeDef);
const noProgress = defineFlatModule({ ...fakeDef, progress: undefined });
const slugs = (n: { previous?: { slug: string }; next?: { slug: string } }) => [n.previous?.slug, n.next?.slug];

test("items are numbered from 1 and a link item keeps its own href", () => {
  assert.deepEqual(
    fake.items.map((i) => [i.slug, i.number, i.href]),
    [
      ["a", 1, "/fake/a/"],
      ["b", 2, "/other/b/"],
      ["c", 3, "/fake/c/"],
      ["d", 4, "/fake/d/"],
    ],
  );
});

test("pages and routes leave out link items", () => {
  assert.deepEqual(
    fake.pages.map((p) => p.slug),
    ["a", "c", "d"],
  );
  assert.deepEqual(fake.routes, ["/fake/", "/fake/a/", "/fake/c/", "/fake/d/"]);
});

test("get finds a page, and gives undefined for a link item or an unknown slug", () => {
  assert.equal(fake.get("c")?.number, 3);
  assert.equal(fake.get("b"), undefined);
  assert.equal(fake.get("nope"), undefined);
});

test("neighbours skip link items and stop at the edges", () => {
  assert.deepEqual(slugs(fake.neighbours("a")), [undefined, "c"]);
  assert.deepEqual(slugs(fake.neighbours("c")), ["a", "d"]);
  assert.deepEqual(slugs(fake.neighbours("d")), ["c", undefined]);
});

test("lessonIds are the topic slugs, and empty without progress", () => {
  assert.deepEqual(fake.lessonIds, ["a", "c"]);
  assert.deepEqual(noProgress.lessonIds, []);
});

test("a link entry without href throws", () => {
  assert.throws(() =>
    defineFlatModule({ ...fakeDef, entries: [{ slug: "x", title: "X", description: "", kind: "link" }] }),
  );
});

test("the registry is System Design, then Architecture, with unique ids", () => {
  assert.deepEqual(
    FLAT_MODULES.map((m) => m.id),
    ["system-design", "architecture"],
  );
  assert.equal(new Set(FLAT_MODULES.map((m) => m.id)).size, FLAT_MODULES.length);
  assert.deepEqual(
    PROGRESS_MODULES.map((m) => m.id),
    ["architecture"],
  );
});

for (const m of FLAT_MODULES) {
  test(`${m.id}: one MDX file for each page, and the route map has the same routes`, () => {
    const files = readdirSync(new URL(`../content/${m.id}/`, import.meta.url))
      .map((f) => f.replace(/\.mdx$/, ""))
      .sort();
    assert.deepEqual(files, m.pages.map((p) => p.slug).sort());
    const map: Record<string, string> = JSON.parse(
      readFileSync(new URL(`../scripts/${m.id}-route-map.json`, import.meta.url), "utf8"),
    );
    assert.deepEqual(Object.values(map), [...m.routes]);
  });
}

test("Architecture: the next page of observability is practice, and practice has no next page", () => {
  assert.equal(ARCHITECTURE.neighbours("observability").next?.slug, "practice");
  assert.equal(ARCHITECTURE.neighbours("practice").next, undefined);
  assert.equal(ARCHITECTURE.neighbours("why-system-design").previous, undefined);
});
