import React from "react";
import styled from "styled-components";
import { AlertModalProps } from "@/types/trainer/modal";

export const AlertModalComponent = ({ message, onClose }: AlertModalProps) => (
  <AlertOverlay>
    <AlertContainer>
      <AlertTitle>알림</AlertTitle>
      <AlertMessage>{message}</AlertMessage>
      <AlertButton onClick={onClose}>확인</AlertButton>
    </AlertContainer>
  </AlertOverlay>
);

const AlertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

const AlertContainer = styled.div`
  width: 80%;
  max-width: 320px;
  background: white;
  border-radius: 16px;
  padding: 24px;
  animation: slideUp 0.2s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const AlertTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const AlertMessage = styled.p`
  font-size: 16px;
  color: var(--font-secondary);
  word-break: keep-all;
  margin-bottom: 24px;
`;

const AlertButton = styled.button`
  width: 100%;
  height: 48px;
  background: var(--primary);
  color: white;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
