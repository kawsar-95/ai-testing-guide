import type { VisualDef } from "./defs.ts";

/** The text of the DNS visual. */
export const DEF: VisualDef = {
  id: "dns",
  title: { en: "A DNS lookup, from browser to answer", bn: "ব্রাউজার থেকে উত্তর পর্যন্ত একটা DNS লুকআপ" },
  promise: {
    en: "Follow one lookup through the servers, then switch the cache on and see the hops and the time drop.",
    bn: "একটা লুকআপ সার্ভারগুলোর ভেতর দিয়ে অনুসরণ করুন, তারপর ক্যাশ চালু করুন আর দেখুন হপ ও সময় কমে যায়।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Type a name", bn: "একটা নাম লিখুন" },
      body: {
        en: "The browser needs the address behind learn.example.com. It only has the name.",
        bn: "ব্রাউজারের learn.example.com-এর পেছনের অ্যাড্রেস দরকার। তার কাছে শুধু নামটা আছে।",
      },
    },
    {
      title: { en: "Ask the resolvers", bn: "রিজলভারদের জিজ্ঞেস করুন" },
      body: {
        en: "The browser asks the stub resolver. It does not do the hard work, so it asks a recursive name server.",
        bn: "ব্রাউজার stub resolver-কে জিজ্ঞেস করে। সে কঠিন কাজ করে না, তাই সে একটা recursive name server-কে জিজ্ঞেস করে।",
      },
    },
    {
      title: { en: "Check the cache", bn: "ক্যাশ দেখুন" },
      body: {
        en: "The first resolver step is to check local data, such as the cache. If the answer is there, it is returned. Use the switch to try both.",
        bn: "রিজলভারের প্রথম ধাপ হলো স্থানীয় ডেটা, যেমন ক্যাশ, দেখা। উত্তর সেখানে থাকলে তা ফেরত দেওয়া হয়। সুইচ দিয়ে দুটোই দেখুন।",
      },
    },
    {
      title: { en: "Ask a root server", bn: "একটা রুট সার্ভারকে জিজ্ঞেস করুন" },
      body: {
        en: "No cached answer, so the recursive server asks a root server. The search goes up to the root. Here the root points to the next server.",
        bn: "ক্যাশে উত্তর নেই, তাই recursive সার্ভার একটা রুট সার্ভারকে জিজ্ঞেস করে। খোঁজা রুট পর্যন্ত যায়। এখানে রুট পরের সার্ভারটা দেখিয়ে দেয়।",
      },
    },
    {
      title: { en: "Ask the “com” server", bn: "“com” সার্ভারকে জিজ্ঞেস করুন" },
      body: {
        en: "A server that points to better servers sends the resolver on. Now the recursive server asks the “com” server.",
        bn: "যে সার্ভার ভালো সার্ভারের দিকে নির্দেশ করে, সে রিজলভারকে এগিয়ে দেয়। এবার recursive সার্ভার “com” সার্ভারকে জিজ্ঞেস করে।",
      },
    },
    {
      title: { en: "Ask “example.com”", bn: "“example.com”-কে জিজ্ঞেস করুন" },
      body: {
        en: "The “example.com” server answers the question: the A record for learn.example.com holds 203.0.113.10.",
        bn: "“example.com” সার্ভার প্রশ্নের উত্তর দেয়: learn.example.com-এর A রেকর্ডে আছে 203.0.113.10।",
      },
    },
    {
      title: { en: "Cache it for the TTL", bn: "TTL পর্যন্ত ক্যাশ করুন" },
      body: {
        en: "The resolver caches the answer and returns it. It keeps the answer until the TTL ends, so the next lookup can skip the servers.",
        bn: "রিজলভার উত্তরটা ক্যাশ করে ফেরত দেয়। TTL শেষ না হওয়া পর্যন্ত সে উত্তর রাখে, তাই পরের লুকআপ সার্ভারগুলো এড়িয়ে যেতে পারে।",
      },
    },
  ],
  recap: {
    en: "With a cache hit the lookup stops at the recursive server. Without it, the lookup goes on to three more servers. The times are sample numbers, not measured.",
    bn: "ক্যাশে পেলে লুকআপ recursive সার্ভারেই থেমে যায়। না পেলে লুকআপ আরও তিনটা সার্ভারে যায়। সময়গুলো নমুনা সংখ্যা, মাপা নয়।",
  },
};
