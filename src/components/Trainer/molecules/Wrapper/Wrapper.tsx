import React from "react";
import styled, { css } from "styled-components";

interface WrapperProps {
  type?:
    | "default"
    | "columnDefault"
    | "columnCenter"
    | "spaceBetween"
    | "flexStartCenter"
    | "card"
    | "block";
  children: React.ReactNode;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  gap?: string;
  borderRadius?: string;
  border?: string;
  width?: string;
  noWrap?: boolean;
}

const Wrapper = ({
  type = "default",
  children,
  marginTop,
  marginBottom,
  padding,
  gap,
  borderRadius,
  border,
  width = "100%",
  noWrap = true,
}: WrapperProps) => {
  return (
    <StyledWrapper
      $type={type}
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      $padding={padding}
      $gap={gap}
      $borderRadius={borderRadius}
      $border={border}
      $width={width}
      $noWrap={noWrap}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;

const StyledWrapper = styled.div<{
  $type:
    | "default"
    | "columnDefault"
    | "columnCenter"
    | "spaceBetween"
    | "flexStartCenter"
    | "card"
    | "block";
  $marginTop?: string;
  $marginBottom?: string;
  $padding?: string;
  $gap?: string;
  $borderRadius?: string;
  $border?: string;
  $width?: string;
  $noWrap?: boolean;
}>`
  display: ${({ $type }) => ($type === "block" ? "block" : "flex")};
  flex-wrap: ${({ $noWrap, $type }) =>
    $type === "block" || $noWrap ? "nowrap" : "wrap"};
  width: ${({ $width }) => $width || "100%"};

  /* 공통 스타일 */
  ${({ $marginTop, $marginBottom, $padding, $gap }) => css`
    margin-top: ${$marginTop || "0"};
    margin-bottom: ${$marginBottom || "0"};
    padding: ${$padding || "0"};
    gap: ${$gap || "0"};
  `}

  ${({ $type }) => {
    switch ($type) {
      case "columnDefault":
        return css`
          flex-direction: column;
        `;
      case "columnCenter":
        return css`
          flex-direction: column;
          align-items: center;
        `;
      case "spaceBetween":
        return css`
          justify-content: space-between;
          align-items: center;
        `;
      case "flexStartCenter":
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
      case "block":
        return css`
          display: block;
        `;
      default:
        return css`
          justify-content: flex-start;
          align-items: flex-start;
        `;
    }
  }}

  ${({ $borderRadius, $border }) => css`
    border-radius: ${$borderRadius || "0"};
    border: ${$border || "none"};
  `}
`;
