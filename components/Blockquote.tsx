import styled from "styled-components";
import clsx from "clsx";

/**
 * Copied from Bootstrap's color variables.
 *
 * @todo Create a Styled System theme to use instead.
 */
const gray500 = "#adb5bd";

const Blockquote = styled.blockquote.attrs((props) => ({
  className: clsx(props.className, "pl-2 my-4"),
}))`
  border-left: 4px solid ${gray500};
`;

export default Blockquote;
