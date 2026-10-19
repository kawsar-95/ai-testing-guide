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
export const searchType = `Type to search the ${PAGES.length} parts, the Linux stages, the Fundamentals chapters, the System Design case studies, and the Architecture topics.`;
/** The text of the link to the tutorial in the sidebar of another section. */
export const crossToTutorial = "Tutorial";
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

export const voiceToBangla = "Show the Bangla text in every section";
export const voiceToTechnical = "Show the Technical text in every section";
export const voiceGroup = "Text version";
export const installApp = "Install this site as an app";
