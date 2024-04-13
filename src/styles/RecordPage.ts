import { styled } from "styled-components";
import { RoundBox } from "./Layout";

export const GoalBox = styled.div`
  width: 100%;
  height: 114px;
  border-radius: 0.5rem;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  
  p {
    font-size: var(--font-s);
    color: var(--font-secondary);
  }
  
  > div:first-child {
    font-size: var(--font-xl);
    font-weight: var(--font-semibold);
  }
  > div:last-child {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`