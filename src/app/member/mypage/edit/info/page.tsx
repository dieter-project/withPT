'use client';

import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import { Input, InputRowWrap, InputWrap } from "@/styles/Input";
import { BaseContentWrap, ButtonAreaFixed } from "@/styles/Layout";
import { SignUpInputContainer } from "@/styles/SignupForm";
import { LabelTitle } from "@/styles/Text";
import { RadioButton } from "@/app/member/signup/step1/styles";
import { api } from "@/utils/axios";
import { getCookie } from "@/utils/cookie";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "@/styles/Button";

interface Imember {
  name: string,
  sex: string,
  height: string,
  weight: string,
}

const ProfileWrap = styled.div`
  width: 6.375rem;
  height: 6.375rem;
  margin: 0 auto;
  position: relative;
  > div:first-child {
    width: 6.375rem;
    height: 6.375rem;
    border-radius: 50%;
    background-color: var(--purple50);
  }
  > div:last-child {
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--primary);
    border-radius: 50%;
    border: 2px solid var(--white);
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
  }
`
const page = () => {
  const title = "내 정보 수정"
  const [inputData, setInputData] = useState<Imember>({
    name: "",
    sex: "",
    height: "",
    weight: "",
  })

  const nameRef = useRef<null | HTMLInputElement>(null)
  const sexRef = useRef<null | HTMLInputElement>(null)
  const heightRef = useRef<null | HTMLInputElement>(null)
  const weightRef = useRef<null | HTMLInputElement>(null)

  useEffect(() => {
    const token = getCookie('access')
    console.log('token: ', token);
  }, [])


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputData({
      ...inputData,
      [name]: value
    })
  }


  const handleHeightWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputData({
      ...inputData,
      [name]: value.replace(/[^0-9.]/g, "")
    })
  }


  const handleEdit = () => {
    
    if (inputData.name.length <= 0 && nameRef.current !== null) { 
      nameRef.current.focus();
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

    // sessionStorage.setItem('member_login_step1', JSON.stringify(inputData))
  }

  return (
    <>
      <Header title={title} back={true} />
      <BaseContentWrap>
        <ProfileWrap>
          <div>
            <img src="" alt="" />
          </div>
          <div></div>
        </ProfileWrap>
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
                  name='height'
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
                  name='weight'
                  onChange={handleHeightWeightChange}
                  ref={weightRef}
                  inputMode='decimal'
                />
                <span>kg</span>
              </InputWrap>
            </InputRowWrap>
          </SignUpInputContainer>
        </div>
        <ButtonAreaFixed $nav={false}>
          <Button
            $variant='primary'
            onClick={handleEdit}
          >저장하기</Button>
        </ButtonAreaFixed>
      </BaseContentWrap>
    </>
  )
}

export default page