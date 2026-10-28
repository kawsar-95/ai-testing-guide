import type { Bn } from "../bn.ts";
import type { AI_SKILLS_UI } from "../ai-skills/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of AI_SKILLS_UI. `description` is metadata only, so it stays English. */
export const AI_SKILLS_UI_BN: Bn<typeof AI_SKILLS_UI> = {
  siteTitle: "AI Skills for Testers",
  description: "20 AI skills in 4 tiers, from prompting to fine-tuning, each with how a tester can use it.",
  eyebrow: (topics) => `AI SKILLS · ${topics}টি স্কিল`,
  heading: "AI Skills for Testers",
  lede: "৪টি ধাপে ২০টি AI স্কিল শিখুন। যে স্কিলগুলো সবচেয়ে দ্রুত কাজে দেয় সেগুলো দিয়ে শুরু করুন, আর স্পেশালিস্ট স্কিলগুলো শিখুন শুধু তখনই যখন স্পষ্ট দরকার হয়। প্রতিটা স্কিলের একটা পেজ আছে, যেখানে স্কিলটা বোঝানো হয়েছে আর একজন টেস্টার কীভাবে এটা ব্যবহার করতে পারেন তা দেখানো হয়েছে।",
  sourceNote:
    "স্কিলের তালিকা আর ৪টি ধাপ AI for Leaders-এর ইনফোগ্রাফিক “20 AI Skills Your Team Must Master in 2026” অনুসরণ করে। লেখাটা এই টিউটোরিয়ালের নিজের। প্রতিটা পেজের প্রতিটা তথ্য একটা অফিশিয়াল সোর্সে লিংক করা।",
  itemsHeading: "স্কিলসমূহ",
  itemsHeadingId: "skills-heading",
  overallLabel: "সম্পন্ন স্কিল",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি স্কিল সম্পন্ন`,
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `স্কিল ${pad(number)} · AI SKILLS`,
  itemNav: "AI স্কিলসমূহ",
  allItems: "সব স্কিল",
  previousItem: "আগের স্কিল",
  nextItem: "পরের স্কিল",
  markDone: "এই স্কিল সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  sidebarNav: "AI স্কিলসমূহ",
  sidebarItemLabel: (number) => `স্কিল ${pad(number)}`,
  sidebarDone: "সম্পন্ন",
  headerLink: "AI Skills",
  crossTo: "AI Skills",
};
