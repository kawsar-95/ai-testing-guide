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
  /** The `num` of a part. Required when the module has `parts`. */
  part?: number;
};

export type FlatPart = { num: number; title: string };

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
  // Only with a practice entry:
  practiceEyebrow?: string;
  sidebarPracticeLabel?: string;
  practiceSummaryText?: (done: number, total: number) => string;
  practiceLabel?: string;
};

/** The strings that a module with progress must have. */
export type FlatProgressUI = {
  overallLabel: string;
  summaryText: (done: number, total: number) => string;
  percentText: (v: number) => string;
  markDone: string;
  markedDone: string;
  sidebarDone: string;
};

type FlatModuleBase<I extends string, S extends string> = {
  id: I;
  label: string;
  searchGroup: string;
  entries: readonly FlatEntry<S>[];
  /** With parts, every entry has a part, and the parts of the entries do not go down. */
  parts?: readonly FlatPart[];
};

/** A module with `progress` must have the progress strings in `ui`. */
export type FlatModuleDef<I extends string = string, S extends string = string> = FlatModuleBase<I, S> &
  (
    | { progress?: undefined; ui: FlatModuleUI & Partial<FlatProgressUI> }
    | { progress: { storageKey: string; extraIds?: readonly string[] }; ui: FlatModuleUI & FlatProgressUI }
  );

export type FlatModule<I extends string = string, S extends string = string> = FlatModuleDef<I, S> & {
  /** `/${id}/` */
  home: string;
  /** All entries, numbered from 1. */
  items: readonly FlatItem<S>[];
  /** The items that are not "link". */
  pages: readonly FlatItem<S>[];
  /** The home, then the href of each page. */
  routes: readonly string[];
  /** The slugs of the "topic" and "link" items. Empty without progress. */
  lessonIds: readonly S[];
  /** One group for each part with items, in order. Without parts, one group with `part: null` and all items. */
  groups(): { part: FlatPart | null; items: readonly FlatItem<S>[] }[];
  /** Finds a page. A link item or an unknown slug gives undefined. */
  get(slug: string): FlatItem<S> | undefined;
  /** The previous and the next page. Link items do not count. */
  neighbours(slug: string): { previous?: FlatItem<S>; next?: FlatItem<S> };
};

/** The methods are closures, so a detached method such as `const get = M.get` works. */
export function defineFlatModule<I extends string, S extends string>(def: FlatModuleDef<I, S>): FlatModule<I, S> {
  const home = `/${def.id}/`;
  if (def.parts) {
    const nums = def.parts.map((p) => p.num);
    if (nums.some((n, i) => i > 0 && n <= nums[i - 1])) {
      throw new Error(`the num values of the parts of ${def.id} must be unique and ascending`);
    }
    let last = -Infinity;
    for (const entry of def.entries) {
      if (entry.part === undefined || !nums.includes(entry.part) || entry.part < last) {
        throw new Error(`entry ${entry.slug} has a missing, unknown, or decreasing part`);
      }
      last = entry.part;
    }
  }
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
  const lessonIds = def.progress
    ? items.filter((item) => item.kind === "topic" || item.kind === "link").map((item) => item.slug)
    : [];
  const groups = () =>
    def.parts
      ? def.parts
          .map((part) => ({ part, items: items.filter((item) => item.part === part.num) }))
          .filter((group) => group.items.length > 0)
      : [{ part: null, items }];

  const get = (slug: string) => pages.find((page) => page.slug === slug);
  const neighbours = (slug: string) => {
    const i = pages.findIndex((page) => page.slug === slug);
    if (i === -1) return {};
    return { previous: pages[i - 1], next: pages[i + 1] };
  };

  return { ...def, home, items, pages, routes, lessonIds, groups, get, neighbours };
}
