import styled from "styled-components";

export type InputProps = {
  padding?: string;
  margin?: string;
  borderRadius?: string;
  backgroundColor?: string;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  border: none;
  padding: ${({ padding }) => padding || "1rem"};
  margin: ${({ margin }) => margin || "0"};
  border-radius: ${({ borderRadius }) => borderRadius || "0.5rem"};
  background: ${({ backgroundColor }) => backgroundColor || "var(--purple50)"};
`;

export const NoIconInput = styled(Input)`
  height: 3rem;
`;
