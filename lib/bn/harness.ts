import type { Bn } from "../bn.ts";
import type { HARNESS_UI } from "../harness/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of HARNESS_UI. `description` is metadata only, so it stays English. */
export const HARNESS_UI_BN: Bn<typeof HARNESS_UI> = {
  siteTitle: "AI Harnesses",
  description:
    "Six terms that explain how an AI harness works: the agent loop, tool calling, context, checkpoints, permissions, and guardrails.",
  eyebrow: (topics) => `AI HARNESSES · ${topics}টি টপিক`,
  heading: "AI Harnesses",
  lede: "হারনেস হলো মডেলের চারপাশের সফটওয়্যারের স্তর। এটা মডেলকে টুল দেয়, মডেল কী দেখবে তা নিয়ন্ত্রণ করে, আর মডেল কী কী ছুঁতে পারবে তা ঠিক করে। ছয়টি টার্ম ক্রমানুসারে শিখুন, তারপর সেগুলো মাথায় রেখে একটা এজেন্ট টেস্ট করুন।",
  sourceNote:
    "প্রতিটা পেজের প্রতিটা তথ্য একটা অফিসিয়াল সোর্সের সাথে লিংক করা: Claude Code docs, Claude API docs, OpenAI Agents SDK docs অথবা LangGraph docs।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",

  itemEyebrow: (number) => `টপিক ${pad(number)} · AI HARNESSES`,
  itemNav: "AI Harnesses-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",

  sidebarNav: "AI Harnesses-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  headerLink: "AI Harnesses",
  crossTo: "AI Harnesses",
};
