'use client'

import React, { useEffect, useState } from 'react'
import PageTitle from '@/components/PageTitle'
import { useAppSelector } from '@/redux/hooks'
import { Button } from '@/styles/Button'
import { BaseContentWrap, ButtonAreaFixed } from '@/styles/Layout'
import { SignUpTitleWrap } from '@/styles/SignupForm'
import { SignUpTitleText, SignUpSubtext } from '@/styles/Text'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { exerciseFrequency } from '@/constants/signup'
import { RadioButton, RecommendBadge } from '@/app/member/signup/step4/styles'
import { getMemberInfo, patchMemberExercise } from '@/services/member/member'

const page = () => {
  const title = '목표 설정'
  const router = useRouter()

  const [inputData, setInputData] = useState({
    exerciseFrequency: ""
  })
  
  const getWorkout = async () => {
    const { data: { data } } = await getMemberInfo()
    setInputData({...inputData, exerciseFrequency: data.exerciseFrequency})
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      exerciseFrequency: event.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      await patchMemberExercise(inputData)
      router.replace('/member/mypage')
    } catch (error) {
      console.log('error: ', error);
    }
  }

  useEffect(() => {
    getWorkout()
  }, [])

  return (
    <>
      <PageTitle title={title} />
      <BaseContentWrap>
        <div>
          <SignUpTitleWrap>
            <SignUpTitleText>운동 목표를 수정해주세요.</SignUpTitleText>
            <SignUpSubtext>운동을 주 몇 회를 생각하시나요?</SignUpSubtext>
          </SignUpTitleWrap>
          <RadioButton>
            {
              exerciseFrequency?.map((time, index) => {
                return (
                  <label>
                    <input
                      key={index}
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