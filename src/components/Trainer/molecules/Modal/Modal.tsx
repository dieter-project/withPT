import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useModalEffect } from "@/hooks/trainer/modal/useModalEffect";
import CloseXButton from "@/components/trainer/atoms/Button/CloseXButton";
import ReactDOM from "react-dom";

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: var(--z-index-modal);
`;

const ModalInnerWrap = styled.div.attrs<{ $showModalContent: boolean }>(
  ({ $showModalContent }) => ({
    style: {
      transform: `translateY(${$showModalContent ? "0" : "100%"})`,
    },
  }),
)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  transition: transform 0.3s ease-out;
  bottom: 0;
`;

const ModalDimmed = styled.div.attrs<{ $showModalContent: boolean }>(
  ({ $showModalContent }) => ({
    style: {
      opacity: $showModalContent ? "1" : "0",
      visibility: $showModalContent ? "visible" : "hidden",
    },
  }),
)`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  transition: all 0.3s ease-out;
`;

const ModalHeader = styled.div`
  position: relative;
  text-align: center;
  font-size: var(--font-l);
  font-weight: 700;
`;

const ModalContent = styled.div`
  margin: 3vh 0 2vh 0;
`;

interface ModalProps {
  title: string;
  content: React.ReactNode;
  overlapError?: boolean;
  onClose?: () => void;
}

export const Modal = ({ title, content, onClose }: ModalProps) => {
  const showModalContent = useModalEffect(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalContainer>
        <ModalInnerWrap $showModalContent={showModalContent}>
          <ModalHeader>
            {title}
            <CloseXButton onClick={onClose} />
          </ModalHeader>
          <div>
            <ModalContent>
              {React.useMemo(() => content, [content])}
            </ModalContent>
          </div>
        </ModalInnerWrap>
        <ModalDimmed
          $showModalContent={showModalContent}
          onClick={onClose}
        ></ModalDimmed>
      </ModalContainer>
    </>,
    document.getElementById("modal-root") as HTMLElement,
  );
};

// modal-root가 없을 경우
let modalRoot = document.getElementById("modal-root");
if (!modalRoot) {
  modalRoot = document.createElement("div");
  modalRoot.id = "modal-root";
  document.body.appendChild(modalRoot);
}
