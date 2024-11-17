import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "@/styles/Trainer/TrainerLayout";
import { TimeDropdown } from "@/components/trainer/atoms/Select/TimeDropdown";

interface DateAndTimeSelectorProps {
  days: string[];
  selectedDays: string[];
  handleDayClick: (day: string) => void;
  selectedStartTime: string | null;
  selectedEndTime: string | null;
  handleStartTimeChange: (time: string) => void;
  handleEndTimeChange: (time: string) => void;
}

export const DateAndTimeSelector: React.FC<DateAndTimeSelectorProps> = ({
  days,
  selectedDays,
  handleDayClick,
  selectedStartTime,
  selectedEndTime,
  handleStartTimeChange,
  handleEndTimeChange,
}) => {
  return (
    <ul>
      <FlexWrapper>
        <ModalSubTitle>날짜</ModalSubTitle>
        {days?.map((day, index) => (
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
        <TimeDropdown
          selectedTime={selectedStartTime ?? ""}
          startTime="6"
          endTime="24"
          placeholderTime="6:00"
          onTimeChange={handleStartTimeChange}
        ></TimeDropdown>
        <ModalSubTitle>종료</ModalSubTitle>
        <TimeDropdown
          selectedTime={selectedEndTime ?? ""}
          startTime="6"
          endTime="24"
          placeholderTime="24:00"
          onTimeChange={handleEndTimeChange}
        ></TimeDropdown>
      </FlexWrapper>
    </ul>
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
