"use client";

import PageTitle from '@/components/PageTitle'
import JoinStep from '@/components/SignUpStep'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { LabelTitle, SignUpTitleText, SignUpSubtext } from '@/styles/Text'
import { Input, InputRowWrap, InputWrap } from '@/styles/Input'
import { Button } from '@/styles/Button'
import { useDispatch } from 'react-redux'
import { signupActions } from '@/redux/reducers/signupSlice'
import { BaseContentWrap, ButtonAreaFixed } from '@/styles/Layout'
import { SignUpInputContainer, SignUpTitleWrap } from '@/styles/SignupForm'
import { useAppSelector } from '@/redux/hooks'
import { RadioButton } from './styles'
import { Imember } from '@/types/member/member';

const page = () => {
  const [inputData, setInputData] = useState<Imember>({
    name: "",
    birth: {
      year: "",
      month: "",
      date: "",
    },
    sex: "",
    height: "",
    weight: "",
  });
  const title = "회원가입";

  const router = useRouter()
  const nameRef = useRef<null | HTMLInputElement>(null)
  const birthRef = useRef<null[] | HTMLInputElement[]>([])
  const sexRef = useRef<null | HTMLInputElement>(null)
  const heightRef = useRef<null | HTMLInputElement>(null)
  const weightRef = useRef<null | HTMLInputElement>(null)

  const dispatch = useDispatch();
  const states = useAppSelector(state => state.signup);

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
    } else {
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  const handleHeightWeightChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;

    setInputData({
      ...inputData,
      [name]: value.replace(/[^0-9.]/g, ""),
    });
  };

  const handleNext = () => {
    
    const birthJoin = typeof inputData.birth !== 'string' 
      ? `${inputData.birth.year}-${inputData.birth.month.padStart(2, '0')}-${inputData.birth.date.padStart(2, '0')}`
      : ''
    
    if (inputData.name.length <= 0 && nameRef.current !== null) { 
      nameRef.current.focus();
      return false;
    }
    if (typeof inputData.birth !== 'string' && inputData.birth.year.length <= 0 && birthRef.current[0] !== null) { 
      birthRef.current[0].focus();
      return false;
    }
    if (typeof inputData.birth !== 'string' && inputData.birth.month.length <= 0 && birthRef.current[1] !== null) { 
      birthRef.current[1].focus();
      return false;
    }
    if (typeof inputData.birth !== 'string' && inputData.birth.date.length <= 0 && birthRef.current[2] !== null) { 
      birthRef.current[2].focus();
      return false;
    }
    if (inputData.sex.length <= 0 && sexRef.current !== null) { 
      sexRef.current.focus();
      return false;
    }
    if (inputData.height.length <= 0 && heightRef.current !== null) { 
      heightRef.current.focus();
      return false;
    }
    if (inputData.weight.length <= 0 && weightRef.current !== null) { 
      weightRef.current.focus();
      return false;
    }

    dispatch(
      signupActions.saveSignupState({
        name: inputData.name.trim(),
        birth: birthJoin,
        sex: inputData.sex,
        height: inputData.height.trim(),
        weight: inputData.weight.trim(),
      }),
    );
    // sessionStorage.setItem('member_login_step1', JSON.stringify(inputData))
    router.push(`/member/signup/step2`);
    console.log("states: ", states);
  };

  useEffect(() => {
    // dispatch(signupActions.signupStateReset())
  }, [])

  return (
    <>
      <PageTitle title={title} />
      <BaseContentWrap>
        <JoinStep active={"1"} />
        <div>
          <SignUpTitleWrap>
            <SignUpTitleText>안녕하세요, 회원님!</SignUpTitleText>
            <SignUpSubtext>아래 정보가 맞는지 확인해주세요.</SignUpSubtext>
          </SignUpTitleWrap>
          <div>
            <SignUpInputContainer>
              <LabelTitle>이름</LabelTitle>
              <Input
                type="text"
                name="name"
                value={inputData.name}
                onChange={handleInputChange}
                ref={nameRef}
              />
            </SignUpInputContainer>
            <SignUpInputContainer>
              <LabelTitle>생년월일</LabelTitle>
              <InputRowWrap>
                <Input
                  type="text"
                  name="year"
                  value={
                    typeof inputData.birth !== "string"
                      ? inputData.birth.year
                      : ""
                  }
                  maxLength={4}
                  onChange={handleInputChange}
                  ref={(element) => birthRef.current[0] = element}
                  inputMode='decimal'
                  />/
                <Input 
                  type="text"
                  name="month"
                  maxLength={2}
                  value={
                    typeof inputData.birth !== "string"
                      ? inputData.birth.month
                      : ""
                  }
                  onChange={handleInputChange}
                  ref={(element) => birthRef.current[1] = element}
                  inputMode='decimal'
                />/
                <Input 
                  type="text" 
                  name="date"
                  maxLength={2}
                  value={
                    typeof inputData.birth !== "string"
                      ? inputData.birth.date
                      : ""
                  }
                  onChange={handleInputChange}
                  ref={(element) => birthRef.current[2] = element}
                  inputMode='decimal'
                />
              </InputRowWrap>
            </SignUpInputContainer>
            <SignUpInputContainer>
              <LabelTitle>성별</LabelTitle>
              <RadioButton>
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value="MAN"
                    onChange={handleInputChange}
                    ref={sexRef}  
                  />
                  <span>남성</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value="WOMAN"
                    onChange={handleInputChange}
                    ref={sexRef}
                  />
                  <span>여성</span>
                </label>
              </RadioButton>
            </SignUpInputContainer>
            <SignUpInputContainer>
              <LabelTitle>키, 몸무게</LabelTitle>
              <InputRowWrap>
                <InputWrap>
                  <Input
                    type="text"
                    value={inputData.height}
                    name="height"
                    onChange={handleHeightWeightChange}
                    ref={heightRef}
                    inputMode='decimal'
                  />
                  <span>cm</span>
                </InputWrap>
                /
                <InputWrap>
                  <Input
                    type="text"
                    value={inputData.weight}
                    name="weight"
                    onChange={handleHeightWeightChange}
                    ref={weightRef}
                    inputMode='decimal'
                  />
                  <span>kg</span>
                </InputWrap>
              </InputRowWrap>
            </SignUpInputContainer>
          </div>
        </div>
        <ButtonAreaFixed $nav={false}>
          <Button 
            $variant='primary' 
            onClick={handleNext}
          >다음</Button>
        </ButtonAreaFixed>
      </BaseContentWrap>
    </>
  );
};

export default page;
