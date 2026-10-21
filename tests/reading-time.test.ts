import { test } from "node:test";
import assert from "node:assert/strict";
import { contentWords, getReadingMinutes, readingMinutes } from "../lib/reading-time.ts";
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
