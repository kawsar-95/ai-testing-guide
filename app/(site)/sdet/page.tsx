import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { SDET } from "@/lib/sdet/topics";

export const metadata: Metadata = {
  title: SDET.ui.siteTitle,
  description: SDET.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={SDET} />;
}
