import React from "react";
import styled, { css } from "styled-components";

interface WrapperProps {
  type?: "default" | "column" | "spaceBetween";
  children: React.ReactNode;
  mt?: string;
  mb?: string;
  gap?: string;
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
  gap,
  jc,
  ai,
}: WrapperProps) => {
  return (
    <StyledWrapper $type={type} $mt={mt} $mb={mb} $gap={gap} $jc={jc} $ai={ai}>
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;

const StyledWrapper = styled.div<{
  $type: "default" | "column" | "spaceBetween";
  $mt?: string;
  $mb?: string;
  $jc?: string;
  $ai?: string;
  $gap?: string;
}>`
  width: 100%;
  ${({ $mt, $mb, $gap, $jc, $ai }) => css`
    margin-top: ${$mt || "0"};
    margin-bottom: ${$mb || "0"};
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

      default:
        return css`
          display: flex;
        `;
    }
  }}
`;
