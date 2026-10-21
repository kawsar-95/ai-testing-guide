import { test } from "node:test";
import assert from "node:assert/strict";
import { ARCHITECTURE_ROUTES } from "../lib/architecture/topics.ts";
import { FUNDAMENTALS_ROUTES } from "../lib/fundamentals/chapters.ts";
import { LINUX_ROUTES } from "../lib/linux/stages.ts";
import { PAGES } from "../lib/nav.ts";
import { sitemapPaths } from "../lib/sitemap.ts";
import { SYSTEM_DESIGN_ROUTES } from "../lib/system-design/cases.ts";

test("sitemapPaths has the home page and every tutorial page", () => {
  const paths = sitemapPaths();
  assert.ok(paths.includes("/"));
  for (const page of PAGES) assert.ok(paths.includes(page.href), page.href);
});

test("sitemapPaths has the 13 Linux routes", () => {
  const paths = sitemapPaths();
  assert.equal(LINUX_ROUTES.length, 13);
  for (const route of LINUX_ROUTES) assert.ok(paths.includes(route), route);
});

test("sitemapPaths has the 12 Fundamentals routes", () => {
  const paths = sitemapPaths();
  assert.equal(FUNDAMENTALS_ROUTES.length, 12);
  for (const route of FUNDAMENTALS_ROUTES) assert.ok(paths.includes(route), route);
});

test("sitemapPaths has the 16 System Design routes", () => {
  const paths = sitemapPaths();
  assert.equal(SYSTEM_DESIGN_ROUTES.length, 16);
  for (const route of SYSTEM_DESIGN_ROUTES) assert.ok(paths.includes(route), route);
});

test("sitemapPaths has the 21 Architecture routes", () => {
  const paths = sitemapPaths();
  assert.equal(ARCHITECTURE_ROUTES.length, 21);
  for (const route of ARCHITECTURE_ROUTES) assert.ok(paths.includes(route), route);
});

test("sitemapPaths has no duplicate path", () => {
  const paths = sitemapPaths();
  assert.equal(new Set(paths).size, paths.length);
  assert.equal(paths.length, 88);
});
