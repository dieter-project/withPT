"use client";

import ContentHeader from "@/components/TrainerPageTitle";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styled from "styled-components";
import { Container, ContentBody } from "@/styles/trainer/TrainerLayout";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import JoinStep from "@/components/trainer/TrSignUpStep";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/styles/Trainer/TrainerButton";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { SearchModal } from "@/components/trainer/molecules/Modal/Modal";
import { EnterCenterSchedule } from "@/components/trainer/molecules/Modal/enterCenterSchedule/EnterCenterSchedule";
import { changeDayFormatEnglish } from "@/utils/Trainer/changeDayFormatEnglish";
import { GymsInfo } from "@/model/trainer/signUp";
import { openModal, closeModal } from "@/redux/reducers/trainer/modalSlice";
import { Signup3 } from "@/hooks/trainer/signup/useSignup";
import { useHandleCenterSchedule } from "@/hooks/trainer/modal/useEnterCenterSchedule";

export default function step3() {
  const title = "센터일정 등록";
  const dispatch = useDispatch();

  const isModalOpen = useSelector(state => state.modal.isOpen);
  //처음 화면을 그릴때 정된 헬스장 리스트 가져오기
  const saveStates = useSelector(
    (state: RootState) => state.trainerSignup.gyms,
  );

  const [recordGyms, setRecordGyms] = useState<GymsInfo[] | []>(saveStates);

  const [openModalNum, setOpenModalNum] = useState<number | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");

  const {
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
  } = useHandleCenterSchedule();

  const handleConfirm = () => {
    // 최종 확인 시에는 모든 일정들과 비교하여 겹치는지 확인
    const isOverlap = allSchedules.some(schedule => {
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

    if (isOverlap) {
      setOverlapError(true);
    } else {
      setOverlapError(false);

      // 선택한 일정 정보를 저장
      const schedule = {
        days: selectedDays,
        startTime: selectedStartTime,
        endTime: selectedEndTime,
      };
      setSelectedSchedules([...selectedSchedules, schedule]);
      setAllSchedules([...allSchedules, schedule]);

      // 선택한 일정 초기화
      setSelectedDays([]);
      setSelectedStartTime("");
      setSelectedEndTime("");
    }
  };

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
        <SearchModal title={modalTitle} content={<EnterCenterSchedule />} />
      )}
      {overlapError && (
        <OverLapWrap>
          <OverLapModal>
            <OverLapTitle>일정 중복</OverLapTitle>
            <OverLapMessage>
              {" "}
              기존 일정과 중복된 시간이 있어
              <br />
              등록을 할 수 없습니다.
            </OverLapMessage>
            <OverLapClose>확인</OverLapClose>
          </OverLapModal>
        </OverLapWrap>
      )}
    </Container>
  );
}

const OverLapWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 300;
  border-radius: 0.5rem;
`;

const OverLapModal = styled.div`
  font-family: var(--font);
  width: 18.125rem;
  height: 9.5rem;
  padding-top: 1.19rem;
  text-align: center;
  background-color: white;
  border-radius: 0.5rem;
  color: black;
  font-size: 3vh;
`;

const OverLapTitle = styled.h4`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
`;

const OverLapMessage = styled.div`
  font-size: var(--font-m);
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1.06rem;
`;

const OverLapClose = styled.button`
  all: unset;
  width: 100%;
  font-size: var(--font-m);
  padding-top: 0.62rem;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const ModalCloseXButton = styled.button``;
