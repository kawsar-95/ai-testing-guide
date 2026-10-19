import type { Metadata } from "next";
import { ArchitectureHome } from "@/components/pages/ArchitectureHome";
import { ARCHITECTURE_UI } from "@/lib/architecture/ui";

export const metadata: Metadata = {
  title: ARCHITECTURE_UI.siteTitle,
  description: ARCHITECTURE_UI.description,
};

export default function Page() {
  return <ArchitectureHome />;
}
