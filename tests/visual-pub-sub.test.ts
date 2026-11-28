import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DEF } from "../lib/visuals/def-pub-sub.ts";
import { pubSubChips } from "../lib/visuals/pub-sub-chips.ts";
import { DEFAULT_SUBS, MAX_SUBS, STEP_COUNT, brokerSends, clampSubs, directSends, duplicates, fanOut, sceneFor, totalDeliveries, withLostAck } from "../lib/visuals/pub-sub.ts";

test("the aha: one publish makes one copy for each subscription", () => {
  const s = sceneFor(2);
  assert.equal(s.publisherSends, 1);
  assert.equal(s.copies, 3);
  assert.deepEqual(s.deliveries, [1, 1, 1]);
});

test("one consumer down: the others still ack", () => {
  const s = sceneFor(3);
  assert.equal(s.down, 1);
  assert.equal(s.acked, 2);
});

test("a lost ack gives a duplicate for the email subscription only", () => {
  assert.deepEqual(withLostAck(fanOut(3), 1), [1, 2, 1]);
  const s = sceneFor(4);
  assert.equal(duplicates(s.deliveries), 1);
  assert.equal(totalDeliveries(s.deliveries), 4);
  assert.equal(s.copies, 3);
});

test("direct sending grows with the consumers, a topic stays at one", () => {
  assert.equal(directSends(3), 3);
  assert.equal(sceneFor(5).publisherSends, 3);
  assert.equal(brokerSends(), 1);
  assert.equal(sceneFor(6, 5).publisherSends, 1);
  assert.equal(sceneFor(6, 5).copies, 5);
  assert.equal(sceneFor(6, 99).subs, MAX_SUBS);
  assert.equal(clampSubs(0), 1);
});

test("the definition has 5 to 8 steps that match the scenes", () => {
  assert.equal(DEF.id, "pub-sub");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
});

test("the chips function returns chips for every step", () => {
  for (let step = 0; step < STEP_COUNT; step += 1) {
    const chips = pubSubChips(step, undefined);
    assert.ok(chips.length >= 1);
    for (const chip of chips) assert.ok(chip.label.en.length > 0 && chip.label.bn.length > 0 && chip.value.length > 0);
  }
});

test("the chips follow the slider on the last step", () => {
  const value = (live: unknown, label: string) => pubSubChips(6, live).find((c) => c.label.en === label)?.value;
  assert.equal(value(undefined, "Copies"), String(DEFAULT_SUBS));
  assert.equal(value(5, "Copies"), "5");
  assert.equal(value(5, "Direct sends"), "5");
  assert.equal(value(5, "With a topic"), "1");
  assert.equal(value(1, "Direct sends"), "1");
});

test("the other steps ignore the slider, like the stage", () => {
  assert.deepEqual(pubSubChips(2, 6), pubSubChips(2, undefined));
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/course/pub-sub.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="pub-sub" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});
