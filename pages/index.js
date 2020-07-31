import React from "react";
import Head from "next/head";
import { Container, Row, Col, Image } from "react-bootstrap";
import A from "../components/internal-link";
import profilePic from "../images/profile-pic.jpg?sizes[]=200&sizes[]=400&sizes[]=600&sizes[]=800";

export default function Home() {
  return (
    <>
      {/* prettier-ignore */}
      <Head>
      <title>Ty Mick, Data Scientist</title>

      <meta property="og:title" content="Ty Mick, Data Scientist" />
      <meta property="og:description" content="Hi! I'm Ty. I'm an award-winning analyst and data scientist who's nuts about neural networks." />
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
              srcSet={profilePic.srcSet}
              src={profilePic.src}
              alt="Ty hiking in Joshua Tree National Park"
              style={{ width: "100%", maxWidth: "200px" }}
              sizes="(min-width: 200px) 200px, 100vw"
              roundedCircle
            />
          </Col>
          <Col xs={12} sm className="text-center text-sm-left">
            <h1 className="greeting">Hi! I&rsquo;m Ty.</h1>
          </Col>
        </Row>

        <div>
          <p className="lead">
            I&rsquo;m an <A href="/hq-afmc-award">award-winning</A> analyst and
            data scientist who&rsquo;s nuts about neural networks.
          </p>

          {/* <p>
            My work has been published in the{" "}
            <a
              href="https://duckduckgo.com/?q=site%3Adtic.mil+%22Mick%2C+Tyler+W.%22"
              title="DTIC search: Mick, Tyler W."
            >
              Defense Technical Information Center
            </a>{" "}
            and{" "}
            <a href="https://hackernoon.com/making-a-browser-console-log-wait-until-page-reloads-a-how-to-guide-2j1z3yt9">
              Hacker Noon
            </a>
            .
          </p> */}

          <p>
            I work mostly in Python, spending a lot of time in TensorFlow/Keras
            (and I still think it&rsquo;s funny telling people I work with{" "}
            <a href="https://pandas.pydata.org">pandas</a> every day). And not
            only can I <em>build</em> machine learning models—I&rsquo;ll even
            write the APIs to serve them on. I also have experience with R, and
            I can make data visualizations with JavaScript, too.{" "}
            <A href="/portfolio">My portfolio</A> has more details if
            you&rsquo;d like to see some examples.
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
    </>
  );
}
