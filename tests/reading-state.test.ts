import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import {
  BOOKMARKS_KEY,
  CONTENT_PAGES,
  LAST_PAGE_KEY,
  PAGE_READ_KEY,
  PROGRESS_KEYS,
  exportProgress,
} from "../lib/reading-state.ts";
import { sitemapPaths } from "../lib/sitemap.ts";

test("CONTENT_PAGES has the 151 content pages, each once and each a known route", () => {
  assert.equal(CONTENT_PAGES.length, 151);
  assert.equal(new Set(CONTENT_PAGES.map((p) => p.href)).size, 151);
  const paths = new Set(sitemapPaths());
  for (const page of CONTENT_PAGES) assert.ok(paths.has(page.href), page.href);
});

test("CONTENT_PAGES counts per module", () => {
  const counts: Record<string, number> = {};
  for (const page of CONTENT_PAGES) counts[page.module] = (counts[page.module] ?? 0) + 1;
  assert.deepEqual(counts, { tutorial: 24, linux: 12, fundamentals: 11, "system-design": 15, architecture: 20, course: 40, k6: 20, "ai-concepts": 9 });
});

test("every content page points to its MDX file", () => {
  for (const page of CONTENT_PAGES) {
    assert.ok(existsSync(new URL(`../content/${page.dir}/${page.slug}.mdx`, import.meta.url)), page.href);
  }
});

test("the storage keys", () => {
  assert.equal(PAGE_READ_KEY, "page-read");
  assert.equal(BOOKMARKS_KEY, "page-bookmarks");
  assert.equal(LAST_PAGE_KEY, "last-page");
  assert.deepEqual(PROGRESS_KEYS, [
    "page-read",
    "page-bookmarks",
    "last-page",
    "linux-progress",
    "fundamentals-progress",
    "architecture-progress",
    "course-progress",
    "k6-progress",
    "ai-concepts-progress",
  ]);
});

test("exportProgress has version 1, the time, and all 8 keys", () => {
  const now = new Date("2026-10-22T08:00:00Z");
  const storage = { getItem: (key: string) => (key === "page-read" ? '["/extend/hooks/"]' : null) };
  const file = exportProgress(storage, now);
  assert.equal(file.version, 1);
  assert.equal(file.exported, "2026-10-22T08:00:00.000Z");
  assert.deepEqual(Object.keys(file.data), PROGRESS_KEYS);
  assert.equal(file.data["page-read"], '["/extend/hooks/"]');
  assert.equal(file.data["linux-progress"], null);
});
