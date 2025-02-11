import styled from "styled-components";

interface CloseXButtonProps {
  top?: string;
  right?: string;
  size?: string;
  onClick?: () => void;
}

const CloseXButton = styled.button<CloseXButtonProps>`
  position: absolute;
  top: ${({ top }) => top || "1%"};
  right: ${({ right }) => right || "2%"};
  width: ${({ size }) => size || "0.795rem"};
  height: ${({ size }) => size || "0.795rem"};
  background: url("/svgs/icon_close.svg") no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

export default CloseXButton;
