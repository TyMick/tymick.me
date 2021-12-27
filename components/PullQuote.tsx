import React from "react";
import clsx from "clsx";

export default function PullQuote({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={clsx(className, "h3-size px-4 text-secondary font-italic")}
      css={`
        margin-bottom: 1rem;
        a {
          color: inherit;
        }
      `}
      {...props}
    />
  );
}
