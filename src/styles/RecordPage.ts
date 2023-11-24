import { styled } from "styled-components";
import { RoundBox } from "./Layout";

export const GoalBox = styled(RoundBox)`
  width: 100%;
  height: 114px;
  background-color: var(--purple50);
  border-radius: 0.5rem;
  padding: 1.25rem;

  p {
    font-size: var(--font-s);
    color: var(--font-secondary);
  }
  
  div {
    font-size: var(--font-xl);
    font-weight: var(--font-semibold);
  }
`