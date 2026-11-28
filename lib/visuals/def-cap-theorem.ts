import type { VisualDef } from "./defs.ts";

/** The text of the CAP theorem visual. */
export const DEF: VisualDef = {
  id: "cap-theorem",
  title: { en: "The CAP theorem: one cut link, one choice", bn: "CAP theorem: একটি কাটা লিংক, একটি বাছাই" },
  promise: {
    en: "Cut the link between two nodes, then choose consistency or availability and see what a read does.",
    bn: "দুটি নোডের মধ্যকার লিংক কাটুন, তারপর কনসিসটেন্সি বা অ্যাভেইলেবিলিটি বেছে দেখুন একটি রিড কী করে।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Healthy network", bn: "সুস্থ নেটওয়ার্ক" },
      body: {
        en: "Two nodes keep a copy of the same value. A client writes 2 on node A. The message reaches node B, so a read on B returns 2.",
        bn: "দুটি নোড একই মানের কপি রাখে। একজন ক্লায়েন্ট নোড A-তে 2 লেখে। মেসেজ নোড B-তে পৌঁছায়, তাই B-তে রিড 2 ফেরত দেয়।",
      },
    },
    {
      title: { en: "Cut the link", bn: "লিংক কাটুন" },
      body: {
        en: "Now a partition: all messages between the two groups are lost. Both nodes still run, but they cannot talk to each other.",
        bn: "এবার পার্টিশন: দুই দলের মধ্যে সব মেসেজ হারিয়ে যায়। দুটি নোডই চলছে, কিন্তু একে অপরের সঙ্গে কথা বলতে পারে না।",
      },
    },
    {
      title: { en: "A client writes", bn: "ক্লায়েন্ট লেখে" },
      body: {
        en: "A client writes the new value 3 on node A. No message can reach node B, so B still holds 2.",
        bn: "একজন ক্লায়েন্ট নোড A-তে নতুন মান 3 লেখে। কোনো মেসেজ নোড B-তে পৌঁছাতে পারে না, তাই B-তে এখনো 2।",
      },
    },
    {
      title: { en: "Read on node B: choose", bn: "নোড B-তে রিড: বাছুন" },
      body: {
        en: "A read arrives at B, and B cannot know about 3. Choose consistency: B refuses. Choose availability: B answers with the old value 2. It cannot do both.",
        bn: "B-তে একটি রিড আসে, আর B 3-এর কথা জানতে পারে না। কনসিসটেন্সি বাছলে B প্রত্যাখ্যান করে। অ্যাভেইলেবিলিটি বাছলে B পুরোনো মান 2 দিয়ে উত্তর দেয়। দুটি একসঙ্গে সম্ভব নয়।",
      },
    },
    {
      title: { en: "The link returns", bn: "লিংক ফিরে আসে" },
      body: {
        en: "When the network is healthy again, the two sides agree on 3, and a read on B is served. The choice arises during a partition, not all the time.",
        bn: "নেটওয়ার্ক আবার সুস্থ হলে দুই পাশ 3-এ একমত হয় এবং B-তে রিড উত্তর পায়। বাছাইটি পার্টিশনের সময় আসে, সবসময় নয়।",
      },
    },
  ],
  recap: {
    en: "This is the tutorial's own two-node example. During a partition, a read on B is either refused or answered with old data. After the link returns, both nodes agree.",
    bn: "এটি টিউটোরিয়ালের নিজস্ব দুই-নোডের উদাহরণ। পার্টিশনের সময় B-তে একটি রিড হয় প্রত্যাখ্যাত হয়, নয়তো পুরোনো ডেটা দিয়ে উত্তর পায়। লিংক ফিরলে দুটি নোড একমত হয়।",
  },
};
