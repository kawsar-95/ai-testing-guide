import type { Bn } from "../bn.ts";
import type { DEVOPS_UI } from "../devops/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of DEVOPS_UI. `description` is metadata only, so it stays English. */
export const DEVOPS_UI_BN: Bn<typeof DEVOPS_UI> = {
  siteTitle: "DevOps & Cloud",
  description:
    "Git, CI/CD, Docker, Kubernetes, AWS, Terraform, Ansible, monitoring, and CNCF projects: a sourced explanation of each topic for testers, then KodeKloud Shorts to watch.",
  eyebrow: (topics) => `DEVOPS & CLOUD · ${topics}টি টপিক`,
  heading: "DevOps & Cloud",
  lede: "এই মডিউলে একটা delivery pipeline-এর চারপাশের টুলগুলো ব্যাখ্যা করা হয়েছে: version control, CI/CD, container, Kubernetes, ক্লাউড, infrastructure as code আর monitoring। পার্ট 1 থেকে 3-এর পেজগুলো tester-দের জন্য পূর্ণ পাঠ: হাতে-কলমে অনুশীলন, প্রতিটা টুল কোন test-এর কাজে লাগে, আর সাধারণ ভুল। বাকি টপিকগুলোতে সোর্সসহ একটা ছোট ব্যাখ্যা আছে। প্রতিটা পেজের শেষে KodeKloud Shorts আছে, যেখানে বিষয়টা কাজে দেখা যায়।",
  sourceNote:
    "প্রতিটা পেজের প্রতিটা তথ্য একটা টুলের বা তার ফাউন্ডেশনের অফিসিয়াল ডকুমেন্টেশনের সাথে লিংক করা। পেজের নিচের reel-গুলো KodeKloud-এর Shorts: অন্য একজন creator-এর ভিডিও, যাচাই করা লেখার অংশ নয়।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",

  itemEyebrow: (number) => `টপিক ${pad(number)} · DEVOPS & CLOUD`,
  itemNav: "DevOps & Cloud-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",

  sidebarNav: "DevOps & Cloud-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  headerLink: "DevOps & Cloud",
  crossTo: "DevOps & Cloud",
};
