import React from "react";
import styled from "styled-components";
import { Typography } from "@/components/trainer/atoms/typography/TypoGraphy.styles";
import Wrapper from "@/components/trainer/molecules/wrapper/Wrapper";
import { formatDays } from "@/utils/Trainer/dateUtil";
import CloseXButton from "@/components/trainer/atoms/button/CloseXButton";

interface ScheduleListCardProps {
  days: string[];
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
    <div style={{ position: "relative" }}>
      <Wrapper
        type="flexStartCenter"
        border="1px solid var(--border-darkgray)"
        borderRadius="0.5rem"
        padding="1rem"
        gap="0.5rem"
        marginBottom="1rem"
      >
        <div style={{ width: "50%" }}>
          <Typography ls={1} variant="heading2">
            {formatDays(days)}
          </Typography>
        </div>
        <div>
          <Typography variant="heading2">
            {startTime} ~ {endTime}
          </Typography>
        </div>
        <CloseXButton onClick={onDelete} size="1rem" top="12%" right="3%" />
      </Wrapper>
    </div>
  );
};
