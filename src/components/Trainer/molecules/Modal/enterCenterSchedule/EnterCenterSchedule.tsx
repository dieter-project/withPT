import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { Button } from "@/styles/Trainer/TrainerButton";
import { ModalContentTit } from "@/styles/Trainer/TrainerModal";
import { Signup3 } from "@/hooks/trainer/signup/useSignup";
import { useHandleCenterSchedule } from "@/hooks/trainer/modal/useEnterCenterSchedule";
import { generateTimeOptions } from "@/utils/Trainer/timeOptions";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { openModal } from "@/redux/reducers/trainer/modalSlice";
import { ModalErrorMessage } from "@/styles/Trainer/TrainerModal";
import { SelectedScheduleList } from "../enterCenterSchedule/SelectedScheduleList";
import { DateAndTimeSelector } from "../dateAndTimeSelector/DateAndTimeSelector";
import { closeModal } from "@/redux/reducers/trainer/modalSlice";

export const EnterCenterSchedule: React.FC = () => {
  const dispatch = useDispatch();
  const {
    selectedDays,
    selectedStartTime,
    selectedEndTime,
    selectedSchedules,
    handleDayClick,
    handleStartTimeChange,
    handleEndTimeChange,
    handleConfirm,
    days,
    errorMessage,
    handleRemoveSchedule,
  } = useHandleCenterSchedule();

  return (
    <>
      <DateAndTimeSelector
        days={days}
        selectedDays={selectedDays}
        handleDayClick={handleDayClick}
        selectedStartTime={selectedStartTime || null}
        selectedEndTime={selectedEndTime || null}
        handleStartTimeChange={handleStartTimeChange}
        handleEndTimeChange={handleEndTimeChange}
      />
      <div>
        <EventButton
          event={() => handleConfirm()}
          isIconVisible={true}
          iconType="plusGray"
          eventButtonType="gray"
          height="3rem"
          justifyContent="center"
        />
        <ModalErrorMessage>{errorMessage}</ModalErrorMessage>
      </div>
      <SelectedScheduleList
        selectedSchedules={selectedSchedules}
        handleRemoveSchedule={handleRemoveSchedule}
      />
      <Button
        $variant={selectedSchedules.length === 0 ? "ghost" : "primary"}
        disabled={selectedSchedules.length === 0}
        onClick={() => dispatch(closeModal())}
      >
        저장하기
      </Button>
    </>
  );
};
