import styled, { css } from "styled-components";
import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";

interface ScheduleItem {
  days: string[];
  startTime: string;
  endTime: string;
}

interface CenterScheduleListProps {
  schedules: ScheduleItem[];
  variant?: "list" | "grid";
  onDeleteSchedule?: (index: number) => void;
}

export const CenterScheduleList = ({
  schedules,
  variant = "list",
  onDeleteSchedule,
}: CenterScheduleListProps) => {
  if (!schedules || schedules.length === 0) return null;

  const dayOrder = ["월", "화", "수", "목", "금", "토", "일"];

  const formatDays = (days: string[]) => {
    const sortedDays = [...days].sort(
      (a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b),
    );
    return sortedDays.join("/");
  };

  return (
    <Wrapper justifyContent="space-between" gap="2rem">
      {schedules.map((schedule, index) => (
        <StyledScheduleItem key={index} $variant={variant}>
          <span>{formatDays(schedule.days)}</span>
          <span>{`${schedule.startTime} ~ ${schedule.endTime}`}</span>
          <DeleteButton
            $variant={variant}
            onClick={() => onDeleteSchedule?.(index)}
          >
            <Icon name="closeX" size={18} />
          </DeleteButton>
        </StyledScheduleItem>
      ))}
    </Wrapper>
  );
};

const StyledScheduleItem = styled.div<{ $variant: "list" | "grid" }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: white;

  ${({ $variant }) =>
    $variant === "list"
      ? css`
          padding: 8px 0;
          width: 100%;

          &:not(:last-child) {
            border-bottom: 1px solid var(--gray-100);
          }
        `
      : css`
          flex-direction: column;
          width: calc(50% - 6px);
          border-radius: 8px;
          padding: 16px;
          gap: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

          > span {
            width: 100%;
            text-align: left;
          }
        `}
`;

const DeleteButton = styled.button<{ $variant: "list" | "grid" }>`
  background: none;
  border: none;
  padding: 4px;
  color: var(--gray-400);

  ${({ $variant }) =>
    $variant === "list"
      ? css`
          position: absolute;
          right: 0;
        `
      : css`
          position: absolute;
          right: 8px;
          top: 8px;
        `}
`;
