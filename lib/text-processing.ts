import React, { ReactFragment, ReactElement, ReactNode } from "react";
import remark from "remark";
import smartypants from "@silvenon/remark-smartypants";
import remarkReact from "remark-react";
import { VFile } from "vfile";

/** Converts a Markdown string into a parsed React fragment. */
export function parseInlineMarkdown(markdown: string): ReactFragment {
  const react = remark()
    .use(smartypants)
    .use(remarkReact, {
      remarkReactComponents: { p: React.Fragment },
    })
    .processSync(markdown) as VFile & { result: ReactElement }; // VFile typing is outdated here
  return react.result;
}

/** Parses Markdown in all string elements of a passed `children` object. */
export function parseChildMarkdown(children: ReactNode): ReactNode[] {
  return React.Children.toArray(children).map((child) =>
    typeof child === "string" && child !== " "
      ? parseInlineMarkdown(child)
      : child
  );
}

/**
 * A higher-order-component that enables markdown parsing in children of the
 * wrapped component.
 */
export function withMarkdownParsing(WrappedComponent: React.ElementType<any>) {
  return ({
    children,
    ...props
  }: React.ComponentProps<typeof WrappedComponent>) =>
    React.createElement(
      WrappedComponent,
      props,
      ...parseChildMarkdown(children)
    );
}
