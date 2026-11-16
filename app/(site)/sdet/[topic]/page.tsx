import { SDET } from "@/lib/sdet/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(SDET);
export const generateMetadata = metadataFor(SDET, load);

export default function Page(props: PageProps<"/sdet/[topic]">) {
  return <FlatTopicPage module={SDET} load={load} params={props.params} />;
}

/** Loads content/sdet/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/sdet/${slug}.mdx`);
}
