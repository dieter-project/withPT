import React from "react";
import styled from "styled-components";
import { DefaultModalProps } from "@/types/trainer/modal";
import CloseIcon from "/public/svgs/icon_close.svg";

export const DefaultModalComponent = ({
  title,
  content,
  onClose,
  zIndex,
  type = "default",
}: DefaultModalProps) => (
  <ModalOverlay zIndex={zIndex} type={type}>
    <ModalContainer zIndex={zIndex} type={type}>
      <ModalHeader>
        {title}
        <CloseButton onClick={onClose}>
          <CloseIcon width="24" height="24" />
        </CloseButton>
      </ModalHeader>
      <ModalContent>{content}</ModalContent>
    </ModalContainer>
  </ModalOverlay>
);

const ModalOverlay = styled.div<{ zIndex: number; type: "default" | "alert" }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props =>
    props.type === "alert" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.5)"};
  z-index: ${props => props.zIndex};
`;

const ModalContainer = styled.div<{
  zIndex: number;
  type: "default" | "alert";
}>`
  position: fixed;
  ${props =>
    props.type === "alert"
      ? `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 320px;
    background: white;
    border-radius: 16px;
  `
      : `
    bottom: 0;
    left: 0;
    width: 100%;
    height: 95%;
    background: white;
    border-radius: 16px 16px 0 0;
    transform: translateY(0);
    animation: slideUp 0.3s ease-out;
  `}
  z-index: ${props => props.zIndex + 1};

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid var(--gray-100);
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalContent = styled.div`
  padding: 20px;
  height: calc(100% - 60px);
  overflow-y: auto;
`;
