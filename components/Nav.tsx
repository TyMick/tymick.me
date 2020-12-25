import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "./Image";

export default function Navigation() {
  const router = useRouter();

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const collapse = () => setExpanded(false);

  function getSubdirectory(path: string): string {
    return "/" + path.split("/")[1];
  }

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
                src="/images/profile-pic.jpg"
                dimensions={{ width: 2201, height: 2201 }}
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
            className="align-items-end align-items-sm-center"
          >
            <Link href="/portfolio" passHref>
              <Nav.Link>Portfolio</Nav.Link>
            </Link>

            <Dropdown>
              <Dropdown.Toggle as={Nav.Link}>Résumé</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/data-scientist-resume.pdf">
                  Data Scientist
                </Dropdown.Item>
                <Dropdown.Item href="/data-engineer-resume.pdf">
                  Data Engineer
                </Dropdown.Item>
                <Dropdown.Item href="/web-developer-resume.pdf">
                  Web Developer
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Link href="/blog" passHref>
              <Nav.Link>Blog</Nav.Link>
            </Link>

            <Link href="/connect" passHref>
              <Nav.Link>Connect</Nav.Link>
            </Link>

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
}
