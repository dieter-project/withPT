import { css, styled } from "styled-components";

interface ButtonProps {
  variant: string;
  height?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: ${props => props.height || "3.5rem"};
  border: none;
  text-align: center;
<<<<<<< HEAD
  border-radius: 0.5rem;

  ${props =>
    props.variant === "primary" &&
    css`
      background-color: var(--primary);
      color: var(--white);
    `}

  ${props =>
    props.variant === "secondary" &&
    css`
      background-color: var(--purple100);
      color: var(--font-secondary);
    `}

  ${props =>
    props.variant === "ghost" &&
    css`
      background: #b1b1b1;
      color: var(--white);
    `}

  ${props =>
    props.variant === "outline" &&
    css`
      border: 1px solid var(--border-gray);
    `}
`;

export const IconButton = styled.button<ButtonProps>`
  width: 100%;
  height: 3.5rem;
  border: none;
  text-align: center;
  border-radius: 0.5rem;
  background-color: var(--inputpurple);
  background-image: modalOpenPlus;
  background-repeat: no-repeat;
  background-size: contain;

  ${props =>
    props.variant === "ghost" &&
    css`
      background: #b1b1b1;
      color: var(--white);
    `}
  ${props =>
    props.variant === "color" &&
    css`
      background-color: var(--primary);
      color: var(--white);
    `};
`;

export const ListButton = styled.button`
  position: relative;
  width: 100%;
  line-height: 5rem;
  background-color: var(--inputpurple);
  color: var(--black);
  border: none;
  border-radius: 0.5rem;
  text-align: left;
  padding: 0 0.8rem;
  margin-bottom: 0.75rem;
  font-size: var(--font-l);
`;
=======
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
>>>>>>> 95197a1f04a5406aba428791132cbaad2708eaba
