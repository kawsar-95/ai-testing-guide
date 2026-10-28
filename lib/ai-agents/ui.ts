/** The English strings of the How AI Agents Work module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const AI_AGENTS_UI = {
  siteTitle: "How AI Agents Work",
  description:
    "How an AI agent works, step by step: the trigger, the context, the model's decision, the tools, the stop check, memory, guardrails, observability, and the final output.",
  eyebrow: (topics: number) => `AI AGENTS · ${topics} TOPICS`,
  heading: "How AI Agents Work",
  lede: "An agent is a model plus a harness that runs a loop. Each topic explains one part of that loop: what it does, how it fails, and what a tester can check.",
  sourceNote:
    "The topics follow the infographic \"How AI Agents Work\" by Basia Kubicka. Each fact on a page links to an official source, such as the Anthropic, OpenAI, or LangGraph docs.",
  itemsHeading: "TOPICS",
  itemsHeadingId: "topics-heading",
  overallLabel: "Topics done",
  summaryText: (done: number, total: number) => `${done} of ${total} topics done`,
  percentText: (value: number) => `${value}%`,

  // The topic page.
  itemEyebrow: (number: number) => `TOPIC ${pad(number)} · AI AGENTS`,
  itemNav: "AI Agents topics",
  allItems: "All topics",
  previousItem: "Previous topic",
  nextItem: "Next topic",
  markDone: "Mark this topic as done",
  markedDone: "Done. Click to undo",

  // The sidebar, the drawer, and the header.
  sidebarNav: "AI Agents topics",
  sidebarItemLabel: (number: number) => `TOPIC ${pad(number)}`,
  sidebarDone: "done",
  headerLink: "AI Agents",
  crossTo: "AI Agents",
} as const;
