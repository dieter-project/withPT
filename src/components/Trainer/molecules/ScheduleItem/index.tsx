import React from "react";
import styled, { css } from "styled-components";

interface ScheduleItemProps {
  variant?: "list" | "grid";
  days: string;
  startTime: string;
  endTime: string;
  onDelete: () => void;
}

export const ScheduleItem = ({
  variant = "list",
  days,
  startTime,
  endTime,
  onDelete,
}: ScheduleItemProps) => {
  return (
    <StyledScheduleItem $variant={variant}>
      <Content>
        <Days>{days}</Days>
        <Time>{`${startTime} ~ ${endTime}`}</Time>
      </Content>
      <DeleteButton onClick={onDelete}>×</DeleteButton>
    </StyledScheduleItem>
  );
};

const StyledScheduleItem = styled.div<{
  $variant: "list" | "grid";
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  ${({ $variant }) =>
    $variant === "list"
      ? css`
          width: 100%;
          padding: 16px 20px;
          margin-bottom: 12px;

          &:last-child {
            margin-bottom: 0;
          }
        `
      : css`
          width: calc(50% - 8px);
          padding: 20px;
          margin-bottom: 16px;
        `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Days = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-900);
`;

const Time = styled.div`
  font-size: 16px;
  color: var(--gray-700);
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: var(--gray-400);
  cursor: pointer;
  padding: 4px 8px;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`;
