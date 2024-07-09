'use client'

import PageTitle from '@/components/PageTitle'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/styles/Button'
import { LabelTitle, SignUpTitleText, SignUpSubtext } from '@/styles/Text'
import { InputWrap } from '@/styles/Input'
import { SignUpTitleWrap } from '@/styles/SignupForm'
import { BaseContentWrap, ButtonAreaFixed } from '@/styles/Layout'
import { WeightInput } from '@/app/member/signup/step3/styles'
import { getMemberInfo, patchMemberWeight } from '@/services/member/member'

const page = () => {
  const title = '목표 설정'
  const router = useRouter()

  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputData, setInputData] = useState({
    targetWeight: ""
  })
  const [currWeight, setCurrWeight] = useState(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData, 
      targetWeight: event.target.value.replace(/[^0-9.]/g, '')
    })
  }

  const getWeight = async () => {
    const { data: { data } } = await getMemberInfo()
    console.log('data: ', data);
    setInputData({...inputData, targetWeight: data.weight})
    setCurrWeight(data.weight)
  }

  const handleSubmit = async () => {
    try {
      await patchMemberWeight(inputData)
      router.push(`/member/mypage`)
    } catch (error) {
      console.log('error: ', error);
    }
  }
  
  useEffect(() => {
    getWeight()
  }, [])

  return (
  <>
    <PageTitle title={title}/>
    <BaseContentWrap>
      <div>
        <SignUpTitleWrap>
          <SignUpTitleText>변경할 목표체중을 입력해주세요</SignUpTitleText>
          <SignUpSubtext>회원님의 목표 체중을 알려주세요.</SignUpSubtext>
        </SignUpTitleWrap>
        <div>
          <WeightInput>
            <LabelTitle>현재 목표체중</LabelTitle>
            <InputWrap>
              <input 
                type="text" 
                name="" 
                id="" 
                onChange={handleInputChange}
                value={inputData.targetWeight}
                ref={inputRef}
                inputMode='decimal'
              />
              <span>kg</span>
            </InputWrap>
          </WeightInput>
        </div>
      </div>
      <ButtonAreaFixed $nav={true}>
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