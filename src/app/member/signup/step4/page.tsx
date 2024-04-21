"use client";

import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import JoinStep from "@/components/SignUpStep";
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
import { useCookies } from "react-cookie";

const page = () => {
  const title = "목표 설정";
  const router = useRouter();
  const dispatch = useDispatch();
  const states = useAppSelector(state => state.signup);
  const [coockies, setCookie] = useCookies(["access", "refreshToken"])

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
        // email: "test@test.kr",
        //   oauthProvider: "KAKAO",
        // nickname: "test"
      }),
    );
    console.log("states: ", states);
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
      const response = await api.post('/api/v1/members/sign-up', states)

      if (response.data.data.accessToken) {
        // dispatch(memberActions.getToken(response.data.data.accessToken))
        dispatch(memberActions.isLogin({
          name: response.data.data.name,
          email: response.data.data.email,
          id: response.data.data.id,
          accessToken: response.data.data.accessToken
        }))
        // const now = Date.now()
        setCookie("access", response.data.data.accessToken)
        setCookie("refreshToken", response.data.data.refreshToken)

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
      <PageTitle title={title} />
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
