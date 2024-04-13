import { styled } from "styled-components";
import Image from "next/image";

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const ModalWrap = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 20px;
  border-radius: 1rem 1rem 0 0;
  transition: 0.3s;
`;

export const ModalCloseXButton = styled(Image)`
  position: absolute;
  top: 1%;
  right: 2%;
`;

export const ModalDimmed = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalHeader = styled.header`
  text-align: center;
  font-size: var(--font-l);
  font-weight: 700;
`;

export const ModalBody = styled.div``;

export const ModalContent = styled.div`
  margin: 3vh 0 2vh 0;
`;
