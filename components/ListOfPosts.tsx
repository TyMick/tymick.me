import { trimEnd } from "lodash";
import React from "react";
import { parseInlineMarkdown } from "../lib/text-processing";
import EssayPreview from "./EssayPreview";

export type Post = {
  title: string;
  subtitle?: string;
  slug: string;
  /** Date/time first published, in ISO format. */
  date: string;
  excerpt: string;
};

export type Props = {
  posts: Post[];
};

export default function ListOfPosts({ posts }: Props) {
  return (
    <>
      <ul className="list-unstyled mb-n4">
        {posts.map(({ title, subtitle, slug, date, excerpt }) => (
          <EssayPreview
            title={title}
            subtitle={subtitle}
            href={`/blog/${slug}`}
            date={date}
            key={slug}
          >
            {parseInlineMarkdown(trimEnd(excerpt, ".") + "...")}
          </EssayPreview>
        ))}
      </ul>
    </>
  );
}
