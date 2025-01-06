import React from "react";
import styled from "styled-components";
import { Typography } from "@/components/trainer/atoms/Typography/TypoGraphy.styles";
import CloseXButton from "@/components/trainer/atoms/Button/CloseXButton";

interface ScheduleListCardProps {
  days: string;
  startTime: string;
  endTime: string;
  onDelete: () => void;
}

export const ScheduleListCard = ({
  days,
  startTime,
  endTime,
  onDelete,
}: ScheduleListCardProps) => {
  return (
    <CardWrapper>
      <div>
        <Typography variant="heading2">{days}</Typography>
      </div>
      <div>
        <Typography variant="heading2">
          {startTime} ~ {endTime}
        </Typography>
      </div>
      <CloseXButton onClick={onDelete} top="10%" right="3%" />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  border: 1px solid var(--border-darkgray);
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
