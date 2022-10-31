import React from "react";
import renderer from "react-test-renderer";
import HqAfmcAward from "../../pages/hq-afmc-award";

describe("HqAfmcAward", () => {
  it("matches snapshot", async () => {
    expect(renderer.create(<HqAfmcAward />).toJSON()).toMatchSnapshot();
  });
});
