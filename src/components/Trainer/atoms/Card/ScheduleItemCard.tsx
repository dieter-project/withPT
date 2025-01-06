import React from "react";
import styled from "styled-components";
import { Typography } from "@/components/trainer/atoms/Typography/TypoGraphy.styles";
import CloseXButton from "@/components/trainer/atoms/Button/CloseXButton";

interface ScheduleItemCardProps {
  day: string;
  time: string;
  onDelete: () => void;
}

export const ScheduleItemCard = ({
  day,
  time,
  onDelete,
}: ScheduleItemCardProps) => {
  return (
    <CardWrapper>
      <div>
        <Typography variant="heading2">{day}</Typography>
      </div>
      <div>
        <Typography variant="heading2">{time}</Typography>
      </div>
      <CloseXButton onClick={onDelete} top="10%" right="3%" />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: calc(50% - 0.5rem);
  border: 1px solid var(--border-darkgray);
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
