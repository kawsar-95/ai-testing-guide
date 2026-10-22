import { test } from "node:test";
import assert from "node:assert/strict";
import { GROUPS, PAGES } from "../lib/nav.ts";
import { COURSE_CARDS, START_STEPS, WHY_ITEMS, groupLabel } from "../lib/home.ts";
import { sitemapPaths } from "../lib/sitemap.ts";

test("groupLabel is the uppercase title and the count of parts", () => {
  assert.equal(groupLabel("Getting Started", 3), "GETTING STARTED · 3 PARTS");
  assert.equal(groupLabel("Extend", 1), "EXTEND · 1 PART");
});

test("every group gets a label with its own count", () => {
  assert.deepEqual(
    GROUPS.map((g) => groupLabel(g.title, g.pages.length)),
    ["GETTING STARTED · 3 PARTS", "FOUNDATIONS · 4 PARTS", "CONFIGURE · 2 PARTS", "EXTEND · 5 PARTS", "AUTOMATE · 3 PARTS", "CASE STUDY · 6 PARTS"],
  );
});

test("the start-here steps are install, permission modes, how it works", () => {
  assert.deepEqual(
    START_STEPS.map((p) => p.href),
    ["/getting-started/setup/", "/getting-started/permission-modes/", "/foundations/how-claude-code-works/"],
  );
  assert.deepEqual(START_STEPS.map((p) => p.part), [1, 3, 4]);
  for (const step of START_STEPS) assert.ok(PAGES.includes(step));
});

test("the why grid has 6 items with an icon, a title, and a text", () => {
  assert.equal(WHY_ITEMS.length, 6);
  for (const item of WHY_ITEMS) {
    assert.ok(item.icon.length > 0 && item.title.length > 0 && item.text.length > 0, item.title);
  }
});

test("the course cards are the 6 groups, then the 5 modules", () => {
  assert.deepEqual(
    COURSE_CARDS.map((c) => c.n),
    ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  );
  assert.deepEqual(
    COURSE_CARDS.slice(0, 6).map((c) => c.count),
    [3, 4, 2, 5, 3, 6],
  );
  assert.deepEqual(
    COURSE_CARDS.slice(6).map((c) => c.count),
    [12, 11, 15, 20, 29],
  );
  assert.equal(COURSE_CARDS[0].href, "/getting-started/setup/");
  assert.equal(COURSE_CARDS[6].href, "/linux/");
  const paths = new Set(sitemapPaths());
  for (const card of COURSE_CARDS) assert.ok(paths.has(card.href), card.href);
});
