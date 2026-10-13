import { test } from "node:test";
import assert from "node:assert/strict";
import type { Level, McqItem } from "../lib/prep/types.ts";
import {
  STORAGE_KEY,
  parseProgress,
  serializeProgress,
  toggleDone,
  countDone,
  percent,
} from "../lib/prep/progress.ts";
import { createProgressStore, type StorageLike } from "../lib/prep/store.ts";
import { isCorrect, startIndex, advanceTarget } from "../lib/prep/quiz.ts";
import {
  PREFS_KEY,
  DEFAULT_PREFS,
  parsePrefs,
  serializePrefs,
  filterByLevel,
  hasLevels,
  applyLevelFilter,
  levelForHash,
  createPrefsStore,
} from "../lib/prep/prefs.ts";

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

// --- quiz.ts ---

const mcq: McqItem = {
  kind: "mcq",
  id: "mcq-test-001",
  question: "q",
  options: ["a", "b", "c"],
  answer: 1,
  explanation: "e",
  source: "https://example.com/",
};

test("isCorrect is true for the answer index only (Review Focus 5)", () => {
  assert.equal(isCorrect(mcq, 1), true);
  assert.equal(isCorrect(mcq, 0), false);
  assert.equal(isCorrect(mcq, 2), false);
});

test("startIndex finds the item for a hash, else 0 (Review Focus 5)", () => {
  const items = [{ id: "a" }, { id: "b" }, { id: "c" }];
  assert.equal(startIndex(items, "#b"), 1);
  assert.equal(startIndex(items, "#c"), 2);
  assert.equal(startIndex(items, "#nope"), 0);
  assert.equal(startIndex(items, ""), 0);
  assert.equal(startIndex(items, "#"), 0);
  assert.equal(startIndex([], "#a"), 0);
});

test("advanceTarget moves on only after a correct answer with auto-advance (Review Focus 7)", () => {
  assert.equal(advanceTarget(0, 3, true, true), 1);
  assert.equal(advanceTarget(1, 3, true, true), 2);
  assert.equal(advanceTarget(0, 3, false, true), null);
  assert.equal(advanceTarget(0, 3, true, false), null);
  assert.equal(advanceTarget(2, 3, true, true), null);
  assert.equal(advanceTarget(0, 0, true, true), null);
});

// --- prefs.ts ---

test("PREFS_KEY and DEFAULT_PREFS", () => {
  assert.equal(PREFS_KEY, "prep-prefs");
  assert.deepEqual(DEFAULT_PREFS, { view: "table", autoAdvance: false, level: "all" });
});

test("parsePrefs: bad input gives the defaults (Review Focus 6)", () => {
  assert.deepEqual(parsePrefs(null), DEFAULT_PREFS);
  assert.deepEqual(parsePrefs(""), DEFAULT_PREFS);
  assert.deepEqual(parsePrefs("{"), DEFAULT_PREFS);
  assert.deepEqual(parsePrefs("[]"), DEFAULT_PREFS);
  assert.deepEqual(parsePrefs("null"), DEFAULT_PREFS);
  assert.deepEqual(
    parsePrefs('{"view":"grid","autoAdvance":"yes","level":"expert"}'),
    DEFAULT_PREFS,
  );
});

test("parsePrefs: each bad field falls back on its own", () => {
  assert.deepEqual(parsePrefs('{"view":"cards","level":"hard"}'), {
    view: "cards",
    autoAdvance: false,
    level: "hard",
  });
  assert.deepEqual(parsePrefs('{"view":"cards","autoAdvance":true,"level":"expert"}'), {
    view: "cards",
    autoAdvance: true,
    level: "all",
  });
});

test("serializePrefs then parsePrefs round-trips", () => {
  const prefs = { view: "cards", autoAdvance: true, level: "medium" } as const;
  assert.deepEqual(parsePrefs(serializePrefs(prefs)), prefs);
  assert.deepEqual(parsePrefs(serializePrefs(DEFAULT_PREFS)), DEFAULT_PREFS);
});

test("filterByLevel", () => {
  const items = [
    { id: "a", level: "easy" as const },
    { id: "b", level: "hard" as const },
    { id: "c" },
    { id: "d", level: "easy" as const },
  ];
  assert.deepEqual(filterByLevel(items, "all"), items);
  assert.deepEqual(
    filterByLevel(items, "easy").map((i) => i.id),
    ["a", "d"],
  );
  assert.deepEqual(filterByLevel(items, "medium"), []);
  assert.ok(!filterByLevel(items, "hard").some((i) => i.id === "c"));
  assert.notEqual(filterByLevel(items, "all"), items);
});

