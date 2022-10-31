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
    dimensions?: {
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
  const [wrapperProps, nextImageProps] = filterProps<
    WrapperProps,
    FilteredNextImageProps
  >(otherProps, [...(layout.propNames ?? []), "className"]);

  return (
    <ImageWrapper
      className="image-wrapper"
      maxWidth={dimensions?.width}
      {...wrapperProps}
    >
      <NextImage
        {...({
          ...dimensions,
          layout: "intrinsic",
          className: clsx(
            rounded && "rounded",
            roundedCircle && "rounded-circle",
            thumbnail && "img-thumbnail",
            border && "border"
          ),
          ...nextImageProps,
        } as NextImageProps)}
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  display: inline-block;
  ${layout}
`;
