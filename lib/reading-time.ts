import { readFileSync } from "node:fs";
import { join } from "node:path";

export type FundamentalsVersion = "notes" | "istqb";

/** Words per minute of the reading-time pill. */
const WORDS_PER_MINUTE = 200;

/**
 * Code lines per minute of the reading-time pill. This is the tutorial's own estimate, not a
 * measured rate: a reader works through a code block more slowly than through prose, and a
 * page with 100 lines of code is not a 1-minute read.
 */
const CODE_LINES_PER_MINUTE = 20;

// An export statement runs to the next blank line, so multi-line `page` objects go too.
const EXPORTS = /^export [^\n]*(?:\n[^\n]*\S[^\n]*)*/gm;
const FENCES = /^(```|~~~)[^\n]*\n[\s\S]*?^\1[^\n]*$/gm;
const OTHER_VOICES = /<(Layman|Bangla)>[\s\S]*?<\/\1>/g;
const otherVersion = (version: FundamentalsVersion) =>
  new RegExp(`<Version of="${version === "istqb" ? "notes" : "istqb"}">[\\s\\S]*?<\\/Version>`, "g");

/**
 * The words that a reader reads on a page: the Technical text of each
 * `<Voices>` block and, in a Fundamentals chapter, one version (ISTQB by
 * default). Code, export statements, JSX tags, and link URLs are not words.
 */
export function contentWords(source: string, version: FundamentalsVersion = "istqb"): number {
  const text = source
    .replace(EXPORTS, "")
    .replace(FENCES, "")
    .replace(OTHER_VOICES, "")
    .replace(otherVersion(version), "")
    .replace(/`[^`\n]*`/g, "")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/<[^>]*>/g, " ")
    .replace(/[#*_|>[\]]/g, " ");
  return text.split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

/**
 * The non-blank lines of the fenced code blocks that a reader reads: the same parts of a page
 * as `contentWords` (the Technical text and, in a Fundamentals chapter, one version).
 */
export function codeLines(source: string, version: FundamentalsVersion = "istqb"): number {
  const lines: number[] = [];
  const text = source
    .replace(EXPORTS, "")
    // One placeholder per block first, so that a tag inside a code block cannot end a panel.
    .replace(FENCES, (block) => {
      lines.push(block.split("\n").slice(1, -1).filter((line) => line.trim()).length);
      return `\u0000${lines.length - 1}\u0000`;
    })
    .replace(OTHER_VOICES, "")
    .replace(otherVersion(version), "");
  return [...text.matchAll(/\u0000(\d+)\u0000/g)].reduce((sum, m) => sum + lines[Number(m[1])], 0);
}

/** The minutes of the reading-time pill: words / 200 plus code lines / 20, rounded up, 1 at least. */
export function readingMinutes(source: string, version: FundamentalsVersion = "istqb"): number {
  const minutes = contentWords(source, version) / WORDS_PER_MINUTE + codeLines(source, version) / CODE_LINES_PER_MINUTE;
  return Math.max(1, Math.ceil(minutes));
}

const read = (dir: string, slug: string) => readFileSync(join(process.cwd(), "content", dir, `${slug}.mdx`), "utf8");

/** The reading time of each version of a Fundamentals chapter. The pill shows the one of the version switch. */
export function getReadingMinutesByVersion(dir: string, slug: string): Record<FundamentalsVersion, number> {
  const source = read(dir, slug);
  return { notes: readingMinutes(source, "notes"), istqb: readingMinutes(source, "istqb") };
}

/** The reading time of content/<dir>/<slug>.mdx. Reads the file at build time. */
export function getReadingMinutes(dir: string, slug: string): number {
  return readingMinutes(read(dir, slug));
}
