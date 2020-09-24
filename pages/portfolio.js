import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import TeX from "@matejmazur/react-katex";
import PortfolioSection from "../components/portfolio-section";

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
              <a
                href="https://towardsdatascience.com/loan-risk-neural-network-30c8f65f052e"
                className="d-block stretched-link"
              >
                Building a Neural Network to Predict Loan Risk
              </a>
              <small className="d-block mb-1">
                <cite className="text-muted">Towards Data Science</cite>
              </small>
            </>,
            <>
              <a
                href="https://towardsdatascience.com/loan-grading-showdown-ba64110c99f2"
                className="d-block stretched-link"
              >
                Can I Grade Loans Better Than LendingClub?
              </a>
              <small className="d-block mb-1">
                <cite className="text-muted">Towards Data Science</cite>
              </small>
            </>,
            <>
              <a
                href="https://hackernoon.com/loan-risk-prediction-using-neural-network-algorithm-gg4q3uu2"
                className="d-block stretched-link"
              >
                Loan Risk Prediction Using Neural Networks
              </a>
              <small className="d-block mb-1">
                <cite className="text-muted">Hacker Noon</cite>
              </small>
            </>,
            <>
              <a
                href="https://apps.dtic.mil/sti/citations/AD1012051"
                className="d-block stretched-link"
              >
                Readiness Based Sparing: A Research Summary
              </a>
              <small className="d-block mb-1">
                <cite className="text-muted">
                  Defense Technical Information Center
                </cite>
              </small>
            </>,
            <>
              <a
                href="https://apps.dtic.mil/sti/citations/AD1012101"
                className="d-block stretched-link"
              >
                The Case for AFMC Social Media Analysis
              </a>
              <small className="d-block mb-1">
                <cite className="text-muted">
                  Defense Technical Information Center
                </cite>
              </small>
            </>,
            <>
              <a
                href="https://hackernoon.com/making-a-browser-console-log-wait-until-page-reloads-a-how-to-guide-2j1z3yt9"
                className="d-block stretched-link"
              >
                Making a Browser Console Log Wait Until Page Reloads [A How-To
                Guide]
              </a>
              <small className="d-block mb-1">
                <cite className="text-muted">Hacker Noon</cite>
              </small>
            </>,
            <>
              <a
                href="https://medium.com/javascript-in-plain-english/how-to-make-a-browser-console-log-wait-until-after-a-page-reload-bccc538c9938"
                className="d-block stretched-link"
              >
                Make a Browser Console Log Wait for a Page Reload
              </a>
              <small className="d-block mb-1">
                <cite className="text-muted">JavaScript in Plain English</cite>
              </small>
            </>,
          ]}
        />

        <PortfolioSection
          name="Machine learning models"
          id="machine-learning"
          projects={[
            <a href="https://www.kaggle.com/tywmick/building-a-neural-network-to-predict-loan-risk">
              Loan risk prediction using neural network regression
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
          name="Python APIs and microservices"
          id="python-apis"
          projects={[
            <a href="https://tywmick.pythonanywhere.com">
              Loan risk prediction model API
            </a>,
            <a href="https://ty-metricimpconverter-python.glitch.me">
              Metric-imperial converter
            </a>,
            <a href="https://ty-file-metadata-python.glitch.me">
              File metadata microservice
            </a>,
            <a href="https://ty-timestamp-python.glitch.me">
              Timestamp microservice
            </a>,
            <a href="https://ty-headerparser-python.glitch.me">
              Request header parser
            </a>,
          ]}
        />

        <PortfolioSection
          name="Node.js APIs and microservices"
          id="nodejs-apis"
          projects={[
            <a href="https://ty-library.glitch.me">Personal library</a>,
            <a href="https://ty-stockchecker.glitch.me">Stock price checker</a>,
            <a href="https://ty-issue-tracker.glitch.me">Issue tracker</a>,
            <a href="https://ty-metricimpconverter.glitch.me">
              Metric-imperial converter
            </a>,
            <a href="https://ty-messageboard.glitch.me">
              Anonymous message board
            </a>,
            <a href="https://ty-exercise-tracker.glitch.me">
              Exercise tracker
            </a>,
            <a href="https://ty-urlshortener.glitch.me">URL shortener</a>,
            <a href="https://ty-file-metadata.glitch.me">
              File metadata microservice
            </a>,
            <a href="https://ty-timestamp.glitch.me">Timestamp microservice</a>,
            <a href="https://ty-headerparser.glitch.me">
              Request header parser
            </a>,
          ]}
        />

        <PortfolioSection
          name="npm packages"
          id="npm"
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
              <a href="https://github.com/pandas-dev/pandas/pull/35337">
                Documentation help
              </a>{" "}
              for pandas
            </>,
            <>
              <a href="https://github.com/rtcovidlive/covid-model/pull/27">
                Formatting help
              </a>{" "}
              for{" "}
              <a href="https://rt.live/">
                R<sub>t</sub> Live
              </a>
              &rsquo;s COVID-19{" "}
              <var>
                R<sub>t</sub>
              </var>{" "}
              model
            </>,
            <>
              <a href="https://github.com/MatejBransky/react-katex/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged">
                New feature and bug fixes
              </a>{" "}
              for react-katex
            </>,
            <>
              <a href="https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged">
                Curriculum help
              </a>{" "}
              for freeCodeCamp
            </>,
            <>
              <a href="https://github.com/vercel/next.js/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged">
                Bug fixes and documentation help
              </a>{" "}
              for Next.js
            </>,
            <>
              <a href="https://github.com/pablopunk/nextjs-redirect/pulls?q=author%3Atywmick+is%3Apr+is%3Amerged">
                New features
              </a>{" "}
              for nextjs-redirect
            </>,
            <>
              <a href="https://github.com/mauriciopoppe/function-plot/pull/145">
                Licensing help
              </a>{" "}
              for Function Plot
            </>,
            <>
              <a href="https://github.com/twbs/bootstrap/pull/30010">
                Documentation help
              </a>{" "}
              for Bootstrap
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
          ]}
        />
      </Container>
    </>
  );
}
