import { Button } from "@/styles/TrainerButton";
import { Input } from "@/styles/Input";
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { styled } from "styled-components";
import { ModalContainer, ModalTitle } from "@/styles/components/Modal";
import { DietRecord, DietRquestDate } from "@/types/member/record";
import { InputWrap, TimeModalWrap } from "./style";


interface ModalProps {
  displayModal: boolean;
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: React.Dispatch<React.SetStateAction<MealRecord>>;
}

export const TimeModal = ({
  displayModal,
  setDisplayModal,
  setFormData
}: ModalProps) => {
  const [dietTime, setDietTime] = useState("")

  const handleOnClose = () => {
    setDisplayModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
    console.log('e: ', e);
    setDiet(prev => ({
      ...prev,
      dietTime: e.target.value
    }))
=======
    setFormData(prev => ({ ...prev, mealTime: e.target.value }))
>>>>>>> parent of 78917c3 (FEAT: [회원] 기록 식단 기능 구현 및 api 연동)
  }


  return (
    <ModalContainer>
      <div className="modal">
        <TimeModalWrap>
          <ModalTitle>시간 입력</ModalTitle>
          <div>
            <InputWrap>
              <input type="time" onChange={handleChange} min={"00:00"} max={"23:59"} value={diet.dietTime} />
              <div className="time-text">
                <div>시간</div>
                <div>분</div>
              </div>
            </InputWrap>
          </div>
          <div className="button-area">
            <Button variant="primary" onClick={() => setDisplayModal(false)}>저장하기</Button>
          </div>
        </TimeModalWrap>
      </div>
      <div
        className={`overlay`}
        onClick={handleOnClose}
      ></div>
    </ModalContainer>
  );
};
