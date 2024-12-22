import React, { useState } from "react";
import { Button } from "@/styles/Trainer/TrainerButton";
import { useHandleCenterSchedule } from "@/hooks/trainer/modal/useEnterCenterSchedule";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { DateAndTimeSelector } from "../dateAndTimeSelector/DateAndTimeSelector";
import styled from "styled-components";
import { isTimeOverlapping } from "@/utils/Trainer/time";
import { useModal } from "@/context/trainer/ModalContext";

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
          <AlertContent>
            기존 일정과 중복된 시간이어서 등록할 수 없습니다
          </AlertContent>
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

  // 스케줄 삭제
  const handleRemoveSchedule = (index: number) => {
    setScheduleList(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    onSubmit(scheduleList);
  };

  const formatScheduleDisplay = (schedule: {
    days: string[];
    startTime: string;
    endTime: string;
  }) => {
    const sortedDays = [...schedule.days].sort(
      (a, b) => days.indexOf(a) - days.indexOf(b),
    );
    return `${sortedDays.join("/")} ${schedule.startTime} ~ ${
      schedule.endTime
    }`;
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
          eventButtonType="gray"
          height="3rem"
          justifyContent="center"
        />
      </div>

      {/* 스케줄 리스트 */}
      <ScheduleListContainer>
        {scheduleList.map((schedule, index) => (
          <ScheduleItem key={index}>
            <ScheduleText>{formatScheduleDisplay(schedule)}</ScheduleText>
            <DeleteButton onClick={() => handleRemoveSchedule(index)}>
              ×
            </DeleteButton>
          </ScheduleItem>
        ))}
      </ScheduleListContainer>

      <Button
        $variant={scheduleList.length === 0 ? "ghost" : "primary"}
        disabled={scheduleList.length === 0}
        onClick={handleSave}
      >
        저장하기
      </Button>
    </>
  );
};

const ScheduleListContainer = styled.div`
  margin-top: 16px;
  padding: 0 16px;
`;

const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
`;

const ScheduleText = styled.span`
  font-size: var(--font-m);
`;
const DeleteButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  color: var(--gray-400);
`;

const AlertContent = styled.div`
  text-align: center;
  white-space: pre-line;
  color: var(--font-primary);
  font-size: var(--font-m);
  line-height: 1.5;
`;
