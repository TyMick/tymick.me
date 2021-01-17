/// <reference types="@emotion/react/types/css-prop" />

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: ColorScale;
    space: SpaceScale;
  }

  export type ColorScale = { [key: string]: string | ColorScale };
  export type SpaceScale = { [key: number]: string };
}
