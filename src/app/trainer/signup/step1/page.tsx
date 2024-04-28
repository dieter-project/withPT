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
import { styled } from "styled-components";

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
  const birthRef = useRef<null[] | HTMLInputElement[]>([]);
  const sexRef = useRef<null | HTMLInputElement>(null);

  const inputRef = useRef<null[] | HTMLInputElement[]>([]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "year" || name === "month" || name === "date") {
      setInputData(prevState => ({
        ...prevState,
        birth:
          typeof prevState.birth !== "string"
            ? {
                ...prevState.birth,
                [name]: value.replace(/[^0-9.]/g, ""),
              }
            : "",
      }));
    } else if (name === "sex") {
      setInputData({
        ...inputData,
        [name]: value,
      });
    } else {
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

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
        //이름 공백 제거
        name: inputData.name.trim(),
        birth: birthJoin,
        sex: inputData.sex,
      }),
    );
    // sessionStorage.setItem('member_login_step1', JSON.stringify(inputData))
    console.log("inputData", inputData);
    // router.push(`/trainer/signup/step2`);
    console.log("states: ", states);
  };

  useEffect(() => {}, []);

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
                ref={element => (birthRef.current[0] = element)}
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
                ref={element => (birthRef.current[1] = element)}
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
                ref={element => (inputRef.current[3] = element)}
                inputMode="decimal"
                style={{ textAlign: "center" }}
                required
              ></NoIconInput>
            </SignupInputInnerContainer>
          </SignUpInputContainer>
          <SignUpInputContainer>
            <FormTitle>성별</FormTitle>
            <SignupInputInnerContainer>
              <TrGenderLabel
                style={
                  {
                    // border:
                    //   sexRef === "MAN" ? "1.5px solid var(--primary)" : "none",
                    // color: sexRef === "MAN" ? "var(--primary)" : "black",
                  }
                }
              >
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
              <TrGenderLabel
                // name="sex"
                // htmlFor="radio-box1"
                // selected="WOMAN"
                style={
                  {
                    // border:
                    //   sexRef === "WOMAN" ? "1.5px solid var(--primary)" : "none",
                    // color: sexRef === "WOMAN" ? "var(--primary)" : "black",
                  }
                }
              >
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
            <Button variant="primary" onClick={handleNext}>
              다음
            </Button>
          </Link>
        </ButtonAreaFixed>
      </ContentBody>
    </Container>
  );
}
