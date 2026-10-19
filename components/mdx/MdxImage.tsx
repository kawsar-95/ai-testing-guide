import type { ImgHTMLAttributes } from "react";
import { withBasePath } from "@/lib/base-path";
import { BASE_PATH } from "@/lib/site";
import { openImageFullSize } from "@/lib/ui";

type MdxImageProps = Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "width" | "height">;

/**
 * An image of a content page. A plain `<img>` does not get the basePath of GitHub Pages,
 * so `src` goes through `withBasePath`. A text link below the image opens the file in full size.
 * The wrappers are `span` elements, so Markdown images (which MDX puts in a `<p>`) stay valid HTML.
 */
export function MdxImage({ src, alt = "", width, height }: MdxImageProps) {
  if (typeof src !== "string") return null;
  const url = withBasePath(src, BASE_PATH);
  return (
    <span className="my-6 block">
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, images.unoptimized */}
      <img
        src={url}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="h-auto max-w-full rounded-md border border-border"
      />
      <span className="mt-2 block text-sm">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {openImageFullSize}
        </a>
      </span>
    </span>
  );
}
