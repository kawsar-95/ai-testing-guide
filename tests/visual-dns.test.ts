import { test } from "node:test";
import assert from "node:assert/strict";
import { DEF } from "../lib/visuals/def-dns.ts";
import { dnsChips } from "../lib/visuals/dns-chips.ts";
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

test("the chips follow the cache switch on every step", () => {
  for (let s = 0; s < DEF.steps.length; s++) {
    for (const live of [undefined, false, true]) {
      const chips = dnsChips(s, live);
      assert.ok(chips.length >= 1);
      for (const c of chips) assert.ok(c.label.en && c.label.bn && c.value);
    }
  }
  assert.equal(dnsChips(0, undefined)[0]?.value, "5");
  assert.equal(dnsChips(0, false)[0]?.value, "5");
  assert.equal(dnsChips(0, true)[0]?.value, "2");
  assert.equal(dnsChips(0, false)[1]?.value, "101 ms");
  assert.equal(dnsChips(0, true)[1]?.value, "11 ms");
  assert.equal(dnsChips(6, true).length, 3);
  assert.equal(dnsChips(6, true)[2]?.value, "86400 s");
});
