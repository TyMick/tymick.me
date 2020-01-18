"use strict";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, Nav } from "react-bootstrap";

const links = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
  { label: "Social", href: "/social" }
];

export default () => {
  const router = useRouter();
  return (
    <Container>
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
            <i className="fab fa-github" />
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
