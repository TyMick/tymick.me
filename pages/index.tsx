import React from "react";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Container } from "react-bootstrap";
import { getAllPosts } from "../lib/blog-api";
import { Greeting, MastodonVerification } from "../components";
import ListOfPosts, {
  Post,
  Props as PostsProps,
} from "../components/ListOfPosts";

export default function Home({ posts }: PostsProps) {
  return (
    <>
      <NextSeo
        title="Ty Mick"
        canonical="https://tymick.me/"
        twitter={{
          handle: "@tywmick",
          site: "@tywmick",
        }}
      />

      <Container className="cap-lg-49">
        <Greeting />
        <ListOfPosts posts={posts} />
      </Container>

      <MastodonVerification instance="mastodon.online" username="tywmick" />
    </>
  );
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const posts = (await getAllPosts([
    "title",
    "subtitle",
    "slug",
    "date",
    "excerpt",
  ])) as Post[];

  return {
    props: { posts },
  };
};
