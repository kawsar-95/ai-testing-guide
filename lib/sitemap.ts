import { FUNDAMENTALS_ROUTES } from "./fundamentals/chapters.ts";
import { LINUX_ROUTES } from "./linux/stages.ts";
import { PAGES } from "./nav.ts";
import { FLAT_MODULES } from "./modules/registry.ts";
import { CONTENTS_ROUTES } from "./contents.ts";
import { DASHBOARD_ROUTES } from "./dashboard.ts";
import { INTERVIEW_ROUTES } from "./interview.ts";

/** The paths of the sitemap: the home page, the contents page, the dashboard, the interview page, all the tutorial pages, the Linux pages, the Fundamentals pages, the System Design pages, and the Architecture pages. */
export function sitemapPaths(): string[] {
  return ["/", ...CONTENTS_ROUTES, ...DASHBOARD_ROUTES, ...INTERVIEW_ROUTES, ...PAGES.map((page) => page.href), ...LINUX_ROUTES, ...FUNDAMENTALS_ROUTES, ...FLAT_MODULES.flatMap((m) => m.routes)];
}
