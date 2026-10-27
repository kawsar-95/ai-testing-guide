import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import {
  PAGE_VOICE_STORAGE_KEY,
  PANEL_TITLES,
  VOICE_DEFAULT_ATTR,
  VOICE_INIT_SCRIPT,
  VOICE_LABELS,
  VOICE_STORAGE_KEY,
  VOICE_TOGGLE_TEXT,
  isPanelVisible,
  isVoice,
  resolvePageVoice,
  resolveVoiceDefault,
  switchStyle,
  voiceOrder,
} from "../lib/voice.ts";

test("resolveVoiceDefault: only 'bangla' selects Bangla", () => {
  assert.equal(resolveVoiceDefault("bangla"), "bangla");
  for (const s of ["technical", null, "", "layman", "BANGLA"]) assert.equal(resolveVoiceDefault(s), "technical");
});

test("voiceOrder: Technical first, or বাংলা first for a Bangla reader", () => {
  assert.deepEqual(voiceOrder("technical"), ["technical", "layman", "bangla"]);
  assert.deepEqual(voiceOrder("bangla"), ["bangla", "technical", "layman"]);
});

test("isPanelVisible: one panel per voice", () => {
  for (const panel of ["technical", "layman", "bangla"] as const) {
    for (const voice of ["technical", "layman", "bangla"] as const) assert.equal(isPanelVisible(panel, voice), panel === voice);
  }
});

test("labels match the reference site", () => {
  assert.deepEqual(VOICE_LABELS, { technical: "Technical", layman: "সহজ English", bangla: "বাংলা" });
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
        assert.ok(ratio >= 4.5, `${theme} ${voice} on ${bg} is ${ratio.toFixed(2)}`);
      }
    }
  }
});

// A small evaluator of the CSS color values that the voice UI uses:
// var(--token), transparent, and color-mix(in srgb, A p%, B).

type Rgba = { rgb: [number, number, number]; a: number };

function hexRgb(hex: string): [number, number, number] {
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)) as [number, number, number];
}

function rgbHex(rgb: number[]): string {
  return "#" + rgb.map((c) => Math.round(c).toString(16).padStart(2, "0")).join("");
}

/** Splits the arguments of a CSS function at its top-level commas. */
function splitArgs(inner: string): string[] {
  const args: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < inner.length; i++) {
    if (inner[i] === "(") depth++;
    else if (inner[i] === ")") depth--;
    else if (inner[i] === "," && depth === 0) {
      args.push(inner.slice(start, i).trim());
      start = i + 1;
    }
  }
  args.push(inner.slice(start).trim());
  return args;
}

/**
 * The value of a CSS color in one theme block. color-mix(in srgb, …) is a
 * linear mix of the 0-255 channels, with premultiplied alpha. A hex value
 * is also accepted.
 */
