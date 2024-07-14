'use client';

import PageHeader from '@/components/PageHeader';
import { BaseContentWrap } from '@/styles/Layout';
import { getCsrfToken, signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { GoogleLoginButton, KakaoLoginButton, LoginButtonWrap, LogoWrap } from './style';
import Image from 'next/image';


const page = () => {

  useEffect(() => {

  }, [])

  const onKakaoSocialLogin = (): any => {
    const redirectUri = 'http://localhost:3000/callback/kakao'
    const restApiKey = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`
    window.location.href = kakaoURL
  }

  return (
    <>
      <PageHeader title='' />
      <BaseContentWrap>
        <LogoWrap>
          <Image 
            src={'/images/symbol_logo_vertical.png'}
            width={96}
            height={138}
            alt='logo'
          />
        </LogoWrap>
        <LoginButtonWrap>
          <KakaoLoginButton
            // onClick={() => signIn('kakao')}
            onClick={onKakaoSocialLogin}
          >카카오톡으로 시작하기</KakaoLoginButton>
          <GoogleLoginButton
            onClick={() => signIn('google')}>
            Google로 시작하기
          </GoogleLoginButton>
        </LoginButtonWrap>
      </BaseContentWrap>
    </>
  )
}

export default page