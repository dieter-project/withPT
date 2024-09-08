import React from "react";
import { CloseBtn } from "@/styles/TrainerButton";
import { styled } from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
`;

const ModalInnerWrap = styled.div<{ showModalContent: boolean }>`
  position: absolute;
  bottom: ${({ showModalContent }) => (showModalContent ? "0" : "-100%")};
  width: 100%;
  max-height: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  transition: 0.3s;
`;

const ModalDimmed = styled.div<{ showModalContent: boolean }>`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${({ showModalContent }) => (showModalContent ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

const ModalHeader = styled.div`
  position: relative;
  text-align: center;
  font-size: var(--font-l);
  font-weight: 700;
`;

const ModalCloseXButton = styled(CloseBtn)`
  position: absolute;
  top: 1%;
  right: 2%;
`;

const ModalBody = styled.div``;

const ModalContent = styled.div`
  margin: 3vh 0 2vh 0;
`;

interface ModalProps {
  title: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content?: React.ReactNode;
  showModalContent: boolean;
}

export const TrainerModalLayout = ({
  title,
  isModalOpen,
  setIsModalOpen,
  content,
  showModalContent,
}: ModalProps) => {
  if (!isModalOpen) return null;

  return (
    <ModalContainer>
      <ModalInnerWrap showModalContent={showModalContent}>
        <ModalHeader>
          {title}
          <ModalCloseXButton onClick={() => setIsModalOpen(false)} />
        </ModalHeader>
        <ModalBody>
          <ModalContent>{content}</ModalContent>
        </ModalBody>
      </ModalInnerWrap>
      <ModalDimmed showModalContent={showModalContent}></ModalDimmed>
    </ModalContainer>
  );
};
