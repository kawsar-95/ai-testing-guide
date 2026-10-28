import { CHAPTERS, FUNDAMENTALS_HOME } from "./fundamentals/chapters.ts";
import { FUNDAMENTALS_UI } from "./fundamentals/ui.ts";
import { LINUX_HOME, STAGES } from "./linux/stages.ts";
import { LINUX_UI } from "./linux/ui.ts";
import { FLAT_MODULES, type FlatModuleId } from "./modules/registry.ts";
import { PAGES } from "./nav.ts";
import { sitemapPaths } from "./sitemap.ts";

export type ModuleId = "linux" | "fundamentals" | FlatModuleId;

export type SiteModule = {
  id: ModuleId;
  title: string;
  href: string;
  tagline: string;
  pages: readonly { href: string; title: string }[];
};

const pagesOf = (list: readonly { href: string; title: string }[]) =>
  list.map(({ href, title }) => ({ href, title }));

/** The ten modules beside the tutorial, in header order. */
export const MODULES: readonly SiteModule[] = [
  { id: "linux", title: LINUX_UI.headerLink, href: LINUX_HOME, tagline: LINUX_UI.description, pages: pagesOf(STAGES) },
  {
    id: "fundamentals",
    title: FUNDAMENTALS_UI.headerLink,
    href: FUNDAMENTALS_HOME,
    tagline: FUNDAMENTALS_UI.description,
    pages: pagesOf(CHAPTERS),
  },
  ...FLAT_MODULES.map((m) => ({
    id: m.id,
    title: m.ui.headerLink,
    href: m.home,
    tagline: m.ui.description,
    pages: pagesOf(m.pages),
  })),
];

/** The text voices of a section: Technical, plain English, and Bangla. */
const VOICE_COUNT = 3;

/** The numbers of the stats row on the home page and the contents page. */
export function siteStats(): { parts: number; modules: number; pages: number; voices: number } {
  return { parts: PAGES.length, modules: MODULES.length, pages: sitemapPaths().length, voices: VOICE_COUNT };
}
