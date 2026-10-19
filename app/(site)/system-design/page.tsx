import type { Metadata } from "next";
import { SystemDesignHome } from "@/components/pages/SystemDesignHome";
import { SYSTEM_DESIGN_UI } from "@/lib/system-design/ui";

export const metadata: Metadata = {
  title: SYSTEM_DESIGN_UI.siteTitle,
  description: SYSTEM_DESIGN_UI.description,
};

export default function Page() {
  return <SystemDesignHome />;
}
