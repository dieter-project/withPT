'use client'

import PageTitle from '@/components/PageTitle'
import JoinStep from '@/components/SignUpStep'
import { signupActions } from '@/redux/reducers/signupSlice'
import { Button } from '@/styles/Button'
import { Container } from '@/styles/Container'
import { Subtext, SignupTitle } from '@/styles/Text'
import { UserInfoForm } from '@/styles/UserInfoForm'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'

const RadioButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;

  input[type='radio'] {
    display: none;
  }
  
  input[type='radio'] + .meal-item {
    width: 100%;
    height: 104px;
    overflow: hidden;
    padding: 16px;
    background-color: var(--purple50);
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h3 {
      font-weight: var(--font-semibold);
    }
    div {
      font-size: 12px;
      font-weight: var(--font-semibold);
      margin-top: 10px;
    }
    p {
      font-size: 12px;
      font-weight:  var(--font-regular);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  input[type='radio']:checked + .meal-item {
    background-color: var(--primary);
    height: auto;
    color: var(--white);
    p {
      white-space: normal;
    }
  }
`

const page = () => {
  const title = '식단 설정'
  const router = useRouter()
  const dispatch = useDispatch()
  const [inputData, setInputData] = useState({
    meal_plan: ""
  })

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({...inputData, meal_plan: event.target.value})
  }

  const handleNext = () => {
    // if (inputData.meal_plan === "") return false;
    dispatch(signupActions.saveSignupState({
      meal_plan: inputData.meal_plan,
    }))
    // sessionStorage.setItem('member_login_step3', JSON.stringify(inputData))
    router.push(`/member/signup/step4`)
  }

  return (
  <Container>
    <PageTitle title={title}/>
    <JoinStep active={'3'}/>
    <UserInfoForm>
      <div>
        <div className='title'>
          <SignupTitle>목표식단을 선택해주세요.</SignupTitle>
          <Subtext>어떤 식단으로 진행하시나요?</Subtext>
        </div>
        <RadioButton>
          <label>
            <input type="radio" name="meal" value="1" onChange={handleOnChange}/>
            <div className='meal-item'>
              <h3>탄단지 식단</h3>
              <div>탄수화물 50%, 단백질 30%, 지방20%</div>
              <p>건강한 사람에게 적합한 균형잡힌 식단이예요 </p>
            </div>
          </label>
          <label>
            <input type="radio" name="meal" value="2" onChange={handleOnChange}/>
            <div className='meal-item'>
              <h3>단백질 식단</h3>
              <div>탄수화물 40%, 단백질 40%, 지방20%</div>
              <p>근육량을 늘리는데 도움이 되는 식단이예요</p>
            </div>
          </label>
          <label>
            <input type="radio" name="meal" value="3" onChange={handleOnChange}/>
            <div className='meal-item'>
              <h3>다이어트 식단</h3>
              <div>탄수화물 30%, 단백질 50%, 지방20%</div>
              <p>체지방 감소를 도와주는 식단이예요.체지방 감소를 도와주는 식단이예요.체지방 감소를 도와주는 식단이예요</p>
            </div>
          </label>
          <label>
            <input type="radio" name="meal" value="4" onChange={handleOnChange}/>
            <div className='meal-item'>
              <h3>키토 식단</h3>
              <div>탄수화물 10%, 단백질 20%, 지방70%</div>
              <p>탄수화물은 적게, 지방을 많이먹는 식단이예요</p>
            </div>
          </label>
        </RadioButton>
      </div>
      <div>
        <Button variant="primary" onClick={handleNext}>다음</Button>
      </div>
    </UserInfoForm>
  </Container>
  )
}

export default page;