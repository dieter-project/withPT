"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { TrainerLayout } from "@/app/trainer/layout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import JoinStep from "@/components/trainer/TrSignUpStep";
import { Modal } from "@/components/trainer/molecules/Modal/Modal";
import { SearchCenter } from "@/components/trainer/molecules/Modal/searchCenter/SearchCenter";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { useModal } from "@/context/trainer/ModalContext";
import { signup2 } from "@/services/trainer/signup/signup2";

export default function Step2() {
  const router = useRouter();
  const { openModal, isOpen, closeModal } = useModal();
  const {
    workingCenter,
    isButtonDisabled,
    handlePlaceSelect,
    handleRemoveCenter,
    handleNext,
  } = signup2();

  const STEP_CONFIG = {
    STEP: "2",
    TITLE: "센터 등록",
    TOP_TITLE: "센터를 등록해주세요.",
    UNDER_TITLE: "재직 중인 센터를 등록해주세요.",
    MODAL_TITLE: "센터 검색",
    NEXT_STEP_URL: "/trainer/signup/step3",
  } as const;

  const BUTTON_CONFIG = {
    EMPTY_STATE: {
      isIconVisible: true,
      iconType: "plusCircleMono" as const,
      content: "등록할 센터를 검색해 주세요.",
      eventButtonType: "purple" as const,
      height: "7rem",
      justifyContent: "center",
      color: "var(--font-secondary)",
    },
    CENTER_ITEM: {
      isIconVisible: false,
      eventButtonType: "purple" as const,
      height: "3.5rem",
      justifyContent: "space-between",
      rightContent: "xButton" as const,
      color: "var(--black)",
      xButtonEvent:
        (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          handleRemoveCenter(index);
        },
    },
    ADD_CENTER: {
      isIconVisible: true,
      iconType: "plusGray" as const,
      eventButtonType: "gray" as const,
      height: "3.5rem",
      justifyContent: "center",
    },
  } as const;

  const handleModalPlaceSelect = React.useCallback(
    (place: PlaceInfo) => {
      handlePlaceSelect(place);
      closeModal();
    },
    [handlePlaceSelect, closeModal],
  );

  const searchCenterContent = React.useMemo(
    () => <SearchCenter handlePlaceSelect={handleModalPlaceSelect} />,
    [handleModalPlaceSelect],
  );

  const openSearchModal = React.useCallback(() => {
    openModal(searchCenterContent, STEP_CONFIG.MODAL_TITLE);
  }, [openModal, searchCenterContent]);

  const handleNextStep = useCallback(() => {
    handleNext();
    router.push(STEP_CONFIG.NEXT_STEP_URL);
  }, [handleNext, router]);

  return (
    <TrainerLayout
      title="센터 등록"
      hasHeader={true}
      hasFooter={false}
      variant="withBack"
    >
      <JoinStep active={STEP_CONFIG.STEP} />
      <TitleWrapper
        topTitle={STEP_CONFIG.TOP_TITLE}
        underTitle={STEP_CONFIG.UNDER_TITLE}
      />

      {workingCenter.length > 0 ? (
        <>
          <ul>
            {workingCenter.map((center, index) => (
              <EventButton
                key={`${center.place_name}-${index}`}
                content={center.place_name}
                {...BUTTON_CONFIG.CENTER_ITEM}
                xButtonEvent={BUTTON_CONFIG.CENTER_ITEM.xButtonEvent(index)}
              />
            ))}
          </ul>
          <EventButton event={openSearchModal} {...BUTTON_CONFIG.ADD_CENTER} />
        </>
      ) : (
        <EventButton event={openSearchModal} {...BUTTON_CONFIG.EMPTY_STATE} />
      )}
      <ButtonAreaFixed
        isButtonDisabled={isButtonDisabled}
        onClick={handleNextStep}
        label="다음"
      />
      {isOpen && (
        <Modal title={STEP_CONFIG.MODAL_TITLE} content={searchCenterContent} />
      )}
    </TrainerLayout>
  );
}
