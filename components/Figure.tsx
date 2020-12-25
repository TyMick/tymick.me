import React from "react";
import { Figure as RBFigure } from "react-bootstrap";
import clsx from "clsx";
import Image, { ImageProps } from "./Image";

function FigureImage({ className, ...otherProps }: ImageProps) {
  return <Image className={clsx(className, "figure-img")} {...otherProps} />;
}

type FigureType = Omit<typeof RBFigure, "Image"> & {
  Image: typeof FigureImage;
};
const Figure: FigureType = Object.assign(RBFigure, { Image: FigureImage });

export default Figure;
