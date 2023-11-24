import { styled } from "styled-components";

export const ToggleButton = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  input[type="checkbox"] {
    appearance: none;
    position: relative;
    background-color: var(--purple100);
    border-radius: 1.25em;
    width: 60px;
    height: 1.875rem;
    border: none;
  }

  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    width: 1.625rem;
    height: 1.625rem;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: var(--white);
    transition: left 250ms linear;
  }

  input[type="checkbox"]:checked::before {
    background-color: white;
    left: 2em;
  }

  input[type="checkbox"]:checked {
    background-color: var(--primary);
  }

  input[type="checkbox"]:focus-visible {
    outline-offset: max(2px, 0.1em);
    outline: max(2px, 0.1em) solid tomato;
  }
`