/**
 * The flat module model. A flat module is a home page and a list of pages at
 * /<id>/<slug>/. Architecture and System Design use it. One definition drives
 * the routes, the numbers, the neighbours, and the progress ids.
 */

export type FlatKind = "topic" | "practice" | "link";

export type FlatEntry<S extends string = string> = {
  slug: S;
  title: string;
  /** The one-line summary on the module home page. */
  description: string;
  kind: FlatKind;
  /** Required for "link", ignored otherwise. */
  href?: string;
};

export type FlatItem<S extends string = string> = FlatEntry<S> & { number: number; href: string };

export type FlatModuleUI = {
  siteTitle: string;
  description: string;
  eyebrow: (count: number) => string;
  heading: string;
  lede: string;
  sourceNote: string;
  itemsHeading: string;
  itemsHeadingId: string;
  itemEyebrow: (n: number) => string;
  itemNav: string;
  allItems: string;
  previousItem: string;
  nextItem: string;
  sidebarNav: string;
  sidebarItemLabel: (n: number) => string;
  headerLink: string;
  crossTo: string;
  // Only with progress:
  overallLabel?: string;
  summaryText?: (done: number, total: number) => string;
  percentText?: (v: number) => string;
  markDone?: string;
  markedDone?: string;
  sidebarDone?: string;
  // Only with a practice entry:
  practiceEyebrow?: string;
  sidebarPracticeLabel?: string;
  practiceSummaryText?: (done: number, total: number) => string;
  practiceLabel?: string;
};

export type FlatModuleDef<I extends string = string, S extends string = string> = {
  id: I;
  label: string;
  searchGroup: string;
  entries: readonly FlatEntry<S>[];
  progress?: { storageKey: string; extraIds?: readonly string[] };
  ui: FlatModuleUI;
};

export type FlatModule<I extends string = string, S extends string = string> = FlatModuleDef<I, S> & {
  /** `/${id}/` */
  home: string;
  /** All entries, numbered from 1. */
  items: readonly FlatItem<S>[];
  /** The items that are not "link". */
  pages: readonly FlatItem<S>[];
  /** The home, then the href of each page. */
  routes: readonly string[];
  /** The slugs of the "topic" items. Empty without progress. */
  lessonIds: readonly S[];
  /** Finds a page. A link item or an unknown slug gives undefined. */
  get(slug: string): FlatItem<S> | undefined;
  /** The previous and the next page. Link items do not count. */
  neighbours(slug: string): { previous?: FlatItem<S>; next?: FlatItem<S> };
};

/** The methods are closures, so a detached alias such as `getTopic = M.get` works. */
export function defineFlatModule<I extends string, S extends string>(def: FlatModuleDef<I, S>): FlatModule<I, S> {
  const home = `/${def.id}/`;
  const items: readonly FlatItem<S>[] = def.entries.map((entry, i) => {
    if (entry.kind === "link" && !entry.href) throw new Error(`link entry ${entry.slug} needs an href`);
    return {
      ...entry,
      number: i + 1,
      href: entry.kind === "link" ? (entry.href as string) : `${home}${entry.slug}/`,
    };
  });
  const pages = items.filter((item) => item.kind !== "link");
  const routes = [home, ...pages.map((page) => page.href)];
  const lessonIds = def.progress ? pages.filter((page) => page.kind === "topic").map((page) => page.slug) : [];

  const get = (slug: string) => pages.find((page) => page.slug === slug);
  const neighbours = (slug: string) => {
    const i = pages.findIndex((page) => page.slug === slug);
    if (i === -1) return {};
    return { previous: pages[i - 1], next: pages[i + 1] };
  };

  return { ...def, home, items, pages, routes, lessonIds, get, neighbours };
}
