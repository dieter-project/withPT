'use client';
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  max-width: 480px;
  height: auto;
  margin: 0 auto;
  padding: 0 20px;
`
const Button = styled.div`
  width: 100%;
  height: 45px;
  border: 1px solid #e8e8e8;
  text-align: center;
  line-height: 2.5rem;
`

const handleKakaoLogin = () => {
  
}

const page = () => {
  return (
    <Container>
      <div>
        <h1>로고</h1>
        <Button>카카오로 시작하기</Button>
        <Button>구글로 시작하기</Button>
        <a href="/">문의하기</a>
        <div>
          <p>혹시 회원이신가요?</p>
          <a href="/">회원 회원가입</a>
        </div>
      </div>
    </Container>
  )
}

export default page