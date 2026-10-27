import type { Bn } from "../bn.ts";
import type { LINUX_UI } from "../linux/ui.ts";

/** The Bangla twin of LINUX_UI. `description` is metadata only, so it stays English. */
export const LINUX_UI_BN: Bn<typeof LINUX_UI> = {
  siteTitle: "Linux",
  description:
    "Learn Linux in 12 stages: the shell, files, text tools, users, processes, scripts, networking, services, and containers. Your progress stays in your browser.",
  eyebrow: (stages, topics) => `LINUX · ${stages}টি ধাপ · ${topics}টি টপিক`,
  heading: "Linux",
  lede: "ধাপগুলো ক্রমানুসারে শেষ করুন, অথবা যেটা দরকার সরাসরি সেখানে যান। প্রতিটা ধাপে টপিকের একটা তালিকা আছে। নোট না দেখে ব্যবহার করতে পারলে টপিকটা সম্পন্ন হিসেবে চিহ্নিত করুন।",
  privacyNote: "আপনার প্রগ্রেস শুধু এই ব্রাউজারে থাকে। এটা কোনো সার্ভারে পাঠানো হয় না।",
  overallLabel: "মোট প্রগ্রেস",
  stagesHeading: "ধাপসমূহ",
  summaryText: (done, remaining) => `সম্পন্ন ${done} · বাকি ${remaining}`,
  percentText: (value) => `${value}%`,
  stageCount: (done, total) => `${done} / ${total} সম্পন্ন`,
  stageMeta: (topics, minutesText) => `${topics}টি টপিক · ${minutesText}`,

  stageEyebrow: (number) => `ধাপ ${String(number).padStart(2, "0")} · LINUX`,
  inThisStage: "এই ধাপে",
  inThisStageMeta: (topics, minutesText) => `${topics}টি টপিক · প্রায় ${minutesText}`,
  stageNav: "Linux-এর ধাপসমূহ",
  allStages: "সব ধাপ",
  previousStage: "আগের ধাপ",
  nextStage: "পরের ধাপ",
  checklistHeading: "টপিকসমূহ",
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
