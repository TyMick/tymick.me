import React from "react";
import Router from "next/router";
import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import NProgress from "nprogress";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import mdxComponents from "../components/mdxComponents";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme";
import "../styles/index.scss";

config.autoAddCss = false;

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />

      <main className="mb-5">
        <MDXProvider components={mdxComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
