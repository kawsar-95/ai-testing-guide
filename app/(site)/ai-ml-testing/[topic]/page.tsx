import { AI_ML_TESTING } from "@/lib/ai-ml-testing/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(AI_ML_TESTING);
export const generateMetadata = metadataFor(AI_ML_TESTING, load);

export default function Page(props: PageProps<"/ai-ml-testing/[topic]">) {
  return <FlatTopicPage module={AI_ML_TESTING} load={load} params={props.params} />;
}

/** Loads content/ai-ml-testing/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/ai-ml-testing/${slug}.mdx`);
}
