import React from "react";
import Head from "next/head";
import Gist from "react-gist";
import { Container } from "react-bootstrap";
import AlgorithmTest from "../../components/algorithm-test";

const TelephoneNumberValidator = () => {
  function telephoneCheck(str) {
    let numDigits;
    if (str.match(/\d/g)) {
      numDigits = str.match(/\d/g).length;
    } else {
      return false;
    }

    if (numDigits == 10) {
      if (
        !!str.match(/^\(\d{3}\) {0,1}\d{3}-\d{4}$/) ||
        !!str.match(/^\d{3}([ \-]{0,1})\d{3}\1\d{4}$/)
      ) {
        return true;
      } else {
        return false;
      }
    } else if (numDigits == 11) {
      if (
        !!str.match(/^1 {0,1}\(\d{3}\) {0,1}\d{3}-\d{4}$/) ||
        !!str.match(/^1 \d{3}([ \-]{0,1})\d{3}\1\d{4}$/)
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return (
    <>
      <Head>
        <title>Telephone number validator – Ty Mick</title>
      </Head>

      <Container>
        <h1 className="mb-4">Telephone number validator algorithm</h1>

        <AlgorithmTest
          algorithm={telephoneCheck}
          argumentName="str"
          inputType="text"
        />

        <div className="mb-2">
          <Gist id="1e5b0900551a40b2bf22bad0455837aa" />
        </div>

        {/* Explanation */}
        <p>
          I created this algorithm as a requirement for{" "}
          <a href="https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures">
            my freeCodeCamp JavaScript Algorithms and Data Structures
            Certification
          </a>
          . It checks an entered string of text to see if it looks like a valid
          United States phone number (according to{" "}
          <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator">
            freeCodeCamp's parameters
          </a>
          , at least).
        </p>
      </Container>
    </>
  );
};

export default TelephoneNumberValidator;
