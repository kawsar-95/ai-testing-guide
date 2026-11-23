/** The Bangla twin of lib/ai-roadmap/ui.ts. */
import type { Bn } from "../bn.ts";
import type { AI_ROADMAP_UI } from "../ai-roadmap/ui.ts";

export const AI_ROADMAP_UI_BN: Bn<typeof AI_ROADMAP_UI> = {
  navLabel: "AI রোডম্যাপ",
  siteTitle: "AI রোডম্যাপ",
  description:
    "এই সাইটের AI মডিউলগুলোর শুরু থেকে শেষ পর্যন্ত একটা পথ: প্রতিটি মডিউলের জন্য একটা রোডম্যাপ (ধাপ, প্রতিটি ধাপের পর কী পারবেন, আর তার আগে কী জানা দরকার), আর সবগুলো মডিউল জুড়ে একটা পূর্ণ পথ।",
  eyebrow: "AI রোডম্যাপ",
  heading: "AI রোডম্যাপ",
  lede: "প্রতিটি AI মডিউলের একটা রোডম্যাপ আছে: তার পেজগুলো পড়ার ক্রমে, ধাপে ভাগ করা। ওপরের পূর্ণ পথ সব মডিউল জুড়ে প্রতিটি ধাপ একবার করে পড়ায়। রোডম্যাপ শুধু পেজের দিকে দেখায়। প্রতিটি মডিউলের পেজ আর ক্রম আগের মতোই থাকে।",
  masterHeading: "পূর্ণ পথ",
  masterLede: "মডিউল জুড়ে আটটা ধাপ। প্রতিটি লাইন একটা রোডম্যাপের একটা ধাপ।",
  roadmapsHeading: "প্রতিটি মডিউলের জন্য একটা রোডম্যাপ",
  stageLabel: (n: number) => `ধাপ ${n}`,
  stepLabel: (n: number) => `পর্ব ${n}`,
  moduleMeta: (stages: number, pages: number) => `${stages}টা ধাপ · ${pages}টা পেজ`,
  outcomeLabel: "এই ধাপের পর",
  needsLabel: "এই ধাপের আগে",
  stageDone: (done: number, total: number) => `${total}-এর মধ্যে ${done}টা শেষ`,
  openRoadmap: "রোডম্যাপ খুলুন",
  openModule: "মডিউল খুলুন",
  allRoadmaps: "সব রোডম্যাপ",
  fullPath: "পূর্ণ পথ",
  seeRoadmap: "এই মডিউলের রোডম্যাপ দেখুন",
  progressNote: "টিকচিহ্ন আসে প্রতিটি মডিউলে আপনার অগ্রগতি থেকে। সেগুলো এই ব্রাউজারেই থাকে। Agentic QA আর AI Harnesses-এ অগ্রগতি নেই, তাই সেগুলোতে টিকচিহ্ন দেখা যায় না।",
};
