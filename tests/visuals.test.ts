import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { VISUAL_DEFS, visualDef } from "../lib/visuals/defs.ts";
import {
  KEYS,
  KEY_COUNT,
  SERVERS_4,
  SERVERS_VIRTUAL,
  loadSpread,
  ownerOf,
  ownersModulo,
  ownersRing,
  sceneFor,
} from "../lib/visuals/ring.ts";

test("every visual has an English and a Bangla text for the title, the promise, the recap, and each step", () => {
  for (const def of Object.values(VISUAL_DEFS)) {
    const texts = [def.title, def.promise, def.recap, ...def.steps.flatMap((s) => [s.title, s.body])];
    for (const t of texts) {
      assert.ok(t.en.trim().length > 0, `${def.id}: empty English text`);
      assert.ok(t.bn.trim().length > 0, `${def.id}: empty Bangla text`);
      assert.match(t.bn, /[\u0980-\u09FF]/, `${def.id}: the Bangla text has no Bangla letters: ${t.bn}`);
    }
    assert.ok(def.steps.length >= 5 && def.steps.length <= 8, `${def.id}: 5 to 8 steps`);
  }
});

test("each step caption is short: at most 40 words in English", () => {
  for (const def of Object.values(VISUAL_DEFS)) {
    for (const step of def.steps) {
      assert.ok(step.body.en.split(/\s+/).length <= 40, `${def.id}: ${step.title.en}`);
    }
  }
});

test("visualDef throws for an unknown id", () => {
  assert.throws(() => visualDef("no-such-visual"), /No visual definition/);
});

test("the ring has 30 keys with an angle on the circle and an integer hash", () => {
  assert.equal(KEYS.length, KEY_COUNT);
  for (const key of KEYS) {
    assert.ok(key.angle >= 0 && key.angle < 360);
    assert.ok(Number.isInteger(key.hash));
  }
});

test("a key belongs to the first server point clockwise, and the ring wraps around", () => {
  assert.equal(ownerOf(10, SERVERS_4), "A"); // A sits at 20
  assert.equal(ownerOf(21, SERVERS_4), "D"); // D sits at 80
  assert.equal(ownerOf(141, SERVERS_4), "C"); // C sits at 250
  assert.equal(ownerOf(300, SERVERS_4), "A"); // past the last point: back to A
  assert.equal(ownerOf(0, []), null);
});

test("the aha: a new server moves few keys on the ring and most keys with modulo", () => {
  const compare = sceneFor(4);
  assert.ok(compare.movedRing > 0, "some keys move");
  assert.ok(compare.movedRing <= KEY_COUNT / 4, `the ring moves at most about 1/4: ${compare.movedRing}`);
  assert.ok(compare.movedModulo > KEY_COUNT / 2, `modulo moves most keys: ${compare.movedModulo}`);
});

test("the ring and the modulo scenes color the keys by their own rule", () => {
  assert.deepEqual(sceneFor(4, "ring").owners, ownersRing(SERVERS_4));
  assert.deepEqual(sceneFor(4, "modulo").owners, ownersModulo(SERVERS_4));
});

test("a key that moved when B left was owned by B before", () => {
  const before = sceneFor(3).owners;
  const after = sceneFor(5);
  after.moved.forEach((moved, i) => {
    if (moved) assert.equal(before[i], "B");
  });
  assert.ok(after.movedRing > 0);
});

test("virtual nodes spread the keys more evenly than one place for each server", () => {
  const one = loadSpread(ownersRing(SERVERS_4), SERVERS_4);
  const many = loadSpread(ownersRing(SERVERS_VIRTUAL), SERVERS_VIRTUAL);
  assert.ok(many.max - many.min < one.max - one.min, `${JSON.stringify(many)} vs ${JSON.stringify(one)}`);
});

test("the step count of the definition matches the scenes", () => {
  const def = visualDef("consistent-hashing");
  assert.equal(def.steps.length, 7);
  assert.equal(sceneFor(def.steps.length - 1).servers, SERVERS_VIRTUAL);
});

test("the consistent-hashing page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/course/consistent-hashing.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="consistent-hashing" />');
  const firstSection = source.indexOf("\n## ");
  assert.ok(meta > 0 && visual > meta && visual < firstSection);
});

test("every <Visual> in the content names a visual that exists", () => {
  const files = readdirSync(new URL("../content", import.meta.url), { recursive: true, encoding: "utf8" }).filter((f) => f.endsWith(".mdx"));
  let found = 0;
  for (const file of files) {
    const source = readFileSync(new URL(`../content/${file}`, import.meta.url), "utf8");
    for (const m of source.matchAll(/<Visual name="([^"]+)"\s*\/>/g)) {
      found += 1;
      assert.ok(VISUAL_DEFS[m[1]], `${file}: no visual "${m[1]}"`);
    }
  }
  assert.ok(found >= 1);
});
