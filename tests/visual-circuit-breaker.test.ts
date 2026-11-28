import { test } from "node:test";
import assert from "node:assert/strict";
import { DEF } from "../lib/visuals/def-circuit-breaker.ts";
import { CONFIG, STEP_TICKS, sceneFor, simulate } from "../lib/visuals/circuit-breaker.ts";

test("the breaker opens after the threshold of failures in a row", () => {
  const ticks = simulate(true);
  const firstOpen = ticks.findIndex((t) => t.state === "open");
  assert.equal(firstOpen, CONFIG.brokenFrom + CONFIG.threshold - 1);
  assert.equal(ticks[firstOpen]?.failRun, CONFIG.threshold);
});

test("while Open, calls fail at once and do not reach the service (the aha)", () => {
  const ticks = simulate(true);
  const rejected = ticks.filter((t) => t.outcome === "rejected");
  assert.ok(rejected.length >= CONFIG.openTicks);
  assert.ok(rejected.every((t) => !t.reachedService));
  const a = sceneFor(3);
  const b = sceneFor(2);
  assert.equal(a.rejected, CONFIG.openTicks - 1);
  assert.equal(a.reached, b.reached);
});

test("a failed trial reopens, successful trials close", () => {
  const ticks = simulate(true);
  assert.ok(ticks.some((t) => t.outcome === "trial-fail" && t.state === "open"));
  assert.equal(sceneFor(5).state, "half-open");
  assert.equal(sceneFor(6).state, "closed");
  assert.equal(ticks.filter((t) => t.outcome === "trial-ok").length, CONFIG.successNeeded);
});

test("a healthy service never trips the breaker", () => {
  const ticks = simulate(false);
  assert.ok(ticks.every((t) => t.outcome === "ok" && t.state === "closed"));
});

test("step scenes: states in order", () => {
  const states = STEP_TICKS.map((_, i) => sceneFor(i).state);
  assert.deepEqual(states, ["closed", "closed", "open", "open", "open", "half-open", "closed"]);
  assert.equal(sceneFor(1).failRun, 2);
});

test("the DEF has 5 to 8 steps with English and Bangla", () => {
  assert.equal(DEF.id, "circuit-breaker");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_TICKS.length);
  for (const s of DEF.steps) assert.ok(s.body.en.split(/\s+/).length <= 40);
});
