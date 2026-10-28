import test from "node:test";
import assert from "node:assert/strict";
import * as ui from "../lib/ui.ts";
import { SHELL_BN } from "../lib/bn/shell.ts";
import { HOME_UI_BN } from "../lib/bn/home.ts";
import { CONTENTS_UI } from "../lib/contents.ts";
import { CONTENTS_UI_BN } from "../lib/bn/contents.ts";
import { DASHBOARD_UI } from "../lib/dashboard.ts";
import { DASHBOARD_UI_BN } from "../lib/bn/dashboard.ts";
import { INTERVIEW_UI } from "../lib/interview.ts";
import { INTERVIEW_UI_BN } from "../lib/bn/interview.ts";
import { LINUX_UI } from "../lib/linux/ui.ts";
import { LINUX_UI_BN } from "../lib/bn/linux.ts";
import { FUNDAMENTALS_UI } from "../lib/fundamentals/ui.ts";
import { FUNDAMENTALS_UI_BN } from "../lib/bn/fundamentals.ts";
import { ARCHITECTURE_UI } from "../lib/architecture/ui.ts";
import { ARCHITECTURE_UI_BN } from "../lib/bn/architecture.ts";
import { COURSE_UI } from "../lib/course/ui.ts";
import { COURSE_UI_BN } from "../lib/bn/course.ts";
import { AI_ENGINEERING_UI } from "../lib/ai-engineering/ui.ts";
import { AI_ENGINEERING_UI_BN } from "../lib/bn/ai-engineering.ts";
import { HARNESS_UI } from "../lib/harness/ui.ts";
import { HARNESS_UI_BN } from "../lib/bn/harness.ts";
import { AI_SKILLS_UI } from "../lib/ai-skills/ui.ts";
import { AI_SKILLS_UI_BN } from "../lib/bn/ai-skills.ts";
import { K6_UI } from "../lib/k6/ui.ts";
import { K6_UI_BN } from "../lib/bn/k6.ts";
import { SYSTEM_DESIGN_UI } from "../lib/system-design/ui.ts";
import { SYSTEM_DESIGN_UI_BN } from "../lib/bn/system-design.ts";
import { WHY_ITEMS } from "../lib/home.ts";
import { WHY_ITEMS_BN } from "../lib/bn/home.ts";

const { HOME_UI, ...SHELL_EN } = ui;

/** Fails with the path of the first key that the two objects do not share, or of a string that is empty. */
function compare(en: unknown, bn: unknown, path: string): void {
  if (typeof en === "function") {
    assert.equal(typeof bn, "function", `${path} must be a function`);
    // Every parameter of the UI functions is a number, except a title.
    const args = Array.from({ length: en.length }, (_, i) => (path.match(/Label|label/) && i === 0 ? "x" : 3));
    const out = (bn as (...a: unknown[]) => unknown)(...args);
    assert.equal(typeof out, "string", `${path}() must return a string`);
    assert.ok((out as string).length > 0, `${path}() must not be empty`);
  } else if (typeof en === "string") {
    assert.equal(typeof bn, "string", `${path} must be a string`);
    assert.ok((bn as string).length > 0, `${path} must not be empty`);
  } else if (Array.isArray(en)) {
    assert.ok(Array.isArray(bn), `${path} must be an array`);
    assert.equal((bn as unknown[]).length, en.length, `${path} must have ${en.length} items`);
    en.forEach((item, i) => compare(item, (bn as unknown[])[i], `${path}[${i}]`));
  } else if (en && typeof en === "object") {
    assert.ok(bn && typeof bn === "object", `${path} must be an object`);
    assert.deepEqual(Object.keys(bn as object).sort(), Object.keys(en).sort(), `${path} must have the same keys`);
    for (const key of Object.keys(en)) compare((en as Record<string, unknown>)[key], (bn as Record<string, unknown>)[key], `${path}.${key}`);
  }
}

const PAIRS: [string, unknown, unknown][] = [
  ["ui", SHELL_EN, SHELL_BN],
  ["HOME_UI", HOME_UI, HOME_UI_BN],
  // The icon is shared, so only the title and the text have a twin.
  ["WHY_ITEMS", WHY_ITEMS.map(({ title, text }) => ({ title, text })), WHY_ITEMS_BN],
  ["CONTENTS_UI", CONTENTS_UI, CONTENTS_UI_BN],
  ["DASHBOARD_UI", DASHBOARD_UI, DASHBOARD_UI_BN],
  ["INTERVIEW_UI", INTERVIEW_UI, INTERVIEW_UI_BN],
  ["LINUX_UI", LINUX_UI, LINUX_UI_BN],
  ["FUNDAMENTALS_UI", FUNDAMENTALS_UI, FUNDAMENTALS_UI_BN],
  ["ARCHITECTURE_UI", ARCHITECTURE_UI, ARCHITECTURE_UI_BN],
  ["COURSE_UI", COURSE_UI, COURSE_UI_BN],
  ["K6_UI", K6_UI, K6_UI_BN],
  ["AI_ENGINEERING_UI", AI_ENGINEERING_UI, AI_ENGINEERING_UI_BN],
  ["HARNESS_UI", HARNESS_UI, HARNESS_UI_BN],
  ["AI_SKILLS_UI", AI_SKILLS_UI, AI_SKILLS_UI_BN],
  ["SYSTEM_DESIGN_UI", SYSTEM_DESIGN_UI, SYSTEM_DESIGN_UI_BN],
];

for (const [name, en, bn] of PAIRS) {
  test(`${name} has a Bangla twin with the same shape`, () => compare(en, bn, name));
}

test("the visible UI texts have Bangla letters", () => {
  const BANGLA = /[ঀ-৿]/;
  for (const key of ["skipLink", "search", "footerSource", "readingTime", "bookmark", "markRead"] as const) {
    const value = SHELL_BN[key];
    const text = typeof value === "function" ? (value as (n: number) => string)(5) : value;
    assert.match(text, BANGLA, `SHELL_BN.${key}`);
  }
  assert.match(HOME_UI_BN.startReading, BANGLA);
  assert.match(DASHBOARD_UI_BN.heading, BANGLA);
});
