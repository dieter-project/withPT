'use client'
import React, { useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import axios from 'axios';
import { memberActions } from '@/redux/reducers/memberSlice'; 
import { useDispatch } from 'react-redux';
import { api } from '@/utils/axios';
import { signupActions } from '@/redux/reducers/signupSlice';
import { setCookie } from '@/utils/cookie';

export default function page () {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  
  const code = searchParams.get('code');
  const role = window.sessionStorage.getItem('role');
  
  const handleGetAuthCode = async () => {
    try {
      const response = await api.post('/api/v1/oauth/kakao',{
        authorizationCode: code,
        role
      })
      
      if (response.data.accessToken) {
        setCookie('access', response.data.accessToken)
        router.replace('/member/main')
      } else {
        dispatch(signupActions.saveSignupState({
          email: response.data.email,
          oauthProvider: response.data.oauthProvider,
          role: response.data.role,
        }))
        router.replace('/member/signup/step1')
      }

      // dispatch(memberActions.isLogin({
      //   id: 'test',
      //   name: 'lee',
      //   email: 'test@test.kr'
      // }))
      // dispatch(memberActions.getToken('token'))
    } catch (error) {
      console.log('error: ', error);
    }
  }
  useEffect(()=>{
    console.log('code: ', code);
    handleGetAuthCode();
    // router.replace('/member/login')
    //code를 백엔드로 보내서 회원인지 아닌지 확인
    //확인 후 결과에 따라 로그인 페이지 혹은 메인으로 이동 시키기
  }, [])
  return (
    <div></div>
  )
}
