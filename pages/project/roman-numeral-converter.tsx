import React from "react";
import Head from "next/head";
import Gist from "react-gist";
import { Container } from "react-bootstrap";
import AlgorithmTest from "../../components/AlgorithmTest";

export default function RomanNumeralConverter() {
  function convertToRoman(num) {
    let roman = "";

    let thousands = Math.floor(num / 1000);
    roman += "M".repeat(thousands);

    let hundreds = Math.floor((num % 1000) / 100);
    if (hundreds == 9) {
      roman += "CM";
    } else if (hundreds >= 5) {
      roman += "D" + "C".repeat(hundreds - 5);
    } else if (hundreds == 4) {
      roman += "CD";
    } else {
      roman += "C".repeat(hundreds);
    }

    let tens = Math.floor((num % 100) / 10);
    if (tens == 9) {
      roman += "XC";
    } else if (tens >= 5) {
      roman += "L" + "X".repeat(tens - 5);
    } else if (tens == 4) {
      roman += "XL";
    } else {
      roman += "X".repeat(tens);
    }

    let ones = Math.floor(num % 10);
    if (ones == 9) {
      roman += "IX";
    } else if (ones >= 5) {
      roman += "V" + "I".repeat(ones - 5);
    } else if (ones == 4) {
      roman += "IV";
    } else {
      roman += "I".repeat(ones);
    }

    return roman;
  }

  return (
    <>
      <Head>
        <title>Roman numeral converter – Ty Mick</title>
      </Head>

      <Container>
        <h1 className="mb-4">Roman numeral converter algorithm</h1>

        <AlgorithmTest
          algorithm={convertToRoman}
          argumentName="num"
          inputType="number"
        />

        <div className="mb-2">
          <Gist id="6c49d7c51d99aedee9ffdc8965f056a3" />
        </div>

        {/* Explanation */}
        <p>
          I created this algorithm as a requirement for{" "}
          <a href="https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures">
            my freeCodeCamp JavaScript Algorithms and Data Structures
            Certification
          </a>
          . It converts the number given into a Roman numeral.
        </p>
      </Container>
    </>
  );
}
