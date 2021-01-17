import React from "react";
import css from "@styled-system/css";
import { themeGet } from "@styled-system/theme-get";
import clsx from "clsx";

export default function Blockquote({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className={clsx(className, "pl-2 my-4")}
      css={css({
        borderLeft: `4px solid ${themeGet("colors.gray500")(props)}`,
      })}
      {...props}
    />
  );
}
