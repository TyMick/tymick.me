"use strict";

import React from "react";
import { Media } from "react-bootstrap";

export default ({ title, subtitle, href, date, children }) => (
  <li className="essay-preview">
    <h5>
      <a href={href}>{title}</a>
    </h5>
    {subtitle && <h6>{subtitle}</h6>}
    <small>{date}</small>
    <p>{children}</p>
  </li>
);
