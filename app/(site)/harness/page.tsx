import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { HARNESS } from "@/lib/harness/topics";

export const metadata: Metadata = {
  title: HARNESS.ui.siteTitle,
  description: HARNESS.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={HARNESS} />;
}
