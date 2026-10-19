// Structure checks of a Fundamentals chapter file: the <Version> blocks of each
// `##` topic and the headings inside a block. tests/fundamentals-structure.test.ts
// runs them over every chapter. Lines inside code fences do not count.
import { plainTitle, sourceLines } from "../headings.ts";

const H2 = /^\s*##\s+(.*)$/;
const HEADING = /^\s*#{1,6}\s+/;
const OPEN = /^\s*<Version\b/;
const CLOSE = /<\/Version>/;
const NOTES = /^\s*<Version\s+of="notes"/;
const ISTQB = /^\s*<Version\s+of="istqb"/;

/** For each `##` topic: its title and the number of `notes` and `istqb` blocks in it. */
export function topicVersionCounts(source: string): { title: string; notes: number; istqb: number }[] {
  const topics: { title: string; notes: number; istqb: number }[] = [];
  for (const { text, kind } of sourceLines(source)) {
    if (kind !== "text") continue;
    const heading = H2.exec(text);
    if (heading) {
      topics.push({ title: plainTitle(heading[1]), notes: 0, istqb: 0 });
      continue;
    }
    const topic = topics.at(-1);
    if (!topic) continue;
    if (NOTES.test(text)) topic.notes += 1;
    if (ISTQB.test(text)) topic.istqb += 1;
  }
  return topics;
}

/** The heading lines (`#` to `######`) between a `<Version` line and its `</Version>` line. */
export function headingsInsideVersions(source: string): string[] {
  const found: string[] = [];
  let inside = false;
  for (const { text, kind } of sourceLines(source)) {
    if (kind !== "text") continue;
    if (!inside) {
      // A block that opens and closes on one line has no heading line in it.
      if (OPEN.test(text) && !CLOSE.test(text)) inside = true;
      continue;
    }
    if (CLOSE.test(text)) {
      inside = false;
      continue;
    }
    if (HEADING.test(text)) found.push(text.trim());
  }
  return found;
}
