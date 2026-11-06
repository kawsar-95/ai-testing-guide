import { GROUPS, PAGES } from "./nav.ts";
import type { NavPage } from "./nav.ts";
import { MODULES } from "./stats.ts";

/** The label of a group on the home page: `GETTING STARTED · 3 PARTS`. */
export function groupLabel(title: string, count: number): string {
  return `${title.toUpperCase()} · ${count} ${count === 1 ? "PART" : "PARTS"}`;
}

const START_HREFS = [
  "/getting-started/setup/",
  "/getting-started/permission-modes/",
  "/foundations/how-claude-code-works/",
];

/** The three pages to read first, in order. The part numbers come from `PAGES`. The hero button of the home page opens the first one. */
export const START_STEPS: NavPage[] = START_HREFS.map((href) => {
  const page = PAGES.find((p) => p.href === href);
  if (!page) throw new Error(`START_HREFS has an unknown page: ${href}`);
  return page;
});

/** The "Why this guide" items of the home page. The text is the tutorial's own text. */
export const WHY_ITEMS: readonly { title: string; text: string }[] = [
  { title: "Hands-on", text: "Each part has real commands, prompts, and config files that you can copy and run." },
  { title: "Every claim has a source", text: "Versions, commands, flags, and limits link to the official docs. Each page lists its sources." },
  { title: "Three voices", text: "Read a section in technical English, in plain English, or in Bangla. One click changes all sections." },
  { title: "One real QA project", text: "The case study follows one project from a bug hunt to a second fix PR." },
  { title: "Works offline", text: "Install the site as an app. Every page opens without a network after the first visit." },
  { title: "Dark and light", text: "The site follows the theme of your device. The button in the header changes it." },
];

const pad = (n: number) => String(n).padStart(2, "0");

type CourseCard = { n: string; title: string; tagline: string; count: number; href: string };

/** The numbered rows of "Course structure": the 6 tutorial groups, then the 14 modules. */
export const COURSE_CARDS: readonly CourseCard[] = [
  ...GROUPS.map((group) => ({
    title: group.title,
    tagline: group.pages.map((page) => page.title).join(" · "),
    count: group.pages.length,
    href: group.pages[0].href,
  })),
  ...MODULES.map((module) => ({
    title: module.title,
    tagline: module.tagline,
    count: module.pages.length,
    href: module.href,
  })),
].map((card, i) => ({ n: pad(i + 1), ...card }));

/** The tutorial groups: read in order. The home page shows them as their own list. */
export const TUTORIAL_CARDS: readonly CourseCard[] = COURSE_CARDS.slice(0, GROUPS.length);

/** The modules: open any. The home page shows them as their own list. */
export const MODULE_CARDS: readonly CourseCard[] = COURSE_CARDS.slice(GROUPS.length);
