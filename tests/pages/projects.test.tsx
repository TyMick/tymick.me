import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import Projects from "../../pages/projects";

describe("Projects", () => {
  it("matches snapshot", async () => {
    expect(
      renderer
        .create(
          <ThemeProvider theme={theme}>
            <Projects />
          </ThemeProvider>
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});
