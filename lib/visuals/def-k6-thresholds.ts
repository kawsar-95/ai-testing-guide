import type { VisualDef } from "./defs.ts";

/** The text of the k6 thresholds visual. */
export const DEF: VisualDef = {
  id: "k6-thresholds",
  title: { en: "A limit on a metric decides pass or fail", bn: "metric-এর limit-ই ঠিক করে pass না fail" },
  promise: {
    en: "Move the limit on one run and watch the verdict and the exit code flip. Then see abortOnFail stop a run early.",
    bn: "একটা run-এর ওপর limit সরান, আর দেখুন verdict ও exit code বদলে যায়। তারপর দেখুন abortOnFail কীভাবে run আগেই থামায়।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "One run, many numbers", bn: "একটা run, অনেক সংখ্যা" },
      body: {
        en: "A run sends requests and records how long each one took. Each dot is one request time, in milliseconds. This metric is http_req_duration.",
        bn: "run অনেক request পাঠায় আর প্রতিটা কত সময় নিল তা লিখে রাখে। প্রতিটা বিন্দু একটা request-এর সময়, millisecond-এ। এই metric-এর নাম http_req_duration।",
      },
    },
    {
      title: { en: "Squeeze it into one number", bn: "সবকিছু এক সংখ্যায়" },
      body: {
        en: "An aggregation method turns all the dots into one number. Here it is p(99): 99% of requests were faster than this line. The gauge shows the same value.",
        bn: "aggregation method সব বিন্দুকে এক সংখ্যায় আনে। এখানে সেটা p(99): ৯৯% request এই রেখার চেয়ে দ্রুত ছিল। gauge-এ একই মান দেখা যাচ্ছে।",
      },
    },
    {
      title: { en: "Draw the limit", bn: "limit আঁকুন" },
      body: {
        en: "The threshold p(99)<500 is a limit line at 500 ms. The expression is true or false. If the gauge is under the line, it is true.",
        bn: "threshold p(99)<500 মানে ৫০০ ms-এ একটা limit রেখা। expression true অথবা false হয়। gauge রেখার নিচে থাকলে সেটা true।",
      },
    },
    {
      title: { en: "Move the limit", bn: "limit সরান" },
      body: {
        en: "The run data does not change. Drag the limit and watch the verdict flip. A threshold is a rule you write, and the same run can pass or fail under it.",
        bn: "run-এর data বদলায় না। limit টানুন আর verdict উল্টে যেতে দেখুন। threshold হলো আপনার লেখা নিয়ম, আর একই run তার নিচে pass বা fail করতে পারে।",
      },
    },
    {
      title: { en: "Judged at the end", bn: "বিচার হয় শেষে" },
      body: {
        en: "By default, k6 judges thresholds when the test ends. The line shows p(99) so far. Only the last point counts for the verdict.",
        bn: "ডিফল্টভাবে k6 টেস্ট শেষ হলে threshold বিচার করে। রেখাটা এখন পর্যন্ত p(99) দেখায়। verdict-এর জন্য শুধু শেষ বিন্দুটা গোনা হয়।",
      },
    },
    {
      title: { en: "abortOnFail stops early", bn: "abortOnFail আগেই থামায়" },
      body: {
        en: "The page's script has an impossible limit, p(99)<1, with abortOnFail and delayAbortEval of 5s. After 5 seconds k6 sees it fail and stops. The run does not last 30 seconds.",
        bn: "পেজের script-এ একটা অসম্ভব limit আছে, p(99)<1, সঙ্গে abortOnFail আর delayAbortEval ৫ সেকেন্ড। ৫ সেকেন্ড পর k6 দেখে এটা fail করছে আর থেমে যায়। run ৩০ সেকেন্ড চলে না।",
      },
    },
    {
      title: { en: "The verdict is an exit code", bn: "verdict হলো exit code" },
      body: {
        en: "If all thresholds pass, k6 exits with code 0. If one fails, the code is 99. A CI job reads this code, so a failed threshold fails the job.",
        bn: "সব threshold pass করলে k6 exit code 0 দিয়ে বের হয়। একটা fail করলে কোড 99। CI job এই কোড পড়ে, তাই threshold fail করলে job-ও fail করে।",
      },
    },
  ],
  recap: {
    en: "The 90 request times are a made-up sample, not a real measurement. Your numbers will differ.",
    bn: "৯০টা request-এর সময় বানানো নমুনা, আসল মাপ নয়। আপনার সংখ্যা আলাদা হবে।",
  },
};
