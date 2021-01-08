import { Components } from "@mdx-js/react";
import { withMarkdownParsing } from "../lib/text-processing";
import AlgorithmTest from "./AlgorithmTest";
import Blockquote from "./Blockquote";
import BlogPostWrapper, { withBlogPostWrapper } from "./BlogPostWrapper";
import Codepen from "./Codepen";
import ContactMethod from "./ContactMethod";
import DateTime from "./DateTime";
import EssayPreview from "./EssayPreview";
import { Figure, FigureImage, FigureCaption } from "./Figure";
import Footer from "./Footer";
import Image from "./Image";
import InlineFootnote from "./InlineFootnote";
import Link from "./Link";
import MiscProfile from "./MiscProfile";
import Nav from "./Nav";
import PortfolioSection from "./PortfolioSection";
import PullQuote from "./PullQuote";
import Testimonial from "./Testimonial";
import ThematicBreak from "./ThematicBreak";

export {
  AlgorithmTest,
  Blockquote,
  BlogPostWrapper,
  withBlogPostWrapper,
  Codepen,
  ContactMethod,
  DateTime,
  EssayPreview,
  Figure,
  FigureImage,
  FigureCaption,
  Footer,
  Image,
  InlineFootnote,
  Link,
  MiscProfile,
  Nav,
  PortfolioSection,
  PullQuote,
  Testimonial,
  ThematicBreak,
};

export const mdxComponents: Components & {
  /**
   * @todo Find a better typing for this. I tried React.ComponentType<any>, but
   * that doesn't work with `Figure`. I can't find anything better at the
   * moment.
   */
  [shortcode: string]: any;
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
