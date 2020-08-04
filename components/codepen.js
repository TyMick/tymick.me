/**
 * Copyright 2020 Tyler Westin Mick
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from "react";

// Copied over from CodePen's HTML embed code (before converting to JSX)
const CodePen = ({ title, slug, height = 265, theme = "dark" }) => (
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

export default CodePen;
