import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { LESSON_TIP_LIMIT, LESSON_WORD_LIMIT, lessonProblems, topicTechnicals } from "../lib/linux-lesson.ts";

// Stage slugs whose pages are already in the lesson shape. Each task adds its stage.
const LESSON_STAGES: string[] = ["shell-basics"];

const GOOD = [
  "**Goal:** Know what `ls` does.",
  "",
  "`ls` lists the files of a folder.",
  "",
  "**Try it:** run `ls -l` in your home folder.",
  "",
  "<details>",
  "<summary>Go deeper</summary>",
  "",
  "More detail here.",
  "",
  "</details>",
].join("\n");

const words = (n: number) => Array.from({ length: n }, (_, i) => `w${i}`).join(" ");

test("a topic with the lesson shape has no problems", () => {
  assert.deepEqual(lessonProblems(GOOD), []);
});

test("a topic without a Goal line is reported", () => {
  assert.equal(lessonProblems(GOOD.replace("**Goal:**", "Goal:")).length, 1);
});

test("a topic without a Try it line is reported", () => {
  assert.equal(lessonProblems(GOOD.replace("**Try it:**", "Try it:")).length, 1);
});

test("a topic with two Try it lines is reported", () => {
  assert.equal(lessonProblems(GOOD.replace("<details>", "**Try it:** again\n\n<details>")).length, 1);
});

test("a topic without a Go deeper block is reported", () => {
  const bad = GOOD.replace("<summary>Go deeper</summary>", "<summary>More</summary>");
  assert.equal(lessonProblems(bad).length, 1);
  assert.equal(lessonProblems(GOOD.split("<details>")[0]).length, 1);
});

test("a second details block is reported", () => {
  const bad = `${GOOD}\n\n<details>\n<summary>Go deeper</summary>\n\nx\n\n</details>`;
  assert.ok(lessonProblems(bad).length >= 1);
});

test("text after </details> is reported", () => {
  assert.equal(lessonProblems(`${GOOD}\n\nExtra text.`).length, 1);
});

test("more than 150 words before details is reported", () => {
  const bad = GOOD.replace("`ls` lists the files of a folder.", words(LESSON_WORD_LIMIT + 1));
  assert.equal(lessonProblems(bad).length, 1);
});

// GOOD has 14 words of its own before details.
test("words inside a fenced code block and in Cite tags do not count", () => {
  const body = `${words(LESSON_WORD_LIMIT - 14)} <Cite n={3} />\n\n\`\`\`bash\n${words(200)}\n\`\`\``;
  assert.deepEqual(lessonProblems(GOOD.replace("`ls` lists the files of a folder.", body)), []);
});

const diagram = [
  "<FlowDiagram",
  '  title="A flow"',
  `  description="${words(80)}"`,
  '  steps={[{ label: "One" }, { label: "Two" }]}',
  "/>",
].join("\n");

test("the lines of a FlowDiagram block do not count as words", () => {
  const body = `${words(LESSON_WORD_LIMIT - 14)}\n\n${diagram}`;
  assert.deepEqual(lessonProblems(GOOD.replace("`ls` lists the files of a folder.", body)), []);
});

test("151 words of text next to a FlowDiagram block are still reported", () => {
  const body = `${words(LESSON_WORD_LIMIT - 14 + 1)}\n\n${diagram}`;
  assert.equal(lessonProblems(GOOD.replace("`ls` lists the files of a folder.", body)).length, 1);
});

test("a FlowDiagram line inside a fenced code block is only code, and an unclosed block still counts", () => {
  const fenced = `\`\`\`mdx\n<FlowDiagram\n\`\`\`\n\n${words(LESSON_WORD_LIMIT - 14 + 1)}`;
  assert.equal(lessonProblems(GOOD.replace("`ls` lists the files of a folder.", fenced)).length, 1);
  const unclosed = `<FlowDiagram\n\n${words(LESSON_WORD_LIMIT - 14 + 1)}`;
  assert.equal(lessonProblems(GOOD.replace("`ls` lists the files of a folder.", unclosed)).length, 1);
});

const withTip = (body: string) =>
  GOOD.replace(
    "<details>",
    `<Callout type="tip" title="Why it matters for testing">\n\n${body}\n\n</Callout>\n\n<details>`,
  );

test("a tip of 160 characters passes, and Cite tags do not count", () => {
  assert.deepEqual(lessonProblems(withTip(`${"x".repeat(LESSON_TIP_LIMIT)} <Cite n={1} />`)), []);
});

test("a tip of 161 characters is reported", () => {
  assert.equal(lessonProblems(withTip("x".repeat(LESSON_TIP_LIMIT + 1))).length, 1);
});

test("a topic without a tip callout is not reported by the tip rule", () => {
  assert.ok(lessonProblems(GOOD).every((problem) => !problem.includes("tip")));
});

test("topicTechnicals returns one entry per topic with voices and skips a section with no Technical panel", () => {
  const source = [
    "# Stage",
    "",
    "## First topic",
    "",
    "<Voices>",
    "<Technical>",
    "",
    "Body one.",
    "",
    "</Technical>",
    "<Layman>",
    "",
    "Plain.",
    "",
    "</Layman>",
    "</Voices>",
    "",
    "## Second topic",
    "",
    "No voices here.",
  ].join("\n");
  assert.deepEqual(topicTechnicals(source), [{ heading: "First topic", technical: "Body one." }]);
});

test("every converted stage has the lesson shape", () => {
  for (const slug of LESSON_STAGES) {
    const source = readFileSync(new URL(`../content/linux/${slug}.mdx`, import.meta.url), "utf8");
    for (const { heading, technical } of topicTechnicals(source)) {
      assert.deepEqual(lessonProblems(technical), [], `${slug}: ${heading}`);
    }
  }
});
