import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { AI_CONCEPTS } from "@/lib/ai-concepts/topics";

export const metadata: Metadata = {
  title: AI_CONCEPTS.ui.siteTitle,
  description: AI_CONCEPTS.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={AI_CONCEPTS} />;
}
