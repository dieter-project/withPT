import { useState } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

export const useHandleCenterSchedule = () => {
  dayjs.extend(isBetween);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedStartTime, setSelectedStartTime] = useState<string | null>(
    null,
  );
  const [selectedEndTime, setSelectedEndTime] = useState<string | null>(null);
  const [selectedSchedules, setSelectedSchedules] = useState<
    Array<{ days: string[]; startTime: string; endTime: string }>
  >([]);
  const [overlapError, setOverlapError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Constants
  const days = ["월", "화", "수", "목", "금", "토", "일"];

  const handleDayClick = (day: string) => {
    setSelectedDays(prevDays =>
      prevDays.includes(day)
        ? prevDays.filter(d => d !== day)
        : [...prevDays, day].sort((a, b) => days.indexOf(a) - days.indexOf(b)),
    );
  };

  const handleStartTimeChange = (time: string) => setSelectedStartTime(time);
  const handleEndTimeChange = (time: string) => setSelectedEndTime(time);

  // 1) 날짜, 시작 시간, 종료 시간이 선택 되었는지
  // 2) 시작 시간이 종료 시간보다 먼저인지 검사
  // 3) 등록해 놓은 시간이랑 비교해서 겹치는 시간이 있는지 확인
  // 4) 등록 후에는 select state 초기화
  const handleConfirm = () => {
    if (!selectedDays.length || !selectedStartTime || !selectedEndTime) {
      setErrorMessage("스케줄의 모든 옵션을 선택해주세요");
      return;
    }

    const isOverlap = selectedSchedules.some(schedule => {
      const selectedStart = dayjs(selectedStartTime, "HH:mm");
      const selectedEnd = dayjs(selectedEndTime, "HH:mm");
      const existingStart = dayjs(schedule.startTime, "HH:mm");
      const existingEnd = dayjs(schedule.endTime, "HH:mm");
      const isDayOverlap = selectedDays.some(day =>
        schedule.days.includes(day),
      );
      const isTimeOverlap =
        selectedStart.isBetween(existingStart, existingEnd, null, "[)") ||
        selectedEnd.isBetween(existingStart, existingEnd, null, "(]") ||
        existingStart.isBetween(selectedStart, selectedEnd, null, "[)") ||
        existingEnd.isBetween(selectedStart, selectedEnd, null, "(]");

      return isDayOverlap && isTimeOverlap;
    });

    if (isOverlap) {
      setOverlapError(true);
      setErrorMessage("날짜와 시간이 겹칩니다.");
      return;
    }

    // 스케줄 추가 및 초기화
    const newSchedule = {
      days: selectedDays,
      startTime: selectedStartTime,
      endTime: selectedEndTime,
    };

    setSelectedSchedules([...selectedSchedules, newSchedule]);
    setSelectedDays([]);
    setSelectedStartTime(null);
    setSelectedEndTime(null);
    setOverlapError(false);
    setErrorMessage("");
  };

  const handleRemoveSchedule = (index: number) => {
    setSelectedSchedules(prevSchedules =>
      prevSchedules.filter((_, i) => i !== index),
    );
  };

  return {
    selectedDays,
    selectedStartTime,
    selectedEndTime,
    selectedSchedules,
    overlapError,
    isButtonDisabled,
    errorMessage,
    handleDayClick,
    handleStartTimeChange,
    handleEndTimeChange,
    days,
    handleConfirm,
    handleRemoveSchedule,
    setIsButtonDisabled,
  };
};
