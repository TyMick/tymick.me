"use strict";

import React from "react";
import Router from "next/router";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles.scss";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default ({ Component, pageProps }) => {
  return (
    <>
      {/* prettier-ignore */}
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link href="https://fonts.googleapis.com/css?family=Alegreya|Dawning+of+a+New+Day|Lustria&display=swap" rel="stylesheet" />
      </Head>

      <Nav />

      <main className="mb-5">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
};
