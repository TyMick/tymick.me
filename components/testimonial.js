import React from "react";
import marked from "marked";

const Testimonial = ({ children, source }) => {
  const sourceHTML = { __html: marked(source).slice(3, -5) };

  return (
    <blockquote className="blockquote mb-5">
      <p className="mb-0">{children}</p>
      <footer
        className="blockquote-footer"
        dangerouslySetInnerHTML={sourceHTML}
      />
    </blockquote>
  );
};

export default Testimonial;
