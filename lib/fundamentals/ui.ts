/** The English strings of the Fundamentals module. */

export const FUNDAMENTALS_UI = {
  siteTitle: "Fundamentals",
  description:
    "Learn software testing in 11 chapters: the basics, defects, life cycles, test types, levels, test techniques, planning, test cases, bugs, and interview questions. Your progress stays in your browser.",
  eyebrow: (chapters: number, topics: number) =>
    `Fundamentals · ${chapters} chapters · ${topics} topics`,
  heading: "Software Testing Fundamentals",
  lede: "Work through the chapters in order, or jump to the one you need. Each chapter has a list of topics. Mark a topic as done when you can explain it without notes.",
  privacyNote: "Your progress stays in this browser only. It is not sent to a server.",
  overallLabel: "Overall progress",
  chaptersHeading: "Chapters",
  summaryText: (done: number, remaining: number) => `Done ${done} · Remaining ${remaining}`,
  percentText: (value: number) => `${value}%`,
  chapterCount: (done: number, total: number) => `${done} / ${total} done`,
  chapterMeta: (topics: number) => `${topics} topics`,

  // The chapter page.
  chapterEyebrow: (number: number) => `Chapter ${String(number).padStart(2, "0")} · Fundamentals`,
  chapterNav: "Fundamentals chapters",
  allChapters: "All chapters",
  previousChapter: "Previous chapter",
  nextChapter: "Next chapter",
  checklistHeading: "Topics",
  checklistLabel: (title: string) => `Mark done: ${title}`,
  chapterProgressLabel: (title: string) => `Progress of ${title}`,

  // The sidebar, the drawer, and the header.
  sidebarNav: "Chapters",
  sidebarChapterLabel: (number: number) => `Chapter ${String(number).padStart(2, "0")}`,
  sidebarCount: (done: number, total: number) => `${done}/${total}`,
  sidebarCountSr: (done: number, total: number) => `${done} of ${total} done`,
  headerLink: "Fundamentals",
  crossToFundamentals: "Fundamentals",

  // The version switch of the chapter page.
  versionSwitchLabel: "Version of the text",
  versionNotes: "My notes",
  versionIstqb: "ISTQB",
} as const;
