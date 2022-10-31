import React, { ReactFragment, ReactElement, ReactNode } from "react";
import remark from "remark";
import smartypants from "@silvenon/remark-smartypants";
import gfm from "remark-gfm";
import remarkReact from "remark-react";

/** Converts a Markdown string into a parsed React fragment. */
export function parseInlineMarkdown(markdown: string): ReactFragment {
  const react = remark()
    .use(smartypants)
    .use(gfm)
    .use(remarkReact, {
      remarkReactComponents: { p: React.Fragment },
    })
    .processSync(markdown);
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
  return function WithMarkdownParsingHOC({
    children,
    ...props
  }: React.ComponentProps<typeof WrappedComponent>) {
    return React.createElement(
      WrappedComponent,
      props,
      ...parseChildMarkdown(children)
    );
  };
}
