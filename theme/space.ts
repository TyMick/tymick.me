import type { SpaceScale } from "styled-components";

const space: SpaceScale = ["0", "0.25rem", "0.5rem", "1rem", "1.5rem", "3rem"];
const numNonNegativeElements = (space as string[]).length;
for (let i = 1; i < numNonNegativeElements; i++) {
  space[`-${i}`] = `-${space[i]}`;
}

export default space;
