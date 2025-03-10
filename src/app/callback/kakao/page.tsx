'use client'
import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from 'react-redux';
import { signupActions } from '@/redux/reducers/signupSlice';
import { setCookie } from '@/utils/cookie';
import { memberActions } from '@/redux/reducers/memberSlice';
import { requestKakaoLogin } from '@/services/member/auth';

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
      const { data: { data } } = await requestKakaoLogin({
        authorizationCode: code || '',
        role: role || ''
      })
      // console.log('response: ', data);
      
      if (data.loginInfo.accessToken && data.loginInfo.refreshToken) {
        setCookie('access', data.loginInfo.accessToken, { path: "/" })
        setCookie('refreshToken', data.loginInfo.refreshToken, { path: "/" })
        router.replace('/member/main')
      } else {
        dispatch(signupActions.saveSignupState({
          email: data.loginInfo.email,
          authProvider: data.loginInfo.authProvider,
          role: data.loginInfo.role,
        }))
        router.replace('/member/signup/step1')
      }

      dispatch(memberActions.isLogin({
        id: data.loginInfo.id,
        name: data.loginInfo.name,
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
