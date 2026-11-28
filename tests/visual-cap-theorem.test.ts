import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DEF } from "../lib/visuals/def-cap-theorem.ts";
import { capTheoremChips } from "../components/visuals/CapTheoremStage.tsx";
import { cutLink, isStale, readOnB, restoreLink, sceneFor, start, writeOnA } from "../lib/visuals/cap.ts";

test("with the link up, a write on A reaches B and a read on B is fresh", () => {
  const c = writeOnA(start(), 2);
  assert.equal(c.b, 2);
  for (const choice of ["C", "A"] as const) {
    const r = readOnB(c, choice);
    assert.deepEqual(r, { served: true, value: 2 });
    assert.equal(isStale(c, r), false);
  }
});

test("the aha: with the link cut, choosing C refuses and choosing A returns old data", () => {
  const c = writeOnA(cutLink(writeOnA(start(), 2)), 3);
  assert.equal(c.a, 3);
  assert.equal(c.b, 2);
  const cp = readOnB(c, "C");
  assert.equal(cp.served, false);
  assert.equal(cp.value, null);
  const ap = readOnB(c, "A");
  assert.equal(ap.served, true);
  assert.equal(ap.value, 2);
  assert.equal(isStale(c, ap), true);
  // Neither choice gives a served and fresh read.
  for (const choice of ["C", "A"] as const) {
    const r = readOnB(c, choice);
    assert.ok(!(r.served && !isStale(c, r)));
  }
});

test("restoring the link makes both nodes agree", () => {
  const c = restoreLink(writeOnA(cutLink(writeOnA(start(), 2)), 3));
  assert.equal(c.a, c.b);
  assert.equal(c.a, 3);
});

test("scenes follow the steps", () => {
  assert.equal(sceneFor(0).cluster.linkUp, true);
  assert.equal(sceneFor(1).cluster.linkUp, false);
  assert.equal(sceneFor(2).cluster.b, 2);
  assert.equal(sceneFor(3, "C").read?.served, false);
  assert.equal(sceneFor(3, "A").read?.value, 2);
  assert.equal(sceneFor(4).read?.value, 3);
});

test("the definition has 5 to 8 steps and the chips work for every step", () => {
  assert.equal(DEF.id, "cap-theorem");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  DEF.steps.forEach((_, i) => assert.ok(capTheoremChips(i).length > 0, `step ${i}`));
  const chips = capTheoremChips(3);
  assert.deepEqual(chips.map((c) => c.value), ["0 / 1", "1 / 1", "2"]);
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/course/cap-theorem.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="cap-theorem" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});
