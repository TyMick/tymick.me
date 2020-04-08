import React from "react";
import marked from "marked";

export default ({ children, source }) => {
  const sourceHTML = { __html: marked(source).slice(3, -5) };

  return (
    <blockquote className="blockquote mb-4">
      <p className="mb-0">{children}</p>
      <footer
        className="blockquote-footer"
        dangerouslySetInnerHTML={sourceHTML}
      />
    </blockquote>
  );
};
