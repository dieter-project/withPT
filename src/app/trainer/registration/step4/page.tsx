"use client";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { EventButton } from "@/components/trainer/atoms/button/EventButton";
import JoinStep from "@/components/trainer/molecules/signupStep/SignUpStep";
import Wrapper from "@/components/trainer/molecules/wrapper/Wrapper";
import { TrainerLayout } from "@/app/trainer/layout";
import { SignupTitleWrapper } from "@/components/trainer/molecules/wrapper/SignupTitleWrapper";
import { api } from "@/utils/axios";
import { setCookie } from "@/utils/cookie";
import { ButtonAreaFixed } from "@/components/trainer/molecules/buttonAreaFixed/ButtonAreaFixed";
import { useModal } from "@/context/trainer/ModalContext";
import { Typography } from "@/components/trainer/atoms/typography/TypoGraphy.styles";
import { Icon } from "@/components/common/svgIcon/SvgIcon";
import { CareerModalContent } from "@/components/trainer/molecules/modal/careerModalContent/CareerModalContent";

export default function Step4() {
  const router = useRouter();
  const STEP_CONFIG = {
    STEP: "4",
    TITLE: "이력 등록",
    TOP_TITLE: "내 이력을 등록해주세요",
    UNDER_TITLE: "회원가입 후 마이페이지에서도 입력이 가능해요.",
    MODAL_CAREER_TITLE: "경력 입력",
    MODAL_CERTIFICATE_TITLE: "자격증/수샹/교육 등록",
    MODAL_EDUCATION_TITLE: "학력사항 등록",
    NEXT_STEP_URL: "/trainer/registration/finished",
  } as const;

  const { openModal, closeModal } = useModal();

  const careerModalContent = React.useMemo(() => <CareerModalContent />, []);

  const openSearchModal = React.useCallback(() => {
    openModal({
      type: "default",
      title: STEP_CONFIG.MODAL_CAREER_TITLE,
      content: careerModalContent,
    });
  }, [openModal, careerModalContent]);

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

  return (
    <TrainerLayout
      title={STEP_CONFIG.TITLE}
      hasHeader={true}
      hasFooter={false}
      variant="withBack"
    >
      <JoinStep active={STEP_CONFIG.STEP} />
      <SignupTitleWrapper
        topTitle={STEP_CONFIG.TOP_TITLE}
        underTitle={STEP_CONFIG.UNDER_TITLE}
      />
      <Wrapper type="columnDefault" marginBottom="20px">
        <Typography variant="heading2" fw={600}>
          경력 입력
        </Typography>
        <EventButton
          event={() => openSearchModal()}
          isIconVisible={true}
          iconType="plusPurple"
          $eventButtonType="purple50"
          height="4rem"
          justifyContent="center"
        />
      </Wrapper>
      <Wrapper type="columnDefault" marginBottom="20px">
        <Typography variant="heading2" fw={600}>
          자격증/수상/교육 등록
        </Typography>
        <EventButton
          // event={handleConfirm}
          isIconVisible={true}
          iconType="plusPurple"
          $eventButtonType="purple50"
          height="4rem"
          justifyContent="center"
        />
      </Wrapper>
      <Wrapper type="columnDefault" marginBottom="20px">
        <Typography variant="heading2" fw={600}>
          학력사항 등록
        </Typography>
        <EventButton
          // event={handleConfirm}
          isIconVisible={true}
          iconType="plusPurple"
          $eventButtonType="purple50"
          height="4rem"
          justifyContent="center"
        />
      </Wrapper>
      <Wrapper type="spaceBetween">
        <Icon name="notification" size={24} />
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
