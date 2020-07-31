import React from "react";
import Link from "next/link";

const PortfolioSection = ({ name, id, projects }) => {
  const endOfPath = (url) => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
  };

  return (
    <section aria-labelledby={id}>
      <h2 className="h3" id={id}>
        {name}
      </h2>
      <ul className="lead">
        {projects.map((project, index) => (
          <li key={`${id}-${index}`}>
            {project}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PortfolioSection;
