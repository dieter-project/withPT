"use client";

import PageHeader from "@/components/PageHeader";
import JoinStep from "@/components/SignUpStep";
import { targetDiet } from "@/constants/signup";
import { useAppSelector } from "@/redux/hooks";
import { signupActions } from "@/redux/reducers/signupSlice";
import { Button } from "@/styles/Button";
import { BaseContentWrap, ButtonAreaFixed } from "@/styles/Layout";
import { SignUpInputContainer } from "@/styles/SignupForm";
import { SignUpTitleText, SignUpSubtext } from "@/styles/Text";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MealIcon, MealText, RadioButton } from "./styles";

const page = () => {
  const title = "식단 설정";
  const router = useRouter();
  const dispatch = useDispatch();
  const states = useAppSelector(state => state.signup);
  const [inputData, setInputData] = useState({
    dietType: "",
  });

  useEffect(() => {
    console.log("states: ", states);
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, dietType: event.target.value });
  };

  const handleNext = () => {
    if (inputData.dietType.length <= 0) {
      alert("체크 plz");
      return false;
    }
    dispatch(
      signupActions.saveSignupState({
        dietType: inputData.dietType,
      }),
    );
    // sessionStorage.setItem('member_login_step3', JSON.stringify(inputData))
    router.push(`/member/signup/step3`);
  };

  return (
    <>
      <PageHeader title={title} />
      <BaseContentWrap>
        <JoinStep active={"2"} />
        <div>
          <SignUpInputContainer>
            <SignUpTitleText>목표식단을 선택해주세요.</SignUpTitleText>
            <SignUpSubtext>어떤 식단으로 진행하시나요?</SignUpSubtext>
          </SignUpInputContainer>
          <RadioButton>
            {targetDiet?.map((diet, index) => {
              return (
                <label>
                  <input
                    key={index}
                    type="radio"
                    name="meal"
                    value={diet.vlaue}
                    onChange={handleOnChange}
                  />
                  <div className="meal-item">
                    <MealText>
                      <h3>{diet.title}</h3>
                      <div>{diet.subtitle}</div>
                      <p>{diet.balance}</p>
                    </MealText>
                    <MealIcon
                      style={{
                        background: `url(${diet.icon}) no-repeat`,
                        backgroundColor: "white",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                </label>
              )
            }) 
          }
        </RadioButton>
      </div>
      <ButtonAreaFixed $nav={false}>
        <Button $variant="primary" onClick={handleNext}>다음</Button>
      </ButtonAreaFixed>
    </BaseContentWrap>
  </>
  )
}

export default page;
