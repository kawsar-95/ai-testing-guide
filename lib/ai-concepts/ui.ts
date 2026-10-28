/** The English strings of the AI Concepts module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const AI_CONCEPTS_UI = {
  siteTitle: "AI Concepts for 2027",
  description:
    "Nine AI engineering ideas in plain words for testers: agent loops, MCP, subagents, gateways, cost, evals, guardrails, observability, and the harness.",
  eyebrow: (topics: number) => `AI CONCEPTS · ${topics} TOPICS`,
  heading: "AI Concepts for 2027",
  lede: "Nine ideas that explain how AI agents work in real products, and how a tester can check them. Each topic gives the idea, how it works, an example, common mistakes, and what to test.",
  sourceNote:
    "The topic list follows a GenAI.works infographic (October 2026). The text is the tutorial's own, and each fact on a page links to an official source.",
  itemsHeading: "TOPICS",
  itemsHeadingId: "topics-heading",
  overallLabel: "Topics done",
  summaryText: (done: number, total: number) => `${done} of ${total} topics done`,
  percentText: (value: number) => `${value}%`,

  // The topic page.
  itemEyebrow: (number: number) => `TOPIC ${pad(number)} · AI CONCEPTS`,
  itemNav: "AI Concepts topics",
  allItems: "All topics",
  previousItem: "Previous topic",
  nextItem: "Next topic",
  markDone: "Mark this topic as done",
  markedDone: "Done. Click to undo",

  // The sidebar, the drawer, and the header.
  sidebarNav: "AI Concepts topics",
  sidebarItemLabel: (number: number) => `TOPIC ${pad(number)}`,
  sidebarDone: "done",
  headerLink: "AI Concepts",
  crossTo: "AI Concepts",
} as const;
