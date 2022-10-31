import React from "react";
import renderer from "react-test-renderer";
import Dtic from "../../pages/dtic";

describe("Dtic", () => {
  it("matches snapshot", async () => {
    expect(renderer.create(<Dtic />).toJSON()).toMatchSnapshot();
  });
});
