import { Input } from "@/styles/Input";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { styled } from "styled-components";
import { ModalContainer, ModalTitle } from "@/styles/components/Modal";
import { DietRecord, DietRquestDate } from "@/types/member/record";
import { InputWrap, TimeModalWrap } from "./style";
import { Button } from "@/styles/Button";

interface ModalProps {
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
  time: string;
  handleChangeTime: (time: string) => void;
}

export const TimeModal = ({
  setDisplayModal,
  time,
  handleChangeTime,
}: ModalProps) => {
  const handleOnClose = () => {
    setDisplayModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChangeTime(e.target.value);
  };
    setDiet(prev => ({
      ...prev,
      dietTime: e.target.value
    }))
  }

  return (
    <ModalContainer>
      <div className="modal">
        <TimeModalWrap>
          <ModalTitle>시간 입력</ModalTitle>
          <div>
            <InputWrap>
              <input
                type="time"
                onChange={handleChange}
                min={"00:00"}
                max={"23:59"}
                value={time}
              />
              <div className="time-text">
                <div>시간</div>
                <div>분</div>
              </div>
            </InputWrap>
          </div>
          <div className="button-area">
            <Button $variant="primary" onClick={() => setDisplayModal(false)}>
              저장하기
            </Button>
          </div>
        </TimeModalWrap>
      </div>
      <div className={`overlay`} onClick={handleOnClose}></div>
    </ModalContainer>
  );
};
