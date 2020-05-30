import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import DateTime from "./date-time";

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} – Ty Mick</title>
        <meta property="og:title" content={`${post.title} – Ty Mick`} />
        {(post.subtitle || post.description) && (
          <meta
            property="og:description"
            content={post.subtitle || post.description}
          />
        )}
        <meta property="og:url" content={`https://tymick.me/${post.slug}`} />
        <meta property="og:image" content={post.ogImage.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Ty Mick" />
        <meta name="twitter:image:alt" content={post.ogImage.alt} />
        <meta name="twitter:site" content="@tywmick" />
      </Head>

      <Container
        as="article"
        aria-labelledby="article-title"
        className="serif cap-width-lg"
      >
        <h1 id="article-title">{post.title}</h1>

        {post.subtitle && (
          <h2 className="h3 text-secondary">{post.subtitle}</h2>
        )}

        <div className="font-italic text-secondary sans-serif mb-4">
          <DateTime isoString={post.date} formatString="LLLL d, yyyy" />
        </div>

        <div
          className="markdown-post"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </>
  );
}
