import React from "react";
import Link from "next/link";

export default function InternalLink({
  href,
  as,
  prefetch,
  replace,
  scroll,
  shallow,
  children,
  ...otherProps
}) {
  return (
    <Link {...{ href, as, prefetch, replace, scroll, shallow }}>
      <a {...otherProps}>{children}</a>
    </Link>
  );
}
