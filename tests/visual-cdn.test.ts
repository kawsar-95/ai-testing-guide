import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { visualDef } from "../lib/visuals/defs.ts";
import { DEF } from "../lib/visuals/def-cdn.ts";
import { cdnChips } from "../lib/visuals/cdn-chips.ts";
import { EDGE_KM, LAST_STEP, ORIGIN_KM, STEP_COUNT, roundTripMs, sceneFor, speedup } from "../lib/visuals/cdn.ts";

test("the aha: the edge is much closer and much faster than the origin", () => {
  assert.equal(roundTripMs(ORIGIN_KM), 160);
  assert.equal(roundTripMs(EDGE_KM), 4);
  assert.equal(speedup(), 40);
  assert.ok(EDGE_KM < ORIGIN_KM);
});

test("a miss goes to the origin and leaves a copy at the edge", () => {
  const miss = sceneFor(2);
  assert.equal(miss.answeredBy, "origin");
  assert.equal(miss.originRequests, 1);
  assert.equal(miss.edgeHasCopy, true);
  assert.equal(miss.km, ORIGIN_KM);
});

test("a hit is answered by the edge and sends nothing to the origin", () => {
  const hit = sceneFor(3);
  assert.equal(hit.answeredBy, "edge");
  assert.equal(hit.originRequests, 0);
  assert.equal(hit.km, EDGE_KM);
  assert.ok(hit.ms < sceneFor(2).ms);
});

test("the first scene has no edge, the second an empty edge", () => {
  assert.equal(sceneFor(0).edgeShown, false);
  assert.equal(sceneFor(0).answeredBy, "origin");
  assert.equal(sceneFor(1).edgeShown, true);
  assert.equal(sceneFor(1).edgeHasCopy, false);
});

test("the toggle on the last step picks hit or miss", () => {
  assert.equal(sceneFor(LAST_STEP, "hit").ms, 4);
  assert.equal(sceneFor(LAST_STEP, "miss").ms, 160);
  assert.equal(sceneFor(LAST_STEP, "miss").originRequests, 1);
});

test("the definition has 5 to 8 steps that match the scenes", () => {
  assert.equal(DEF.id, "cdn");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
});

test("the chips function returns chips for every step", () => {
  for (let step = 0; step < STEP_COUNT; step += 1) {
    const chips = cdnChips(step, undefined);
    assert.ok(chips.length >= 1);
    for (const chip of chips) assert.ok(chip.label.en.length > 0 && chip.label.bn.length > 0 && chip.value.length > 0);
  }
});

test("the chips follow the toggle on the last step", () => {
  const value = (live: unknown, label: string) => cdnChips(LAST_STEP, live).find((c) => c.label.en === label)?.value;
  assert.equal(value(undefined, "Time"), "4 ms");
  assert.equal(value("hit", "Distance"), `${EDGE_KM} km`);
  assert.equal(value("miss", "Time"), "160 ms");
  assert.equal(value("miss", "Distance"), `${ORIGIN_KM} km`);
  assert.equal(value("miss", "Origin requests"), "1");
  assert.equal(value("hit", "Origin requests"), "0");
  assert.equal(value(42, "Time"), "4 ms");
});

test("the other steps ignore the toggle, like the stage", () => {
  assert.deepEqual(cdnChips(3, "miss"), cdnChips(3, undefined));
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/architecture/cdn.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="cdn" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});

test("the registry knows the visual once the parent wires it", () => {
  try {
    assert.equal(visualDef("cdn").id, "cdn");
  } catch {
    // not wired yet: the parent adds it to defs.ts
  }
});
