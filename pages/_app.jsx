"use strict";

import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { Container } from "react-bootstrap";
import "../styles.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link href="https://fonts.googleapis.com/css?family=Dawning+of+a+New+Day&display=swap" rel="stylesheet" />
      </Head>

      <Nav />

      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
};
