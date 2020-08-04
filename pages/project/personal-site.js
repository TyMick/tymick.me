/**
 * Copyright 2020 Tyler Westin Mick
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { d } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const npmScripts = `"scripts": {
  "dev": "next dev",
  "build": "next build && next export",
  "start": "next start",
  "predeploy": "npm run build",
  "deploy": "gh-pages -b master -d out -m Build -t"
}`;

const PersonalSite = () => (
  <>
    <Head>
      <title>About TyMick.me – Ty Mick</title>
    </Head>

    <Container className="cap-width-lg">
      <h1>
        About{" "}
        <Link href="/">
          <a>TyMick.me</a>
        </Link>
      </h1>

      <p>
        Why yes, I built this site!{" "}
        <Link href="/">
          <a>TyMick.me</a>
        </Link>{" "}
        is a static website built with <a href="https://nextjs.org/">Next.js</a>{" "}
        and hosted on <a href="https://pages.github.com/">GitHub Pages</a>. You
        can view the{" "}
        <a href="https://github.com/tywmick/tywmick.github.io">source</a> (and
        the{" "}
        <a href="https://github.com/tywmick/tywmick.github.io/tree/master">
          static build
        </a>
        , if you&rsquo;d like) on GitHub.
      </p>

      <p>
        Static sites may not be where Next.js shines, but I came across the
        framework when starting to build a server-rendered app that&rsquo;s been
        stuck in my head (the beginning stages of which you can find in my{" "}
        <a href="https://nextjs-local-authentication.tymick.me/">
          Next.js local authentication with MongoDB
        </a>{" "}
        project), and now that I&rsquo;ve been working in it so long it was the
        natural choice for building this portfolio site as quickly and
        efficiently as possible. I&rsquo;m thinking I may port it to{" "}
        <a href="https://www.gatsbyjs.org/">Gatsby</a> once I start{" "}
        <Link href="/blog">
          <a>writing</a>
        </Link>{" "}
        more, but no need to learn a new framework just yet.
      </p>

      <p>
        Design I accomplished with{" "}
        <a href="https://getbootstrap.com/">Bootstrap</a> (via{" "}
        <a href="https://react-bootstrap.netlify.com/">React Bootstrap</a>) and
        a little custom <a href="https://sass-lang.com/">Sass</a>. Just wanted
        something minimal.
      </p>

      <p>
        If you&rsquo;re curious how I got separate <code>source</code> and{" "}
        <code>master</code> branches on my{" "}
        <a href="https://github.com/tywmick/tywmick.github.io">
          <code>tywmick.github.io</code>
        </a>{" "}
        repository, it went a little something like this:
      </p>
      <ul>
        <li>
          Renamed my default branch <code>source</code>
        </li>
        <li>
          <a href="https://stackoverflow.com/a/34100189/7133888">
            Created a clean orphan branch
          </a>{" "}
          named <code>master</code>
        </li>
        <li>
          Pushed <code>master</code> to the remote
        </li>
        <li>
          Installed <a href="https://github.com/tschaub/gh-pages">gh-pages</a>
        </li>
        <li>
          Configured my npm scripts like so:
          <SyntaxHighlighter
            language="json"
            style={d}
            className="bg-transparent"
          >
            {npmScripts}
          </SyntaxHighlighter>
        </li>
      </ul>
      <p>
        I would&rsquo;ve named the build branch <code>build</code>, but alas,
        GitHub requires that user sites be built from the <code>master</code>{" "}
        branch.
      </p>
    </Container>
  </>
);

export default PersonalSite;
