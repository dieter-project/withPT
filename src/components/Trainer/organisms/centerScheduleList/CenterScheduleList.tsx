// components/trainer/CenterScheduleList.tsx
import styled from "styled-components";

interface ScheduleItem {
  days: string[];
  startTime: string;
  endTime: string;
}

interface CenterScheduleListProps {
  schedules: ScheduleItem[];
}

const ScheduleContainer = styled.div`
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  padding: 12px 16px;
`;

const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-100);
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  padding: 4px;
`;

export const CenterScheduleList = ({ schedules }: CenterScheduleListProps) => {
  if (!schedules || schedules.length === 0) return null;

  const dayOrder = ["월", "화", "수", "목", "금", "토", "일"];

  const formatDays = (days: string[]) => {
    const sortedDays = [...days].sort(
      (a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b),
    );
    return sortedDays.join("/");
  };

  return (
    <ScheduleContainer>
      {schedules.map((schedule, index) => (
        <ScheduleItem key={index}>
          <span>{formatDays(schedule.days)}</span>
          <span>{`${schedule.startTime} ~ ${schedule.endTime}`}</span>
          <DeleteButton>x</DeleteButton>
        </ScheduleItem>
      ))}
    </ScheduleContainer>
  );
};
