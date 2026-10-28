// The English strings of the site shell. They have no server-only imports,
// so client components can use them.

import { PAGES } from "./nav.ts";

export const skipLink = "Skip to content";
export const partsNav = "Parts";
export const onThisPage = "On this page";
export const prevNextNav = "Previous and next part";
export const menuOpen = "Open the list of parts";
export const menuClose = "Close the list of parts";
export const themeToLight = "Switch to light theme";
export const themeToDark = "Switch to dark theme";
export const themeGeneric = "Switch color theme";
export const footerSummary = `${PAGES.length} parts · Software Testing with AI`;

/** `05`: the part number, zero-padded to 2 digits. */
export function partNumber(n: number): string {
  return String(n).padStart(2, "0");
}

/** `PART 05`: the part number with its label. */
export function partLabel(n: number): string {
  return `PART ${partNumber(n)}`;
}

export const search = "Search";
export const searchAll = "Search all parts";
export const searchClose = "Close search";
export const searchResults = "Search results";
export const searchType = `Type to search the ${PAGES.length} parts, the Linux stages, the Fundamentals chapters, the System Design case studies, the Architecture topics, the Course topics, the k6 topics, the AI Engineering topics, the AI Harnesses topics, the AI skills, the AI Concepts topics, and the Agent Memory topics.`;
/** The text of the link to the tutorial in the drawer of another section. */
export const crossToTutorial = "Tutorial";
/** The link to the home of a module in the sidebar. */
export const sidebarHome = "Module home";
export const searchLoading = "Loading the search index…";
export const searchNone = "No results.";
export const searchUnavailable = "Search is not available now. Try again later.";

export const openImageFullSize = "Open the image in full size";
export const sourcesHeading = "Sources";
export const suggestEdit = "Suggest an edit";
export const metaSections = (n: number) => `${n} ${n === 1 ? "section" : "sections"}`;
export const metaSources = (n: number) => `${n} ${n === 1 ? "source" : "sources"}`;
export const metaUpdated = (date: string) => `updated ${date}`;
export const sourceAccessed = (date: string) => `accessed ${date}`;
export const citeLabel = (n: number) => `Source ${n}`;
export const doLabel = "Do";
export const dontLabel = "Don't";

// The name of the header voice button starts with its visible word
// (WCAG 2.5.3 Label in Name), so a speech user can say the word.
export const voiceToBangla = "বাংলা – Show the Bangla text in every section";
export const voiceToTechnical = "English – Show the Technical text in every section";
export const voiceGroup = "Text version";
export const installApp = "Install this site as an app";

/** The strings of the home page. */
export const HOME_UI = {
  eyebrow: "SOFTWARE TESTING WITH AI · 2026",
  titleLine1: "Software Testing",
  titleLine2Before: "with",
  titleMark: "Claude AI",
  sub: "A hands-on tutorial for QA engineers and SDETs: install Claude Code, learn how it works, configure and extend it, and automate testing in CI and the browser. Then follow one real QA project from a bug hunt to a second fix PR.",
  startReading: "Start reading",
  seeAll: "See all parts",
  startHere: "START HERE",
  step: (n: number) => `STEP ${n}`,
  whyEyebrow: "WHY THIS GUIDE",
  whyTitle: "Learn by doing, with sources",
  whySub: "Short parts, real commands, and a source for each fact.",
  courseEyebrow: "COURSE STRUCTURE",
  courseTitle: "Six tutorial groups and eleven modules",
  courseSub: "Read the tutorial in order, then open a module for Linux, testing fundamentals, system design, architecture, the System Design Course, k6 performance testing, AI engineering, AI harnesses, AI skills, AI concepts, or AI agent memory.",
  cardCount: (n: number) => `${n} ${n === 1 ? "page" : "pages"}`,
};

export const footerColumns = { tutorial: "Tutorial", modules: "Modules", project: "Project" };
export const footerContents = "Contents";
export const footerSource = "Source on GitHub";

export const contentsButton = "Contents";
export const navMain = "Main";
export const navHome = "Home";
/** The window event that opens the drawer. ContentsButton fires it, MobileNav listens. */
export const OPEN_NAV_EVENT = "nav-drawer-open";

export const readingTime = (minutes: number) => `${minutes} min read`;
export const bookmark = "Bookmark";
export const bookmarked = "Bookmarked";
export const markRead = "Mark as read";
export const markedRead = "Read";
export const chapterNav = "Pages of this section";

// One section at a time (components/content/SectionFocus.tsx).
export const sectionOf = (n: number, total: number) => `Section ${n} of ${total}`;
export const sectionsGroup = "Sections of this page";
export const sectionPrevious = "Previous";
export const sectionNext = "Next";
export const showAllSections = "Show all sections";
export const oneSectionAtATime = "Read one section at a time";

export const backToTop = "Back to top";
export const backToTopLabel = "↑ Top";
export const copyCode = "Copy code";
export const copyWords = { idle: "Copy", copied: "Copied", selected: "Selected" };
export const notFoundTitle = "Page not found";
export const notFoundText = "This page does not exist. It may have moved, or the address may have a typing error.";
export const notFoundBack = "Back to the contents";
