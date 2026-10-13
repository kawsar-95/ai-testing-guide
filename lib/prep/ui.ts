/** The English strings of the Interview Prep module. */

export const PREP_UI = {
  siteTitle: "Interview Prep",
  description:
    "Practice for a software testing interview: questions with answer templates, hands-on tasks, and a multiple-choice quiz. Your progress stays in your browser.",
  eyebrow: (areas: number, items: number) => `INTERVIEW PREP · ${areas} AREAS · ${items} ITEMS`,
  heading: "Interview Prep",
  lede: "Work through the areas in any order. Each area has questions, tasks, or quiz items. Mark an item as done when you can answer it without notes.",
  privacyNote: "Your progress stays in this browser only. It is not sent to a server.",
  overallLabel: "Overall progress",
  areasHeading: "AREAS",
  summaryText: (done: number, remaining: number) => `Done ${done} · Remaining ${remaining}`,
  percentText: (value: number) => `${value}%`,
  cardCount: (done: number, total: number) => `${done} / ${total} done`,
  cardEmpty: "No items yet",
  cardProgressLabel: (title: string) => `Progress of ${title}`,
} as const;
