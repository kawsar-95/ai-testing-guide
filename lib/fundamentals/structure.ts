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
// The voice panels (components/voice). A topic with voices has its own pair of
// blocks in each panel.
const PANEL_OPEN = /^<(Layman|Bangla)>\s*$/;
const PANEL_CLOSE = /^<\/(Layman|Bangla)>\s*$/;

type VoicePanel = "layman" | "bangla";

/**
 * Walks the text lines of a chapter. For each line, it gives the current `##`
 * title and the voice panel that holds the line (null outside a panel).
 */
function* topicLines(source: string): Generator<{ text: string; title: string | null; panel: VoicePanel | null; heading: boolean }> {
  let title: string | null = null;
  let panel: VoicePanel | null = null;
  for (const { text, kind } of sourceLines(source)) {
    if (kind !== "text") continue;
    const h2 = H2.exec(text);
    if (h2) {
      title = plainTitle(h2[1]);
      panel = null;
      yield { text, title, panel, heading: true };
      continue;
    }
    const open = PANEL_OPEN.exec(text);
    if (open) panel = open[1].toLowerCase() as VoicePanel;
    else if (PANEL_CLOSE.test(text)) panel = null;
    yield { text, title, panel, heading: false };
  }
}

/**
 * For each `##` topic: its title and the number of `notes` and `istqb` blocks
 * in it. Blocks inside a voice panel do not count (see voicePanelVersionCounts).
 */
export function topicVersionCounts(source: string): { title: string; notes: number; istqb: number }[] {
  const topics: { title: string; notes: number; istqb: number }[] = [];
  for (const { text, title, panel, heading } of topicLines(source)) {
    if (heading && title !== null) {
      topics.push({ title, notes: 0, istqb: 0 });
      continue;
    }
    const topic = topics.at(-1);
    if (!topic || panel) continue;
    if (NOTES.test(text)) topic.notes += 1;
    if (ISTQB.test(text)) topic.istqb += 1;
  }
  return topics;
}

/** For each voice panel of each `##` topic: the number of `notes` and `istqb` blocks in it. */
export function voicePanelVersionCounts(
  source: string,
): { title: string; panel: VoicePanel; notes: number; istqb: number }[] {
  const panels: { title: string; panel: VoicePanel; notes: number; istqb: number }[] = [];
  for (const { text, title, panel } of topicLines(source)) {
    if (!panel || title === null) continue;
    if (PANEL_OPEN.test(text)) {
      panels.push({ title, panel, notes: 0, istqb: 0 });
      continue;
    }
    const current = panels.at(-1);
    if (!current) continue;
    if (NOTES.test(text)) current.notes += 1;
    if (ISTQB.test(text)) current.istqb += 1;
  }
  return panels;
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
