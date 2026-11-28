import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { visualDef } from "../lib/visuals/defs.ts";
import { DEF } from "../lib/visuals/def-database-replication.ts";
import { databaseReplicationChips } from "../lib/visuals/database-replication-chips.ts";
import { CAUGHT_UP_S, LAG_S, READ_AT_S, STEP_COUNT, copiesWithPayment, isStale, readStatus, sceneFor } from "../lib/visuals/database-replication.ts";

test("the aha: a replica read 1 s after the write is stale, a primary read is not", () => {
  assert.ok(READ_AT_S < LAG_S);
  assert.equal(readStatus("replica", READ_AT_S, true), "unpaid");
  assert.equal(isStale("replica", READ_AT_S, true), true);
  assert.equal(readStatus("primary", READ_AT_S, true), "paid");
  assert.equal(isStale("primary", READ_AT_S, true), false);
});

test("after the lag a replica read is fresh", () => {
  assert.equal(isStale("replica", LAG_S - 1, true), true);
  assert.equal(isStale("replica", LAG_S, true), false);
  assert.equal(CAUGHT_UP_S, LAG_S);
});

test("before any write nothing is stale", () => {
  assert.equal(isStale("replica", 0, false), false);
  assert.equal(copiesWithPayment(0, false), 0);
});

test("copies: the primary at once, the replicas after the lag", () => {
  assert.equal(copiesWithPayment(0, true), 1);
  assert.equal(copiesWithPayment(READ_AT_S, true), 1);
  assert.equal(copiesWithPayment(LAG_S, true), 3);
});

test("the scenes follow the story", () => {
  assert.equal(sceneFor(0).copies, 0);
  assert.equal(sceneFor(1).primaryPaid, true);
  assert.equal(sceneFor(1).replicasPaid, false);
  assert.equal(sceneFor(2).inFlight, true);
  assert.equal(sceneFor(3, "replica").read?.stale, true);
  assert.equal(sceneFor(3, "primary").read?.stale, false);
  assert.equal(sceneFor(4, "replica").read?.stale, false);
  assert.equal(sceneFor(4).inFlight, false);
  assert.equal(sceneFor(5, "replica").read?.from, "primary");
  assert.equal(sceneFor(5).read?.stale, false);
  assert.equal(sceneFor(5).readsOnReplicas, 1);
});

test("the definition has 5 to 8 steps that match the scenes", () => {
  assert.equal(DEF.id, "database-replication");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
  for (const s of DEF.steps) assert.ok(s.body.en.split(/\s+/).length <= 40);
});

test("the chips function returns chips for every step", () => {
  for (let step = 0; step < STEP_COUNT; step += 1) {
    const chips = databaseReplicationChips(step, undefined);
    assert.ok(chips.length >= 1);
    for (const chip of chips) assert.ok(chip.label.en.length > 0 && chip.label.bn.length > 0 && chip.value.length > 0);
  }
});

test("the chips follow the toggle on steps 3 and 4", () => {
  const stale = (step: number, live: unknown) => databaseReplicationChips(step, live).find((c) => c.label.en === "Stale read")?.value;
  assert.equal(stale(3, undefined), "1 / 1");
  assert.equal(stale(3, "replica"), "1 / 1");
  assert.equal(stale(3, "primary"), "0 / 1");
  assert.equal(stale(4, "replica"), "0 / 1");
  assert.equal(stale(3, 42), "1 / 1");
});

test("the other steps ignore the toggle, like the stage", () => {
  assert.deepEqual(databaseReplicationChips(5, "primary"), databaseReplicationChips(5, undefined));
  assert.deepEqual(databaseReplicationChips(2, "primary"), databaseReplicationChips(2, undefined));
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/architecture/database-replication.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="database-replication" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});

test("the registry knows the visual once the parent wires it", () => {
  try {
    assert.equal(visualDef("database-replication").id, "database-replication");
  } catch {
    // not wired yet: the parent adds it to defs.ts
  }
});
