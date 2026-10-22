import type { Metadata } from "next";
import { InterviewPage } from "@/components/pages/InterviewPage";
import { INTERVIEW_UI } from "@/lib/interview";

export const metadata: Metadata = {
  title: INTERVIEW_UI.siteTitle,
  description: INTERVIEW_UI.description,
};

export default function Page() {
  return <InterviewPage />;
}
