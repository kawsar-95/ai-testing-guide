import { AGENT_MEMORY } from "@/lib/agent-memory/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(AGENT_MEMORY);
export const generateMetadata = metadataFor(AGENT_MEMORY, load);

export default function Page(props: PageProps<"/agent-memory/[topic]">) {
  return <FlatTopicPage module={AGENT_MEMORY} load={load} params={props.params} />;
}

/** Loads content/agent-memory/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/agent-memory/${slug}.mdx`);
}
