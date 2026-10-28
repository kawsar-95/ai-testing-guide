import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { CONTENTS_HOME, CONTENTS_ROUTES } from "../lib/contents.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { sitemapPaths } from "../lib/sitemap.ts";
import { MODULES, siteStats } from "../lib/stats.ts";

test("the sitemap and the precache have /contents/", () => {
  assert.equal(CONTENTS_HOME, "/contents/");
  assert.ok(sitemapPaths().includes("/contents/"));
  assert.ok(precacheUrls("").includes("/contents/"));
  assert.ok(precacheUrls("/ai-testing-guide").includes("/ai-testing-guide/contents/"));
});

test("siteStats counts from the data", () => {
  assert.deepEqual(siteStats(), { parts: 24, modules: 12, pages: 238, voices: 3 });
});

test("MODULES lists every module page once", () => {
  assert.deepEqual(
    MODULES.map((m) => m.id),
    ["linux", "fundamentals", "system-design", "architecture", "course", "k6", "ai-engineering", "harness", "ai-skills", "ai-concepts", "agent-memory", "ai-agents"],
  );
  assert.deepEqual(
    MODULES.map((m) => m.pages.length),
    [12, 11, 15, 20, 40, 20, 28, 6, 20, 9, 7, 10],
  );
  const paths = new Set(sitemapPaths());
  for (const module of MODULES) {
    assert.ok(paths.has(module.href), module.href);
    assert.ok(module.title.length > 0 && module.tagline.length > 0, module.id);
    for (const page of module.pages) assert.ok(paths.has(page.href), page.href);
  }
});

test("the contents route map is the identity map of CONTENTS_ROUTES", () => {
  const map = JSON.parse(readFileSync(new URL("../scripts/contents-route-map.json", import.meta.url), "utf8"));
  assert.deepEqual(map, Object.fromEntries(CONTENTS_ROUTES.map((r) => [r, r])));
});
