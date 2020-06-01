import React from "react";
import Redirect from "../components/client-side-redirect";
import Post from "../components/post";
import { SHORTCUT_LINKS } from "../lib/constants";
import { getPostBySlug, getAllPosts } from "../lib/api";
import { markdownToHtml } from "../lib/text-processing";

export default function Slug({ forward, post }) {
  return forward ? <Redirect href={forward} /> : <Post post={post} />;
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  const paths = [
    ...SHORTCUT_LINKS.map((link) => ({
      params: { slug: link.shortcut },
    })),
    ...posts.map((post) => ({
      params: { slug: post.slug },
    })),
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const link = SHORTCUT_LINKS.find((link) => link.shortcut === params.slug);
  if (link) {
    return { props: { forward: link.forward } };
  } else {
    let post = getPostBySlug(params.slug, [
      "title",
      "subtitle",
      "description",
      "slug",
      "ogImage",
      "date",
      "content",
      "cta",
      "links",
    ]);
    if (post.content) post.content = await markdownToHtml(post.content);
    return { props: { post } };
  }
}
