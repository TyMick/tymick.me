import styled from "styled-components";
import clsx from "clsx";
import { processMarkdown } from "../lib/text-processing";

const PullQuote = styled.p.attrs(({ className, children }) => ({
  className: clsx(className, "h3-size px-4 text-secondary font-italic"),
  children: typeof children === "string" ? processMarkdown(children) : children,
}))`
  a {
    color: inherit;
  }
`;

export default PullQuote;
