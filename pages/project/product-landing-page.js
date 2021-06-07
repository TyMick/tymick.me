import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import Codepen from "../../components/Codepen";

const ProductLandingPage = () => {
  // Just capture the window height once
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      <Head>
        <title>Product landing page – Ty Mick</title>
      </Head>

      <Container fluid className="mt-n3 mb-4 mb-lg-5">
        <Codepen
          title="Product landing page"
          slug="bJQBRz"
          height={windowHeight * 0.6}
        />
      </Container>

      {/* Explanation */}
      <Container>
        <p className="lead font-italic">
          View this project{" "}
          <a href="https://codepen.io/TyMick/full/bJQBRz">in its own window</a>
          , or view the source on{" "}
          <a href="https://github.com/TyMick/product-landing-page">GitHub</a>{" "}
          or <a href="https://codepen.io/TyMick/pen/bJQBRz">CodePen</a>.
        </p>
        <h1>Product landing page</h1>
        <p>
          I created this page as a requirement for{" "}
          <a href="https://www.freecodecamp.org/certification/tymick/responsive-web-design">
            my freeCodeCamp Responsive Web Design Certification
          </a>
          , using{" "}
          <a href="https://www.w3schools.com/w3css/default.asp">W3.CSS</a>. I
          modeled it some after{" "}
          <a href="https://codepen.io/freeCodeCamp/pen/RKRbwL">their example</a>{" "}
          but I was inspired more by{" "}
          <a href="https://www.w3schools.com">W3School</a>
          's{" "}
          <a href="https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_parallax&amp;stacked=h">
            Parallax Template
          </a>
          . And my own (now defunct){" "}
          <a href="https://web.archive.org/web/20200130223029/https://lenscaptions.com/">
            Lens Captions homepage
          </a>
          , which I'd built with <a href="https://www.shopify.com">Shopify</a>'s
          website builder. It fulfills the following user stories:
        </p>
        <ol>
          <li>
            My product landing page should have a <code>header</code> element
            with a corresponding <code>id="header"</code>.
          </li>
          <li>
            I can see an image within the <code>header</code> element with a
            corresponding <code>id="header-img"</code>. A company logo would
            make a good image here.
          </li>
          <li>
            Within the <code>#header</code> element I can see a <code>nav</code>{" "}
            element with a corresponding <code>id="nav-bar"</code>.
          </li>
          <li>
            I can see at least three clickable elements inside the{" "}
            <code>nav</code> element, each with the class <code>nav-link</code>.
          </li>
          <li>
            When I click a <code>.nav-link</code> button in the <code>nav</code>{" "}
            element, I am taken to the corresponding section of the landing
            page.
          </li>
          <li>
            I can watch an embedded product video with <code>id="video"</code>.
          </li>
          <li>
            My landing page has a <code>form</code> element with a corresponding{" "}
            <code>id="form"</code>.
          </li>
          <li>
            Within the form, there is an <code>input</code> field with{" "}
            <code>id="email"</code> where I can enter an email address.
          </li>
          <li>
            The <code>#email</code> input field should have placeholder text to
            let the user know what the field is for.
          </li>
          <li>
            The <code>#email</code> input field uses HTML5 validation to confirm
            that the entered text is an email address.
          </li>
          <li>
            Within the form, there is a submit <code>input</code> with a
            corresponding <code>id="submit"</code>.
          </li>
          <li>
            When I click the <code>#submit</code> element, the email is
            submitted to a static page (use this mock URL:{" "}
            <a href="https://www.freecodecamp.com/email-submit" target="_blank">
              https://www.freecodecamp.com/email-submit
            </a>
            ) that confirms the email address was entered and that it posted
            successfully.
          </li>
          <li>The navbar should always be at the top of the viewport.</li>
          <li>My product landing page should have at least one media query.</li>
          <li>
            My product landing page should utilize CSS flexbox at least once.
          </li>
        </ol>
      </Container>
    </>
  );
};

export default ProductLandingPage;
