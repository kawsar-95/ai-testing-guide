import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { AI_ENGINEERING } from "@/lib/ai-engineering/topics";

export const metadata: Metadata = {
  title: AI_ENGINEERING.ui.siteTitle,
  description: AI_ENGINEERING.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={AI_ENGINEERING} />;
}
