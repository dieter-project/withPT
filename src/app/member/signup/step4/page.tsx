"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "@/components/member/layout/PageHeader";
import JoinStep from "@/components/member/signup/SignUpStep";
import { useAppSelector } from "@/redux/hooks";
import { signupActions } from "@/redux/reducers/signupSlice";
import { Button } from "@/styles/Button";
import { BaseContentWrap, ButtonAreaFixed } from "@/styles/Layout";
import { SignUpTitleWrap } from "@/styles/SignupForm";
import { SignUpTitleText, SignUpSubtext } from "@/styles/Text";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { api } from "@/utils/axios";
import { memberActions } from "@/redux/reducers/memberSlice";
import { RadioButton, RecommendBadge } from "./styles";
import { exerciseFrequency } from "@/constants/signup";
import { setCookie } from "@/utils/cookie";
import { requestSignup } from "@/services/member/auth";

const page = () => {
  const title = "목표 설정";
  const router = useRouter();
  const dispatch = useDispatch();
  const states = useAppSelector(state => state.signup);

  const [inputData, setInputData] = useState({
    exerciseFrequency: "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      exerciseFrequency: event.target.value,
    });
  };

  useEffect(() => {
    dispatch(
      signupActions.saveSignupState({
        exerciseFrequency: inputData.exerciseFrequency,
      }),
    );
    // console.log("states: ", states);
  }, [inputData.exerciseFrequency]);

  const handleSubmit = async () => {
    console.log("states: ", states);
    dispatch(
      signupActions.saveSignupState({
        exerciseFrequency: inputData.exerciseFrequency,
      }),
    );

    if (inputData.exerciseFrequency.length <= 0) {
      alert("체크 plz");
      return false;
    }

    try {
      const response = await requestSignup(states)

      if (response.data.data.accessToken) {
        // dispatch(memberActions.getToken(response.data.data.accessToken))
        dispatch(memberActions.isLogin({
          name: response.data.data.name,
          email: response.data.data.email,
          id: response.data.data.id,
          accessToken: response.data.data.accessToken
        }))
        // const now = Date.now()
        setCookie("access", response.data.data.accessToken, { path: "/" })
        setCookie("refreshToken", response.data.data.refreshToken, { path: "/" })
        localStorage.setItem('role', response.data.data.role)
        router.replace('/member/signup/finished')
      } else {
        //alert
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    console.log("states: ", states);
    // return () => {
    //   dispatch(signupActions.signupStateReset())
    // }
  }, []);

  return (
    <>
      <PageHeader back={true} title={title} />
      <BaseContentWrap>
        <JoinStep active={"4"} />
        <div>
          <SignUpTitleWrap>
            <SignUpTitleText>나의 목표를 설정해주세요!</SignUpTitleText>
            <SignUpSubtext>운동을 주 몇 회를 생각하시나요?</SignUpSubtext>
          </SignUpTitleWrap>
          <RadioButton>
            {exerciseFrequency?.map((time, index) => {
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="workout"
                    value={time.value}
                    onChange={handleOnChange}
                  />
                  <span>{time.title}</span>
                  {index === 2 && <RecommendBadge>추천 목표</RecommendBadge>}
                </label>
              )
            })
            }
          </RadioButton>
        </div>
        <ButtonAreaFixed $nav={false}>
          <Button
            $variant='primary'
            onClick={handleSubmit}
          >저장하기</Button>
        </ButtonAreaFixed>
      </BaseContentWrap>
    </>
  )
}

export default page;
