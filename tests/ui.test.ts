import { test } from "node:test";
import assert from "node:assert/strict";
import { PAGES } from "../lib/nav.ts";
import { FUNDAMENTALS_UI } from "../lib/fundamentals/ui.ts";
import { footerSummary, partLabel, partNumber, searchType, voiceToBangla, voiceToTechnical } from "../lib/ui.ts";
import { VOICE_TOGGLE_TEXT } from "../lib/voice.ts";

test("the page count in the strings comes from PAGES", () => {
  assert.ok(footerSummary.startsWith(`${PAGES.length} parts`));
  assert.ok(searchType.includes(`the ${PAGES.length} parts`));
});

test("searchType mentions the Linux stages, the System Design case studies, the Architecture topics, and the Course topics", () => {
  assert.ok(searchType.includes("Linux stages"));
  assert.ok(searchType.includes("System Design case studies"));
  assert.ok(searchType.includes("Architecture topics"));
  assert.ok(searchType.includes("Course topics"));
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

test("the accessible name of the voice toggle starts with its visible word (WCAG 2.5.3)", () => {
  assert.equal(voiceToBangla, `${VOICE_TOGGLE_TEXT.technical} – Show the Bangla text in every section`);
  assert.equal(voiceToTechnical, `${VOICE_TOGGLE_TEXT.bangla} – Show the Technical text in every section`);
});
