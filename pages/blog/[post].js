import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import useWindowWidthBreakpoints from "use-window-width-breakpoints";
import { get, startCase } from "lodash";
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

  const numLinks = links ? Object.keys(links).length : undefined;
  function linkSort([keyA, valueA], [keyB, valueB]) {
    const linkRanks = { twitter: 1, mastodon: 2, facebook: 3, linkedin: 4 };
    return get(linkRanks, keyA, 100) - get(linkRanks, keyB, 100);
  }

  return (
    <>
      <Head>
        <title>{title} – Ty Mick</title>
        <meta property="og:title" content={title} />
        {(subtitle || description) && (
          <meta property="og:description" content={description || subtitle} />
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
          <>
            <hr />
            <p>
              {cta ? (
                <span dangerouslySetInnerHTML={{ __html: cta }} />
              ) : (
                "Want to discuss this topic further? Chime in"
              )}{" "}
              on{" "}
              {Object.entries(links)
                .sort(linkSort)
                .map(([label, link], i) => (
                  <span key={i}>
                    <a href={link} className={`${label}-link`}>
                      {label === "linkedin" ? "LinkedIn" : startCase(label)}
                    </a>

                    {// Determine appropriate list punctation
                    numLinks === 1
                      ? ""
                      : numLinks === 2
                      ? i + 1 === numLinks
                        ? ""
                        : " or "
                      : i + 1 === numLinks
                      ? ""
                      : i + 2 === numLinks
                      ? ", or "
                      : ", "}
                  </span>
                ))}
              .
            </p>
          </>
        )}

        <hr className="border-secondary" />

        <p className="text-secondary font-italic">
          Found an error or typo in this post you&rsquo;d like to fix? Send me a{" "}
          <a
            href={`https://github.com/tywmick/tywmick.github.io/blob/source/_posts/${slug}.md`}
          >
            pull request on GitHub
          </a>
          !
        </p>

        <p className="text-secondary font-italic">
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
