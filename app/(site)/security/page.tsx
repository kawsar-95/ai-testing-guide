import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { SECURITY } from "@/lib/security/topics";

export const metadata: Metadata = {
  title: SECURITY.ui.siteTitle,
  description: SECURITY.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={SECURITY} />;
}
