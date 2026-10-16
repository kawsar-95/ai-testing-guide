/** The English strings of the Linux module. */

export const LINUX_UI = {
  siteTitle: "Linux",
  description:
    "Learn Linux in 12 stages: the shell, files, text tools, users, processes, scripts, networking, services, and containers. Your progress stays in your browser.",
  eyebrow: (stages: number, topics: number) => `LINUX · ${stages} STAGES · ${topics} TOPICS`,
  heading: "Linux",
  lede: "Work through the stages in order, or jump to the one you need. Each stage has a list of topics. Mark a topic as done when you can use it without notes.",
  privacyNote: "Your progress stays in this browser only. It is not sent to a server.",
  overallLabel: "Overall progress",
  stagesHeading: "STAGES",
  summaryText: (done: number, remaining: number) => `Done ${done} · Remaining ${remaining}`,
  percentText: (value: number) => `${value}%`,
  stageCount: (done: number, total: number) => `${done} / ${total} done`,
  stageMeta: (topics: number, minutesText: string) => `${topics} topics · ${minutesText}`,

  // The stage page.
  stageEyebrow: (number: number) => `STAGE ${String(number).padStart(2, "0")} · LINUX`,
  stageNav: "Linux stages",
  allStages: "All stages",
  previousStage: "Previous stage",
  nextStage: "Next stage",
  checklistHeading: "Topics",
  checklistLabel: (title: string) => `Mark done: ${title}`,
  stageProgressLabel: (title: string) => `Progress of ${title}`,

  // The sidebar, the drawer, and the header.
  sidebarNav: "Stages",
  sidebarStageLabel: (number: number) => `STAGE ${String(number).padStart(2, "0")}`,
  sidebarCount: (done: number, total: number) => `${done}/${total}`,
  sidebarCountSr: (done: number, total: number) => `${done} of ${total} done`,
  headerLink: "Linux",
  crossToTutorial: "Tutorial",
  crossToLinux: "Linux",
} as const;
