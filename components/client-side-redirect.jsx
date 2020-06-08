import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

const Redirect = ({ href }) => (
  <>
    <Head>
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <link rel="canonical" href={href} />
    </Head>
    <Container fluid as="p" style={{ textAlign: "left" }}>
      Redirecting to <a href={href}>{href}</a>&hellip;
    </Container>
  </>
);

export default Redirect;
