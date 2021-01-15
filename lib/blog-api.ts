/**
 * @file Originally adapted from Next.js's blog starter example: {@link https://github.com/vercel/next.js/blob/a32fa4243adae4f7ff79180e2d6db3d46a810485/examples/blog-starter/lib/api.js}
 */
import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "pages/blog");

export function getPostSlugs(): string[] {
  const directoryFiles: string[] = fs.readdirSync(postsDirectory);
  const slugs = directoryFiles
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => filename.replace(/\.mdx$/, ""));
  return slugs;
}

export async function getPostBySlug(
  slug: string,
  fields: MetadataField[] = []
) {
  try {
    const { metadata }: { metadata: BlogPostMetadata } = await import(
      `../pages/blog/${slug}.mdx`
    );
    let data: object = {};

    // Only return requested fields
    for (const field of fields) {
      if (metadata?.[field]) {
        data[field] = metadata[field];
      } else if (field === "slug") {
        data["slug"] = slug;
      }
    }

    return data as Partial<BlogPostMetadata>;
  } catch (err) {
    err.message = `Slug '${slug}' does not exist.`;
    throw err;
  }
}

export async function getAllPosts(fields: MetadataField[] = []) {
  const slugs = getPostSlugs();
  try {
    let posts = await Promise.all(
      slugs.map(async (slug) => await getPostBySlug(slug, fields))
    );

    if (fields.includes("date")) {
      // sort posts by date in descending order
      posts = posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    }

    return posts;
  } catch (err) {
    err.message = "Blog API functions aren't working correctly.";
    throw err;
  }
}

export type BlogPostMetadata = {
  slug?: string;
  title: string;
  subtitle?: string;
  description?: string;
  excerpt: string;
  /** Date/time first published, in ISO format. */
  date: string;
  /** Date/time last updated, in ISO format. */
  lastUpdated?: string;
  ogImage?: {
    filename: string;
    alt: string;
  };
  cta?: string;
  socialLinks?: {
    twitter?: string;
    mastodon?: string;
    facebook?: string;
    linkedin?: string;
  };
  syndicated?: {
    medium?: string | null;
    dev?: string | null;
    hackerNoon?: string | null;
  };
  ipynb?: boolean;
};

type MetadataField =
  | "slug"
  | "title"
  | "subtitle"
  | "description"
  | "excerpt"
  | "date"
  | "lastUpdated"
  | "ogImage"
  | "cta"
  | "socialLinks"
  | "syndicated"
  | "ipynb";
