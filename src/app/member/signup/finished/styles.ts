import { BaseContentWrap } from "@/styles/Layout";
import styled, { keyframes } from "styled-components";

export const FinishedPageWrap = styled(BaseContentWrap)`
  width: 100%;
  height: calc(100vh - 11.25rem);
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const draw = keyframes`
  to {
    stroke-dashoffset: 0
  }
`

export const CheckAnimation = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1.25rem;
    width: 1.25rem;

    path {
      fill: none;
      stroke: var(--white);
      stroke-width: 4;
      stroke-dasharray: 23;
      stroke-dashoffset: 23;
      animation: ${draw} 0.5s linear forwards;
      stroke-linecap: round;
      stroke-linejoin: round
    }
  }
`

export const CheckWrap = styled.div`
  width: 100%;
  margin: 3rem auto 1rem;
  display: flex;
  justify-content: center;
`

