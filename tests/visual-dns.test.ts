import { test } from "node:test";
import assert from "node:assert/strict";
import { DEF } from "../lib/visuals/def-dns.ts";
import { hops, hopsSoFar, msSoFar, pathFor, reachedCount, totalMs, TTL_SECONDS } from "../lib/visuals/dns.ts";

test("not cached the lookup visits all six nodes, cached it stops at the recursive server", () => {
  assert.deepEqual(pathFor(false), ["browser", "stub", "recursive", "root", "tld", "auth"]);
  assert.deepEqual(pathFor(true), ["browser", "stub", "recursive"]);
});

test("the aha numbers: 5 hops and 101 ms not cached, 2 hops and 11 ms cached", () => {
  assert.equal(hops(false), 5);
  assert.equal(hops(true), 2);
  assert.equal(totalMs(false), 101);
  assert.equal(totalMs(true), 11);
  assert.ok(totalMs(true) < totalMs(false));
});

test("progress grows with the step and ends at the totals", () => {
  for (const cached of [false, true]) {
    let last = 0;
    for (let s = 0; s <= 6; s++) {
      assert.ok(msSoFar(s, cached) >= last);
      last = msSoFar(s, cached);
    }
    assert.equal(msSoFar(6, cached), totalMs(cached));
    assert.equal(hopsSoFar(6, cached), hops(cached));
  }
  assert.equal(reachedCount(5, true), 3);
  assert.equal(reachedCount(5, false), 6);
});

test("the TTL is the page's 86400 seconds", () => {
  assert.equal(TTL_SECONDS, 86400);
});

test("the DNS def has 5 to 8 steps with the right id", () => {
  assert.equal(DEF.id, "dns");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  for (const s of DEF.steps) assert.ok(s.body.en.split(/\s+/).length <= 40);
});

test("the chips function returns chips for every step", async () => {
  const { dnsChips } = await import("../components/visuals/DnsStage.tsx");
  for (let s = 0; s < DEF.steps.length; s++) assert.ok(dnsChips(s).length >= 2);
  assert.equal(dnsChips(0)[0]?.value, "5 / 2");
  assert.equal(dnsChips(6).length, 3);
});
