import type { VisualDef } from "./defs.ts";

/** The text of the load-balancer visual. */
export const DEF: VisualDef = {
  id: "load-balancer",
  title: { en: "One balancer, two rules, three servers", bn: "একটি ব্যালান্সার, দুটি নিয়ম, তিনটি সার্ভার" },
  promise: {
    en: "Send the same requests with Round Robin and with Least Connections, and watch the queues on servers of different speed.",
    bn: "একই request Round Robin আর Least Connections দিয়ে পাঠান, আর আলাদা গতির সার্ভারে queue-গুলো দেখুন।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Requests meet the balancer", bn: "Request এসে ব্যালান্সারে পৌঁছায়" },
      body: {
        en: "Requests arrive at the load balancer. It spreads them across several servers. In this sample, the three servers differ in speed: they need 2, 4 and 8 ticks for one request.",
        bn: "Request-গুলো load balancer-এ আসে। সে এগুলো কয়েকটি সার্ভারে ভাগ করে দেয়। এই নমুনায় তিনটি সার্ভারের গতি আলাদা: একটি request-এর জন্য তাদের লাগে ২, ৪ ও ৮ tick।",
      },
    },
    {
      title: { en: "Round Robin", bn: "রাউন্ড রবিন (Round Robin)" },
      body: {
        en: "Round Robin sends the requests one after the other: server 1, server 2, server 3, then server 1 again. It does not look at how busy a server is.",
        bn: "Round Robin request-গুলো একটির পর একটি পাঠায়: সার্ভার ১, সার্ভার ২, সার্ভার ৩, তারপর আবার সার্ভার ১। সার্ভার কতটা ব্যস্ত, সে তা দেখে না।",
      },
    },
    {
      title: { en: "The slow server falls behind", bn: "ধীর সার্ভার পিছিয়ে পড়ে" },
      body: {
        en: "Every server gets the same number of requests, but the slow one finishes them later. Its queue of active connections keeps growing.",
        bn: "প্রতিটি সার্ভার সমান সংখ্যক request পায়, কিন্তু ধীর সার্ভারটি সেগুলো দেরিতে শেষ করে। তার active connection-এর queue বাড়তেই থাকে।",
      },
    },
    {
      title: { en: "Least Connections", bn: "লিস্ট কানেকশনস (Least Connections)" },
      body: {
        en: "Now the same requests go to the server with the fewest active connections. The fast server takes more, the slow one takes fewer, and the queues stay short.",
        bn: "এবার একই request যায় সবচেয়ে কম active connection থাকা সার্ভারে। দ্রুত সার্ভার বেশি নেয়, ধীর সার্ভার কম নেয়, আর queue ছোট থাকে।",
      },
    },
    {
      title: { en: "Switch the rule", bn: "নিয়ম বদলান" },
      body: {
        en: "Use the buttons to switch the algorithm. The same 24 requests arrive each time. Only the rule that picks the server changes, and the queue lengths change with it.",
        bn: "বোতাম দিয়ে algorithm বদলান। প্রতিবার একই ২৪টি request আসে। শুধু সার্ভার বাছাইয়ের নিয়ম বদলায়, আর তার সাথে queue-র দৈর্ঘ্য বদলায়।",
      },
    },
    {
      title: { en: "Count per server", bn: "সার্ভার ধরে গুনুন" },
      body: {
        en: "A tester can send many requests and count the responses for each server, then compare the count with the algorithm. Round Robin gives equal counts here. Least Connections does not.",
        bn: "Tester অনেক request পাঠিয়ে প্রতিটি সার্ভারের response গুনতে পারেন, তারপর সংখ্যাটি algorithm-এর সাথে মেলাতে পারেন। এখানে Round Robin সমান সংখ্যা দেয়। Least Connections দেয় না।",
      },
    },
  ],
  recap: {
    en: "This is a sample with 24 requests and three servers of set speed, not a real system. Round Robin ignores load, so the slow server queues up. Least Connections looks at active connections.",
    bn: "এটি ২৪টি request আর নির্দিষ্ট গতির তিনটি সার্ভারের একটি নমুনা, কোনো আসল সিস্টেম নয়। Round Robin load দেখে না, তাই ধীর সার্ভারে queue জমে। Least Connections active connection দেখে।",
  },
};
