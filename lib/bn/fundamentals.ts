import type { Bn } from "../bn.ts";
import type { FUNDAMENTALS_UI } from "../fundamentals/ui.ts";

/** The Bangla twin of FUNDAMENTALS_UI. `description` is metadata only, so it stays English. */
export const FUNDAMENTALS_UI_BN: Bn<typeof FUNDAMENTALS_UI> = {
  siteTitle: "Fundamentals",
  description:
    "Learn software testing in 11 chapters: the basics, defects, life cycles, test types, levels, test techniques, planning, test cases, bugs, and interview questions. Your progress stays in your browser.",
  eyebrow: (chapters, topics) => `FUNDAMENTALS · ${chapters}টি চ্যাপ্টার · ${topics}টি টপিক`,
  heading: "Software Testing Fundamentals",
  lede: "চ্যাপ্টারগুলো ক্রমানুসারে শেষ করুন, অথবা যেটা দরকার সরাসরি সেখানে যান। প্রতিটা চ্যাপ্টারে টপিকের একটা তালিকা আছে। নোট না দেখে ব্যাখ্যা করতে পারলে টপিকটা সম্পন্ন হিসেবে চিহ্নিত করুন।",
  privacyNote: "আপনার প্রগ্রেস শুধু এই ব্রাউজারে থাকে। এটা কোনো সার্ভারে পাঠানো হয় না।",
  overallLabel: "মোট প্রগ্রেস",
  chaptersHeading: "চ্যাপ্টারসমূহ",
  summaryText: (done, remaining) => `সম্পন্ন ${done} · বাকি ${remaining}`,
  percentText: (value) => `${value}%`,
  chapterCount: (done, total) => `${done} / ${total} সম্পন্ন`,
  chapterMeta: (topics) => `${topics}টি টপিক`,

  chapterEyebrow: (number) => `চ্যাপ্টার ${String(number).padStart(2, "0")} · FUNDAMENTALS`,
  chapterNav: "Fundamentals-এর চ্যাপ্টারসমূহ",
  allChapters: "সব চ্যাপ্টার",
  previousChapter: "আগের চ্যাপ্টার",
  nextChapter: "পরের চ্যাপ্টার",
  checklistHeading: "টপিকসমূহ",
  checklistLabel: (title) => `সম্পন্ন চিহ্নিত করুন: ${title}`,
  chapterProgressLabel: (title) => `${title}-এর প্রগ্রেস`,

  sidebarNav: "চ্যাপ্টারসমূহ",
  sidebarChapterLabel: (number) => `চ্যাপ্টার ${String(number).padStart(2, "0")}`,
  sidebarCount: (done, total) => `${done}/${total}`,
  sidebarCountSr: (done, total) => `${total}-এর মধ্যে ${done} সম্পন্ন`,
  headerLink: "Fundamentals",
  crossToFundamentals: "Fundamentals",

  versionSwitchLabel: "লেখার ভার্সন",
  versionNotes: "আমার নোট",
  versionIstqb: "ISTQB",
};
