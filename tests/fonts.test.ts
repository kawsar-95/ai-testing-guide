import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");

test("Crimson Pro loads as a variable font, so every heading weight (500, 600, 700) exists", () => {
  const config = layout.slice(layout.indexOf("Crimson_Pro({"), layout.indexOf("});", layout.indexOf("Crimson_Pro({")));
  assert.ok(config.includes('variable: "--font-crimson"'));
  assert.doesNotMatch(config, /weight:/, "a static weight list drops the weights it does not name");
});
