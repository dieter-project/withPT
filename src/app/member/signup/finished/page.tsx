"use client";

import PageHeader from '@/components/PageHeader'
import { Button } from '@/styles/Button'
import { ButtonAreaFixed } from '@/styles/Layout'
import { SignUpSubtext, SignUpTitleText } from '@/styles/Text'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CheckAnimation, CheckWrap, FinishedPageWrap } from './styles';

const page = () => {
  const title = '가입 완료'
  const router = useRouter()
  const role = window.localStorage.getItem('role')
  
  const handleStart = () => {
    window.sessionStorage.removeItem('role')
    if (role === 'MEMBER') {
      router.replace('/member/main')
    }
    if (role === 'TRAINER') {
      router.replace('/trainer/main')
    }
  };
  return (
    <>
      <PageHeader back={true} title={title} />
      <FinishedPageWrap>
        <img src="" alt="" />
        <CheckWrap>
          <CheckAnimation>
            <svg viewBox="0 0 24 24">
              <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
            </svg>
          </CheckAnimation>
        </CheckWrap>
        <div>
          <SignUpTitleText>회원가입이 완료 되었어요!</SignUpTitleText>
          <SignUpSubtext>함께 목표를 향해 열심히 노력해보아요 :)</SignUpSubtext>
        </div>
        <ButtonAreaFixed $nav>
          <Button $variant='primary' onClick={handleStart}>위피티 시작하기</Button>
        </ButtonAreaFixed>
      </FinishedPageWrap>
    </>
  )
}

export default page;
