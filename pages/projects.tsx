import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { Container } from "react-bootstrap";
import TeX from "@matejmazur/react-katex";
import Greeting from "../components/Greeting";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects – Ty Mick</title>
      </Head>

      <Container className="cap-lg-49">
        <Greeting />

        <h1 className="h2">A few things I&rsquo;ve made:</h1>
        <SpacedList>
          <li>
            <a href="https://rtsimulator.com">
              <TeX as="var">R_t</TeX> Simulator
            </a>{" "}
            – An interactive data simulation that demonstrates why it&rsquo;s so
            important to keep COVID-19&rsquo;s reproduction number below 1.
          </li>

          <li>
            React hooks
            <SpacedList>
              <li>
                <a href="https://www.npmjs.com/package/use-window-width-breakpoints">
                  useWindowWidthBreakpoints
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/use-window-orientation">
                  useWindowOrientation
                </a>
              </li>
            </SpacedList>
          </li>
        </SpacedList>
      </Container>
    </>
  );
}

const SpacedList = styled.ul`
  margin-bottom: ${({ theme }) => theme.space[-1]};

  ul {
    margin-top: ${({ theme }) => theme.space[1]};
  }
  li {
    margin-bottom: ${({ theme }) => theme.space[1]};
  }
`;
