"use client";

import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { TrainerLayout } from "@/app/trainer/layout";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import JoinStep from "@/components/trainer/TrSignUpStep";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { Modal } from "@/components/trainer/molecules/Modal/Modal";
import { EnterCenterSchedule } from "@/components/trainer/molecules/Modal/enterCenterSchedule/EnterCenterSchedule";
import { GymsInfo } from "@/model/trainer/signUp";
import { RootState } from "@/redux/store";
import {
  openModal,
  closeModal,
  resetOverlap,
} from "@/redux/reducers/trainer/modalSlice";
import { useHandleCenterSchedule } from "@/hooks/trainer/modal/useEnterCenterSchedule";
import { useModal } from "@/context/trainer/ModalContext";

export default function Step3() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { openModal } = useModal();

  const STEP_CONFIG = {
    STEP: "3",
    TITLE: "센터일정 등록",
    TOP_TITLE: "센터일정을 등록해 주세요.",
    UNDER_TITLE: "센터별로 수업이 가능한 시간을 등록해주세요.",
    NEXT_STEP_URL: "/trainer/signup/finished",
  } as const;

  const BUTTON_CONFIG = {
    CENTER_ITEM: {
      isIconVisible: false,
      eventButtonType: "purple" as const,
      height: "3.5rem",
      justifyContent: "space-between",
      rightContent: "checkRegister" as const,
      color: "var(--black)",
    },
  } as const;

  // Redux Selectors
  const isModalOpen = useSelector(state => state.modal.isOpen);
  const saveStates = useSelector(
    (state: RootState) => state.trainerSignup.gyms,
  );

  // Local State
  const [recordGyms, setRecordGyms] = useState<GymsInfo[]>(saveStates);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [openModalNum, setOpenModalNum] = useState<number | null>(null);

  // Custom Hook
  const { selectedSchedules, overlapError, isButtonDisabled, handleNext } =
    useHandleCenterSchedule();

  // Event Handlers
  const toggleModal = useCallback(
    (centerName: string, index: number) => {
      dispatch(openModal());
      setModalTitle(centerName);
      setOpenModalNum(index);
    },
    [dispatch],
  );

  const handleOpenScheduleModal = useCallback(
    (centerName: string, index: number) => {
      openModal({
        type: "default",
        title: centerName,
        content: <EnterCenterSchedule />,
      });
    },
    [openModal],
  );

  const handleModalClose = useCallback(() => {
    dispatch(closeModal());
    dispatch(resetOverlap());
  }, [dispatch]);

  const handleNextStep = useCallback(() => {
    handleNext();
    router.push(STEP_CONFIG.NEXT_STEP_URL);
  }, [handleNext, router]);

  return (
    <TrainerLayout
      title={STEP_CONFIG.TITLE}
      hasHeader={true}
      hasFooter={false}
      variant="withBack"
    >
      <JoinStep active={STEP_CONFIG.STEP} />
      <TitleWrapper
        topTitle={STEP_CONFIG.TOP_TITLE}
        underTitle={STEP_CONFIG.UNDER_TITLE}
      />

      {recordGyms?.map((gym, index) => (
        <EventButton
          key={`${gym.name}-${index}`}
          // event={() => handleOpenScheduleModal(gym.name)}
          event={() => handleOpenScheduleModal(gym.name, index)}
          content={gym.name}
          {...BUTTON_CONFIG.CENTER_ITEM}
        />
      ))}

      <ButtonAreaFixed
        isButtonDisabled={isButtonDisabled}
        onClick={handleNextStep}
        label="다음"
      />

      {isModalOpen && (
        <Modal
          title={modalTitle}
          content={<EnterCenterSchedule />}
          onClose={handleModalClose}
        />
      )}
    </TrainerLayout>
  );
}
