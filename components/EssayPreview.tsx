import React from "react";
import { format } from "date-fns";
import DateHeading from "./DateHeading";
import A from "./Link";

type Props = {
  title: string;
  subtitle?: string;
  href: string;
  /** Date/time first published, in ISO format. */
  date: string;
  children: React.ReactNode;
};

export default function EssayPreview({
  title,
  subtitle,
  href,
  date,
  children,
}: Props) {
  return (
    <li className="mb-5">
      <DateHeading date={date} />
      <div className="position-relative">
        <h2 className="h5 serif">
          <A href={href} className="text-reset stretched-link">
            {title}
          </A>
        </h2>
        {subtitle && (
          <h3 className="h6 serif text-muted font-italic">{subtitle}</h3>
        )}
        <p className="serif">{children}</p>
      </div>
    </li>
  );
}
