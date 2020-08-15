import React from "react";
import { kebabCase } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MiscProfile({ brand, icon, href }) {
  return (
    <div className="p-3">
      <a
        href={href}
        title={brand}
        className={`${kebabCase(brand.toLowerCase())}-link`}
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    </div>
  );
}
