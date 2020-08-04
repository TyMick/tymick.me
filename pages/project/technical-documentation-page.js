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
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import CodePen from "../../components/codepen";

const TechnicalDocumentationPage = () => {
  // Just capture the window height once
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      <Head>
        <title>Technical documentation page – Ty Mick</title>
      </Head>

      <Container fluid className="mt-n3 mb-4 mb-lg-5">
        <CodePen
          title="Technical documentation page"
          slug="EJrmvx"
          height={windowHeight * 0.6}
        />
      </Container>

      {/* Explanation */}
      <Container>
        <p className="lead font-italic">
          View this project{" "}
          <a href="https://codepen.io/tywmick/full/EJrmvx">in its own window</a>
          , or view the source on{" "}
          <a href="https://github.com/tywmick/technical-documentation-page">
            GitHub
          </a>{" "}
          or <a href="https://codepen.io/tywmick/pen/EJrmvx">CodePen</a>.
        </p>
        <h1>Technical documentation page</h1>
        <p>
          I created this page as a requirement for{" "}
          <a href="https://www.freecodecamp.org/certification/tywmick/responsive-web-design">
            my freeCodeCamp Responsive Web Design Certification
          </a>
          , using{" "}
          <a href="https://www.w3schools.com/w3css/default.asp">W3.CSS</a>. I
          modeled it some after{" "}
          <a href="https://codepen.io/freeCodeCamp/pen/RKRbwL">their example</a>
          , but I was more inspired more by{" "}
          <a href="https://www.w3schools.com">W3School</a>'s{" "}
          <a href="https://www.w3schools.com/w3css/w3css_sidebar.asp">
            sidebar tutorials
          </a>
          . It fulfills the following user stories:
        </p>
        <ol>
          <li>
            I can see a <code>main</code> element with a corresponding{" "}
            <code>id="main-doc"</code>, which contains the page's main content
            (technical documentation).
          </li>
          <li>
            Within the <code>#main-doc</code> element, I can see several{" "}
            <code>section</code> elements, each with a class of{" "}
            <code>main-section</code>. There should be a minimum of 5.
          </li>
          <li>
            The first element within each <code>.main-section</code> should be a{" "}
            <code>header</code> element which contains text that describes the
            topic of that section.
          </li>
          <li>
            Each <code>section</code> element with the class of{" "}
            <code>main-section</code> should also have an id that corresponds
            with the text of each <code>header</code> contained within it. Any
            spaces should be replaced with underscores (e.g. The{" "}
            <code>section</code> that contains the header "JavaScript and Java"
            should have a corresponding <code>id="JavaScript_and_Java"</code>).
          </li>
          <li>
            The <code>.main-section</code> elements should contain at least 10{" "}
            <code>p</code> elements total (not each).
          </li>
          <li>
            The <code>.main-section</code> elements should contain at least 5{" "}
            <code>code</code> elements total (not each).
          </li>
          <li>
            The <code>.main-section</code> elements should contain at least 5{" "}
            <code>li</code> items total (not each).
          </li>
          <li>
            I can see a <code>nav</code> element with a corresponding{" "}
            <code>id="navbar"</code>.
          </li>
          <li>
            The navbar element should contain one <code>header</code> element
            which contains text that describes the topic of the technical
            documentation.
          </li>
          <li>
            Additionally, the navbar should contain link (<code>a</code>)
            elements with the class of <code>nav-link</code>. There should be
            one for every element with the class <code>main-section</code>.
          </li>
          <li>
            The <code>header</code> element in the navbar must come before any
            link (<code>a</code>) elements in the navbar.
          </li>
          <li>
            Each element with the class of <code>nav-link</code> should contain
            text that corresponds to the <code>header</code> text within each{" "}
            <code>section</code> (e.g. if you have a "Hello world"
            section/header, your navbar should have an element which contains
            the text "Hello world").
          </li>
          <li>
            When I click on a navbar element, the page should navigate to the
            corresponding section of the <code>main-doc</code> element (e.g. If
            I click on a <code>nav-link</code> element that contains the text
            "Hello world", the page navigates to a <code>section</code> element
            that has that id and contains the corresponding <code>header</code>.
          </li>
          <li>
            On regular sized devices (laptops, desktops), the element with{" "}
            <code>id="navbar"</code> should be shown on the left side of the
            screen and should always be visible to the user.
          </li>
          <li>
            My Technical Documentation page should use at least one media query.
          </li>
        </ol>

        <p>
          Content was sourced from{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started">
            Getting started with HTML
          </a>{" "}
          by{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started%24history">
            Mozilla Contributors
          </a>
          , which is licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-sa/2.5/">
            CC BY-SA 2.5
          </a>
          .
        </p>
      </Container>
    </>
  );
};

export default TechnicalDocumentationPage;
