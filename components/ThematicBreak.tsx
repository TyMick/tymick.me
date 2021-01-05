import styled from "styled-components";
import clsx from "clsx";

const ThematicBreak = styled.hr.attrs((props) => ({
  className: clsx(props?.className, "border-secondary my-4"),
}))({ width: "5rem" });

export default ThematicBreak;
