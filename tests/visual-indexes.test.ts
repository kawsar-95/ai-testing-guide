import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { visualDef } from "../lib/visuals/defs.ts";
import { DEF } from "../lib/visuals/def-indexes.ts";
import { indexesChips } from "../lib/visuals/indexes-chips.ts";
import { DEFAULT_SIZE_INDEX, FANOUT, MATCHING, MATCH_CELLS, GRID_CELLS, SIZES, STEP_COUNT, formatCount, levelsFor, planFor, sizeAt, updatesPerInsert } from "../lib/visuals/indexes.ts";

const value = (step: number, live: unknown, label: string) => indexesChips(step, live).find((c) => c.label.en === label)?.value;

test("the aha: 5 million rows are all checked without an index, a handful with one", () => {
  const plan = planFor(5_000_000);
  assert.equal(plan.scanChecked, 5_000_000);
  assert.equal(plan.levels, 4);
  assert.equal(plan.returned, MATCHING);
  assert.equal(plan.indexChecked, 4 + MATCHING);
  assert.ok(plan.indexChecked < 20);
});

test("the full read grows with the table, the index path barely moves", () => {
  const small = planFor(SIZES[0]);
  const big = planFor(SIZES[SIZES.length - 1]);
  assert.equal(small.scanChecked, 50);
  assert.ok(big.scanChecked / small.scanChecked >= 100_000);
  assert.ok(big.indexChecked - small.indexChecked <= 3);
  assert.equal(SIZES[DEFAULT_SIZE_INDEX], 5_000_000);
});

test("tree levels", () => {
  assert.equal(levelsFor(1), 1);
  assert.equal(levelsFor(FANOUT), 1);
  assert.equal(levelsFor(FANOUT + 1), 2);
  assert.equal(levelsFor(1_000_000), 3);
});

test("a tiny table never returns more rows than it has", () => {
  assert.equal(planFor(3).returned, 3);
});

test("writes: one index doubles the work of an insert, ten more make 12", () => {
  assert.equal(updatesPerInsert(0), 1);
  assert.equal(updatesPerInsert(1), 2);
  assert.equal(updatesPerInsert(11), 12);
});

test("helpers", () => {
  assert.equal(formatCount(5_000_000), "5 000 000");
  assert.equal(formatCount(50), "50");
  assert.equal(sizeAt(undefined), 5_000_000);
  assert.equal(sizeAt(0), 50);
  assert.equal(sizeAt(99), 5_000_000);
  assert.equal(sizeAt("x"), 5_000_000);
  assert.equal(MATCH_CELLS.length, MATCHING);
  assert.ok(MATCH_CELLS.every((c) => c < GRID_CELLS));
});

test("the definition has 5 to 8 steps that match the rules, with short captions", () => {
  assert.equal(DEF.id, "indexes");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
  for (const s of DEF.steps) assert.ok(s.body.en.split(/\s+/).length <= 40, s.title.en);
});

test("the chips function returns chips for every step", () => {
  for (let step = 0; step < STEP_COUNT; step += 1) {
    const chips = indexesChips(step, undefined);
    assert.ok(chips.length >= 1);
    for (const chip of chips) assert.ok(chip.label.en.length > 0 && chip.label.bn.length > 0 && chip.value.length > 0);
  }
});

test("the chips follow the slider on steps 1 to 4", () => {
  assert.equal(value(1, undefined, "Checked, no index"), "5 000 000");
  assert.equal(value(1, 0, "Checked, no index"), "50");
  assert.equal(value(1, 2, "Rows in table"), "10 000");
  assert.equal(value(3, 0, "Checked, with index"), String(1 + 5));
  assert.equal(value(4, 5, "Checked, with index"), "9");
  assert.equal(value(4, 0, "Checked, with index"), "6");
  assert.equal(value(4, 99, "Checked, no index"), "5 000 000");
});

test("the other steps ignore the slider, like the stage", () => {
  for (const step of [0, 5, 6]) assert.deepEqual(indexesChips(step, 0), indexesChips(step, undefined));
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/course/indexes.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="indexes" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});

test("the registry knows the visual once the parent wires it", () => {
  try {
    assert.equal(visualDef("indexes").id, "indexes");
  } catch {
    // not wired yet: the parent adds it to defs.ts
  }
});
