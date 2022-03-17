import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsZero,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

type FooterProps = {
  license?: "CC-BY" | "CC0" | null;
};
export default function Footer({ license = "CC-BY" }: FooterProps) {
  return (
    <Container as="footer" fluid className="text-center mt-auto mb-3">
      {license === "CC-BY" ? (
        <>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by/4.0/"
            title="Creative Commons Attribution 4.0 International License"
            className="text-reset text-decoration-none"
            style={{ fontSize: "1rem" }}
          >
            <FontAwesomeIcon icon={faCreativeCommons} />
            &#x0200A;
            <FontAwesomeIcon icon={faCreativeCommonsBy} />
          </a>{" "}
          {new Date().getFullYear()}{" "}
          <a
            {...{ "xmlns:cc": "http://creativecommons.org/ns#" }}
            href="https://tymick.me"
            property="cc:attributionName"
            rel="cc:attributionURL"
            className="text-reset text-decoration-none"
          >
            Tyler Westin Mick
          </a>
        </>
      ) : license == "CC0" ? (
        <span
          {...{
            "xmlns:dct": "http://purl.org/dc/terms/",
            "xmlns:vcard": "http://www.w3.org/2001/vcard-rdf/3.0#",
          }}
        >
          <a
            rel="license"
            href="http://creativecommons.org/publicdomain/zero/1.0/"
            title="CC0 1.0 Universal Public Domain Dedication"
            className="text-reset text-decoration-none"
            style={{ fontSize: "1rem" }}
          >
            <FontAwesomeIcon icon={faCreativeCommonsZero} />
          </a>{" "}
          {new Date().getFullYear()}{" "}
          <a
            rel="dct:publisher"
            href="https://tymick.me"
            className="text-reset text-decoration-none"
          >
            <span property="dct:title">Tyler Westin Mick</span>
          </a>
        </span>
      ) : (
        <>© {new Date().getFullYear()} Tyler Westin Mick</>
      )}
    </Container>
  );
}
