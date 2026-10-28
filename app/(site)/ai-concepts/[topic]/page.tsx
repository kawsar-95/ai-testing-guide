import { AI_CONCEPTS } from "@/lib/ai-concepts/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(AI_CONCEPTS);
export const generateMetadata = metadataFor(AI_CONCEPTS, load);

export default function Page(props: PageProps<"/ai-concepts/[topic]">) {
  return <FlatTopicPage module={AI_CONCEPTS} load={load} params={props.params} />;
}

/** Loads content/ai-concepts/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/ai-concepts/${slug}.mdx`);
}
