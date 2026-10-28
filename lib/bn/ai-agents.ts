import type { Bn } from "../bn.ts";
import type { AI_AGENTS_UI } from "../ai-agents/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of AI_AGENTS_UI. `description` is metadata only, so it stays English. */
export const AI_AGENTS_UI_BN: Bn<typeof AI_AGENTS_UI> = {
  siteTitle: "How AI Agents Work",
  description:
    "How an AI agent works, step by step: the trigger, the context, the model's decision, the tools, the stop check, memory, guardrails, observability, and the final output.",
  eyebrow: (topics) => `AI AGENTS · ${topics}টি টপিক`,
  heading: "AI এজেন্ট কীভাবে কাজ করে",
  lede: "একটা এজেন্ট হলো একটা মডেল আর একটা harness, যেটা একটা loop চালায়। প্রতিটা টপিকে সেই loop-এর একটা অংশ: এটা কী করে, কীভাবে ব্যর্থ হয়, আর একজন টেস্টার কী চেক করতে পারেন।",
  sourceNote:
    "টপিকগুলো Basia Kubicka-র ইনফোগ্রাফিক \"How AI Agents Work\" অনুযায়ী। প্রতিটা পেজের প্রতিটা তথ্য একটা অফিসিয়াল সোর্সে লিংক করা, যেমন Anthropic, OpenAI বা LangGraph docs।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",
  overallLabel: "সম্পন্ন টপিক",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি টপিক সম্পন্ন`,
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `টপিক ${pad(number)} · AI AGENTS`,
  itemNav: "AI Agents-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",
  markDone: "এই টপিক সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  sidebarNav: "AI Agents-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  sidebarDone: "সম্পন্ন",
  headerLink: "AI Agents",
  crossTo: "AI Agents",
};
