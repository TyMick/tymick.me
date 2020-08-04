import React from "react";
import Router from "next/router";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "../styles.scss";
import "highlight.js/styles/github.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />

      <main className="mb-5">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
};

export default App;
