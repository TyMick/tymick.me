import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import Greeting from "../components/Greeting";
import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <>
      <Head>
        <title>About – Ty Mick</title>
      </Head>

      <Container className="cap-lg-49">
        <Greeting />

        <h1 className="h2">Who&rsquo;s Ty?</h1>

        <p>
          By day, I&rsquo;m a full-stack software developer for{" "}
          <a href="https://faithlife.com/about">Faithlife</a>, but that&rsquo;s
          not what this website is about. This site is a space for me both to
          write about anything on my mind and to have fun experimenting with web
          tools like React and Next.js.
        </p>
        <p>
          What do I write about? We&rsquo;ll find out. Once I&rsquo;ve written
          more, maybe a few patterns will start to stand out.
        </p>
        <p>
          Other favorite pastimes of mine include hiking, downhill skiing,
          playing story-driven video games, making homemade ice cream,
          and&hellip; philosophy.
        </p>
        <p>
          Here are a few other places I&rsquo;ve been known to hang out online,
          by the way:
        </p>

        <SocialLinks />
      </Container>
    </>
  );
}
