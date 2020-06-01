import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import DateTime from "./date-time";
import { smartypants } from "../lib/text-processing";

export default function Post({ post }) {
  const {
    title,
    subtitle,
    description,
    slug,
    ogImage,
    date,
    content,
    links,
    cta,
  } = post;
  return (
    <>
      <Head>
        <title>{title} – Ty Mick</title>
        <meta property="og:title" content={title} />
        {(subtitle || description) && (
          <meta property="og:description" content={subtitle || description} />
        )}
        <meta property="og:url" content={`https://tymick.me/${slug}`} />
        {ogImage && (
          <>
            <meta
              property="og:image"
              content={"https://tymick.me" + require(`../images/${ogImage.fileName}`)}
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
        </div>

        <div
          className="markdown-post"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <hr />

        {links && (
          <p>
            {smartypants(cta) || "Want to discuss this topic further? Chime in"}{" "}
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

        <p>
          Found an error or typo in this post you&rsquo;d like to fix? Send me a{" "}
          <a
            href={`https://github.com/tywmick/tywmick.github.io/blob/source/_posts/${slug}.md`}
          >
            pull request on GitHub
          </a>
          !
        </p>
      </Container>
    </>
  );
}
