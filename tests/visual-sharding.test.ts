import { test } from "node:test";
import assert from "node:assert/strict";
import { DEF } from "../lib/visuals/def-sharding.ts";
import { shardingChips } from "../lib/visuals/sharding-chips.ts";
import {
  RUNS,
  RUN_COUNT,
  SHARD_COUNT,
  assignment,
  counts,
  hotLoadPercent,
  hotShard,
  isHot,
  weekShards,
} from "../lib/visuals/sharding.ts";

test("every run lands on exactly one shard, with both keys", () => {
  for (const key of ["range", "hash"] as const) {
    assert.equal(assignment(key).length, RUNS.length);
    assert.equal(counts(key).reduce((x, y) => x + y, 0), RUN_COUNT);
    assert.ok(assignment(key).every((s) => s >= 0 && s < SHARD_COUNT));
  }
});

test("the date key makes a hot shard: all new runs go to one shard", () => {
  assert.deepEqual(counts("range"), [0, 0, 0, RUN_COUNT]);
  assert.equal(hotLoadPercent("range"), 100);
  assert.equal(hotShard("range"), 3);
  assert.ok(isHot("range"));
});

test("the hash key spreads the runs: no hot shard", () => {
  assert.ok(!isHot("hash"));
  assert.ok(counts("hash").every((n) => n > 0));
  assert.ok(hotLoadPercent("hash") < 50);
});

test("runs this week: one shard with the date key, every shard with the hash key", () => {
  assert.equal(weekShards("range").length, 1);
  assert.equal(weekShards("hash").length, SHARD_COUNT);
});

test("the rules are deterministic", () => {
  assert.deepEqual(assignment("hash"), assignment("hash"));
});

test("the DEF has 5 to 8 steps and every step has chips", () => {
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.id, "sharding");
  for (let step = 0; step < DEF.steps.length; step++) {
    for (const live of [undefined, "range", "hash"]) {
      const chips = shardingChips(step, live);
      assert.ok(chips.length >= 1);
      for (const c of chips) {
        assert.ok(c.label.en.length > 0 && c.label.bn.length > 0 && c.value.length > 0);
      }
    }
  }
});

test("the chips follow the shard key on steps 2 to 4", () => {
  assert.equal(shardingChips(2, "range")[0].value, counts("range").join(" / "));
  assert.equal(shardingChips(2, "hash")[0].value, counts("hash").join(" / "));
  assert.equal(shardingChips(3, "range")[0].value, "100 %");
  assert.equal(shardingChips(3, "hash")[0].value, `${hotLoadPercent("hash")} %`);
  assert.equal(shardingChips(4, "range")[0].value, `1 / ${SHARD_COUNT}`);
  assert.equal(shardingChips(4, "hash")[0].value, `${SHARD_COUNT} / ${SHARD_COUNT}`);
  assert.equal(shardingChips(3, undefined)[0].value, shardingChips(3, "range")[0].value);
});
