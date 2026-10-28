/** The English strings of the AI Harnesses module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const HARNESS_UI = {
  siteTitle: "AI Harnesses",
  description:
    "Six terms that explain how an AI harness works: the agent loop, tool calling, context, checkpoints, permissions, and guardrails.",
  eyebrow: (topics: number) => `AI HARNESSES · ${topics} TOPICS`,
  heading: "AI Harnesses",
  lede: "A harness is the layer of software around the model. It gives the model tools, controls what the model sees, and decides what the model can touch. Learn the six terms in order, then test an agent with them in mind.",
  sourceNote:
    "Each fact on a page links to an official source: the Claude Code docs, the Claude API docs, the OpenAI Agents SDK docs, or the LangGraph docs.",
  itemsHeading: "TOPICS",
  itemsHeadingId: "topics-heading",

  // The topic page.
  itemEyebrow: (number: number) => `TOPIC ${pad(number)} · AI HARNESSES`,
  itemNav: "AI Harnesses topics",
  allItems: "All topics",
  previousItem: "Previous topic",
  nextItem: "Next topic",

  // The sidebar, the drawer, and the header.
  sidebarNav: "AI Harnesses topics",
  sidebarItemLabel: (number: number) => `TOPIC ${pad(number)}`,
  headerLink: "AI Harnesses",
  crossTo: "AI Harnesses",
} as const;
