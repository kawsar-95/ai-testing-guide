import type { Bn } from "../bn.ts";
import type { DASHBOARD_UI } from "../dashboard.ts";

/** The Bangla twin of DASHBOARD_UI. `description` is metadata only, so it stays English. Module names stay English. */
export const DASHBOARD_UI_BN: Bn<typeof DASHBOARD_UI> = {
  navLabel: "ড্যাশবোর্ড",
  siteTitle: "ড্যাশবোর্ড",
  description: "Your reading progress, bookmarks, and module progress. All data stays in this browser.",
  eyebrow: "ড্যাশবোর্ড",
  heading: "আপনার প্রগ্রেস",
  lede: "আপনি কোন পেজ পড়েছেন, কোনটা বুকমার্ক করেছেন, আর টপিকে আপনার প্রগ্রেস কতটুকু। সব ডেটা শুধু এই ব্রাউজারে থাকে। একটা কপি রাখতে এক্সপোর্ট করুন।",
  export: "এক্সপোর্ট",
  reset: "রিসেট",
  resetConfirm: "এই ব্রাউজারে আপনার সব প্রগ্রেস মুছে ফেলবেন? এটা আর ফিরিয়ে আনা যাবে না।",
  statRead: "পেজ পড়া হয়েছে",
  statBookmarks: "বুকমার্ক",
  continueHeading: "পড়া চালিয়ে যান",
  startHeading: "পড়া শুরু করুন",
  bookmarksHeading: "বুকমার্ক",
  bookmarksEmpty: "এখনো কোনো বুকমার্ক নেই। কোনো পেজের উপরের বুকমার্ক বাটন ব্যবহার করুন।",
  readHeading: "পড়া পেজ",
  authorHeading: "লেখক পরিচিতি",
  authorPhotoAlt: "লেখকের ছবি",
  readEmpty: "এখনো কোনো পেজ পড়া হয়নি। কোনো পেজের উপরের “পড়া হয়েছে চিহ্নিত করুন” বাটন ব্যবহার করুন।",
  moduleLabels: {
    tutorial: "Tutorial",
    linux: "Linux",
    fundamentals: "Fundamentals",
    architecture: "Architecture",
    "system-design": "System Design",
    course: "Course",
    k6: "k6",
  },
};
