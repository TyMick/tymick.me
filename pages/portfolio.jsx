"use strict";

import React from "react";
import Head from "next/head";
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
        or not I like a given design. Maybe that&rsquo;s what makes one a
        designer? In any case, I&rsquo;ve gotten to know my way around{" "}
        <a href="https://getbootstrap.com/">Bootstrap</a> pretty well by now, so
        I can definitely make something functional and attractive.
      </p>
      <p>
        That being said, that&rsquo;s not the fun part. The <em>fun</em> part is
        the <em>logic</em>, the <em>behind-the-scenes</em>, the stuff you
        don&rsquo;t notice until something&rsquo;s going wrong. That&rsquo;s
        where the excitement&rsquo;s at, and where I prefer to spend my time.
      </p>
    </Container>
  </>
);
