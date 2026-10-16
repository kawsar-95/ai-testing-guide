import type { Metadata } from "next";
import { LinuxHome } from "@/components/pages/LinuxHome";
import { LINUX_UI } from "@/lib/linux/ui";

export const metadata: Metadata = {
  title: LINUX_UI.siteTitle,
  description: LINUX_UI.description,
};

export default function Page() {
  return <LinuxHome />;
}
