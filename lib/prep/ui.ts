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

  // The area page.
  areaEyebrow: (number: number) => `AREA ${String(number).padStart(2, "0")} · INTERVIEW PREP`,
  areaEmpty: "No items yet. Check back soon.",
  areaNav: "Interview Prep areas",
  allAreas: "All areas",
  previousArea: "Previous area",
  nextArea: "Next area",

  // The view toggle and the level filter.
  viewGroupLabel: "Layout",
  viewTable: "Table",
  viewCards: "Cards",
  levelGroupLabel: "Level",
  levelAll: "All",
  levelLabels: { easy: "Easy", medium: "Medium", hard: "Hard" },
  levelEmpty: "No items match this level. Choose another level.",

  // The tables.
  colQuestion: "Question",
  colTemplate: "Answer template",
  colExample: "Example answer",
  colBehind: "Behind the question",
  colTask: "Task",
  colDetails: "Details",
  markDone: (title: string) => `Mark done: ${title}`,
  sourceLink: "Source",
  sourceFor: (title: string) => ` for ${title}`,
  opensInNewTab: " (opens in a new tab)",
  levelBadge: (level: string) => `Level: ${level}`,

  // The quiz.
  quizLabel: "Quiz",
  quizPosition: (index: number, total: number) => `Question ${index} of ${total}`,
  quizPrevious: "Previous",
  quizNext: "Next",
  quizAutoAdvance: "Auto-advance",
  quizCorrectMark: "Correct answer",
  quizWrongMark: "Your answer",
  quizCorrectResult: "Correct.",
  quizWrongResult: (letter: string) => `Not correct. The right answer is ${letter}.`,
  quizExplanation: "Explanation",
  quizDone: "Done",
} as const;
