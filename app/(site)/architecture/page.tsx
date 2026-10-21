import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { ARCHITECTURE } from "@/lib/architecture/topics";

export const metadata: Metadata = {
  title: ARCHITECTURE.ui.siteTitle,
  description: ARCHITECTURE.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={ARCHITECTURE} />;
}
