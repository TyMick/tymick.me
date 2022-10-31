import React from "react";
import renderer from "react-test-renderer";
import CashRegister from "../../../pages/project/cash-register";

jest.mock("react-gist");

describe("CashRegister", () => {
  it("matches snapshot", async () => {
    expect(renderer.create(<CashRegister />).toJSON()).toMatchSnapshot();
  });
});
