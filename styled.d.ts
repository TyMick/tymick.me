import "styled-components";
import { CSSProp } from "styled-components";
import theme from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorScale;
    space: SpaceScale;
  }

  export type ColorScale = { [key: string]: string | ColorScale };
  export type SpaceScale = { [key: number]: string };
}

declare module "react" {
  interface Attributes {
    css?: CSSProp<typeof theme>;
  }
}
