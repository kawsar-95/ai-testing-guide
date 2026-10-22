import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { INTERVIEW_HOME, INTERVIEW_ROUTES, INTERVIEW_UI } from "../lib/interview.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { sitemapPaths } from "../lib/sitemap.ts";

test("the interview page is in the sitemap, the precache, and its route map", () => {
  assert.equal(INTERVIEW_HOME, "/interview/");
  assert.ok(sitemapPaths().includes(INTERVIEW_HOME));
  assert.ok(precacheUrls("").includes(INTERVIEW_HOME));
  const map = JSON.parse(readFileSync(new URL("../scripts/interview-route-map.json", import.meta.url), "utf8"));
  assert.deepEqual(map, Object.fromEntries(INTERVIEW_ROUTES.map((r) => [r, r])));
});

test("each card of the interview page links to a known route", () => {
  const known = new Set(sitemapPaths());
  for (const card of INTERVIEW_UI.cards) assert.ok(known.has(card.href), card.href);
});
