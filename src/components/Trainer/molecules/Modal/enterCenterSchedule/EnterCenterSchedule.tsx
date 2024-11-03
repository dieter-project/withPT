import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { FlexWrapper } from "@/styles/Trainer/TrainerLayout";
import { Button } from "@/styles/Trainer/TrainerButton";
import { ModalContentTit } from "@/styles/Trainer/TrainerModal";
import { Signup3 } from "@/hooks/trainer/signup/useSignup";
import { useHandleCenterSchedule } from "@/hooks/trainer/modal/useEnterCenterSchedule";
import { generateTimeOptions } from "@/utils/Trainer/timeOptions";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { openModal } from "@/redux/reducers/trainer/modalSlice";
import { ModalErrorMessage } from "@/styles/Trainer/TrainerModal";
import { SelectedScheduleList } from "@/components/trainer/molecules/Modal/enterCenterSchedule/SelectedScheduleList";

export const EnterCenterSchedule: React.FC<EnterCenterScheduleProps> = () => {
  const {
    selectedDays,
    selectedStartTime,
    selectedEndTime,
    selectedSchedules,
    handleDayClick,
    handleStartTimeChange,
    handleEndTimeChange,
    handleConfirm,
    timeOptions,
    days,
    errorMessage,
  } = useHandleCenterSchedule();

  return (
    <>
      <ul>
        <FlexWrapper>
          <ModalSubTitle>날짜</ModalSubTitle>
          {days.map((day, index) => (
            <DaySelector
              key={index}
              className={selectedDays.includes(day) ? "selected" : ""}
            >
              <DaySelectorInput
                type="checkbox"
                onChange={() => handleDayClick(day)}
              />
              {day}
            </DaySelector>
          ))}
        </FlexWrapper>
        <FlexWrapper>
          <ModalSubTitle>시작</ModalSubTitle>
          <TimeSelect
            value={selectedStartTime}
            onChange={e => handleStartTimeChange(e.target.value)}
          >
            {timeOptions.map((timeOption, index) => (
              <option key={index} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </TimeSelect>
          <ModalSubTitle>종료</ModalSubTitle>
          <TimeSelect
            value={selectedEndTime}
            onChange={e => handleEndTimeChange(e.target.value)}
          >
            {timeOptions.map((timeOption, index) => (
              <option key={index} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </TimeSelect>
        </FlexWrapper>
      </ul>
      <div>
        <EventButton
          event={() => handleConfirm()}
          isIconVisible={true}
          iconType="plusGray"
          eventButtonType="gray"
          height="3rem"
          justifyContent="center"
        />
        <ModalErrorMessage>{errorMessage}</ModalErrorMessage>
      </div>
      <SelectedScheduleList selectedSchedules={selectedSchedules} />
      <Button
        $variant={selectedSchedules.length === 0 ? "ghost" : "primary"}
        //   onClick={modalClose}
        disabled={selectedSchedules.length === 0}
      >
        저장하기
      </Button>
    </>
  );
};

const ModalSubTitle = styled.h4`
  width: 3rem;
`;

const DaySelector = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 2.375rem;
  height: 2.25rem;
  border: 1px solid var(--border-darkgray);
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  font-size: var(--font-m);
  cursor: pointer;
  &.selected {
    background-color: var(--primary);
  }
`;

const DaySelectorInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  padding: 0;
  margin: 0;
  &:checked + label {
    background-color: white;
  }
`;

const TimeSelect = styled.select`
  background-color: var(--purple50);
  color: var(--font-gray400);
  margin-right: 1.81rem;
  padding: 0.62rem;
`;

const ScheduleWrap = styled.div`
  padding-bottom: 10rem;
`;

const SelectedItem = styled.div`
  display: inline-block;
  width: 47.5%;
  margin-right: 1vh;
  border: 1px solid var(--border-darkgray);
  border-radius: 0.625rem;
  padding: 0.5rem 0.88rem;
  margin-bottom: 1vh;
`;

const SelectedItemDay = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedItemTime = styled.div``;

const RegisterSchedule = styled.button`
  width: 100%;
  border: 1px solid var(--font-gray400);
  border-radius: 0.5rem;
  line-height: 3rem;
  font-size: var(--font-xxxl);
`;

const SelectedScheduleWrap = styled.div`
  margin-top: 1rem;
`;
