"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrainerLayout } from "@/app/trainer/layout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import JoinStep from "@/components/trainer/TrSignUpStep";
import { Modal } from "@/components/trainer/molecules/Modal/Modal";
import { SearchCenter } from "@/components/trainer/molecules/Modal/searchCenter/SearchCenter";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { useModal } from "@/context/trainer/ModalContext";
import { signup2 } from "@/services/trainer/signup/signup2";
import { RootState } from "@/redux/store";

export default function Step2() {
  const { openModal, isOpen, closeModal } = useModal();
  const dispatch = useDispatch();
  const title = "센터 등록";
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  const { workingCenter, isButtonDisabled, handlePlaceSelect, handleNext } =
    signup2();

  const openSearchModal = () => {
    openModal(
      <SearchCenter
        handlePlaceSelect={place => {
          handlePlaceSelect(place);
          closeModal();
        }}
      />,
    );
  };

  return (
    <TrainerLayout
      title={title}
      hasHeader={true}
      hasFooter={false}
      variant="withBack"
    >
      <JoinStep active="2" />
      <TitleWrapper
        topTitle="센터를 등록해주세요."
        underTitle="재직 중인 센터를 등록해주세요."
      />

      {workingCenter.length > 0 ? (
        <ul>
          {workingCenter.map((center, index) => (
            <EventButton
              key={index}
              isIconVisible={false}
              event={openSearchModal}
              eventButtonType="purple"
              height="3.5rem"
              justifyContent="space-between"
              content={center.place_name}
              rightContent="xButton"
              color="var(--black)"
            />
          ))}
        </ul>
      ) : (
        <EventButton
          event={openSearchModal}
          isIconVisible={true}
          iconType="plusCircleMono"
          content="등록할 센터를 검색해 주세요."
          eventButtonType="purple"
          height="7rem"
          justifyContent="center"
          color="var(--font-secondary)"
        />
      )}

      {workingCenter.length > 0 && (
        <EventButton
          event={openSearchModal}
          isIconVisible={true}
          iconType="plusGray"
          eventButtonType="gray"
          height="3.5rem"
          justifyContent="center"
        />
      )}

      <ButtonAreaFixed
        isButtonDisabled={isButtonDisabled}
        onClick={handleNext}
        nextStepUrl="/trainer/signup/step3"
        label="다음"
      />

      {isOpen && (
        <Modal
          title={title}
          content={<SearchCenter handlePlaceSelect={handlePlaceSelect} />}
        />
      )}
    </TrainerLayout>
  );
}
