"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { BaseContentWrap } from "@/styles/Layout";
import {
  GoogleLoginButton,
  KakaoLoginButton,
  LoginButtonWrap,
  LogoWrap,
  WePTLogoImg,
} from "./style";
import WePTLogo from "public/icons/weptLogo.png";

const page = () => {
  const onGoogleSocialLogin = (): any => {
    const redirectUri = "http://localhost:3000/api/callback/google";
    const restApiKey = process.env.GOOGLE_CLIENT_ID;
    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=393755297276-okv1n31pe5lm29819tolnkrq5annv4lk.apps.googleusercontent.com&redirect_uri=${redirectUri}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
    window.location.href = googleURL;
  };

  return (
    <>
      <PageTitle title="" />
      <BaseContentWrap>
        <LogoWrap>
          <WePTLogoImg
            src={WePTLogo}
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
        </LoginButtonWrap>
      </BaseContentWrap>
    </>
  );
};

export default page;
