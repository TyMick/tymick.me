import React from "react";
import Head from "next/head";

export default ({ href }) => (
  <>
    <Head>
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <link rel="canonical" href={href} />
    </Head>
    <p>
      Redirecting to <a href={href}>{href}</a>&hellip;
    </p>
  </>
);
