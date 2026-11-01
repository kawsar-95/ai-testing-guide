/** The English strings of the AI/ML Testing module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const AI_ML_TESTING_UI = {
  siteTitle: "AI/ML Testing",
  description:
    "Testing AI and ML systems for QA engineers, SDETs, and test leads: LLM behavior, prompt testing, automated evals, hallucination detection, RAG and agent testing, red teaming, observability, and CI/CD eval gates.",
  eyebrow: (topics: number) => `AI/ML TESTING · ${topics} TOPICS`,
  heading: "AI and ML Testing",
  lede:
    "An AI system does not have one right answer, so the tester cannot check the output alone. This module covers the whole job: what the model is doing, how to break it on purpose, how to score it automatically, and how to keep the score from falling.",
  sourceNote:
    "The topics follow the syllabus of the AI & ML Testing Professional Course (QodeBench — Journey to Automation): 17 course modules and 47 sessions, Phase 1 Foundations first, then Phase 2 Mastery. The text of each page is the tutorial's own. Every fact links to an official source, such as the tool's documentation, OWASP, NIST, or the original paper.",
  itemsHeading: "TOPICS",
  itemsHeadingId: "topics-heading",
  overallLabel: "Topics done",
  summaryText: (done: number, total: number) => `${done} of ${total} topics done`,
  percentText: (value: number) => `${value}%`,

  // The topic page.
  itemEyebrow: (number: number) => `TOPIC ${pad(number)} · AI/ML TESTING`,
  itemNav: "AI/ML Testing topics",
  allItems: "All topics",
  previousItem: "Previous topic",
  nextItem: "Next topic",
  markDone: "Mark this topic as done",
  markedDone: "Done. Click to undo",

  // The sidebar, the drawer, and the header.
  sidebarNav: "AI/ML Testing topics",
  sidebarItemLabel: (number: number) => `TOPIC ${pad(number)}`,
  sidebarDone: "done",
  headerLink: "AI/ML Testing",
  crossTo: "AI/ML Testing",
} as const;
