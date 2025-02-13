import React from "react";
import styled from "styled-components";

const EmptyBox = styled.div<{ $bg?: boolean; $pointer: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
  background-color: ${props => (props.$bg ? "var(--purple50)" : "none")};
  border-radius: ${props => (props.$bg ? "0.5rem" : "none")};
  cursor: ${props => (props.$pointer ? "pointer" : "")};

  > div {
    color: var(--font-secondary);
    &:first-of-type {
      font-weight: var(--font-semibold);
      margin: 0.25rem;
    }
  }
`;

const ExclamationMark = styled.span`
  width: 1.375rem;
  height: 1.375rem;
  display: block;
  border-radius: 50%;
  background: url("/svgs/icon_exclamation_circle.svg") no-repeat;
  background-position: center;
`;

const EmptyData = ({
  text,
  subText,
  onClick,
  bg,
}: {
  text: string;
  subText?: string;
  onClick?: () => void;
  bg?: boolean;
}) => {
  return (
    <EmptyBox onClick={onClick} $bg={bg} $pointer={!!onClick}>
      <ExclamationMark></ExclamationMark>
      <div>{text}</div>
      <div>{subText}</div>
    </EmptyBox>
  );
};

export default EmptyData;
