import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { defineFlatModule, type FlatModuleDef, type FlatModuleUI, type FlatProgressUI } from "../lib/modules/flat.ts";
import { cachedBy } from "../lib/modules/hook-cache.ts";
import { ARCHITECTURE, FLAT_MODULES, PROGRESS_MODULES } from "../lib/modules/registry.ts";

const ui: FlatModuleUI & FlatProgressUI = {
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
  overallLabel: "Done",
  summaryText: (done, total) => `${done} of ${total}`,
  percentText: (v) => `${v}%`,
  markDone: "Mark as done",
  markedDone: "Done",
  sidebarDone: "done",
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
const e = (slug: string) => ({ slug, title: slug, description: "", kind: "topic" as const });
const partsDef = {
  ...fakeDef,
  parts: [
    { num: 0, title: "Zero" },
    { num: 1, title: "One" },
    { num: 2, title: "Two" },
  ],
  entries: [
    { ...e("a"), part: 0 },
    { slug: "b", title: "B", description: "", kind: "link", href: "/other/b/", part: 1 },
    { ...e("c"), part: 1 },
  ],
} satisfies FlatModuleDef;
const withParts = defineFlatModule(partsDef);
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

test("lessonIds are the topic and link slugs, and empty without progress", () => {
  assert.deepEqual(fake.lessonIds, ["a", "b", "c"]);
  assert.deepEqual(noProgress.lessonIds, []);
  assert.deepEqual(ARCHITECTURE.lessonIds, ARCHITECTURE.pages.filter((p) => p.kind === "topic").map((p) => p.slug));
  assert.equal(ARCHITECTURE.lessonIds.length, 19);
});

test("a module with parts rejects a missing, unknown, or decreasing part", () => {
  assert.throws(() => defineFlatModule({ ...partsDef, entries: [{ ...e("a"), part: undefined }] }), /part/);
  assert.throws(() => defineFlatModule({ ...partsDef, entries: [{ ...e("a"), part: 9 }] }), /part/);
  assert.throws(
    () => defineFlatModule({ ...partsDef, entries: [{ ...e("a"), part: 1 }, { ...e("b"), part: 0 }] }),
    /part/,
  );
});

test("a module with parts rejects part nums that are not unique and ascending", () => {
  const [p0, p1] = partsDef.parts;
  assert.throws(() => defineFlatModule({ ...partsDef, parts: [p1, p0] }), /part/);
  assert.throws(() => defineFlatModule({ ...partsDef, parts: [p0, { ...p1, num: p0.num }] }), /part/);
});

test("groups follow the parts, skip empty parts, and give one null group without parts", () => {
  assert.deepEqual(
    withParts.groups().map((g) => [g.part?.num, g.items.map((i) => i.slug)]),
    [
      [0, ["a"]],
      [1, ["b", "c"]],
    ],
  );
  assert.deepEqual(
    fake.groups().map((g) => g.part),
    [null],
  );
  assert.deepEqual(
    fake.groups()[0].items.map((i) => i.slug),
    ["a", "b", "c", "d"],
  );
});

test("cachedBy gives the same hook for the same storage key", () => {
  let made = 0;
  const hookOf = cachedBy((key) => ({ key, n: ++made }));
  assert.equal(hookOf("k"), hookOf("k"));
  assert.notEqual(hookOf("k"), hookOf("other"));
  assert.equal(made, 2);
});

test("progressHook uses cachedBy", () => {
  assert.match(readFileSync("components/modules/useModuleProgress.ts", "utf8"), /cachedBy\(createUseProgress\)/);
});

test("every module with progress has the progress strings", () => {
  for (const m of PROGRESS_MODULES) {
    for (const key of ["overallLabel", "summaryText", "percentText", "markDone", "markedDone", "sidebarDone"] as const) {
      assert.ok(m.ui[key], `${m.id}: ui.${key}`);
    }
  }
});

test("a link entry without href throws", () => {
  assert.throws(() =>
    defineFlatModule({ ...fakeDef, entries: [{ slug: "x", title: "X", description: "", kind: "link" }] }),
  );
});

test("the registry is System Design, Architecture, the Course, k6, then AI Harnesses, with unique ids", () => {
  assert.deepEqual(
    FLAT_MODULES.map((m) => m.id),
    ["system-design", "architecture", "course", "k6", "harness"],
  );
  assert.equal(new Set(FLAT_MODULES.map((m) => m.id)).size, FLAT_MODULES.length);
  assert.deepEqual(
    PROGRESS_MODULES.map((m) => m.id),
    ["architecture", "course", "k6"],
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

test("the search index route has a flatDocs call for each flat module", () => {
  const constOf: Record<string, string> = { "system-design": "SYSTEM_DESIGN", architecture: "ARCHITECTURE", course: "COURSE", k6: "K6", harness: "HARNESS" };
  const ids = FLAT_MODULES.map((m) => m.id);
  assert.deepEqual(Object.keys(constOf).sort(), [...ids].sort(), "add the new module to constOf");
  const route = readFileSync("app/search-index.json/route.ts", "utf8");
  for (const id of ids) assert.ok(route.includes(`flatDocs(${constOf[id]})`), `flatDocs(${constOf[id]})`);
});
