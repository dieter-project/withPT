import React, { SetStateAction } from "react";
import { CloseBtn } from "@/styles/TrainerButton";
import { Input } from "@/styles/Input";
import Image from "next/image";
import { styled } from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

const ModalInnerWrap = styled.div`
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

const ModalCloseXButton = styled(CloseBtn)`
  position: absolute;
  top: 1%;
  right: 2%;
`;

const ModalDimmed = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalHeader = styled.header`
  text-align: center;
  font-size: var(--font-l);
  font-weight: 700;
`;

const ModalBody = styled.div``;

const ModalContent = styled.div`
  margin: 3vh 0 2vh 0;
`;

interface ModalProps {
  title: string;
  isOpenModal: boolean;
  onCloseModal: () => void;
  content?: React.ReactNode;
  showModalContent: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TrainerModalLayout = ({
  isOpenModal,
  onCloseModal,
  title,
  content,
  showModalContent,
  isModalOpen,
  setIsModalOpen,
}: ModalProps) => {
  if (!isModalOpen) return null;

  return (
    <ModalContainer>
      <ModalInnerWrap style={{ bottom: showModalContent ? "-30%" : "-100%" }}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseXButton onClick={() => setIsModalOpen(false)} />
        <ModalBody>
          <ModalContent>{content}</ModalContent>
        </ModalBody>
      </ModalInnerWrap>
      <ModalDimmed></ModalDimmed>
    </ModalContainer>
  );
};
