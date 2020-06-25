import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Redirect({ url, as }) {
  const router = useRouter();

  useEffect(() => {
    if (as) {
      router.push(url, as);
    } else if (url[0] === "/") {
      router.push(url);
    } else {
      window.location = url;
    }
  }, []);

  return (
    <>
      <Head>
        <noscript>
          <meta httpEquiv="refresh" content={`0;url=${url}`} />
        </noscript>
        <link rel="canonical" href={url} />
      </Head>
      <Container fluid as="p" style={{ textAlign: "left" }}>
        Redirecting to <a href={url}>{url}</a>&hellip;
      </Container>
    </>
  );
}
