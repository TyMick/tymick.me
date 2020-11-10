import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container } from "react-bootstrap";
import A from "../components/InternalLink";
import { SHORTCUT_LINKS } from "../lib/shortcut-links";

export default function Shortcut({ url, as }) {
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
          <meta httpEquiv="refresh" content={`0;url=${as || url}`} />
        </noscript>
        <link rel="canonical" href={as || url} />
      </Head>
      <Container fluid as="p" style={{ textAlign: "left" }}>
        Redirecting to{" "}
        {as ? (
          <A href={url} as={as}>{`https://tymick.me${as}`}</A>
        ) : url[0] === "/" ? (
          <A href={url}>{`https://tymick.me${url}`}</A>
        ) : (
          <a href={url}>{url}</a>
        )}
        &hellip;
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [
    ...SHORTCUT_LINKS.map((link) => ({
      params: { shortcut: link.shortcut },
    })),
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const link = SHORTCUT_LINKS.find((link) => link.shortcut === params.shortcut);
  return {
    props: { url: link.forward, ...(link.as && { as: link.as }) },
  };
}
