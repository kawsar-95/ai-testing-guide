import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { HEADER_NAV, activeNavId, nextOpenState } from "../lib/header-nav.ts";
import { PAGES } from "../lib/nav.ts";

const source = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("HEADER_NAV has the 6 items in header order", () => {
  assert.deepEqual(
    HEADER_NAV.map((item) => item.id),
    ["tutorial", "linux", "fundamentals", "system-design", "architecture", "contents"],
  );
  assert.equal(HEADER_NAV[0].pages?.length, PAGES.length);
  assert.deepEqual(
    HEADER_NAV.slice(1, 5).map((item) => item.pages?.length),
    [12, 11, 15, 20],
  );
  assert.equal(HEADER_NAV[5].href, "/contents/");
  assert.equal(HEADER_NAV[5].pages, undefined);
});

test("activeNavId finds the item of a path", () => {
  assert.equal(activeNavId("/linux/"), "linux");
  assert.equal(activeNavId("/linux/stage-01/"), "linux");
  assert.equal(activeNavId("/fundamentals/x/"), "fundamentals");
  assert.equal(activeNavId("/system-design/kafka/"), "system-design");
  assert.equal(activeNavId("/architecture/idempotency/"), "architecture");
  assert.equal(activeNavId("/contents/"), "contents");
  assert.equal(activeNavId("/extend/hooks/"), "tutorial");
  assert.equal(activeNavId("/"), "tutorial");
});

test("nextOpenState keeps one dropdown open at most", () => {
  assert.equal(nextOpenState(null, { type: "toggle", id: "linux" }), "linux");
  assert.equal(nextOpenState("linux", { type: "toggle", id: "linux" }), null);
  assert.equal(nextOpenState("linux", { type: "toggle", id: "fundamentals" }), "fundamentals");
  assert.equal(nextOpenState("linux", { type: "escape" }), null);
  assert.equal(nextOpenState("linux", { type: "outside" }), null);
  assert.equal(nextOpenState("linux", { type: "blur-out" }), null);
  assert.equal(nextOpenState(null, { type: "escape" }), null);
});

test("the nav items and the menu button switch at the same width", () => {
  assert.match(source("components/layout/HeaderNav.tsx"), /hidden[^"]*nav:flex/);
  assert.match(source("components/layout/MobileNav.tsx"), /nav:hidden/);
  assert.doesNotMatch(source("components/layout/MobileNav.tsx"), /lg:hidden/);
});

test("the shell has no sidebar column", () => {
  assert.doesNotMatch(source("components/layout/SiteShell.tsx"), /Sidebar\b|grid-cols-\[260px/);
});
