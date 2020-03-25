"use strict";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const links = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Résumé", href: "/resume.pdf" },
  { label: "Blog", href: "/blog" },
  { label: "Connect", href: "/connect" }
];

export default () => {
  const router = useRouter();

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const collapse = () => {
    setExpanded(false);
  };

  return (
    <Container as="header" className="px-0 mb-4 mb-sm-5">
      <Navbar
        expand="sm"
        expanded={expanded}
        onSelect={collapse}
        onToggle={toggleExpanded}
      >
        <Link href="/" passHref>
          <Navbar.Brand onClick={collapse} className="signature">
            {router.pathname !== "/" && (
              <Image
                src="/profile-pic.jpg"
                alt="Ty hiking in Joshua Tree National Park"
                roundedCircle
              />
            )}
            Ty Mick
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="nav-links" className="border-0 pr-0" />
        <Navbar.Collapse id="nav-links" className="justify-content-end">
          <Nav
            activeKey={router.pathname}
            className="align-items-top align-items-sm-center"
          >
            {links.map(({ label, href }) =>
              href.includes(".") ? (
                <Nav.Link href={href} key={label.toLowerCase()}>
                  {label}
                </Nav.Link>
              ) : (
                <Link href={href} passHref key={label.toLowerCase()}>
                  <Nav.Link>{label}</Nav.Link>
                </Link>
              )
            )}
            <Nav.Link
              className="github-nav-link pr-0"
              href="https://github.com/tywmick"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
