type ScheduleDate = Date | null;
export type ScheduleDates = ScheduleDate | [ScheduleDate, ScheduleDate];

export interface LessonInfos {
  lesson: {
    id: number;
    schedule: {
      date: string;
      time: {
        hour: number;
        minute: number;
        second: number;
        nano: number;
      };
      weekday: string;
    };
    beforeSchedule: {
      date: string;
      time: {
        hour: number;
        minute: number;
        second: number;
        nano: number;
      };
      weekday: string;
    };
    status: string;
    requester: string;
    receiver: string;
    registeredBy: string;
    modifiedBy: string;
  };
  trainer: {
    id: number;
    name: string;
  };
  gym: {
    id: number;
    name: string;
  };
}