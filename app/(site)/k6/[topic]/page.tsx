import { K6 } from "@/lib/k6/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(K6);
export const generateMetadata = metadataFor(K6, load);

export default function Page(props: PageProps<"/k6/[topic]">) {
  return <FlatTopicPage module={K6} load={load} params={props.params} />;
}

/** Loads content/k6/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/k6/${slug}.mdx`);
}
