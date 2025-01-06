import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";
import { Typography } from "@/components/trainer/atoms/Typography/TypoGraphy.styles";
import { ScheduleItemCard } from "@/components/trainer/atoms/Card/ScheduleItemCard";

interface ScheduleItem {
  days: string[];
  startTime: string;
  endTime: string;
}

interface CenterScheduleListProps {
  schedules: ScheduleItem[];
  onDeleteSchedule?: (index: number) => void;
}

export const CenterScheduleItemLists = ({
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
      <div>
        {schedules && (
          <Typography variant="heading2" fw={600}>
            일정
          </Typography>
        )}
      </div>
      <Wrapper noWrap={false} type="spaceBetween" gap="1rem">
        {schedules.map((schedule, index) => (
          <ScheduleItemCard
            key={index}
            day={formatDays(schedule.days)}
            time={`${schedule.startTime} ~ ${schedule.endTime}`}
            onDelete={() => {
              if (onDeleteSchedule) {
                onDeleteSchedule(index);
              }
            }}
          />
        ))}
      </Wrapper>
    </>
  );
};
