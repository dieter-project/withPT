"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { BaseContentWrap } from "@/styles/Layout";
import { useSession, signIn, signOut } from "next-auth/react";
import WePTLogo from "../../../../public/icons/weptLogo.png";
import {
  GoogleLoginButton,
  KakaoLoginButton,
  LoginButtonWrap,
  LogoWrap,
  WePTLogoImg,
} from "./style";

const page = () => {
  const onGoogleSocialLogin = (): any => {
    const redirectUri = "http://localhost:3000/api/callback/google";
    const restApiKey = process.env.GOOGLE_CLIENT_ID;
    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=393755297276-okv1n31pe5lm29819tolnkrq5annv4lk.apps.googleusercontent.com&redirect_uri=${redirectUri}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
    window.location.href = googleURL;
  };

  const switchToTrainer = () => {
    // 트레이너로 전환될 때 whitelist에 trainer, trainersignup 추가
    persistor.persist().then(() => {
      persistor.updateRehydratedNames(["trainer", "trainersignup"]);
    });
    // 추가적으로 필요한 작업 수행
  };

  return (
    <>
      <BaseContentWrap>
        <LogoWrap>
          <WePTLogoImg
            src={WePTLogo}
            alt="위피티 메인 로고"
            width={96}
            height={138}
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
          <div className="login">
            <Link href="/">문의하기</Link>
          </div>
        </LoginButtonWrap>
      </BaseContentWrap>
    </>
  );
};

export default page;
