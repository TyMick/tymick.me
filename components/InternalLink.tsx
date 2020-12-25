import React from "react";
import Link, { LinkProps } from "next/link";

type InternalLinkProps = React.PropsWithChildren<LinkProps> &
  React.HTMLProps<HTMLAnchorElement>;

export default function InternalLink({
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
}: InternalLinkProps) {
  return (
    <Link
      {...{ href, as, replace, scroll, shallow, passHref, prefetch, locale }}
    >
      <a {...anchorProps}>{children}</a>
    </Link>
  );
}
