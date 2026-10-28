import type { Bn } from "../bn.ts";
import type { CONTENTS_UI } from "../contents.ts";

/** The Bangla twin of CONTENTS_UI. `description` is metadata only, so it stays English. */
export const CONTENTS_UI_BN: Bn<typeof CONTENTS_UI> = {
  siteTitle: "সূচিপত্র",
  description:
    "Every part of the tutorial and every page of the Linux, Fundamentals, System Design, Architecture, Course, k6, and Agent Memory modules on one page.",
  eyebrow: "সূচিপত্র",
  heading: "সব পর্ব ও মডিউল",
  lede: "টিউটোরিয়াল দিয়ে শুরু করুন, অথবা একটা মডিউল খুলুন। Linux, Fundamentals, Architecture, Course, k6 ও Agent Memory-তে আপনার প্রগ্রেস এই ব্রাউজারেই থাকে।",
  tutorialHeading: "Tutorial",
  modulesHeading: "মডিউল",
  groupMeta: (count) => `${count}টি পর্ব`,
  moduleMeta: (count) => `${count}টি পেজ`,
  openModule: "মডিউলটি খুলুন",
  statsLabel: "সংখ্যায় এই সাইট",
  stats: { parts: "টিউটোরিয়াল পর্ব", modules: "মডিউল", pages: "পেজ", voices: "টেক্সট ভয়েস" },
};
