import { HARNESS } from "@/lib/harness/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(HARNESS);
export const generateMetadata = metadataFor(HARNESS, load);

export default function Page(props: PageProps<"/harness/[topic]">) {
  return <FlatTopicPage module={HARNESS} load={load} params={props.params} />;
}

/** Loads content/harness/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/harness/${slug}.mdx`);
}
