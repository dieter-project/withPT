import styled from "styled-components";

interface SpacingStyleProps {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  fw?: "true" | "false";
  color?: string;
}

export const Spacer = styled.div<SpacingStyleProps>`
  margin-top: ${({ mt }) => (mt !== undefined ? `${mt}px` : "0")};
  margin-right: ${({ mr }) => (mr !== undefined ? `${mr}px` : "0")};
  margin-bottom: ${({ mb }) => (mb !== undefined ? `${mb}px` : "0")};
  margin-left: ${({ ml }) => (ml !== undefined ? `${ml}px` : "0")};
  padding-top: ${({ pt }) => (pt !== undefined ? `${pt}px` : "0")};
  padding-right: ${({ pr }) => (pr !== undefined ? `${pr}px` : "0")};
  padding-bottom: ${({ pb }) => (pb !== undefined ? `${pb}px` : "0")};
  padding-left: ${({ pl }) => (pl !== undefined ? `${pl}px` : "0")};

  width: ${({ fw }) => (fw ? "100%" : "auto")};
  background: ${({ color }) => color};
`;
