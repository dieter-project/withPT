import React from "react";
import { styled } from "styled-components";
import { Button } from "@/styles/TrainerButton";
import { Signup3 } from "@/hooks/trainer/signup/signup";
import { generateTimeOptions } from "@/utils/Trainer/timeOptions";

const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`;

const ModalContentTit = styled.div`
  margin-right: 1rem;
`;

const CategoryWrap = styled.div``;

const ModalFormLabel = styled.label`
  width: 3rem;
  padding: 0.5rem 0.6rem;
  border: 1px solid var(--border-darkgray);
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  font-size: var(--font-m);
  cursor: pointer;
  /* 선택된 label에 대한 스타일 */
  &.selected {
    background-color: var(--primary);
  }
`;

const ModalCheckBox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border: none;
  padding: 0;
  margin: 0;

  /* checkbox 선택 시 배경색 변경 */
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

const ScheduleWrap = styled.div``;

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

export const EnterCenterSchedule: React.FC<EnterCenterScheduleProps> = () => {
  const {
    selectedDays,
    setSelectedDays,
    selectedStartTime,
    setSelectedStartTime,
    selectedEndTime,
    setSelectedEndTime,
    selectedSchedules,
    setSelectedSchedules,
    overlapError,
    setOverlapError,
    allSchedules,
    setAllSchedules,
  } = Signup3();

  const handleDayClick = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      const updatedDays = [...selectedDays, day].sort((a, b) => {
        const daysOrder = ["월", "화", "수", "목", "금", "토", "일"];
        return daysOrder.indexOf(a) - daysOrder.indexOf(b);
      });
      setSelectedDays(updatedDays);
    }
  };

  const handleStartTimeChange = (time: string) => {
    setSelectedStartTime(time);
  };

  const handleEndTimeChange = (time: string) => {
    setSelectedEndTime(time);
  };

  const timeOptions = generateTimeOptions();

  const days = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <>
      <FlexWrap>
        <ModalContentTit>날짜</ModalContentTit>
        <CategoryWrap>
          {days.map((day, index) => (
            <ModalFormLabel
              key={index}
              className={selectedDays.includes(day) ? "selected" : ""}
            >
              <ModalCheckBox
                type="checkbox"
                onChange={() => handleDayClick(day)}
              />
              {day}
            </ModalFormLabel>
          ))}
        </CategoryWrap>
      </FlexWrap>
      <FlexWrap>
        <ModalContentTit>시작</ModalContentTit>
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
        <ModalContentTit>종료</ModalContentTit>
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
      </FlexWrap>
      <div>
        <RegisterSchedule
          // onClick={handleConfirm}
          disabled={
            selectedDays.length === 0 || !selectedStartTime || !selectedEndTime
          }
        >
          +
        </RegisterSchedule>
      </div>
      <SelectedScheduleWrap>
        <div>
          <ModalContentTit>일정</ModalContentTit>
        </div>
        <div style={{ paddingBottom: "10rem" }}>
          <ScheduleWrap>
            {selectedSchedules.map((schedule, index) => (
              <SelectedItem key={index}>
                <SelectedItemDay>
                  <span>{schedule.days.join("/")}</span>
                </SelectedItemDay>
                <SelectedItemTime>
                  {schedule.startTime} ~ {schedule.endTime}
                </SelectedItemTime>
              </SelectedItem>
            ))}
          </ScheduleWrap>
        </div>
      </SelectedScheduleWrap>
      <Button
        $variant="primary"
        //   onClick={modalClose}
      >
        저장하기
      </Button>
    </>
  );
};
