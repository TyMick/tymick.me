import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";
import clsx from "clsx";
import filterProps from "../lib/filterProps";

type WrapperProps = LayoutProps & { className?: string };

type FilteredNextImageProps = Omit<
  Omit<Omit<Omit<NextImageProps, "width">, "height">, "layout">,
  "className"
>;

export type ImageProps = FilteredNextImageProps &
  WrapperProps & {
    dimensions: {
      width: number;
      height: number;
    };
    rounded?: boolean;
    roundedCircle?: boolean;
    thumbnail?: boolean;
    border?: boolean;
  };

/**
 * A React Bootstrap `Image`–like wrapper around the Next.js `Image` component.
 * @see {@link https://react-bootstrap.github.io/components/images/ React Bootstrap `Image`}
 */
export default function Image({
  dimensions,
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  border = false,
  ...otherProps
}: ImageProps) {
  /**
   * @todo Create a way to fetch image dimensions automatically with
   * [probe-image-size][1] from `_app.tsx` during build with `getStaticProps`
   * once [that feature][2] is enabled (which they [plan to do][3] eventually).
   * Then, provide these image dimensions via [context][4] from `_app`, and
   * [consume that context][5] here.
   *
   * Probably keep an array list somewhere of external image sources you wish to
   * optimize, and then `_app`'s `getStaticProps` will check that list and also
   * every file in `public/images`.
   *
   * [1]: https://github.com/nodeca/probe-image-size
   * [2]: https://nextjs.org/docs/advanced-features/custom-app#caveats
   * [3]: https://github.com/vercel/next.js/discussions/10949#discussioncomment-1203
   * [4]: https://reactjs.org/docs/context.html
   * [5]: https://reactjs.org/docs/hooks-reference.html#usecontext
   */

  const [wrapperProps, nextImageProps] = filterProps<
    WrapperProps,
    FilteredNextImageProps
  >(otherProps, [...layout.propNames, "className"]);

  return (
    <ImageWrapper
      className="image-wrapper"
      maxWidth={dimensions.width}
      {...wrapperProps}
    >
      <NextImage
        {...dimensions}
        layout="intrinsic"
        className={clsx(
          rounded && "rounded",
          roundedCircle && "rounded-circle",
          thumbnail && "img-thumbnail",
          border && "border"
        )}
        {...nextImageProps}
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  display: inline-block;
  ${layout}
`;
