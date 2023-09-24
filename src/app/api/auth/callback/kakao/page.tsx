'use client'
import React, { useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import axios from 'axios';
import { memberActions } from '@/redux/reducers/memberSlice'; 
import { useDispatch } from 'react-redux';
import { api } from '@/utils/axios';


export default function page () {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')
  const dispatch = useDispatch()

  const handleGetAuthCode = async () => {
    try {
      const response = await api.post('/api/v1/oauth/kakao',{
        authorizationCode: code,
        role: "MEMBER"
      })
      console.log('response: ', response);
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

    //code를 백엔드로 보내서 회원인지 아닌지 확인
    //확인 후 결과에 따라 로그인 페이지 혹은 메인으로 이동 시키기
  }, [])
  return (
    <div>page</div>
  )
}
