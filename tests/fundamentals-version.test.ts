import { test } from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_VERSION,
  VERSION_ATTRIBUTE,
  VERSION_EVENT,
  VERSION_INIT_SCRIPT,
  VERSION_STORAGE_KEY,
  resolveVersion,
} from "../lib/fundamentals/version.ts";

test("the constants have the values of the plan", () => {
  assert.equal(VERSION_STORAGE_KEY, "fundamentals-version");
  assert.equal(VERSION_ATTRIBUTE, "data-fundamentals-version");
  assert.equal(VERSION_EVENT, "fundamentals-version-change");
  assert.equal(DEFAULT_VERSION, "istqb");
});

test("resolveVersion: a saved valid choice wins, anything else gives the default", () => {
  assert.equal(resolveVersion(null), "istqb");
  assert.equal(resolveVersion("notes"), "notes");
  assert.equal(resolveVersion("istqb"), "istqb");
  assert.equal(resolveVersion("bogus"), "istqb");
  assert.equal(resolveVersion(""), "istqb");
});

/** Runs the inline head script against a fake browser and returns the attributes. */
function runInitScript(stored: string | null, storageThrows = false) {
  const attrs: Record<string, string> = {};
  const localStorage = {
    getItem(key: string) {
      if (storageThrows) throw new Error("blocked");
      return key === VERSION_STORAGE_KEY ? stored : null;
    },
  };
  const document = {
    documentElement: { setAttribute: (name: string, value: string) => (attrs[name] = value) },
  };
  new Function("localStorage", "document", VERSION_INIT_SCRIPT)(localStorage, document);
  return attrs;
}

test("VERSION_INIT_SCRIPT agrees with resolveVersion in every case", () => {
  for (const stored of [null, "notes", "istqb", "bogus"]) {
    assert.equal(runInitScript(stored)[VERSION_ATTRIBUTE], resolveVersion(stored), String(stored));
  }
});

test("VERSION_INIT_SCRIPT does not throw and sets no attribute when storage is blocked", () => {
  let attrs: Record<string, string> = {};
  assert.doesNotThrow(() => {
    attrs = runInitScript(null, true);
  });
  assert.deepEqual(attrs, {});
});
