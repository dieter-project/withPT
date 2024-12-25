"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { TrainerLayout } from "@/app/trainer/layout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import { NoIconInput } from "@/styles/Trainer/TrainerInput";
import JoinStep from "@/components/trainer/molecules/SignupStep/SignUpStep";
import { FormRadio, StyledLabel } from "./style";
import Wrapper from "@/components/trainer/molecules/Wrapper/Wrapper";
import { Typography } from "@/components/trainer/atoms/Typography/TypoGraphy.styles";
import LabelField from "@/components/trainer/molecules/LabelField/LabelField";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import { useStep1 } from "@/hooks/trainer/registration/useStep1";

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
        <LabelField type="column" label="이름">
          <NoIconInput
            {...register("name", {
              required: "이름을 입력해주세요",
              minLength: { value: 2, message: "이름은 2자 이상이어야 합니다" },
              pattern: {
                value: /^[가-힣a-zA-Z]+$/,
                message: "올바른 이름을 입력해주세요",
              },
            })}
            placeholder="이름을 입력해주세요"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </LabelField>

        <LabelField type="column" innertype="spaceBetween" label="생년월일">
          <Controller
            name="birth.year"
            control={control}
            rules={{ required: "연도를 입력해주세요" }}
            render={({ field }) => (
              <NoIconInput
                {...field}
                maxLength={4}
                inputMode="numeric"
                placeholder="YYYY"
                onChange={e => handleInputChange(e, "year")}
              />
            )}
          />
          <Typography variant="title2" fw={600}>
            /
          </Typography>
          <Controller
            name="birth.month"
            control={control}
            rules={{ required: "월을 입력해주세요" }}
            render={({ field }) => (
              <NoIconInput
                {...field}
                maxLength={2}
                inputMode="numeric"
                placeholder="MM"
                onChange={e => handleInputChange(e, "month")}
              />
            )}
          />
          <Typography variant="title2" fw={600}>
            /
          </Typography>
          <Controller
            name="birth.date"
            control={control}
            rules={{ required: "일을 입력해주세요" }}
            render={({ field }) => (
              <NoIconInput
                {...field}
                maxLength={2}
                inputMode="numeric"
                placeholder="DD"
                onChange={e => handleInputChange(e, "date")}
              />
            )}
          />
        </LabelField>

        <LabelField type="column" label="성별">
          <Wrapper type="spaceBetween" gap="10px">
            <FormRadio>
              <input
                id="gender-male"
                type="radio"
                value="MAN"
                {...register("sex")}
              />
              <StyledLabel htmlFor="gender-male">남자</StyledLabel>
            </FormRadio>
            <FormRadio>
              <input
                id="gender-female"
                type="radio"
                value="WOMAN"
                {...register("sex")}
              />
              <StyledLabel htmlFor="gender-female">여자</StyledLabel>
            </FormRadio>
          </Wrapper>
        </LabelField>
        <ButtonAreaFixed
          isButtonDisabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          label="다음"
        />
      </form>
    </TrainerLayout>
  );
}
