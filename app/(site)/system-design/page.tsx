import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { SYSTEM_DESIGN } from "@/lib/system-design/cases";

export const metadata: Metadata = {
  title: SYSTEM_DESIGN.ui.siteTitle,
  description: SYSTEM_DESIGN.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={SYSTEM_DESIGN} />;
}
