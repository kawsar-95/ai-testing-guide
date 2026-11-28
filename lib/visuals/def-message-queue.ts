import type { VisualDef } from "./defs.ts";

/** The text of the message-queue visual. */
export const DEF: VisualDef = {
  id: "message-queue",
  title: { en: "A queue between the API and the workers", bn: "API আর worker-এর মাঝে একটি queue" },
  promise: {
    en: "Send a burst of jobs and see the queue fill, then drain faster with more consumers.",
    bn: "একসাথে অনেক job পাঠান, দেখুন queue ভরে যায়, তারপর বেশি consumer থাকলে দ্রুত খালি হয়।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "The producer adds a job", bn: "Producer একটি job যোগ করে" },
      body: {
        en: "The API is the producer. It puts one job in the queue and answers 202 Accepted at once. It does not wait for the slow work.",
        bn: "API হলো producer। সে queue-তে একটি job রাখে এবং সঙ্গে সঙ্গে 202 Accepted দেয়। ধীর কাজের জন্য সে অপেক্ষা করে না।",
      },
    },
    {
      title: { en: "A burst arrives", bn: "হঠাৎ অনেক job আসে" },
      body: {
        en: "Many requests come at once. The queue is a buffer: it holds the jobs, and the API keeps answering fast.",
        bn: "একসাথে অনেক request আসে। Queue একটি buffer: সে job-গুলো ধরে রাখে, আর API দ্রুত উত্তর দিতে থাকে।",
      },
    },
    {
      title: { en: "A consumer takes one", bn: "একটি consumer একটি job নেয়" },
      body: {
        en: "A consumer, also called a worker, takes a message from the queue. In a simple queue, each message goes to one consumer.",
        bn: "Consumer, যাকে worker-ও বলা হয়, queue থেকে একটি message নেয়। সাধারণ queue-তে প্রতিটি message একটি consumer-এর কাছে যায়।",
      },
    },
    {
      title: { en: "One worker is slow", bn: "একটি worker ধীর" },
      body: {
        en: "Each job takes 20 seconds in this sample. One worker finishes one job every 20 seconds, so the backlog drains slowly.",
        bn: "এই নমুনায় প্রতিটি job-এ 20 সেকেন্ড লাগে। একটি worker প্রতি 20 সেকেন্ডে একটি job শেষ করে, তাই backlog ধীরে খালি হয়।",
      },
    },
    {
      title: { en: "Add consumers", bn: "Consumer বাড়ান" },
      body: {
        en: "Move the slider. More consumers take more jobs at the same time, so the queue empties sooner.",
        bn: "Slider সরান। বেশি consumer একসাথে বেশি job নেয়, তাই queue আরও আগে খালি হয়।",
      },
    },
    {
      title: { en: "A worker crashes", bn: "একটি worker crash করে" },
      body: {
        en: "A received message is hidden from other workers for a time, the visibility timeout. If the worker crashes and does not delete it, the message becomes visible again and another worker can try.",
        bn: "পাওয়া message কিছু সময় অন্য worker-দের কাছে লুকানো থাকে, একে visibility timeout বলে। Worker crash করে delete না করলে message আবার visible হয়, আর অন্য worker চেষ্টা করতে পারে।",
      },
    },
    {
      title: { en: "Watch the queue", bn: "Queue খেয়াল রাখুন" },
      body: {
        en: "Watch the number of waiting messages and the age of the oldest message. A queue that keeps growing means the workers cannot keep up.",
        bn: "অপেক্ষমাণ message-এর সংখ্যা আর সবচেয়ে পুরোনো message-এর বয়স খেয়াল রাখুন। Queue বাড়তেই থাকলে বোঝা যায় worker-রা তাল মেলাতে পারছে না।",
      },
    },
  ],
  recap: {
    en: "The burst of 12 jobs and the 20 seconds for each job are a sample, not a real system. The page says a slow job takes 20 to 30 seconds.",
    bn: "12টি job-এর burst আর প্রতিটি job-এর 20 সেকেন্ড একটি নমুনা, কোনো আসল system নয়। Page বলে একটি ধীর job-এ 20 থেকে 30 সেকেন্ড লাগে।",
  },
};
