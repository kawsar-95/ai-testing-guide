import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DASHBOARD_HOME, DASHBOARD_ROUTES } from "../lib/dashboard.ts";
import { continueTarget, exportFileName, readByModule } from "../lib/dashboard-data.ts";
import { precacheUrls } from "../lib/pwa.ts";
import { sitemapPaths } from "../lib/sitemap.ts";

test("continueTarget falls back to the first tutorial page", () => {
  assert.equal(continueTarget(null).href, "/getting-started/setup/");
  assert.equal(continueTarget("/old/route/").href, "/getting-started/setup/");
  assert.equal(continueTarget("/extend/hooks/").href, "/extend/hooks/");
});

test("readByModule counts only known routes, per module", () => {
  const rows = readByModule(["/extend/hooks/", "/linux/shell-basics/", "/nope/"]);
  assert.deepEqual(
    rows.map((r) => r.module),
    ["tutorial", "linux", "fundamentals", "system-design", "architecture", "course", "k6"],
  );
  assert.deepEqual(
    rows.map((r) => r.total),
    [23, 12, 11, 15, 20, 40, 19],
  );
  assert.deepEqual(
    rows.map((r) => r.read),
    [1, 1, 0, 0, 0, 0, 0],
  );
});

test("exportFileName uses the local date", () => {
  assert.equal(exportFileName(new Date(2026, 9, 21, 23, 30)), "progress-2026-10-21.json");
  assert.equal(exportFileName(new Date(2026, 0, 5)), "progress-2026-01-05.json");
});

test("the dashboard is in the sitemap, the precache, and its route map", () => {
  assert.equal(DASHBOARD_HOME, "/dashboard/");
  assert.ok(sitemapPaths().includes("/dashboard/"));
  assert.ok(precacheUrls("").includes("/dashboard/"));
  const map = JSON.parse(readFileSync(new URL("../scripts/dashboard-route-map.json", import.meta.url), "utf8"));
  assert.deepEqual(map, Object.fromEntries(DASHBOARD_ROUTES.map((r) => [r, r])));
});

test("Export revokes the file URL after the download starts, not at once (Safari)", () => {
  const src = readFileSync(new URL("../components/pages/DashboardPage.tsx", import.meta.url), "utf8");
  assert.match(src, /setTimeout\(\(\) => URL\.revokeObjectURL\(url\), \d+\)/);
  assert.doesNotMatch(src, /^\s*URL\.revokeObjectURL\(url\);/m);
});
