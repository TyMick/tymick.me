import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import TeX from "@matejmazur/react-katex";
import PortfolioSection from "../components/PortfolioSection";
import { IsometricLink as A } from "../components";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio – Ty Mick</title>
      </Head>

      <Container className="cap-width-lg">
        <h1>Portfolio</h1>

        <PortfolioSection
          name="Published papers and articles"
          id="papers-articles"
          projects={[
            <>
              <cite className="text-muted">Towards Data Science</cite>
              <ul className="mb-1">
                <li>
                  <a href="https://towardsdatascience.com/loan-risk-neural-network-30c8f65f052e">
                    Building a Neural Network to Predict Loan Risk
                  </a>
                </li>
                <li>
                  <a href="https://towardsdatascience.com/loan-grading-showdown-ba64110c99f2">
                    Can I Grade Loans Better Than LendingClub?
                  </a>
                </li>
                <li>
                  <a href="https://towardsdatascience.com/loan-risk-nlp-d98021613ff3">
                    Natural Language Processing for Loan Risk
                  </a>
                </li>
              </ul>
            </>,
            <>
              <cite className="text-muted">
                Defense Technical Information Center
              </cite>
              <ul className="mb-1">
                <li>
                  <a href="https://apps.dtic.mil/sti/citations/AD1012051">
                    Readiness Based Sparing: A Research Summary
                  </a>
                </li>
                <li>
                  <a href="https://apps.dtic.mil/sti/citations/AD1012101">
                    The Case for AFMC Social Media Analysis
                  </a>
                </li>
              </ul>
            </>,
            <>
              <cite className="text-muted">Hacker Noon</cite>
              <ul className="mb-1">
                <li>
                  <a href="https://hackernoon.com/loan-risk-prediction-using-neural-network-algorithm-gg4q3uu2">
                    Loan Risk Prediction Using Neural Networks
                  </a>
                </li>
                <li>
                  <a href="https://hackernoon.com/can-i-grade-loans-better-than-lendingclub-xgt3wue">
                    Can I Grade Loans Better Than LendingClub?
                  </a>
                </li>
                <li>
                  <a href="https://hackernoon.com/making-a-browser-console-log-wait-until-page-reloads-a-how-to-guide-2j1z3yt9">
                    Making a Browser Console Log Wait Until Page Reloads [A
                    How-To Guide]
                  </a>
                </li>
              </ul>
            </>,
            <>
              <cite className="text-muted">JavaScript in Plain English</cite>
              <ul>
                <li>
                  <a href="https://medium.com/javascript-in-plain-english/how-to-make-a-browser-console-log-wait-until-after-a-page-reload-bccc538c9938">
                    Make a Browser Console Log Wait for a Page Reload
                  </a>
                </li>
              </ul>
            </>,
          ]}
        />

        <PortfolioSection
          name="Machine learning models"
          id="machine-learning"
          projects={[
            <>
              <a href="https://www.kaggle.com/tywmick/building-a-neural-network-to-predict-loan-risk">
                Loan risk prediction using neural network regression
              </a>
              <ul>
                <li>
                  <a href="https://tywmick.pythonanywhere.com">
                    Flask API serving this model&rsquo;s predictions
                  </a>
                </li>
              </ul>
            </>,
            <a href="https://www.kaggle.com/tywmick/natural-language-processing-for-loan-risk">
              Natural language processing of loan applications
            </a>,
          ]}
        />

        <PortfolioSection
          name="Interactive data visualizations"
          id="data-visualizations"
          projects={[
            <a href="https://rtsimulator.com">
              <TeX as="var">R_t</TeX> Simulator
            </a>,
          ]}
        />

        <PortfolioSection
          name="APIs and microservices"
          id="apis"
          projects={[
            <>
              Python/Flask with SQLite
              <ul className="mb-1">
                <li>
                  <a href="https://library-python.tymick.me">
                    Personal library
                  </a>
                </li>
                <li>
                  <a href="https://stock-checker-python.tymick.me">
                    Stock price checker
                  </a>
                </li>
                <li>
                  <a href="https://issue-tracker-python.tymick.me">
                    Issue tracker
                  </a>
                </li>
                <li>
                  <a href="https://message-board-python.tymick.me">
                    Anonymous message board
                  </a>
                </li>
                <li>
                  <a href="https://exercise-tracker-python.tymick.me">
                    Exercise tracker
                  </a>
                </li>
                <li>
                  <a href="https://url-shortener-python.tymick.me">
                    URL shortener
                  </a>
                </li>
              </ul>
            </>,
            <>
              Python/Flask
              <ul className="mb-1">
                <li>
                  <a href="https://ty-metricimpconverter-python.glitch.me">
                    Metric-imperial converter
                  </a>
                </li>
                <li>
                  <a href="https://ty-file-metadata-python.glitch.me">
                    File metadata microservice
                  </a>
                </li>
                <li>
                  <a href="https://ty-timestamp-python.glitch.me">
                    Timestamp microservice
                  </a>
                </li>
                <li>
                  <a href="https://ty-headerparser-python.glitch.me">
                    Request header parser
                  </a>
                </li>
              </ul>
            </>,
            <>
              Node.js/Express with MongoDB
              <ul className="mb-1">
                <li>
                  <a href="https://ty-library.glitch.me">Personal library</a>
                </li>
                <li>
                  <a href="https://ty-stockchecker.glitch.me">
                    Stock price checker
                  </a>
                </li>
                <li>
                  <a href="https://ty-issue-tracker.glitch.me">Issue tracker</a>
                </li>
                <li>
                  <a href="https://ty-messageboard.glitch.me">
                    Anonymous message board
                  </a>
                </li>
                <li>
                  <a href="https://ty-exercise-tracker.glitch.me">
                    Exercise tracker
                  </a>
                </li>
                <li>
                  <a href="https://ty-urlshortener.glitch.me">URL shortener</a>
                </li>
              </ul>
            </>,
            <>
              Node.js/Express
              <ul>
                <li>
                  <a href="https://ty-metricimpconverter.glitch.me">
                    Metric-imperial converter
                  </a>
                </li>
                <li>
                  <a href="https://ty-file-metadata.glitch.me">
                    File metadata microservice
                  </a>
                </li>
                <li>
                  <a href="https://ty-timestamp.glitch.me">
                    Timestamp microservice
                  </a>
                </li>
                <li>
                  <a href="https://ty-headerparser.glitch.me">
                    Request header parser
                  </a>
                </li>
              </ul>
            </>,
          ]}
        />

        <PortfolioSection
          name="Data structure implementations"
          id="data-structures"
          projects={[
            <a href="https://github.com/tywmick/data-structures#readme">
              12 common data structures in C, TypeScript, and Python
            </a>,
          ]}
        />

        <PortfolioSection
          name="Full-stack web apps"
          id="full-stack"
          projects={[
            <a href="https://real-estate-listing-page.tymick.me">
              Real estate listing page
            </a>,
            <a href="https://nextjs-local-authentication.tymick.me">
              Next.js + MongoDB local authentication boilerplate
            </a>,
            <A href="/project/personal-site" title="About this site">
              Personal portfolio/blog site
            </A>,
          ]}
        />

        <PortfolioSection
          name="WordPress themes"
          id="wordpress"
          projects={[
            <a href="https://ty-mick-wordpress-port.000webhostapp.com">
              Personal site WordPress port
            </a>,
          ]}
        />

        <PortfolioSection
          name="Single-page apps"
          id="single-page-apps"
          projects={[
            <>
              React
              <ul className="mb-1">
                <li>
                  <a href="https://ty-pomodoro-clock.glitch.me/">
                    Pomodoro clock
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/tywmick/full/BaBVeVO">
                    Calculator
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/tywmick/full/zYOaPyW">
                    Drum machine
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/tywmick/full/PoYeapB">
                    Markdown previewer
                  </a>
                </li>
              </ul>
            </>,
            <>
              PHP
              <ul>
                <li>
                  <a href="http://php-todo.tymick.me/">To-do list</a>
                </li>
              </ul>
            </>,
          ]}
        />

        <PortfolioSection
          name="React hooks"
          id="react-hooks"
          projects={[
            <a href="https://www.npmjs.com/package/use-window-width-breakpoints">
              useWindowWidthBreakpoints
            </a>,
            <a href="https://www.npmjs.com/package/use-window-orientation">
              useWindowOrientation
            </a>,
          ]}
        />

        <PortfolioSection
          name="Selected open-source contributions"
          id="open-source"
          projects={[
            <>
              <a href="https://github.com/pulls?q=user%3AFaithlife+author%3Atywmick+is%3Apr+is%3Amerged">
                Feature development and bug fixes
              </a>{" "}
              for Faithlife
            </>,
            <>
              <a href="https://github.com/vercel/next.js/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged">
                Bug fixes and documentation help
              </a>{" "}
              for Next.js
            </>,
            <>
              <a href="https://github.com/MatejBransky/react-katex/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged">
                New feature and bug fixes
              </a>{" "}
              for react-katex
            </>,
            <>
              <a href="https://github.com/pablopunk/nextjs-redirect/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged">
                New features
              </a>{" "}
              for nextjs-redirect
            </>,
            <>
              <a href="https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged">
                Curriculum help
              </a>{" "}
              for freeCodeCamp
            </>,
            <>
              <a href="https://github.com/tensorflow/tensorflow/pull/41599">
                Documentation help
              </a>{" "}
              for TensorFlow
            </>,
            <>
              <a href="https://github.com/pandas-dev/pandas/pull/35337">
                Documentation help
              </a>{" "}
              for pandas
            </>,
            <>
              <a href="https://github.com/rtcovidlive/covid-model/pull/27">
                Formatting help
              </a>{" "}
              for R<sub>t</sub> Live&rsquo;s COVID-19 model
            </>,
            <>
              <a href="https://github.com/twbs/bootstrap/pull/30010">
                Documentation help
              </a>{" "}
              for Bootstrap
            </>,
            <>
              <a href="https://github.com/styled-components/styled-components-website/pull/744">
                Documentation help
              </a>{" "}
              for styled-components
            </>,
            <>
              <a href="https://github.com/brefphp/bref/pull/760">
                Documentation help
              </a>{" "}
              for Bref
            </>,
            <>
              <a href="https://github.com/ant-design/ant-design/pull/23917">
                Documentation help
              </a>{" "}
              for Ant Design
            </>,
            <>
              <a href="https://gitlab.com/codeshelter/codeshelter-web/-/merge_requests/10">
                Documentation help
              </a>{" "}
              for Code Shelter
            </>,
            <>
              <a href="https://github.com/pulls?q=user%3AVSCodium+author%3Atywmick+is%3Apr+is%3Amerged">
                Documentation help
              </a>{" "}
              for VSCodium
            </>,
          ]}
        />
      </Container>
    </>
  );
}
