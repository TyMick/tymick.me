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
import Gist from "react-gist";
import { Container } from "react-bootstrap";
import AlgorithmTest from "../../components/algorithm-test";

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
      ranges.forEach(range => {
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
        <title>Caesar's cipher – Ty Mick</title>
      </Head>

      <Container>
        <h1 className="mb-4">Caesar's cipher algorithm</h1>

        <AlgorithmTest algorithm={rot13} argumentName="str" inputType="text" />

        <div className="mb-2">
          <Gist id="1a7997c7d07b7e6375f773963df36946" />
        </div>

        {/* Explanation */}
        <p>
          I created this algorithm as a requirement for{" "}
          <a href="https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures">
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
