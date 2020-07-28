import React from "react";
import Link from "next/link";

const EssayPreview = ({ title, subtitle, href, date, children }) => (
  <li className="essay-preview">
    <h2 className="h5 serif">
      {href.startsWith("/") ? (
        <Link href={href}>
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

export default EssayPreview;
