import { Components } from "@mdx-js/react";
import AlgorithmTest from "./AlgorithmTest";
import BlogPostWrapper, { withBlogPostWrapper } from "./BlogPostWrapper";
import Codepen from "./Codepen";
import ContactMethod from "./ContactMethod";
import DateTime from "./DateTime";
import EssayPreview from "./EssayPreview";
import Figure from "./Figure";
import Footer from "./Footer";
import Image from "./Image";
import InlineFootnote from "./InlineFootnote";
import IsometricLink from "./IsometricLink";
import MiscProfile from "./MiscProfile";
import Nav from "./Nav";
import PortfolioSection from "./PortfolioSection";
import Testimonial from "./Testimonial";

export {
  AlgorithmTest,
  BlogPostWrapper,
  withBlogPostWrapper,
  Codepen,
  ContactMethod,
  DateTime,
  EssayPreview,
  Figure,
  Footer,
  Image,
  InlineFootnote,
  IsometricLink,
  MiscProfile,
  Nav,
  PortfolioSection,
  Testimonial,
};

export const mdxComponents: Components & {
  [shortcode: string]: React.ComponentType<any>;
} = {
  a: IsometricLink,
  Image: Image,
};
