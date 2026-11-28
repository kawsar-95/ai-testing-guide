import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DEF } from "../lib/visuals/def-cap-theorem.ts";
import { capTheoremChips } from "../lib/visuals/cap-theorem-chips.ts";
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

test("the definition has 5 to 8 steps and every step has complete chips", () => {
  assert.equal(DEF.id, "cap-theorem");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  DEF.steps.forEach((_, i) => {
    for (const live of [undefined, "C", "A"]) {
      const chips = capTheoremChips(i, live);
      assert.ok(chips.length > 0, `step ${i}`);
      for (const c of chips) {
        assert.ok(c.label.en.length > 0 && c.label.bn.length > 0 && c.value.length > 0, `step ${i}`);
      }
    }
  });
});

test("on the choice step the chips follow the live choice", () => {
  const val = (live: unknown, label: string) => capTheoremChips(3, live).find((c) => c.label.en.startsWith(label))?.value;
  assert.equal(val("C", "Read served"), "0");
  assert.equal(val("A", "Read served"), "1");
  assert.equal(val("C", "Value returned"), "–");
  assert.equal(val("A", "Value returned"), String(sceneFor(3, "A").read?.value));
  assert.equal(val("A", "Value returned"), "2");
  assert.equal(val(undefined, "Read served"), "0");
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/course/cap-theorem.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="cap-theorem" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});
