import { CONTENTS_HOME } from "./contents.ts";
import { DASHBOARD_HOME, DASHBOARD_UI } from "./dashboard.ts";
import { PAGES } from "./nav.ts";
import { MODULES, type ModuleId } from "./stats.ts";
import { contentsButton, crossToTutorial } from "./ui.ts";

export type HeaderNavId = "tutorial" | ModuleId | "contents" | "dashboard";

export type HeaderNavItem = {
  id: HeaderNavId;
  label: string;
  href: string;
  /** The pages of the dropdown. The contents item has none: it is a plain link. */
  pages?: readonly { href: string; title: string }[];
};

/** The items of the top nav, in order: the tutorial, the five modules, the contents page, and the dashboard. */
export const HEADER_NAV: readonly HeaderNavItem[] = [
  { id: "tutorial", label: crossToTutorial, href: "/", pages: PAGES.map(({ href, title }) => ({ href, title })) },
  ...MODULES.map((module) => ({ id: module.id, label: module.title, href: module.href, pages: module.pages })),
  { id: "contents", label: contentsButton, href: CONTENTS_HOME },
  { id: "dashboard", label: DASHBOARD_UI.navLabel, href: DASHBOARD_HOME },
];

/** The nav item of a path: the contents page, the dashboard, a module by its prefix, else the tutorial. */
export function activeNavId(path: string): HeaderNavId {
  if (path.startsWith(CONTENTS_HOME)) return "contents";
  if (path.startsWith(DASHBOARD_HOME)) return "dashboard";
  return MODULES.find((module) => path.startsWith(module.href))?.id ?? "tutorial";
}

export type DropdownEvent = { type: "toggle"; id: string } | { type: "escape" | "outside" | "blur-out" };

/** The open dropdown after an event. One dropdown is open at most. */
export function nextOpenState(open: string | null, event: DropdownEvent): string | null {
  if (event.type === "toggle") return open === event.id ? null : event.id;
  return null;
}

/**
 * Whether a blur closes the open dropdown. Only focus that moves to an
 * element outside the dropdown closes it. A click on the panel padding or on
 * its scrollbar moves focus to nothing (`relatedTarget` is null); the
 * outside-click listener handles clicks outside.
 */
export function blurClosesDropdown(relatedTarget: object | null, inside: boolean): boolean {
  return relatedTarget !== null && !inside;
}
