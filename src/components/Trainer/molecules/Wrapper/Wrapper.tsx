import React from "react";
import styled, { css } from "styled-components";

interface WrapperProps {
  type?: "default" | "column" | "spaceBetween";
  children: React.ReactNode;
  mt?: string;
  mb?: string;
}

const Wrapper = ({ type = "default", children, mt, mb }: WrapperProps) => {
  return (
    <StyledWrapper $type={type} $mt={mt} $mb={mb}>
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;

const StyledWrapper = styled.div<{
  $type: "default" | "column" | "spaceBetween";
  $mt?: string;
  $mb?: string;
}>`
  ${({ $mt, $mb }) => css`
    margin-top: ${$mt || "0"};
    margin-bottom: ${$mb || "0"};
  `}

  ${({ $type }) => {
    switch ($type) {
      case "column":
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
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
