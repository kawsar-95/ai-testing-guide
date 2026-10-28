/** The English strings of the AI Engineering module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const AI_ENGINEERING_UI = {
  siteTitle: "AI Engineering",
  description:
    "What AI engineering really involves, from prompts and RAG to evals, guardrails, observability, and system design, for testers.",
  eyebrow: (topics: number) => `AI ENGINEERING · ${topics} TOPICS`,
  heading: "AI Engineering",
  lede: "Calling a model is only the top of the iceberg. Learn the 8 topics that newcomers see, then the 20 topics under the waterline that make an AI system work in production. Each topic shows what a tester can check.",
  sourceNote:
    "The topic list follows \"The AI Engineering Iceberg\" by Jean Lee. The text is the tutorial's own. Each fact on a page links to an official source.",
  itemsHeading: "TOPICS",
  itemsHeadingId: "topics-heading",
  overallLabel: "Topics done",
  summaryText: (done: number, total: number) => `${done} of ${total} topics done`,
  percentText: (value: number) => `${value}%`,

  // The topic page.
  itemEyebrow: (number: number) => `TOPIC ${pad(number)} · AI ENGINEERING`,
  itemNav: "AI Engineering topics",
  allItems: "All topics",
  previousItem: "Previous topic",
  nextItem: "Next topic",
  markDone: "Mark this topic as done",
  markedDone: "Done. Click to undo",

  // The sidebar, the drawer, and the header.
  sidebarNav: "AI Engineering topics",
  sidebarItemLabel: (number: number) => `TOPIC ${pad(number)}`,
  sidebarDone: "done",
  headerLink: "AI Engineering",
  crossTo: "AI Engineering",
} as const;
