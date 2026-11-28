import type { VisualDef } from "./defs.ts";

/** The text of the CDN visual. */
export const DEF: VisualDef = {
  id: "cdn",
  title: { en: "A CDN: far origin, near edge", bn: "CDN: দূরের origin, কাছের edge" },
  promise: {
    en: "Ask for a file from far away, then from a nearby edge, and compare distance and time.",
    bn: "দূর থেকে একটি file চান, তারপর কাছের edge থেকে চান, আর দূরত্ব ও সময় মেলান।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "The origin is far away", bn: "Origin অনেক দূরে" },
      body: {
        en: "The original file stays on the origin. A user far from the origin has a long trip to it, and every trip takes time.",
        bn: "মূল file থাকে origin-এ। Origin থেকে দূরের user-কে সেখানে যেতে লম্বা পথ পাড়ি দিতে হয়, আর প্রতিটি পথে সময় লাগে।",
      },
    },
    {
      title: { en: "An edge server sits near", bn: "কাছে একটি edge server" },
      body: {
        en: "A CDN has edge servers, which are CDN servers close to the users. This one has no copy of the file yet.",
        bn: "CDN-এর edge server আছে, অর্থাৎ user-দের কাছাকাছি থাকা CDN server। এটির কাছে file-এর কোনো copy এখনো নেই।",
      },
    },
    {
      title: { en: "First request: a cache miss", bn: "প্রথম request: cache miss" },
      body: {
        en: "The first time, the request goes to the origin. The origin sends the file to the user and a copy to the nearest POP. The trip is long.",
        bn: "প্রথমবার request যায় origin-এ। Origin file-টি user-কে পাঠায় এবং একটি copy সবচেয়ে কাছের POP-এ পাঠায়। পথটি লম্বা।",
      },
    },
    {
      title: { en: "Next request: from the edge", bn: "পরের request: edge থেকে" },
      body: {
        en: "The next user in that area gets the file from the CDN, not from the origin. The trip is short and the origin gets no request.",
        bn: "সেই এলাকার পরের user file-টি origin থেকে নয়, CDN থেকে পান। পথ ছোট, আর origin-এ কোনো request যায় না।",
      },
    },
    {
      title: { en: "Cache-Control sets the freshness", bn: "Cache-Control সতেজতা ঠিক করে" },
      body: {
        en: "The origin tells the CDN what it can keep with the Cache-Control header. With max-age=N, a copy stays fresh for N seconds.",
        bn: "Origin, Cache-Control header দিয়ে CDN-কে জানায় কী রাখা যাবে। max-age=N হলে একটি copy N সেকেন্ড পর্যন্ত fresh থাকে।",
      },
    },
    {
      title: { en: "Try it: hit or miss", bn: "নিজে দেখুন: hit নাকি miss" },
      body: {
        en: "Switch the edge between a cached copy and a miss. Watch the distance, the time, and the requests that reach the origin.",
        bn: "Edge-এ copy আছে (cached) আর নেই (miss), এর মধ্যে বদলান। দূরত্ব, সময় আর origin-এ পৌঁছানো request দেখুন।",
      },
    },
  ],
  recap: {
    en: "A copy near the user means a short trip and less traffic for the origin. The distances and times here are example numbers, not measurements.",
    bn: "User-এর কাছে একটি copy থাকলে পথ ছোট হয় এবং origin-এ traffic কমে। এখানকার দূরত্ব ও সময় উদাহরণের সংখ্যা, মাপা সংখ্যা নয়।",
  },
};
