import { FLAT_MODULES } from "./modules/registry.ts";
import type { ContentPage } from "./reading-state.ts";

/**
 * The dashboard route and its strings. It imports the module registry
 * (`FLAT_MODULES`). The registry and the module files must not import this
 * file, so lib/sitemap.ts and lib/pwa.ts can import it with no cycle. The data
 * helpers are in lib/dashboard-data.ts.
 */

/** The dashboard: the reader's progress, all in this browser. */
export const DASHBOARD_HOME = "/dashboard/";

export const DASHBOARD_ROUTES: readonly string[] = [DASHBOARD_HOME];

/** The English strings of the dashboard. */
export const DASHBOARD_UI = {
  navLabel: "Dashboard",
  siteTitle: "Dashboard",
  description: "Your reading progress, bookmarks, and module progress. All data stays in this browser.",
  eyebrow: "DASHBOARD",
  heading: "Your progress",
  lede: "Pages you read, pages you bookmarked, and your topic progress. All data stays in this browser. Export it to keep a copy.",
  export: "Export",
  reset: "Reset",
  resetConfirm: "Delete all your progress in this browser? This cannot be undone.",
  statRead: "pages read",
  statBookmarks: "bookmarks",
  continueHeading: "Continue reading",
  startHeading: "Start reading",
  bookmarksHeading: "Bookmarks",
  bookmarksEmpty: "No bookmarks yet. Use the Bookmark button at the top of a page.",
  readHeading: "Pages read",
  readEmpty: "No pages read yet. Use the Mark as read button at the top of a page.",
  moduleLabels: {
    tutorial: "Tutorial",
    linux: "Linux",
    fundamentals: "Fundamentals",
    ...Object.fromEntries(FLAT_MODULES.map((m) => [m.id, m.label])),
  } as Record<ContentPage["module"], string>,
};
