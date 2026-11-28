import { test } from "node:test";
import assert from "node:assert/strict";
import { DEF } from "../lib/visuals/def-consistent-hashing.ts";
import { consistentHashingChips } from "../lib/visuals/consistent-hashing-chips.ts";
import { KEY_COUNT, sceneFor } from "../lib/visuals/ring.ts";

test("every step returns chips with both labels and a value", () => {
  assert.equal(DEF.id, "consistent-hashing");
  for (const live of [undefined, "ring", "modulo"]) {
    for (let step = 0; step < DEF.steps.length; step++) {
      const chips = consistentHashingChips(step, live);
      assert.ok(chips.length >= 1, `step ${step}`);
      for (const chip of chips) {
        assert.ok(chip.label.en.length > 0 && chip.label.bn.length > 0, `step ${step} label`);
        assert.ok(chip.value.length > 0, `step ${step} value`);
      }
    }
  }
});

test("the compare step chip follows the chosen rule", () => {
  const scene = sceneFor(4);
  const ring = consistentHashingChips(4, "ring");
  const modulo = consistentHashingChips(4, "modulo");
  const last = (c: ReturnType<typeof consistentHashingChips>) => c[c.length - 1].value;
  assert.equal(last(ring), `${scene.movedRing} / ${KEY_COUNT}`);
  assert.equal(last(modulo), `${scene.movedModulo} / ${KEY_COUNT}`);
  assert.notEqual(last(ring), last(modulo));
  assert.ok(scene.movedModulo > scene.movedRing);
});

test("live defaults to the ring and ignores bad values", () => {
  assert.deepEqual(consistentHashingChips(4, undefined), consistentHashingChips(4, "ring"));
  assert.deepEqual(consistentHashingChips(4, 7), consistentHashingChips(4, "ring"));
});

test("other steps do not change with the rule", () => {
  for (const step of [0, 1, 2, 3, 5, 6]) {
    assert.deepEqual(consistentHashingChips(step, "ring"), consistentHashingChips(step, "modulo"));
  }
});
