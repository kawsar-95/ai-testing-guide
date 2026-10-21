import { ARCHITECTURE_HOME, TOPICS } from "./architecture/topics.ts";
import { ARCHITECTURE_UI } from "./architecture/ui.ts";
import { CHAPTERS, FUNDAMENTALS_HOME } from "./fundamentals/chapters.ts";
import { FUNDAMENTALS_UI } from "./fundamentals/ui.ts";
import { LINUX_HOME, STAGES } from "./linux/stages.ts";
import { LINUX_UI } from "./linux/ui.ts";
import { PAGES } from "./nav.ts";
import { sitemapPaths } from "./sitemap.ts";
import { CASES, SYSTEM_DESIGN_HOME } from "./system-design/cases.ts";
import { SYSTEM_DESIGN_UI } from "./system-design/ui.ts";

export type ModuleId = "linux" | "fundamentals" | "system-design" | "architecture";

export type SiteModule = {
  id: ModuleId;
  title: string;
  href: string;
  tagline: string;
  pages: readonly { href: string; title: string }[];
};

const pagesOf = (list: readonly { href: string; title: string }[]) =>
  list.map(({ href, title }) => ({ href, title }));

/** The four modules beside the tutorial, in header order. */
export const MODULES: readonly SiteModule[] = [
  { id: "linux", title: LINUX_UI.headerLink, href: LINUX_HOME, tagline: LINUX_UI.description, pages: pagesOf(STAGES) },
  {
    id: "fundamentals",
    title: FUNDAMENTALS_UI.headerLink,
    href: FUNDAMENTALS_HOME,
    tagline: FUNDAMENTALS_UI.description,
    pages: pagesOf(CHAPTERS),
  },
  {
    id: "system-design",
    title: SYSTEM_DESIGN_UI.headerLink,
    href: SYSTEM_DESIGN_HOME,
    tagline: SYSTEM_DESIGN_UI.description,
    pages: pagesOf(CASES),
  },
  {
    id: "architecture",
    title: ARCHITECTURE_UI.headerLink,
    href: ARCHITECTURE_HOME,
    tagline: ARCHITECTURE_UI.description,
    pages: pagesOf(TOPICS),
  },
];

/** The text voices of a section: Technical, plain English, and Bangla. */
const VOICE_COUNT = 3;

/** The numbers of the stats row on the home page and the contents page. */
export function siteStats(): { parts: number; modules: number; pages: number; voices: number } {
  return { parts: PAGES.length, modules: MODULES.length, pages: sitemapPaths().length, voices: VOICE_COUNT };
}
