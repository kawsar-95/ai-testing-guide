import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import {
  LESSON_TIP_LIMIT,
  LESSON_WORD_LIMIT,
  lessonProblems,
  topicTechnicals,
  topicVoices,
  unguardedMktempCd,
  unsafeCleanups,
  voiceProblems,
} from "../lib/linux-lesson.ts";
import { plainTitle, sourceLines } from "../lib/headings.ts";
import { STAGES } from "../lib/linux/stages.ts";

// The 12 stages, in the order of lib/linux/stages.ts.
const LESSON_STAGES: string[] = [
  "shell-basics",
  "files",
  "text-processing",
  "users-permissions",
  "processes",
  "shell-scripting",
  "packages",
  "disks-filesystems",
  "networking",
  "boot-services",
  "troubleshooting",
  "containers",
];

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

/** The titles of the `##` sections that have a `<Voices>` line (code blocks are skipped). */
function titlesWithVoices(source: string): Set<string> {
  const titles = new Set<string>();
  let heading = "";
  for (const { text, kind } of sourceLines(source)) {
    if (kind !== "text") continue;
    const section = /^##\s+(.*)$/.exec(text);
    if (section) heading = plainTitle(section[1]);
    else if (text.trim() === "<Voices>") titles.add(heading);
  }
  return titles;
}

test("every converted stage has the lesson shape, and no topic is skipped", () => {
  const noVoices: string[] = [];
  for (const slug of LESSON_STAGES) {
    const source = readFileSync(new URL(`../content/linux/${slug}.mdx`, import.meta.url), "utf8");
    const stage = STAGES.find((s) => s.slug === slug);
    assert.ok(stage, slug);
    const voiced = titlesWithVoices(source);
    const expected = stage.topics.map((t) => t.title).filter((title) => voiced.has(title));
    noVoices.push(...stage.topics.map((t) => t.title).filter((title) => !voiced.has(title)));

    const technicals = topicTechnicals(source);
    assert.deepEqual(technicals.map((t) => t.heading), expected, `${slug}: Technical panels`);
    assert.deepEqual(topicVoices(source).map((t) => t.heading), expected, `${slug}: Layman and Bangla panels`);
    for (const { heading, technical } of technicals) {
      assert.deepEqual(lessonProblems(technical), [], `${slug}: ${heading}`);
    }
  }
  // Only the cheat sheet keeps its original wording with no voices.
  assert.deepEqual(noVoices, ["Permissions Cheat Sheet"]);
});

const VOICE_SOURCE = [
  "# Stage",
  "",
  "## First topic",
  "",
  "<Voices>",
  "<Technical>",
  "",
  "Tech.",
  "",
  "</Technical>",
  "<Layman>",
  "",
  "Plain.",
  "",
  "```bash",
  "## not a heading",
  "</Layman>",
  "```",
  "",
  "</Layman>",
  "<Bangla>",
  "",
  "বাংলা।",
  "",
  "</Bangla>",
  "</Voices>",
  "",
  "## Second topic",
  "",
  "No voices here.",
].join("\n");

test("topicVoices returns the Layman and Bangla text of each topic with voices", () => {
  const [topic, ...rest] = topicVoices(VOICE_SOURCE);
  assert.equal(rest.length, 0);
  assert.equal(topic.heading, "First topic");
  assert.ok(topic.layman.startsWith("Plain.") && topic.layman.includes("</Layman>\n```"));
  assert.equal(topic.bangla, "বাংলা।");
});

const PANEL = (before: string, tip = "") =>
  `${before}\n\n${tip}<details>\n<summary>Go deeper</summary>\n\nx\n\n</details>`;
const TIP = (title: string, body: string) => `<Callout type="tip" title="${title}">\n\n${body}\n\n</Callout>\n\n`;

test("voiceProblems: 150 words pass and 151 words are reported", () => {
  assert.deepEqual(voiceProblems(PANEL(words(LESSON_WORD_LIMIT))), []);
  assert.equal(voiceProblems(PANEL(words(LESSON_WORD_LIMIT + 1))).length, 1);
});

