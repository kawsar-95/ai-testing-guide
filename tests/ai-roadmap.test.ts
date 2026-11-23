import { test } from "node:test";
import assert from "node:assert/strict";
import { FLAT_MODULES } from "../lib/modules/registry.ts";
import { PAGES } from "../lib/nav.ts";
import { MASTER_PATH, ROADMAPS, ROADMAP_ROUTES, getRoadmap, roadmapPageCount } from "../lib/ai-roadmap/roadmaps.ts";
import { moduleHome, progressIdOf, resolvePage } from "../lib/ai-roadmap/resolve.ts";
import { sitemapPaths } from "../lib/sitemap.ts";

const IDS = ["ai-skills", "ai-agents", "ai-concepts", "harness", "agent-memory", "ai-engineering", "ai-ml-testing", "agentic-qa"];

/** The page slugs of a module, in the order of the module. */
function slugsOf(id: string): string[] {
  if (id === "agentic-qa") return PAGES.filter((p) => p.group === "agentic-qa").map((p) => p.slug);
  return FLAT_MODULES.find((m) => m.id === id)!.pages.map((p) => p.slug);
}

test("there is one roadmap for each of the 8 AI modules, 137 pages in all", () => {
  assert.deepEqual(ROADMAPS.map((r) => r.id), IDS);
  assert.equal(ROADMAPS.reduce((n, r) => n + roadmapPageCount(r), 0), 137);
});

for (const roadmap of ROADMAPS) {
  test(`${roadmap.id}: every page of the module is in exactly one stage, and each stage points at a page`, () => {
    const listed = roadmap.stages.flatMap((s) => s.pages);
    assert.equal(new Set(listed).size, listed.length, "a page is in two stages");
    assert.deepEqual([...listed].sort(), slugsOf(roadmap.id).sort());
    for (const slug of listed) assert.ok(resolvePage(roadmap.id, slug), `${roadmap.id}/${slug} does not resolve`);
  });

  test(`${roadmap.id}: each stage has a title, an outcome, a prerequisite, and pages`, () => {
    for (const stage of roadmap.stages) {
      assert.ok(stage.title && stage.outcome && stage.needs, stage.title);
      assert.ok(stage.pages.length > 0, stage.title);
    }
  });
}

test("the master path uses every stage of every roadmap exactly once", () => {
  const seen = MASTER_PATH.flatMap((m) => m.steps.map((r) => `${r.id}#${r.stage}`));
  assert.equal(new Set(seen).size, seen.length, "a stage is used twice");
  const all = ROADMAPS.flatMap((r) => r.stages.map((_, i) => `${r.id}#${i + 1}`));
  assert.deepEqual([...seen].sort(), all.sort());
});

test("the roadmap routes are in the sitemap and have a roadmap for each id", () => {
  const paths = new Set(sitemapPaths());
  for (const route of ROADMAP_ROUTES) assert.ok(paths.has(route), route);
  assert.equal(ROADMAP_ROUTES.length, 9);
  for (const id of IDS) assert.ok(getRoadmap(id), id);
});

test("moduleHome points at a real module home", () => {
  const homes = new Set(["/agentic-qa/", ...FLAT_MODULES.map((m) => m.home)]);
  for (const id of IDS) assert.ok(homes.has(moduleHome(id as never)), id);
});

test("only a module with a progress store gets ticks: all but Agentic QA and AI Harnesses", () => {
  const withTicks = IDS.filter((id) => progressIdOf(id as never));
  assert.deepEqual(withTicks, IDS.filter((id) => id !== "agentic-qa" && id !== "harness"));
});
