import { css, styled } from "styled-components";

interface ButtonProps {
  $variant: string;
  height?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: ${props => props.height || "3.5rem"};
  border: none;
  text-align: center;
  border-radius: 0.5rem;

  ${props =>
    props.$variant === "primary" &&
    css`
      background-color: var(--primary);
      color: var(--white);
    `}

  ${props =>
    props.$variant === "secondary" &&
    css`
      background-color: var(--purple100);
      color: var(--font-secondary);
    `}

    ${props =>
    props.$variant === "ghostPurple" &&
    css`
      background-color: var(--purple75);
      color: var(--white);
    `}

  ${props =>
    props.$variant === "ghost" &&
    css`
      background: #b1b1b1;
      color: var(--white);
    `}

  ${props =>
    props.$variant === "outlinegray" &&
    css`
      border: 1px solid var(--font-gray400);
    `}

    ${props =>
    props.$variant === "outlinepurple" &&
    css`
      border: 1px solid var(--primary);
      background-color: var(--white);
      color: var(--primary);
    `}
`;

export const IconButton = styled.button<ButtonProps>`
  width: 100%;
  height: 3.5rem;
  border: none;
  text-align: center;
  border-radius: 0.5rem;
  background-color: var(--purple50);
  background-image: modalOpenPlus;
  background-repeat: no-repeat;
  background-size: contain;

  ${props =>
    props.$variant === "ghost" &&
    css`
      background: #b1b1b1;
      color: var(--white);
    `}
  ${props =>
    props.$variant === "color" &&
    css`
      background-color: var(--primary);
      color: var(--white);
    `};
`;

export const ListButton = styled.button`
  position: relative;
  width: 100%;
  line-height: 5rem;
  background-color: var(--purple50);
  color: var(--black);
  border: none;
  border-radius: 0.5rem;
  text-align: left;
  padding: 0 0.8rem;
  margin-bottom: 0.75rem;
  font-size: var(--font-l);
`;

export const CloseBtn = styled.button`
  width: 0.795rem;
  height: 0.795rem;
  background: url("/svgs/icon_close.svg") no-repeat;
  background-position: center;
`;
