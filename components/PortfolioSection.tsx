import React, { ReactNode } from "react";
import useWindowWidthBreakpoints from "use-window-width-breakpoints";

type Props = {
  name: string;
  id: string;
  projects: ReactNode[];
};

export default function PortfolioSection({ name, id, projects }: Props) {
  const breakpoint = useWindowWidthBreakpoints();

  return (
    <section aria-labelledby={id}>
      <h2 className="h4" id={id}>
        {name}
      </h2>
      <ul style={{ ...(breakpoint.xs && { paddingInlineStart: "2rem" }) }}>
        {projects.map((project, index) => (
          <li
            className="text-left position-relative"
            style={{ maxWidth: "max-content" }}
            key={`${id}-${index}`}
          >
            {project}
          </li>
        ))}
      </ul>
    </section>
  );
}
