import type { Bn } from "../bn.ts";
import type { AGENT_MEMORY_UI } from "../agent-memory/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of AGENT_MEMORY_UI. `description` is metadata only, so it stays English. */
export const AGENT_MEMORY_UI_BN: Bn<typeof AGENT_MEMORY_UI> = {
  siteTitle: "Agent Memory",
  description:
    "The 7 types of memory of an AI agent in plain words: working, semantic, episodic, procedural, retrieval, parametric, and prospective.",
  eyebrow: (topics) => `AGENT MEMORY · ${topics}টি টপিক`,
  heading: "এজেন্ট মেমরির ৭টি ধরন",
  lede: "দুইটা কলের মাঝে একটা AI এজেন্ট সবকিছু ভুলে যায়, যদি না কিছু একটা তা ধরে রাখে। প্রতিটা টপিকে এক ধরনের মেমরি: এটা কী, এজেন্ট কীভাবে পায়, কীভাবে ব্যর্থ হয়, আর একজন টেস্টার কী চেক করতে পারেন।",
  sourceNote:
    "৭টি ধরন Neo Kim ও Telnyx-এর ইনফোগ্রাফিক \"7 Types of Agent Memory\" অনুযায়ী। প্রতিটা পেজের প্রতিটা তথ্য একটা প্রাইমারি সোর্সে লিংক করা, যেমন রিসার্চ পেপার বা Anthropic ও LangGraph docs।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",
  overallLabel: "সম্পন্ন টপিক",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি টপিক সম্পন্ন`,
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `টপিক ${pad(number)} · AGENT MEMORY`,
  itemNav: "Agent Memory-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",
  markDone: "এই টপিক সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  sidebarNav: "Agent Memory-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  sidebarDone: "সম্পন্ন",
  headerLink: "Agent Memory",
  crossTo: "Agent Memory",
};
