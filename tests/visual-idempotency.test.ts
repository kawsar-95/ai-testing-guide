import { test } from "node:test";
import assert from "node:assert/strict";
import { DEF } from "../lib/visuals/def-idempotency.ts";
import { EMPTY_SERVER, LAST_STEP, AMOUNT, OTHER_AMOUNT, chargeCount, handle, sceneFor } from "../lib/visuals/idempotency.ts";

test("the DEF has id idempotency, 5 to 8 steps, English and Bangla", () => {
  assert.equal(DEF.id, "idempotency");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  for (const s of DEF.steps) {
    assert.ok(s.body.en.split(/\s+/).length <= 40);
    assert.match(s.body.bn, /[\u0980-\u09FF]/);
  }
  assert.equal(LAST_STEP, DEF.steps.length - 1);
});

test("the aha: a retry charges twice without a key and once with a key", () => {
  assert.equal(chargeCount(sceneFor(3, false)), 2);
  assert.equal(chargeCount(sceneFor(3, true)), 1);
  assert.equal(sceneFor(3, false).sent, 2);
  assert.equal(sceneFor(3, true).sent, 2);
  assert.equal(sceneFor(3, true).outcome, "replayed");
  assert.ok(sceneFor(3, false).server.charges[1].duplicate);
});

test("before the retry is handled, both cases show one charge or none", () => {
  assert.equal(chargeCount(sceneFor(0, false)), 0);
  assert.equal(chargeCount(sceneFor(1, false)), 1);
  assert.equal(chargeCount(sceneFor(2, true)), 1);
});

test("the same key with other data is rejected and does not charge", () => {
  const first = handle(EMPTY_SERVER, { key: "K", amount: AMOUNT });
  const second = handle(first.server, { key: "K", amount: OTHER_AMOUNT });
  assert.equal(second.outcome, "rejected");
  assert.equal(second.server.charges.length, 1);
  const scene = sceneFor(LAST_STEP, false);
  assert.equal(scene.outcome, "rejected");
  assert.equal(chargeCount(scene), 1);
});

test("the rules are deterministic", () => {
  assert.deepEqual(sceneFor(3, true), sceneFor(3, true));
});

test("the message list grows with the step", () => {
  for (let s = 1; s <= 3; s++) assert.ok(sceneFor(s, true).messages.length >= sceneFor(s - 1, true).messages.length);
});
