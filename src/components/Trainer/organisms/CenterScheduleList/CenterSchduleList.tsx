import styled, { css } from "styled-components";
import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";
import { Typography } from "../../atoms/Typography/TypoGraphy.styles";

interface ScheduleItem {
  days: string[];
  startTime: string;
  endTime: string;
}

interface CenterScheduleListProps {
  schedules: ScheduleItem[];
  onDeleteSchedule?: (index: number) => void;
}

export const CenterScheduleList = ({
  schedules,
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
    <>
      <div>{schedules && <Typography variant="heading2">일정</Typography>}</div>
      <Wrapper type="spaceBetween" gap="2rem">
        {schedules.map((schedule, index) => (
          <Wrapper
            width="50%"
            border="1px solid var(--border-darkgray)"
            key={index}
          >
            <div>{formatDays(schedule.days)}</div>
            <div>{`${schedule.startTime} ~ ${schedule.endTime}`}</div>
            <button onClick={() => onDeleteSchedule?.(index)}>
              <Icon name="closeX" size={18} />
            </button>
          </Wrapper>
        ))}
      </Wrapper>
    </>
  );
};
