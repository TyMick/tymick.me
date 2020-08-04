/**
 * Copyright 2020 Tyler Westin Mick
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../images/profile-pic.jpg?sizes[]=48&sizes[]=96&sizes[]=144&sizes[]=192";

const links = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Résumé", href: "/resume.pdf" },
  { label: "Blog", href: "/blog" },
  { label: "Connect", href: "/connect" },
];

export default function Navigation() {
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
                srcSet={profilePic.srcSet}
                src={profilePic.src}
                sizes="(min-width: 1420px) 48px, calc(1.09vw + 33px)" // instead of 1.5em, as per https://ausi.github.io/respimagelint/
                alt="Ty hiking in Joshua Tree National Park"
                roundedCircle
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

function getSubdirectory(path) {
  return "/" + path.split("/")[1]
}
