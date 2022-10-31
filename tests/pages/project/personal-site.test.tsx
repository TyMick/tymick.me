import React from "react";
import renderer from "react-test-renderer";
import PersonalSite from "../../../pages/project/personal-site";

describe("PersonalSite", () => {
  it("matches snapshot", async () => {
    expect(renderer.create(<PersonalSite />).toJSON()).toMatchSnapshot();
  });
});
