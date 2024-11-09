import React from "react";
import styled from "styled-components";

interface Schedule {
  days: string[];
  startTime: string;
  endTime: string;
}

interface SelectedScheduleListProps {
  selectedSchedules: Schedule[];
  handleRemoveSchedule: (index: number) => void;
}

export const SelectedScheduleList: React.FC<SelectedScheduleListProps> = ({
  selectedSchedules,
  handleRemoveSchedule,
}) => {
  return (
    <SelectedScheduleWrap>
      <h4>일정</h4>
      <ScheduleWrap>
        {selectedSchedules?.map((schedule, index) => (
          <SelectedItem key={index}>
            <SelectedItemDay>
              <span>{schedule.days.join("/")}</span>
            </SelectedItemDay>
            <div>
              {schedule.startTime} ~ {schedule.endTime}
            </div>
            <button onClick={() => handleRemoveSchedule(index)}>X</button>
          </SelectedItem>
        ))}
      </ScheduleWrap>
    </SelectedScheduleWrap>
  );
};

const SelectedScheduleWrap = styled.div`
  margin-top: 1rem;
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
