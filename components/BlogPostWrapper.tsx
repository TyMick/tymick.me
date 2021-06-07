import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Container } from "react-bootstrap";
import useWindowWidthBreakpoints from "use-window-width-breakpoints";
import { get, last as lastElement, startCase } from "lodash";
import clsx from "clsx";
import DateTime from "./DateTime";
import { parseInlineMarkdown } from "../lib/text-processing";

type BlogPostWrapperProps = {
  title: string;
  subtitle?: string;
  description?: string;
  /** Date/time first published, in ISO format. */
  date: string;
  /** Date/time last updated, in ISO format. */
  lastUpdated?: string;
  canonicalUrl?: string;
  ogImage?: {
    filename: string;
    alt?: string;
  };
  cta?: string;
  socialLinks?: {
    twitter?: string;
    mastodon?: string;
    facebook?: string;
    linkedin?: string;
  };
  ipynb?: boolean;
  className?: string;
  [propName: string]: any;
};

export default function BlogPostWrapper({
  title,
  subtitle,
  description,
  date,
  lastUpdated,
  canonicalUrl,
  ogImage,
  cta,
  socialLinks,
  ipynb,
  className,
  ...otherProps
}: BlogPostWrapperProps) {
  const breakpoint = useWindowWidthBreakpoints();

  const numLinks: number = socialLinks
    ? Object.keys(socialLinks).length
    : undefined;
  function linkSort(
    [keyA, valueA]: [string, string],
    [keyB, valueB]: [string, string]
  ): number {
    const linkRanks = { twitter: 1, mastodon: 2, facebook: 3, linkedin: 4 };
    return get(linkRanks, keyA, 100) - get(linkRanks, keyB, 100);
  }

  const router = useRouter();
  const slug: string = lastElement(router.pathname.split("/"));
  const url = `https://tymick.me/blog/${slug}`;
  const webPageTitle = `${title} - Ty Mick`;

  return (
    <>
      <NextSeo
        {...{
          title: webPageTitle,
          description: description || subtitle,
          canonical: canonicalUrl || url,
          openGraph: {
            title: webPageTitle,
            description: description || subtitle,
            url: url,
            images: ogImage
              ? [
                  {
                    url: `https://tymick.me/images/${ogImage.filename}`,
                    alt: ogImage?.alt,
                  },
                ]
              : undefined,
            site_name: "Ty Mick",
          },
          twitter: {
            cardType: "summary_large_image",
            handle: "@tywmick",
            site: "@tywmick",
          },
        }}
      />

      <Container
        as="article"
        aria-labelledby="article-title"
        className="serif cap-width-lg"
      >
        <h1 id="article-title">{parseInlineMarkdown(title)}</h1>

        {subtitle && (
          <div className="h3 text-secondary">
            {parseInlineMarkdown(subtitle)}
          </div>
        )}

        <div className="font-italic text-secondary sans-serif mb-4">
          <DateTime date={date} formatString="LLLL d, yyyy" />
          {lastUpdated && (
            <>
              {breakpoint.xs ? <br /> : " "}
              (last updated{" "}
              <DateTime date={lastUpdated} formatString="LLLL d, yyyy" />)
            </>
          )}
        </div>

        <div
          className={clsx(className, "markdown-post", ipynb && "ipynb")}
          {...otherProps}
        />

        {socialLinks && (
          <>
            <hr />
            <p>
              {cta
                ? parseInlineMarkdown(cta)
                : "Want to discuss this topic further? Chime in"}{" "}
              on{" "}
              {Object.entries(socialLinks)
                .sort(linkSort)
                .map(([label, link], i) => (
                  <span key={label}>
                    <a href={link} className={`${label}-link`}>
                      {label === "linkedin" ? "LinkedIn" : startCase(label)}
                    </a>

                    {
                      // Determine appropriate list punctuation
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
                        : ", "
                    }
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
            href={`https://github.com/TyMick/tymick.me/edit/master/pages/blog/${slug}.mdx`}
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

export function withBlogPostWrapper(wrapperProps: BlogPostWrapperProps) {
  return ({ children }) => (
    <BlogPostWrapper {...wrapperProps}>{children}</BlogPostWrapper>
  );
}
