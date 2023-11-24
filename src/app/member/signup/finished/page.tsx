'use client'

import PageTitle from '@/components/PageTitle'
import { Button } from '@/styles/Button'
import { BaseContentWrap, ButtonAreaFixed } from '@/styles/Layout'
import { SignUpSubtext, SignUpTitleText } from '@/styles/Text'
import { useRouter } from 'next/navigation'
import React from 'react'
import { styled } from 'styled-components'

const FinishedPageWrap = styled(BaseContentWrap)`
  width: 100%;
  height: calc(100vh - 11.25rem);
  text-align: center;
  display: flex;
  flex-direction: column;
`

const page = () => {
  const title = '가입 완료'
  const router = useRouter()
  const role = window.sessionStorage.getItem('role')

  const handleStart = () => {
    if (role === 'MEMBER') {
      window.localStorage.setItem('role', 'MEMBER')  
      router.replace('/member/main')
    }
    if (role === 'TRAINER') {
      window.localStorage.setItem('role', 'TRAINER')  
      router.replace('/trainer/main')
    }
  }
  return (
  <>
    <PageTitle title={title}/>
    <FinishedPageWrap>
      <img src="" alt="" />
      <div>
        <SignUpTitleText>회원가입이 완료 되었어요!</SignUpTitleText>
        <SignUpSubtext>함께 목표를 향해 열심히 노력해보아요 :)</SignUpSubtext>
      </div>
      <ButtonAreaFixed nav={true}>
        <Button variant='primary' onClick={handleStart}>위피티 시작하기</Button>
      </ButtonAreaFixed>
    </FinishedPageWrap>
  </>
  )
}

export default page;