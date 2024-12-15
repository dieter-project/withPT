'use client';

import React from 'react'
import PageHeader from '@/components/PageHeader';
import { BaseContentWrap } from '@/styles/Layout';
import { signIn } from 'next-auth/react';
import { GoogleLoginButton, KakaoLoginButton, LoginButtonWrap, LogoWrap } from './style';
import Image from 'next/image';
import { api } from '@/utils/axios';
import { useRouter } from 'next/navigation';


const page = () => {
  const route = useRouter()

  const onKakaoSocialLogin = (): any => {
    const redirectUri = 'http://localhost:3000/callback/kakao'
    const restApiKey = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`
    window.location.href = kakaoURL
  }

  const handleEmailLogin = async () => {
    try {
      const response = await api.post('/api/v1/auth/login', {
        email: 'member@test.com',
        password: 'member1234',
        role: 'MEMBER'
      })
      if (response.status === 200) route.replace('/member/main')
    } catch (err) {}
  }

  return (
    <>
      <PageHeader title='' back={true}/>
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
          <button style={{fontSize: '14px'}} onClick={handleEmailLogin}>email 로그인</button>
        </LoginButtonWrap>
      </BaseContentWrap>
    </>
  )
}

export default page