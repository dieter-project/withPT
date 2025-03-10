import React from "react";
import { ScheduleListCard } from "@/components/trainer/atoms/Card/ScheduleListCard";

interface ScheduleListProps {
  schedules: Array<{
    days: string;
    startTime: string;
    endTime: string;
  }>;
  onDeleteSchedule: (index: number) => void;
}

export const TotalCenterSchedules = ({
  schedules,
  onDeleteSchedule,
}: ScheduleListProps) => {
  return (
    <>
      {schedules.map((schedule, index) => (
        <ScheduleListCard
          key={index}
          days={schedule.days}
          startTime={schedule.startTime}
          endTime={schedule.endTime}
          onDelete={() => onDeleteSchedule(index)}
        />
      ))}
    </>
  );
};
