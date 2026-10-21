import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const TEMPLATES = [
  "app/(site)/[group]/[page]/page.tsx",
  "app/(site)/linux/[stage]/page.tsx",
  "app/(site)/fundamentals/[chapter]/page.tsx",
  "app/(site)/system-design/[topic]/page.tsx",
  "app/(site)/architecture/[topic]/page.tsx",
];

test("the chapter breakpoints are 820 px and 1100 px", () => {
  const css = source("app/globals.css");
  assert.match(css, /--breakpoint-chapter: 51\.25rem;/);
  assert.match(css, /--breakpoint-toc: 68\.75rem;/);
});

test("ChapterLayout shows the left list from chapter and On this page from toc", () => {
  const layout = source("components/content/ChapterLayout.tsx");
  assert.match(layout, /hidden[^"]*chapter:block/);
  assert.match(layout, /hidden[^"]*toc:block/);
});

test("the Contents button hides when the left list shows", () => {
  assert.match(source("components/layout/ContentsButton.tsx"), /chapter:hidden/);
});

for (const path of TEMPLATES) {
  test(`${path} uses ChapterLayout and ChapterTools`, () => {
    const src = source(path);
    assert.match(src, /import \{ ChapterLayout \}/);
    assert.match(src, /import \{ ChapterTools \}/);
    assert.match(src, /<ChapterLayout /);
    assert.match(src, /<ChapterTools /);
    assert.doesNotMatch(src, /xl:grid-cols-\[minmax\(0,680px\)_220px\]/);
  });
}
