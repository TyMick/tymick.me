"use strict";

import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import ContactMethod from "../components/contact-method";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default () => (
  <>
    <Head>
      <title>Connect – Ty Mick</title>
    </Head>

    <Container className="cap-width-md">
      <h1 className="mb-3">Connect</h1>

      <ContactMethod icon={faAt} href="mailto:hire@tymick.me">
        Interested in hiring me? Send an email to{" "}
        <a href="mailto:hire@tymick.me">hire@tymick.me</a>.
      </ContactMethod>

      <ContactMethod
        brand="github"
        icon={faGithub}
        href="https://github.com/tywmick"
      >
        Want to contribute to one of my projects? Found something I need to fix?
        Head on over to{" "}
        <a
          href="https://github.com/tywmick"
          title="Ty's GitHub profile"
          className="github-text-link"
        >
          GitHub
        </a>
        .
      </ContactMethod>

      <ContactMethod
        brand="twitter"
        icon={faTwitter}
        href="https://twitter.com/tywmick"
      >
        Want to ask my opinion on something? I&rsquo;d prefer the more public
        nature of{" "}
        <a
          href="https://twitter.com/tywmick"
          title="Ty's Twitter profile"
          className="twitter-link"
        >
          Twitter
        </a>{" "}
        for that purpose, so I don&rsquo;t have to repeat myself as often. I
        also use Twitter to briefly announce when I&rsquo;ve written or released
        something new.
      </ContactMethod>

      <ContactMethod
        brand="facebook"
        icon={faFacebook}
        href="https://www.facebook.com/tylerwestinmick"
      >
        Curious to see some of the destinations in my RV travels? I post
        360&deg; photos from hikes on{" "}
        <a
          href="https://www.facebook.com/tylerwestinmick"
          title="Ty's Facebook profile"
          className="facebook-link"
        >
          Facebook
        </a>{" "}
        every now and then.
      </ContactMethod>

      <ContactMethod
        brand="instagram"
        icon={faInstagram}
        href="https://www.instagram.com/tywmick/"
      >
        Looking for more photos of me? I don&rsquo;t post to{" "}
        <a
          href="https://www.instagram.com/tywmick/"
          title="Ty's Instagram profile"
          className="instagram-link"
        >
          Instagram
        </a>{" "}
        myself anymore, but people still tag me there.
      </ContactMethod>
    </Container>
  </>
);
