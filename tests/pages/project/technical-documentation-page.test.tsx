import React from "react";
import renderer from "react-test-renderer";
import TechnicalDocumentationPage from "../../../pages/project/technical-documentation-page";

describe("TechnicalDocumentationPage", () => {
  it("matches snapshot", async () => {
    expect(
      renderer.create(<TechnicalDocumentationPage />).toJSON()
    ).toMatchSnapshot();
  });
});
