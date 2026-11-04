import type { Bn } from "../bn.ts";
import type { LINUX_UI } from "../linux/ui.ts";

/** The Bangla twin of LINUX_UI. `description` is metadata only, so it stays English. */
export const LINUX_UI_BN: Bn<typeof LINUX_UI> = {
  siteTitle: "Linux",
  description:
    "A command sheet for each of 12 Linux stages, from the shell to containers: one card per topic, one row per command. Your progress stays in your browser.",
  eyebrow: (stages, topics, commands) => `LINUX · ${stages}টি ধাপ · ${topics}টি টপিক · ${commands}টি কমান্ড`,
  heading: "Linux",
  lede: "প্রতিটা ধাপের জন্য একটা পাতা, আর প্রতিটা কার্ডে সেই টপিকের সব কমান্ড। কমান্ডে ক্লিক করলে তার কার্ডে যাবেন, আর জানা হলে কার্ডে টিক দিন।",
  continueStart: "Shell Basics দিয়ে শুরু করুন",
  continueNext: (title) => `চালিয়ে যান: ${title}`,
  continueDone: "সব টপিক সম্পন্ন হয়েছে।",
  startHere: "এখান থেকে শুরু",
  privacyNote: "আপনার প্রগ্রেস শুধু এই ব্রাউজারে থাকে। এটা কোনো সার্ভারে পাঠানো হয় না।",
  overallLabel: "মোট প্রগ্রেস",
  stagesHeading: "ধাপসমূহ",
  summaryText: (done, remaining) => `সম্পন্ন ${done} · বাকি ${remaining}`,
  percentText: (value) => `${value}%`,
  stageCount: (done, total) => `${done} / ${total} সম্পন্ন`,

  stageEyebrow: (number) => `ধাপ ${String(number).padStart(2, "0")} · LINUX`,
  sheetMeta: (topics, commands) => `${topics}টি টপিক · ${commands}টি কমান্ড`,
  legend: "UPPERCASE = আপনার নিজের মান · লাল ! = data নষ্ট করতে পারে · জানা হলে কার্ডে টিক দিন",
  warnLabel: "সতর্কতা",
  stageNav: "Linux-এর ধাপসমূহ",
  allStages: "সব ধাপ",
  previousStage: "আগের ধাপ",
  nextStage: "পরের ধাপ",
  checklistLabel: (title) => `সম্পন্ন চিহ্নিত করুন: ${title}`,
  stageProgressLabel: (title) => `${title}-এর প্রগ্রেস`,

  sidebarNav: "ধাপসমূহ",
  sidebarStageLabel: (number) => `ধাপ ${String(number).padStart(2, "0")}`,
  sidebarCount: (done, total) => `${done}/${total}`,
  sidebarCountSr: (done, total) => `${total}-এর মধ্যে ${done} সম্পন্ন`,
  headerLink: "Linux",
  crossToTutorial: "Tutorial",
  crossToLinux: "Linux",
};
