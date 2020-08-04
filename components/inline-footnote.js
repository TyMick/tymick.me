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
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const InlineFootnote = ({ note, noteId, children }) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id={noteId}>{note}</Tooltip>}
  >
    <span
      tabIndex="0"
      style={{
        textDecoration: "underline dotted",
        textDecorationSkipInk: "none",
        cursor: "help",
      }}
    >
      {children}
    </span>
  </OverlayTrigger>
);

export default InlineFootnote;

// Consider using getClientRects() to better position notes on multi-line
// spans.
// - https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects
// - https://popper.js.org/docs/v2/modifiers/offset
// - https://react-bootstrap.netlify.com/components/overlays/#overlay-trigger-props
