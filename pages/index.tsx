import React from "react";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Container } from "react-bootstrap";
import { getAllPosts } from "../lib/blog-api";
import Greeting from "../components/Greeting";
import MastodonVerification from "../components/MastodonVerification";
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
        <Greeting h1 />
        <ListOfPosts posts={posts} />
      </Container>

      <MastodonVerification instance="mastodon.social" username="TyMick" />
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
