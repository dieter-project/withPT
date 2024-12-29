"use client";
import React from "react";
import { TrainerLayout } from "@/app/trainer/layout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import JoinStep from "@/components/trainer/molecules/SignupStep/SignUpStep";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import { useStep1 } from "@/hooks/trainer/registration/useStep1";
import { RegistrationFormFields } from "@/components/trainer/organisms/RegistrationFormFields";

const STEP_CONFIG = {
  STEP: "1",
  TITLE: "회원가입",
  TOP_TITLE: "안녕하세요. 트레이너님!",
  UNDER_TITLE: "아래 정보가 맞는지 확인해주세요.",
  NEXT_STEP_URL: "/trainer/signup/step2",
} as const;

export default function Step1() {
  const { form, handleInputChange, onSubmit } = useStep1();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  return (
    <TrainerLayout
      title={STEP_CONFIG.TITLE}
      hasHeader={true}
      hasFooter={false}
      variant="withBack"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <JoinStep active={STEP_CONFIG.STEP} />
        <TitleWrapper
          topTitle={STEP_CONFIG.TOP_TITLE}
          underTitle={STEP_CONFIG.UNDER_TITLE}
        />
        <RegistrationFormFields
          form={{
            control,
            register,
            formState: { errors },
          }}
          handleInputChange={handleInputChange}
        />
        <ButtonAreaFixed
          isButtonDisabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          label="다음"
        />
      </form>
    </TrainerLayout>
  );
}
