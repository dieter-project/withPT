"use client";

import ContentHeader from "@/components/TrainerPageTitle";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import {
  Container,
  ContentBody,
  ButtonAreaFixed,
} from "@/styles/TrainerLayout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import JoinStep from "@/components/trainer/TrSignUpStep";
import checkIconPurple from "../../../../../public/Trainer/checkIconPurple.png";
import checkIconGray from "../../../../../public/Trainer/checkIconGray.png";
import ModalCloseXButtonImg from "../../../../../public/Trainer/Modal/close-line.png";
import { useAppSelector } from "@/redux/hooks";
import {
  FormTitle,
  SignUpInputContainer,
  SignUpTitleWrap,
  SignupStepInfo,
  SignupStepInfoSub,
  SignupInputInnerContainer,
} from "@/styles/SignupForm";
import { Button } from "@/styles/TrainerButton";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { SearchModal } from "@/components/trainer/modal/Modal";
import { EnterCenterSchedule } from "@/components/trainer/modal/EnterCenterSchedule";
import { changeDayFormatEnglish } from "@/utils/Trainer/changeDayFormatEnglish";
import { GymsInfo } from "@/model/trainer/signUp";
import { openModal, closeModal } from "@/redux/reducers/trainer/modalSlice";
import { Signup3 } from "@/hooks/trainer/signup/signup";
import { NextButtonArea } from "@/components/trainer/signup/ButtonAreaFixed";

const SignupFormWrap = styled.div`
  margin-bottom: 1rem;
`;

const TrRegisItemWrap = styled.div`
  color: var(--font-gray400);
`;

const SignupButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  line-height: 1.18rem;
  background-color: var(--purple50);
  padding: 1rem 0.88rem;
  font-size: var(--font-m);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CenterName = styled.div`
  width: 60%;
  text-align: left;
  color: black;
`;

const RegisterStatus = styled.div`
  display: flex;
  align-items: center;
`;

const RegisterMessage = styled.span`
  color: var(--primary);
`;

const RegisterBeforeMessage = styled.span`
  color: var(--font-gray400);
`;

const OverLapErrorMessage = styled.div``;

const ScheduleFlexWrap = styled.div`
  position: relative;
  border: 1px solid var(--font-gray400);
  border-radius: 0.5rem;
  padding: 1rem 1.19rem;
`;

const ScheduleFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckIcon = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.38rem;
`;

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

export default function step3() {
  const title = "센터일정 등록";
  const dispatch = useDispatch();
  const saveStates = useAppSelector(state => state.trainerSignup);
  const isModalOpen = useSelector(state => state.modal.isOpen);
  //처음 화면을 그릴때 정된 헬스장 리스트 가져오기
  const [recordGyms, setRecordGyms] = useState<GymsInfo[] | []>([]);

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
    allSchedules,
    setAllSchedules,
  } = Signup3();

  //조건에 따라 다음버튼 비활성화 시키기
  const [isDisabled, setIsDisabled] = useState(true);

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

  //조건에 따라 버튼 비활성화 시키기
  useEffect(() => {
    const isAnyFieldEmpty = () => {
      if (selectedSchedules[0]?.days?.length > 0) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    isAnyFieldEmpty();
  }, [selectedSchedules]);

  // && selectedSchedules[0].days?.length > 0

  console.log("selectedSchedules", selectedSchedules[0]?.days?.length);

  const handleRemoveSchedule = index => {
    const newSelectedSchedules = [...selectedSchedules];
    newSelectedSchedules.splice(index, 1);
    setSelectedSchedules(newSelectedSchedules);
  };

  useEffect(() => {
    // setRecordGyms(saveStates.gyms);
    // setRecordGyms(
    //   {
    //   name: "짱헬스",
    //   address: "서울시 강동구 성안로",
    //   latitude: 255.34,
    //   longitude: 260.12,
    // });
    setRecordGyms([
      {
        name: "짱헬스",
        address: "서울시 강동구 성안로",
        latitude: 255.34,
        longitude: 260.12,
      },
      {
        name: "짱헬스2",
        address: "서울시 강동구 성안로",
        latitude: 255.34,
        longitude: 260.12,
      },
    ]);
  }, []);

  const gyms = saveStates.gyms || [];

  const updatedGyms = {
    // ...saveStates.gyms[0],
    workSchedules: [
      {
        day: selectedSchedules[0]?.days[0]
          ? changeDayFormatEnglish(selectedSchedules[0]?.days[0])
          : "",
        inTime: selectedSchedules[0]?.startTime,
        outTime: selectedSchedules[0]?.endTime,
      },
    ],
  };

  const handleNext = () => {
    dispatch(
      signupActions.saveSignupState({
        gyms: updatedGyms,
      }),
    );
    console.log("states: ", saveStates);
  };

  // console.log("saveStates", recordGyms);
  // console.log(
  //   "요일변환",
  //   selectedSchedules[0]?.days[0],
  //   selectedSchedules[0]?.startTime,
  //   selectedSchedules
  //     ? changeDayFormatEnglish(selectedSchedules[0]?.days[0])
  //     : "",
  // );

  console.log(selectedDays.length, "selectedDays");

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
          <SignupFormWrap key={index}>
            <TrRegisItemWrap>
              <SignupButton onClick={() => toggleModal(gym.name, index)}>
                <CenterName>{gym.name}</CenterName>
                {selectedSchedules[0] ? (
                  <RegisterStatus>
                    <CheckIcon src={checkIconPurple} alt="등록 완료 이미지" />
                    <RegisterMessage>등록 완료 </RegisterMessage>
                  </RegisterStatus>
                ) : (
                  <RegisterStatus>
                    <CheckIcon src={checkIconGray} alt="등록 전 이미지" />
                    <RegisterBeforeMessage>등록 전 </RegisterBeforeMessage>
                  </RegisterStatus>
                )}
              </SignupButton>
            </TrRegisItemWrap>
            {selectedSchedules[0] ? (
              <ScheduleFlexWrap>
                <ModalCloseXButton
                  // src={ModalCloseXButtonImg}
                  alt="리스트 삭제 버튼"
                  onClick={() => handleRemoveSchedule()}
                />
                {/* <img></img> */}
                {selectedSchedules.map((schedule, index) => (
                  <ScheduleFlex key={index}>
                    <span>{schedule.days.join("/")}</span>
                    <span>
                      {schedule.startTime} ~ {schedule.endTime}
                    </span>
                  </ScheduleFlex>
                ))}
              </ScheduleFlexWrap>
            ) : (
              ""
            )}
          </SignupFormWrap>
        ))}
        <NextButtonArea
          $variant={isDisabled ? "ghost" : "primary"}
          onClick={handleNext}
          nextStepUrl="/trainer/signup/step4"
        />
      </ContentBody>
      {isModalOpen && (
        <SearchModal
          title={modalTitle}
          content={
            <EnterCenterSchedule
              handleConfirm={handleConfirm}
              selectedSchedules={selectedSchedules}
              selectedStartTime={selectedStartTime}
              setSelectedStartTime={setSelectedStartTime}
              selectedEndTime={selectedEndTime}
              setSelectedEndTime={setSelectedEndTime}
              selectedDays={selectedDays}
              setSelectedDays={setSelectedDays}
            />
          }
        />
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
