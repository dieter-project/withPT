"use client";

import ContentHeader from "@/components/TrainerPageTitle";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, ContentBody } from "@/styles/Trainer/TrainerLayout";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import JoinStep from "@/components/trainer/TrSignUpStep";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { Modal } from "@/components/trainer/molecules/Modal/Modal";
import { OverlapModal } from "@/components/trainer/molecules/Modal/overlapModal/OverLapModal";
import { EnterCenterSchedule } from "@/components/trainer/molecules/Modal/enterCenterSchedule/EnterCenterSchedule";
import { changeDayFormatEnglish } from "@/utils/Trainer/changeDayFormatEnglish";
import { GymsInfo } from "@/model/trainer/signUp";
import { RootState } from "@/redux/store";
import {
  openModal,
  closeModal,
  setOverlap,
  resetOverlap,
} from "@/redux/reducers/trainer/modalSlice";
import { useHandleCenterSchedule } from "@/hooks/trainer/modal/useEnterCenterSchedule";

export default function step3() {
  const title = "센터일정 등록";
  const dispatch = useDispatch();

  const isModalOpen = useSelector(state => state.modal.isOpen);
  const isOverlap = useSelector((state: RootState) => state.modal.isOverlap);
  //처음 화면을 그릴때 정된 헬스장 리스트 가져오기
  const saveStates = useSelector(
    (state: RootState) => state.trainerSignup.gyms,
  );

  const [recordGyms, setRecordGyms] = useState<GymsInfo[] | []>(saveStates);

  const [openModalNum, setOpenModalNum] = useState<number | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");

  const { selectedSchedules, overlapError, isButtonDisabled } =
    useHandleCenterSchedule();

  const toggleModal = (centername: string, index: number) => {
    dispatch(openModal());
    setModalTitle(centername);
    setOpenModalNum(index);
  };

  // && selectedSchedules[0].days?.length > 0

  // console.log("selectedSchedules", selectedSchedules[0]?.days?.length);

  const handleRemoveSchedule = index => {
    const newSelectedSchedules = [...selectedSchedules];
    newSelectedSchedules.splice(index, 1);
    setSelectedSchedules(newSelectedSchedules);
  };

  const gyms = saveStates?.gyms || [];

  const handleCloseOverlap = () => {
    dispatch(resetOverlap());
  };

  // const updatedGyms = {
  //   workSchedules: [
  //     {
  //       day: selectedSchedules[0]?.days[0]
  //         ? changeDayFormatEnglish(selectedSchedules[0]?.days[0])
  //         : "",
  //       inTime: selectedSchedules[0]?.startTime,
  //       outTime: selectedSchedules[0]?.endTime,
  //     },
  //   ],
  // };

  // const handleNext = () => {
  //   dispatch(
  //     signupActions.saveSignupState({
  //       gyms: updatedGyms,
  //     }),
  //   );
  //   console.log("states: ", saveStates);
  // };

  // console.log(selectedDays.length, "selectedDays");

  useEffect(() => {
    console.log("overlapError", overlapError);
  }, [overlapError]);

  return (
    <Container>
      <ContentHeader title={title}></ContentHeader>
      <ContentBody>
        <JoinStep active={"3"} />
        <TitleWrapper
          topTitle="센터일정을 등록해 주세요."
          underTitle="센터별로 수업이 가능한 시간을 등록해주세요."
        />
        {recordGyms?.map((gym, index) => (
          <EventButton
            key={index}
            isIconVisible={false}
            event={() => toggleModal(gym.name, index)}
            eventButtonType="purple"
            height="3.5rem"
            justifyContent="space-between"
            content={gym.name}
            rightContent="checkRegister"
            color="var(--black)"
          />
        ))}
        <ButtonAreaFixed
          isButtonDisabled={isButtonDisabled}
          // onClick={handleNext}
          nextStepUrl="/trainer/signup/step4"
          label="다음"
        />
      </ContentBody>
      {isModalOpen && (
        <Modal title={modalTitle} content={<EnterCenterSchedule />} />
      )}
      {overlapError && <OverlapModal />}
    </Container>
  );
}
