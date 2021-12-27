import "styled-components";
import {} from "styled-components/cssprop";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorScale;
    space: SpaceScale;
  }

  export type ColorScale = { [key: string]: string | ColorScale };
  export type SpaceScale = { [key: number]: string };
}
