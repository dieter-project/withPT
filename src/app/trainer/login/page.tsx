"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { BaseContentWrap } from "@/styles/Layout";
import {
  GoogleLoginButton,
  KakaoLoginButton,
  LoginButtonWrap,
  LogoWrap,
  WePTLogoImg,
} from "./style";
import { setCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const route = useRouter();

  const onGoogleSocialLogin = (): any => {
    const redirectUri = "http://localhost:3000/api/callback/google";
    const restApiKey = process.env.GOOGLE_CLIENT_ID;
    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=393755297276-okv1n31pe5lm29819tolnkrq5annv4lk.apps.googleusercontent.com&redirect_uri=${redirectUri}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
    window.location.href = googleURL;
  };

  const handleEmailLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
        {
          email: "trainer@test.com",
          password: "trainer1234",
          role: "TRAINER",
        },
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            withCredentials: true,
          },
        },
      );
      if (response.status === 200) {
        const accessToken = response.data.data.loginInfo.accessToken;
        const refreshToken = response.data.data.loginInfo.refreshToken;
        setCookie("access", accessToken);
        setCookie("refreshToken", refreshToken);
        route.replace("/trainer/main");
      }
    } catch (err) {}
  };

  return (
    <>
      <PageHeader title="" back={true} />
      <BaseContentWrap>
        <LogoWrap>
          <WePTLogoImg
            src={"/images/symbol_logo_vertical.png"}
            width={96}
            height={138}
            alt="위피티 메인 로고"
          />
        </LogoWrap>
        <LoginButtonWrap>
          <KakaoLoginButton
          // onClick={onKakaoSocialLogin}
          >
            카카오톡으로 시작하기
          </KakaoLoginButton>
          <GoogleLoginButton onClick={onGoogleSocialLogin}>
            Google로 시작하기
          </GoogleLoginButton>
          <button style={{ fontSize: "14px" }} onClick={handleEmailLogin}>
            email 로그인
          </button>
        </LoginButtonWrap>
      </BaseContentWrap>
    </>
  );
};

export default page;
