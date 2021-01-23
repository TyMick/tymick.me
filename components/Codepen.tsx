import React from "react";

type Props = {
  title: string;
  slug: string;
  height?: number;
  theme?: "light" | "dark";
};

// Copied over from CodePen's HTML embed code (before converting to JSX)
export default function Codepen({
  title,
  slug,
  height = 265,
  theme = "dark",
}: Props) {
  return (
    <>
      <p
        className="codepen"
        data-height={height}
        data-theme-id={theme}
        data-default-tab="result"
        data-user="tywmick"
        data-slug-hash={slug}
        style={{
          height: height + "px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid",
          marginBottom: "1em",
          padding: "1em",
        }}
        data-pen-title={title}
      >
        <span>
          See the Pen{" "}
          <a href={"https://codepen.io/tywmick/pen/" + slug}>{title}</a> by Ty
          Mick (<a href="https://codepen.io/tywmick">@tywmick</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </span>
      </p>
      <script async src="https://static.codepen.io/assets/embed/ei.js" />
    </>
  );
}
