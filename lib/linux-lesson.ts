// The shape check for a Linux lesson (the Technical text of one topic). It is
// a line scan, like lib/voice-source.ts. `npm test` uses it.
import { plainTitle, sourceLines } from "./headings.ts";

export const LESSON_WORD_LIMIT = 150;

export type TopicTechnical = { heading: string; technical: string };

const SECTION = /^##\s+(.*)$/;
const CITE = /<Cite\s[^>]*\/>/g;

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
  const count = before.join("\n").replace(CITE, "").split(/\s+/).filter(Boolean).length;
  if (count > LESSON_WORD_LIMIT) problems.push(`${count} words before <details>, the limit is ${LESSON_WORD_LIMIT}`);

  return problems;
}
