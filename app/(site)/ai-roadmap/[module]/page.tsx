import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AiRoadmapModulePage } from "@/components/pages/AiRoadmapModulePage";
import { ROADMAPS, getRoadmap } from "@/lib/ai-roadmap/roadmaps";

export const dynamicParams = false;
export const generateStaticParams = () => ROADMAPS.map((r) => ({ module: r.id }));

export async function generateMetadata(props: PageProps<"/ai-roadmap/[module]">): Promise<Metadata> {
  const roadmap = getRoadmap((await props.params).module);
  if (!roadmap) return {};
  return { title: `${roadmap.title} roadmap`, description: roadmap.summary };
}

export default async function Page(props: PageProps<"/ai-roadmap/[module]">) {
  const roadmap = getRoadmap((await props.params).module);
  if (!roadmap) notFound();
  return <AiRoadmapModulePage roadmap={roadmap} />;
}
