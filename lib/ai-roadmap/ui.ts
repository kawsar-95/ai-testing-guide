/** The English strings of the AI roadmap pages. The Bangla twin is lib/bn/ai-roadmap.ts. */

export const AI_ROADMAP_UI = {
  navLabel: "AI roadmap",
  siteTitle: "AI roadmap",
  description:
    "A start-to-end path through the AI modules of this site: one roadmap for each module, with stages, what you can do after each stage, and what to know before it, and one full path across all of them.",
  eyebrow: "AI roadmap",
  heading: "AI roadmap",
  lede: "Each AI module has a roadmap: its pages in reading order, grouped into stages. The full path at the top reads every stage once, across the modules. A roadmap only points at pages. The pages and their order in each module stay as they are.",
  masterHeading: "The full path",
  masterLede: "Eight steps across the modules. Each line is one stage of one roadmap.",
  roadmapsHeading: "One roadmap for each module",
  stageLabel: (n: number) => `Stage ${n}`,
  stepLabel: (n: number) => `Step ${n}`,
  moduleMeta: (stages: number, pages: number) => `${stages} stages · ${pages} pages`,
  outcomeLabel: "After this stage",
  needsLabel: "Before this stage",
  stageDone: (done: number, total: number) => `${done} of ${total} done`,
  openRoadmap: "Open the roadmap",
  openModule: "Open the module",
  allRoadmaps: "All roadmaps",
  fullPath: "The full path",
  seeRoadmap: "See the roadmap of this module",
  progressNote: "Ticks come from your progress in each module. They stay in this browser. Agentic QA and AI Harnesses have no progress, so they show no ticks.",
};
