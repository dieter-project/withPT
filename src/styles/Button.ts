import { css, styled } from "styled-components";

export const Button = styled.button<{ $variant: string }>`
  width: 100%;
  height: 56px;
  border: none;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${props => props.$variant === "primary" && "var(--primary)"};
  color: ${props => props.$variant === "primary" && "var(--white)"};
  border: ${props => props.$variant === "outline" && "1px solid var(--font-gray400)"};
`

export const CloseBtn = styled.button`
  width: 0.795rem;
  height: 0.795rem;
  background: url("/svgs/icon_close.svg") no-repeat;
  background-position: center;
  `

export const InputResetBtn = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  background: url("/svgs/icon_input_reset.svg") no-repeat;
  background-position: center;
`

export const PlusButton = styled.button`
  position: relative;
  width: 2rem;
  height: 2rem;

  &::before {
    display: block;
    content: '';
    width: 2px;
    height: 1rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--font-gray700);
  }
  
  &::after {
    display: block;
    content: '';
    width: 1rem;
    height: 2px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--font-gray700);
  }
`
