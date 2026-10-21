import { PAGES } from "./nav.ts";
import { MODULES, type ModuleId } from "./stats.ts";

/** The `localStorage` keys of the reading state. Each list holds routes with a trailing slash. */
export const PAGE_READ_KEY = "page-read";
export const BOOKMARKS_KEY = "page-bookmarks";
/** One route: the last content page that the reader opened. */
export const LAST_PAGE_KEY = "last-page";

/** All progress keys of the site, in the order of the export file. */
export const PROGRESS_KEYS: readonly string[] = [
  PAGE_READ_KEY,
  BOOKMARKS_KEY,
  LAST_PAGE_KEY,
  "linux-progress",
  "fundamentals-progress",
  "architecture-progress",
];

export type ContentPage = {
  href: string;
  title: string;
  module: "tutorial" | ModuleId;
  /** The folder in content/ and the file name without .mdx. */
  dir: string;
  slug: string;
};

const lastSegment = (href: string) => href.split("/").filter(Boolean).at(-1) ?? "";

/** The 81 content pages: the tutorial parts, then the pages of each module. Module homes are not content pages. */
export const CONTENT_PAGES: readonly ContentPage[] = [
  ...PAGES.map((page) => ({ href: page.href, title: page.title, module: "tutorial" as const, dir: page.group, slug: page.slug })),
  ...MODULES.flatMap((module) =>
    module.pages.map((page) => ({
      href: page.href,
      title: page.title,
      module: module.id,
      dir: module.id,
      slug: lastSegment(page.href),
    })),
  ),
];

/** The content of the Export file: the raw value of each progress key. */
export function exportProgress(
  storage: { getItem(key: string): string | null },
  now: Date,
): { version: 1; exported: string; data: Record<string, string | null> } {
  const data: Record<string, string | null> = {};
  for (const key of PROGRESS_KEYS) data[key] = storage.getItem(key);
  return { version: 1, exported: now.toISOString(), data };
}
