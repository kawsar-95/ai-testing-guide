import type { Bn } from "../bn.ts";
import type { REELS_UI } from "../reels/ui.ts";

/** The Bangla twin of REELS_UI. The channel names and video titles are not UI text, so they never change. */
export const REELS_UI_BN: Bn<typeof REELS_UI> = {
  heading: "এই টপিকের রিলস",
  note: "অন্য ক্রিয়েটরদের বানানো ছোট ভিডিও, এই টপিকের জন্য বাছাই করা। এগুলো এই পেজের ফ্যাক্ট-চেক করা লেখার অংশ নয়। চালান বাটন চাপার আগে YouTube থেকে কিছুই লোড হয় না।",
  play: "চালান",
  watchOnYoutube: "YouTube-এ দেখুন",
  kinds: {
    explainer: "ব্যাখ্যা",
    animation: "অ্যানিমেশন",
    "real-system": "বাস্তব সিস্টেম",
    interview: "ইন্টারভিউ টিপ",
    mistake: "সাধারণ ভুল",
    compare: "তুলনা",
  },
  langs: {
    en: "English",
    bn: "বাংলা",
  },
};
