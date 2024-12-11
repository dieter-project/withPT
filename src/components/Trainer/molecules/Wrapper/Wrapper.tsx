import React from "react";
import styled, { css } from "styled-components";

interface WrapperProps {
  type?: "default" | "column" | "spaceBetween";
  children: React.ReactNode;
}

const Wrapper = ({ type = "default", children }: WrapperProps) => {
  return <StyledWrapper $type={type}>{children}</StyledWrapper>;
};

export default Wrapper;

const StyledWrapper = styled.div<{
  $type: "default" | "column" | "spaceBetween";
}>`
  ${({ $type }) => {
    switch ($type) {
      case "column":
        return css`
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
        `;
      case "spaceBetween":
        return css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `;

      default:
        return css`
          /* background-color: var(--default-background);
          color: black; */
        `;
    }
  }}
`;
