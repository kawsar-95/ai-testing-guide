// The shape check for a Linux lesson (the Technical text of one topic). It is
// a line scan, like lib/voice-source.ts. `npm test` uses it.
import { plainTitle, sourceLines } from "./headings.ts";

export const LESSON_WORD_LIMIT = 150;
/** About 2 lines at the text width. Counted on the tip body, with `<Cite />` tags removed. */
export const LESSON_TIP_LIMIT = 160;

export type TopicTechnical = { heading: string; technical: string };

const SECTION = /^##\s+(.*)$/;
const CITE = /<Cite\s[^>]*\/>/g;
const TIP_OPEN = '<Callout type="tip" title="Why it matters for testing">';

/** For each `##` heading, the text of its `<Technical>` panel. A section with none is skipped. */
export function topicTechnicals(source: string): TopicTechnical[] {
  const topics: TopicTechnical[] = [];
  let heading = "";
  let body: string[] | null = null;

  for (const { text, kind } of sourceLines(source)) {
    if (kind === "text") {
      const trimmed = text.trim();
      if (trimmed === "<Technical>") {
        body = [];
        continue;
      }
      if (trimmed === "</Technical>" && body) {
        topics.push({ heading, technical: body.join("\n").trim() });
        body = null;
        continue;
      }
      const section = SECTION.exec(text);
      if (section) {
        heading = plainTitle(section[1]);
        body = null;
        continue;
      }
    }
    body?.push(text);
  }
  return topics;
}

/** Each broken rule of the lesson shape, one message each. Empty if the text has the shape. */
export function lessonProblems(technical: string): string[] {
  const problems: string[] = [];
  const all = sourceLines(technical);
  const lines = all.filter((line) => line.kind === "text").map((line) => line.text);

  const first = lines.find((line) => line.trim() !== "");
  if (!first?.startsWith("**Goal:**")) problems.push("the first line must start with **Goal:**");

  const tries = lines.filter((line) => line.startsWith("**Try it:**")).length;
  if (tries !== 1) problems.push(`expected one **Try it:** line, found ${tries}`);

  const open = lines.flatMap((line, i) => (line.trim() === "<details>" ? [i] : []));
  const closes = lines.flatMap((line, i) => (line === "</details>" ? [i] : []));
  const summary = open.length === 1 ? lines.slice(open[0] + 1).find((line) => line.trim() !== "") : undefined;
  const closed = closes.length === 1 && lines.slice(closes[0] + 1).every((line) => line.trim() === "");
  if (open.length !== 1 || summary?.trim() !== "<summary>Go deeper</summary>" || !closed) {
    problems.push(
      "expected one <details> block with <summary>Go deeper</summary>, one </details> at column 0, and nothing after it",
    );
  }

  problems.push(...sizeProblems(lines, (line) => line.trim() === TIP_OPEN));

  return problems;
}

/** The word limit before `<details>` and the tip limit, for the text lines of a panel. */
function sizeProblems(lines: string[], isTipOpen: (line: string) => boolean): string[] {
  const problems: string[] = [];
  const open = lines.findIndex((line) => line.trim() === "<details>");
  const before = open >= 0 ? lines.slice(0, open) : lines;
  // A diagram is not text: skip a `<FlowDiagram` block up to its first `/>` line (if none, count it).
  const prose: string[] = [];
  for (let i = 0; i < before.length; i++) {
    const end = before[i].startsWith("<FlowDiagram") ? before.indexOf("/>", i + 1) : -1;
    if (end > i) i = end;
    else prose.push(before[i]);
  }
  const count = prose.join("\n").replace(CITE, "").split(/\s+/).filter(Boolean).length;
  if (count > LESSON_WORD_LIMIT) problems.push(`${count} words before <details>, the limit is ${LESSON_WORD_LIMIT}`);

  const tip = lines.findIndex(isTipOpen);
  if (tip >= 0) {
    const end = lines.findIndex((line, i) => i > tip && line.trim() === "</Callout>");
    const body = lines.slice(tip + 1, end < 0 ? undefined : end).join(" ").replace(CITE, "").replace(/\s+/g, " ").trim();
    if (body.length > LESSON_TIP_LIMIT) problems.push(`the tip has ${body.length} characters, the limit is ${LESSON_TIP_LIMIT}`);
  }
  return problems;
}

