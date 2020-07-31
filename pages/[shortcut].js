import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
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
          <Link href={url} as={as}>
            <a>{`https://tymick.me${as}`}</a>
          </Link>
        ) : url[0] === "/" ? (
          <Link href={url}>
            <a>{`https://tymick.me${url}`}</a>
          </Link>
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
