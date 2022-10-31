import React from "react";
import renderer from "react-test-renderer";
import { PostsProps } from "../../components/ListOfPosts";
import Home, { getStaticProps } from "../../pages/index";
import { SuccessfulPropsResult } from "../util";

describe("Home", () => {
  it("matches snapshot", async () => {
    const { props } = (await getStaticProps(
      {}
    )) as SuccessfulPropsResult<PostsProps>;
    expect(props).toBeDefined();
    expect(renderer.create(<Home {...props} />).toJSON()).toMatchSnapshot();
  });
});
