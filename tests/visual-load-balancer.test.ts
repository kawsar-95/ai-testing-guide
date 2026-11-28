import { test } from "node:test";
import assert from "node:assert/strict";
import { DEF } from "../lib/visuals/def-load-balancer.ts";
import { SERVICE_TICKS, STEP_ALGORITHM, STEP_TICKS, TOTAL_REQUESTS, longestQueue, pick, simulate } from "../lib/visuals/load-balancer.ts";import { loadBalancerChips } from "../lib/visuals/load-balancer-chips.ts";

test("Round Robin goes one after the other", () => {
  assert.deepEqual([0, 1, 2, 3, 4, 5].map((n) => pick("round-robin", n, [9, 0, 0])), [0, 1, 2, 0, 1, 2]);
  assert.deepEqual(simulate("round-robin", TOTAL_REQUESTS).sent, [8, 8, 8]);
});

test("Least Connections picks the fewest active connections", () => {
  assert.equal(pick("least-connections", 5, [3, 1, 2]), 1);
  assert.equal(pick("least-connections", 5, [2, 2, 2]), 0);
});

test("aha: on servers of different speed, the longest queue is shorter with Least Connections", () => {
  const rr = simulate("round-robin", TOTAL_REQUESTS);
  const lc = simulate("least-connections", TOTAL_REQUESTS);
  assert.deepEqual(rr.queue, [0, 3, 6]);
  assert.deepEqual(lc.queue, [1, 2, 2]);
  assert.ok(longestQueue(lc) < longestQueue(rr));
  assert.ok(lc.sent[0] > lc.sent[2], "the fast server takes more requests");
});

test("every request is either sent and done or still in a queue", () => {
  for (const a of ["round-robin", "least-connections"] as const) {
    for (let t = 0; t <= TOTAL_REQUESTS; t++) {
      const s = simulate(a, t);
      assert.equal(s.sent.reduce((x, y) => x + y, 0), t);
      s.sent.forEach((n, i) => assert.equal(n, s.done[i] + s.queue[i]));
    }
  }
  assert.equal(simulate("round-robin", 0).queue.every((q) => q === 0), true);
  assert.deepEqual([...SERVICE_TICKS], [2, 4, 8]);
});

test("the simulation is deterministic and the step tables match the steps", () => {
  assert.deepEqual(simulate("least-connections", 17), simulate("least-connections", 17));
  assert.equal(STEP_TICKS.length, DEF.steps.length);
  assert.equal(STEP_ALGORITHM.length, DEF.steps.length);
  assert.equal(DEF.id, "load-balancer");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
});

test("chips: every step has labelled chips", () => {
  for (let step = 0; step < DEF.steps.length; step++) {
    for (const live of [undefined, "round-robin", "least-connections"]) {
      const chips = loadBalancerChips(step, live);
      assert.ok(chips.length >= 1);
      for (const c of chips) {
        assert.ok(c.label.en.length > 0 && c.label.bn.length > 0 && c.value.length > 0);
      }
    }
  }
});

test("chips follow the chosen algorithm on the steps with the control", () => {
  const rr = simulate("round-robin", TOTAL_REQUESTS);
  const lc = simulate("least-connections", TOTAL_REQUESTS);
  assert.equal(loadBalancerChips(4, undefined)[0].value, String(longestQueue(rr)));
  assert.equal(loadBalancerChips(4, "round-robin")[0].value, "6");
  assert.equal(loadBalancerChips(4, "least-connections")[0].value, String(longestQueue(lc)));
  assert.notEqual(loadBalancerChips(4, "round-robin")[0].value, loadBalancerChips(4, "least-connections")[0].value);
  assert.equal(loadBalancerChips(5, "round-robin")[0].value, rr.sent.join(" / "));
  assert.equal(loadBalancerChips(5, "least-connections")[0].value, lc.sent.join(" / "));
  // forced steps ignore the control
  assert.deepEqual(loadBalancerChips(1, "least-connections"), loadBalancerChips(1, "round-robin"));
});
