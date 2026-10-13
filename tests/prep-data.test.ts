import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { AREAS, PREP_HOME, PREP_ROUTES, getArea } from "../lib/prep/areas.ts";
import { ALL_ITEMS, ITEMS_BY_AREA, itemsOf } from "../lib/prep/items.ts";

const contentFiles = readdirSync(new URL("../content/prep", import.meta.url))
  .filter((file) => file.endsWith(".ts"))
  .map((file) => file.replace(/\.ts$/, ""))
  .sort();

test("area slugs are unique and match content/prep/*.ts", () => {
  const slugs = AREAS.map((a) => a.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.equal(slugs.length, 13);
  assert.deepEqual([...slugs].sort(), contentFiles);
});

test("the areas are in the order of the spec", () => {
  assert.deepEqual(
    AREAS.map((a) => a.slug),
    [
      "interview-prep",
      "intern",
      "junior",
      "mid-level",
      "senior",
      "leadership",
      "programming-problems",
      "practical-tasks",
      "tools-mastery",
      "hands-on-automation",
      "hr-soft-skills",
      "realistic-scenarios",
      "mcq-test",
    ],
  );
  assert.deepEqual(
    AREAS.map((a) => a.title),
    [
      "Interview Preparation",
      "Intern",
      "Junior",
      "Mid-Level",
      "Senior",
      "Leadership",
      "Programming Problems",
      "Practical Tasks",
      "Tools Mastery",
      "Hands-on Automation",
      "HR & Soft Skills",
      "Realistic Scenarios",
      "MCQ Test",
    ],
  );
});

test("every area has a description and the kind of the spec", () => {
  const task = ["interview-prep", "practical-tasks", "hands-on-automation"];
  for (const area of AREAS) {
    assert.ok(area.description.trim().length > 0, area.slug);
    const expected = area.slug === "mcq-test" ? "mcq" : task.includes(area.slug) ? "task" : "qa";
    assert.equal(area.kind, expected, area.slug);
  }
});

test("every area href is /prep/<slug>/ and PREP_ROUTES is home plus the hrefs", () => {
  assert.equal(PREP_HOME, "/prep/");
  for (const area of AREAS) assert.equal(area.href, `/prep/${area.slug}/`);
  assert.deepEqual(PREP_ROUTES, [PREP_HOME, ...AREAS.map((a) => a.href)]);
  assert.equal(PREP_ROUTES.length, 14);
});

test("getArea finds an area and rejects unknown slugs", () => {
  assert.equal(getArea("mid-level")?.title, "Mid-Level");
  assert.equal(getArea("nope"), undefined);
  assert.equal(getArea(""), undefined);
});

test("ITEMS_BY_AREA has every area and ALL_ITEMS is the flat list in area order", () => {
  assert.deepEqual(Object.keys(ITEMS_BY_AREA), AREAS.map((a) => a.slug));
  assert.deepEqual(ALL_ITEMS, AREAS.flatMap((a) => itemsOf(a.slug)));
});

test("item ids are unique, start with the area slug, and match <slug>-NNN", () => {
  const seen = new Set<string>();
  for (const area of AREAS) {
    for (const item of itemsOf(area.slug)) {
      assert.match(item.id, new RegExp(`^${area.slug}-\\d{3}$`), item.id);
      assert.ok(!seen.has(item.id), `duplicate id ${item.id}`);
      seen.add(item.id);
    }
  }
});

test("each item has the kind of its area", () => {
  for (const area of AREAS) {
    for (const item of itemsOf(area.slug)) assert.equal(item.kind, area.kind, item.id);
  }
});

test("each mcq answer index is inside options and has 2 to 5 options", () => {
  for (const item of ALL_ITEMS) {
    if (item.kind !== "mcq") continue;
    assert.ok(item.options.length >= 2 && item.options.length <= 5, item.id);
    assert.ok(Number.isInteger(item.answer), item.id);
    assert.ok(item.answer >= 0 && item.answer < item.options.length, item.id);
  }
});

test("each qa item has 4 non-empty text fields and each task item has title and details", () => {
  for (const item of ALL_ITEMS) {
    if (item.kind === "qa") {
      for (const field of [item.question, item.template, item.example, item.behind]) {
        assert.ok(field.trim().length > 0, item.id);
      }
    } else if (item.kind === "task") {
      assert.ok(item.title.trim().length > 0, item.id);
      assert.ok(item.details.trim().length > 0, item.id);
    }
  }
});

test("every source is an https URL, and every mcq item has one", () => {
  for (const item of ALL_ITEMS) {
    if (item.source !== undefined) assert.match(item.source, /^https:\/\/\S+$/, item.id);
    if (item.kind === "mcq") assert.ok(item.source, `${item.id} has no source`);
  }
});

test("only realistic-scenarios items have a level, and it is easy, medium or hard", () => {
  for (const area of AREAS) {
    for (const item of itemsOf(area.slug)) {
      const level = item.kind === "qa" ? item.level : undefined;
      if (area.slug === "realistic-scenarios") {
        if (level !== undefined) assert.ok(["easy", "medium", "hard"].includes(level), item.id);
      } else {
        assert.equal(level, undefined, `${item.id} has a level`);
      }
    }
  }
});

test("prep-route-map.json is the identity map of PREP_ROUTES", () => {
  const map = JSON.parse(readFileSync(new URL("../scripts/prep-route-map.json", import.meta.url), "utf8")) as Record<
    string,
    string
  >;
  assert.deepEqual(Object.keys(map), [...PREP_ROUTES]);
  assert.deepEqual(Object.values(map), [...PREP_ROUTES]);
  for (const [key, value] of Object.entries(map)) assert.equal(key, value);
});
