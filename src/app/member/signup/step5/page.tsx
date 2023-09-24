'use client'

import PageTitle from '@/components/PageTitle'
import JoinStep from '@/components/SignUpStep'
import { useAppSelector } from '@/redux/hooks'
import { signupActions } from '@/redux/reducers/signupSlice'
import { Button } from '@/styles/Button'
import { Container } from '@/styles/Container'
import { Subtext, SignupTitle, LabelTitle } from '@/styles/Text'
import { UserInfoForm } from '@/styles/UserInfoForm'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'

const RadioButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--font-gray500);
  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + span {
    width: 100%;
    height: 60px;
    border: 1px solid var(--border-gray);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-semibold);
    cursor: pointer;
  }

  input[type='radio']:checked + span {
    background-color: var(--purple50);
    border: 1px solid var(--primary);
    color: var(--primary);
  }

  label {
    position: relative;
    
    .recommend-badge {
      width: 45px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 6px;
      right: 9px;
      color: var(--white);
      font-size: 10px;
      font-weight: var(--font-semibold);
      background: var(--primary);
      border-radius: 4px;
    }
  }
`

const RecommendBadge = styled.div`
`

const page = () => {
  const title = '목표 설정'
  const router = useRouter()
  const dispatch = useDispatch()
  const states = useAppSelector((state) => state.signup)

  const [inputData, setInputData] = useState({
    workout_plan: ""
  })
  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({...inputData, workout_plan: event.target.value})
    // console.log('inputData: ', inputData);
  }

  const handleSubmit = () => {
    dispatch(signupActions.saveSignupState({
      workout_plan: inputData.workout_plan,
    }))
  }


  useEffect(() => {
    console.log('states: ', states);
  }, [])

  return (
  <Container>
    <PageTitle title={title}/>
    <JoinStep active={'5'}/>
    <UserInfoForm>
      <div>
        <div className='title'>
          <SignupTitle>나의 목표를 설정해주세요!</SignupTitle>
          <Subtext>운동을 주 몇 회를 생각하시나요?</Subtext>
        </div>
        <RadioButton>
          <label>
            <input 
              type="radio" 
              name="workout" 
              value="1" 
              onChange={handleOnChange}
            />
            <span>운동은 처음이라 잘 모르겠어요</span>
          </label>
          <label>
            <input 
              type="radio" 
              name="workout" 
              value="2" 
              onChange={handleOnChange}
            />
            <span>주 1~2회</span>
          </label>
          <label>
            <input 
              type="radio" 
              name="workout" 
              value="3" 
              onChange={handleOnChange}
            />
            <span>주 3회 이상</span>
            <div className='recommend-badge'>추천 목표</div>
          </label>
          <label>
            <input 
              type="radio" 
              name="workout" 
              value="4" 
              onChange={handleOnChange}
            />
            <span>주 5회 이상</span>
          </label>
          <label>
            <input 
              type="radio" 
              name="workout" 
              value="5" 
              onChange={handleOnChange}
            />
            <span>매일 운동할래요</span>
          </label>
        </RadioButton>
      </div>
      <div>
      <Button 
        variant='primary' 
        onClick={handleSubmit}
      >저장하기</Button>
      </div>
    </UserInfoForm>
  </Container>
  )
}

export default page;