import { AI_SKILLS } from "@/lib/ai-skills/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(AI_SKILLS);
export const generateMetadata = metadataFor(AI_SKILLS, load);

export default function Page(props: PageProps<"/ai-skills/[topic]">) {
  return <FlatTopicPage module={AI_SKILLS} load={load} params={props.params} />;
}

/** Loads content/ai-skills/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/ai-skills/${slug}.mdx`);
}
