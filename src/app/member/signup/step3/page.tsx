'use client'

import PageTitle from '@/components/PageTitle'
import JoinStep from '@/components/SignUpStep'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/styles/Button'
import { LabelTitle, SignUpTitleText, SignUpSubtext } from '@/styles/Text'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { signupActions } from '@/redux/reducers/signupSlice'
import { useAppSelector } from '@/redux/hooks'
import { InputWrap } from '@/styles/Input'
import { SignUpTitleWrap } from '@/styles/SignupForm'
import { BaseContentWrap, ButtonAreaFixed } from '@/styles/Layout'
import { HelperText, WeightInput } from './styles'



const page = () => {
  const title = '목표 설정'
  const router = useRouter()
  const dispatch = useDispatch()
  const states = useAppSelector((state) => state.signup)
  const inputRef = useRef<HTMLInputElement | null>(null)
  let helperTextFlag = false
  let helperText = ""
  
  const [inputData, setInputData] = useState({
    targetWeight: ""
  })

  interface Input {
    targetWeight: string
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData, 
      targetWeight: event.target.value.replace(/[^0-9.]/g, '')
    })
  }

  // useEffect(() => {

  // }, [inputData.targetWeight])

  const handleNext = () => {
    if (inputData.targetWeight.length <= 0 && inputRef.current !== null) {
      inputRef.current.focus()
      return false;
    }

    dispatch(signupActions.saveSignupState({
      targetWeight: inputData.targetWeight.trim(),
    }))

    router.push(`/member/signup/step4`)
  }
  
  useEffect(() => {
    console.log('states: ', states);
  }, [])

  return (
  <>
    <PageTitle title={title}/>
    <BaseContentWrap>
      <JoinStep active={'3'}/>
      <div>
        <SignUpTitleWrap>
          <SignUpTitleText>나의 목표를 설정해주세요!</SignUpTitleText>
          <SignUpSubtext>회원님의 목표 체중을 알려주세요.</SignUpSubtext>
        </SignUpTitleWrap>
        <div>
          <WeightInput>
            <LabelTitle>목표체중</LabelTitle>
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
            {inputData.targetWeight.length > 0 && 
              <HelperText>
                {`현재 체중에서 ${Number(states.weight) - Number(inputData.targetWeight)}kg 감량이 목표시군요!`}
              </HelperText>}
          </WeightInput>
        </div>
      </div>
      <ButtonAreaFixed nav={false.toString()}>
        <Button 
          variant='primary' 
          onClick={handleNext}
        >다음</Button>
      </ButtonAreaFixed>
    </BaseContentWrap>
  </>
  )
}

export default page;