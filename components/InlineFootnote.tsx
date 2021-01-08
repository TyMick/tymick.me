import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { nanoid } from "nanoid";
import { parseInlineMarkdown } from "../lib/text-processing";
import { css, useTheme } from "@emotion/react";

type InlineFootnoteProps = {
  note: string;
  noteId?: string;
  children: React.ReactNode;
};

/**
 * @todo Consider using getClientRects() to better position notes on multi-line
 * spans.
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects}
 * {@link https://popper.js.org/docs/v2/modifiers/offset}
 * {@link https://react-bootstrap.netlify.com/components/overlays/#overlay-trigger-props}
 */
export default function InlineFootnote({
  note,
  noteId,
  children,
}: InlineFootnoteProps) {
  const id: string = noteId ?? `footnote-${nanoid(8)}`;

  // Overlay logic
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const theme = useTheme();

  return (
    <OverlayTrigger
      placement="top"
      show={hovered || focused}
      overlay={
        <Tooltip
          id={id}
          css={css`
            a {
              color: ${theme.colors.light.primary};

              &:hover,
              &:focus {
                color: ${theme.colors.light.primaryHoverFocus};
              }
            }
          `}
        >
          {parseInlineMarkdown(note)}
        </Tooltip>
      }
    >
      <span
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        css={{
          textDecoration: "underline dotted",
          textDecorationSkipInk: "none",
          cursor: "help",
        }}
      >
        {children}
      </span>
    </OverlayTrigger>
  );
}
