import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default ({ note, noteId, children }) => (
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

// Consider using getClientRects() to better position notes on multi-line
// spans.
// - https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects
// - https://popper.js.org/docs/v2/modifiers/offset
// - https://react-bootstrap.netlify.com/components/overlays/#overlay-trigger-props
