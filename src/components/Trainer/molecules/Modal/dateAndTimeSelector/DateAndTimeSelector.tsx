import React from "react";
import styled from "styled-components";
import Wrapper from "@/components/trainer/molecules/wrapper/Wrapper";
import { Typography } from "@/components/trainer/atoms/typography/TypoGraphy.styles";
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
      <Wrapper type="spaceBetween" marginBottom="1rem" gap="1rem">
        <Typography variant="heading2" fw={600}>
          날짜
        </Typography>
        <Wrapper type="spaceBetween" gap="0.5rem">
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
        </Wrapper>
      </Wrapper>
      <Wrapper type="spaceBetween" marginBottom="0.75rem" gap="1.5rem">
        <Wrapper type="spaceBetween" gap="1rem">
          <Typography variant="heading2" fw={600}>
            시작
          </Typography>
          <TimeDropdown
            selectedTime={selectedStartTime ?? ""}
            startTime="6"
            endTime="24"
            placeholderTime="6:00"
            onTimeChange={handleStartTimeChange}
          ></TimeDropdown>
        </Wrapper>
        <Wrapper type="spaceBetween" gap="1rem">
          <Typography variant="heading2">종료</Typography>
          <TimeDropdown
            selectedTime={selectedEndTime ?? ""}
            startTime="6"
            endTime="24"
            placeholderTime="24:00"
            onTimeChange={handleEndTimeChange}
          ></TimeDropdown>
        </Wrapper>
      </Wrapper>
    </ul>
  );
};

const DaySelector = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 2.375rem;
  height: 2.25rem;
  border: 1px solid var(--border-darkgray);
  border-radius: 0.5rem;
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
