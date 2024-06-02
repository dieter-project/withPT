import { styled } from "styled-components";

export const TrGenderRadio = styled.input`
  appearance: none;
  background-color: var(--purple50);
`;

export const Slash = styled.span`
  padding: 0 0.75rem;
`;

export const TrGenderLabel = styled.label`
  width: 100%;
  height: 3rem;
  background-color: var(--purple50);
  border-radius: 8px;
  margin: 0 0.3rem;
  padding: 0.75rem 0;
  text-align: center;
`;

export const StyledLabel = styled.label`
  display: block;
  height: -webkit-fill-available;
  line-height: 45px;
  margin: 0 auto;
  border-radius: 10px;
  text-align: center;
`;

export const FormRadio = styled.div`
  width: 47%;
  height: 48px;
  border: none;
  background-color: var(--purple50);
  border-radius: 0.5rem;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    border: 1px solid var(--primary);
    background: var(--purple75);
    color: var(--primary);
  }
`;
