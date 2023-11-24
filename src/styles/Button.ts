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
  border-radius: 0.5rem;

  ${props => props.variant === 'primary' && css`
    background-color: var(--primary);
    color: var(--white);
    `}
    
    ${props => props.variant === 'disabled' && css`
    background-color: var(--disabled);
    color: var(--white);
    `}
    
    ${props => props.variant === 'ghost' && css`
      background-color: var(--primary);
      color: var(--primary);
  `}

  ${props => props.variant === 'outline' && css`
    border: 1px solid var(--font-gray400);
  `}
`