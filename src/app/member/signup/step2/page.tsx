'use client'

import PageTitle from '@/components/PageTitle'
import JoinStep from '@/components/SignUpStep'
import { signupActions } from '@/redux/reducers/signupSlice'
import { Button } from '@/styles/Button'
import { Container } from '@/styles/Container'
import { Input, InputRowWrap, InputWrap } from '@/styles/Input'
import { LabelTitle, Subtext, SignupTitle } from '@/styles/Text'
import { UserInfoForm } from '@/styles/UserInfoForm'
import { api } from '@/utils/axios'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'

const NicknameCheckButton = styled.button`
  height: 48px;
  min-width: 112px;
  background-color: var(--purple50);
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 8px;
`

const page = () => {
  const [inputData, setInputData] = useState({
    nickname: "",
    height: "",
    weight: "",
  })

  const title = '정보 입력'
  const router = useRouter()
  const dispatch = useDispatch();

  const handleNicknameCheck = async () => {
    if (inputData.nickname.trim().length <= 0) {
      alert('닉네임을 작성해주세요')
      return false;
    };

    try {
      const response = await api.post(`/api/v1/members/nickname/check`, {
        nickname: inputData.nickname
      })
      
      console.log('response: ', response);
    } catch (error) {
      console.log(error)
    }
  }

  const handleNext = () => {
    // if (inputData.nickname.trim() === "") return false;
    // if (inputData.height.trim() === "") return false;
    // if (inputData.weight.trim() === "") return false;
    dispatch(signupActions.saveSignupState({
      nickname: inputData.nickname,
      height: inputData.height,
      weight: inputData.weight
    }))
    // sessionStorage.setItem('member_login_step2', JSON.stringify(inputData))
    router.push(`/member/signup/step3`)
  }

  useEffect(() => {
    // const session = sessionStorage.getItem('member_login_step2')
    // const sessionObj = JSON.parse(session || '{}')
    
    // if(sessionObj !== null) {
    //   setInputData({
    //     ...inputData, 
    //     nickname: sessionObj.nickname,
    //     height: sessionObj.height,
    //     weight: sessionObj.weight,
    //   })
    // }
    
  }, [])

  return (
    <Container>
      <PageTitle title={title}/>
      <JoinStep active={'2'}/>
      <UserInfoForm>
        <div>
          <div className='title'>
            <SignupTitle>간단한 정보를 입력해주세요!</SignupTitle>
            <Subtext>앱 사용을 위해 필요한 기본정보입니다.</Subtext>
          </div>
          <div>
            <LabelTitle>닉네임</LabelTitle>
            <InputRowWrap>
              <Input 
                type="text" 
                value={inputData.nickname} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setInputData({...inputData, nickname: event.target.value})
                }}
              />
              <NicknameCheckButton 
                onClick={handleNicknameCheck}
              >중복확인</NicknameCheckButton>
            </InputRowWrap>
          </div>
          <div>
            <LabelTitle>키, 몸무게</LabelTitle>
            <InputRowWrap>
              <InputWrap>
                <Input 
                  type="text" 
                  value={inputData.height} 
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setInputData({...inputData, height: event.target.value})
                  }}
                />
                <span>cm</span>
              </InputWrap>
              /
              <InputWrap>
                <Input 
                  type="text" 
                  value={inputData.weight} 
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setInputData({...inputData, weight: event.target.value})
                  }}
                />
                <span>kg</span>
              </InputWrap>
            </InputRowWrap>
          </div>
        </div>
        <Button 
          variant='primary' 
          onClick={handleNext}
        >다음</Button>
      </UserInfoForm>
    </Container>
  )
}

export default page;