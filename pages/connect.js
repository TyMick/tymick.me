import React from "react";
import useWindowWidthBreakpoints from "use-window-width-breakpoints";
import Head from "next/head";
import { Container } from "react-bootstrap";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faDev,
  faDiscord,
  faFacebook,
  faFreeCodeCamp,
  faGithub,
  faGitlab,
  faInstagram,
  faKaggle,
  faLinkedin,
  faMastodon,
  faMediumM,
  faNpm,
  faPaypal,
  faSpotify,
  faStackExchange,
  faTelegramPlane,
  faTwitter,
  faWikipediaW,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ContactMethod from "../components/contact-method";
import MiscProfile from "../components/misc-profile";
import clsx from "clsx";

export default function Connect() {
  const breakpoint = useWindowWidthBreakpoints();
  return (
    <>
      <Head>
        <title>Connect – Ty Mick</title>
      </Head>

      <Container className="cap-width-md">
        <h1 className="mb-3">Connect</h1>

        <ul className="list-unstyled">
          <ContactMethod id="email" icon={faAt} href="mailto:hire@tymick.me">
            Interested in hiring me? Send an email to{" "}
            <a href="mailto:hire@tymick.me">hire@tymick.me</a>.
          </ContactMethod>

          <ContactMethod
            brand="github"
            icon={faGithub}
            href="https://github.com/tywmick"
          >
            Want to contribute to one of my projects? Found something I need to
            fix? Head on over to{" "}
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
            Just want to chat? I&rsquo;d love to say hi on{" "}
            <a
              href="https://twitter.com/tywmick"
              title="Ty's Twitter profile"
              className="twitter-link"
            >
              Twitter
            </a>
            .
          </ContactMethod>

          <ContactMethod
            brand="linkedin"
            icon={faLinkedin}
            href="https://www.linkedin.com/in/tywmick/"
          >
            Can&rsquo;t avoid{" "}
            <a
              href="https://www.linkedin.com/in/tywmick/"
              title="Ty's LinkedIn profile"
              className="linkedin-link"
            >
              LinkedIn
            </a>
            ? Me neither.
          </ContactMethod>
        </ul>

        <div
          id="miscellaneous-profiles"
          className={clsx(
            "full-width-lg d-flex justify-content-sm-center flex-sm-wrap",
            breakpoint.xs && "full-width overflow-auto"
          )}
        >
          <MiscProfile
            brand="Facebook"
            icon={faFacebook}
            href="https://www.facebook.com/tywmick"
          />
          <MiscProfile
            brand="Kaggle"
            icon={faKaggle}
            href="https://www.kaggle.com/tywmick"
          />
          <MiscProfile
            brand="npm"
            icon={faNpm}
            href="https://www.npmjs.com/~tywmick"
          />
          <MiscProfile
            brand="freeCodeCamp"
            icon={faFreeCodeCamp}
            href="https://www.freecodecamp.org/tywmick"
          />
          <MiscProfile
            brand="CodePen"
            icon={faCodepen}
            href="https://codepen.io/tywmick"
          />
          <MiscProfile
            brand="GitLab"
            icon={faGitlab}
            href="https://gitlab.com/tywmick"
          />
          <MiscProfile
            brand="Instagram"
            icon={faInstagram}
            href="https://instagram.com/tywmick"
          />
          <MiscProfile
            brand="Mastodon"
            icon={faMastodon}
            href="https://mastodon.online/@tywmick"
          />
          <MiscProfile
            brand="Telegram"
            icon={faTelegramPlane}
            href="https://t.me/tywmick"
          />
          <MiscProfile
            brand="Discord"
            icon={faDiscord}
            username="tywmick#4573"
          />
          <MiscProfile
            brand="Spotify"
            icon={faSpotify}
            href="https://open.spotify.com/user/tywmick"
          />
          <MiscProfile
            brand="Medium"
            icon={faMediumM}
            href="https://medium.com/@tywmick"
          />
          <MiscProfile brand="DEV" icon={faDev} href="https://dev.to/tywmick" />
          <MiscProfile
            brand="Stack Exchange"
            icon={faStackExchange}
            href="https://stackexchange.com/users/3957560/ty-mick?tab=accounts"
          />
          <MiscProfile
            brand="Wikipedia"
            icon={faWikipediaW}
            href="https://en.wikipedia.org/wiki/User:TyWMick"
          />
          <MiscProfile
            brand="YouTube"
            icon={faYoutube}
            href="https://www.youtube.com/TylerWestinMick"
          />
          <MiscProfile
            brand="PayPal"
            icon={faPaypal}
            href="https://www.paypal.me/tymick"
          />
        </div>
      </Container>
    </>
  );
}
