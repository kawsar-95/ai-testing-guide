import type { Bn } from "../bn.ts";
import type { SYSTEM_DESIGN_UI } from "../system-design/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of SYSTEM_DESIGN_UI. `description` is metadata only, so it stays English. */
export const SYSTEM_DESIGN_UI_BN: Bn<typeof SYSTEM_DESIGN_UI> = {
  siteTitle: "System Design",
  description:
    "How 15 well-known systems work, in plain words: Kafka, Google Search, YouTube, WhatsApp, Uber, payments, and more.",
  eyebrow: (cases) => `SYSTEM DESIGN · ${cases}টি কেস স্টাডি`,
  heading: "System Design",
  lede: "প্রতিটা কেস স্টাডি একটা পরিচিত প্রোডাক্ট নিয়ে সহজ ভাষায় বুঝিয়ে দেয় ভেতরে সেটা কীভাবে কাজ করে। আপনাকে আর্কিটেক্ট হতে হবে না। যেকোনো ক্রমে পড়তে পারেন।",
  sourceNote:
    "প্রতিটা কেস স্টাডি Neo Kim-এর The System Design Newsletter-এর একটা আর্টিকেলের ওপর ভিত্তি করে লেখা। লেখাটা আমাদের নিজস্ব সারসংক্ষেপ। আর্টিকেলটা প্রতিটা পেজের প্রথম সোর্স।",
  itemsHeading: "কেস স্টাডিসমূহ",
  itemsHeadingId: "cases-heading",

  itemEyebrow: (number) => `কেস ${pad(number)} · SYSTEM DESIGN`,
  itemNav: "System Design-এর কেস স্টাডিসমূহ",
  allItems: "সব কেস স্টাডি",
  previousItem: "আগের কেস স্টাডি",
  nextItem: "পরের কেস স্টাডি",

  sidebarNav: "কেস স্টাডিসমূহ",
  sidebarItemLabel: (number) => `কেস ${pad(number)}`,
  headerLink: "System Design",
  crossTo: "System Design",
};
