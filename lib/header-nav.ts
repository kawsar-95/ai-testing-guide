import { CONTENTS_HOME } from "./contents.ts";
import { PAGES } from "./nav.ts";
import { MODULES, type ModuleId } from "./stats.ts";
import { contentsButton, crossToTutorial } from "./ui.ts";

export type HeaderNavId = "tutorial" | ModuleId | "contents";

export type HeaderNavItem = {
  id: HeaderNavId;
  label: string;
  href: string;
  /** The pages of the dropdown. The contents item has none: it is a plain link. */
  pages?: readonly { href: string; title: string }[];
};

/** The items of the top nav, in order: the tutorial, the four modules, and the contents page. */
export const HEADER_NAV: readonly HeaderNavItem[] = [
  { id: "tutorial", label: crossToTutorial, href: "/", pages: PAGES.map(({ href, title }) => ({ href, title })) },
  ...MODULES.map((module) => ({ id: module.id, label: module.title, href: module.href, pages: module.pages })),
  { id: "contents", label: contentsButton, href: CONTENTS_HOME },
];

/** The nav item of a path: the contents page, a module by its prefix, else the tutorial. */
export function activeNavId(path: string): HeaderNavId {
  if (path.startsWith(CONTENTS_HOME)) return "contents";
  return MODULES.find((module) => path.startsWith(module.href))?.id ?? "tutorial";
}

export type DropdownEvent = { type: "toggle"; id: string } | { type: "escape" | "outside" | "blur-out" };

/** The open dropdown after an event. One dropdown is open at most. */
export function nextOpenState(open: string | null, event: DropdownEvent): string | null {
  if (event.type === "toggle") return open === event.id ? null : event.id;
  return null;
}
