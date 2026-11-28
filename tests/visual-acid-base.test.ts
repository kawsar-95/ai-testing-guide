import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DEF } from "../lib/visuals/def-acid-base.ts";
import { acidBaseChips } from "../lib/visuals/acid-base-chips.ts";
import { STEP_COUNT, sceneFor, toMode } from "../lib/visuals/acid-base.ts";

test("the aha: after the failure, a transaction keeps 100 and 20, without one the total drops to 80", () => {
  const withTx = sceneFor(4, "transaction");
  assert.deepEqual([withTx.ana, withTx.ben, withTx.total], [100, 20, 120]);
  assert.equal(withTx.cancelled, true);
  const plain = sceneFor(4, "plain");
  assert.deepEqual([plain.ana, plain.ben, plain.total], [60, 20, 80]);
  assert.equal(plain.cancelled, false);
});

test("halfway through, only the plain mode shows Ana at 60", () => {
  assert.equal(sceneFor(2, "transaction").ana, 100);
  assert.equal(sceneFor(2, "plain").ana, 60);
});

test("with no failure both modes end at 60 and 60", () => {
  for (const mode of ["transaction", "plain"] as const) {
    const s = sceneFor(5, mode);
    assert.deepEqual([s.ana, s.ben, s.total, s.saved], [60, 60, 120, 2]);
  }
});

test("the start is the same in both modes", () => {
  assert.deepEqual(sceneFor(0, "plain"), sceneFor(0, "transaction"));
  assert.equal(sceneFor(0).total, 120);
});

test("toMode falls back to the default", () => {
  assert.equal(toMode(undefined), "transaction");
  assert.equal(toMode(7), "transaction");
  assert.equal(toMode("plain"), "plain");
});

test("the definition has 5 to 8 steps that match the scenes", () => {
  assert.equal(DEF.id, "acid-base");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
  for (const s of DEF.steps) assert.ok(s.body.en.split(/\s+/).length <= 40);
});

test("the chips function returns chips for every step", () => {
  for (let step = 0; step < STEP_COUNT; step += 1) {
    const chips = acidBaseChips(step, undefined);
    assert.ok(chips.length >= 1);
    for (const c of chips) assert.ok(c.label.en && c.label.bn && c.value);
  }
});

test("the chips follow the toggle", () => {
  const value = (live: unknown, label: string) => acidBaseChips(4, live).find((c) => c.label.en === label)?.value;
  assert.equal(value(undefined, "Total"), "120");
  assert.equal(value("transaction", "Ana"), "100");
  assert.equal(value("plain", "Ana"), "60");
  assert.equal(value("plain", "Total"), "80");
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/course/acid-base.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="acid-base" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});
