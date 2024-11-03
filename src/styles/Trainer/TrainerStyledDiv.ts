import { styled } from "styled-components";

export const Purpl50Div = styled.div<{ $width: number; $marginRight?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${props => `${props.$width}%`};
  height: 3rem;
  padding: 0 1rem;
  background-color: var(--purple50);
  background-size: 100% 100%;
  border-radius: 0.5rem;
  margin-right: ${props => `${props.$marginRight}px`};
`;

export const FlexDivWrap = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  align-items: center;
`;
