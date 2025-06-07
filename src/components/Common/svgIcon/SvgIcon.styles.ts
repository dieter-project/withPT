import styled from "styled-components";

export const SvgIcon = styled.span<{
  $size?: number | string;
  $color?: string;
  $pd?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => (typeof $size === "number" ? `${$size}px` : $size)};
  height: ${({ $size }) => (typeof $size === "number" ? `${$size}px` : $size)};
  color: ${({ $color }) => $color || "inherit"};
  padding: ${({ $pd }) => $pd || "0"};

  svg {
    width: 100%;
    height: 100%;
  }
`;
