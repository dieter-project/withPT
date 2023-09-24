'use client'

import PageTitle from '@/components/PageTitle'
import { Button } from '@/styles/Button'
import { Container } from '@/styles/Container'
import { Subtext, SignupTitle } from '@/styles/Text'
import { useRouter } from 'next/navigation'
import React from 'react'
import { styled } from 'styled-components'

const FinishedPageWrap = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const page = () => {
  const title = '가입 완료'
  const router = useRouter()

  return (
  <Container>
    <PageTitle title={title}/>
    <FinishedPageWrap>
      <img src="" alt="" />
      <div>
        <SignupTitle>회원가입이 완료 되었어요!</SignupTitle>
        <Subtext>함께 목표를 향해 열심히 노력해보아요 :)</Subtext>
      </div>
      <div>
        <Button variant='primary' onClick={() => router.push('/')}>위피티 시작하기</Button>
      </div>
    </FinishedPageWrap>
  </Container>
  )
}

export default page;