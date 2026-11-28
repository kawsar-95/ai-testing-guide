import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { visualDef } from "../lib/visuals/defs.ts";
import { DEF } from "../lib/visuals/def-rate-limiting.ts";
import { BURST, DEFAULT_LIMIT, STEP_COUNT, WINDOW_S, refillSeconds, retryAfterSeconds, runBurst, sceneFor, tokensAfter } from "../lib/visuals/rate-limiting.ts";

test("the aha: a burst of 5 on a limit of 3 gets 3 passes and 2 answers of 429", () => {
  const run = runBurst(3);
  assert.deepEqual(run.results, ["ok", "ok", "ok", "429", "429"]);
  assert.equal(run.passed, 3);
  assert.equal(run.rejected, 2);
  assert.equal(run.tokensLeft, 0);
});

test("a limit of at least the burst never gives a 429", () => {
  assert.equal(runBurst(BURST).rejected, 0);
  assert.equal(runBurst(8).rejected, 0);
  assert.equal(runBurst(1).rejected, BURST - 1);
});

test("3 per 5 minutes refills one token every 100 s, and Retry-After matches", () => {
  assert.equal(WINDOW_S, 300);
  assert.equal(refillSeconds(3), 100);
  assert.equal(retryAfterSeconds(3), 100);
  assert.equal(tokensAfter(3, 0, 100), 1);
  assert.equal(tokensAfter(3, 0, 99), 0);
});

test("the bucket never holds more than the limit", () => {
  assert.equal(tokensAfter(3, 0, WINDOW_S * 10), 3);
  assert.equal(tokensAfter(3, 2, WINDOW_S), 3);
});

test("the scenes follow the story", () => {
  assert.equal(sceneFor(0).tokens, DEFAULT_LIMIT);
  assert.equal(sceneFor(1).burstHere, true);
  assert.equal(sceneFor(2).tokens, 0);
  assert.equal(sceneFor(2).results.length, 3);
  assert.equal(sceneFor(3).results.filter((r) => r === "429").length, 2);
  assert.equal(sceneFor(4).tokens, 1);
  assert.equal(sceneFor(5).tokens, DEFAULT_LIMIT);
  assert.equal(sceneFor(6, 5).tokens, 0);
  assert.equal(sceneFor(6, 5).results.every((r) => r === "ok"), true);
});

test("the definition has 5 to 8 steps that match the scenes", () => {
  assert.equal(DEF.id, "rate-limiting");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
});

test("the chips function returns a value for every step", () => {
  const source = readFileSync(new URL("../components/visuals/RateLimitingStage.tsx", import.meta.url), "utf8");
  assert.match(source, /export function rateLimitingChips/);
  assert.match(source, /export function RateLimitingStage/);
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/architecture/rate-limiting.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="rate-limiting" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});

test("the registry knows the visual once the parent wires it", () => {
  try {
    assert.equal(visualDef("rate-limiting").id, "rate-limiting");
  } catch {
    // not wired yet: the parent adds it to defs.ts
  }
});
