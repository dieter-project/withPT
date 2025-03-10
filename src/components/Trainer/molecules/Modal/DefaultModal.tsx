import React from "react";
import styled from "styled-components";
import { DefaultModalProps } from "@/types/trainer/modal";
import CloseXButton from "@/components/trainer/atoms/Button/CloseXButton";

export const DefaultModalComponent = ({
  title,
  content,
  onClose,
  zIndex = 1000,
  type = "default",
  onBackdropClick,
}: DefaultModalProps) => (
  <ModalOverlay $zIndex={zIndex} type={type} onClick={onBackdropClick}>
    <ModalContainer
      $zIndex={zIndex}
      type={type}
      onClick={e => e.stopPropagation()}
    >
      <ModalHeader>
        {title}
        <CloseButton onClick={onClose} size="1rem" top="35%" right="3%" />
      </ModalHeader>
      <ModalContent>{content}</ModalContent>
    </ModalContainer>
  </ModalOverlay>
);

const ModalOverlay = styled.div<{ $zIndex: number; type: "default" | "alert" }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ type }) =>
    type === "alert" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.5)"};
  z-index: ${({ $zIndex }) => $zIndex};
`;

const ModalContainer = styled.div<{
  $zIndex: number;
  type: "default" | "alert";
}>`
  position: fixed;
  ${({ type }) =>
    type === "alert"
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
    height: 100%;
    background: white;
    border-radius: 16px 16px 0 0;
    transform: translateY(0);
    animation: slideUp 0.3s ease-out;
  `}
  z-index: ${({ $zIndex }) => $zIndex + 1};

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

const CloseButton = styled(CloseXButton)`
  transform: translateY(-50%);
`;

const ModalContent = styled.div`
  padding: 0 1rem;
  height: calc(100% - 60px);
`;
