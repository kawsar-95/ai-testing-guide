/** The contents page: every tutorial group and every module on one page. */
export const CONTENTS_HOME = "/contents/";

export const CONTENTS_ROUTES: readonly string[] = [CONTENTS_HOME];

/** The English strings of the contents page and the stats row. */
export const CONTENTS_UI = {
  siteTitle: "Contents",
  description: "Every part of the tutorial and every page of the Linux, Fundamentals, System Design, Architecture, Course, k6, AI Engineering, AI Harnesses, AI Skills, and AI Concepts modules on one page.",
  eyebrow: "CONTENTS",
  heading: "All parts and modules",
  lede: "Start with the tutorial, or open a module. Your progress in Linux, Fundamentals, Architecture, the Course, k6, AI Engineering, AI Skills, and AI Concepts stays in this browser.",
  tutorialHeading: "Tutorial",
  modulesHeading: "Modules",
  groupMeta: (count: number) => `${count} ${count === 1 ? "part" : "parts"}`,
  moduleMeta: (count: number) => `${count} ${count === 1 ? "page" : "pages"}`,
  openModule: "Open the module",
  statsLabel: "The site in numbers",
  stats: { parts: "tutorial parts", modules: "modules", pages: "pages", voices: "text voices" },
};
