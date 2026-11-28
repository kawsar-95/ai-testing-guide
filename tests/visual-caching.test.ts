import { test } from "node:test";
import assert from "node:assert/strict";
import { DEF } from "../lib/visuals/def-caching.ts";
import { cachingChips } from "../lib/visuals/caching-chips.ts";
import { CACHE_MS, MISS_MS, READS, averageMs, dbReads, hitPercentFor, sceneFor, SLIDER_STEP, DEFAULT_HIT_PERCENT } from "../lib/visuals/caching.ts";

test("average read time falls as the hit rate rises", () => {
  assert.equal(averageMs(0), MISS_MS);
  assert.equal(averageMs(100), CACHE_MS);
  assert.ok(averageMs(99) < averageMs(90));
  assert.ok(averageMs(90) < averageMs(50));
  assert.ok(Math.abs(averageMs(90) - 3) < 1e-9);
});

test("database reads are the misses", () => {
  assert.equal(dbReads(90), 10);
  assert.equal(dbReads(0), READS);
  assert.equal(dbReads(100), 0);
});

test("a cold cache is a 0 % hit rate", () => {
  assert.equal(hitPercentFor(6, 90), 0);
  assert.equal(averageMs(hitPercentFor(6, 90)), MISS_MS);
});

test("only a cached step has a copy in Redis, and a miss reaches the database", () => {
  assert.equal(sceneFor(1).cached, true);
  assert.equal(sceneFor(2).cached, false);
  assert.deepEqual(sceneFor(1).active, ["appRedis"]);
  assert.ok(sceneFor(2).active.includes("appDb"));
});

test("the def has 5 to 8 steps and the id of the page", () => {
  assert.equal(DEF.id, "caching");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
});

test("every step has chips with text and a value", () => {
  for (let i = 0; i < DEF.steps.length; i++) {
    const chips = cachingChips(i, undefined);
    assert.ok(chips.length >= 1, `step ${i}`);
    for (const c of chips) assert.ok(c.label.en && c.label.bn && c.value, `step ${i}`);
  }
});

test("the slider step chips follow the live hit rate", () => {
  const val = (live: unknown, label: string) => cachingChips(SLIDER_STEP, live).find((c) => c.label.en === label)?.value;
  assert.equal(val(undefined, "Hit rate"), `${DEFAULT_HIT_PERCENT} %`);
  assert.equal(val(50, "Hit rate"), "50 %");
  assert.equal(val(90, "Database reads"), `10 / ${READS}`);
  assert.equal(val(50, "Database reads"), `50 / ${READS}`);
  assert.equal(val(100, "Average read"), "1 ms");
  assert.equal(val(0, "Average read"), "21 ms");
  assert.equal(val(50, "Average read"), "11 ms");
});
