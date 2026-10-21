import { SYSTEM_DESIGN } from "@/lib/system-design/cases";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(SYSTEM_DESIGN);
export const generateMetadata = metadataFor(SYSTEM_DESIGN, load);

export default function Page(props: PageProps<"/system-design/[topic]">) {
  return <FlatTopicPage module={SYSTEM_DESIGN} load={load} params={props.params} />;
}

/** Loads content/system-design/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/system-design/${slug}.mdx`);
}
