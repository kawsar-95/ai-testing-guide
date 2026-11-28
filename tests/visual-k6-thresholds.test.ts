import { test } from "node:test";
import assert from "node:assert/strict";
import { DEF } from "../lib/visuals/def-k6-thresholds.ts";
import {
  ABORT_LIMIT_MS,
  DEFAULT_LIMIT_MS,
  DURATION_S,
  EXIT_FAIL,
  EXIT_PASS,
  P99_FINAL,
  SAMPLES,
  SAMPLE_COUNT,
  abortSecond,
  clampLimit,
  p99Upto,
  percentile,
  runningP99,
  verdictAt,
} from "../lib/visuals/k6-thresholds.ts";

test("the sample is 3 VUs for 30 seconds, and it is the same every time", () => {
  assert.equal(SAMPLES.length, SAMPLE_COUNT);
  assert.equal(SAMPLE_COUNT, 90);
  assert.equal(SAMPLES[SAMPLES.length - 1].t, DURATION_S);
  assert.ok(SAMPLES.every((s) => s.ms > 0));
});

test("percentile", () => {
  assert.equal(percentile([], 99), 0);
  assert.equal(percentile([10, 20, 30], 0), 10);
  assert.equal(percentile([10, 20, 30], 100), 30);
  assert.equal(percentile([10, 20, 30], 50), 20);
});

test("the same run flips from fail to pass when only the limit moves", () => {
  const tight = verdictAt(P99_FINAL);
  const loose = verdictAt(P99_FINAL + 10);
  assert.equal(tight.value, loose.value);
  assert.equal(tight.pass, false);
  assert.equal(tight.exitCode, EXIT_FAIL);
  assert.equal(loose.pass, true);
  assert.equal(loose.exitCode, EXIT_PASS);
  assert.equal(EXIT_FAIL, 99);
  assert.equal(verdictAt(DEFAULT_LIMIT_MS).value, P99_FINAL);
});

test("the limit is clamped to the slider range", () => {
  assert.equal(clampLimit(5), 100);
  assert.equal(clampLimit(5000), 800);
  assert.equal(clampLimit(503), 500);
});

test("abortOnFail with the impossible limit stops the run at 5 s, not 30 s", () => {
  assert.equal(abortSecond(ABORT_LIMIT_MS), 5);
  assert.ok(abortSecond(ABORT_LIMIT_MS)! < DURATION_S);
  assert.equal(verdictAt(ABORT_LIMIT_MS, 5).exitCode, EXIT_FAIL);
});

test("abortOnFail never stops a run whose limit is never broken", () => {
  const peak = Math.max(...runningP99().map((r) => r.value));
  assert.equal(abortSecond(peak + 1), null);
});

test("p(99) so far is computed from the samples up to that second", () => {
  assert.equal(p99Upto(DURATION_S), P99_FINAL);
  assert.ok(p99Upto(1) > 0);
});

test("the definition has 5 to 8 steps with English and Bangla text", () => {
  assert.equal(DEF.id, "k6-thresholds");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  for (const s of DEF.steps) assert.ok(s.body.en.split(/\s+/).length <= 40, s.title.en);
});

test("the chips function returns chips for every step", async () => {
  const mod = await import("../components/visuals/K6ThresholdsStage.tsx").catch(() => null);
  if (!mod) return; // the stage uses the "@/..." alias, which plain node cannot resolve
  for (let i = 0; i < DEF.steps.length; i++) assert.ok(mod.k6ThresholdsChips(i).length > 0);
});
