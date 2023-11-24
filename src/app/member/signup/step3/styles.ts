import { styled } from "styled-components"

export const WeightInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 1.25rem;

  input {
    width: 200px;
    height: 48px;
    border: none;
    border-radius: 0.5rem;
    background-color: var(--purple50);
    padding: 0 0.625rem;
  }
`
export const HelperText = styled.div`
  margin-top: 15px;
  font-weight: var(--font-regular);
  text-decoration-line: underline;
`