import React from "react";
import renderer from "react-test-renderer";
import TelephoneNumberValidator from "../../../pages/project/telephone-number-validator";

jest.mock("react-gist");

describe("TelephoneNumberValidator", () => {
  it("matches snapshot", async () => {
    expect(
      renderer.create(<TelephoneNumberValidator />).toJSON()
    ).toMatchSnapshot();
  });
});
