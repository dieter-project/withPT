import { useState } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

export const useHandleCenterSchedule = () => {
  dayjs.extend(isBetween);

  const days = ["월", "화", "수", "목", "금", "토", "일"];
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

  const handleDayClick = (day: string) => {
    setSelectedDays(prevDays =>
      prevDays.includes(day)
        ? prevDays.filter(d => d !== day)
        : [...prevDays, day].sort((a, b) => days.indexOf(a) - days.indexOf(b)),
    );
  };

  const handleStartTimeChange = (time: string) => setSelectedStartTime(time);
  const handleEndTimeChange = (time: string) => setSelectedEndTime(time);

  // 시간을 분 단위로 변환하는 함수
  const convertTimeToMinutes = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  // 스케줄 확인 및 추가 함수
  const handleConfirm = () => {
    if (!selectedDays.length || !selectedStartTime || !selectedEndTime) {
      setErrorMessage("스케줄의 모든 옵션을 선택해주세요");
      return;
    }

    const selectedStartMinutes = convertTimeToMinutes(selectedStartTime);
    const selectedEndMinutes = convertTimeToMinutes(selectedEndTime);

    if (selectedEndMinutes <= selectedStartMinutes) {
      setErrorMessage("종료 시간이 시작 시간보다 빠를 수 없습니다.");
      return;
    }

    // 기존 스케줄과 겹치는지 확인
    const hasOverlap = selectedSchedules.some(schedule => {
      const scheduleStartMinutes = convertTimeToMinutes(schedule.startTime);
      const scheduleEndMinutes = convertTimeToMinutes(schedule.endTime);
      const hasDayOverlap = selectedDays.some(day =>
        schedule.days.includes(day),
      );

      return (
        hasDayOverlap &&
        ((selectedStartMinutes >= scheduleStartMinutes &&
          selectedStartMinutes < scheduleEndMinutes) ||
          (selectedEndMinutes > scheduleStartMinutes &&
            selectedEndMinutes <= scheduleEndMinutes) ||
          (selectedStartMinutes <= scheduleStartMinutes &&
            selectedEndMinutes >= scheduleEndMinutes))
      );
    });

    if (hasOverlap) {
      setOverlapError(true);
      setErrorMessage("날짜와 시간이 겹칩니다.");
      return;
    }

    // 여기가 핵심 변경 부분: 모든 선택된 요일을 하나의 스케줄로 그룹화
    const newSchedule = {
      days: selectedDays, // 선택된 모든 요일을 배열로 유지
      startTime: selectedStartTime,
      endTime: selectedEndTime,
    };

    setSelectedSchedules(prev => [...prev, newSchedule]);
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
    setSelectedDays,
    selectedStartTime,
    setSelectedStartTime,
    selectedEndTime,
    setSelectedEndTime,
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
