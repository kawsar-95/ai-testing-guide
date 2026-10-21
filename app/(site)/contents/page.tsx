import type { Metadata } from "next";
import { ContentsPage } from "@/components/pages/ContentsPage";
import { CONTENTS_UI } from "@/lib/contents";

export const metadata: Metadata = {
  title: CONTENTS_UI.siteTitle,
  description: CONTENTS_UI.description,
};

export default function Page() {
  return <ContentsPage />;
}
