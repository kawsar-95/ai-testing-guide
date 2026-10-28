import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { AI_SKILLS } from "@/lib/ai-skills/topics";

export const metadata: Metadata = {
  title: AI_SKILLS.ui.siteTitle,
  description: AI_SKILLS.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={AI_SKILLS} />;
}
