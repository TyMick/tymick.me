"use strict";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default () => (
  <>
    <Head>
      <title>Portfolio – Ty Mick</title>
    </Head>

    <Container>
      <h1>Portfolio</h1>

      <p>
        I don&rsquo;t consider myself a designer, but I definitely know whether
        or not I like a given design. Come to think of it, maybe that&rsquo;s
        what makes one a designer? In any case, I&rsquo;ve gotten to know my way
        around <a href="https://getbootstrap.com/">Bootstrap</a> pretty well by
        now, so I can definitely make something functional and attractive.
      </p>
      <p>
        That being said, that&rsquo;s not the fun part. The <em>fun</em> part is
        the <em>logic</em>, the <em>behind-the-scenes</em>, the stuff you
        don&rsquo;t notice until something&rsquo;s going wrong.{" "}
        <em>That&rsquo;s</em> where the excitement&rsquo;s at, and that&rsquo;s
        where I prefer to spend my time.
      </p>
      <p>
        But it&rsquo;s useful to be able to see the whole picture, so I&rsquo;ve
        created projects that span the spectrum from front to back. Hope you
        enjoy what I&rsquo;ve built, and{" "}
        <Link href="/connect">
          <a title="Connect – Ty Mick">let me know</a>
        </Link>{" "}
        if you have any questions!
      </p>

      <h2>Full-stack demos</h2>
      <ul className="lead">
        <li>
          <a href="https://nextjs-local-authentication.tymick.me">
            Next.js local authentication with MongoDB
          </a>
        </li>
      </ul>

      <h2>Multi-page static websites</h2>
      <ul className="lead">
        <li>
          <Link href="/projects/personal-site">
            <a title="About this site">TyMick.me</a>
          </Link>
        </li>
      </ul>
      
      <h2>API/microservice demos</h2>
      <ul className="lead">
        <li></li>
      </ul>
    </Container>
  </>
);
