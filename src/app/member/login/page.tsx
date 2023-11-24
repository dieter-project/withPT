'use client';

import { Container } from '@/styles/Container';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'


const KakaoLogninButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: #FEE500;
  text-align: center;
  border-radius: 8px;
  margin: 4px 0;
`

const GoogleLogninButton = styled.button`
  width: 100%;
  height: 56px;
  border: 1px solid var(--border-gray);
  text-align: center;
  border-radius: 8px;
  margin: 4px 0;
`

const LoginPageWrap = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin-top: 240px;
  }

  .login {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    a {
      color: var(--font-gray700);
      font-size: var(--font-s);
      /* &:first-child{
        position: relative;
        margin-right: 20px;
        &::after{
          content: '';
          display: block;
          width: 1px;
          height: 11px;
          position: absolute;
          top: 50%;
          right: -10px;
          transform: translateY(-50%);
          background-color: #666666;
        }
      } */
    }
  }

  .bottom {
    margin-bottom: 80px;
    div {
      color: #ACACAC;
      font-size: 12px;
    }
    a {
      text-decoration: underline;
    }
  }
`

const page = () => {
  const { data: session } = useSession();

  useEffect(()=>{
    console.log('session: ', session);
  }, [])
  
  return (
    <Container>
      <LoginPageWrap>
        <h1>로고</h1>
        <div>
          <KakaoLogninButton onClick={() => signIn('kakao')}>카카오톡으로 시작하기</KakaoLogninButton>
          <GoogleLogninButton onClick={() => signIn('google')}>Google로 시작하기</GoogleLogninButton>
          <div className='login'>
            {/* <Link href="/">로그인</Link> */}
            <Link href="/">문의하기</Link>
          </div>
        </div>
        <div className='bottom'>
          <div>혹시 트레이너이신가요?</div>
          <a href="/">트레이너 회원가입</a>
        </div>
      </LoginPageWrap>
    </Container>
  )
}

export default page