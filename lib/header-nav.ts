import { CONTENTS_HOME } from "./contents.ts";
import { DASHBOARD_HOME, DASHBOARD_UI } from "./dashboard.ts";
import { INTERVIEW_HOME, INTERVIEW_UI } from "./interview.ts";
import { AI_ROADMAP_HOME } from "./ai-roadmap/roadmaps.ts";
import { AI_ROADMAP_UI } from "./ai-roadmap/ui.ts";
import { contentsButton, navHome } from "./ui.ts";

export type HeaderNavId = "home" | "contents" | "dashboard" | "interview" | "ai-roadmap";

export type HeaderNavItem = { id: HeaderNavId; label: string; href: string };

/** The links of the top nav (the AI roadmap is the last), in order. A module is reached from the home page and the contents page. */
export const HEADER_NAV: readonly HeaderNavItem[] = [
  { id: "home", label: navHome, href: "/" },
  { id: "contents", label: contentsButton, href: CONTENTS_HOME },
  { id: "dashboard", label: DASHBOARD_UI.navLabel, href: DASHBOARD_HOME },
  { id: "interview", label: INTERVIEW_UI.navLabel, href: INTERVIEW_HOME },
  { id: "ai-roadmap", label: AI_ROADMAP_UI.navLabel, href: AI_ROADMAP_HOME },
];

/** The nav item of a path, or null on a page that is not a nav item (a tutorial or module page). */
export function activeNavId(path: string): HeaderNavId | null {
  return HEADER_NAV.find((item) => (item.href === "/" ? path === "/" : path.startsWith(item.href)))?.id ?? null;
}
