import styled from "styled-components";

export const SvgIcon = styled.span<{
  $size?: number | string;
  $color?: string;
}>`
  width: ${({ $size }) => (typeof $size === "number" ? `${$size}px` : $size)};
  height: ${({ $size }) => (typeof $size === "number" ? `${$size}px` : $size)};
  color: ${({ $color }) => $color || "inherit"};
`;
