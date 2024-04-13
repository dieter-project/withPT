import { Button } from "@/styles/TrainerButton";
import { Input } from "@/styles/Input";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { styled } from "styled-components";

type setStateProps = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const TimeModalContainer = styled.div`
  position: fixed;
  bottom: -150vh;
  background-color: var(--white);
  width: 100%;
  left: 0;
  padding: 0 12px 12px;
  transition: bottom 0.3s ease-out;
  z-index: 150;

  .overlay {
    background-color: rgba(0, 0, 0, 0.55);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: none;
    z-index: 5;
  }

  .overlay.show {
    display: block;
  }

  .modal {
    width: 100%;
    height: 60vh;
    position: fixed;
    bottom: -150vh;
    left: 0;
    background-color: var(--white);
    padding: 0.75rem 0.75rem;
    transition: bottom 0.3s ease-out;
    border-radius: 0.5rem 0.5rem 0 0;
    z-index: 10;
  }

  .modal.show {
    bottom: 0;
    transition: bottom 0.3s ease-out;
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;

  input[type="time"] {
    width: 100%;
    height: 3.5rem;
    text-align: center;
    border: none;
    padding: 0.5rem;
    font-size: 2rem;
  }

  input[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
  }

  input[type="time"]::-webkit-datetime-edit-hour-field {
    border-bottom: 1px solid var(--primary);
    padding: 0.3rem 1.12rem;
  }

  input[type="time"]::-webkit-datetime-edit-minute-field {
    border-bottom: 1px solid var(--primary);
    padding: 0.3rem 1.12rem;
  }

  input[type="time"]::-webkit-datetime-edit-ampm-field {
    display: none;
  }

  input[type="time"]::-webkit-clear-button {
    display: none;
  }

  input[type="time"]::-webkit-inner-spin-button {
    display: none;
  }

  .time-text {
    display: flex;
    gap: 3rem;
    margin-top: 0.5rem;
    font-size: var(--font-s);
    color: var(--font-secondary);
  }
`;

const TimeModalWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  > div:first-child {
    font-weight: var(--font-semibold);
    margin-top: 1.5rem;
  }

  .button-area {
    position: absolute;
    left: 0;
    bottom: 2.5rem;
    width: 100%;
  }
`;

interface ModalProps {
  displayModal: boolean;
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
  slideUpModal: boolean;
  setSlideUpModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TimeModal = ({
  displayModal,
  setDisplayModal,
  slideUpModal,
  setSlideUpModal,
}: ModalProps) => {
  useEffect(() => {
    if (displayModal) {
      setTimeout(() => {
        setSlideUpModal(true);
      }, 10);
    } else {
      setSlideUpModal(false);
    }
  }, [displayModal]);

  const handleOnClose = () => {
    setDisplayModal(false);
    setSlideUpModal(false);
  };

  return (
    <TimeModalContainer>
      <div className="modal" style={{ bottom: slideUpModal ? "0" : "-100%" }}>
        <TimeModalWrap>
          <div>시간 입력</div>
          <div>
            <InputWrap>
              <input type="time" />
              <div className="time-text">
                <div>시간</div>
                <div>분</div>
              </div>
            </InputWrap>
          </div>
          <div className="button-area">
            <Button variant="primary">저장하기</Button>
          </div>
        </TimeModalWrap>
      </div>
      <div
        className={`overlay ${slideUpModal ? "show" : ""}`}
        onClick={handleOnClose}
      ></div>
    </TimeModalContainer>
  );
};
