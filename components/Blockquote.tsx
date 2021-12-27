import React from "react";
import { useTheme } from "styled-components";
import clsx from "clsx";

export default function Blockquote({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"blockquote">) {
  const theme = useTheme();

  return (
    <blockquote
      className={clsx(className, "pl-2 my-4")}
      css={`
        border-left: 4px solid ${theme.colors.gray500};
      `}
      {...props}
    />
  );
}
