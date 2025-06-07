import React from "react";
import styled from "styled-components";
import Wrapper from "@/components/trainer/molecules/wrapper/Wrapper";

interface LabelFieldProps {
  type:
    | "default"
    | "columnDefault"
    | "columnCenter"
    | "spaceBetween"
    | "flexStartCenter"
    | "card"
    | "block";
  innertype?:
    | "default"
    | "columnDefault"
    | "columnCenter"
    | "spaceBetween"
    | "flexStartCenter"
    | "card"
    | "block";
  label: string;
  children: React.ReactNode;
}

const LabelField = ({ type, innertype, label, children }: LabelFieldProps) => {
  return (
    <Wrapper type={type}>
      <Label>{label}</Label>
      <Wrapper type={innertype}> {children}</Wrapper>
    </Wrapper>
  );
};

export default LabelField;

const Label = styled.label`
  all: unset;
  cursor: pointer;
  font-size: var(--font-l);
  margin-bottom: 0.2rem;
`;
