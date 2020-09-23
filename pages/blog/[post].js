import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import useWindowWidthBreakpoints from "use-window-width-breakpoints";
import clsx from "clsx";
import DateTime from "../../components/date-time";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import {
  markdownToHtml,
  markdownToHtmlSnippet,
  smartypants,
} from "../../lib/text-processing";

export default function Post({ post }) {
  const {
    title,
    subtitle,
    description,
    slug,
    ogImage,
    date,
    lastUpdated,
    content,
    links,
    cta,
    ipynb,
  } = post;

  const breakpoint = useWindowWidthBreakpoints();

  return (
    <>
      <Head>
        <title>{title} – Ty Mick</title>
        <meta property="og:title" content={title} />
        {(subtitle || description) && (
          <meta property="og:description" content={subtitle || description} />
        )}
        <meta property="og:url" content={`https://tymick.me/blog/${slug}`} />
        {ogImage && (
          <>
            <meta
              property="og:image"
              content={
                "https://tymick.me" +
                require(`../../images/${ogImage.fileName}`)
              }
            />
            <meta name="og:image:alt" content={ogImage.alt} />
            <meta name="twitter:image:alt" content={ogImage.alt} />
            <meta name="twitter:card" content="summary_large_image" />
          </>
        )}
        <meta property="og:site_name" content="Ty Mick" />
        <meta name="twitter:site" content="@tywmick" />
        <meta name="twitter:creator" content="@tywmick" />
      </Head>

      <Container
        as="article"
        aria-labelledby="article-title"
        className="serif cap-width-lg"
      >
        <h1 id="article-title">{smartypants(title)}</h1>

        {subtitle && (
          <h2 className="h3 text-secondary">{smartypants(subtitle)}</h2>
        )}

        <div className="font-italic text-secondary sans-serif mb-4">
          <DateTime isoString={date} formatString="LLLL d, yyyy" />
          {lastUpdated && (
            <>
              {breakpoint.xs ? <br /> : " "}
              (last updated{" "}
              <DateTime isoString={lastUpdated} formatString="LLLL d, yyyy" />)
            </>
          )}
        </div>

        <div
          className={clsx("markdown-post", ipynb && "ipynb")}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {links && (
          <p>
            {cta ? (
              <span dangerouslySetInnerHTML={{ __html: cta }} />
            ) : (
              "Want to discuss this topic further? Chime in"
            )}{" "}
            on{" "}
            <a href={links.twitter} className="twitter-link">
              Twitter
            </a>
            {links.linkedin ? ", " : " or "}
            <a href={links.facebook} className="facebook-link">
              Facebook
            </a>
            {links.linkedin && (
              <>
                , or{" "}
                <a href={links.linkedin} className="linkedin-link">
                  LinkedIn
                </a>
              </>
            )}
            .
          </p>
        )}

        <hr />

        <p>
          Found an error or typo in this post you&rsquo;d like to fix? Send me a{" "}
          <a
            href={`https://github.com/tywmick/tywmick.github.io/blob/source/_posts/${slug}.md`}
          >
            pull request on GitHub
          </a>
          !
        </p>

        <hr />

        <p>
          Want to publish this article on your blog, in your magazine, or
          anywhere else? This post, like all the content on my website, is
          licensed under a{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution license
          </a>
          , so you&rsquo;re welcome to share it wherever and however you please,
          as long as you cite me as the author. I&rsquo;d also enjoy{" "}
          <Link href="/connect">
            <a>hearing from you</a>
          </Link>{" "}
          if you do publish this somewhere, but that&rsquo;s totally up to you.
        </p>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  const paths = [
    ...posts.map((post) => ({
      params: { post: post.slug },
    })),
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let post = getPostBySlug(params.post, [
    "title",
    "subtitle",
    "description",
    "slug",
    "ogImage",
    "date",
    "lastUpdated",
    "content",
    "cta",
    "links",
    "ipynb",
  ]);
  if (post.content) post.content = await markdownToHtml(post.content);
  if (post.cta) post.cta = await markdownToHtmlSnippet(post.cta);
  return { props: { post } };
}
