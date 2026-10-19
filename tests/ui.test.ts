import { test } from "node:test";
import assert from "node:assert/strict";
import { PAGES } from "../lib/nav.ts";
import { footerSummary, searchType } from "../lib/ui.ts";

test("the page count in the strings comes from PAGES", () => {
  assert.ok(footerSummary.startsWith(`${PAGES.length} parts`));
  assert.ok(searchType.includes(`the ${PAGES.length} parts`));
});

test("searchType mentions the Linux stages and the System Design case studies", () => {
  assert.ok(searchType.includes("Linux stages"));
  assert.ok(searchType.includes("System Design case studies"));
});
