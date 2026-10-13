import type { Metadata } from "next";
import { PrepHome } from "@/components/pages/PrepHome";
import { PREP_UI } from "@/lib/prep/ui";

export const metadata: Metadata = {
  title: PREP_UI.siteTitle,
  description: PREP_UI.description,
};

export default function Page() {
  return <PrepHome />;
}
