"use strict";

import React from "react";

export default ({ title, subtitle, href, date, children }) => (
  <li className="essay-preview">
    <h2 className="h5 serif">
      <a href={href}>{title}</a>
    </h2>
    {subtitle && <h3 className="h6 serif">{subtitle}</h3>}
    <small>{date}</small>
    <p className="serif">{children}</p>
  </li>
);
