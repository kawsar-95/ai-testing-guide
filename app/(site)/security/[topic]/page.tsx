import { SECURITY } from "@/lib/security/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(SECURITY);
export const generateMetadata = metadataFor(SECURITY, load);

export default function Page(props: PageProps<"/security/[topic]">) {
  return <FlatTopicPage module={SECURITY} load={load} params={props.params} />;
}

/** Loads content/security/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/security/${slug}.mdx`);
}
