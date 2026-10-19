import { test } from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import {
  PANEL_TITLES,
  VOICE_DEFAULT_ATTR,
  VOICE_INIT_SCRIPT,
  VOICE_LABELS,
  VOICE_STORAGE_KEY,
  VOICE_TOGGLE_TEXT,
  isPanelVisible,
  resolveVoiceDefault,
  voiceOrder,
} from "../lib/voice.ts";

test("resolveVoiceDefault: only 'bangla' selects Bangla", () => {
  assert.equal(resolveVoiceDefault("bangla"), "bangla");
  for (const s of ["technical", null, "", "layman", "all", "BANGLA"]) assert.equal(resolveVoiceDefault(s), "technical");
});

test("voiceOrder: Technical first, or বাংলা first for a Bangla reader", () => {
  assert.deepEqual(voiceOrder("technical"), ["technical", "layman", "bangla", "all"]);
  assert.deepEqual(voiceOrder("bangla"), ["bangla", "technical", "layman", "all"]);
});

test("isPanelVisible: one panel per voice, all panels for 'all'", () => {
  for (const panel of ["technical", "layman", "bangla"] as const) {
    assert.equal(isPanelVisible(panel, "all"), true);
    for (const voice of ["technical", "layman", "bangla"] as const) assert.equal(isPanelVisible(panel, voice), panel === voice);
  }
});

test("labels match the reference site", () => {
  assert.deepEqual(VOICE_LABELS, { technical: "Technical", layman: "সহজ English", bangla: "বাংলা", all: "সবগুলো" });
  assert.deepEqual(PANEL_TITLES, { layman: "সহজ English", bangla: "বাংলা ব্যাখ্যা" });
  assert.deepEqual(VOICE_TOGGLE_TEXT, { technical: "বাংলা", bangla: "English" });
});

test("the storage key and the attribute name", () => {
  assert.equal(VOICE_STORAGE_KEY, "voice");
  assert.equal(VOICE_DEFAULT_ATTR, "data-voice-default");
});

/** Runs the inline head script against a fake browser and returns data-voice-default. */
function runInitScript(stored: string | null, storageThrows = false) {
  const attrs: Record<string, string> = {};
  const context = {
    localStorage: {
      getItem(key: string) {
        if (storageThrows) throw new Error("blocked");
        return key === VOICE_STORAGE_KEY ? stored : null;
      },
    },
    document: {
      documentElement: { setAttribute: (name: string, value: string) => (attrs[name] = value) },
    },
  };
  vm.runInNewContext(VOICE_INIT_SCRIPT, context);
  return attrs[VOICE_DEFAULT_ATTR];
}

test("VOICE_INIT_SCRIPT agrees with resolveVoiceDefault in every case", () => {
  for (const stored of ["bangla", "technical", null, "junk"])
    assert.equal(runInitScript(stored), resolveVoiceDefault(stored));
});

test("VOICE_INIT_SCRIPT leaves the attribute alone if storage throws", () => {
  assert.equal(runInitScript(null, true), undefined);
});
