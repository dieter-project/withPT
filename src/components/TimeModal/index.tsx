import { Button } from "@/styles/TrainerButton";
import { Input } from "@/styles/Input";
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { styled } from "styled-components";
import { ModalContainer, ModalTitle } from "@/styles/components/Modal";
import { MealRecord } from "@/types/member/record";
import { InputWrap, TimeModalWrap } from "./style";


interface ModalProps {
  displayModal: boolean;
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
  diet: MealRecord;
  setDiet: React.Dispatch<React.SetStateAction<MealRecord>>;
}

export const TimeModal = ({
  displayModal,
  setDisplayModal,
  diet,
  setDiet
}: ModalProps) => {
  const [mealTime, setMealTime] = useState("")

  const handleOnClose = () => {
    setDisplayModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('e: ', e);
    setDiet(prev => ({
      ...prev,
      mealTime: e.target.value
    }))

  }


  return (
    <ModalContainer>
      <div className="modal">
        <TimeModalWrap>
          <ModalTitle>시간 입력</ModalTitle>
          <div>
            <InputWrap>
              <input type="time" onChange={handleChange} min={"00:00"} max={"23:59"} value={diet.mealTime} />
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
