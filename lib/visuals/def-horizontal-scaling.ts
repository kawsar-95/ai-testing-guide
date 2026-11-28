import type { VisualDef } from "./defs.ts";

/** The text of the horizontal-scaling visual. */
export const DEF: VisualDef = {
  id: "horizontal-scaling",
  title: { en: "Add servers, share the traffic", bn: "server বাড়ান, traffic ভাগ করুন" },
  promise: {
    en: "Move the load up and down, stop one server, and see when the capacity is enough.",
    bn: "load বাড়ান-কমান, একটি server বন্ধ করুন, আর দেখুন কখন capacity যথেষ্ট হয়।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "One server is busy", bn: "একটি server ব্যস্ত" },
      body: {
        en: "On admission day, many students log in at once. One app server cannot serve them all, so pages are slow and some requests fail.",
        bn: "ভর্তির দিনে অনেক শিক্ষার্থী একসাথে log in করে। একটি app server সবাইকে সামলাতে পারে না, তাই page ধীর হয় আর কিছু request fail করে।",
      },
    },
    {
      title: { en: "Add copies, share the load", bn: "copy যোগ করুন, load ভাগ করুন" },
      body: {
        en: "Scaling out means more instances of the same app. A load balancer shares the requests between the three servers, so each one gets less.",
        bn: "Scaling out মানে একই app-এর আরও instance। Load balancer request-গুলো তিনটি server-এর মধ্যে ভাগ করে দেয়, তাই প্রতিটি কম পায়।",
      },
    },
    {
      title: { en: "Change the demand", bn: "demand বদলান" },
      body: {
        en: "Move the slider. More servers give more capacity. While the demand stays below the capacity, nothing is dropped. Above it, requests fail.",
        bn: "slider সরান। বেশি server মানে বেশি capacity। Demand capacity-র নিচে থাকলে কিছুই বাদ পড়ে না। ওপরে গেলে request fail করে।",
      },
    },
    {
      title: { en: "One server stops", bn: "একটি server থেমে যায়" },
      body: {
        en: "App Server 2 crashes. The load balancer sends traffic only to healthy servers, so students can still log in. Try a high demand: two servers have less capacity.",
        bn: "App Server 2 crash করে। Load balancer শুধু healthy server-এ traffic পাঠায়, তাই শিক্ষার্থীরা তখনও log in করতে পারে। বেশি demand দিয়ে দেখুন: দুটি server-এর capacity কম।",
      },
    },
    {
      title: { en: "The database can still be slow", bn: "database তখনও ধীর হতে পারে" },
      body: {
        en: "All servers use one shared database. If the database is the slow part, more web servers do not help. Three servers wait for it, like one.",
        bn: "সব server একটি shared database ব্যবহার করে। Database যদি ধীর অংশ হয়, বেশি web server সাহায্য করে না। তিনটি server তার জন্য অপেক্ষা করে, একটির মতোই।",
      },
    },
  ],
  recap: {
    en: "More servers share the traffic and keep the service up when one stops. They do not fix a slow database. The numbers here are a sample (100 requests a second for each server), not a real system.",
    bn: "বেশি server traffic ভাগ করে নেয় এবং একটি থেমে গেলেও service চালু রাখে। ধীর database এতে ঠিক হয় না। এখানকার সংখ্যাগুলো নমুনা (প্রতি server-এ প্রতি সেকেন্ডে ১০০ request), কোনো আসল system নয়।",
  },
};
