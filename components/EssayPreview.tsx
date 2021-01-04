import React from "react";
import Link from "next/link";

type EssayPreviewProps = {
  title: string;
  subtitle?: string;
  href: string;
  as?: string;
  date: string;
  children: React.ReactNode;
};

export default function EssayPreview({
  title,
  subtitle,
  href,
  as,
  date,
  children,
}: EssayPreviewProps) {
  return (
    <li className="essay-preview">
      <h2 className="h5 serif">
        {href.startsWith("/") ? (
          <Link href={href} as={as}>
            <a>{title}</a>
          </Link>
        ) : (
          <a href={href}>{title}</a>
        )}
      </h2>
      {subtitle && <h3 className="h6 serif">{subtitle}</h3>}
      <small>{date}</small>
      <p className="serif">{children}</p>
    </li>
  );
}
