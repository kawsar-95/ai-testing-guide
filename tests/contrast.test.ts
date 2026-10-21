import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { contrastRatio, mixColors, parseTokens } from "../lib/contrast.ts";

const CSS = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");

const TEXT_TOKENS = [
  "text",
  "text-dim",
  "text-faint",
  "accent",
  "accent-2",
  "good",
  "warn",
  "danger",
  "voice-layman",
  "voice-bangla",
];
const BACKGROUNDS = ["bg", "bg-raised", "bg-raised-2"];

test("contrastRatio gives the WCAG values", () => {
  assert.equal(Math.round(contrastRatio("#000000", "#ffffff") * 10) / 10, 21);
  assert.equal(contrastRatio("#777777", "#777777"), 1);
  assert.equal(contrastRatio("#ffffff", "#000000"), contrastRatio("#000000", "#ffffff"));
});

test("parseTokens reads the token block of each theme", () => {
  assert.match(parseTokens(CSS, "light").bg, /^#[0-9a-f]{6}$/);
  assert.notEqual(parseTokens(CSS, "light").bg, parseTokens(CSS, "dark").bg);
});

for (const theme of ["light", "dark"] as const) {
  test(`every text token has 4.5:1 or more on every background (${theme})`, () => {
    const tokens = parseTokens(CSS, theme);
    for (const fg of TEXT_TOKENS) {
      for (const bg of BACKGROUNDS) {
        assert.ok(tokens[fg], `${theme}: --${fg} is missing`);
        const ratio = contrastRatio(tokens[fg], tokens[bg]);
        assert.ok(ratio >= 4.5, `${theme}: --${fg} on --${bg} is ${ratio.toFixed(2)}:1`);
      }
    }
  });
}

test("mixColors mixes two colors in sRGB", () => {
  assert.equal(mixColors("#000000", "#ffffff", 50), "#808080");
  assert.equal(mixColors("#0f766e", "#faf7f2", 0), "#faf7f2");
  assert.equal(mixColors("#0f766e", "#faf7f2", 100), "#0f766e");
});

for (const theme of ["light", "dark"] as const) {
  test(`the hero text keeps 4.5:1 on the peaks of the teal and amber glows (${theme})`, () => {
    const tokens = parseTokens(CSS, theme);
    for (const [color, token] of [["accent", "hero-glow"], ["accent-2", "hero-glow-2"]]) {
      const glow = Number.parseFloat(tokens[token]);
      assert.ok(glow > 0, `${theme}: --${token} is missing`);
      const peak = mixColors(tokens[color], tokens.bg, glow);
      for (const fg of ["text", "text-dim", "text-faint", "accent"]) {
        const ratio = contrastRatio(tokens[fg], peak);
        assert.ok(ratio >= 4.5, `${theme}: --${fg} on the --${color} glow is ${ratio.toFixed(2)}:1`);
      }
    }
  });
}

test("the hero glow uses the --hero-glow token", () => {
  assert.match(CSS, /color-mix\(in srgb, var\(--accent\) var\(--hero-glow\), transparent\)/);
  assert.match(CSS, /color-mix\(in srgb, var\(--accent-2\) var\(--hero-glow-2\), transparent\)/);
});
