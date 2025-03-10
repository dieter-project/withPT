'use client'

import { DietIcon, DietText, RadioButton } from '@/app/member/signup/step2/styles'
import PageHeader from '@/components/PageHeader'
import { targetDiet } from '@/constants/signup'
import { useAppSelector } from '@/redux/hooks'
import { reqGetMemberInfo, reqPatchMemberDiet } from '@/services/member/member'
import { Button } from '@/styles/Button'
import { BaseContentWrap, ButtonAreaFixed } from '@/styles/Layout'
import { SignUpInputContainer } from '@/styles/SignupForm'
import { SignUpTitleText, SignUpSubtext } from '@/styles/Text'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const title = '식단 설정'
  const router = useRouter()
  const [inputData, setInputData] = useState({
    dietType: ""
  })

  const getDiet = async () => {
    const { data: { data } } = await reqGetMemberInfo()
    setInputData({ ...inputData, dietType: data.dietType })
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, dietType: event.target.value })
  }

  const handleSubmit = async () => {
    try {
      await reqPatchMemberDiet(inputData);
      router.push(`/member/mypage`)
    } catch (error) {
      console.log('error: ', error);
    }
  }

  useEffect(() => {
    getDiet()
  }, [])

  return (
    <>
      <PageHeader back={true} title={title} />
      <BaseContentWrap>
        <div>
          <SignUpInputContainer>
            <SignUpTitleText>변경할 식단을 선택해주세요.</SignUpTitleText>
            <SignUpSubtext>어떤 식단으로 진행하시나요?</SignUpSubtext>
          </SignUpInputContainer>
          <RadioButton>
            {
              targetDiet?.map((diet, index) => {
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="diet"
                      value={diet.vlaue}
                      onChange={handleOnChange}
                      checked={inputData.dietType === diet.vlaue}
                    />
                    <div className='diet-item'>
                      <DietText>
                        <h3>{diet.title}</h3>
                        <div>{diet.subtitle}</div>
                        <p>{diet.balance}</p>
                      </DietText>
                      <DietIcon style={{
                        background: `url(${diet.icon}) no-repeat`,
                        backgroundColor: "white",
                        backgroundPosition: "center"
                      }} />
                    </div>
                  </label>
                )
              })
            }
          </RadioButton>
        </div>
        <ButtonAreaFixed $nav={true}>
          <Button $variant="primary" onClick={handleSubmit}>저장하기</Button>
        </ButtonAreaFixed>
      </BaseContentWrap>
    </>
  )
}

export default page;