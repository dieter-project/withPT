import { styled } from "styled-components";

export const RadioButton = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;

  label {
    width: 100%;
    height: 48px;
    display: flex;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + span {
    width: 100%;
    height: 48px;
    background-color: var(--purple50);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  input[type='radio']:checked + span {
    background-color: var(--purple100);
    color: var(--primary);
    border: 1px solid var(--primary);
    font-weight: var(--font-semibold);
  }
`