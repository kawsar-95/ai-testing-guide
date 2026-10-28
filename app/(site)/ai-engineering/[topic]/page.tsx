import { AI_ENGINEERING } from "@/lib/ai-engineering/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(AI_ENGINEERING);
export const generateMetadata = metadataFor(AI_ENGINEERING, load);

export default function Page(props: PageProps<"/ai-engineering/[topic]">) {
  return <FlatTopicPage module={AI_ENGINEERING} load={load} params={props.params} />;
}

/** Loads content/ai-engineering/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/ai-engineering/${slug}.mdx`);
}