/** The rules of a Layman or Bangla panel: the word limit and the tip limit (the title of the tip is free). */
export function voiceProblems(panel: string): string[] {
  const lines = sourceLines(panel).filter((line) => line.kind === "text").map((line) => line.text);
  return sizeProblems(lines, (line) => line.trim().startsWith('<Callout type="tip"'));
}

export type TopicVoices = { heading: string; layman: string; bangla: string };

/** For each `##` heading with `<Voices>`, the text of its `<Layman>` and `<Bangla>` panels. */
export function topicVoices(source: string): TopicVoices[] {
  const topics: TopicVoices[] = [];
  let current: TopicVoices | null = null;
  let heading = "";
  let panel: "layman" | "bangla" | null = null;
  let body: string[] = [];

  for (const { text, kind } of sourceLines(source)) {
    if (kind === "text") {
      const trimmed = text.trim();
      const open = trimmed === "<Layman>" ? "layman" : trimmed === "<Bangla>" ? "bangla" : null;
      if (open) {
        panel = open;
        body = [];
        continue;
      }
      if (panel && trimmed === `</${panel === "layman" ? "Layman" : "Bangla"}>`) {
        if (!current) topics.push((current = { heading, layman: "", bangla: "" }));
        current[panel] = body.join("\n").trim();
        panel = null;
        continue;
      }
      const section = SECTION.exec(text);
      if (section) {
        heading = plainTitle(section[1]);
        current = null;
        panel = null;
        continue;
      }
    }
    if (panel) body.push(text);
  }
  return topics;
}

// No end-of-target check: `"$d"/*` with an empty `d` is `rm -rf /*`. `${d:?}` does not match `\{\w+\}`.
const RM = /(?:^|[;&|(]\s*|\s)rm\s+((?:-\S+\s+)+)(?:--\s+)?"?\$(?:PWD\b|\w+|\{\w+\})/;
const RECURSIVE = /^--recursive$|^-[a-zA-Z]*[rR][a-zA-Z]*$/;

/**
 * A message for each line of a code block that runs `rm -r` on a target that
 * starts with `$PWD` or with a variable with no `:?` guard (also `"$d"/x`).
 */
export function unsafeCleanups(source: string): string[] {
  const messages: string[] = [];
  for (const { text, index, kind } of sourceLines(source)) {
    if (kind !== "code") continue;
    const match = RM.exec(text);
    if (!match) continue;
    // `--` ends the flags, so the target regex above starts after it. Check each flag word before it.
    if (match[1].trim().split(/\s+/).some((flag) => RECURSIVE.test(flag))) {
      messages.push(`line ${index + 1}: unsafe recursive rm, use "\${var:?}": ${text.trim()}`);
    }
  }
  return messages;
}

const MKTEMP_CD = /\bcd\s+"?\$\(mktemp\b/;
const GUARD = /\|\|\s*(?:exit|return)\b/;

/**
 * A message for each line of a code block with `cd "$(mktemp -d)"` and no
 * `|| exit` or `|| return` on the same line. If mktemp fails, `cd ""` stays in
 * the folder of the reader, and the next lines change the files of the reader.
 */
export function unguardedMktempCd(source: string): string[] {
  const messages: string[] = [];
  for (const { text, index, kind } of sourceLines(source)) {
    if (kind === "code" && MKTEMP_CD.test(text) && !GUARD.test(text)) {
      messages.push(`line ${index + 1}: cd into mktemp with no "|| exit 1": ${text.trim()}`);
    }
  }
  return messages;
}
