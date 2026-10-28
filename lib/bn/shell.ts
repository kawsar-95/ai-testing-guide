import type { Bn } from "../bn.ts";
import { PAGES } from "../nav.ts";
import type * as ui from "../ui.ts";

const pad = (n: number) => String(n).padStart(2, "0");

/** The Bangla twin of every export of lib/ui.ts except HOME_UI (see lib/bn/home.ts). */
export const SHELL_BN: Omit<Bn<typeof ui>, "HOME_UI"> = {
  skipLink: "মূল লেখায় যান",
  partsNav: "পর্বসমূহ",
  onThisPage: "এই পেজে",
  prevNextNav: "আগের ও পরের পর্ব",
  menuOpen: "পর্বের তালিকা খুলুন",
  menuClose: "পর্বের তালিকা বন্ধ করুন",
  themeToLight: "লাইট থিমে যান",
  themeToDark: "ডার্ক থিমে যান",
  themeGeneric: "কালার থিম বদলান",
  footerSummary: `${PAGES.length}টি পর্ব · Software Testing with AI`,
  partNumber: pad,
  partLabel: (n) => `পর্ব ${pad(n)}`,

  search: "সার্চ",
  searchAll: "সব পর্বে সার্চ করুন",
  searchClose: "সার্চ বন্ধ করুন",
  searchResults: "সার্চের ফলাফল",
  searchType: `${PAGES.length}টি পর্ব, Linux stage, Fundamentals chapter, System Design কেস স্টাডি, Architecture টপিক, Course টপিক, k6 টপিক এবং AI Concepts টপিকে সার্চ করতে লিখুন।`,
  crossToTutorial: "টিউটোরিয়াল",
  sidebarHome: "মডিউল হোম",
  searchLoading: "সার্চ ইনডেক্স লোড হচ্ছে…",
  searchNone: "কোনো ফলাফল নেই।",
  searchUnavailable: "এখন সার্চ পাওয়া যাচ্ছে না। পরে আবার চেষ্টা করুন।",

  openImageFullSize: "ছবিটি পূর্ণ আকারে খুলুন",
  sourcesHeading: "সোর্স",
  suggestEdit: "এডিটের পরামর্শ দিন",
  metaSections: (n) => `${n}টি সেকশন`,
  metaSources: (n) => `${n}টি সোর্স`,
  metaUpdated: (date) => `আপডেট: ${date}`,
  sourceAccessed: (date) => `দেখা হয়েছে: ${date}`,
  citeLabel: (n) => `সোর্স ${n}`,
  doLabel: "করুন",
  dontLabel: "করবেন না",

  // The name starts with its visible word (WCAG 2.5.3 Label in Name).
  voiceToBangla: "বাংলা – প্রতিটি সেকশনে বাংলা লেখা দেখান",
  voiceToTechnical: "English – প্রতিটি সেকশনে Technical লেখা দেখান",
  voiceGroup: "লেখার ধরন",
  installApp: "এই সাইটটি অ্যাপ হিসেবে ইনস্টল করুন",

  footerColumns: { tutorial: "টিউটোরিয়াল", modules: "মডিউল", project: "প্রজেক্ট" },
  footerContents: "সূচিপত্র",
  footerSource: "GitHub-এ সোর্স",

  contentsButton: "সূচিপত্র",
  navMain: "মূল মেনু",
  navHome: "হোম",
  OPEN_NAV_EVENT: "nav-drawer-open",

  readingTime: (minutes) => `${minutes} মিনিটে পড়া যায়`,
  bookmark: "বুকমার্ক",
  bookmarked: "বুকমার্ক করা হয়েছে",
  markRead: "পড়া হয়েছে চিহ্নিত করুন",
  markedRead: "পড়া হয়েছে",
  chapterNav: "এই সেকশনের পেজসমূহ",
  sectionOf: (n, total) => `সেকশন ${n} / ${total}`,
  sectionsGroup: "এই পেজের সেকশনসমূহ",
  sectionPrevious: "আগের",
  sectionNext: "পরের",
  showAllSections: "সব সেকশন দেখান",
  oneSectionAtATime: "একবারে একটি সেকশন পড়ুন",

  backToTop: "উপরে যান",
  backToTopLabel: "↑ উপরে",
  copyCode: "কোড কপি করুন",
  copyWords: { idle: "কপি", copied: "কপি হয়েছে", selected: "সিলেক্ট হয়েছে" },
  notFoundTitle: "পেজটি পাওয়া যায়নি",
  notFoundText: "এই পেজটি নেই। এটি সরানো হয়ে থাকতে পারে, অথবা ঠিকানায় টাইপের ভুল থাকতে পারে।",
  notFoundBack: "সূচিপত্রে ফিরে যান",
};
