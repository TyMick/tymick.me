import React from "react";
import renderer from "react-test-renderer";
import RomanNumeralConverter from "../../../pages/project/roman-numeral-converter";

jest.mock("react-gist");

describe("RomanNumeralConverter", () => {
  it("matches snapshot", async () => {
    expect(
      renderer.create(<RomanNumeralConverter />).toJSON()
    ).toMatchSnapshot();
  });
});
