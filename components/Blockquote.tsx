import React from "react";
import { css } from "@emotion/react";
import clsx from "clsx";

/**
 * Copied from Bootstrap's color variables.
 *
 * @todo Create a Styled System theme to use instead.
 */
const gray500 = "#adb5bd";

export default function Blockquote({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className={clsx(className, "pl-2 my-4")}
      css={css`
        border-left: 4px solid ${gray500};
      `}
      {...props}
    />
  );
}
