"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, ContentBody } from "@/styles/Trainer/TrainerLayout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import ContentHeader from "@/components/TrainerPageTitle";
import JoinStep from "@/components/trainer/TrSignUpStep";
import { Modal } from "@/components/trainer/molecules/Modal/Modal";
import { SearchCenter } from "@/components/trainer/molecules/Modal/searchCenter/SearchCenter";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { openModal } from "@/redux/reducers/trainer/modalSlice";
import { signup2 } from "@/services/trainer/signup/signup2";

export default function Step2() {
  const dispatch = useDispatch();
  const title = "센터 등록";
  const isModalOpen = useSelector(state => state.modal.isOpen);

  const { workingCenter, isButtonDisabled, handlePlaceSelect, handleNext } =
    signup2();

  const openSearchModal = () => {
    dispatch(openModal());
  };

  return (
    <Container>
      <ContentHeader title={title} />
      <ContentBody>
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
      </ContentBody>

      {isModalOpen && (
        <Modal
          title={title}
          content={<SearchCenter handlePlaceSelect={handlePlaceSelect} />}
        />
      )}
    </Container>
  );
}
