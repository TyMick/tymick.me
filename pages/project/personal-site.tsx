import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import A from "../../components/Link";

export default function PersonalSite() {
  return (
    <>
      <Head>
        <title>About TyMick.me – Ty Mick</title>
      </Head>

      <Container className="cap-width-lg">
        <h1>
          About <A href="/">TyMick.me</A>
        </h1>

        <p>
          Why yes, I built this site! I built <A href="/">TyMick.me</A> with{" "}
          <a href="https://nextjs.org/">Next.js</a> and host it on{" "}
          <a href="https://vercel.com/">Vercel</a>. You can view the{" "}
          <a href="https://github.com/tywmick/tymick.me">source</a> on GitHub.
        </p>

        <p>
          Design I accomplished with{" "}
          <a href="https://getbootstrap.com/">Bootstrap</a> (via{" "}
          <a href="https://react-bootstrap.netlify.com/">React Bootstrap</a>)
          and a little custom <a href="https://sass-lang.com/">Sass</a>. Just
          wanted something minimal.
        </p>
      </Container>
    </>
  );
}
