import { test } from "node:test";
import assert from "node:assert/strict";
import { PAGES } from "../lib/nav.ts";
import { FUNDAMENTALS_UI } from "../lib/fundamentals/ui.ts";
import { footerSummary, partLabel, partNumber, searchType } from "../lib/ui.ts";

test("the page count in the strings comes from PAGES", () => {
  assert.ok(footerSummary.startsWith(`${PAGES.length} parts`));
  assert.ok(searchType.includes(`the ${PAGES.length} parts`));
});

test("searchType mentions the Linux stages, the System Design case studies, and the Architecture topics", () => {
  assert.ok(searchType.includes("Linux stages"));
  assert.ok(searchType.includes("System Design case studies"));
  assert.ok(searchType.includes("Architecture topics"));
});

test("searchType mentions the Fundamentals chapters", () => {
  assert.ok(searchType.includes("Fundamentals chapters"));
});

test("chapterMeta gives the topic count of a chapter", () => {
  assert.equal(FUNDAMENTALS_UI.chapterMeta(7), "7 topics");
  assert.equal(FUNDAMENTALS_UI.chapterMeta(50), "50 topics");
});

test("partNumber pads to 2 digits and partLabel adds PART", () => {
  assert.equal(partNumber(5), "05");
  assert.equal(partNumber(23), "23");
  assert.equal(partLabel(5), "PART 05");
});
