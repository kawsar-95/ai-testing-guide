import type { VisualDef } from "./defs.ts";

/** The text of the database-replication visual. */
export const DEF: VisualDef = {
  id: "database-replication",
  title: { en: "A primary, its replicas, and a stale read", bn: "primary, replica আর একটি stale read" },
  promise: {
    en: "Write a payment, read it at once from a replica, and see old data.",
    bn: "একটি payment লিখুন, সঙ্গে সঙ্গে replica থেকে পড়ুন, আর পুরোনো data দেখুন।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "One primary, two replicas", bn: "একটি primary, দুটি replica" },
      body: {
        en: "The primary can change data. Two read replicas keep copies and follow its changes. A student has not paid yet, so every server says Unpaid.",
        bn: "Primary data পরিবর্তন করতে পারে। দুটি read replica copy রাখে আর তার পরিবর্তন অনুসরণ করে। শিক্ষার্থী এখনও payment করেননি, তাই সব server Unpaid বলছে।",
      },
    },
    {
      title: { en: "A write goes to the primary", bn: "write যায় primary-তে" },
      body: {
        en: "The student pays. The app writes the payment to the primary. Writes always go to the primary, so only it says Paid.",
        bn: "শিক্ষার্থী payment করলেন। App payment-টি primary-তে লেখে। Write সবসময় primary-তে যায়, তাই শুধু primary Paid বলছে।",
      },
    },
    {
      title: { en: "The copy is asynchronous", bn: "copy হয় asynchronously" },
      body: {
        en: "The primary sends the change to the replicas, but not at once. The delay is replication lag. In this example it is 3 seconds, and the replicas still say Unpaid.",
        bn: "Primary পরিবর্তনটি replica-তে পাঠায়, কিন্তু সঙ্গে সঙ্গে নয়। এই দেরিই replication lag। এই উদাহরণে এটি 3 সেকেন্ড, আর replica এখনও Unpaid বলছে।",
      },
    },
    {
      title: { en: "Read right after the write", bn: "write-এর ঠিক পরে read" },
      body: {
        en: "The dashboard opens 1 second later. Choose where it reads. A replica has not caught up, so it returns old data. The student sees Unpaid and may pay again.",
        bn: "1 সেকেন্ড পরে dashboard খোলে। কোথা থেকে পড়বে, বেছে নিন। Replica এখনও পিছিয়ে, তাই পুরোনো data দেয়। শিক্ষার্থী Unpaid দেখেন আর আবার payment করতে পারেন।",
      },
    },
    {
      title: { en: "Later, the replicas catch up", bn: "পরে replica ধরে ফেলে" },
      body: {
        en: "After the lag has passed, every replica has the payment. A read from a replica is now correct. Replicas are eventually consistent: they get the change, but not at once.",
        bn: "Lag পার হওয়ার পরে প্রতিটি replica-তে payment আছে। এখন replica থেকে read সঠিক। Replica হলো eventually consistent: তারা পরিবর্তন পায়, কিন্তু সঙ্গে সঙ্গে নয়।",
      },
    },
    {
      title: { en: "Split the reads by need", bn: "প্রয়োজন অনুযায়ী read ভাগ করুন" },
      body: {
        en: "Read/write splitting: read critical data, such as payment status, from the primary right after the write. Course lists and reports can come from replicas, which also gives the primary less load.",
        bn: "Read/write splitting: write-এর ঠিক পরে payment status-এর মতো জরুরি data primary থেকে পড়ুন। Course list আর report replica থেকে আসতে পারে, এতে primary-র load-ও কমে।",
      },
    },
  ],
  recap: {
    en: "Writes go to the primary. Replicas copy asynchronously, so a read from a replica right after a write can be stale. Read critical data from the primary, and send non-urgent reads to replicas.",
    bn: "Write যায় primary-তে। Replica asynchronously copy করে, তাই write-এর ঠিক পরে replica থেকে read stale হতে পারে। জরুরি data primary থেকে পড়ুন, আর জরুরি নয় এমন read replica-তে পাঠান।",
  },
};
