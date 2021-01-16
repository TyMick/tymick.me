import { Components } from "@mdx-js/react";
import { withMarkdownParsing } from "../lib/text-processing";
import Blockquote from "./Blockquote";
import { Figure, FigureImage, FigureCaption } from "./Figure";
import Image from "./Image";
import InlineFootnote from "./InlineFootnote";
import Link from "./Link";
import PullQuote from "./PullQuote";
import ThematicBreak from "./ThematicBreak";

const mdxComponents: Components & {
  [shortcode: string]: React.ComponentType<any>;
} = {
  // Component replacements for Markdown syntax
  a: Link,
  blockquote: Blockquote,
  hr: ThematicBreak,

  // Shortcodes (components available in every MDX file)
  Blockquote: withMarkdownParsing(Blockquote),
  Figure,
  FigureImage,
  FigureCaption: withMarkdownParsing(FigureCaption),
  I: withMarkdownParsing("i"),
  Image,
  InlineFootnote: withMarkdownParsing(InlineFootnote),
  LI: withMarkdownParsing("li"),
  P: withMarkdownParsing("p"),
  PullQuote: withMarkdownParsing(PullQuote),

  // Layout component
  /**
   * Currently not working when using MDX files as Next.js pages, as the {@link https://mdxjs.com/getting-started#using-the-wrapper
   * wrapper component} doesn't receive {@link https://mdxjs.com/advanced/components#layout-props
   * `layoutProps`} as it should. Perhaps this will be fixed in future versions
   * of MDX and/or @next/mdx?
   *
   * @todo Open an issue in MDX and/or Next.js.
   */
  // wrapper: BlogPostWrapper,
};

export default mdxComponents;
