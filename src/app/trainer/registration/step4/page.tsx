"use client";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { EventButton } from "@/components/trainer/atoms/Button/EventButton";
import JoinStep from "@/components/trainer/molecules/SignupStep/SignUpStep";
import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";
import { TrainerLayout } from "@/app/trainer/layout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import { api } from "@/utils/axios";
import { setCookie } from "@/utils/cookie";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import { useModal } from "@/context/trainer/ModalContext";
import { Typography } from "@/components/trainer/atoms/Typography/TypoGraphy.styles";
import { Icon } from "@/components/trainer/atoms/SvgIcon/SvgIcon";

export default function step4() {
  const router = useRouter();
  const STEP_CONFIG = {
    STEP: "4",
    TITLE: "이력 등록",
    TOP_TITLE: "내 이력을 등록해주세요",
    UNDER_TITLE: "회원가입 후 마이페이지에서도 입력이 가능해요.",
    MODAL_CAREER_TITLE: "센터 검색",
    MODAL_CERTIFICATE_TITLE: "센터 검색",
    MODAL_EDUCATION_TITLE: "센터 검색",
    NEXT_STEP_URL: "/trainer/registration/finished",
  } as const;

  const { openModal, closeModal } = useModal();

  //   openModal({
  //     type: "default",
  //     title: STEP_CONFIG.MODAL_CERTIFICATE_TITLE,
  //     // content: searchCenterContent,
  //   });
  // }, [
  //   openModal,
  //   // searchCenterContent
  // ]);

  // const searchCenterContent = React.useMemo(() => <SearchCenter />, []);

  // const openCertificateModal = React.useCallback(() => {
  //   openModal({
  //     type: "default",
  //     title: STEP_CONFIG.MODAL_EDUCATION_TITLE,
  //     // content: searchCenterContent,
  //   });
  // }, [
  //   openModal,
  //   // searchCenterContent
  // ]);

  // const openEducationModal = React.useCallback(() => {
  //   openModal({
  //     type: "default",
  //     title: STEP_CONFIG.MODAL_CAREER_TITLE,
  //     // content: searchCenterContent,
  //   });
  // }, [
  //   openModal,
  //   // searchCenterContent
  // ]);

  // const handleNextStep = useCallback(() => {
  //   // handleNext();
  //   router.push(STEP_CONFIG.NEXT_STEP_URL);
  // }, [
  //   // handleNext,

  //   router,
  // ]);

  // const dispatch = useDispatch();
  // const saveStates = useAppSelector(state => state.trainerSignup);

  // const handleSubmit = async () => {
  //   const dataToSend = {
  //     email: "trainer2@test.com",
  //     password: "trainer1234",
  //     name: "조은혜",
  //     birth: "2024-01-07",
  //     sex: "MAN",
  //     authProvider: "EMAIL",
  //     careers: [
  //       {
  //         centerName: "우당탕헬스장",
  //         jobPosition: "트레이너",
  //         status: "EMPLOYED",
  //         startOfWorkYearMonth: "2022-01",
  //         endOfWorkYearMonth: "2024-01",
  //       },
  //     ],
  //     academics: [
  //       {
  //         institution: "FOUR_YEAR_UNIVERSITY",
  //         name: "위피티대학교",
  //         major: "위피티",
  //         degree: "HIGH_SCHOOL_DIPLOMA",
  //         country: "서울",
  //         enrollmentYearMonth: "2020-03",
  //         graduationYearMonth: "2023-03",
  //       },
  //     ],
  //     certificates: [
  //       {
  //         name: "재활치료자격증",
  //         institution: "재활치료협회",
  //         acquisitionYearMonth: "2022-03",
  //       },
  //     ],
  //     awards: [
  //       {
  //         name: "위피티수상",
  //         institution: "위피티대학교",
  //         acquisitionYearMonth: "2020-12",
  //       },
  //     ],
  //     educations: [
  //       {
  //         name: "위피티학원",
  //         institution: "위피티",
  //         acquisitionYearMonth: "2020-03",
  //       },
  //     ],
  //     gyms: [
  //       {
  //         name: "헬스장1",
  //         address: "서울시 강동구 성내동",
  //         latitude: 3.1413161,
  //         longitude: 4.151771,
  //         workSchedules: [
  //           {
  //             day: "MON",
  //             inTime: "13:00",
  //             outTime: "17:00",
  //           },
  //         ],
  //       },
  //     ],
  //   };

  //   try {
  //     const response = await api.post(
  //       "http://13.124.80.64/api/v1/trainers/sign-up",
  //       dataToSend,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       },
  //     );
  //     console.log("data: ", response);

  //     if (response.data) {
  //       setCookie("access", response.data.data.accessToken, { path: "/" });
  //       setCookie("refreshToken", response.data.data.refreshToken, {
  //         path: "/",
  //       });
  //     }
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // };

  // const openCareerModal = useCallback(() => {
  //   const modalId = openModal({
  //     type: "default",
  //     title: "경력 입력",
  //     content: (
  //       <CareerInputModal
  //         onSearchCenter={() => {
  //           // 센터 검색 모달을 열 때 현재 모달의 ID를 전달
  //           openSearchCenterModal(modalId);
  //         }}
  //       />
  //     ),
  //   });
  // }, [openModal]);

  // const openSearchCenterModal = useCallback(
  //   (previousModalId: string) => {
  //     const modalId = openModal({
  //       type: "default",
  //       title: "센터 검색",
  //       content: (
  //         <SearchCenter
  //           handlePlaceSelect={place => {
  //             // 센터 선택 후
  //             handlePlaceSelect(place);
  //             closeModal(modalId); // 현재 센터 검색 모달 닫기
  //             closeModal(previousModalId); // 이전 경력 입력 모달도 닫기
  //           }}
  //         />
  //       ),
  //     });
  //   },
  //   [openModal, closeModal],
  // );

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
      <Wrapper type="column" mb="20px">
        <Typography variant="heading2" fw={600}>
          경력 입력
        </Typography>
        <EventButton
          // event={handleConfirm}
          isIconVisible={true}
          iconType="plusPurple"
          eventButtonType="purple"
          height="4rem"
          justifyContent="center"
        />
      </Wrapper>
      <Wrapper type="column" mb="20px">
        <Typography variant="heading2" fw={600}>
          자격증/수상/교육 등록
        </Typography>
        <EventButton
          // event={handleConfirm}
          isIconVisible={true}
          iconType="plusPurple"
          eventButtonType="purple"
          height="4rem"
          justifyContent="center"
        />
      </Wrapper>
      <Wrapper type="column" mb="20px">
        <Typography variant="heading2" fw={600}>
          학력사항 등록
        </Typography>
        <EventButton
          // event={handleConfirm}
          isIconVisible={true}
          iconType="plusPurple"
          eventButtonType="purple"
          height="4rem"
          justifyContent="center"
        />
      </Wrapper>
      <Wrapper jc="center" ai="center">
        등록된 트레이너 이력은 회원페이지에 노출이 됩니다.
      </Wrapper>
      <ButtonAreaFixed
        // isButtonDisabled={isButtonDisabled}
        // onClick={handleSubmit}
        label="다음"
      />
    </TrainerLayout>
  );
}
