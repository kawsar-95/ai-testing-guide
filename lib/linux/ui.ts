/** The English strings of the Linux module. */

export const LINUX_UI = {
  siteTitle: "Linux",
  description:
    "A command sheet for each of 12 Linux stages, from the shell to containers: one card per topic, one row per command. Your progress stays in your browser.",
  eyebrow: (stages: number, topics: number, commands: number) =>
    `LINUX · ${stages} STAGES · ${topics} TOPICS · ${commands} COMMANDS`,
  heading: "Linux",
  lede: "One page for each stage, with every command on a card. Click a command to jump to its card, and tick a card when you know it.",
  continueStart: "Start with Shell Basics",
  continueNext: (title: string) => `Continue: ${title}`,
  continueDone: "All topics are done.",
  startHere: "START HERE",
  privacyNote: "Your progress stays in this browser only. It is not sent to a server.",
  overallLabel: "Overall progress",
  stagesHeading: "STAGES",
  summaryText: (done: number, remaining: number) => `Done ${done} · Remaining ${remaining}`,
  percentText: (value: number) => `${value}%`,
  stageCount: (done: number, total: number) => `${done} / ${total} done`,

  // The stage page.
  stageEyebrow: (number: number) => `STAGE ${String(number).padStart(2, "0")} · LINUX`,
  // A stage that has a command sheet (lib/linux/sheets).
  sheetMeta: (topics: number, commands: number) => `${topics} topics · ${commands} commands`,
  legend: "UPPERCASE = your own value · red ! = can destroy data · tick a card when you know it",
  warnLabel: "Warning",
  inThisStage: "In this stage",
  inThisStageMeta: (topics: number, minutesText: string) => `${topics} topics · about ${minutesText}`,
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
