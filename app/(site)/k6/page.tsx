import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { K6 } from "@/lib/k6/topics";

export const metadata: Metadata = {
  title: K6.ui.siteTitle,
  description: K6.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={K6} />;
}
