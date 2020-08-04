import React from "react";

export default function PortfolioSection({ name, id, projects }) {
  return (
    <section aria-labelledby={id}>
      <h2 className="h3" id={id}>
        {name}
      </h2>
      <ul className="lead">
        {projects.map((project, index) => (
          <li className="text-left" key={`${id}-${index}`}>{project}</li>
        ))}
      </ul>
    </section>
  );
}
