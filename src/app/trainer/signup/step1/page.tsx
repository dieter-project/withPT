"use client";
import React from "react";
import { TrainerLayout } from "@/app/trainer/layout";
import { Container, ContentBody } from "@/styles/Trainer/TrainerLayout";
import { TitleWrapper } from "@/components/trainer/signup/TitleWrapper";
import ContentHeader from "@/components/TrainerPageTitle";
import { NoIconInput } from "@/styles/Trainer/TrainerInput";
import JoinStep from "@/components/trainer/TrSignUpStep";
import { FormRadio, Slash, StyledLabel } from "./style";
import LabelField from "@/components/trainer/molecules/LabelField/LabelField";
import { ButtonAreaFixed } from "@/components/trainer/signup/ButtonAreaFixed";
import { signup1 } from "@/services/trainer/signup/signup1";

export default function Step1() {
  const title = "회원가입";
  const { inputData, handleInputChange, handleNext, isButtonDisabled, errors } =
    signup1();

  return (
    <TrainerLayout
      title={title}
      hasHeader={true}
      hasFooter={false}
      variant="iconBack"
    >
      <JoinStep active="1" />
      <TitleWrapper
        topTitle="안녕하세요. 트레이너님!"
        underTitle="아래 정보가 맞는지 확인해주세요."
      />
      {/* 이름 입력 */}
      <LabelField type="column" label="이름">
        <NoIconInput
          type="text"
          name="name"
          value={inputData.name}
          onChange={handleInputChange}
        />
      </LabelField>
      {/* 생년월일 입력 */}
      <LabelField type="column" innertype="spaceBetween" label="생년월일">
        <NoIconInput
          type="text"
          name="year"
          value={inputData.birth.year}
          onChange={handleInputChange}
          maxLength={4}
          inputMode="decimal"
        />
        <Slash>/</Slash>
        <NoIconInput
          type="text"
          name="month"
          value={inputData.birth.month}
          onChange={handleInputChange}
          maxLength={2}
          inputMode="decimal"
        />
        <Slash>/</Slash>
        <NoIconInput
          type="text"
          name="date"
          value={inputData.birth.date}
          onChange={handleInputChange}
          maxLength={2}
          inputMode="decimal"
        />
      </LabelField>
      {/* 성별 선택 */}
      <LabelField type="column" innertype="spaceBetween" label="성별">
        <FormRadio>
          <input
            id="gender-male"
            type="radio"
            name="sex"
            value="MAN"
            onChange={handleInputChange}
            checked={inputData.sex === "MAN"}
          />
          <StyledLabel htmlFor="gender-male">남자</StyledLabel>
        </FormRadio>
        <FormRadio>
          <input
            id="gender-female"
            type="radio"
            name="sex"
            value="WOMAN"
            onChange={handleInputChange}
            checked={inputData.sex === "WOMAN"}
          />
          <StyledLabel htmlFor="gender-female">여자</StyledLabel>
        </FormRadio>
      </LabelField>
      <ButtonAreaFixed
        isButtonDisabled={isButtonDisabled}
        onClick={handleNext}
        nextStepUrl="/trainer/signup/step2"
        label="다음"
      />
    </TrainerLayout>
  );
}