test("prefs store: set writes JSON under prep-prefs", () => {
  const storage = fakeStorage();
  const store = createPrefsStore(storage);
  assert.deepEqual(store.getSnapshot(), DEFAULT_PREFS);
  store.set("view", "cards");
  assert.deepEqual(JSON.parse(storage.data.get("prep-prefs") as string), {
    view: "cards",
    autoAdvance: false,
    level: "all",
  });
  assert.equal(store.getSnapshot().view, "cards");
});

test("prefs store: the snapshot keeps its reference without a change", () => {
  const storage = fakeStorage();
  const store = createPrefsStore(storage);
  const first = store.getSnapshot();
  assert.equal(store.getSnapshot(), first);
  store.refresh();
  assert.equal(store.getSnapshot(), first);
  store.set("view", "table");
  assert.equal(store.getSnapshot(), first);
  store.set("view", "cards");
  assert.notEqual(store.getSnapshot(), first);
});

test("prefs store: a listener runs once for each change", () => {
  const store = createPrefsStore(fakeStorage());
  let calls = 0;
  const unsubscribe = store.subscribe(() => calls++);
  store.set("view", "cards");
  assert.equal(calls, 1);
  store.set("view", "cards");
  assert.equal(calls, 1);
  store.set("autoAdvance", true);
  assert.equal(calls, 2);
  store.set("level", "easy");
  assert.equal(calls, 3);
  unsubscribe();
  store.set("level", "hard");
  assert.equal(calls, 3);
});

test("prefs store: refresh picks up a value that another party wrote", () => {
  const storage = fakeStorage();
  const store = createPrefsStore(storage);
  let calls = 0;
  store.subscribe(() => calls++);
  storage.data.set("prep-prefs", '{"view":"cards","autoAdvance":true,"level":"easy"}');
  store.refresh();
  assert.deepEqual(store.getSnapshot(), { view: "cards", autoAdvance: true, level: "easy" });
  assert.equal(calls, 1);
});

test("prefs store: invalid stored data gives the defaults (Review Focus 6)", () => {
  const storage = fakeStorage();
  storage.data.set("prep-prefs", '{"view":"grid","autoAdvance":"yes","level":"expert"}');
  const store = createPrefsStore(storage);
  assert.deepEqual(store.getSnapshot(), DEFAULT_PREFS);
});

test("prefs store: a throwing or null storage falls back to memory (Review Focus 2)", () => {
  for (const storage of [throwingStorage, null]) {
    const store = createPrefsStore(storage);
    assert.deepEqual(store.getSnapshot(), DEFAULT_PREFS);
    store.set("view", "cards");
    assert.equal(store.getSnapshot().view, "cards");
    store.refresh();
    assert.equal(store.getSnapshot().view, "cards");
  }
});

// --- level scope and hash links ---

type Fixture = { id: string; level?: Level };
const LEVELED: Fixture[] = [
  { id: "a-001", level: "easy" },
  { id: "a-002", level: "medium" },
  { id: "a-003", level: "hard" },
];
const PLAIN: Fixture[] = [{ id: "b-001" }, { id: "b-002" }];

test("hasLevels: true with one level, false without levels, false for an empty list", () => {
  assert.equal(hasLevels(LEVELED), true);
  assert.equal(hasLevels([{}, { level: "easy" }]), true);
  assert.equal(hasLevels(PLAIN), false);
  assert.equal(hasLevels([]), false);
});

test("applyLevelFilter: a stored level of hard leaves an area without levels untouched (global level key)", () => {
  assert.deepEqual(applyLevelFilter(PLAIN, "hard"), PLAIN);
  assert.deepEqual(applyLevelFilter(PLAIN, "easy"), PLAIN);
  assert.deepEqual(applyLevelFilter([], "hard"), []);
});

test("applyLevelFilter: an area with levels is filtered", () => {
  assert.deepEqual(applyLevelFilter(LEVELED, "hard"), [LEVELED[2]]);
  assert.deepEqual(applyLevelFilter(LEVELED, "all"), LEVELED);
});

test("levelForHash: the hash of a hidden item resets the level to all", () => {
  assert.equal(levelForHash(LEVELED, "hard", "#a-001"), "all");
  assert.equal(levelForHash(LEVELED, "hard", "a-002"), "all");
});

test("levelForHash: the hash of a visible item keeps the level", () => {
  assert.equal(levelForHash(LEVELED, "hard", "#a-003"), "hard");
});

test("levelForHash: an unknown or empty hash keeps the level", () => {
  assert.equal(levelForHash(LEVELED, "hard", "#nope"), "hard");
  assert.equal(levelForHash(LEVELED, "hard", ""), "hard");
  assert.equal(levelForHash(LEVELED, "hard", "#"), "hard");
});

test("levelForHash: level all stays all", () => {
  assert.equal(levelForHash(LEVELED, "all", "#a-001"), "all");
});

test("levelForHash: an area without levels is never filtered, so the level stays", () => {
  assert.equal(levelForHash(PLAIN, "hard", "#b-001"), "hard");
});
