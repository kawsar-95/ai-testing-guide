import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { HEADER_NAV, activeNavId } from "../lib/header-nav.ts";

const source = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("HEADER_NAV has the 4 plain links in header order", () => {
  assert.deepEqual(
    HEADER_NAV.map((item) => [item.id, item.href]),
    [
      ["home", "/"],
      ["contents", "/contents/"],
      ["dashboard", "/dashboard/"],
      ["interview", "/interview/"],
    ],
  );
});

test("activeNavId finds the item of a path", () => {
  assert.equal(activeNavId("/"), "home");
  assert.equal(activeNavId("/contents/"), "contents");
  assert.equal(activeNavId("/dashboard/"), "dashboard");
  assert.equal(activeNavId("/interview/"), "interview");
  // A tutorial or module page is not a nav item. "/" must not match every path.
  assert.equal(activeNavId("/extend/hooks/"), null);
  assert.equal(activeNavId("/linux/stage-01/"), null);
});

test("the nav items and the menu button switch at the same width", () => {
  assert.match(source("components/layout/HeaderNav.tsx"), /hidden[^"]*nav:flex/);
  assert.match(source("components/layout/MobileNav.tsx"), /nav:hidden/);
  assert.doesNotMatch(source("components/layout/MobileNav.tsx"), /lg:hidden/);
});

test("the shell has no sidebar column", () => {
  assert.doesNotMatch(source("components/layout/SiteShell.tsx"), /Sidebar\b|grid-cols-\[260px/);
});
