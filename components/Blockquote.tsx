import React from "react";
import { css, useTheme } from "@emotion/react";
import clsx from "clsx";

export default function Blockquote({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"blockquote">) {
  const theme = useTheme();

  return (
    <blockquote
      className={clsx(className, "pl-2 my-4")}
      css={css`
        border-left: 4px solid ${theme.colors.gray500};
      `}
      {...props}
    />
  );
}
