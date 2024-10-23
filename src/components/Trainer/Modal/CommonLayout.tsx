import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseBtn } from "@/styles/TrainerButton";
import { styled } from "styled-components";
import { openModal, closeModal } from "@/redux/reducers/trainer/modalSlice";
import { useModalEffect } from "@/hooks/trainer/modal/useModalEffect";

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
`;

const ModalInnerWrap = styled.div.attrs<{ showModalContent: boolean }>(
  ({ showModalContent }) => ({
    style: {
      bottom: showModalContent ? "0" : "-100%",
    },
  }),
)`
  position: absolute;
  width: 100%;
  height: 95%;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  transition: 0.3s;
`;

const ModalDimmed = styled.div.attrs<{ showModalContent: boolean }>(
  ({ showModalContent }) => ({
    style: {
      opacity: showModalContent ? "1" : "0",
    },
  }),
)`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
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
  content: React.ReactNode;
}

export const TrainerModalLayout = ({ title, content }: ModalProps) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  if (!isModalOpen) return null;
  const showModalContent = useModalEffect(isModalOpen);
  return (
    <ModalContainer>
      <ModalInnerWrap showModalContent={showModalContent}>
        <ModalHeader>
          {title}
          <ModalCloseXButton onClick={() => dispatch(closeModal())} />
        </ModalHeader>
        <ModalBody>
          <ModalContent>{content}</ModalContent>
        </ModalBody>
      </ModalInnerWrap>
      <ModalDimmed showModalContent={showModalContent}></ModalDimmed>
    </ModalContainer>
  );
};
