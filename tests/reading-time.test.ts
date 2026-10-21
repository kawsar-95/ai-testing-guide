import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { contentWords, getReadingMinutes, getReadingMinutesByVersion, readingMinutes } from "../lib/reading-time.ts";
import { CONTENT_PAGES } from "../lib/reading-state.ts";

test("plain prose counts every word", () => {
  assert.equal(contentWords("# Title\n\nOne two three four."), 5);
});

test("code fences, inline code, export lines, and JSX tags are not words", () => {
  const src =
    "export const page = { a: 1 }\n\nText here.\n\n```bash\nls -la /etc\n```\n\nRun `npm test` <Cite n={1} /> <PageMeta />";
  assert.equal(contentWords(src), 3);
});

test("a Markdown link counts its text, not its URL", () => {
  assert.equal(contentWords("See [the docs](https://example.com/a/b) now."), 4);
});

test("only the Technical panel of a Voices block counts", () => {
  const src =
    "<Voices>\n<Technical>\n\nalpha beta\n\n</Technical>\n<Layman>\n\ngamma delta epsilon\n\n</Layman>\n<Bangla>\n\nএক দুই\n\n</Bangla>\n</Voices>";
  assert.equal(contentWords(src), 2);
});

test("in a Fundamentals chapter only the istqb blocks count", () => {
  const src = '<Version of="notes">\n\nnotes words here now\n\n</Version>\n<Version of="istqb">\n\nistqb words\n\n</Version>';
  assert.equal(contentWords(src), 2);
});

test("readingMinutes is words / 200 rounded up, at least 1", () => {
  assert.equal(readingMinutes(""), 1);
  assert.equal(readingMinutes("w ".repeat(200)), 1);
  assert.equal(readingMinutes("w ".repeat(201)), 2);
});

test("every content page has a reading time", () => {
  for (const page of CONTENT_PAGES) assert.ok(getReadingMinutes(page.dir, page.slug) >= 1, page.href);
});

test("a multi-line page export is not counted", () => {
  const src = [
    "export const metadata = { title: 'T', description: 'D' }",
    "export const page = {",
    "  updated: '2026-10-10',",
    "  sources: [",
    "    { title: 'Hooks reference', publisher: 'Anthropic', url: 'https://code.claude.com/docs/hooks', accessed: '2026-10-10' },",
    "  ],",
    "}",
    "",
    "# Title",
    "",
    "One two.",
  ].join("\n");
  assert.equal(contentWords(src), 3);
});

test("the notes version counts only the notes blocks", () => {
  const src = '<Version of="notes">\n\nnotes words here now\n\n</Version>\n<Version of="istqb">\n\nistqb words\n\n</Version>';
  assert.equal(contentWords(src, "notes"), 4);
  assert.equal(contentWords(src, "istqb"), 2);
});

test("a Fundamentals page with versions gets one reading time per version", () => {
  const minutes = getReadingMinutesByVersion("fundamentals", "black-box");
  assert.ok(minutes.istqb > minutes.notes, JSON.stringify(minutes));
});

test("the Fundamentals template passes both version times to ChapterTools", () => {
  const src = readFileSync(new URL("../app/(site)/fundamentals/[chapter]/page.tsx", import.meta.url), "utf8");
  assert.match(src, /getReadingMinutesByVersion\(/);
});
