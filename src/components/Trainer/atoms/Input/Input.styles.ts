import styled from "styled-components";

export type InputProps = {
  p?: string;
  m?: string;
  br?: string;
  bg?: string;
};

export const Input = styled.input<InputProps>`
  padding: ${({ p }) => p || "1rem"};
  margin: ${({ m }) => m || "0"};
  border-radius: ${({ br }) => br || "0.5rem"};
  background: ${({ bg }) => bg || "var(--purple50)"};
`;

export const StyledInput = styled.input<InputProps>``;
