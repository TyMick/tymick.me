import React from "react";
import renderer from "react-test-renderer";
import ProductLandingPage from "../../../pages/project/product-landing-page";

describe("ProductLandingPage", () => {
  it("matches snapshot", async () => {
    expect(renderer.create(<ProductLandingPage />).toJSON()).toMatchSnapshot();
  });
});
