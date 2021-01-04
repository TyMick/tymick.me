import React from "react";
import Router from "next/router";
import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import NProgress from "nprogress";
import { Nav, Footer, mdxComponents } from "../components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/index.scss";

config.autoAddCss = false;

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />

      <main className="mb-5">
        <MDXProvider components={mdxComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>

      <Footer />
    </>
  );
}
