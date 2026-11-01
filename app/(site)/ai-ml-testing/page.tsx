import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { AI_ML_TESTING } from "@/lib/ai-ml-testing/topics";

export const metadata: Metadata = {
  title: AI_ML_TESTING.ui.siteTitle,
  description: AI_ML_TESTING.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={AI_ML_TESTING} />;
}
