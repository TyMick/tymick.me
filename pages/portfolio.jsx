import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import PortfolioSection from "../components/portfolio-section";
import InlineFootnote from "../components/inline-footnote";

export default () => (
  <>
    <Head>
      <title>Portfolio – Ty Mick</title>
    </Head>

    <Container className="cap-width-lg">
      <h1>Portfolio</h1>

      <p>
        You know what the{" "}
        <InlineFootnote
          note="I realize this is very subjective, but bear with me."
          noteId="funPart"
        >
          fun part
        </InlineFootnote>{" "}
        of web development is? The <em>logic</em>. The{" "}
        <em>behind-the-scenes</em>. The stuff you don&rsquo;t notice until
        something&rsquo;s going wrong. <em>That&rsquo;s</em> where the
        excitement&rsquo;s at, and that&rsquo;s where I prefer to spend my time.
      </p>
      <p>
        That being said, while I&rsquo;m not nearly as interested in how
        something looks than in how it works, I realize that the two concepts
        are very intertwined. Good design <em>works better</em> than bad design.
        I&rsquo;ve gotten to know my way around{" "}
        <a href="https://getbootstrap.com/">Bootstrap</a> pretty well by now, so
        I can definitely make something functional and attractive.
      </p>
      <p>
        Hope you enjoy what I&rsquo;ve built, and{" "}
        <Link href="/connect">
          <a title="Connect – Ty Mick">let me know</a>
        </Link>{" "}
        if you have any questions!
      </p>

      <PortfolioSection
        name="Open-source contributions"
        id="open-source"
        projects={[
          {
            name: "Several contributions",
            extra: " to Next.js",
            href:
              "https://github.com/vercel/next.js/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged",
          },
          {
            name: "New features",
            extra: " for nextjs-redirect",
            href: "https://github.com/pablopunk/nextjs-redirect/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged",
          },
          {
            name: "Curriculum help",
            extra: " for freeCodeCamp",
            href:
              "https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged",
          },
          {
            name: "Documentation help",
            extra: " for Bootstrap",
            href: "https://github.com/twbs/bootstrap/pull/30010",
          },
          {
            name: "Documentation help",
            extra: " for Ant Design",
            href: "https://github.com/ant-design/ant-design/pull/23917",
          },
          {
            name: "Documentation help",
            extra: " for Code Shelter",
            href:
              "https://gitlab.com/codeshelter/codeshelter-web/-/merge_requests/10",
          },
        ]}
      />

      <PortfolioSection
        name="Full-stack demos"
        id="full-stack"
        projects={[
          {
            name: "Server-rendered real estate listing page",
            href: "https://real-estate-listing-page.tymick.me",
          },
          {
            name: "Next.js local authentication boilerplate",
            href: "https://nextjs-local-authentication.tymick.me",
          },
        ]}
      />

      <PortfolioSection
        name="Multi-page static websites"
        id="static-sites"
        projects={[
          {
            name: "TyMick.me",
            href: "/project/personal-site",
            linkTitle: "About this site",
          },
        ]}
      />

      <PortfolioSection
        name="API/microservice demos"
        id="api-microservices"
        projects={[
          {
            name: "Personal library",
            href: "https://ty-library.glitch.me",
          },
          {
            name: "Stock price checker",
            href: "https://ty-stockchecker.glitch.me",
          },
          {
            name: "Issue tracker",
            href: "https://ty-issue-tracker.glitch.me",
          },
          {
            name: "Metric-imperial converter",
            href: "https://ty-metricimpconverter.glitch.me",
          },
          {
            name: "Anonymous message board",
            href: "https://ty-messageboard.glitch.me",
          },
          {
            name: "Exercise tracker",
            href: "https://ty-exercise-tracker.glitch.me",
          },
          {
            name: "URL shortener",
            href: "https://ty-urlshortener.glitch.me",
          },
          {
            name: "File metadata",
            href: "https://ty-file-metadata.glitch.me",
          },
          {
            name: "Timestamp",
            href: "https://ty-timestamp.glitch.me",
          },
          {
            name: "Request header parser",
            href: "https://ty-headerparser.glitch.me",
          },
        ]}
      />

      <PortfolioSection
        name="WordPress themes"
        id="wordpress"
        projects={[
          {
            name: "Personal site WordPress port",
            href: "https://ty-mick-wordpress-port.000webhostapp.com",
          },
        ]}
      />

      <PortfolioSection
        name="Single-page React apps"
        id="react-apps"
        projects={[
          {
            name: "Pomodoro clock",
            href: "https://ty-pomodoro-clock.glitch.me",
          },
          {
            name: "JavaScript calculator",
            href: "https://codepen.io/tywmick/full/BaBVeVO",
          },
          {
            name: "Drum machine",
            href: "https://codepen.io/tywmick/full/zYOaPyW",
          },
          {
            name: "Markdown previewer",
            href: "https://codepen.io/tywmick/full/PoYeapB",
          },
        ]}
      />

      <PortfolioSection
        name="React hooks"
        id="react-hooks"
        projects={[
          {
            name: "useMediaBreakpoints",
            href: "https://github.com/tywmick/use-media-breakpoints",
          },
        ]}
      />

      <PortfolioSection
        name="Single-page PHP apps"
        id="php"
        projects={[
          {
            name: "To-do list",
            href: "http://php-todo.tymick.me",
          },
        ]}
      />

      <PortfolioSection
        name="JavaScript algorithms"
        id="javascript-algorithms"
        projects={[
          {
            name: "Roman numeral converter",
            href: "/project/roman-numeral-converter",
          },
          {
            name: "Cash register",
            href: "/project/cash-register",
          },
          {
            name: "Palindrome checker",
            href: "/project/palindrome-checker",
          },
          {
            name: "Telephone number validator",
            href: "/project/telephone-number-validator",
          },
          {
            name: "Caesar's cipher",
            href: "/project/caesars-cipher",
          },
        ]}
      />

      <PortfolioSection
        name="Single-page responsive web designs"
        id="single-page-designs"
        projects={[
          {
            name: "Technical documentation page",
            href: "/project/technical-documentation-page",
          },
          {
            name: "Product landing page",
            href: "/project/product-landing-page",
          },
        ]}
      />
    </Container>
  </>
);
