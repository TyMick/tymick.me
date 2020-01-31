"use strict";

import React from "react";
import Head from "next/head";
import Gist from "react-gist";
import { Container } from "react-bootstrap";
import AlgorithmTest from "../../components/AlgorithmTest";

export default () => {
  function palindrome(str) {
    let test = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let forw = 0;
    let back = test.length - 1;
    let pal = true;

    while (forw < back) {
      if (test[forw] != test[back]) {
        pal = false;
        break;
      }
      forw++;
      back--;
    }

    return pal;
  }

  return (
    <>
      <Head>
        <title>Palindrome checker – Ty Mick</title>
      </Head>

      <Container>
        <h1 className="mb-4">Palindrome checker algorithm</h1>

        <AlgorithmTest
          algorithm={palindrome}
          argumentName="str"
          inputType="text"
        />

        <div className="mb-2">
          <Gist id="06b88ac9366953389df3475b9fa38643" />
        </div>

        {/* Explanation */}
        <p>
          I created this algorithm as a requirement for{" "}
          <a href="https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures">
            my freeCodeCamp JavaScript Algorithms and Data Structures
            Certification
          </a>
          . It returns <code>true</code> if the given string is a palindrome,
          ignoring letter case and all non-alphanumeric characters. Otherwise,
          it returns <code>false</code>.
        </p>
      </Container>
    </>
  );
};
