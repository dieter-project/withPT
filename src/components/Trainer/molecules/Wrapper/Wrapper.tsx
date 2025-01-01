import React from "react";
import styled, { css } from "styled-components";

interface WrapperProps {
  type?: "default" | "column" | "spaceBetween" | "alignCenter";
  children: React.ReactNode;
  mt?: string;
  mb?: string;
  gap?: string;
  pd?: string;
  jc?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  ai?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}

const Wrapper = ({
  type = "default",
  children,
  mt,
  mb,
  pd,
  gap,
  jc,
  ai,
}: WrapperProps) => {
  return (
    <StyledWrapper
      $type={type}
      $mt={mt}
      $mb={mb}
      $pd={pd}
      $gap={gap}
      $jc={jc}
      $ai={ai}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;

const StyledWrapper = styled.div<{
  $type: "default" | "column" | "spaceBetween" | "alignCenter";
  $mt?: string;
  $mb?: string;
  $pd?: string;
  $jc?: string;
  $ai?: string;
  $gap?: string;
}>`
  width: 100%;
  ${({ $mt, $mb, $pd, $gap, $jc, $ai }) => css`
    margin-top: ${$mt || "0"};
    margin-bottom: ${$mb || "0"};
    padding: ${$pd || "0"};
    gap: ${$gap || "0"};
    justify-content: ${$jc || "flex-start"};
    align-items: ${$ai || "flex-start"};
  `}

  ${({ $type }) => {
    switch ($type) {
      case "column":
        return css`
          display: flex;
          flex-direction: column;
        `;
      case "spaceBetween":
        return css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `;
      case "alignCenter":
        return css`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `;

      default:
        return css`
          display: flex;
        `;
    }
  }}
`;
