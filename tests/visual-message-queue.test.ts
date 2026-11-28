import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DEF } from "../lib/visuals/def-message-queue.ts";
import { messageQueueChips } from "../lib/visuals/message-queue-chips.ts";
import { BURST, JOB_S, MAX_CONSUMERS, STEP_COUNT, drainSeconds, sceneFor, stateAt } from "../lib/visuals/message-queue.ts";

test("the aha: more consumers drain the burst sooner", () => {
  assert.equal(drainSeconds(1), 240);
  assert.equal(drainSeconds(3), 80);
  assert.equal(drainSeconds(6), 40);
  for (let c = 1; c < MAX_CONSUMERS; c += 1) assert.ok(drainSeconds(c + 1) <= drainSeconds(c));
  assert.equal(drainSeconds(4), drainSeconds(5));
});

test("the state conserves the jobs", () => {
  for (let c = 1; c <= MAX_CONSUMERS; c += 1) {
    for (let t = 0; t <= 260; t += 20) {
      const s = stateAt(BURST, c, t);
      assert.equal(s.done + s.active + s.waiting, BURST);
      assert.ok(s.active <= c);
    }
    assert.deepEqual(stateAt(BURST, c, drainSeconds(c)), { done: BURST, active: 0, waiting: 0 });
  }
});

test("the scenes follow the story", () => {
  assert.equal(sceneFor(0).waiting, 1);
  assert.equal(sceneFor(1).waiting, BURST);
  assert.equal(sceneFor(2).active, 1);
  assert.equal(sceneFor(2).waiting, BURST - 1);
  assert.equal(sceneFor(3).done, 3);
  assert.equal(sceneFor(3).waiting, 8);
  assert.equal(sceneFor(4, 3).waiting, 0);
  assert.equal(sceneFor(4, 1).waiting, 8);
  const crash = sceneFor(5);
  assert.equal(crash.done + crash.active + crash.waiting, BURST);
  assert.equal(crash.active, 2);
  assert.equal(crash.waiting, 7);
  assert.equal(sceneFor(6).oldest, 100);
  assert.equal(JOB_S, 20);
});

test("the definition has 5 to 8 steps that match the scenes", () => {
  assert.equal(DEF.id, "message-queue");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
});

test("the chips function returns chips for every step", () => {
  for (let step = 0; step < STEP_COUNT; step += 1) {
    const chips = messageQueueChips(step, undefined);
    assert.ok(chips.length >= 1);
    for (const chip of chips) assert.ok(chip.label.en.length > 0 && chip.label.bn.length > 0 && chip.value.length > 0);
  }
});

test("the chips follow the slider on the slider step", () => {
  const value = (live: unknown, label: string) => messageQueueChips(4, live).find((c) => c.label.en === label)?.value;
  assert.equal(value(undefined, "Consumers"), "3");
  assert.equal(value(1, "Consumers"), "1");
  assert.equal(value(1, "Queue empty after"), "240 s");
  assert.equal(value(6, "Queue empty after"), "40 s");
  assert.equal(value(1, "Waiting"), "8");
  assert.equal(value(3, "Waiting"), "0");
});

test("the other steps ignore the slider, like the stage", () => {
  assert.deepEqual(messageQueueChips(3, 6), messageQueueChips(3, undefined));
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/architecture/message-queue.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="message-queue" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});
