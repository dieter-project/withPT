import React from "react";
import styled, { css } from "styled-components";

interface WrapperProps {
  type?: "default" | "column" | "spaceBetween" | "alignCenter" | "card";
  children: React.ReactNode;
  marginTop?: string;
  marginBottom?: string;
  gap?: string;
  padding?: string;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  borderRadius?: string;
  border?: string;
}

const Wrapper = ({
  type = "default",
  children,
  marginTop,
  marginBottom,
  padding,
  gap,
  justifyContent,
  alignItems,
  borderRadius,
  border,
}: WrapperProps) => {
  return (
    <StyledWrapper
      $type={type}
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      $padding={padding}
      $gap={gap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $borderRadius={borderRadius}
      $border={border}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;

const StyledWrapper = styled.div<{
  $type: "default" | "column" | "spaceBetween" | "alignCenter" | "card";
  $marginTop?: string;
  $marginBottom?: string;
  $padding?: string;
  $gap?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $borderRadius?: string;
  $border?: string;
}>`
  width: 100%;
  display: flex;

  ${({
    $marginTop,
    $marginBottom,
    $padding,
    $gap,
    $justifyContent,
    $alignItems,
  }) => css`
    margin-top: ${$marginTop || "0"};
    margin-bottom: ${$marginBottom || "0"};
    padding: ${$padding || "0"};
    gap: ${$gap || "0"};
    justify-content: ${$justifyContent || "flex-start"};
    align-items: ${$alignItems || "flex-start"};
  `}

  ${({ $type }) => {
    switch ($type) {
      case "column":
        return css`
          flex-direction: column;
        `;
      case "spaceBetween":
        return css`
          justify-content: space-between;
          align-items: center;
        `;
      case "alignCenter":
        return css`
          justify-content: flex-start;
          align-items: center;
        `;
      case "card":
        return css`
          flex-direction: column;
          background: var(--white);
          border-radius: var(--radius-md, 12px);
          border: 1px solid var(--border-gray300);
          padding: 1rem;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        `;
      default:
        return "";
    }
  }}

  ${({ $borderRadius, $border }) => css`
    border-radius: ${$borderRadius || "0"};
    border: ${$border || "none"};
  `}
`;
