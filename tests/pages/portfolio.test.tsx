import React from "react";
import renderer from "react-test-renderer";
import Portfolio from "../../pages/portfolio";

describe("Portfolio", () => {
  it("matches snapshot", async () => {
    expect(renderer.create(<Portfolio />).toJSON()).toMatchSnapshot();
  });
});
