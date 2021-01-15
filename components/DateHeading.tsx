import React from "react";
import { css } from "@emotion/react";
import { format } from "date-fns";

type Props = {
  /** Date/time in ISO format. */
  date: string;
};

export default function DateHeading({ date }: Props) {
  return (
    <div
      css={css`
        display: flex;
        flex: 1;
        width: 100%;
        margin-bottom: 0.25rem;
        font-family: "Alegreya", serif;
        font-size: 1.2rem;

        &:before,
        &:after {
          content: "";
          height: 0;
          margin-top: 1rem;
          vertical-align: middle;
          border-bottom: 1px solid;
        }
        &:before {
          margin-right: 0.5rem;
          width: 2rem;
        }
        &:after {
          margin-left: 0.5rem;
          flex-grow: 1;
        }
      `}
    >
      {format(new Date(date), "LLLL d, yyyy")}
    </div>
  );
}
