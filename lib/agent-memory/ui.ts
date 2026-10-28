/** The English strings of the Agent Memory module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const AGENT_MEMORY_UI = {
  siteTitle: "Agent Memory",
  description:
    "The 7 types of memory of an AI agent in plain words: working, semantic, episodic, procedural, retrieval, parametric, and prospective.",
  eyebrow: (topics: number) => `AGENT MEMORY · ${topics} TOPICS`,
  heading: "7 Types of Agent Memory",
  lede: "An AI agent forgets everything between two calls, unless something keeps it. Each topic explains one type of memory: what it is, how an agent gets it, how it fails, and what a tester can check.",
  sourceNote:
    "The 7 types follow the infographic \"7 Types of Agent Memory\" by Neo Kim and Telnyx. Each fact on a page links to a primary source, such as a research paper or the Anthropic or LangGraph docs.",
  itemsHeading: "TOPICS",
  itemsHeadingId: "topics-heading",
  overallLabel: "Topics done",
  summaryText: (done: number, total: number) => `${done} of ${total} topics done`,
  percentText: (value: number) => `${value}%`,

  // The topic page.
  itemEyebrow: (number: number) => `TOPIC ${pad(number)} · AGENT MEMORY`,
  itemNav: "Agent Memory topics",
  allItems: "All topics",
  previousItem: "Previous topic",
  nextItem: "Next topic",
  markDone: "Mark this topic as done",
  markedDone: "Done. Click to undo",

  // The sidebar, the drawer, and the header.
  sidebarNav: "Agent Memory topics",
  sidebarItemLabel: (number: number) => `TOPIC ${pad(number)}`,
  sidebarDone: "done",
  headerLink: "Agent Memory",
  crossTo: "Agent Memory",
} as const;
