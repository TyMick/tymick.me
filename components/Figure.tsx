import React from "react";
import clsx from "clsx";
import { Figure as RBFigure } from "react-bootstrap";
import Image, { ImageProps } from "./Image";

/**
 * @remarks MDX cannot handle subcomponents, so React Bootstrap's `Figure` needs
 * to be split up.
 */
export function Figure(props: React.ComponentProps<typeof RBFigure>) {
  return <RBFigure {...props} />;
}

export function FigureImage({ className, ...props }: ImageProps) {
  return <Image className={clsx(className, "figure-img")} {...props} />;
}

export const FigureCaption = RBFigure.Caption;
