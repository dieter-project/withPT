'use client';

import PageTitle from '@/components/PageTitle';
import { BaseContentWrap } from '@/styles/Layout';
import { getCsrfToken, signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'

const LogoWrap = styled.div`
  text-align: center;
  margin: 130px 0 100px;
`
const LogninButton = styled.button`
  width: 100%;
  height: 56px;
  text-align: center;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`

const KakaoLoginButton = styled(LogninButton)`
  background-color: #FEE500;
  &::before {
    display: block;
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    background: url(/svgs/icon_kakao.svg) no-repeat;
    background-position: center;
    background-size: contain;
  }
`

const GoogleLoginButton = styled(LogninButton)`
  border: 1px solid var(--border-gray);
  &::before {
    display: block;
    content: "";
    width: 1.375rem;
    height: 1.375rem;
    background: url(/svgs/icon_google.svg) no-repeat;
    background-position: center;
    background-size: contain;
  }
`

const LoginButtonWrap = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`

const page = () => {

  useEffect(()=>{
    
  }, [])

  const onKakaoSocialLogin = ():any => {
    const redirectUri = 'http://localhost:3000/callback/kakao'
    const restApiKey = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`
    window.location.href=kakaoURL
}
  
  return (
    <>
      <PageTitle title=''/>
      <BaseContentWrap>
        <LogoWrap>로고</LogoWrap>
        <LoginButtonWrap>
          <KakaoLoginButton 
            // onClick={() => signIn('kakao')}
            onClick={onKakaoSocialLogin}
          >카카오톡으로 시작하기</KakaoLoginButton>
          <GoogleLoginButton onClick={() => signIn('google')}>Google로 시작하기</GoogleLoginButton>
          <div className='login'>
            {/* <Link href="/">로그인</Link> */}
            <Link href="/">문의하기</Link>
          </div>
        </LoginButtonWrap>
      </BaseContentWrap>
    </>
  )
}

export default page