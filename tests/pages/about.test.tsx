import React from "react";
import renderer from "react-test-renderer";
import About from "../../pages/about";

describe("About", () => {
  it("matches snapshot", async () => {
    expect(renderer.create(<About />).toJSON()).toMatchSnapshot();
  });
});
