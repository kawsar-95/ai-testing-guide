import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = join("components", "fundamentals", "diagrams");
const DIAGRAMS = [
  "StlcDiagram",
  "TestingClassificationDiagram",
  "TestLevelsDiagram",
  "TestPyramidDiagram",
  "TestQuadrantsDiagram",
  "PinStateDiagram",
  "BugLifeCycleDiagram",
];
const read = (name: string) => readFileSync(join(DIR, `${name}.tsx`), "utf8");

// A hex color inside a fill, stroke, stopColor, or color attribute.
const HEX_COLOR = /(?:fill|stroke|stopColor|color)\s*=\s*(?:"|\{["'`])[^"'`]*#[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?\b/;

for (const name of DIAGRAMS) {
  test(`${name} is an accessible inline SVG with no hex color`, () => {
    const src = read(name);
    assert.ok(src.includes('role="img"'), "role=img");
    assert.ok(src.includes("<title"), "<title>");
    assert.ok(src.includes("aria-labelledby"), "aria-labelledby");
    assert.ok(src.includes("<Figure"), "uses Figure");
    assert.ok(src.includes("viewBox"), "viewBox");
    assert.ok(!HEX_COLOR.test(src), "no hex color in fill/stroke");
    assert.ok(!/style=\{\{/.test(src), "no inline style object");
  });
}

test("Figure renders a figure, a figcaption, and the title and description", () => {
  const src = readFileSync(join(DIR, "Figure.tsx"), "utf8");
  assert.ok(src.includes("<figure"));
  assert.ok(src.includes("<figcaption"));
  assert.ok(!HEX_COLOR.test(src));
});

test("each diagram builds its SVG ids per instance with useDiagramId", () => {
  const prefixes = DIAGRAMS.map((name) => {
    const src = read(name);
    assert.ok(src.includes("aria-labelledby={titleId}"), `${name} aria-labelledby uses titleId`);
    assert.ok(src.includes("<title id={titleId}>"), `${name} title has the id`);
    const m = src.match(/const titleId = useDiagramId\("([^"]+)"\)/);
    assert.ok(m, `${name} gets titleId from useDiagramId`);
    if (src.includes("<marker")) {
      assert.ok(src.includes("id={arrowId}"), `${name} marker id uses arrowId`);
      assert.ok(/const arrowId = useDiagramId\(/.test(src), `${name} gets arrowId from useDiagramId`);
      assert.ok(!/url\(#[a-z]/.test(src), `${name} has no fixed marker reference`);
    }
    return m[1];
  });
  assert.equal(new Set(prefixes).size, DIAGRAMS.length, "the id prefixes differ");
});

test("useDiagramId removes characters that break url(#id)", () => {
  const src = readFileSync(join(DIR, "Figure.tsx"), "utf8");
  assert.ok(src.includes("useId()"));
  assert.ok(src.includes("replace(/[^a-zA-Z0-9_-]/g"));
});

test("mdx-components.tsx registers the 7 diagrams", () => {
  const src = readFileSync("mdx-components.tsx", "utf8");
  for (const name of DIAGRAMS) {
    assert.ok(src.includes(`import { ${name} }`), `${name} imported`);
    assert.match(src, new RegExp(`^\\s+${name},$`, "m"), `${name} registered`);
  }
});
