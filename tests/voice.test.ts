import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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

// Contrast of the voice colors (WCAG 2.x relative luminance).
const CSS = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");

/** The text of one theme block of globals.css, up to its closing brace. */
function themeBlock(selector: string): string {
  const start = CSS.indexOf(selector);
  assert.notEqual(start, -1, `block not found: ${selector}`);
  return CSS.slice(start, CSS.indexOf("\n}", start));
}

/** The hex value of one custom property in a block. */
function tokenHex(block: string, name: string): string {
  const match = block.match(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{6})\\b`));
  assert.ok(match, `token missing: ${name}`);
  return match[1];
}

function luminance(hex: string): number {
  const channels = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const THEME_BLOCKS = {
  dark: ':root,\n:root[data-theme="dark"]',
  light: ':root[data-theme="light"]',
};

test("voice colors have 4.5:1 contrast on --bg and --bg-raised in both themes", () => {
  for (const [theme, selector] of Object.entries(THEME_BLOCKS)) {
    const block = themeBlock(selector);
    for (const bg of ["--bg", "--bg-raised"]) {
      for (const voice of ["--voice-layman", "--voice-bangla"]) {
        const ratio = contrast(tokenHex(block, voice), tokenHex(block, bg));
        console.log(`# ${theme} ${voice} on ${bg}: ${ratio.toFixed(2)}`);
        assert.ok(ratio >= 4.5, `${theme} ${voice} on ${bg} is ${ratio.toFixed(2)}`);
      }
    }
  }
});
