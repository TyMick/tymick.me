import React, { useEffect } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Redirect({ href }) {
  useEffect(() => {
    window.location = href;
  }, []);

  return (
    <>
      <Head>
        <noscript>
          <meta httpEquiv="refresh" content={`0;url=${href}`} />
        </noscript>
        <link rel="canonical" href={href} />
      </Head>
      <Container fluid as="p" style={{ textAlign: "left" }}>
        Redirecting to <a href={href}>{href}</a>&hellip;
      </Container>
    </>
  );
}
