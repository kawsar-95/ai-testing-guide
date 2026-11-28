import { test } from "node:test";
import assert from "node:assert/strict";
import { availabilityChips } from "../lib/visuals/availability-chips.ts";
import { DEF } from "../lib/visuals/def-availability.ts";
import {
  DAY_MINUTES,
  MONTH_MINUTES,
  NINES_PPM,
  REGION_PPM,
  SINGLE_INSTANCE_PPM,
  YEAR_MINUTES,
  creditPercent,
  downtimeMinutes,
  durationText,
  errorBudgetCount,
  logBarLength,
  percentText,
  sceneFor,
  tenfoldRatio,
} from "../lib/visuals/availability.ts";

const near = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-9, `${a} vs ${b}`);

test("the page's table: 99.9 % is 525.6, 99.99 % is 52.56, 99.999 % is 5.256 minutes a year", () => {
  near(downtimeMinutes(1000, YEAR_MINUTES), 525.6);
  near(downtimeMinutes(100, YEAR_MINUTES), 52.56);
  near(downtimeMinutes(10, YEAR_MINUTES), 5.256);
});

test("the slider is 99, 99.9, 99.99, 99.999 and each nine is a tenfold step", () => {
  assert.deepEqual(NINES_PPM.map(percentText), ["99", "99.9", "99.99", "99.999"]);
  assert.equal(tenfoldRatio(0), 0);
  for (let i = 1; i < NINES_PPM.length; i++) assert.equal(tenfoldRatio(i), 10);
});

test("month and day downtime follow the same rule", () => {
  assert.equal(MONTH_MINUTES, 43_800);
  near(downtimeMinutes(1000, MONTH_MINUTES), 43.8);
  near(downtimeMinutes(10_000, DAY_MINUTES), 14.4);
  near(downtimeMinutes(10, DAY_MINUTES), 0.0144);
});

test("durations read well", () => {
  assert.equal(durationText(525.6), "525.6 min");
  assert.equal(durationText(5.256), "5.256 min");
  assert.equal(durationText(2628), "43.8 h");
  assert.equal(durationText(52.56), "52.56 min");
  assert.equal(durationText(0.0144), "0.864 s");
  assert.equal(durationText(5256), "3.65 d");
});

test("log bars get shorter by the same step for every nine", () => {
  const lens = NINES_PPM.map((p) => logBarLength(downtimeMinutes(p, YEAR_MINUTES)));
  const steps = lens.slice(1).map((l, i) => lens[i]! - l);
  assert.ok(steps.every((s) => Math.abs(s - 70) <= 1), String(steps));
});

test("error budget of the quiz SLO: 0.1 % is 10 of 10,000", () => {
  assert.equal(errorBudgetCount(1000, 10_000), 10);
});

test("EC2 promises: 99.5 % and 99.99 % in a month", () => {
  near(downtimeMinutes(SINGLE_INSTANCE_PPM, MONTH_MINUTES), 219);
  near(downtimeMinutes(REGION_PPM, MONTH_MINUTES), 4.38);
});

test("region credit tiers", () => {
  assert.equal(creditPercent(100), 0);
  assert.equal(creditPercent(101), 10);
  assert.equal(creditPercent(10_000), 10);
  assert.equal(creditPercent(10_001), 30);
  assert.equal(creditPercent(50_000), 30);
  assert.equal(creditPercent(50_001), 100);
});

test("the slider shows on steps 1, 2 and 5 only", () => {
  const on = DEF.steps.map((_, i) => sceneFor(i).slider);
  assert.deepEqual(on, [false, true, true, false, false, true]);
});

test("the definition has 5 to 8 steps, short captions, and Bangla", () => {
  assert.equal(DEF.id, "availability");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  for (const s of DEF.steps) {
    assert.ok(s.body.en.split(/\s+/).length <= 40, s.title.en);
    assert.match(s.body.bn, /[\u0980-\u09FF]/);
  }
});

test("the chips function returns chips for every step", () => {
  for (let i = 0; i < DEF.steps.length; i++) {
    const chips = availabilityChips(i, undefined);
    assert.ok(chips.length > 0, `step ${i}`);
    for (const c of chips) {
      assert.ok(c.label.en.length > 0 && c.label.bn.length > 0 && c.value.length > 0, `step ${i}`);
    }
  }
});

test("the chips follow the slider on steps 1, 2 and 5", () => {
  const value = (step: number, live: unknown, label: string) =>
    availabilityChips(step, live).find((c) => c.label.en === label)?.value;
  // step 1: 99 % -> 5,256 min/year = 3.65 d; 99.999 % -> 5.256 min
  assert.equal(value(1, 0, "Downtime / year"), durationText(downtimeMinutes(NINES_PPM[0]!, YEAR_MINUTES)));
  assert.equal(value(1, 3, "Downtime / year"), "5.256 min");
  assert.equal(value(1, undefined, "Downtime / year"), "525.6 min");
  assert.equal(value(1, 1, "Downtime / month"), "43.8 min");
  assert.equal(value(1, 1, "Downtime / day"), "1.44 min");
  assert.equal(value(2, 2, "Target"), "99.99 %");
  assert.equal(value(2, 2, "Downtime / year"), "52.56 min");
  assert.equal(value(2, 2, "vs one nine fewer"), "÷ 10");
  assert.notEqual(value(2, 0, "Downtime / year"), value(2, 3, "Downtime / year"));
  // step 5: credit tiers
  assert.equal(value(5, 1, "Service credit"), `${creditPercent(1000)} %`);
  assert.equal(value(5, 0, "Service credit"), "10 %");
  assert.equal(value(5, 2, "Service credit"), "0 %");
  // bad input falls back to the default
  assert.equal(value(1, "x", "Target"), "99.9 %");
  assert.equal(value(1, 99, "Target"), "99.9 %");
});
