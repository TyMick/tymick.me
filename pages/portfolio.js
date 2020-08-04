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
import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
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
              <a href="https://towardsdatascience.com/loan-risk-neural-network-30c8f65f052e">
                Building a Neural Network to Predict Loan Risk
              </a>
              <cite className="text-muted ml-3">Towards Data Science</cite>
            </>,
            <>
              <a href="https://apps.dtic.mil/sti/citations/AD1012051">
                Readiness Based Sparing: A Research Summary
              </a>
              <cite className="text-muted ml-3">
                <abbr title="Defense Technical Information Center">DTIC</abbr>
              </cite>
            </>,
            <>
              <a href="https://apps.dtic.mil/sti/citations/AD1012101">
                The Case for AFMC Social Media Analysis
              </a>
              <cite className="text-muted ml-3">DTIC</cite>
            </>,
            <>
              <a href="https://hackernoon.com/making-a-browser-console-log-wait-until-page-reloads-a-how-to-guide-2j1z3yt9">
                Making a Browser Console Log Wait Until Page Reloads [A How-To
                Guide]
              </a>
              <cite className="text-muted ml-3">Hacker Noon</cite>
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
          name="Open-source contributions"
          id="open-source"
          projects={[
            <>
              <a href="https://github.com/pandas-dev/pandas/pull/35337">
                Documentation help
              </a>{" "}
              for pandas
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
