import React from "react";
import renderer from "react-test-renderer";
import CaesarsCipher from "../../../pages/project/caesars-cipher";

jest.mock("react-gist");

describe("CaesarsCipher", () => {
  it("matches snapshot", async () => {
    expect(renderer.create(<CaesarsCipher />).toJSON()).toMatchSnapshot();
  });
});
