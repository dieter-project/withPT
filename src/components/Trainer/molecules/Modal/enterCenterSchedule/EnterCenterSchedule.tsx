import React, { useState } from "react";
import Wrapper from "@/components/trainer/molecules/wrapper/Wrapper";
import { useHandleCenterSchedule } from "@/hooks/trainer/modal/useEnterCenterSchedule";
import { EventButton } from "@/components/trainer/atoms/button/EventButton";
import { DateAndTimeSelector } from "../dateAndTimeSelector/DateAndTimeSelector";
import { isTimeOverlapping } from "@/utils/trainer/time";
import { useModal } from "@/context/trainer/ModalContext";
import { CenterScheduleItemLists } from "@/components/trainer/organisms/CenterScheduleItemLists";
import { ButtonAreaFixed } from "@/components/trainer/molecules/buttonAreaFixed/ButtonAreaFixed";

interface EnterCenterScheduleProps {
  existingSchedules?: {
    days: string[];
    startTime: string;
    endTime: string;
  }[];
  onSubmit: (schedules: any) => void;
}

export const EnterCenterSchedule: React.FC<EnterCenterScheduleProps> = ({
  existingSchedules = [],
  onSubmit,
}) => {
  const [scheduleList, setScheduleList] = useState(existingSchedules);
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const {
    selectedDays,
    selectedStartTime,
    selectedEndTime,
    handleDayClick,
    handleStartTimeChange,
    handleEndTimeChange,
  } = useHandleCenterSchedule();

  const { openModal } = useModal();

  // 스케줄 추가
  const handleConfirm = () => {
    if (!selectedDays.length || !selectedStartTime || !selectedEndTime) {
      return;
    }

    if (selectedEndTime < selectedStartTime) {
      openModal({
        type: "alert",
        title: "시간 설정 오류",
        content: <Wrapper>선택한 종료 시간이 시작 시간보다 빠릅니다</Wrapper>,
        zIndex: 2000,
      });
      return;
    }

    // 중복 체크
    const hasOverlap = scheduleList.some(existingSchedule => {
      const overlap = selectedDays.some(
        day =>
          existingSchedule.days.includes(day) &&
          isTimeOverlapping(
            selectedStartTime,
            selectedEndTime,
            existingSchedule.startTime,
            existingSchedule.endTime,
          ),
      );
      return overlap;
    });

    if (hasOverlap) {
      openModal({
        type: "alert",
        title: "일정 중복",
        content: (
          <Wrapper>기존 일정과 중복된 시간이어서 등록할 수 없습니다</Wrapper>
        ),
        zIndex: 2000,
      });
      return;
    }

    const newSchedule = {
      days: selectedDays,
      startTime: selectedStartTime,
      endTime: selectedEndTime,
    };

    setScheduleList(prev => [...prev, newSchedule]);
  };

  const handleRemoveSchedule = (index: number) => {
    setScheduleList(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    onSubmit(scheduleList);
  };

  return (
    <>
      <DateAndTimeSelector
        days={days}
        selectedDays={selectedDays}
        handleDayClick={handleDayClick}
        selectedStartTime={selectedStartTime}
        selectedEndTime={selectedEndTime}
        handleStartTimeChange={handleStartTimeChange}
        handleEndTimeChange={handleEndTimeChange}
      />
      <div>
        <EventButton
          event={handleConfirm}
          isIconVisible={true}
          iconType="plusGray"
          height="3rem"
          justifyContent="center"
        />
      </div>
      <CenterScheduleItemLists
        schedules={scheduleList}
        onDeleteSchedule={handleRemoveSchedule}
      />
      <ButtonAreaFixed
        label="저장하기"
        isButtonDisabled={scheduleList.length === 0}
        onClick={handleSave}
      />
    </>
  );
};
