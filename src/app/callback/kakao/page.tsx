'use client'
import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from 'react-redux';
import { api } from '@/utils/axios';
import { signupActions } from '@/redux/reducers/signupSlice';
import { setCookie } from '@/utils/cookie';
import { memberActions } from '@/redux/reducers/memberSlice';

export default function page () {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const code = searchParams.get('code');
  const sessionRole = window.sessionStorage.getItem('role');
  const localRole = window.localStorage.getItem('role');
  
  const handleGetAuthCode = async () => {
    let role = sessionRole || localRole
    try {
      const { data: { data } } = await api.post('/api/v1/oauth/kakao',{
        authorizationCode: code,
        role: "MEMBER"
      })
      // console.log('response: ', data);
      
      if (data.accessToken && data.refreshToken) {
        setCookie('access', data.accessToken, { path: "/" })
        setCookie('refreshToken', data.refreshToken, { path: "/" })
        router.replace('/member/main')
      } else {
        dispatch(signupActions.saveSignupState({
          email: data.email,
          authProvider: data.authProvider,
          role: data.role,
        }))
        router.replace('/member/signup/step1')
      }

      dispatch(memberActions.isLogin({
        id: data.id,
        name: data.name,
      }))
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
