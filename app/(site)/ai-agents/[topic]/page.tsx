import { AI_AGENTS } from "@/lib/ai-agents/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(AI_AGENTS);
export const generateMetadata = metadataFor(AI_AGENTS, load);

export default function Page(props: PageProps<"/ai-agents/[topic]">) {
  return <FlatTopicPage module={AI_AGENTS} load={load} params={props.params} />;
}

/** Loads content/ai-agents/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/ai-agents/${slug}.mdx`);
}
