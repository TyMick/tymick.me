"use strict";

import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// I realize that putting a tooltip on a <span> is not ideal for accessibility
// (https://getbootstrap.com/docs/4.4/components/tooltips/#markup), but I can't
// think of another way to implement this fun sort of inline footnote at the
// moment. Suggestions are appreciated.
export default ({ note, noteId, children }) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id={noteId}>{note}</Tooltip>}
  >
    <span
      tabIndex="0"
      style={{
        textDecoration: "underline dotted",
        cursor: "help"
      }}
    >
      {children}
    </span>
  </OverlayTrigger>
);

// Consider using getClientRects() to better position notes on multi-line
// spans: https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects
