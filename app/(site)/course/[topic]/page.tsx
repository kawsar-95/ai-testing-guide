import { COURSE } from "@/lib/course/topics";
import { FlatTopicPage, metadataFor, staticParams, type MdxPage } from "@/components/modules/FlatTopicPage";

export const dynamicParams = false;
export const generateStaticParams = () => staticParams(COURSE);
export const generateMetadata = metadataFor(COURSE, load);

export default function Page(props: PageProps<"/course/[topic]">) {
  return <FlatTopicPage module={COURSE} load={load} params={props.params} />;
}

/** Loads content/course/<slug>.mdx. The folder is a literal, so that the bundler finds the files. */
function load(slug: string): Promise<MdxPage> {
  return import(`@/content/course/${slug}.mdx`);
}
