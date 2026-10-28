import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { AGENT_MEMORY } from "@/lib/agent-memory/topics";

export const metadata: Metadata = {
  title: AGENT_MEMORY.ui.siteTitle,
  description: AGENT_MEMORY.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={AGENT_MEMORY} />;
}
