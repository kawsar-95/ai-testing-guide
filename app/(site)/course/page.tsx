import type { Metadata } from "next";
import { FlatModuleHome } from "@/components/modules/FlatModuleHome";
import { COURSE } from "@/lib/course/topics";

export const metadata: Metadata = {
  title: COURSE.ui.siteTitle,
  description: COURSE.ui.description,
};

export default function Page() {
  return <FlatModuleHome module={COURSE} />;
}
