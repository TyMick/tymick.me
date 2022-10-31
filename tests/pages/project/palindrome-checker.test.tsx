import React from "react";
import renderer from "react-test-renderer";
import PalindromeChecker from "../../../pages/project/palindrome-checker";

jest.mock("react-gist");

describe("PalindromeChecker", () => {
  it("matches snapshot", async () => {
    expect(renderer.create(<PalindromeChecker />).toJSON()).toMatchSnapshot();
  });
});
