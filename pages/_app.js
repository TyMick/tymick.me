import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/index.scss";

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
