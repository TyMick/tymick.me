import React from "react";
import Link, { LinkProps } from "next/link";

type IsometricLinkProps = React.PropsWithChildren<LinkProps> &
  React.HTMLProps<HTMLAnchorElement>;

export default function IsometricLink({
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
    <Link
      {...{ href, as, replace, scroll, shallow, passHref, prefetch, locale }}
    >
      <a {...anchorProps}>{children}</a>
    </Link>
  ) : (
    <a href={href} {...anchorProps}>{children}</a>
  );
}
