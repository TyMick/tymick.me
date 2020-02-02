"use strict";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Image } from "react-bootstrap";

const Home = () => (
  <>
    <Head>
      <title>Ty Mick, web developer</title>
    </Head>

    <Container className="cap-lg-49">
      <Row className="align-items-center mb-3 mb-sm-5">
        <Col
          xs={12}
          sm="auto"
          className="mr-md-4 mb-2 mb-sm-0 text-center text-sm-left"
        >
          <Image
            src="/profile-pic.jpg"
            alt="Ty hiking in Joshua Tree National Park"
            style={{ width: "100%", maxWidth: "200px" }}
            roundedCircle
          />
        </Col>
        <Col xs={12} sm className="text-center text-sm-left">
          <h1 className="greeting">Hi! I&rsquo;m Ty.</h1>
        </Col>
      </Row>

      <div>
        <p className="lead">
          I&rsquo;m a freelance web developer, and I would love to work on your
          website, app, or API.
        </p>

        <p>
          I work chiefly in JavaScript, in various combinations of React and
          Node.js, but I&rsquo;d certainly enjoy the excuse to pick up a new
          framework or language if your stack&rsquo;s a bit different.{" "}
          <Link href="/portfolio">
            <a>My portfolio</a>
          </Link>{" "}
          has more details if you&rsquo;d like to see what I&rsquo;ve built.
        </p>

        <p>
          I&rsquo;ve also written a couple{" "}
          <Link href="/essays">
            <a>essays</a>
          </Link>{" "}
          on subjects that have nothing to do with web development.
        </p>

        <p>
          Apart from work, my wife{" "}
          <a href="https://corriemick.com" title="Corrie Mick Photography">
            Corrie
          </a>{" "}
          and I currently live on the road, traveling the United States in a
          24&#8209;foot RV! If you&rsquo;d like to see where we&rsquo;ve been in
          photographic form, your best bet is{" "}
          <a
            href="https://www.instagram.com/corriemick/"
            className="instagram-link"
          >
            Corrie&rsquo;s Instagram account
          </a>
          . I also post 360&deg; photos from our hikes{" "}
          <a
            href="https://www.facebook.com/TyWMick"
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

export default Home;
