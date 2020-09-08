import React from "react";
import useWindowWidthBreakpoints from "use-window-width-breakpoints";

export default function PortfolioSection({ name, id, projects }) {
  const breakpoint = useWindowWidthBreakpoints();

  return (
    <section aria-labelledby={id}>
      <h2 className="h4" id={id}>
        {name}
      </h2>
      <ul style={{ ...(breakpoint.xs && { paddingInlineStart: "2rem" }) }}>
        {projects.map((project, index) => (
          <li className="text-left mb-1" key={`${id}-${index}`}>
            {project}
          </li>
        ))}
      </ul>
    </section>
  );
}
