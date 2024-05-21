"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Container,
  ContentBody,
  ButtonAreaFixed,
} from "@/styles/TrainerLayout";
import ContentHeader from "@/components/TrainerPageTitle";
import { Button } from "@/styles/TrainerButton";
import { NoIconInput } from "@/styles/TrainerInput";
import { signupActions } from "@/redux/reducers/trainerSignupSlice";
import { useAppSelector } from "@/redux/hooks";
import JoinStep from "@/components/Trainer/TrSignUpStep";
import {
  FormTitle,
  SignUpInputContainer,
  SignUpTitleWrap,
  SignupStepInfo,
  SignupStepInfoSub,
  SignupInputInnerContainer,
} from "@/styles/SignupForm";
import { TrGenderLabel, TrGenderRadio, Slash } from "./style";

interface Trbirth {
  year: string;
  month: string;
  date: string;
}

interface TrInfo {
  name: string;
  birth: Trbirth | string;
  sex: string;
}

export default function step1() {
  const dispatch = useDispatch();
  const states = useAppSelector(state => state.trainerSignup);
  const router = useRouter();
  const title = "회원가입";

  const [inputData, setInputData] = useState<TrInfo>({
    name: "",
    birth: {
      year: "",
      month: "",
      date: "",
    },
    sex: "",
  });

  const nameRef = useRef<null | HTMLInputElement>(null);
  const birthRef = useRef<(null | HTMLInputElement)[]>([]);
  const sexRef = useRef<null | HTMLInputElement>(null);
  const inputRef = useRef<(null | HTMLInputElement)[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "name" || name === "sex") {
      setInputData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
    if (name === "year" || name === "month" || name === "date") {
      setInputData(prevState => ({
        ...prevState,
        birth:
          typeof prevState.birth !== "string"
            ? {
                ...prevState.birth,
                [name]: value.replace(/[^0-9.]/g, ""),
              }
            : { year: "", month: "", date: "" },
      }));
    }
  };

  const [isDisabled, setIsDisabled] = useState(true);

  //조건에 따라 버튼 비활성화 시키기
  useEffect(() => {
    const isAnyFieldEmpty = () => {
      if (
        inputData.name.length === 0 ||
        (typeof inputData.birth !== "string" &&
          (inputData.birth.year.length === 0 ||
            inputData.birth.month.length === 0 ||
            inputData.birth.date.length === 0)) ||
        inputData.sex.length === 0
      ) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    };
    isAnyFieldEmpty();
  }, [inputData]);

  console.log("inputData", inputData.sex.length);

  const handleNext = () => {
    const birthJoin =
      typeof inputData.birth !== "string"
        ? `${inputData.birth.year}-${inputData.birth.month.padStart(
            2,
            "0",
          )}-${inputData.birth.date.padStart(2, "0")}`
        : "";

    if (
      inputData.name.length <= 0 &&
      inputRef.current[0] !== null &&
      inputRef.current[0] !== undefined
    ) {
      //해당 필드가 누락되었을 때 포커스 이동으로 사용자에게 정보 입력 안내하기
      inputRef.current[0].focus();
      return false;
    }
    if (
      typeof inputData.birth !== "string" &&
      inputData.birth.year.length <= 0 &&
      inputRef.current[1] !== null &&
      inputRef.current[1] !== undefined
    ) {
      inputRef.current[1].focus();
      return false;
    }
    if (
      typeof inputData.birth !== "string" &&
      inputData.birth.month.length <= 0 &&
      inputRef.current[2] !== null
    ) {
      inputRef.current[2].focus();
      return false;
    }
    if (
      typeof inputData.birth !== "string" &&
      inputData.birth.date.length <= 0 &&
      inputRef.current[3] !== null
    ) {
      inputRef.current[3].focus();
      return false;
    }
    if (inputData.sex.length <= 0 && inputRef.current[4] !== null) {
      inputRef.current[4].focus();
      return false;
    }

    dispatch(
      signupActions.saveSignupState({
        name: inputData.name.trim(),
        birth: birthJoin,
        sex: inputData.sex,
      }),
    );
    // console.log("inputData", inputData);
    // router.push(`/trainer/signup/step2`);
    // console.log("states: ", states);
  };

  return (
    <Container>
      <ContentHeader title={title}></ContentHeader>
      <ContentBody>
        <JoinStep active={"1"} />
        <div>
          <SignUpTitleWrap>
            <SignupStepInfo>안녕하세요 회원님!</SignupStepInfo>
            <SignupStepInfoSub>
              아래 정보가 맞는지 확인해주세요.
            </SignupStepInfoSub>
          </SignUpTitleWrap>
        </div>
        <div>
          <SignUpInputContainer>
            <FormTitle>이름</FormTitle>
            <SignupInputInnerContainer>
              <NoIconInput
                type="text"
                name="name"
                value={inputData.name}
                onChange={handleInputChange}
                ref={nameRef}
              ></NoIconInput>
            </SignupInputInnerContainer>
          </SignUpInputContainer>
          <SignUpInputContainer>
            <FormTitle>생년월일</FormTitle>
            <SignupInputInnerContainer>
              <NoIconInput
                type="text"
                name="year"
                value={
                  typeof inputData.birth !== "string"
                    ? inputData.birth.year
                    : ""
                }
                maxLength={4}
                onChange={handleInputChange}
                ref={(element: HTMLInputElement | null) =>
                  (birthRef.current[0] = element)
                }
                inputMode="decimal"
              ></NoIconInput>
              <Slash>/</Slash>
              <NoIconInput
                type="text"
                name="month"
                maxLength={2}
                value={
                  typeof inputData.birth !== "string"
                    ? inputData.birth.month
                    : ""
                }
                onChange={handleInputChange}
                ref={(element: HTMLInputElement | null) =>
                  (birthRef.current[1] = element)
                }
                inputMode="decimal"
                //  required
              ></NoIconInput>
              <Slash>/</Slash>
              <NoIconInput
                type="text"
                name="date"
                maxLength={2}
                value={
                  typeof inputData.birth !== "string"
                    ? inputData.birth.date
                    : ""
                }
                onChange={handleInputChange}
                ref={(element: HTMLInputElement | null) =>
                  (inputRef.current[3] = element)
                }
                inputMode="decimal"
                style={{ textAlign: "center" }}
                required
              ></NoIconInput>
            </SignupInputInnerContainer>
          </SignUpInputContainer>
          <SignUpInputContainer>
            <FormTitle>성별</FormTitle>
            <SignupInputInnerContainer>
              <TrGenderLabel>
                <TrGenderRadio
                  id="sex"
                  type="radio"
                  name="sex"
                  value="MAN"
                  onChange={handleInputChange}
                  ref={sexRef}
                ></TrGenderRadio>
                남자
              </TrGenderLabel>
              <TrGenderLabel>
                <TrGenderRadio
                  id="sex"
                  type="radio"
                  name="sex"
                  value="WOMAN"
                  onChange={handleInputChange}
                  ref={sexRef}
                ></TrGenderRadio>{" "}
                여자
              </TrGenderLabel>
            </SignupInputInnerContainer>
          </SignUpInputContainer>
        </div>
        <ButtonAreaFixed>
          <Link href="/trainer/signup/step2">
            <Button
              variant={isDisabled ? "ghost" : "primary"}
              onClick={handleNext}
              disabled={isDisabled}
            >
              다음
            </Button>
          </Link>
        </ButtonAreaFixed>
      </ContentBody>
    </Container>
  );
}
