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

  const before = open.length ? lines.slice(0, open[0]) : lines;
  // A diagram is not text: skip a `<FlowDiagram` block up to its first `/>` line (if none, count it).
  const prose: string[] = [];
  for (let i = 0; i < before.length; i++) {
    const end = before[i].startsWith("<FlowDiagram") ? before.indexOf("/>", i + 1) : -1;
    if (end > i) i = end;
    else prose.push(before[i]);
  }
  const count = prose.join("\n").replace(CITE, "").split(/\s+/).filter(Boolean).length;
  if (count > LESSON_WORD_LIMIT) problems.push(`${count} words before <details>, the limit is ${LESSON_WORD_LIMIT}`);

  const tip = lines.findIndex((line) => line.trim() === TIP_OPEN);
  if (tip >= 0) {
    const end = lines.findIndex((line, i) => i > tip && line.trim() === "</Callout>");
    const body = lines.slice(tip + 1, end < 0 ? undefined : end).join(" ").replace(CITE, "").replace(/\s+/g, " ").trim();
    if (body.length > LESSON_TIP_LIMIT) problems.push(`the tip has ${body.length} characters, the limit is ${LESSON_TIP_LIMIT}`);
  }

  return problems;
}
