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
