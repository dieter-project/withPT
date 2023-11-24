'use client';

import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import { BaseContentWrap } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { api } from "@/utils/axios";
import { getCookie } from "@/utils/cookie";
import { useEffect } from "react";

const page = () => {
  const title = "계정관리"

  const handleWithdrawl = async () => {
    try {
      const response = await api.delete('/api/v1/members/withdrawal')
      console.log('data: ', response);
    } catch (error) {
      console.log('error: ', error);

    }
  }
  useEffect(() => {
    const token = getCookie('access')
    console.log('token: ', token);
  }, [])
  
  return (
    <>
      <Header title={title} back={true}/>
      <BaseContentWrap>
        <div onClick={handleWithdrawl}>회원탈퇴</div>
      </BaseContentWrap>
    </>
  )
}

export default page