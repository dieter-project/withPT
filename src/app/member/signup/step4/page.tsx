'use client'

import PageTitle from '@/components/PageTitle'
import JoinStep from '@/components/SignUpStep'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Container } from '@/styles/Container'
import { UserInfoForm } from '@/styles/UserInfoForm'
import { Button } from '@/styles/Button'
import { LabelTitle, Subtext, SignupTitle } from '@/styles/Text'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { signupActions } from '@/redux/reducers/signupSlice'
import { useAppSelector } from '@/redux/hooks'
import { InputWrap } from '@/styles/Input'

const WeightInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 20px;

  input {
    width: 200px;
    height: 48px;
    border: none;
    border-radius: 8px;
    background-color: var(--purple50);
    padding: 0 10px;
  }

  .helper-txt {
    margin-top: 15px;
    font-weight: var(--font-regular);
    text-decoration-line: underline;
  }
`

const page = () => {
  const title = '목표 설정'
  const router = useRouter()
  const dispatch = useDispatch()
  const states = useAppSelector((state) => state.signup)
  let helperTextFlag = false
  let helperText = ""
  
  const [inputData, setInputData] = useState({
    name: "",
    year: "",
    month: "",
    date: "",
    gender: "",
    nickname: "",
    height: "",
    weight: "",
    meal_plan: "",
    workout_plan: "",
    weight_plan: ""
  })

  interface Input {
    name: string,
    year: string,
    month: string,
    date: string,
    gender: string,
    nickname: string,
    height: string,
    weight: string,
    meal_plan: string,
    workout_plan: string,
    weight_plan: string
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData, 
      weight_plan: event.target.value
    })
  }

  // useEffect(() => {

  // }, [inputData.weight_plan])

  const handleNext = () => {
    dispatch(signupActions.saveSignupState({
      weight_plan: inputData.weight_plan,
    }))

    router.push(`/member/signup/step5`)
  }
  
  useEffect(() => {
    // const step1 = JSON.parse(sessionStorage.getItem('member_login_step1') || '{}') 
    // const step2 = JSON.parse(sessionStorage.getItem('member_login_step2') || '{}') 
    // const step3 = JSON.parse(sessionStorage.getItem('member_login_step3') || '{}') 
    // const step4 = JSON.parse(sessionStorage.getItem('member_login_step4') || '{}') 
    // const data = Object.assign(step1, step2, step3, step4)

    // setInputData({...inputData, ...data})
    // console.log('states: ', states);
  }, [])

  return (
  <Container>
    <PageTitle title={title}/>
    <JoinStep active={'4'}/>
    <UserInfoForm>
      <div>
        <div className='title'>
          <SignupTitle>나의 목표를 설정해주세요!</SignupTitle>
          <Subtext>회원님의 목표 체중을 알려주세요.</Subtext>
        </div>
        <div>
          <WeightInput>
            <LabelTitle>목표체중</LabelTitle>
            <InputWrap>
              <input 
                type="text" 
                name="" 
                id="" 
                onChange={handleInputChange}
              />
              <span>kg</span>
            </InputWrap>
            <div className='helper-txt'>
              {`현재 체중에서 -${Number(states.weight) - Number(inputData.weight_plan)}kg 감량이 목표시군요!`}
            </div>
          </WeightInput>
        </div>
      </div>
      <div>
        <Button 
          variant='primary' 
          onClick={handleNext}
        >다음</Button>
      </div>
    </UserInfoForm>
  </Container>
  )
}

export default page;