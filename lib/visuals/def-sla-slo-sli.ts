import type { VisualDef } from "./defs.ts";

/** The text of the sla-slo-sli visual. */
export const DEF: VisualDef = {
  id: "sla-slo-sli",
  title: { en: "SLI, SLO, SLA, and the error budget", bn: "SLI, SLO, SLA আর এরর বাজেট" },
  promise: {
    en: "Measure an SLI over a window, compare it with the SLO and the SLA, and see how much error budget is left.",
    bn: "একটি window-তে SLI মাপুন, SLO ও SLA-র সঙ্গে তুলনা করুন, আর দেখুন এরর বাজেট কতটা বাকি।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "The SLI is a measured number", bn: "SLI হলো মাপা একটি সংখ্যা" },
      body: {
        en: "The page's example: an API that CI jobs call. The SLI is successful requests divided by all requests. The window of four weeks holds 2 million requests. 4,000 of them failed.",
        bn: "পেজের উদাহরণ: একটি API, যা CI জব কল করে। SLI হলো সফল রিকুয়েস্ট ভাগ সব রিকুয়েস্ট। চার সপ্তাহের window-তে 2 million রিকুয়েস্ট আছে। তার মধ্যে 4,000টি ফেইল করেছে।",
      },
    },
    {
      title: { en: "The SLO is a target", bn: "SLO হলো একটি লক্ষ্য" },
      body: {
        en: "The team sets an SLO of 99.5% over the four-week window. The SLO is the target line for the SLI. If the SLI is on the right side of it, the team meets the objective.",
        bn: "দল চার সপ্তাহের window-তে 99.5%-এর একটি SLO ঠিক করে। SLO হলো SLI-র লক্ষ্যরেখা। SLI এর ডান দিকে থাকলে দল লক্ষ্য পূরণ করছে।",
      },
    },
    {
      title: { en: "The SLA is a contract", bn: "SLA হলো একটি চুক্তি" },
      body: {
        en: "The contract with customers promises 99%, with a service credit if the team misses it. The SLA has a consequence. The SLO does not.",
        bn: "কাস্টমারদের সঙ্গে চুক্তিতে 99% প্রতিশ্রুতি আছে, দল তা পূরণ না করলে সার্ভিস ক্রেডিট (service credit) দেওয়া হবে। SLA-র পরিণতি আছে। SLO-র নেই।",
      },
    },
    {
      title: { en: "The error budget", bn: "এরর বাজেট" },
      body: {
        en: "The budget is 100% minus the SLO, which is 0.5%. Of 2 million requests, that is 10,000 failed requests the team can spend in the window.",
        bn: "বাজেট হলো 100% বিয়োগ SLO, অর্থাৎ 0.5%। 2 million রিকুয়েস্টের মধ্যে এটি 10,000 ফেইল হওয়া রিকুয়েস্ট, যা দল window-তে খরচ করতে পারে।",
      },
    },
    {
      title: { en: "A bad release spends budget", bn: "একটি খারাপ রিলিজ বাজেট খরচ করে" },
      body: {
        en: "A bad release fails 4,000 requests before a rollback. That uses 40% of the budget. 6,000 failed requests are still left to spend.",
        bn: "একটি খারাপ রিলিজ রোলব্যাকের আগে 4,000 রিকুয়েস্ট ফেইল করায়। এতে বাজেটের 40% খরচ হয়। আরও 6,000 ফেইল হওয়া রিকুয়েস্টের জায়গা বাকি থাকে।",
      },
    },
    {
      title: { en: "Move the failures", bn: "ফেইলের সংখ্যা বদলান" },
      body: {
        en: "Move the slider. Past 10,000 failed requests the budget is gone and the SLO is missed. Past 20,000 the SLI falls under 99%, so the SLA is missed too. A written policy says what happens then.",
        bn: "slider সরান। 10,000 ফেইল পেরোলে বাজেট শেষ আর SLO মিস হয়। 20,000 পেরোলে SLI 99%-এর নিচে নামে, তাই SLA-ও মিস হয়। তখন কী হবে, তা একটি লিখিত পলিসি বলে দেয়।",
      },
    },
  ],
  recap: {
    en: "The SLI is the measured number. The SLO is the target for it. The SLA is the contract with a consequence. The error budget is 100% minus the SLO.",
    bn: "SLI হলো মাপা সংখ্যা। SLO হলো তার লক্ষ্য। SLA হলো পরিণতিসহ চুক্তি। এরর বাজেট হলো 100% বিয়োগ SLO।",
  },
};
