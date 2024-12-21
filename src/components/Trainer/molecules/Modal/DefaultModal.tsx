import React from "react";
import styled from "styled-components";
import { DefaultModalProps } from "@/types/trainer/modal";
import CloseIcon from "/public/svgs/icon_close.svg";

export const DefaultModalComponent = ({
  title,
  content,
  onClose,
}: DefaultModalProps) => (
  <ModalOverlay>
    <ModalContainer>
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 95%;
  background: white;
  border-radius: 16px 16px 0 0;
  animation: slideUp 0.3s ease-out;

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
