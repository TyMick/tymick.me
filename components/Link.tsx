import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

type IsometricLinkProps = React.PropsWithChildren<NextLinkProps> &
  React.HTMLProps<HTMLAnchorElement>;

export default function Link({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  children,
  ...anchorProps
}: IsometricLinkProps) {
  return href[0] === "/" && !href.includes(".") ? (
    // Internal link
    <NextLink
      {...{ href, as, replace, scroll, shallow, passHref, prefetch, locale }}
    >
      <a {...anchorProps}>{children}</a>
    </NextLink>
  ) : (
    // External link
    <a href={href} {...anchorProps}>
      {children}
    </a>
  );
}
