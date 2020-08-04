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
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container } from "react-bootstrap";
import A from "../components/internal-link";
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
