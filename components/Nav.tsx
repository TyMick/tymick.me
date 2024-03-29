import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMastodon } from "@fortawesome/free-brands-svg-icons";
import Image from "./Image";
import profilePic from "../public/images/ty-mick-cropped.jpg";

export default function Navigation() {
  const router = useRouter();

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const collapse = () => setExpanded(false);

  function getSubdirectory(path: string): string {
    return "/" + path.split("/")[1];
  }

  const pathnamesWithoutProfilePic = ["/", "/projects", "/about"];

  return (
    <Container as="header" className="px-0 mb-4 mb-sm-5">
      <Navbar
        expand={true}
        expanded={expanded}
        onSelect={collapse}
        onToggle={toggleExpanded}
      >
        <Link href="/" passHref>
          <Navbar.Brand onClick={collapse} className="signature">
            {!pathnamesWithoutProfilePic.includes(router.pathname) && (
              <Image
                src={profilePic}
                alt="Ty hiking in Joshua Tree National Park"
                size="1.5em"
                className="align-top mr-3"
                roundedCircle
                priority
              />
            )}
            Ty Mick
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="nav-links" className="border-0 px-0" />
        <Navbar.Collapse id="nav-links" className="justify-content-end">
          <Nav
            activeKey={getSubdirectory(router.pathname)}
            className="align-items-center"
          >
            <Link href="/projects" passHref>
              <Nav.Link>Projects</Nav.Link>
            </Link>

            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>

            <Nav.Link
              className="github-nav-link"
              href="https://github.com/TyMick"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>

            <Nav.Link
              className="mastodon-nav-link pr-0"
              href="https://mastodon.social/@TyMick"
            >
              <FontAwesomeIcon icon={faMastodon} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
