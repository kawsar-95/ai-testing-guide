import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { DEVOPS } from "@/lib/devops/topics";

export const metadata: Metadata = {
  title: DEVOPS.ui.siteTitle,
  description: DEVOPS.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={DEVOPS} />;
}
