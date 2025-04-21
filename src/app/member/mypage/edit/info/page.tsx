'use client';

import Header from "@/components/member/layout/Header";
import PageHeader from "@/components/member/layout/PageHeader";
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
import { getMemberInfo, patchMemberInfo } from "@/services/member/member";
import { Imember } from "@/types/member/member";
import { useRouter } from "next/navigation";

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
    birth: "",
    sex: "",
    height: "",
    weight: "",
  })

  const nameRef = useRef<null | HTMLInputElement>(null)
  const birthRef = useRef<null[] | HTMLInputElement[]>([])
  const sexRef = useRef<null | HTMLInputElement>(null)
  const heightRef = useRef<null | HTMLInputElement>(null)
  const weightRef = useRef<null | HTMLInputElement>(null)
  
  const router = useRouter();

  useEffect(() => {
    const token = getCookie('access')
    // console.log('token: ', token);
  }, [])

  useEffect(()=>{
    console.log('inputData: ', inputData);

  }, [inputData])


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

  const getInfo = async () => {
    const { data: { data } } = await getMemberInfo()
    console.log('data: ', data);
    setInputData(prev => ({
      ...prev,
      name: data.name,
      sex: data.sex,
      birth: data.birth,
      height: data.height,
      weight: data.weight
    }))
  }


  const handleEdit = async () => {

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
    await patchMemberInfo(inputData);
    router.push('/member/mypage')
    // sessionStorage.setItem('member_login_step1', JSON.stringify(inputData))
  }

  useEffect(() => {
    getInfo();

  }, [])

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
            <LabelTitle>생년월일</LabelTitle>
            <InputRowWrap>
              <Input
                type="text"
                name="year"
                value={
                  typeof inputData.birth !== "string"
                    ? inputData.birth.year
                    : inputData.birth.split("-")[0]
                }
                maxLength={4}
                onChange={handleInputChange}
                ref={(element) => birthRef.current[0] = element}
                inputMode='decimal'
                disabled
              />/
              <Input
                type="text"
                name="month"
                maxLength={2}
                value={
                  typeof inputData.birth !== "string"
                    ? inputData.birth.month
                    : inputData.birth.split("-")[1]
                }
                onChange={handleInputChange}
                ref={(element) => birthRef.current[1] = element}
                inputMode='decimal'
                disabled
              />/
              <Input
                type="text"
                name="date"
                maxLength={2}
                value={
                  typeof inputData.birth !== "string"
                    ? inputData.birth.date
                    : inputData.birth.split("-")[2]
                }
                onChange={handleInputChange}
                ref={(element) => birthRef.current[2] = element}
                inputMode='decimal'
                disabled
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
                  disabled
                />
                <span>kg</span>
              </InputWrap>
            </InputRowWrap>
          </SignUpInputContainer>
        </div>
        <ButtonAreaFixed $nav={true}>
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