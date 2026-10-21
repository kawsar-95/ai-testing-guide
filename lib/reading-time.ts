import { readFileSync } from "node:fs";
import { join } from "node:path";

/** Words per minute of the reading-time pill. */
const WORDS_PER_MINUTE = 200;

/**
 * The words that a reader reads on a page: the Technical text of each
 * `<Voices>` block and, in a Fundamentals chapter, the ISTQB version. Code,
 * export lines, JSX tags, and link URLs are not words.
 */
export function contentWords(source: string): number {
  const text = source
    .replace(/^export .*$/gm, "")
    .replace(/^(```|~~~)[^\n]*\n[\s\S]*?^\1[^\n]*$/gm, "")
    .replace(/<(Layman|Bangla)>[\s\S]*?<\/\1>/g, "")
    .replace(/<Version of="notes">[\s\S]*?<\/Version>/g, "")
    .replace(/`[^`\n]*`/g, "")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/<[^>]*>/g, " ")
    .replace(/[#*_|>[\]]/g, " ");
  return text.split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

/** The minutes of the reading-time pill: words / 200, rounded up, 1 at least. */
export function readingMinutes(source: string): number {
  return Math.max(1, Math.ceil(contentWords(source) / WORDS_PER_MINUTE));
}

/** The reading time of content/<dir>/<slug>.mdx. Reads the file at build time. */
export function getReadingMinutes(dir: string, slug: string): number {
  return readingMinutes(readFileSync(join(process.cwd(), "content", dir, `${slug}.mdx`), "utf8"));
}
