"use strict";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const links = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Essays", href: "/essays" },
  { label: "Contact", href: "/contact" }
];

export default () => {
  const router = useRouter();
  return (
    <Container className="mb-3 mb-sm-5">
      <Navbar collapseOnSelect expand="sm">
        <Link href="/" passHref>
          <Navbar.Brand className="signature mr-auto">Ty Mick</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="nav-links" className="border-0" />
        <Navbar.Collapse id="nav-links" className="justify-content-end">
          <Nav activeKey={router.pathname}>
            {links.map(({ label, href }) => (
              <Link href={href} passHref key={label.toLowerCase()}>
                <Nav.Link>{label}</Nav.Link>
              </Link>
            ))}
          </Nav>
          <Nav.Link className="github-link" href="https://github.com/TyWMick">
            <FontAwesomeIcon icon={faGithub} />
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
