import { ARCHITECTURE } from "@/lib/architecture/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";
import { PracticeQuestion } from "@/components/architecture/PracticeQuestion";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(ARCHITECTURE);
export const generateMetadata = metadataFor(ARCHITECTURE, load);

export default function Page(props: PageProps<"/architecture/[topic]">) {
  return <FlatTopicPage module={ARCHITECTURE} load={load} params={props.params} components={{ PracticeQuestion }} />;
}

/** Loads content/architecture/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/architecture/${slug}.mdx`);
}
