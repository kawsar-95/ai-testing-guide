import { FUNDAMENTALS_ROUTES } from "./fundamentals/chapters.ts";
import { LINUX_ROUTES } from "./linux/stages.ts";
import { PAGES } from "./nav.ts";
import { SYSTEM_DESIGN_ROUTES } from "./system-design/cases.ts";

/** The paths of the sitemap: the home page, all the tutorial pages, the Linux pages, the Fundamentals pages, and the System Design pages. */
export function sitemapPaths(): string[] {
  return ["/", ...PAGES.map((page) => page.href), ...LINUX_ROUTES, ...FUNDAMENTALS_ROUTES, ...SYSTEM_DESIGN_ROUTES];
}
