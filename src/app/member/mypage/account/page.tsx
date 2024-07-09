'use client';

import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import { BaseContentWrap, ContentSection } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { api } from "@/utils/axios";
import { getCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MenuList } from "../styles";
import { logout } from "@/services/member/auth";

const page = () => {
  const title = "계정관리"
  const router = useRouter()

  const handleWithdrawl = async () => {
    try {
      const response = await api.delete('/api/v1/members/withdrawal')
      if (response.status === 200) {
        alert("회원 탈퇴가 완료되었습니다.")
        router.push('/')
      }
    } catch (error) {
      console.log('error: ', error);

    }
  }


  const handleLogout = async () => {
    try {
      await logout();
      router.push('/')
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
      <Header title={title} back={true} />
      <BaseContentWrap>
        <ContentSection>
          <ul>
            <MenuList onClick={handleLogout}>
              <div>로그아웃</div>
            </MenuList>
            <MenuList onClick={handleWithdrawl}>
              <div>계정삭제</div>
            </MenuList>
          </ul>
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page