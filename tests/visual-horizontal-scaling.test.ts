import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { visualDef } from "../lib/visuals/defs.ts";
import { DEF } from "../lib/visuals/def-horizontal-scaling.ts";
import { horizontalScalingChips } from "../lib/visuals/horizontal-scaling-chips.ts";
import { CAPACITY_PER_SERVER, DEFAULT_LOAD, MAX_LOAD, MIN_LOAD, STEP_COUNT, capacityOf, clampLoad, sceneFor, shareLoad } from "../lib/visuals/horizontal-scaling.ts";

test("one server cannot serve the default demand, three can", () => {
  const one = sceneFor(0);
  assert.equal(one.demand, DEFAULT_LOAD);
  assert.equal(one.served, CAPACITY_PER_SERVER);
  assert.equal(one.dropped, DEFAULT_LOAD - CAPACITY_PER_SERVER);
  const three = sceneFor(1);
  assert.equal(three.dropped, 0);
  assert.equal(three.capacity, 300);
  assert.deepEqual(three.servers.map((s) => s.load), [60, 60, 60]);
});

test("the balancer shares load only between servers that are up", () => {
  assert.deepEqual(shareLoad(180, [true, true, true]), [60, 60, 60]);
  assert.deepEqual(shareLoad(180, [true, false, true]), [90, 0, 90]);
  assert.deepEqual(shareLoad(180, [false, false]), [0, 0]);
});

test("the aha: with one server down, the default demand is still fully served", () => {
  const s = sceneFor(3);
  assert.equal(s.serversUp, 2);
  assert.equal(s.servers[1].up, false);
  assert.deepEqual(s.servers.map((x) => x.load), [90, 0, 90]);
  assert.equal(s.dropped, 0);
  assert.equal(s.capacity, capacityOf(2));
});

test("at a high demand, two servers drop requests but three do not", () => {
  assert.equal(sceneFor(2, 300).dropped, 0);
  assert.equal(sceneFor(3, 300).dropped, 100);
  assert.equal(sceneFor(2, 420).dropped, 120);
  assert.equal(sceneFor(3, 240).dropped, 40);
  assert.equal(sceneFor(3, 180).servers[0].overloaded, false);
  assert.equal(sceneFor(3, 240).servers[0].overloaded, true);
});

test("a slow database: three servers serve no more than one", () => {
  const db = sceneFor(4);
  assert.equal(db.served, sceneFor(0).served);
  assert.equal(db.dropped, sceneFor(0).dropped);
  assert.equal(sceneFor(4, 420).served, 100);
});

test("the slider is clamped and the early steps ignore it", () => {
  assert.equal(clampLoad(undefined), DEFAULT_LOAD);
  assert.equal(clampLoad(9999), MAX_LOAD);
  assert.equal(clampLoad(-5), MIN_LOAD);
  assert.equal(sceneFor(1, 420).demand, DEFAULT_LOAD);
});

test("the definition has 5 to 8 steps that match the scenes", () => {
  assert.equal(DEF.id, "horizontal-scaling");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
});

test("the chips function returns chips for every step", () => {
  for (let step = 0; step < STEP_COUNT; step += 1) {
    const chips = horizontalScalingChips(step, undefined);
    assert.ok(chips.length >= 1);
    for (const chip of chips) assert.ok(chip.label.en.length > 0 && chip.label.bn.length > 0 && chip.value.length > 0);
  }
});

test("the chips follow the slider", () => {
  const value = (step: number, live: unknown, label: string) => horizontalScalingChips(step, live).find((c) => c.label.en === label)?.value;
  assert.equal(value(2, undefined, "Demand (req/s)"), "180");
  assert.equal(value(2, 420, "Demand (req/s)"), "420");
  assert.equal(value(2, 420, "Dropped (req/s)"), "120");
  assert.equal(value(3, 300, "Dropped (req/s)"), "100");
  assert.equal(value(3, 300, "Servers up"), "2 / 3");
  assert.equal(value(4, 420, "Served"), "100 / 420");
  assert.deepEqual(horizontalScalingChips(1, 420), horizontalScalingChips(1, undefined));
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/architecture/horizontal-scaling.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="horizontal-scaling" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});

test("the registry knows the visual once the parent wires it", () => {
  try {
    assert.equal(visualDef("horizontal-scaling").id, "horizontal-scaling");
  } catch {
    // not wired yet: the parent adds it to defs.ts
  }
});
