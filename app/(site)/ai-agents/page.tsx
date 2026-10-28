import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { AI_AGENTS } from "@/lib/ai-agents/topics";

export const metadata: Metadata = {
  title: AI_AGENTS.ui.siteTitle,
  description: AI_AGENTS.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={AI_AGENTS} />;
}
