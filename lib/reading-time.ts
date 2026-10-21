import { readFileSync } from "node:fs";
import { join } from "node:path";

export type FundamentalsVersion = "notes" | "istqb";

/** Words per minute of the reading-time pill. */
const WORDS_PER_MINUTE = 200;

/**
 * The words that a reader reads on a page: the Technical text of each
 * `<Voices>` block and, in a Fundamentals chapter, one version (ISTQB by
 * default). Code, export statements, JSX tags, and link URLs are not words.
 */
export function contentWords(source: string, version: FundamentalsVersion = "istqb"): number {
  const other = version === "istqb" ? "notes" : "istqb";
  const text = source
    // An export statement runs to the next blank line, so multi-line `page` objects go too.
    .replace(/^export [^\n]*(?:\n[^\n]*\S[^\n]*)*/gm, "")
    .replace(/^(```|~~~)[^\n]*\n[\s\S]*?^\1[^\n]*$/gm, "")
    .replace(/<(Layman|Bangla)>[\s\S]*?<\/\1>/g, "")
    .replace(new RegExp(`<Version of="${other}">[\\s\\S]*?<\\/Version>`, "g"), "")
    .replace(/`[^`\n]*`/g, "")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/<[^>]*>/g, " ")
    .replace(/[#*_|>[\]]/g, " ");
  return text.split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

/** The minutes of the reading-time pill: words / 200, rounded up, 1 at least. */
export function readingMinutes(source: string, version: FundamentalsVersion = "istqb"): number {
  return Math.max(1, Math.ceil(contentWords(source, version) / WORDS_PER_MINUTE));
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
