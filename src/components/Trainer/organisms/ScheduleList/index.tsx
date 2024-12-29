import React from "react";
import styled, { css } from "styled-components";
import styled from "styled-components";
import { ScheduleItem } from "../../molecules/ScheduleItem";

interface ScheduleListProps {
  variant?: "list" | "grid";
  schedules: Array<{
    days: string;
    startTime: string;
    endTime: string;
  }>;
  onDeleteSchedule: (index: number) => void;
}

export const ScheduleList = ({
  variant = "list",
  schedules,
  onDeleteSchedule,
}: ScheduleListProps) => {
  return (
    <Container $variant={variant}>
      {schedules.map((schedule, index) => (
        <ScheduleItem
          key={index}
          variant={variant}
          days={schedule.days}
          startTime={schedule.startTime}
          endTime={schedule.endTime}
          onDelete={() => onDeleteSchedule(index)}
        />
      ))}
    </Container>
  );
};

const Container = styled.div<{
  $variant: "list" | "grid";
}>`
  width: 100%;

  ${({ $variant }) =>
    $variant === "grid" &&
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    `}
`;
