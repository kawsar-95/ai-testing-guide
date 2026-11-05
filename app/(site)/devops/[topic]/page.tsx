import { DEVOPS } from "@/lib/devops/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(DEVOPS);
export const generateMetadata = metadataFor(DEVOPS, load);

export default function Page(props: PageProps<"/devops/[topic]">) {
  return <FlatTopicPage module={DEVOPS} load={load} params={props.params} />;
}

/** Loads content/devops/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/devops/${slug}.mdx`);
}
