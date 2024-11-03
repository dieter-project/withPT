import { useState } from "react";
import { generateTimeOptions } from "@/utils/Trainer/timeOptions";

export const useHandleCenterSchedule = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedStartTime, setSelectedStartTime] = useState<string | null>(
    null,
  );
  const [selectedEndTime, setSelectedEndTime] = useState<string | null>(null);
  const [selectedSchedules, setSelectedSchedules] = useState<
    Array<{ days: string[]; startTime: string; endTime: string }>
  >([]);
  const [overlapError, setOverlapError] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 요일을 클릭했을 때 선택된 요일을 추가 (월~일 순서대로 정렬)
  const handleDayClick = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      const updatedDays = [...selectedDays, day].sort((a, b) => {
        const daysOrder = ["월", "화", "수", "목", "금", "토", "일"];
        return daysOrder.indexOf(a) - daysOrder.indexOf(b);
      });
      setSelectedDays(updatedDays);
    }
  };

  // 시작 시간 선택
  const handleStartTimeChange = (time: string) => {
    setSelectedStartTime(time);
  };
  // 종료 시간 선택
  const handleEndTimeChange = (time: string) => {
    setSelectedEndTime(time);
  };

  const timeOptions = generateTimeOptions();

  const days = ["월", "화", "수", "목", "금", "토", "일"];

  // 1) 날짜, 시작 시간, 종료 시간이 선택 되었는지
  // 2) 시작 시간이 종료 시간보다 먼저인지 검사
  // 3) 등록해 놓은 시간이랑 비교해서 겹치는 시간이 있는지 확인
  // 4) 등록 후에는 select state 초기화
  const handleConfirm = () => {
    const isOverlap = selectedSchedules.some(schedule => {
      const selectedStart = new Date(`2023-01-01 ${selectedStartTime}`);
      const selectedEnd = new Date(`2023-01-01 ${selectedEndTime}`);
      const existingStart = new Date(`2023-01-01 ${schedule.startTime}`);
      const existingEnd = new Date(`2023-01-01 ${schedule.endTime}`);

      const isDayOverlap = selectedDays.some(day =>
        schedule.days.includes(day),
      );

      const isTimeOverlap =
        (selectedStart >= existingStart && selectedStart < existingEnd) ||
        (selectedEnd > existingStart && selectedEnd <= existingEnd) ||
        (selectedStart <= existingStart && selectedEnd >= existingEnd);

      return isDayOverlap && isTimeOverlap;
    });

    if (selectedDays.length === 0 || !selectedStartTime || !selectedEndTime) {
      setErrorMessage("스케줄의 모든 옵션을 선택해주세요");
      return;
    }

    if (isOverlap) {
      // setOverlapError("날짜와 시간이 겹칩니다.");
    } else {
      setOverlapError(false);

      // 선택한 일정 정보를 저장
      const schedule = {
        days: selectedDays,
        startTime: selectedStartTime,
        endTime: selectedEndTime,
      };

      setSelectedSchedules([...selectedSchedules, schedule]);
      // 선택한 일정 초기화
      setSelectedDays([]);
      setSelectedStartTime("");
      setSelectedEndTime("");
    }
  };

  return {
    selectedDays,
    setSelectedDays,
    selectedStartTime,
    setSelectedStartTime,
    selectedEndTime,
    setSelectedEndTime,
    selectedSchedules,
    setSelectedSchedules,
    overlapError,
    setOverlapError,
    isButtonDisabled,
    setIsButtonDisabled,
    handleDayClick,
    handleStartTimeChange,
    handleEndTimeChange,
    timeOptions,
    days,
    handleConfirm,
    errorMessage,
  };
};
