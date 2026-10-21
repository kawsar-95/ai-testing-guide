import { test } from "node:test";
import assert from "node:assert/strict";
import {
  STORAGE_KEY,
  parseProgress,
  serializeProgress,
  toggleDone,
  countDone,
  percent,
} from "../lib/prep/progress.ts";
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

// --- progress.ts ---

test("STORAGE_KEY is prep-progress", () => {
  assert.equal(STORAGE_KEY, "prep-progress");
});

test("parseProgress: bad input gives an empty list, no crash (Review Focus 1)", () => {
  assert.deepEqual(parseProgress(null), []);
  assert.deepEqual(parseProgress(""), []);
  assert.deepEqual(parseProgress("{"), []);
  assert.deepEqual(parseProgress("{}"), []);
  assert.deepEqual(parseProgress('"a"'), []);
  assert.deepEqual(parseProgress('["a",1,null,"a"]'), ["a"]);
});

test("serializeProgress then parseProgress returns the same ids", () => {
  const ids = ["intern-001", "mcq-test-005"];
  assert.deepEqual(parseProgress(serializeProgress(ids)), ids);
});

test("toggleDone adds, removes, and does not change its input", () => {
  const input = ["a"];
  const added = toggleDone(input, "b");
  assert.deepEqual(added, ["a", "b"]);
  assert.deepEqual(input, ["a"]);
  const removed = toggleDone(added, "a");
  assert.deepEqual(removed, ["b"]);
  assert.deepEqual(added, ["a", "b"]);
  assert.notEqual(removed, added);
});

test("countDone ignores stored ids that no longer exist (Review Focus 3)", () => {
  assert.equal(countDone(["a", "b"], ["b", "zzz", "b"]), 1);
  assert.equal(countDone(["a", "b"], ["zzz", "yyy"]), 0);
  const ids = ["a", "b", "c"];
  const done = ["a", "b", "c", "old-1", "old-2"];
  assert.ok(percent(countDone(ids, done), ids.length) <= 100);
  assert.equal(percent(countDone(ids, done), ids.length), 100);
});

test("percent handles an empty area and rounds down (Review Focus 4)", () => {
  assert.equal(percent(0, 0), 0);
  assert.equal(percent(3, 0), 0);
  assert.ok(!Number.isNaN(percent(0, 0)));
  assert.equal(percent(1, 3), 33);
  assert.equal(percent(2, 3), 66);
  assert.equal(percent(299, 300), 99);
  assert.equal(percent(5, 3), 100);
  assert.equal(percent(0, 5), 0);
  assert.equal(percent(5, 5), 100);
});

// --- store.ts ---

test("progress store: toggle writes JSON under prep-progress", () => {
  const storage = fakeStorage();
  const store = createProgressStore(storage);
  assert.deepEqual(store.getSnapshot(), []);
  store.toggle("x");
  assert.equal(storage.data.get("prep-progress"), '["x"]');
  assert.deepEqual(store.getSnapshot(), ["x"]);
  store.toggle("x");
  assert.equal(storage.data.get("prep-progress"), "[]");
  assert.deepEqual(store.getSnapshot(), []);
});

test("progress store: markDone adds an id and keeps it done when called again", () => {
  const storage = fakeStorage();
  const store = createProgressStore(storage);
  store.markDone("a");
  assert.deepEqual(store.getSnapshot(), ["a"]);
  const before = store.getSnapshot();
  let calls = 0;
  store.subscribe(() => calls++);
  store.markDone("a");
  assert.equal(store.getSnapshot(), before);
  assert.equal(calls, 0);
});

test("progress store: the snapshot keeps its reference without a change", () => {
  const storage = fakeStorage();
  storage.data.set("prep-progress", '["a"]');
  const store = createProgressStore(storage);
  const first = store.getSnapshot();
  assert.equal(store.getSnapshot(), first);
  store.refresh();
  assert.equal(store.getSnapshot(), first);
  assert.deepEqual(first, ["a"]);
});

test("progress store: a listener runs once for each change", () => {
  const store = createProgressStore(fakeStorage());
  let calls = 0;
  store.subscribe(() => calls++);
  store.toggle("a");
  assert.equal(calls, 1);
  store.toggle("b");
  assert.equal(calls, 2);
  store.toggle("a");
  assert.equal(calls, 3);
});

test("progress store: refresh picks up a value that another party wrote", () => {
  const storage = fakeStorage();
  const store = createProgressStore(storage);
  let calls = 0;
  store.subscribe(() => calls++);
  const before = store.getSnapshot();
  storage.data.set("prep-progress", '["from-other-tab"]');
  store.refresh();
  assert.deepEqual(store.getSnapshot(), ["from-other-tab"]);
  assert.notEqual(store.getSnapshot(), before);
  assert.equal(calls, 1);
  store.refresh();
  assert.equal(calls, 1);
});

test("progress store: unsubscribe stops calls", () => {
  const store = createProgressStore(fakeStorage());
  let calls = 0;
  const unsubscribe = store.subscribe(() => calls++);
  store.toggle("a");
  assert.equal(calls, 1);
  unsubscribe();
  store.toggle("b");
  assert.equal(calls, 1);
});

test("progress store: invalid stored data gives an empty snapshot (Review Focus 1)", () => {
  for (const raw of ["{", "{}", '"a"', '[1,null]', ""]) {
    const storage = fakeStorage();
    storage.data.set("prep-progress", raw);
    const store = createProgressStore(storage);
    assert.deepEqual(store.getSnapshot(), [], `raw: ${raw}`);
    store.toggle("x");
    assert.deepEqual(store.getSnapshot(), ["x"], `raw: ${raw}`);
  }
});

test("progress store: a storage that throws falls back to memory (Review Focus 2)", () => {
  const store = createProgressStore(throwingStorage);
  assert.deepEqual(store.getSnapshot(), []);
  store.toggle("x");
  assert.deepEqual(store.getSnapshot(), ["x"]);
  store.refresh();
  assert.deepEqual(store.getSnapshot(), ["x"]);
  store.markDone("y");
  assert.deepEqual(store.getSnapshot(), ["x", "y"]);
});

test("progress store: a storage that throws only on write keeps the click in memory", () => {
  const store = createProgressStore({
    getItem: () => null,
    setItem() {
      throw new Error("quota");
    },
  });
  store.toggle("x");
  assert.deepEqual(store.getSnapshot(), ["x"]);
  store.refresh();
  assert.deepEqual(store.getSnapshot(), ["x"]);
});

test("progress store: null storage falls back to memory (Review Focus 2)", () => {
  const store = createProgressStore(null);
  assert.deepEqual(store.getSnapshot(), []);
  let calls = 0;
  store.subscribe(() => calls++);
  store.toggle("x");
  assert.deepEqual(store.getSnapshot(), ["x"]);
  assert.equal(calls, 1);
  store.refresh();
  assert.deepEqual(store.getSnapshot(), ["x"]);
});

test("progress store: clear empties the list and writes []", () => {
  const storage = fakeStorage();
  const store = createProgressStore(storage, "page-read");
  store.toggle("/a/");
  store.toggle("/b/");
  store.clear();
  assert.deepEqual(store.getSnapshot(), []);
  assert.equal(storage.data.get("page-read"), "[]");
});
