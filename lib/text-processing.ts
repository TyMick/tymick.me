import React from "react";
import remark from "remark";
import smartypants from "@silvenon/remark-smartypants";
import remarkReact from "remark-react";
import { VFile } from "vfile";

export function markdownToReactFragment(markdown: string) {
  const react = remark()
    .use(smartypants)
    .use(remarkReact, {
      remarkReactComponents: { p: React.Fragment },
    })
    .processSync(markdown) as VFile & { result: React.ReactElement };
  return react.result;
}
