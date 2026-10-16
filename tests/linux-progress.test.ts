import { test } from "node:test";
import assert from "node:assert/strict";
import { countDone, percent } from "../lib/prep/progress.ts";
import { createProgressStore, type StorageLike } from "../lib/prep/store.ts";

/** A storage that keeps its values in a Map. */
function fakeStorage(): StorageLike & { data: Map<string, string> } {
  const data = new Map<string, string>();
  return {
    data,
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => {
      data.set(key, value);
    },
  };
}

/** A storage that throws on each call, like localStorage in some private modes. */
const throwingStorage: StorageLike = {
  getItem() {
    throw new Error("denied");
  },
  setItem() {
    throw new Error("denied");
  },
};

test("a store with the key 'linux-progress' writes only that key", () => {
  const storage = fakeStorage();
  const store = createProgressStore(storage, "linux-progress");
  store.toggle("a");
  assert.equal(storage.data.get("linux-progress"), '["a"]');
  assert.equal(storage.data.has("prep-progress"), false);
  assert.equal(storage.data.size, 1);
});

test("the default key is still 'prep-progress'", () => {
  const storage = fakeStorage();
  const store = createProgressStore(storage);
  store.toggle("a");
  assert.equal(storage.data.get("prep-progress"), '["a"]');
  assert.equal(storage.data.has("linux-progress"), false);
});

test("a prep store and a linux store on one storage do not change each other", () => {
  const storage = fakeStorage();
  const prep = createProgressStore(storage);
  const linux = createProgressStore(storage, "linux-progress");
  let prepCalls = 0;
  let linuxCalls = 0;
  prep.subscribe(() => prepCalls++);
  linux.subscribe(() => linuxCalls++);
  prep.toggle("p-1");
  linux.toggle("l-1");
  linux.markDone("l-2");
  assert.deepEqual(prep.getSnapshot(), ["p-1"]);
  assert.deepEqual(linux.getSnapshot(), ["l-1", "l-2"]);
  assert.equal(storage.data.get("prep-progress"), '["p-1"]');
  assert.equal(storage.data.get("linux-progress"), '["l-1","l-2"]');
  prep.refresh();
  linux.refresh();
  assert.deepEqual(prep.getSnapshot(), ["p-1"]);
  assert.deepEqual(linux.getSnapshot(), ["l-1", "l-2"]);
  assert.equal(prepCalls, 1);
  assert.equal(linuxCalls, 2);
});

test("bad stored values give an empty list", () => {
  for (const raw of ["", "not json", '{"a":1}', "null"]) {
    const storage = fakeStorage();
    storage.data.set("linux-progress", raw);
    const store = createProgressStore(storage, "linux-progress");
    assert.deepEqual(store.getSnapshot(), [], `raw: ${raw}`);
  }
});

test("a storage that throws on read gives an empty list and still toggles in memory", () => {
  const store = createProgressStore(throwingStorage, "linux-progress");
  assert.deepEqual(store.getSnapshot(), []);
  store.toggle("a");
  assert.deepEqual(store.getSnapshot(), ["a"]);
  store.refresh();
  assert.deepEqual(store.getSnapshot(), ["a"]);
});

test("a stored id of a removed topic is not counted and the percent stays at most 100", () => {
  assert.equal(countDone(["x-001", "x-002"], ["gone-009", "x-001"]), 1);
  assert.equal(percent(1, 2), 50);
  const all = countDone(["x-001"], ["x-001", "gone-009", "gone-010"]);
  assert.ok(percent(all, 1) <= 100);
});
