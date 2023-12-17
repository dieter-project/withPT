'use client'

import PageTitle from '@/components/PageTitle'
import { Button } from '@/styles/Button'
import { BaseContentWrap, ButtonAreaFixed } from '@/styles/Layout'
import { SignUpSubtext, SignUpTitleText } from '@/styles/Text'
import { useRouter } from 'next/navigation'
import React from 'react'
import { keyframes, styled } from 'styled-components'

const FinishedPageWrap = styled(BaseContentWrap)`
  width: 100%;
  height: calc(100vh - 11.25rem);
  text-align: center;
  display: flex;
  flex-direction: column;
`

const draw = keyframes`
  to {
    stroke-dashoffset: 0
  }
`

const CheckAnimation = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1.25rem;
    width: 1.25rem;

    path {
      fill: none;
      stroke: var(--white);
      stroke-width: 4;
      stroke-dasharray: 23;
      stroke-dashoffset: 23;
      animation: ${draw} 0.5s linear forwards;
      stroke-linecap: round;
      stroke-linejoin: round
    }
  }
`

const CheckWrap = styled.div`
  width: 100%;
  margin: 3rem auto 1rem;
  display: flex;
  justify-content: center;
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
      <PageTitle title={title} />
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
        <ButtonAreaFixed nav={true.toString()}>
          <Button variant='primary' onClick={handleStart}>위피티 시작하기</Button>
        </ButtonAreaFixed>
      </FinishedPageWrap>
    </>
  )
}

export default page;