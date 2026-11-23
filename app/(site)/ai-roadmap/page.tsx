import type { Metadata } from "next";
import { AiRoadmapPage } from "@/components/pages/AiRoadmapPage";
import { AI_ROADMAP_UI } from "@/lib/ai-roadmap/ui";

export const metadata: Metadata = {
  title: AI_ROADMAP_UI.siteTitle,
  description: AI_ROADMAP_UI.description,
};

export default function Page() {
  return <AiRoadmapPage />;
}
