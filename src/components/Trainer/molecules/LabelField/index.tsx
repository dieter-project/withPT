import React from "react";
import styled from "styled-components";
import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";

interface LabelFieldProps {
  type: "default" | "column" | "spaceBetween";
  innertype?: "default" | "column" | "spaceBetween";
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
  x;
};

export default LabelField;

const Label = styled.label`
  all: unset;
  cursor: pointer;
  font-size: var(--font-l);
  margin-bottom: 0.2rem;
`;