function cssColor(value: string, block: string): Rgba {
  value = value.trim();
  if (value === "transparent") return { rgb: [0, 0, 0], a: 0 };
  if (/^#[0-9a-fA-F]{6}$/.test(value)) return { rgb: hexRgb(value), a: 1 };
  const token = value.match(/^var\((--[\w-]+)\)$/);
  if (token) return { rgb: hexRgb(tokenHex(block, token[1])), a: 1 };
  const mix = value.match(/^color-mix\((.*)\)$/);
  assert.ok(mix, `unknown color: ${value}`);
  const [space, first, second] = splitArgs(mix[1]);
  assert.equal(space, "in srgb");
  const part = first.match(/^(.*)\s+([\d.]+)%$/);
  assert.ok(part, `color-mix needs a percentage on its first color: ${value}`);
  const p = Number(part[2]) / 100;
  const x = cssColor(part[1], block);
  const y = cssColor(second, block);
  const a = p * x.a + (1 - p) * y.a;
  const rgb = [0, 1, 2].map((i) => (a === 0 ? 0 : (p * x.a * x.rgb[i] + (1 - p) * y.a * y.rgb[i]) / a));
  return { rgb: rgb as [number, number, number], a };
}

/** A color drawn over an opaque background, as a hex value. */
function over(color: Rgba, background: Rgba): string {
  return rgbHex([0, 1, 2].map((i) => color.a * color.rgb[i] + (1 - color.a) * background.rgb[i]));
}

test("the selected switcher text has 4.5:1 contrast on its tint in both themes", () => {
  const low: string[] = [];
  for (const [theme, selector] of Object.entries(THEME_BLOCKS)) {
    const block = themeBlock(selector);
    const raised = cssColor("var(--bg-raised)", block);
    for (const voice of ["technical", "layman", "bangla"] as const) {
      const style = switchStyle(voice);
      const background = over(cssColor(style.backgroundColor, block), raised);
      const ratio = contrast(over(cssColor(style.color, block), cssColor(background, block)), background);
      if (ratio < 4.5) low.push(`${theme} ${voice} switcher text is ${ratio.toFixed(2)}`);
    }
  }
  assert.deepEqual(low, []);
});

test("the box title has 4.5:1 contrast on the box tint in both themes", () => {
  const low: string[] = [];
  for (const [theme, selector] of Object.entries(THEME_BLOCKS)) {
    const block = themeBlock(selector);
    for (const voice of ["--voice-layman", "--voice-bangla"]) {
      // The .voice-box background in app/globals.css.
      const background = over(cssColor(`color-mix(in srgb, var(${voice}) 4%, var(--bg))`, block), { rgb: [0, 0, 0], a: 1 });
      const ratio = contrast(tokenHex(block, voice), background);
      if (ratio < 4.5) low.push(`${theme} ${voice} box title is ${ratio.toFixed(2)}`);
    }
  }
  assert.deepEqual(low, []);
});

test("resolvePageVoice returns a stored voice", () => {
  assert.equal(resolvePageVoice("layman", "technical"), "layman");
  assert.equal(resolvePageVoice("bangla", "technical"), "bangla");
});

test("resolvePageVoice falls back to the default for null and for a bad value", () => {
  assert.equal(resolvePageVoice(null, "bangla"), "bangla");
  assert.equal(resolvePageVoice("x", "bangla"), "bangla");
  assert.equal(resolvePageVoice("", "technical"), "technical");
});

test("isVoice accepts the three voices only", () => {
  for (const v of ["technical", "layman", "bangla"]) assert.equal(isVoice(v), true);
  for (const v of [null, "", "x", "Technical", "english"]) assert.equal(isVoice(v), false);
});

test("setVoiceDefault sets the attribute, saves the voice, and clears the saved page voice", async () => {
  const attrs = new Map<string, string>();
  const store = new Map<string, string>([[PAGE_VOICE_STORAGE_KEY, "layman"]]);
  const g = globalThis as Record<string, unknown>;
  g.document = { documentElement: { setAttribute: (k: string, v: string) => attrs.set(k, v) } };
  g.localStorage = {
    setItem: (k: string, v: string) => store.set(k, v),
    removeItem: (k: string) => store.delete(k),
  };
  try {
    const { setVoiceDefault } = await import("../components/voice/useVoiceDefault.ts");
    setVoiceDefault("bangla");
    assert.equal(attrs.get(VOICE_DEFAULT_ATTR), "bangla");
    assert.equal(store.get(VOICE_STORAGE_KEY), "bangla");
    assert.equal(store.has(PAGE_VOICE_STORAGE_KEY), false);
    // Blocked storage does not throw.
    g.localStorage = { setItem: () => { throw new Error("blocked"); }, removeItem: () => { throw new Error("blocked"); } };
    setVoiceDefault("technical");
    assert.equal(attrs.get(VOICE_DEFAULT_ATTR), "technical");
  } finally {
    delete g.document;
    delete g.localStorage;
  }
});
