import React from "react";
import Head from "next/head";
import Gist from "react-gist";
import { Container } from "react-bootstrap";
import AlgorithmTest from "../../components/AlgorithmTest";

const CaesarsCipher = () => {
  function rot13(str) {
    let decoded = "";

    for (let i = 0; i < str.length; i++) {
      if (inRange(str.charCodeAt(i), [65, 77], [97, 109])) {
        decoded += String.fromCharCode(str.charCodeAt(i) + 13);
      } else if (inRange(str.charCodeAt(i), [78, 90], [110, 122])) {
        decoded += String.fromCharCode(str.charCodeAt(i) - 13);
      } else {
        decoded += str[i];
      }
    }

    return decoded;

    function inRange(target, ...ranges) {
      let inAnyRange = false;
      ranges.forEach((range) => {
        if (range[0] <= target && target <= range[1]) {
          inAnyRange = true;
        }
      });
      return inAnyRange;
    }
  }

  return (
    <>
      <Head>
        <title>Caesar&rsquo;s cipher – Ty Mick</title>
      </Head>

      <Container>
        <h1 className="mb-4">Caesar&rsquo;s cipher algorithm</h1>

        <AlgorithmTest algorithm={rot13} argumentName="str" inputType="text" />

        <div className="mb-2">
          <Gist id="1a7997c7d07b7e6375f773963df36946" />
        </div>

        {/* Explanation */}
        <p>
          I created this algorithm as a requirement for{" "}
          <a href="https://www.freecodecamp.org/certification/tymick/javascript-algorithms-and-data-structures">
            my freeCodeCamp JavaScript Algorithms and Data Structures
            Certification
          </a>
          . It is an implementation of the{" "}
          <a href="https://en.wikipedia.org/wiki/ROT13">ROT13</a> cipher,
          decoding (or encoding) a given message by replacing each letter with
          the letter 13 places away from it in the alphabet.
        </p>
      </Container>
    </>
  );
};

export default CaesarsCipher;
