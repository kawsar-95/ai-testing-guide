import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseTokens } from "../lib/contrast.ts";

const CSS = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const DESIGN = readFileSync(new URL("../DESIGN.md", import.meta.url), "utf8");

type Row = { name: string; dark: string; light: string };

/**
 * The color tokens of the Colors table of DESIGN.md. A row is
 * `| \`--bg\` | \`#0e1115\` | \`#faf7f2\` | use |`, and a row can name several
 * tokens (`--good` / `--warn` / `--danger`) with one value each per theme.
 * Rows without a hex value (shadows, breakpoints) are not colors.
 */
function designColors(): Row[] {
  const rows: Row[] = [];
  for (const line of DESIGN.split("\n")) {
    const cells = line.split("|").map((cell) => cell.trim());
    if (cells.length < 5 || !cells[1].startsWith("`--")) continue;
    const names = [...cells[1].matchAll(/`--([a-z0-9-]+)`/g)].map((m) => m[1]);
    const dark = [...cells[2].matchAll(/`(#[0-9a-f]{6})`/gi)].map((m) => m[1].toLowerCase());
    const light = [...cells[3].matchAll(/`(#[0-9a-f]{6})`/gi)].map((m) => m[1].toLowerCase());
    if (dark.length === 0 && light.length === 0) continue;
    assert.equal(dark.length, names.length, `DESIGN.md: the dark values of ${names.join(", ")}`);
    assert.equal(light.length, names.length, `DESIGN.md: the light values of ${names.join(", ")}`);
    names.forEach((name, i) => rows.push({ name, dark: dark[i], light: light[i] }));
  }
  return rows;
}

test("DESIGN.md lists every color token of the two themes", () => {
  const names = designColors().map((row) => row.name);
  assert.ok(names.length >= 17, `only ${names.length} color tokens found in DESIGN.md`);
  for (const theme of ["dark", "light"] as const) {
    for (const [name, value] of Object.entries(parseTokens(CSS, theme))) {
      if (!value.startsWith("#")) continue;
      assert.ok(names.includes(name), `--${name} is in app/globals.css (${theme}) but not in DESIGN.md`);
    }
  }
});

for (const theme of ["dark", "light"] as const) {
  test(`every color token has the value of DESIGN.md in app/globals.css (${theme})`, () => {
    const tokens = parseTokens(CSS, theme);
    for (const row of designColors()) {
      assert.equal(tokens[row.name]?.toLowerCase(), row[theme], `--${row.name} (${theme})`);
    }
  });
}
