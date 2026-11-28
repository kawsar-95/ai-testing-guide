import type { VisualDef } from "./defs.ts";

/** The text of the circuit-breaker visual. */
export const DEF: VisualDef = {
  id: "circuit-breaker",
  title: { en: "A circuit breaker trips and heals", bn: "সার্কিট ব্রেকার ট্রিপ করে আর সেরে ওঠে" },
  promise: {
    en: "Break the service and watch the breaker go Closed, Open, Half-Open, and Closed again.",
    bn: "সার্ভিস ভাঙুন আর দেখুন ব্রেকার Closed, Open, Half-Open হয়ে আবার Closed হচ্ছে।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Closed: calls pass", bn: "Closed: কল পার হয়" },
      body: {
        en: "The breaker is a proxy between the caller and the service. In Closed, every call goes through. The proxy counts the recent failures.",
        bn: "ব্রেকার কলার আর সার্ভিসের মাঝের একটি প্রক্সি। Closed অবস্থায় প্রতিটি কল পার হয়। প্রক্সি সাম্প্রতিক ফেইলিউর গোনে।",
      },
    },
    {
      title: { en: "Failures pile up", bn: "ফেইলিউর জমতে থাকে" },
      body: {
        en: "The service breaks. Calls still go through, and they fail. The failure count climbs toward the threshold.",
        bn: "সার্ভিস ভেঙে গেছে। কল এখনো পার হয়, আর ব্যর্থ হয়। ফেইলিউরের সংখ্যা থ্রেশহোল্ডের (threshold) দিকে বাড়ছে।",
      },
    },
    {
      title: { en: "Threshold hit: Open", bn: "থ্রেশহোল্ডে পৌঁছাল: Open" },
      body: {
        en: "The failures reach the threshold. The proxy goes to Open and starts a time-out timer.",
        bn: "ফেইলিউর থ্রেশহোল্ডে পৌঁছাল। প্রক্সি Open-এ যায় এবং একটি টাইমআউট টাইমার শুরু করে।",
      },
    },
    {
      title: { en: "Fail at once", bn: "সঙ্গে সঙ্গে ব্যর্থ" },
      body: {
        en: "In Open, each call fails at once with an exception. It never reaches the service. Count the calls that reached the service: the number stops growing.",
        bn: "Open-এ প্রতিটি কল এক্সসেপশন (exception) দিয়ে সঙ্গে সঙ্গে ব্যর্থ হয়। কল সার্ভিসে পৌঁছায়ই না। সার্ভিসে পৌঁছানো কল গুনুন: সংখ্যাটা আর বাড়ে না।",
      },
    },
    {
      title: { en: "Half-Open: a trial fails", bn: "Half-Open: ট্রায়াল ব্যর্থ" },
      body: {
        en: "The timer ends. The breaker goes to Half-Open and lets a trial call pass. The service is still broken, so the call fails. The breaker goes back to Open and restarts the timer.",
        bn: "টাইমার শেষ হয়। ব্রেকার Half-Open-এ গিয়ে একটি ট্রায়াল কল পার হতে দেয়। সার্ভিস এখনো ভাঙা, তাই কলটি ব্যর্থ হয়। ব্রেকার আবার Open-এ ফেরে এবং টাইমার আবার শুরু করে।",
      },
    },
    {
      title: { en: "Half-Open: trials succeed", bn: "Half-Open: ট্রায়াল সফল" },
      body: {
        en: "The timer ends again, and the service works now. Trial calls pass. The breaker needs a set number of successes in a row.",
        bn: "টাইমার আবার শেষ হয়, আর সার্ভিস এখন কাজ করছে। ট্রায়াল কল পার হয়। ব্রেকারের পরপর নির্দিষ্ট সংখ্যক সাফল্য লাগে।",
      },
    },
    {
      title: { en: "Closed again", bn: "আবার Closed" },
      body: {
        en: "Enough trial calls succeeded. The breaker assumes the fault is fixed and goes to Closed. Calls flow again.",
        bn: "যথেষ্ট ট্রায়াল কল সফল হয়েছে। ব্রেকার ধরে নেয় ফল্ট ঠিক হয়েছে এবং Closed-এ যায়। কল আবার চলতে থাকে।",
      },
    },
  ],
  recap: {
    en: "A breaker counts failures in Closed, fails calls at once in Open, and tries a few calls in Half-Open. While it is Open, the broken service gets no calls, so it has room to recover.",
    bn: "ব্রেকার Closed-এ ফেইলিউর গোনে, Open-এ কল সঙ্গে সঙ্গে ব্যর্থ করে, আর Half-Open-এ কয়েকটি কল চেষ্টা করে। Open থাকাকালে ভাঙা সার্ভিস কোনো কল পায় না, তাই সে সেরে ওঠার সুযোগ পায়।",
  },
};
