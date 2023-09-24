import { css, styled } from "styled-components";

interface ButtonProps {
  variant: string;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 56px;
  border: none;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 8px;

  ${props => props.variant === 'primary' && css`
    background-color: var(--primary);
    color: var(--white);
  `}

  ${props => props.variant === 'secondary' && css`
    background-color: var(--purple100);
    color: var(--font-secondary);
  `}

  ${props => props.variant === 'disable' && css`
    background: #b1b1b1;
    color: var(--white);
  `}

  ${props => props.variant === 'outline' && css`
    border: 1px solid var(--border-gray);
  `}
`