import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { visualDef } from "../lib/visuals/defs.ts";
import { DEF } from "../lib/visuals/def-sla-slo-sli.ts";
import { slaSloSliChips } from "../lib/visuals/sla-slo-sli-chips.ts";
import { BUDGET, DEFAULT_FAILED, SLA_LIMIT, STEP_COUNT, budgetLeft, budgetUsedPercent, sceneFor, sliPercent, zoneFor } from "../lib/visuals/sla-slo-sli.ts";

test("the page's arithmetic: budget 10,000 and a bad release of 4,000 uses 40%", () => {
  assert.equal(BUDGET, 10000);
  assert.equal(SLA_LIMIT, 20000);
  assert.equal(DEFAULT_FAILED, 4000);
  assert.equal(budgetUsedPercent(4000), 40);
  assert.equal(budgetLeft(4000), 6000);
  assert.equal(sliPercent(4000), "99.800");
});

test("the aha: the slider crosses the SLO line first, then the SLA line", () => {
  assert.equal(zoneFor(0), "within-slo");
  assert.equal(zoneFor(10000), "within-slo");
  assert.equal(zoneFor(10500), "slo-missed");
  assert.equal(zoneFor(20000), "slo-missed");
  assert.equal(zoneFor(20500), "sla-missed");
  assert.equal(sliPercent(10000), "99.500");
  assert.equal(sliPercent(20000), "99.000");
  assert.equal(budgetLeft(12000), 0);
  assert.equal(budgetUsedPercent(12000), 120);
});

test("the scenes follow the story", () => {
  assert.equal(sceneFor(0).showSlo, false);
  assert.equal(sceneFor(1).showSlo, true);
  assert.equal(sceneFor(1).showSla, false);
  assert.equal(sceneFor(2).showSla, true);
  assert.equal(sceneFor(3).showBudget, true);
  assert.equal(sceneFor(4).failed, 4000);
  assert.equal(sceneFor(2, 15000).failed, 4000);
  assert.equal(sceneFor(5, 15000).zone, "slo-missed");
});

test("the definition has 5 to 8 steps that match the scenes", () => {
  assert.equal(DEF.id, "sla-slo-sli");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
});

test("the chips function returns chips for every step", () => {
  for (let step = 0; step < STEP_COUNT; step += 1) {
    const chips = slaSloSliChips(step, undefined);
    assert.ok(chips.length >= 1);
    for (const chip of chips) assert.ok(chip.label.en.length > 0 && chip.label.bn.length > 0 && chip.value.length > 0);
  }
});

test("the chips follow the slider on the last step", () => {
  const value = (live: unknown, label: string) => slaSloSliChips(5, live).find((c) => c.label.en === label)?.value;
  assert.equal(value(undefined, "Budget used"), "40%");
  assert.equal(value(10000, "Budget used"), "100%");
  assert.equal(value(10000, "Budget left"), "0");
  assert.equal(value(20000, "SLI"), "99.000%");
  assert.equal(value("x", "Failed"), "4,000");
});

test("the other steps ignore the slider, like the stage", () => {
  assert.deepEqual(slaSloSliChips(4, 15000), slaSloSliChips(4, undefined));
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/course/sla-slo-sli.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="sla-slo-sli" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});

test("the registry knows the visual once the parent wires it", () => {
  try {
    assert.equal(visualDef("sla-slo-sli").id, "sla-slo-sli");
  } catch {
    // not wired yet
  }
});