test("voiceProblems: a tip of 160 characters passes and 161 is reported, whatever its title", () => {
  const ok = "x".repeat(LESSON_TIP_LIMIT);
  assert.deepEqual(voiceProblems(PANEL("Text.", TIP("Why it matters for testing", `${ok} <Cite n={1} />`))), []);
  assert.deepEqual(voiceProblems(PANEL("Text.", TIP("টেস্টিংয়ে কেন জরুরি", ok))), []);
  assert.equal(voiceProblems(PANEL("Text.", TIP("Why it matters for testing", `${ok}x`))).length, 1);
  assert.equal(voiceProblems(PANEL("Text.", TIP("টেস্টিংয়ে কেন জরুরি", `${ok}x`))).length, 1);
});

test("voiceProblems: a panel with no tip is fine", () => {
  assert.deepEqual(voiceProblems(PANEL("Text.")), []);
});

test("voiceProblems counts words as lessonProblems does", () => {
  const body = `${words(LESSON_WORD_LIMIT)} <Cite n={3} />\n\n\`\`\`bash\n${words(200)}\n\`\`\`\n\n${diagram}`;
  assert.deepEqual(voiceProblems(PANEL(body)), []);
});

const fence = (...lines: string[]) => ["```bash", ...lines, "```"].join("\n");

test("unsafeCleanups flags a recursive rm of $PWD or of an unguarded variable", () => {
  for (const line of [
    'rm -r "$PWD"',
    'rm -r -- "$PWD"',
    'rm -rf "$d"',
    'rm -rf -- "$d"',
    "rm -R $tmp",
    'rm --recursive "${d}"',
    'cd x && rm -fr -- "$d"',
    'rm -rf "$d"/*',
    "rm -rf $d/x",
    'rm -r "${d}"/sub',
    'rm -rf -- "$PWD"/demo',
  ]) {
    assert.equal(unsafeCleanups(fence(line)).length, 1, line);
  }
});

test("unsafeCleanups allows guarded variables, rmdir, literals, and prose", () => {
  for (const line of [
    'rm -r -- "${tmp:?}"',
    'rm -rf -- "${d:?}"',
    'rm -rf -- "${tmp:?}"/x',
    'rm -r "${d:?}"/*',
    'rmdir "$OLDPWD"',
    "rm -f file",
    "rm -rf /tmp/demo",
    "rm -rf ./build/*",
  ]) {
    assert.deepEqual(unsafeCleanups(fence(line)), [], line);
  }
  assert.deepEqual(unsafeCleanups('Do not run rm -rf "$d" here.'), []);
});

test("unsafeCleanups names the line number and the line", () => {
  const [message] = unsafeCleanups(`text\n\n${fence('rm -rf "$d"')}`);
  assert.ok(message.includes("line 4") && message.includes('rm -rf "$d"'), message);
});

test("unguardedMktempCd flags a cd into mktemp with no || exit or || return on the line", () => {
  for (const line of ['cd "$(mktemp -d)"', 'cd "$(mktemp -d)"   # a new empty folder', "( cd $(mktemp -d) && ls )"]) {
    assert.equal(unguardedMktempCd(fence(line)).length, 1, line);
  }
  for (const line of ['cd "$(mktemp -d)" || exit 1', 'cd "$(mktemp -d)" || return  # x', 'tmp=$(mktemp -d)']) {
    assert.deepEqual(unguardedMktempCd(fence(line)), [], line);
  }
  assert.deepEqual(unguardedMktempCd('Run cd "$(mktemp -d)" first.'), []);
  const [message] = unguardedMktempCd(`text\n\n${fence('cd "$(mktemp -d)"')}`);
  assert.ok(message.includes("line 4"), message);
});

test("every Layman and Bangla panel of every converted stage is within the word and tip limits", () => {
  for (const slug of LESSON_STAGES) {
    const source = readFileSync(new URL(`../content/linux/${slug}.mdx`, import.meta.url), "utf8");
    for (const { heading, layman, bangla } of topicVoices(source)) {
      assert.deepEqual(voiceProblems(layman), [], `${slug}: ${heading} (Layman)`);
      assert.deepEqual(voiceProblems(bangla), [], `${slug}: ${heading} (Bangla)`);
    }
  }
});

test("no Linux Try-it block removes a directory unsafely or runs an unguarded cd into mktemp", () => {
  const dir = new URL("../content/linux/", import.meta.url);
  for (const file of readdirSync(dir).filter((name) => name.endsWith(".mdx"))) {
    const source = readFileSync(new URL(file, dir), "utf8");
    assert.deepEqual([...unsafeCleanups(source), ...unguardedMktempCd(source)], [], file);
  }
});
