import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { Image, InternalLink as A } from "../components";

export default function Home() {
  // Logic to remove Mastodon verification link after page loads
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <>
      {/* prettier-ignore */}
      <Head>
        <title>Ty Mick, software developer</title>

        <meta property="og:title" content="Ty Mick, software developer" />
        <meta property="og:description" content="Hi! I'm Ty. I'm an award-winning analyst, data scientist, and web developer." />
        <meta property="og:image" content="https://tymick.me/preview.png" />
        <meta property="og:url" content="https://tymick.me/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Ty Mick" />
        <meta name="twitter:image:alt" content="A preview of Ty Mick's personal website" />
        <meta name="twitter:site" content="@tywmick" />
      </Head>

      <Container className="cap-lg-49">
        <Row className="align-items-center mb-3 mb-sm-5">
          <Col
            xs={12}
            sm="auto"
            className="mr-md-4 mb-2 mb-sm-0 text-center text-sm-left"
          >
            <Image
              src="/images/profile-pic.jpg"
              dimensions={{ width: 2201, height: 2201 }}
              alt="Ty hiking in Joshua Tree National Park"
              width="100%"
              maxWidth="200px"
              roundedCircle
              priority
            />
          </Col>
          <Col xs={12} sm className="text-center text-sm-left">
            <h1 className="greeting">Hi! I&rsquo;m Ty.</h1>
          </Col>
        </Row>

        <div>
          <p className="lead">
            I&rsquo;m an <A href="/hq-afmc-award">award-winning</A> analyst,
            data scientist, and web developer.
          </p>

          <p>
            My technical articles and papers have been published in{" "}
            <a href="https://towardsdatascience.com/@tywmick">
              Towards Data Science
            </a>
            , the <A href="/dtic">Defense Technical Information Center</A>,{" "}
            <a href="https://hackernoon.com/u/tywmick">Hacker Noon</a>, and{" "}
            <a href="https://medium.com/javascript-in-plain-english/how-to-make-a-browser-console-log-wait-until-after-a-page-reload-bccc538c9938">
              JavaScript in Plain English
            </a>
            .
          </p>

          <p>
            On the data side, I work mostly in Python, building models with
            TensorFlow and APIs with Flask. I also have experience with R, and I
            can make data visualizations with JavaScript, too. My web
            development work consists mostly of various combinations of Node.js
            and React, and I&rsquo;m particularly fond of Next.js.{" "}
            <A href="/portfolio">My portfolio</A> has more details on both the
            data and web fronts if you&rsquo;d like to see some examples.
          </p>

          <p>
            Apart from work, my wife{" "}
            <a href="https://corriemick.com" title="Corrie Mick Photography">
              Corrie
            </a>{" "}
            and I currently live on the road (or used to,{" "}
            <A href="/blog/covid-19-social-distancing">
              {/* href="/blog/[post]" as="/blog/covid-19-social-distancing" */}
              until this coronavirus epidemic
            </A>
            ), traveling the United States in a 24&#8209;foot RV! If you&rsquo;d
            like to see where we&rsquo;ve been in photographic form, your best
            bet is{" "}
            <a
              href="https://www.instagram.com/corriemick/"
              className="instagram-link"
            >
              Corrie&rsquo;s Instagram account
            </a>
            . I also post 360&deg; photos from our hikes{" "}
            <a
              href="https://www.facebook.com/tywmick"
              title="Ty's Facebook account"
              className="facebook-link"
            >
              on Facebook
            </a>{" "}
            every now and then.
          </p>
        </div>
      </Container>

      {/* Mastodon verification */}
      {!pageLoaded && <a rel="me" href="https://mastodon.online/@tywmick" />}
    </>
  );
}
