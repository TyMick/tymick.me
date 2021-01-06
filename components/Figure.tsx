import styled from "styled-components";
import clsx from "clsx";
import { processMarkdown } from "../lib/text-processing";
import { Figure as RBFigure } from "react-bootstrap";
import Image from "./Image";

const FigureImage = styled(Image).attrs(({ className }) => ({
  className: clsx(className, "figure-img"),
}))``;

const FigureCaption = styled(RBFigure.Caption).attrs(({ children }) => ({
  children: typeof children === "string" ? processMarkdown(children) : children,
}))``;

type FigureType = Omit<Omit<typeof RBFigure, "Image">, "Caption"> & {
  Image: typeof FigureImage;
  Caption: typeof FigureCaption;
};
const Figure: FigureType = Object.assign(RBFigure, {
  Image: FigureImage,
  Caption: FigureCaption,
});

export default Figure;
