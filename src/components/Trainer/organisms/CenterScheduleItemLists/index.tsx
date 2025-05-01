import Wrapper from "@/components/trainer/molecules/wrapper/Wrapper";
import { Typography } from "@/components/trainer/atoms/typography/TypoGraphy.styles";
import { ScheduleItemCard } from "@/components/trainer/atoms/card/ScheduleItemCard";
import { formatDays } from "@/utils/trainer/dateUtil";

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
